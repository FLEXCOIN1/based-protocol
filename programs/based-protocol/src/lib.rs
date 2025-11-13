use anchor_lang::prelude::*;
use solana_program::{
    stake::{self, instruction as stake_instruction},
    system_instruction,
    sysvar,
};

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
        validator: Pubkey,
    ) -> Result<()> {
        // Transfer to vault
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

        // Store keys to extend lifetime
        let user_key = ctx.accounts.user.key();
        let stake_bump = ctx.bumps.stake_account;
        let stake_seeds: &[&[u8]] = &[
            b"stake",
            user_key.as_ref(),
            &[stake_bump],
        ];

        // Create stake account
        let create_ix = stake_instruction::create_account(
            ctx.accounts.vault.key,
            ctx.accounts.stake_account.key,
            &stake::state::Authorized {
                staker: ctx.accounts.state.key(),
                withdrawer: ctx.accounts.state.key(),
            },
            &stake::state::Lockup::default(),
            amount,
        );

        for ix in create_ix.iter() {
            anchor_lang::solana_program::program::invoke_signed(
                ix,
                &[
                    ctx.accounts.vault.to_account_info(),
                    ctx.accounts.stake_account.to_account_info(),
                    ctx.accounts.system_program.to_account_info(),
                ],
                &[stake_seeds],
            )?;
        }

        // Delegate to validator
        let state_key = ctx.accounts.state.key();
        let state_bump = ctx.accounts.state.bump;
        let state_seeds: &[&[u8]] = &[b"state", &[state_bump]];

        let delegate_ix = stake_instruction::delegate_stake(
            ctx.accounts.stake_account.key,
            &state_key,
            &validator,
        );

        anchor_lang::solana_program::program::invoke_signed(
            &delegate_ix,
            &[
                ctx.accounts.stake_account.to_account_info(),
                ctx.accounts.vote_account.to_account_info(),
                ctx.accounts.clock.to_account_info(),
                ctx.accounts.stake_history.to_account_info(),
                ctx.accounts.stake_config.to_account_info(),
                ctx.accounts.state.to_account_info(),
            ],
            &[state_seeds],
        )?;

        // Update state
        if ctx.accounts.user_stake.amount == 0 {
            ctx.accounts.state.total_users += 1;
        }
        ctx.accounts.user_stake.owner = user_key;
        ctx.accounts.user_stake.amount += amount;
        ctx.accounts.user_stake.stake_account = ctx.accounts.stake_account.key();
        ctx.accounts.user_stake.last_stake_time = Clock::get()?.unix_timestamp;
        ctx.accounts.state.total_staked += amount;

        msg!("Staked {} to validator {}", amount, validator);
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
    #[account(mut, seeds = [b"state"], bump = state.bump)]
    pub state: Account<'info, ProtocolState>,
    #[account(init_if_needed, payer = user, space = 8 + 88, seeds = [b"user_stake", user.key().as_ref()], bump)]
    pub user_stake: Account<'info, UserStake>,
    #[account(mut)]
    pub user: Signer<'info>,
    /// CHECK: vault
    #[account(mut, seeds = [b"vault"], bump)]
    pub vault: AccountInfo<'info>,
    /// CHECK: stake account
    #[account(mut, seeds = [b"stake", user.key().as_ref()], bump)]
    pub stake_account: AccountInfo<'info>,
    /// CHECK: vote account
    pub vote_account: AccountInfo<'info>,
    pub system_program: Program<'info, System>,
    /// CHECK: stake program
    #[account(address = stake::program::ID)]
    pub stake_program: AccountInfo<'info>,
    /// CHECK: clock
    #[account(address = sysvar::clock::ID)]
    pub clock: AccountInfo<'info>,
    /// CHECK: stake history
    #[account(address = sysvar::stake_history::ID)]
    pub stake_history: AccountInfo<'info>,
    /// CHECK: config
    pub stake_config: AccountInfo<'info>,
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
