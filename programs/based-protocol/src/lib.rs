use anchor_lang::prelude::*;
use anchor_lang::solana_program::system_instruction;

declare_id!("4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd");

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

    pub fn create_stake_account(
        ctx: Context<CreateStakeAccount>,
        amount: u64,
        _validator: Pubkey,
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
        ctx.accounts.user_stake.amount = amount;
        ctx.accounts.user_stake.stake_account = ctx.accounts.stake_account.key();
        ctx.accounts.user_stake.rewards_earned = 0;
        ctx.accounts.user_stake.last_stake_time = Clock::get()?.unix_timestamp;

        ctx.accounts.state.total_staked += amount;
        ctx.accounts.state.total_users += 1;

        Ok(())
    }

    pub fn unstake(ctx: Context<Unstake>, amount: u64) -> Result<()> {
        require!(ctx.accounts.user_stake.amount >= amount, ErrorCode::InsufficientStake);
        
        **ctx.accounts.vault.to_account_info().try_borrow_mut_lamports()? -= amount;
        **ctx.accounts.user.to_account_info().try_borrow_mut_lamports()? += amount;
        
        ctx.accounts.user_stake.amount -= amount;
        ctx.accounts.state.total_staked -= amount;
        
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
pub struct CreateStakeAccount<'info> {
    #[account(mut, seeds = [b"state"], bump)]
    pub state: Account<'info, ProtocolState>,
    #[account(init_if_needed, payer = user, space = 8 + 88, seeds = [b"user_stake", user.key().as_ref()], bump)]
    pub user_stake: Account<'info, UserStake>,
    #[account(mut)]
    pub user: Signer<'info>,
    /// CHECK: vault PDA
    #[account(mut, seeds = [b"vault"], bump)]
    pub vault: UncheckedAccount<'info>,
    /// CHECK: stake account PDA
    #[account(mut, seeds = [b"stake", user.key().as_ref()], bump)]
    pub stake_account: UncheckedAccount<'info>,
    /// CHECK: vote account
    pub vote_account: UncheckedAccount<'info>,
    pub system_program: Program<'info, System>,
    /// CHECK: stake program
    pub stake_program: UncheckedAccount<'info>,
    /// CHECK: clock
    pub clock: UncheckedAccount<'info>,
    /// CHECK: stake history
    pub stake_history: UncheckedAccount<'info>,
    /// CHECK: config
    pub stake_config: UncheckedAccount<'info>,
}

#[derive(Accounts)]
pub struct Unstake<'info> {
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
    pub owner: Pubkey,
    pub amount: u64,
    pub stake_account: Pubkey,
    pub rewards_earned: u64,
    pub last_stake_time: i64,
}

#[error_code]
pub enum ErrorCode {
    #[msg("Insufficient stake amount")]
    InsufficientStake,
}
