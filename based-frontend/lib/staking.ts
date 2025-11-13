import * as anchor from "@coral-xyz/anchor";
import { Program, AnchorProvider, BN } from "@coral-xyz/anchor";
import { Connection, PublicKey, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";
import idl from "./idl.json";

const PROGRAM_ID = new PublicKey("4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd");

async function accountExists(connection: Connection, address: PublicKey): Promise<boolean> {
  try {
    const accountInfo = await connection.getAccountInfo(address);
    return accountInfo !== null;
  } catch (error) {
    return false;
  }
}

export async function stakeSOL(wallet: any, amount: number, connection: Connection): Promise<string> {
  if (!wallet.publicKey) throw new Error("Wallet not connected");

  const provider = new AnchorProvider(connection, wallet, AnchorProvider.defaultOptions());
  const program = new Program(idl as any, PROGRAM_ID, provider);

  const [userStakeAccount] = PublicKey.findProgramAddressSync([Buffer.from("user-stake"), wallet.publicKey.toBuffer()], program.programId);
  const [vault] = PublicKey.findProgramAddressSync([Buffer.from("vault")], program.programId);

  const userAccountExists = await accountExists(connection, userStakeAccount);

  try {
    let txSignature: string;
    if (!userAccountExists) {
      console.log("New user - initializing...");
      txSignature = await program.methods.initialize().accounts({user: wallet.publicKey, userStakeAccount, systemProgram: SystemProgram.programId}).rpc();
      await connection.confirmTransaction(txSignature, "confirmed");
      const stakeAmount = new BN(amount * LAMPORTS_PER_SOL);
      txSignature = await program.methods.stake(stakeAmount).accounts({user: wallet.publicKey, userStakeAccount, vault, systemProgram: SystemProgram.programId}).rpc();
    } else {
      console.log("Existing user - staking...");
      const stakeAmount = new BN(amount * LAMPORTS_PER_SOL);
      txSignature = await program.methods.stake(stakeAmount).accounts({user: wallet.publicKey, userStakeAccount, vault, systemProgram: SystemProgram.programId}).rpc();
    }
    return txSignature;
  } catch (error: any) {
    throw new Error(`Failed to stake: ${error.message || error}`);
  }
}

export async function unstakeSOL(wallet: any, amount: number, connection: Connection): Promise<string> {
  if (!wallet.publicKey) throw new Error("Wallet not connected");
  const provider = new AnchorProvider(connection, wallet, AnchorProvider.defaultOptions());
  const program = new Program(idl as any, PROGRAM_ID, provider);
  const [userStakeAccount] = PublicKey.findProgramAddressSync([Buffer.from("user-stake"), wallet.publicKey.toBuffer()], program.programId);
  const [vault] = PublicKey.findProgramAddressSync([Buffer.from("vault")], program.programId);
  const userAccountExists = await accountExists(connection, userStakeAccount);
  if (!userAccountExists) throw new Error("No stake account found. You must stake first.");
  try {
    const unstakeAmount = new BN(amount * LAMPORTS_PER_SOL);
    const txSignature = await program.methods.unstake(unstakeAmount).accounts({user: wallet.publicKey, userStakeAccount, vault, systemProgram: SystemProgram.programId}).rpc();
    return txSignature;
  } catch (error: any) {
    throw new Error(`Failed to unstake: ${error.message || error}`);
  }
}

export async function getUserStakeInfo(walletAddress: PublicKey, connection: Connection): Promise<any> {
  const provider = new AnchorProvider(connection, {} as any, AnchorProvider.defaultOptions());
  const program = new Program(idl as any, PROGRAM_ID, provider);
  const [userStakeAccount] = PublicKey.findProgramAddressSync([Buffer.from("user-stake"), walletAddress.toBuffer()], program.programId);
  const userAccountExists = await accountExists(connection, userStakeAccount);
  if (!userAccountExists) return {stakedAmount: new BN(0), lastStakeTime: new BN(0), tier: 0, exists: false};
  try {
    const stakeInfo = await program.account.userStakeAccount.fetch(userStakeAccount);
    return {...stakeInfo, exists: true};
  } catch (error) {
    return {stakedAmount: new BN(0), lastStakeTime: new BN(0), tier: 0, exists: false};
  }
}
