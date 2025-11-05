use anchor_lang::prelude::*;
use anchor_spl::token::{self, Mint, Token, TokenAccount};

declare_id!("DGVsFppxXqsuLPtF2oYvfh3uccdvGMGEVi4ZxuaQu5RU");

#[program]
pub mod based_protocol {
    use super::*;

    // Initialize the BASED token
    pub fn initialize_token(ctx: Context<InitializeToken>) -> Result<()> {
        msg!("BASED Protocol: Token initialized");
        Ok(())
    }
}

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
