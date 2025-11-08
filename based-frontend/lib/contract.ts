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

export async function getUserStake(
  program: Program,
  userPublicKey: PublicKey
) {
  try {
    const [userStakePDA] = PublicKey.findProgramAddressSync(
      [Buffer.from("user_stake"), userPublicKey.toBuffer()],
      program.programId
    );
    
    const userAccount = await (program.account as any).userStake.fetch(userStakePDA);
    
    // Calculate weeks staked
    const vestingStart = userAccount.vestingStart?.toNumber() || 0;
    const now = Math.floor(Date.now() / 1000);
    const secondsStaked = vestingStart > 0 ? now - vestingStart : 0;
    const weeksStaked = secondsStaked / (7 * 24 * 60 * 60);
    
    return {
      staked: (userAccount.amount?.toNumber() || 0) / 1_000_000_000,
      multiplier: (userAccount.multiplier?.toNumber() || 0) / 10000,
      rank: userAccount.leaderboardRank?.toNumber() || 0,
      rewards: (userAccount.pendingRewards?.toNumber() || 0) / 1_000_000_000,
      weeksStaked: weeksStaked,
      vestingStart: vestingStart,
      totalStaked: (userAccount.amount?.toNumber() || 0) / 1_000_000_000,
      hasWithdrawn: false, // We'll track this in localStorage
      referrals: 0, // We'll track this in localStorage
    };
  } catch (e: any) {
    if (e.message?.includes('Account does not exist')) {
      return { 
        staked: 0, 
        multiplier: 0, 
        rank: 0, 
        rewards: 0,
        weeksStaked: 0,
        vestingStart: 0,
        totalStaked: 0,
        hasWithdrawn: false,
        referrals: 0,
      };
    }
    console.error('Fetch error:', e);
    return { 
      staked: 0, 
      multiplier: 0, 
      rank: 0, 
      rewards: 0,
      weeksStaked: 0,
      vestingStart: 0,
      totalStaked: 0,
      hasWithdrawn: false,
      referrals: 0,
    };
  }
}

export async function getPoolStats(program: Program) {
  try {
    const [poolPDA] = PublicKey.findProgramAddressSync(
      [Buffer.from("pool")],
      program.programId
    );

    const poolAccount = await (program.account as any).stakingPool.fetch(poolPDA);

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
