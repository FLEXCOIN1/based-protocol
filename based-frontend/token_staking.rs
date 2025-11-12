use anchor_lang::prelude::*;
use anchor_spl::token::{Token, TokenAccount};

#[account]
pub struct TokenStakingPool {
    pub authority: Pubkey,
    pub token_mint: Pubkey,
    pub total_staked: u64,
    pub reward_rate: u64,
    pub total_users: u64,
    pub bump: u8,
}

#[account]
pub struct TokenUserStake {
    pub owner: Pubkey,
    pub amount: u64,
    pub last_stake_time: i64,
    pub vesting_start: i64,
    pub multiplier_points: u64,
    pub total_time_staked: i64,
    pub referrer: Option<Pubkey>,
    pub referral_rewards_pending: u64,
    pub total_referral_rewards_claimed: u64,
    pub leaderboard_position: u64,
    pub total_rewards_earned: u64,
    pub bump: u8,
}

#[derive(Accounts)]
pub struct InitializeTokenPool<'info> {
    #[account(
        init,
        payer = authority,
        space = 8 + 32 + 32 + 8 + 8 + 8 + 1,
        seeds = [b"token_pool", token_mint.key().as_ref()],
        bump,
    )]
    pub token_pool: Account<'info, TokenStakingPool>,

    pub token_mint: Account<'info, anchor_spl::token::Mint>,

    #[account(mut)]
    pub authority: Signer<'info>,
    
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct DepositToken<'info> {
    #[account(mut, seeds = [b"token_pool", token_pool.token_mint.as_ref()], bump = token_pool.bump)]
    pub token_pool: Account<'info, TokenStakingPool>,

    #[account(
        init_if_needed,
        payer = user,
        space = 8 + 32 + 8 + 8 + 8 + 8 + 8 + 33 + 8 + 8 + 8 + 8 + 1,
        seeds = [b"token_user_stake", user.key().as_ref(), token_pool.key().as_ref()],
        bump,
    )]
    pub token_user_stake: Account<'info, TokenUserStake>,

    #[account(mut)]
    pub user_token_account: Account<'info, TokenAccount>,

    #[account(mut)]
    pub pool_token_account: Account<'info, TokenAccount>,

    #[account(mut)]
    pub user: Signer<'info>,
    
    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct WithdrawToken<'info> {
    #[account(mut, seeds = [b"token_pool", token_pool.token_mint.as_ref()], bump = token_pool.bump)]
    pub token_pool: Account<'info, TokenStakingPool>,

    #[account(mut, seeds = [b"token_user_stake", user.key().as_ref(), token_pool.key().as_ref()], bump = token_user_stake.bump)]
    pub token_user_stake: Account<'info, TokenUserStake>,

    #[account(mut)]
    pub user_token_account: Account<'info, TokenAccount>,

    #[account(mut)]
    pub pool_token_account: Account<'info, TokenAccount>,

    #[account(mut)]
    pub user: Signer<'info>,
    
    pub token_program: Program<'info, Token>,
}

#[derive(Accounts)]
pub struct ClaimTokenRewards<'info> {
    #[account(seeds = [b"token_pool", token_pool.token_mint.as_ref()], bump = token_pool.bump)]
    pub token_pool: Account<'info, TokenStakingPool>,

    #[account(mut, seeds = [b"token_user_stake", user.key().as_ref(), token_pool.key().as_ref()], bump = token_user_stake.bump)]
    pub token_user_stake: Account<'info, TokenUserStake>,

    #[account(mut)]
    pub user_token_account: Account<'info, TokenAccount>,

    #[account(mut)]
    pub pool_token_account: Account<'info, TokenAccount>,

    pub user: Signer<'info>,
    
    pub token_program: Program<'info, Token>,
}
