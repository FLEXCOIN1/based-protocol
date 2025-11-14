use anchor_lang::prelude::*;
use anchor_lang::solana_program::system_instruction;
use anchor_spl::token::{self, Token, TokenAccount, Transfer};

declare_id!("4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd");

// USDC devnet: 4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU
const USDC_MINT: &str = "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU";

#[program]
pub mod based_protocol {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        ctx.accounts.state.total_staked = 0;
        ctx.accounts.state.total_rewards = 0;
        ctx.accounts.state.total_users = 0;
        ctx.accounts.state.authority = ctx.accounts.authority.key();
        ctx.accounts.state.bump = ctx.bumps.state;
        Ok(())
    }

    // SOL STAKING
    pub fn stake_sol(
        ctx: Context<StakeSOL>,
        amount: u64,
    ) -> Result<()> {
        let transfer_ix = system_instruction::transfer(
            ctx.accounts.user.key,
            ctx.accounts.vault.key,
            amount,
        );

        anchor_lang::solana_program::program::invoke(
            &transfer_ix,
            &[
                ctx.accounts.user.to_account_info(),
                ctx.accounts.vault.to_account_info(),
            ],
        )?;

        ctx.accounts.user_stake.owner = ctx.accounts.user.key();
        ctx.accounts.user_stake.sol_amount = amount;
        ctx.accounts.user_stake.usdc_amount = 0;
        ctx.accounts.user_stake.last_stake_time = Clock::get()?.unix_timestamp;

        ctx.accounts.state.total_staked += amount;
        ctx.accounts.state.total_users += 1;

        Ok(())
    }

    // USDC STAKING
    pub fn stake_usdc(
        ctx: Context<StakeUSDC>,
        amount: u64,
    ) -> Result<()> {
        // Transfer USDC from user to vault
        let cpi_accounts = Transfer {
            from: ctx.accounts.user_usdc.to_account_info(),
            to: ctx.accounts.vault_usdc.to_account_info(),
            authority: ctx.accounts.user.to_account_info(),
        };
        let cpi_program = ctx.accounts.token_program.to_account_info();
        let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);
        token::transfer(cpi_ctx, amount)?;

        ctx.accounts.user_stake.owner = ctx.accounts.user.key();
        ctx.accounts.user_stake.usdc_amount = amount;
        ctx.accounts.user_stake.sol_amount = 0;
        ctx.accounts.user_stake.last_stake_time = Clock::get()?.unix_timestamp;

        Ok(())
    }

    // UNSTAKE SOL
    pub fn unstake_sol(ctx: Context<UnstakeSOL>, amount: u64) -> Result<()> {
        require!(ctx.accounts.user_stake.sol_amount >= amount, ErrorCode::InsufficientStake);
        
        let vault_bump = ctx.bumps.vault;
        let vault_seeds = &[b"vault".as_ref(), &[vault_bump]];
        let signer_seeds = &[&vault_seeds[..]];
        
        let transfer_ix = system_instruction::transfer(
            ctx.accounts.vault.key,
            ctx.accounts.user.key,
            amount,
        );

        anchor_lang::solana_program::program::invoke_signed(
            &transfer_ix,
            &[
                ctx.accounts.vault.to_account_info(),
                ctx.accounts.user.to_account_info(),
                ctx.accounts.system_program.to_account_info(),
            ],
            signer_seeds,
        )?;
        
        ctx.accounts.user_stake.sol_amount -= amount;
        ctx.accounts.state.total_staked -= amount;
        
        Ok(())
    }

    // UNSTAKE USDC
    pub fn unstake_usdc(ctx: Context<UnstakeUSDC>, amount: u64) -> Result<()> {
        require!(ctx.accounts.user_stake.usdc_amount >= amount, ErrorCode::InsufficientStake);
        
        let vault_bump = ctx.bumps.vault_usdc;
        let vault_seeds = &[b"vault_usdc".as_ref(), &[vault_bump]];
        let signer_seeds = &[&vault_seeds[..]];

        let cpi_accounts = Transfer {
            from: ctx.accounts.vault_usdc.to_account_info(),
            to: ctx.accounts.user_usdc.to_account_info(),
            authority: ctx.accounts.vault_usdc.to_account_info(),
        };
        let cpi_program = ctx.accounts.token_program.to_account_info();
        let cpi_ctx = CpiContext::new_with_signer(cpi_program, cpi_accounts, signer_seeds);
        token::transfer(cpi_ctx, amount)?;
        
        ctx.accounts.user_stake.usdc_amount -= amount;
        
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = authority, space = 8 + 80, seeds = [b"state"], bump)]
    pub state: Account<'info, ProtocolState>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct StakeSOL<'info> {
    #[account(mut, seeds = [b"state"], bump)]
    pub state: Account<'info, ProtocolState>,
    #[account(init_if_needed, payer = user, space = 8 + 104, seeds = [b"user_stake", user.key().as_ref()], bump)]
    pub user_stake: Account<'info, UserStake>,
    #[account(mut)]
    pub user: Signer<'info>,
    /// CHECK: vault PDA
    #[account(mut, seeds = [b"vault"], bump)]
    pub vault: UncheckedAccount<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct StakeUSDC<'info> {
    #[account(init_if_needed, payer = user, space = 8 + 104, seeds = [b"user_stake", user.key().as_ref()], bump)]
    pub user_stake: Account<'info, UserStake>,
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(mut)]
    pub user_usdc: Account<'info, TokenAccount>,
    #[account(mut, seeds = [b"vault_usdc"], bump)]
    pub vault_usdc: Account<'info, TokenAccount>,
    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct UnstakeSOL<'info> {
    #[account(mut, seeds = [b"state"], bump)]
    pub state: Account<'info, ProtocolState>,
    #[account(mut, seeds = [b"user_stake", user.key().as_ref()], bump)]
    pub user_stake: Account<'info, UserStake>,
    #[account(mut)]
    pub user: Signer<'info>,
    /// CHECK: vault PDA
    #[account(mut, seeds = [b"vault"], bump)]
    pub vault: UncheckedAccount<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct UnstakeUSDC<'info> {
    #[account(mut, seeds = [b"user_stake", user.key().as_ref()], bump)]
    pub user_stake: Account<'info, UserStake>,
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(mut)]
    pub user_usdc: Account<'info, TokenAccount>,
    #[account(mut, seeds = [b"vault_usdc"], bump)]
    pub vault_usdc: Account<'info, TokenAccount>,
    pub token_program: Program<'info, Token>,
}

#[account]
pub struct ProtocolState {
    pub total_staked: u64,
    pub total_rewards: u64,
    pub total_users: u64,
    pub authority: Pubkey,
    pub bump: u8,
}

#[account]
pub struct UserStake {
    pub owner: Pubkey,           // 32
    pub sol_amount: u64,          // 8
    pub usdc_amount: u64,         // 8
    pub rewards_earned: u64,      // 8
    pub last_stake_time: i64,     // 8
}

#[error_code]
pub enum ErrorCode {
    #[msg("Insufficient stake amount")]
    InsufficientStake,
}
