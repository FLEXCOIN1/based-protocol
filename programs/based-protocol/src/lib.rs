use anchor_lang::prelude::*;

declare_id!("4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd");

#[program]
pub mod based_protocol {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        ctx.accounts.state.total_staked = 0;
        ctx.accounts.state.authority = ctx.accounts.authority.key();
        Ok(())
    }

    pub fn deposit(ctx: Context<Deposit>, amount: u64) -> Result<()> {
        ctx.accounts.state.total_staked += amount;
        msg!("Deposited {} lamports", amount);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = authority, space = 8 + 40)]
    pub state: Account<'info, ProtocolState>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Deposit<'info> {
    #[account(mut)]
    pub state: Account<'info, ProtocolState>,
}

#[account]
pub struct ProtocolState {
    pub total_staked: u64,
    pub authority: Pubkey,
}
