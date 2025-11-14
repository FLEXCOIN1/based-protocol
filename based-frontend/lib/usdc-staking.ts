import { Connection, PublicKey, Transaction, TransactionInstruction, clusterApiUrl } from "@solana/web3.js";
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

  // Get discriminator for stake_usdc from IDL
  const discriminator = new Uint8Array([177, 165, 232, 89, 160, 28, 149, 42]);
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
      { pubkey: PublicKey.default, isSigner: false, isWritable: false }, // system_program placeholder
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
  
  return signature;
}
