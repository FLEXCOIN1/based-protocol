import { Connection, PublicKey, Transaction, TransactionInstruction, clusterApiUrl, SystemProgram } from "@solana/web3.js";
import { getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from "@solana/spl-token";

const PROGRAM_ID = new PublicKey("4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd");
const USDC_MINT = new PublicKey("4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU");

function encodeU64(value: number): Uint8Array {
  const arr = new Uint8Array(8);
  let num = value;
  for (let i = 0; i < 8; i++) {
    arr[i] = num & 0xff;
    num = Math.floor(num / 256);
  }
  return arr;
}

export async function stakeUSDC(wallet: any, amount: number, connection: Connection): Promise<string> {
  if (!wallet.publicKey || !wallet.connected) throw new Error("Wallet not connected");

  console.log("=== STAKING", amount, "USDC ===");

  const freshConnection = new Connection(clusterApiUrl('devnet'), 'confirmed');
  
  const [userStake] = PublicKey.findProgramAddressSync([Buffer.from("user_stake"), wallet.publicKey.toBuffer()], PROGRAM_ID);
  const [vaultUsdc] = PublicKey.findProgramAddressSync([Buffer.from("vault_usdc")], PROGRAM_ID);
  
  const userUsdc = await getAssociatedTokenAddress(USDC_MINT, wallet.publicKey);
  
  console.log("PDAs:", { userStake: userStake.toString(), vaultUsdc: vaultUsdc.toString(), userUsdc: userUsdc.toString() });

  const discriminator = new Uint8Array([251, 129, 45, 51, 186, 215, 88, 181]);
  const amountBytes = encodeU64(Math.floor(amount * 1e6)); // USDC has 6 decimals
  const data = new Uint8Array(discriminator.length + amountBytes.length);
  data.set(discriminator, 0);
  data.set(amountBytes, discriminator.length);

  const instruction = new TransactionInstruction({
    keys: [
      { pubkey: userStake, isSigner: false, isWritable: true },
      { pubkey: wallet.publicKey, isSigner: true, isWritable: true },
      { pubkey: userUsdc, isSigner: false, isWritable: true },
      { pubkey: vaultUsdc, isSigner: false, isWritable: true },
      { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
    ],
    programId: PROGRAM_ID,
    data: Buffer.from(data),
  });

  const transaction = new Transaction().add(instruction);
  transaction.feePayer = wallet.publicKey;
  const { blockhash } = await freshConnection.getLatestBlockhash('confirmed');
  transaction.recentBlockhash = blockhash;

  console.log("Simulating...");
  const simulation = await freshConnection.simulateTransaction(transaction);
  if (simulation.value.err) {
    console.error("❌ SIMULATION FAILED:", simulation.value.err);
    console.error("Logs:", simulation.value.logs);
    throw new Error("Simulation failed: " + JSON.stringify(simulation.value.err));
  }

  console.log("✅ Simulation passed! Sending to Phantom...");
  const signature = await wallet.sendTransaction(transaction, freshConnection);
  await freshConnection.confirmTransaction(signature, 'confirmed');
  
  console.log("✅ USDC STAKED!");
  return signature;
}

export async function unstakeUSDC(wallet: any, amount: number, connection: Connection): Promise<string> {
  if (!wallet.publicKey || !wallet.connected) throw new Error("Wallet not connected");

  console.log("=== UNSTAKING", amount, "USDC ===");

  const freshConnection = new Connection(clusterApiUrl('devnet'), 'confirmed');
  
  const [userStake] = PublicKey.findProgramAddressSync([Buffer.from("user_stake"), wallet.publicKey.toBuffer()], PROGRAM_ID);
  const [vaultUsdc] = PublicKey.findProgramAddressSync([Buffer.from("vault_usdc")], PROGRAM_ID);
  
  const userUsdc = await getAssociatedTokenAddress(USDC_MINT, wallet.publicKey);

  // Get unstake_usdc discriminator
  const discriminator = new Uint8Array([239, 38, 26, 145, 72, 228, 102, 175]);
  const amountBytes = encodeU64(Math.floor(amount * 1e6));
  const data = new Uint8Array(discriminator.length + amountBytes.length);
  data.set(discriminator, 0);
  data.set(amountBytes, discriminator.length);

  const instruction = new TransactionInstruction({
    keys: [
      { pubkey: userStake, isSigner: false, isWritable: true },
      { pubkey: wallet.publicKey, isSigner: true, isWritable: true },
      { pubkey: userUsdc, isSigner: false, isWritable: true },
      { pubkey: vaultUsdc, isSigner: false, isWritable: true },
      { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    ],
    programId: PROGRAM_ID,
    data: Buffer.from(data),
  });

  const transaction = new Transaction().add(instruction);
  transaction.feePayer = wallet.publicKey;
  const { blockhash } = await freshConnection.getLatestBlockhash('confirmed');
  transaction.recentBlockhash = blockhash;

  console.log("Simulating unstake...");
  const simulation = await freshConnection.simulateTransaction(transaction);
  if (simulation.value.err) {
    console.error("❌ SIMULATION FAILED:", simulation.value.err);
    console.error("Logs:", simulation.value.logs);
    throw new Error("Unstake simulation failed");
  }

  console.log("✅ Simulation passed! Sending...");
  const signature = await wallet.sendTransaction(transaction, freshConnection);
  await freshConnection.confirmTransaction(signature, 'confirmed');
  
  return signature;
}

export async function getUSDCBalance(walletAddress: PublicKey, connection: Connection): Promise<number> {
  try {
    const userUsdc = await getAssociatedTokenAddress(USDC_MINT, walletAddress);
    const balance = await connection.getTokenAccountBalance(userUsdc);
    return Number(balance.value.amount) / 1e6;
  } catch {
    return 0;
  }
}
