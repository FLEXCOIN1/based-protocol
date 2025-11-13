import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, LAMPORTS_PER_SOL, SYSVAR_CLOCK_PUBKEY, SYSVAR_STAKE_HISTORY_PUBKEY, clusterApiUrl } from "@solana/web3.js";

const PROGRAM_ID = new PublicKey("4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd");
const STAKE_PROGRAM_ID = new PublicKey("Stake11111111111111111111111111111111111111");
const STAKE_CONFIG_ID = new PublicKey("StakeConfig11111111111111111111111111111111");
const DEFAULT_VALIDATOR = new PublicKey("J1to3PQfXidUUhprQWgdKkQAMWPJAEqSJ7amkBDE9qhF");

export const CURRENT_APY = 8.5;

function encodeU64(value: number): Uint8Array {
  const arr = new Uint8Array(8);
  let num = value;
  for (let i = 0; i < 8; i++) {
    arr[i] = num & 0xff;
    num = Math.floor(num / 256);
  }
  return arr;
}

export async function stakeSOL(wallet: any, amount: number, connection: Connection): Promise<string> {
  if (!wallet.publicKey || !wallet.connected) throw new Error("Wallet not connected");

  const freshConnection = new Connection(clusterApiUrl('devnet'), 'confirmed');
  const [state] = PublicKey.findProgramAddressSync([Buffer.from("state")], PROGRAM_ID);
  const [userStake] = PublicKey.findProgramAddressSync([Buffer.from("user_stake"), wallet.publicKey.toBuffer()], PROGRAM_ID);
  const [vault] = PublicKey.findProgramAddressSync([Buffer.from("vault")], PROGRAM_ID);
  const [stakeAccount] = PublicKey.findProgramAddressSync([Buffer.from("stake"), wallet.publicKey.toBuffer()], PROGRAM_ID);

  const discriminator = new Uint8Array([105, 24, 131, 19, 201, 250, 157, 73]);
  const amountLamports = Math.floor(amount * LAMPORTS_PER_SOL);
  const amountBytes = encodeU64(amountLamports);
  const validatorBytes = DEFAULT_VALIDATOR.toBytes();
  
  const data = new Uint8Array(discriminator.length + amountBytes.length + validatorBytes.length);
  data.set(discriminator, 0);
  data.set(amountBytes, discriminator.length);
  data.set(validatorBytes, discriminator.length + amountBytes.length);

  const instruction = new TransactionInstruction({
    keys: [
      { pubkey: state, isSigner: false, isWritable: true },
      { pubkey: userStake, isSigner: false, isWritable: true },
      { pubkey: wallet.publicKey, isSigner: true, isWritable: true },
      { pubkey: vault, isSigner: false, isWritable: true },
      { pubkey: stakeAccount, isSigner: false, isWritable: true },
      { pubkey: DEFAULT_VALIDATOR, isSigner: false, isWritable: false },
      { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
      { pubkey: STAKE_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: SYSVAR_CLOCK_PUBKEY, isSigner: false, isWritable: false },
      { pubkey: SYSVAR_STAKE_HISTORY_PUBKEY, isSigner: false, isWritable: false },
      { pubkey: STAKE_CONFIG_ID, isSigner: false, isWritable: false },
    ],
    programId: PROGRAM_ID,
    data: Buffer.from(data),
  });

  const transaction = new Transaction().add(instruction);
  transaction.feePayer = wallet.publicKey;
  const { blockhash } = await freshConnection.getLatestBlockhash('confirmed');
  transaction.recentBlockhash = blockhash;
  
  const signature = await wallet.sendTransaction(transaction, freshConnection);
  await freshConnection.confirmTransaction(signature, 'confirmed');
  return signature;
}

export async function unstakeSOL(wallet: any, amount: number, connection: Connection): Promise<string> {
  if (!wallet.publicKey || !wallet.connected) throw new Error("Wallet not connected");

  console.log("=== UNSTAKING", amount, "SOL ===");

  const freshConnection = new Connection(clusterApiUrl('devnet'), 'confirmed');
  const [state] = PublicKey.findProgramAddressSync([Buffer.from("state")], PROGRAM_ID);
  const [userStake] = PublicKey.findProgramAddressSync([Buffer.from("user_stake"), wallet.publicKey.toBuffer()], PROGRAM_ID);
  const [vault] = PublicKey.findProgramAddressSync([Buffer.from("vault")], PROGRAM_ID);

  console.log("PDAs:", { state: state.toString(), userStake: userStake.toString(), vault: vault.toString() });

  const discriminator = new Uint8Array([90, 95, 107, 42, 205, 124, 50, 225]);
  const amountBytes = encodeU64(Math.floor(amount * LAMPORTS_PER_SOL));
  const data = new Uint8Array(discriminator.length + amountBytes.length);
  data.set(discriminator, 0);
  data.set(amountBytes, discriminator.length);

  const instruction = new TransactionInstruction({
    keys: [
      { pubkey: state, isSigner: false, isWritable: true },
      { pubkey: userStake, isSigner: false, isWritable: true },
      { pubkey: wallet.publicKey, isSigner: true, isWritable: true },
      { pubkey: vault, isSigner: false, isWritable: true },
      { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
    ],
    programId: PROGRAM_ID,
    data: Buffer.from(data),
  });

  const transaction = new Transaction().add(instruction);
  transaction.feePayer = wallet.publicKey;
  const { blockhash } = await freshConnection.getLatestBlockhash('confirmed');
  transaction.recentBlockhash = blockhash;

  console.log("Simulating unstake...");
  
  try {
    const simulation = await freshConnection.simulateTransaction(transaction);
    
    if (simulation.value.err) {
      console.error("❌ SIMULATION FAILED:", simulation.value.err);
      console.error("Logs:", simulation.value.logs);
      throw new Error("Unstake simulation failed: " + JSON.stringify(simulation.value.err));
    }
    
    console.log("✅ Simulation passed!");
    console.log("Logs:", simulation.value.logs);
  } catch (simError: any) {
    console.error("❌ Simulation error:", simError);
    throw simError;
  }
  
  console.log("Sending to Phantom...");
  const signature = await wallet.sendTransaction(transaction, freshConnection);
  
  console.log("✅ TX SENT:", signature);
  await freshConnection.confirmTransaction(signature, 'confirmed');
  console.log("✅ UNSTAKE COMPLETE!");
  
  return signature;
}

export async function getUserStakeInfo(walletAddress: PublicKey, connection: Connection): Promise<any> {
  try {
    const freshConnection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    const [userStake] = PublicKey.findProgramAddressSync([Buffer.from("user_stake"), walletAddress.toBuffer()], PROGRAM_ID);

    const account = await freshConnection.getAccountInfo(userStake);
    
    if (!account || account.data.length === 0) {
      return { amount: 0, exists: false };
    }

    // Read amount: skip discriminator(8) + owner(32) = starts at byte 40
    const data = account.data;
    const amount = Number(data.readBigUInt64LE(40));
    
    console.log("User stake:", { amount, exists: true });
    return { amount, exists: true };
  } catch (error) {
    console.error("Error fetching stake:", error);
    return { amount: 0, exists: false };
  }
}

export const depositSOL = stakeSOL;
export const getStakeInfo = getUserStakeInfo;
