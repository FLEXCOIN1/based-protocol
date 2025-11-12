import { PublicKey } from '@solana/web3.js';
import { getProgram, retryWithFailover } from './contract';
import { AnchorWallet } from './anchorWallet';
import { getUserProgress, updateLoginStreak, updateTotalStaked } from './userProgress';
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
      const signature = await program.methods
        .deposit(amount)
        .accounts({ user: walletPublicKey })
        .rpc();
      
      const currentData = await getUserStake(walletPublicKey, wallet);
      updateTotalStaked(walletPublicKey.toString(), currentData.totalStaked);
      
      return signature;
    });
  } catch (error: any) {
    handleError(error, {
      action: 'deposit',
      walletAddress: walletPublicKey.toBase58(),
      amount,
    });
    throw new Error(getUserFriendlyError(error));
  }
}

export async function withdrawSOL(
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
      return await program.methods
        .withdraw(amount)
        .accounts({ user: walletPublicKey })
        .rpc();
    });
  } catch (error: any) {
    handleError(error, {
      action: 'withdraw',
      walletAddress: walletPublicKey.toBase58(),
      amount,
    });
    throw new Error(getUserFriendlyError(error));
  }
}

export async function getUserStake(
  walletPublicKey: PublicKey,
  wallet: any
) {
  try {
    return await retryWithFailover(async () => {
      const anchorWallet = AnchorWallet.fromWalletAdapter(wallet);
      const program = await getProgram(anchorWallet);
      return await program.account.userStake.fetch(walletPublicKey);
    });
  } catch (error: any) {
    handleError(error, {
      action: 'getUserStake',
      walletAddress: walletPublicKey.toBase58(),
    });
    throw error;
  }
}

export async function claimStakingRewards(
  walletPublicKey: PublicKey,
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
      return await program.methods
        .claimRewards()
        .accounts({ user: walletPublicKey })
        .rpc();
    });
  } catch (error: any) {
    handleError(error, {
      action: 'claimRewards',
      walletAddress: walletPublicKey.toBase58(),
    });
    throw new Error(getUserFriendlyError(error));
  }
}

export async function getPoolStats(wallet: any) {
  try {
    return await retryWithFailover(async () => {
      const anchorWallet = AnchorWallet.fromWalletAdapter(wallet);
      const program = await getProgram(anchorWallet);
      return await program.account.poolStats.fetch(/* pool address */);
    });
  } catch (error: any) {
    handleError(error, { action: 'getPoolStats' });
    throw error;
  }
}

export async function getStakeInfo(
  walletPublicKey: PublicKey,
  wallet: any
) {
  try {
    return await retryWithFailover(async () => {
      const anchorWallet = AnchorWallet.fromWalletAdapter(wallet);
      const program = await getProgram(anchorWallet);
      const blockchainData = await program.account.userStake.fetch(walletPublicKey);
      const progress = getUserProgress(walletPublicKey.toString());
      
      return {
        ...blockchainData,
        ...progress
      };
    });
  } catch (error: any) {
    handleError(error, {
      action: 'getStakeInfo',
      walletAddress: walletPublicKey.toBase58(),
    });
    throw error;
  }
}
