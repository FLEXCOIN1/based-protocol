import * as anchor from '@coral-xyz/anchor';
import { Program, AnchorProvider, Idl } from '@coral-xyz/anchor';
import { Connection, PublicKey } from '@solana/web3.js';
import { PROGRAM_ID, POOL_ADDRESS } from './config';
import IDL from './idl.json';

export async function getProgram(connection: Connection, wallet: any) {
  const provider = new AnchorProvider(connection, wallet, {
    commitment: 'confirmed',
  });
  
  return new Program(IDL as Idl, provider);
}

export async function depositToPool(
  program: Program,
  userPublicKey: PublicKey,
  amount: number
) {
  const amountBN = new anchor.BN(amount * 1_000_000_000);
  
  const [poolPDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("pool")],
    program.programId
  );
  
  const [userStakePDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("user_stake"), userPublicKey.toBuffer()],
    program.programId
  );
  
  const tx = await program.methods
    .deposit(amountBN, null)
    .accounts({
      pool: poolPDA,
      userStake: userStakePDA,
      user: userPublicKey,
      systemProgram: anchor.web3.SystemProgram.programId,
    })
    .rpc();
    
  return tx;
}

export async function withdrawFromPool(
  program: Program,
  userPublicKey: PublicKey,
  amount: number
) {
  const amountBN = new anchor.BN(amount * 1_000_000_000);
  
  const [poolPDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("pool")],
    program.programId
  );
  
  const [userStakePDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("user_stake"), userPublicKey.toBuffer()],
    program.programId
  );
  
  const tx = await program.methods
    .withdraw(amountBN)
    .accounts({
      pool: poolPDA,
      userStake: userStakePDA,
      user: userPublicKey,
      systemProgram: anchor.web3.SystemProgram.programId,
    })
    .rpc();
    
  return tx;
}

export async function claimRewards(
  program: Program,
  userPublicKey: PublicKey
) {
  const [poolPDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("pool")],
    program.programId
  );
  
  const [userStakePDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("user_stake"), userPublicKey.toBuffer()],
    program.programId
  );
  
  const tx = await program.methods
    .claimRewards()
    .accounts({
      pool: poolPDA,
      userStake: userStakePDA,
      user: userPublicKey,
    })
    .rpc();
    
  return tx;
}

export async function getUserStake(
  program: Program,
  userPublicKey: PublicKey
) {
  try {
    const [userStakePDA] = PublicKey.findProgramAddressSync(
      [Buffer.from("user_stake"), userPublicKey.toBuffer()],
      program.programId
    );
    
    const userAccount = await program.account.userStake.fetch(userStakePDA);
    
    return {
      staked: (userAccount.amount?.toNumber() || 0) / 1_000_000_000,
      multiplier: (userAccount.multiplier?.toNumber() || 0) / 10000,
      rank: userAccount.leaderboardRank?.toNumber() || 0,
      vestingStart: userAccount.vestingStart?.toNumber() || 0,
      lastClaim: userAccount.lastClaimTime?.toNumber() || 0,
      totalClaimed: (userAccount.totalClaimed?.toNumber() || 0) / 1_000_000_000,
    };
  } catch (e: any) {
    if (e.message?.includes('Account does not exist')) {
      return { staked: 0, multiplier: 0, rank: 0, vestingStart: 0, lastClaim: 0, totalClaimed: 0 };
    }
    console.error('Fetch error:', e);
    return { staked: 0, multiplier: 0, rank: 0, vestingStart: 0, lastClaim: 0, totalClaimed: 0 };
  }
}

export async function getPoolStats(program: Program) {
  try {
    const [poolPDA] = PublicKey.findProgramAddressSync(
      [Buffer.from("pool")],
      program.programId
    );
    
    const poolAccount = await program.account.stakingPool.fetch(poolPDA);
    
    return {
      totalStaked: (poolAccount.totalStaked?.toNumber() || 0) / 1_000_000_000,
      totalUsers: poolAccount.totalUsers?.toNumber() || 0,
      rewardRate: poolAccount.rewardRate?.toNumber() || 850,
    };
  } catch (e) {
    console.error('Pool fetch error:', e);
    return { totalStaked: 0, totalUsers: 0, rewardRate: 850 };
  }
}

export async function getLeaderboard(program: Program, limit: number = 10) {
  try {
    const [poolPDA] = PublicKey.findProgramAddressSync(
      [Buffer.from("pool")],
      program.programId
    );
    
    const poolAccount = await program.account.stakingPool.fetch(poolPDA);
    const leaderboard = poolAccount.leaderboard || [];
    
    return leaderboard.slice(0, limit).map((entry: any, index: number) => ({
      rank: index + 1,
      address: entry.user?.toString() || 'Unknown',
      staked: (entry.amount?.toNumber() || 0) / 1_000_000_000,
      multiplier: (entry.multiplier?.toNumber() || 0) / 10000,
    }));
  } catch (e) {
    console.error('Leaderboard fetch error:', e);
    return [];
  }
}

export function calculatePotentialEarnings(
  stakedAmount: number,
  daysHeld: number
) {
  const baseAPY = 0.085; // 8.5%
  const weeksHeld = daysHeld / 7;
  const multiplier = Math.min(1 + (weeksHeld * 0.005), 10); // Max 10X
  const effectiveAPY = baseAPY * multiplier;
  const yearlyEarnings = stakedAmount * effectiveAPY;
  const earnings = (yearlyEarnings / 365) * daysHeld;
  
  return {
    earnings: earnings,
    multiplier: multiplier,
    effectiveAPY: effectiveAPY,
  };
}

export function calculateWithdrawalPenalty(
  stakedAmount: number,
  daysStaked: number
) {
  if (daysStaked >= 365) return 0; // No penalty after 1 year
  if (daysStaked >= 180) return stakedAmount * 0.05; // 5% penalty 6-12 months
  return stakedAmount * 0.10; // 10% penalty < 6 months
}
