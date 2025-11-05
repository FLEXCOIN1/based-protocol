use anchor_lang::prelude::*;
use anchor_spl::token::{Mint, Token};

declare_id!("DGVsFppxXqsuLPtF2oYvfh3uccdvGMGEVi4ZxuaQu5RU");

#[program]
pub mod based_protocol {
    use super::*;

    // Initialize the token mint (anchor mint init)
    pub fn initialize_token(_ctx: Context<InitializeToken>) -> Result<()> {
        msg!("BASED token initialized (mint created)");
        Ok(())
    }

    // Initialize staking pool (PDA)
    pub fn initialize_pool(ctx: Context<InitializePool>, reward_rate: u64) -> Result<()> {
        let pool = &mut ctx.accounts.pool;
        // correct bump access
        pool.bump = ctx.bumps.pool;
        pool.authority = ctx.accounts.authority.key();
        pool.total_staked = 0;
        pool.reward_rate = reward_rate;

        msg!("Staking pool initialized. bump: {}, reward_rate: {}", pool.bump, pool.reward_rate);
        Ok(())
    }

    // Deposit lamports into the pool PDA. payer is the user.
    pub fn deposit(ctx: Context<Deposit>, amount: u64) -> Result<()> {
        let clock = Clock::get()?;

        // Transfer lamports from user to pool (system program CPI)
        let cpi_accounts = anchor_lang::system_program::Transfer {
            from: ctx.accounts.user.to_account_info(),
            to: ctx.accounts.pool.to_account_info(),
        };
        let cpi_ctx = CpiContext::new(ctx.accounts.system_program.to_account_info(), cpi_accounts);
        anchor_lang::system_program::transfer(cpi_ctx, amount)?;

        // Update pool totals
        let pool = &mut ctx.accounts.pool;
        pool.total_staked = pool
            .total_staked
            .checked_add(amount)
            .ok_or(ErrorCode::MathOverflow)?;

        // Initialize or update user stake
        let user_stake = &mut ctx.accounts.user_stake;
        // always set owner on (re)initialization to avoid mismatch
        user_stake.owner = ctx.accounts.user.key();
        user_stake.amount = user_stake
            .amount
            .checked_add(amount)
            .ok_or(ErrorCode::MathOverflow)?;
        user_stake.last_stake_time = clock.unix_timestamp;
        user_stake.bump = ctx.bumps.user_stake; // correct bump access

        msg!("User {} deposited {} lamports. User total: {}", ctx.accounts.user.key(), amount, user_stake.amount);
        Ok(())
    }

    // Withdraw lamports to the user
    pub fn withdraw(ctx: Context<Withdraw>, amount: u64) -> Result<()> {
        let pool = &mut ctx.accounts.pool;
        let user_stake = &mut ctx.accounts.user_stake;

        require!(user_stake.amount >= amount, ErrorCode::InsufficientFunds);

        // Move lamports from pool PDA to user
        // Use direct lamport manipulation (ensure pool has enough lamports)
        **pool.to_account_info().try_borrow_mut_lamports()? = pool
            .to_account_info()
            .lamports()
            .checked_sub(amount)
            .ok_or(ErrorCode::InsufficientFunds)?;
        **ctx
            .accounts
            .user
            .to_account_info()
            .try_borrow_mut_lamports()? = ctx
            .accounts
            .user
            .to_account_info()
            .lamports()
            .checked_add(amount)
            .ok_or(ErrorCode::MathOverflow)?;

        pool.total_staked = pool
            .total_staked
            .checked_sub(amount)
            .ok_or(ErrorCode::MathOverflow)?;
        user_stake.amount = user_stake
            .amount
            .checked_sub(amount)
            .ok_or(ErrorCode::MathOverflow)?;

        msg!("User {} withdrew {} lamports. Remaining stake: {}", ctx.accounts.user.key(), amount, user_stake.amount);
        Ok(())
    }

    // Compute (and log) pending rewards for a user (doesn't modify state)
    pub fn calculate_rewards(ctx: Context<CalculateRewards>) -> Result<()> {
        let pool = &ctx.accounts.pool;
        let user_stake = &ctx.accounts.user_stake;
        let clock = Clock::get()?;

        let delta_i64 = clock
            .unix_timestamp
            .checked_sub(user_stake.last_stake_time)
            .ok_or(ErrorCode::TimeCalculationError)?;
        require!(delta_i64 >= 0, ErrorCode::TimeCalculationError);

        let time_staked = delta_i64 as u128;
        let user_amount = user_stake.amount as u128;
        let reward_rate = pool.reward_rate as u128;

        const YEAR_SECONDS: u128 = 31_536_000u128; // seconds in a year
        // Formula: rewards = amount * reward_rate(basis points) * time / (10000 * YEAR_SECONDS)
        let rewards_u128 = user_amount
            .checked_mul(reward_rate)
            .and_then(|v| v.checked_mul(time_staked))
            .and_then(|v| v.checked_div(10_000u128))
            .and_then(|v| v.checked_div(YEAR_SECONDS))
            .ok_or(ErrorCode::MathOverflow)?;

        let rewards = rewards_u128 as u64;
        msg!("Pending rewards for {}: {} lamports (time_staked secs: {})", user_stake.owner, rewards, delta_i64);
        Ok(())
    }
}

// -------------------- Accounts / State --------------------

#[account]
pub struct StakingPool {
    pub authority: Pubkey,
    pub total_staked: u64,
    pub reward_rate: u64, // interpreted as basis points (100 -> 1%)
    pub bump: u8,
}

impl StakingPool {
    pub const LEN: usize = 32 + 8 + 8 + 1; // pubkey + u64 + u64 + u8
}

#[account]
pub struct UserStake {
    pub owner: Pubkey,
    pub amount: u64,
    pub reward_debt: u64,
    pub last_stake_time: i64,
    pub bump: u8,
}

impl UserStake {
    pub const LEN: usize = 32 + 8 + 8 + 8 + 1; // pubkey + amount + reward_debt + last_stake_time + bump
}

// Initialize token mint (Anchor-managed)
#[derive(Accounts)]
pub struct InitializeToken<'info> {
    #[account(
        init,
        payer = authority,
        mint::decimals = 9,
        mint::authority = authority,
    )]
    pub mint: Account<'info, Mint>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
    pub rent: Sysvar<'info, Rent>,
}

// Initialize pool
#[derive(Accounts)]
pub struct InitializePool<'info> {
    #[account(
        init,
        payer = authority,
        space = 8 + StakingPool::LEN,
        seeds = [b"pool"],
        bump
    )]
    pub pool: Account<'info, StakingPool>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

// Deposit context
#[derive(Accounts)]
pub struct Deposit<'info> {
    #[account(
        mut,
        seeds = [b"pool"],
        bump = pool.bump,
    )]
    pub pool: Account<'info, StakingPool>,

    #[account(
        init_if_needed,
        payer = user,
        space = 8 + UserStake::LEN,
        seeds = [b"user_stake", user.key().as_ref()],
        bump,
    )]
    pub user_stake: Account<'info, UserStake>,

    #[account(mut)]
    pub user: Signer<'info>,

    pub system_program: Program<'info, System>,
}

// Withdraw context
#[derive(Accounts)]
pub struct Withdraw<'info> {
    #[account(
        mut,
        seeds = [b"pool"],
        bump = pool.bump,
    )]
    pub pool: Account<'info, StakingPool>,

    #[account(
        mut,
        seeds = [b"user_stake", user.key().as_ref()],
        bump = user_stake.bump,
    )]
    pub user_stake: Account<'info, UserStake>,

    #[account(mut)]
    pub user: Signer<'info>,

    pub system_program: Program<'info, System>,
}

// Calculate rewards context
#[derive(Accounts)]
pub struct CalculateRewards<'info> {
    #[account(
        seeds = [b"pool"],
        bump = pool.bump,
    )]
    pub pool: Account<'info, StakingPool>,

    #[account(
        seeds = [b"user_stake", user.key().as_ref()],
        bump = user_stake.bump,
    )]
    pub user_stake: Account<'info, UserStake>,

    pub user: Signer<'info>,
}

// Error codes
#[error_code]
pub enum ErrorCode {
    #[msg("Insufficient funds to withdraw")]
    InsufficientFunds,
    #[msg("Math overflow")]
    MathOverflow,
    #[msg("Time calculation error (negative duration or clock skew)")]
    TimeCalculationError,
}
