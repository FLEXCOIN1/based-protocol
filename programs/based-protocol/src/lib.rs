use anchor_lang::prelude::*;
use anchor_spl::token::{self, Token, TokenAccount, Transfer, Mint};

declare_id!("4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd");

const CONSERVATIVE_FEE_BPS: u64 = 10;    // 0.1%
const AGGRESSIVE_FEE_BPS: u64 = 5;       // 0.05%
const LIFE_CHANGING_FEE_BPS: u64 = 0;    // 0%

// Additional fee for tier unlock (buys $BASED for user)
const AGGRESSIVE_UNLOCK_FEE_BPS: u64 = 100;      // 1% extra to buy 10K $BASED
const LIFE_CHANGING_UNLOCK_FEE_BPS: u64 = 200;   // 2% extra to buy 50K $BASED

const AGGRESSIVE_MIN_BASED: u64 = 10_000_000_000_000;    // 10K tokens
const LIFE_CHANGING_MIN_BASED: u64 = 50_000_000_000_000; // 50K tokens

#[program]
pub mod based_protocol {
    use super::*;

    pub fn initialize(
        ctx: Context<Initialize>,
        usdc_mint: Pubkey,
        based_mint: Pubkey,
    ) -> Result<()> {
        let state = &mut ctx.accounts.protocol_state;
        state.authority = ctx.accounts.authority.key();
        state.usdc_mint = usdc_mint;
        state.based_mint = based_mint;
        state.total_deposits = 0;
        state.total_fees = 0;
        state.total_burned = 0;
        state.total_based_bought = 0;
        state.bump = ctx.bumps.protocol_state;
        msg!("Protocol initialized");
        Ok(())
    }

    /// Deposit with automatic tier unlock
    /// User just deposits USDC, protocol handles $BASED
    pub fn deposit(
        ctx: Context<Deposit>,
        amount: u64,
        desired_tier: u8,
    ) -> Result<()> {
        require!(desired_tier <= 2, ErrorCode::InvalidTier);

        // Check if user already has tier unlocked via protocol-staked $BASED
        let position = &mut ctx.accounts.user_position;
        let current_protocol_stake = position.protocol_staked_based;

        let needs_unlock = match desired_tier {
            0 => false,
            1 => current_protocol_stake < AGGRESSIVE_MIN_BASED,
            2 => current_protocol_stake < LIFE_CHANGING_MIN_BASED,
            _ => false,
        };

        // Calculate fees
        let deposit_fee_bps = match desired_tier {
            0 => CONSERVATIVE_FEE_BPS,
            1 => AGGRESSIVE_FEE_BPS,
            2 => LIFE_CHANGING_FEE_BPS,
            _ => 0,
        };

        let mut total_fee_bps = deposit_fee_bps;

        // Add unlock fee if needed
        if needs_unlock {
            let unlock_fee_bps = match desired_tier {
                1 => AGGRESSIVE_UNLOCK_FEE_BPS,
                2 => LIFE_CHANGING_UNLOCK_FEE_BPS,
                _ => 0,
            };
            total_fee_bps = total_fee_bps.checked_add(unlock_fee_bps).unwrap();
        }

        let total_fee = amount.checked_mul(total_fee_bps).unwrap().checked_div(10000).unwrap();
        let net_amount = amount.checked_sub(total_fee).unwrap();

        // Transfer total fee to protocol
        if total_fee > 0 {
            token::transfer(
                CpiContext::new(
                    ctx.accounts.token_program.to_account_info(),
                    Transfer {
                        from: ctx.accounts.user_token.to_account_info(),
                        to: ctx.accounts.fee_vault.to_account_info(),
                        authority: ctx.accounts.user.to_account_info(),
                    },
                ),
                total_fee,
            )?;
        }

        // Transfer net to strategy vault
        token::transfer(
            CpiContext::new(
                ctx.accounts.token_program.to_account_info(),
                Transfer {
                    from: ctx.accounts.user_token.to_account_info(),
                    to: ctx.accounts.strategy_vault.to_account_info(),
                    authority: ctx.accounts.user.to_account_info(),
                },
            ),
            net_amount,
        )?;

        // Update position
        position.user = ctx.accounts.user.key();
        position.tier = desired_tier;
        position.deposited = position.deposited.checked_add(net_amount).unwrap();
        position.last_deposit_slot = Clock::get()?.slot;

        // If tier was unlocked, mark the required $BASED as staked
        // (Protocol will buy and stake this off-chain via Jupiter)
        if needs_unlock {
            let required_based = match desired_tier {
                1 => AGGRESSIVE_MIN_BASED,
                2 => LIFE_CHANGING_MIN_BASED,
                _ => 0,
            };
            position.protocol_staked_based = required_based;
        }

        // Update protocol state
        let state = &mut ctx.accounts.protocol_state;
        state.total_deposits = state.total_deposits.checked_add(net_amount).unwrap();
        state.total_fees = state.total_fees.checked_add(total_fee).unwrap();

        msg!(
            "Deposited: {} | Fee: {} | Tier: {} | Unlock: {}", 
            net_amount, 
            total_fee, 
            desired_tier,
            needs_unlock
        );
        Ok(())
    }

    /// Manual stake (if user wants to hold $BASED themselves)
    pub fn stake_based(
        ctx: Context<StakeBased>,
        amount: u64,
    ) -> Result<()> {
        token::transfer(
            CpiContext::new(
                ctx.accounts.token_program.to_account_info(),
                Transfer {
                    from: ctx.accounts.user_based_account.to_account_info(),
                    to: ctx.accounts.staking_vault.to_account_info(),
                    authority: ctx.accounts.user.to_account_info(),
                },
            ),
            amount,
        )?;

        let stake = &mut ctx.accounts.stake_account;
        stake.user = ctx.accounts.user.key();
        stake.user_staked_amount = stake.user_staked_amount.checked_add(amount).unwrap();
        stake.last_stake_slot = Clock::get()?.slot;

        msg!("User staked {} $BASED", amount);
        Ok(())
    }

    /// Unstake user-owned $BASED
    pub fn unstake_based(
        ctx: Context<UnstakeBased>,
        amount: u64,
    ) -> Result<()> {
        let stake = &mut ctx.accounts.stake_account;
        require!(stake.user_staked_amount >= amount, ErrorCode::InsufficientStake);

        let seeds = &[
            b"staking_vault",
            ctx.accounts.protocol_state.based_mint.as_ref(),
            &[ctx.bumps.staking_vault],
        ];

        token::transfer(
            CpiContext::new_with_signer(
                ctx.accounts.token_program.to_account_info(),
                Transfer {
                    from: ctx.accounts.staking_vault.to_account_info(),
                    to: ctx.accounts.user_based_account.to_account_info(),
                    authority: ctx.accounts.staking_vault.to_account_info(),
                },
                &[seeds],
            ),
            amount,
        )?;

        stake.user_staked_amount = stake.user_staked_amount.checked_sub(amount).unwrap();
        msg!("User unstaked {} $BASED", amount);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(
        init,
        payer = authority,
        space = 8 + ProtocolState::INIT_SPACE,
        seeds = [b"protocol_state"],
        bump
    )]
    pub protocol_state: Account<'info, ProtocolState>,
    
    #[account(mut)]
    pub authority: Signer<'info>,
    
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Deposit<'info> {
    #[account(
        mut,
        seeds = [b"protocol_state"],
        bump = protocol_state.bump
    )]
    pub protocol_state: Account<'info, ProtocolState>,

    #[account(
        init_if_needed,
        payer = user,
        space = 8 + UserPosition::INIT_SPACE,
        seeds = [b"position", user.key().as_ref()],
        bump
    )]
    pub user_position: Account<'info, UserPosition>,

    #[account(mut)]
    pub user: Signer<'info>,

    #[account(mut)]
    pub user_token: Account<'info, TokenAccount>,

    pub usdc_mint: Account<'info, Mint>,

    #[account(
        init_if_needed,
        payer = user,
        seeds = [b"fee_vault", usdc_mint.key().as_ref()],
        bump,
        token::mint = usdc_mint,
        token::authority = fee_vault,
    )]
    pub fee_vault: Account<'info, TokenAccount>,

    #[account(
        init_if_needed,
        payer = user,
        seeds = [b"strategy_vault", usdc_mint.key().as_ref()],
        bump,
        token::mint = usdc_mint,
        token::authority = strategy_vault,
    )]
    pub strategy_vault: Account<'info, TokenAccount>,

    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct StakeBased<'info> {
    #[account(
        seeds = [b"protocol_state"],
        bump = protocol_state.bump
    )]
    pub protocol_state: Account<'info, ProtocolState>,

    #[account(
        init_if_needed,
        payer = user,
        space = 8 + StakeAccount::INIT_SPACE,
        seeds = [b"stake", user.key().as_ref()],
        bump
    )]
    pub stake_account: Account<'info, StakeAccount>,

    #[account(mut)]
    pub user: Signer<'info>,

    #[account(mut)]
    pub user_based_account: Account<'info, TokenAccount>,

    pub based_mint: Account<'info, Mint>,

    #[account(
        init_if_needed,
        payer = user,
        seeds = [b"staking_vault", based_mint.key().as_ref()],
        bump,
        token::mint = based_mint,
        token::authority = staking_vault,
    )]
    pub staking_vault: Account<'info, TokenAccount>,

    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct UnstakeBased<'info> {
    #[account(
        seeds = [b"protocol_state"],
        bump = protocol_state.bump
    )]
    pub protocol_state: Account<'info, ProtocolState>,

    #[account(
        mut,
        seeds = [b"stake", user.key().as_ref()],
        bump
    )]
    pub stake_account: Account<'info, StakeAccount>,

    #[account(mut)]
    pub user: Signer<'info>,

    #[account(mut)]
    pub user_based_account: Account<'info, TokenAccount>,

    #[account(
        mut,
        seeds = [b"staking_vault", protocol_state.based_mint.as_ref()],
        bump
    )]
    pub staking_vault: Account<'info, TokenAccount>,

    pub token_program: Program<'info, Token>,
}

#[account]
#[derive(InitSpace)]
pub struct ProtocolState {
    pub authority: Pubkey,
    pub usdc_mint: Pubkey,
    pub based_mint: Pubkey,
    pub total_deposits: u64,
    pub total_fees: u64,
    pub total_burned: u64,
    pub total_based_bought: u64,
    pub bump: u8,
}

#[account]
#[derive(InitSpace)]
pub struct UserPosition {
    pub user: Pubkey,
    pub tier: u8,
    pub deposited: u64,
    pub last_deposit_slot: u64,
    pub protocol_staked_based: u64,  // $BASED staked by protocol for this user
}

#[account]
#[derive(InitSpace)]
pub struct StakeAccount {
    pub user: Pubkey,
    pub user_staked_amount: u64,  // User's own $BASED stake
    pub last_stake_slot: u64,
}

#[error_code]
pub enum ErrorCode {
    #[msg("Invalid tier")]
    InvalidTier,
    #[msg("Insufficient staked amount")]
    InsufficientStake,
}
