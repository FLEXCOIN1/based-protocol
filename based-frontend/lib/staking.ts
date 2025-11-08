import { Connection, PublicKey } from '@solana/web3.js';
import { getProgram, depositToPool, withdrawFromPool, getUserStake, getPoolStats as getPoolStatsContract, claimRewards } from './contract';
import { AnchorWallet } from './anchorWallet';
import { getUserProgress, updateLoginStreak, updateTotalStaked } from './userProgress';
import { calculateLevel, getUnlockedAchievements } from './gamification';

export async function depositSOL(
  connection: Connection,
  walletPublicKey: PublicKey,
  amount: number,
  wallet: any
) {
  const anchorWallet = AnchorWallet.fromWalletAdapter(wallet);
  const program = await getProgram(connection, anchorWallet);
  const signature = await depositToPool(program, walletPublicKey, amount);
  
  // Update total staked in localStorage
  const currentData = await getUserStake(program, walletPublicKey);
  updateTotalStaked(walletPublicKey.toString(), currentData.totalStaked);
  
  return signature;
}

export async function withdrawSOL(
  connection: Connection,
  walletPublicKey: PublicKey,
  amount: number,
  wallet: any
) {
  const anchorWallet = AnchorWallet.fromWalletAdapter(wallet);
  const program = await getProgram(connection, anchorWallet);
  const signature = await withdrawFromPool(program, walletPublicKey, amount);
  return signature;
}

export async function getStakeInfo(
  connection: Connection,
  walletPublicKey: PublicKey,
  wallet: any
) {
  const anchorWallet = AnchorWallet.fromWalletAdapter(wallet);
  const program = await getProgram(connection, anchorWallet);
  const blockchainData = await getUserStake(program, walletPublicKey);
  
  // Get localStorage data
  const progress = getUserProgress(walletPublicKey.toString());
  const loginStreak = updateLoginStreak(walletPublicKey.toString());
  
  // Get pool stats to check if founder
  const poolStats = await getPoolStatsContract(program);
  const isFounder = poolStats.totalUsers <= 100;
  
  // Merge data
  const mergedData = {
    ...blockchainData,
    hasWithdrawn: progress.hasWithdrawn,
    referrals: progress.referrals,
    loginStreak: loginStreak,
    isFounder: isFounder,
  };
  
  // Calculate level
  const level = calculateLevel(mergedData.weeksStaked);
  
  // Get unlocked achievements
  const achievements = getUnlockedAchievements(mergedData);
  
  return {
    ...mergedData,
    level: level,
    achievements: achievements,
  };
}

export async function getPoolStats(
  connection: Connection,
  wallet?: any
) {
  const dummyWallet = wallet || {
    publicKey: new PublicKey('11111111111111111111111111111111'),
    signTransaction: async (tx: any) => tx,
    signAllTransactions: async (txs: any[]) => txs,
  };
  const anchorWallet = AnchorWallet.fromWalletAdapter(dummyWallet);
  const program = await getProgram(connection, anchorWallet);
  const stats = await getPoolStatsContract(program);
  return stats;
}

export async function claimRewardsSOL(
  connection: Connection,
  walletPublicKey: PublicKey,
  wallet: any
) {
  const anchorWallet = AnchorWallet.fromWalletAdapter(wallet);
  const program = await getProgram(connection, anchorWallet);
  const signature = await claimRewards(program, walletPublicKey);
  return signature;
}
