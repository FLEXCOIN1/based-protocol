import * as anchor from "@coral-xyz/anchor";
import { Program, AnchorProvider, BN } from "@coral-xyz/anchor";
import { Connection, PublicKey, SystemProgram, LAMPORTS_PER_SOL, SYSVAR_CLOCK_PUBKEY, SYSVAR_STAKE_HISTORY_PUBKEY, StakeProgram } from "@solana/web3.js";
import idl from "./idl.json";

const PROGRAM_ID = new PublicKey("4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd");
const STAKE_CONFIG_ID = new PublicKey("StakeConfig11111111111111111111111111111111");
const DEFAULT_VALIDATOR = new PublicKey("J1to3PQfXidUUhprQWgdKkQAMWPJAEqSJ7amkBDE9qhF");

export const CURRENT_APY = 8.5;

async function accountExists(connection: Connection, address: PublicKey): Promise<boolean> {
  try {
    const accountInfo = await connection.getAccountInfo(address);
    return accountInfo !== null;
  } catch (error) {
    return false;
  }
}

export async function stakeSOL(wallet: any, amount: number, connection: Connection): Promise<string> {
  if (!wallet.publicKey || !wallet.connected) {
    throw new Error("Wallet not connected");
  }

  try {
    const provider = new AnchorProvider(connection, wallet, AnchorProvider.defaultOptions());
    const program = new Program(idl as any, PROGRAM_ID, provider);

    // Derive all PDAs with correct seeds (underscores, not hyphens)
    const [state] = PublicKey.findProgramAddressSync(
      [Buffer.from("state")],
      program.programId
    );

    const [userStake] = PublicKey.findProgramAddressSync(
      [Buffer.from("user_stake"), wallet.publicKey.toBuffer()],
      program.programId
    );

    const [vault] = PublicKey.findProgramAddressSync(
      [Buffer.from("vault")],
      program.programId
    );

    const [stakeAccount] = PublicKey.findProgramAddressSync(
      [Buffer.from("stake"), wallet.publicKey.toBuffer()],
      program.programId
    );

    // Check if protocol is initialized
    const stateExists = await accountExists(connection, state);
    if (!stateExists) {
      throw new Error("Protocol not initialized. Contact admin.");
    }

    // Check if user already has stake
    const userStakeExists = await accountExists(connection, userStake);
    if (userStakeExists) {
      throw new Error("You already have an active stake. Unstake first to stake again.");
    }

    console.log("Creating stake account with validator:", DEFAULT_VALIDATOR.toString());

    const stakeAmount = new BN(amount * LAMPORTS_PER_SOL);
    
    const txSignature = await program.methods
      .createStakeAccount(stakeAmount, DEFAULT_VALIDATOR)
      .accounts({
        state: state,
        userStake: userStake,
        user: wallet.publicKey,
        vault: vault,
        stakeAccount: stakeAccount,
        voteAccount: DEFAULT_VALIDATOR,
        systemProgram: SystemProgram.programId,
        stakeProgram: StakeProgram.programId,
        clock: SYSVAR_CLOCK_PUBKEY,
        stakeHistory: SYSVAR_STAKE_HISTORY_PUBKEY,
        stakeConfig: STAKE_CONFIG_ID,
      })
      .rpc();

    console.log("Stake created! TX:", txSignature);
    return txSignature;
  } catch (error: any) {
    console.error("Staking error:", error);
    throw new Error(`Failed to stake: ${error.message || error}`);
  }
}

export const depositSOL = stakeSOL;

export async function unstakeSOL(wallet: any, amount: number, connection: Connection): Promise<string> {
  throw new Error("Unstake functionality not yet implemented in the contract.");
}

export async function getUserStakeInfo(walletAddress: PublicKey, connection: Connection): Promise<any> {
  try {
    const provider = new AnchorProvider(connection, {} as any, AnchorProvider.defaultOptions());
    const program = new Program(idl as any, PROGRAM_ID, provider);

    const [userStake] = PublicKey.findProgramAddressSync(
      [Buffer.from("user_stake"), walletAddress.toBuffer()],
      program.programId
    );

    const userStakeExists = await accountExists(connection, userStake);
    
    if (!userStakeExists) {
      return {
        amount: new BN(0),
        rewardsEarned: new BN(0),
        lastStakeTime: new BN(0),
        exists: false,
      };
    }

    const stakeInfo = await program.account.UserStake.fetch(userStake);
    return {
      amount: stakeInfo.amount,
      rewardsEarned: stakeInfo.rewardsEarned,
      lastStakeTime: stakeInfo.lastStakeTime,
      exists: true,
    };
  } catch (error) {
    console.error("Error fetching stake info:", error);
    return {
      amount: new BN(0),
      rewardsEarned: new BN(0),
      lastStakeTime: new BN(0),
      exists: false,
    };
  }
}

export const getStakeInfo = getUserStakeInfo;
