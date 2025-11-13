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

      // Convert SOL to lamports
      const amountLamports = Math.floor(amount * 1_000_000_000);

      // Let Anchor auto-derive the PDAs based on the IDL
      const signature = await program.methods
        .deposit(amountLamports, null) // amount in lamports, no referrer
        .accounts({
          user: walletPublicKey,
        })
        .rpc();

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
    return await retryWithFailover(async () => {
      const anchorWallet = AnchorWallet.fromWalletAdapter(wallet);
      const program = await getProgram(anchorWallet);

      // Let Anchor auto-derive the PDA
      const [userStake] = PublicKey.findProgramAddressSync(
        [Buffer.from('user_stake'), walletPublicKey.toBuffer()],
        program.programId
      );

      return await program.account.userStake.fetch(userStake);
    });
  } catch (error: any) {
    // Account might not exist yet if user hasn't staked
    console.log('User stake account not found:', error.message);
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
