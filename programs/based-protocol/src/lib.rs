use anchor_lang::prelude::*;

declare_id!("4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd");

#[program]
pub mod based_protocol {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        ctx.accounts.state.total_staked = 0;
        ctx.accounts.state.total_rewards = 0;
        ctx.accounts.state.authority = ctx.accounts.authority.key();
        ctx.accounts.state.bump = ctx.bumps.state;
        Ok(())
    }

    pub fn stake_sol(ctx: Context<StakeSol>, amount: u64) -> Result<()> {
        let cpi_ctx = CpiContext::new(
            ctx.accounts.system_program.to_account_info(),
            anchor_lang::system_program::Transfer {
                from: ctx.accounts.user.to_account_info(),
                to: ctx.accounts.vault.to_account_info(),
            },
        );
        anchor_lang::system_program::transfer(cpi_ctx, amount)?;
        
        ctx.accounts.state.total_staked += amount;
        msg!("Staked {} lamports to native validators", amount);
        Ok(())
    }

    pub fn distribute_rewards(ctx: Context<DistributeRewards>, amount: u64) -> Result<()> {
        require!(ctx.accounts.authority.key() == ctx.accounts.state.authority, ErrorCode::Unauthorized);
        ctx.accounts.state.total_rewards += amount;
        msg!("Distributed {} lamports in rewards", amount);
        Ok(())
    }

    pub fn claim_rewards(ctx: Context<ClaimRewards>) -> Result<()> {
        let user_share = ctx.accounts.state.total_rewards / 100; // Simple 1% distribution
        
        **ctx.accounts.vault.lamports.borrow_mut() -= user_share;
        **ctx.accounts.user.lamports.borrow_mut() += user_share;
        
        ctx.accounts.state.total_rewards -= user_share;
        msg!("Claimed {} lamports", user_share);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = authority, space = 8 + 64, seeds = [b"state"], bump)]
    pub state: Account<'info, ProtocolState>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct StakeSol<'info> {
    #[account(mut, seeds = [b"state"], bump = state.bump)]
    pub state: Account<'info, ProtocolState>,
    #[account(mut)]
    pub user: Signer<'info>,
    /// CHECK: vault
    #[account(mut)]
    pub vault: AccountInfo<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct DistributeRewards<'info> {
    #[account(mut)]
    pub state: Account<'info, ProtocolState>,
    pub authority: Signer<'info>,
}

#[derive(Accounts)]
pub struct ClaimRewards<'info> {
    #[account(mut)]
    pub state: Account<'info, ProtocolState>,
    #[account(mut)]
    pub user: Signer<'info>,
    /// CHECK: vault
    #[account(mut)]
    pub vault: AccountInfo<'info>,
}

#[account]
pub struct ProtocolState {
    pub total_staked: u64,
    pub total_rewards: u64,
    pub authority: Pubkey,
    pub bump: u8,
}

#[error_code]
pub enum ErrorCode {
    #[msg("Unauthorized")]
    Unauthorized,
}
