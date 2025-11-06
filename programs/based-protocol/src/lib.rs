use anchor_lang::prelude::*;
use anchor_spl::token::{Mint, Token};

declare_id!("DGVsFppxXqsuLPtF2oYvfh3uccdvGMGEVi4ZxuaQu5RU");

// Constants
const VESTING_DURATION: i64 = 31536000; // 12 months in seconds
const EARLY_WITHDRAWAL_PENALTY_BPS: u64 = 1000; // 10% penalty (basis points)
const MAX_MULTIPLIER_BPS: u64 = 10000; // 10X max multiplier (10000 = 10.00X)
const MULTIPLIER_GROWTH_RATE: u64 = 50; // 0.5% per week (50 bps)
const REFERRAL_REWARD_BPS: u64 = 1000; // 10% of penalties go to referrer
const PLATFORM_FEE_BPS: u64 = 200; // 2% platform fee

#[program]
pub mod based_protocol {
    use super::*;

    pub fn initialize_token(_ctx: Context<InitializeToken>) -> Result<()> {
        msg!("BASED Protocol: Token initialized");
        Ok(())
    }

    pub fn initialize_pool(ctx: Context<InitializePool>, reward_rate: u64) -> Result<()> {
        let pool = &mut ctx.accounts.pool;
        pool.authority = ctx.accounts.authority.key();
        pool.total_staked = 0;
        pool.reward_rate = reward_rate;
        pool.total_users = 0;
        pool.bump = ctx.bumps.pool;

        msg!("Staking pool initialized with {} reward_rate", reward_rate);
        Ok(())
    }

    // UPDATED: deposit with optional referrer
    pub fn deposit(ctx: Context<Deposit>, amount: u64, referrer: Option<Pubkey>) -> Result<()> {
        let clock = Clock::get()?;

        // Transfer SOL from user to pool
        let cpi_accounts = anchor_lang::system_program::Transfer {
            from: ctx.accounts.user.to_account_info(),
            to: ctx.accounts.pool.to_account_info(),
        };
        let cpi_ctx = CpiContext::new(ctx.accounts.system_program.to_account_info(), cpi_accounts);
        anchor_lang::system_program::transfer(cpi_ctx, amount)?;

        let pool = &mut ctx.accounts.pool;
        let user_stake = &mut ctx.accounts.user_stake;

        // Set referrer on FIRST deposit only
        if user_stake.amount == 0 {
            if let Some(ref_pubkey) = referrer {
                user_stake.referrer = Some(ref_pubkey);
                msg!("Referrer set: {:?}", ref_pubkey);
            }
            user_stake.vesting_start = clock.unix_timestamp;
            user_stake.multiplier_points = 0;
            pool.total_users = pool.total_users.checked_add(1).ok_or(ErrorCode::MathOverflow)?;
            user_stake.leaderboard_position = pool.total_users;
        } else {
            // Update multiplier based on time staked
            let time_since_last = clock.unix_timestamp - user_stake.last_stake_time;
            user_stake.total_time_staked = user_stake.total_time_staked
                .checked_add(time_since_last)
                .ok_or(ErrorCode::MathOverflow)?;

            let weeks_staked = user_stake.total_time_staked / 604800;
            let new_multiplier = (weeks_staked as u64)
                .checked_mul(MULTIPLIER_GROWTH_RATE)
                .ok_or(ErrorCode::MathOverflow)?
                .min(MAX_MULTIPLIER_BPS);

            user_stake.multiplier_points = new_multiplier;
        }

        pool.total_staked = pool.total_staked
            .checked_add(amount)
            .ok_or(ErrorCode::MathOverflow)?;

        user_stake.owner = ctx.accounts.user.key();
        user_stake.amount = user_stake.amount
            .checked_add(amount)
            .ok_or(ErrorCode::MathOverflow)?;
        user_stake.last_stake_time = clock.unix_timestamp;
        user_stake.bump = ctx.bumps.user_stake;

        msg!(
            "Deposited {} lamports. Total: {}. Multiplier: {} bps. Rank: {}",
            amount,
            user_stake.amount,
            user_stake.multiplier_points,
            user_stake.leaderboard_position
        );
        Ok(())
    }

    pub fn withdraw(ctx: Context<Withdraw>, amount: u64) -> Result<()> {
        let pool = &mut ctx.accounts.pool;
        let user_stake = &mut ctx.accounts.user_stake;
        let clock = Clock::get()?;

        require!(user_stake.amount >= amount, ErrorCode::InsufficientFunds);

        let time_staked = clock.unix_timestamp - user_stake.vesting_start;

        let penalty_amount = if time_staked < (VESTING_DURATION / 2) {
            amount
                .checked_mul(EARLY_WITHDRAWAL_PENALTY_BPS)
                .ok_or(ErrorCode::MathOverflow)?
                .checked_div(10_000)
                .ok_or(ErrorCode::MathOverflow)?
        } else if time_staked < VESTING_DURATION {
            amount
                .checked_mul(500)
                .ok_or(ErrorCode::MathOverflow)?
                .checked_div(10_000)
                .ok_or(ErrorCode::MathOverflow)?
        } else {
            0
        };

        let withdrawal_amount = amount.checked_sub(penalty_amount).ok_or(ErrorCode::MathOverflow)?;

        // If user has referrer, give them 10% of penalty
        if penalty_amount > 0 && user_stake.referrer.is_some() {
            let referral_reward = penalty_amount
                .checked_mul(REFERRAL_REWARD_BPS)
                .ok_or(ErrorCode::MathOverflow)?
                .checked_div(10_000)
                .ok_or(ErrorCode::MathOverflow)?;
            
            user_stake.referral_rewards_pending = user_stake.referral_rewards_pending
                .checked_add(referral_reward)
                .ok_or(ErrorCode::MathOverflow)?;
            
            msg!("Referrer earned {} lamports from penalty", referral_reward);
        }

        **pool.to_account_info().try_borrow_mut_lamports()? = pool
            .to_account_info()
            .lamports()
            .checked_sub(withdrawal_amount)
            .ok_or(ErrorCode::InsufficientFunds)?;

        **ctx.accounts.user.to_account_info().try_borrow_mut_lamports()? = ctx
            .accounts
            .user
            .to_account_info()
            .lamports()
            .checked_add(withdrawal_amount)
            .ok_or(ErrorCode::MathOverflow)?;

        pool.total_staked = pool.total_staked.checked_sub(amount).ok_or(ErrorCode::MathOverflow)?;
        user_stake.amount = user_stake.amount.checked_sub(amount).ok_or(ErrorCode::MathOverflow)?;

        if user_stake.amount == 0 {
            user_stake.multiplier_points = 0;
            user_stake.total_time_staked = 0;
        }

        msg!(
            "Withdrew {} lamports. Penalty: {}. Net: {}. Remaining: {}",
            amount,
            penalty_amount,
            withdrawal_amount,
            user_stake.amount
        );
        Ok(())
    }

    pub fn claim_rewards(ctx: Context<ClaimRewards>) -> Result<()> {
        let pool = &ctx.accounts.pool;
        let user_stake = &mut ctx.accounts.user_stake;
        let clock = Clock::get()?;

        let time_staked_i64 = clock
            .unix_timestamp
            .checked_sub(user_stake.last_stake_time)
            .ok_or(ErrorCode::TimeCalculationError)?;
        require!(time_staked_i64 >= 0, ErrorCode::TimeCalculationError);

        let time_staked = time_staked_i64 as u128;
        let user_amount = user_stake.amount as u128;
        let reward_rate = pool.reward_rate as u128;
        let base_multiplier: u128 = 5000;
        let total_multiplier = base_multiplier + (user_stake.multiplier_points as u128);

        const YEAR_SECONDS: u128 = 31_536_000u128;

        let base_rewards = user_amount
            .checked_mul(reward_rate)
            .ok_or(ErrorCode::MathOverflow)?
            .checked_mul(time_staked)
            .ok_or(ErrorCode::MathOverflow)?
            .checked_div(10_000u128)
            .ok_or(ErrorCode::MathOverflow)?
            .checked_div(YEAR_SECONDS)
            .ok_or(ErrorCode::MathOverflow)?;

        let total_rewards = base_rewards
            .checked_mul(total_multiplier)
            .ok_or(ErrorCode::MathOverflow)?
            .checked_div(5000u128)
            .ok_or(ErrorCode::MathOverflow)?;

        let rewards = total_rewards as u64;

        let vesting_time = clock.unix_timestamp - user_stake.vesting_start;
        let vesting_progress = if vesting_time >= VESTING_DURATION {
            10_000u64
        } else {
            (vesting_time as u64)
                .checked_mul(10_000)
                .ok_or(ErrorCode::MathOverflow)?
                .checked_div(VESTING_DURATION as u64)
                .ok_or(ErrorCode::MathOverflow)?
        };

        let vested_rewards = rewards
            .checked_mul(vesting_progress)
            .ok_or(ErrorCode::MathOverflow)?
            .checked_div(10_000)
            .ok_or(ErrorCode::MathOverflow)?;

        let escrowed_rewards = rewards.checked_sub(vested_rewards).ok_or(ErrorCode::MathOverflow)?;

        user_stake.escrowed_rewards = user_stake
            .escrowed_rewards
            .checked_add(escrowed_rewards)
            .ok_or(ErrorCode::MathOverflow)?;
        
        user_stake.total_rewards_earned = user_stake
            .total_rewards_earned
            .checked_add(rewards)
            .ok_or(ErrorCode::MathOverflow)?;
        
        user_stake.last_stake_time = clock.unix_timestamp;

        msg!(
            "Claimed {} lamports. Vested: {}. Locked: {}. Total locked: {}",
            rewards,
            vested_rewards,
            escrowed_rewards,
            user_stake.escrowed_rewards
        );
        Ok(())
    }

    // NEW: Claim referral rewards
    pub fn claim_referral_rewards(ctx: Context<ClaimReferralRewards>) -> Result<()> {
        let user_stake = &mut ctx.accounts.user_stake;
        
        require!(user_stake.referral_rewards_pending > 0, ErrorCode::NoReferralRewards);
        
        let amount = user_stake.referral_rewards_pending;
        user_stake.referral_rewards_pending = 0;
        user_stake.total_referral_rewards_claimed = user_stake
            .total_referral_rewards_claimed
            .checked_add(amount)
            .ok_or(ErrorCode::MathOverflow)?;
        
        msg!(
            "Claimed {} lamports in referral rewards. Total: {}",
            amount,
            user_stake.total_referral_rewards_claimed
        );
        Ok(())
    }

    // NEW: Get leaderboard stats
    pub fn get_leaderboard_stats(ctx: Context<GetLeaderboardStats>) -> Result<()> {
        let user_stake = &ctx.accounts.user_stake;
        
        msg!("Leaderboard Stats:");
        msg!("  Rank: {}", user_stake.leaderboard_position);
        msg!("  Staked: {}", user_stake.amount);
        msg!("  Multiplier: {} bps", user_stake.multiplier_points);
        msg!("  Total earned: {}", user_stake.total_rewards_earned);
        msg!("  Referral earnings: {}", user_stake.total_referral_rewards_claimed);
        Ok(())
    }

    pub fn calculate_rewards(ctx: Context<CalculateRewards>) -> Result<u64> {
        let pool = &ctx.accounts.pool;
        let user_stake = &ctx.accounts.user_stake;
        let clock = Clock::get()?;

        let time_staked_i64 = clock
            .unix_timestamp
            .checked_sub(user_stake.last_stake_time)
            .ok_or(ErrorCode::TimeCalculationError)?;
        require!(time_staked_i64 >= 0, ErrorCode::TimeCalculationError);

        let time_staked = time_staked_i64 as u128;
        let user_amount = user_stake.amount as u128;
        let reward_rate = pool.reward_rate as u128;

        let base_multiplier: u128 = 5000;
        let total_multiplier = base_multiplier + (user_stake.multiplier_points as u128);

        const YEAR_SECONDS: u128 = 31_536_000u128;

        let base_rewards = user_amount
            .checked_mul(reward_rate)
            .ok_or(ErrorCode::MathOverflow)?
            .checked_mul(time_staked)
            .ok_or(ErrorCode::MathOverflow)?
            .checked_div(10_000u128)
            .ok_or(ErrorCode::MathOverflow)?
            .checked_div(YEAR_SECONDS)
            .ok_or(ErrorCode::MathOverflow)?;

        let total_rewards = base_rewards
            .checked_mul(total_multiplier)
            .ok_or(ErrorCode::MathOverflow)?
            .checked_div(5000u128)
            .ok_or(ErrorCode::MathOverflow)?;

        let rewards = total_rewards as u64;
        msg!(
            "Pending rewards: {} lamports ({} bps multiplier)",
            rewards,
            total_multiplier
        );
        Ok(rewards)
    }
}

#[derive(Accounts)]
pub struct InitializeToken<'info> {
    #[account(
        init,
        payer = authority,
        mint::decimals = 9,
        mint::authority = authority.key(),
    )]
    pub mint: Account<'info, Mint>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
    pub rent: Sysvar<'info, Rent>,
}

#[account]
pub struct StakingPool {
    pub authority: Pubkey,
    pub total_staked: u64,
    pub reward_rate: u64,
    pub total_users: u64,      // NEW: for leaderboard
    pub bump: u8,
}

#[account]
pub struct UserStake {
    pub owner: Pubkey,
    pub amount: u64,
    pub reward_debt: u64,
    pub last_stake_time: i64,
    pub escrowed_rewards: u64,
    pub vesting_start: i64,
    pub multiplier_points: u64,
    pub total_time_staked: i64,
    pub referrer: Option<Pubkey>,              // NEW: who referred this user
    pub referral_rewards_pending: u64,         // NEW: pending referral earnings
    pub total_referral_rewards_claimed: u64,   // NEW: total referral claimed
    pub leaderboard_position: u64,             // NEW: rank
    pub total_rewards_earned: u64,             // NEW: lifetime rewards
    pub bump: u8,
}

#[derive(Accounts)]
pub struct InitializePool<'info> {
    #[account(
        init,
        payer = authority,
        space = 8 + 32 + 8 + 8 + 8 + 1,  // UPDATED: +8 for total_users
        seeds = [b"pool"],
        bump,
    )]
    pub pool: Account<'info, StakingPool>,

    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Deposit<'info> {
    #[account(mut, seeds = [b"pool"], bump = pool.bump)]
    pub pool: Account<'info, StakingPool>,

    #[account(
        init_if_needed,
        payer = user,
        space = 8 + 32 + 8 + 8 + 8 + 8 + 8 + 8 + 8 + 33 + 8 + 8 + 8 + 8 + 1,  // UPDATED: added new fields
        seeds = [b"user_stake", user.key().as_ref()],
        bump,
    )]
    pub user_stake: Account<'info, UserStake>,

    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Withdraw<'info> {
    #[account(mut, seeds = [b"pool"], bump = pool.bump)]
    pub pool: Account<'info, StakingPool>,

    #[account(mut, seeds = [b"user_stake", user.key().as_ref()], bump = user_stake.bump)]
    pub user_stake: Account<'info, UserStake>,

    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct ClaimRewards<'info> {
    #[account(seeds = [b"pool"], bump = pool.bump)]
    pub pool: Account<'info, StakingPool>,

    #[account(mut, seeds = [b"user_stake", user.key().as_ref()], bump = user_stake.bump)]
    pub user_stake: Account<'info, UserStake>,

    pub user: Signer<'info>,
}

// NEW: Claim referral rewards
#[derive(Accounts)]
pub struct ClaimReferralRewards<'info> {
    #[account(mut, seeds = [b"user_stake", user.key().as_ref()], bump = user_stake.bump)]
    pub user_stake: Account<'info, UserStake>,

    pub user: Signer<'info>,
}

// NEW: Get leaderboard stats
#[derive(Accounts)]
pub struct GetLeaderboardStats<'info> {
    #[account(seeds = [b"user_stake", user.key().as_ref()], bump = user_stake.bump)]
    pub user_stake: Account<'info, UserStake>,

    pub user: Signer<'info>,
}

#[derive(Accounts)]
pub struct CalculateRewards<'info> {
    #[account(seeds = [b"pool"], bump = pool.bump)]
    pub pool: Account<'info, StakingPool>,

    #[account(seeds = [b"user_stake", user.key().as_ref()], bump = user_stake.bump)]
    pub user_stake: Account<'info, UserStake>,

    pub user: Signer<'info>,
}

#[error_code]
pub enum ErrorCode {
    #[msg("Insufficient funds to withdraw")]
    InsufficientFunds,
    #[msg("Math overflow")]
    MathOverflow,
    #[msg("Time calculation error (clock skew or invalid last stake time)")]
    TimeCalculationError,
    #[msg("No referral rewards available")]
    NoReferralRewards,
}
