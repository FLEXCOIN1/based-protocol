import { Connection, PublicKey } from '@solana/web3.js';
import { getProgram, depositToPool, withdrawFromPool, claimRewards, getUserStake, getPoolStats as getPoolStatsContract, getLeaderboard } from './contract';
import { AnchorWallet } from './anchorWallet';

export async function depositSOL(
  connection: Connection,
  walletPublicKey: PublicKey,
  amount: number,
  wallet: any
) {
  const anchorWallet = AnchorWallet.fromWalletAdapter(wallet);
  const program = await getProgram(connection, anchorWallet);
  const signature = await depositToPool(program, walletPublicKey, amount);
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

export async function getStakeInfo(
  connection: Connection,
  walletPublicKey: PublicKey,
  wallet: any
) {
  const anchorWallet = AnchorWallet.fromWalletAdapter(wallet);
  const program = await getProgram(connection, anchorWallet);
  const stakeData = await getUserStake(program, walletPublicKey);
  return stakeData;
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

export async function fetchLeaderboard(
  connection: Connection,
  wallet: any,
  limit: number = 10
) {
  const anchorWallet = AnchorWallet.fromWalletAdapter(wallet);
  const program = await getProgram(connection, anchorWallet);
  const leaderboard = await getLeaderboard(program, limit);
  return leaderboard;
}