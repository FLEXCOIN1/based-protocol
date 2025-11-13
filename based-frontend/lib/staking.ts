import { PublicKey } from '@solana/web3.js';
import { getProgram, retryWithFailover } from './contract';
import { AnchorWallet } from './anchorWallet';
import { handleError, getUserFriendlyError } from './errorHandler';
import { rateLimiter } from './rateLimiter';

export async function depositSOL(
  walletPublicKey: PublicKey,
  amount: number,
  wallet: any
) {
  const rateCheck = rateLimiter.check(walletPublicKey.toBase58());
  if (!rateCheck.allowed) {
    throw new Error(`Rate limit exceeded. Try again in ${rateCheck.resetIn} seconds.`);
  }

  try {
    return await retryWithFailover(async () => {
      const anchorWallet = AnchorWallet.fromWalletAdapter(wallet);
      const program = await getProgram(anchorWallet);

      // Derive the user stake PDA
      const [userStakePda] = PublicKey.findProgramAddressSync(
        [Buffer.from('user_stake'), walletPublicKey.toBuffer()],
        program.programId
      );

      // Check if user stake account exists
      const connection = program.provider.connection;
      const accountInfo = await connection.getAccountInfo(userStakePda);

      // If account doesn't exist, we need to initialize it
      // The deposit instruction should handle this with init_if_needed
      // but we log it for debugging
      if (!accountInfo) {
        console.log('Creating new UserStake account for first-time staker...');
      }

      // Convert SOL to lamports
      const amountLamports = Math.floor(amount * 1_000_000_000);

      // Call deposit - it should create the account if it doesn't exist
      const signature = await program.methods
        .deposit(amountLamports, null) // amount in lamports, no referrer
        .accounts({
          voteAccount: VALIDATOR_VOTE,
          systemProgram: SystemProgram.programId,
          stakeProgram: STAKE_PROGRAM_ID,
          rent: SYSVAR_RENT_PUBKEY,
          clock: SYSVAR_CLOCK_PUBKEY,
          stakeHistory: STAKE_HISTORY,
          stakeConfig: STAKE_CONFIG,
        })
        .rpc();

          user: walletPublicKey,
        })
        .rpc();

      console.log('✅ Stake successful! Transaction:', signature);
      return signature;
    });
  } catch (error: any) {
    handleError(error, {
      action: 'stake',
      walletAddress: walletPublicKey.toBase58(),
      amount,
    });
    throw new Error(getUserFriendlyError(error));
  }
}

export async function getUserStake(walletPublicKey: PublicKey, wallet: any) {
  try {
    const anchorWallet = AnchorWallet.fromWalletAdapter(wallet);
    const program = await getProgram(anchorWallet);

    // Let Anchor auto-derive the PDA
    const [userStake] = PublicKey.findProgramAddressSync(
      [Buffer.from('user_stake'), walletPublicKey.toBuffer()],
      program.programId
    );

    // Try to fetch the account - don't retry if it doesn't exist
    try {
      return await program.account.userStake.fetch(userStake);
    } catch (fetchError: any) {
      // Check if account doesn't exist (expected for new users)
      const errorMsg = fetchError?.message || fetchError?.toString() || '';
      if (errorMsg.includes('Account does not exist') ||
          errorMsg.includes('AccountNotInitialized') ||
          errorMsg.includes('Invalid account discriminator')) {
        // Account doesn't exist yet - user hasn't staked
        return null;
      }
      // For other errors (network issues), throw to trigger retry
      throw fetchError;
    }
  } catch (error: any) {
    // Network errors or other issues - return null gracefully
    console.log('Could not fetch user stake:', error.message);
    return null;
  }
}

export async function getStakeInfo(walletPublicKey: PublicKey, wallet: any) {
  try {
    const stakeData = await getUserStake(walletPublicKey, wallet);

    if (!stakeData) {
      return {
        amount: 0,
        rewardsEarned: 0,
        lastStakeTime: 0,
        stakeAccount: '',
      };
    }

    // Convert BN to number, handling lamports (1 SOL = 1B lamports)
    return {
      amount: stakeData.amount?.toNumber() / 1_000_000_000 || 0,
      rewardsEarned: stakeData.totalRewardsEarned?.toNumber() / 1_000_000_000 || 0,
      lastStakeTime: stakeData.lastStakeTime?.toNumber() || 0,
      stakeAccount: walletPublicKey.toString(),
    };
  } catch (error: any) {
    console.error('Error fetching stake info:', error);
    return {
      amount: 0,
      rewardsEarned: 0,
      lastStakeTime: 0,
      stakeAccount: '',
    };
  }
}

export const CURRENT_APY = 7.0;
