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

async function getBlockhashWithTimeout(connection: Connection, timeoutMs = 5000): Promise<string> {
  return Promise.race([
    connection.getLatestBlockhash('finalized').then(r => r.blockhash),
    new Promise<string>((_, reject) => 
      setTimeout(() => reject(new Error('Blockhash timeout')), timeoutMs)
    )
  ]);
}

export async function stakeSOL(wallet: any, amount: number, _connection: Connection): Promise<string> {
  if (!wallet.publicKey || !wallet.connected) {
    throw new Error("Wallet not connected");
  }

  console.log("=== STAKING", amount, "SOL ===");

  try {
    // Find PDAs
    const [state] = PublicKey.findProgramAddressSync([Buffer.from("state")], PROGRAM_ID);
    const [userStake] = PublicKey.findProgramAddressSync([Buffer.from("user_stake"), wallet.publicKey.toBuffer()], PROGRAM_ID);
    const [vault] = PublicKey.findProgramAddressSync([Buffer.from("vault")], PROGRAM_ID);
    const [stakeAccount] = PublicKey.findProgramAddressSync([Buffer.from("stake"), wallet.publicKey.toBuffer()], PROGRAM_ID);

    console.log("✅ PDAs calculated");

    // Build instruction data
    const discriminator = new Uint8Array([105, 24, 131, 19, 201, 250, 157, 73]);
    const amountLamports = Math.floor(amount * LAMPORTS_PER_SOL);
    const amountBytes = encodeU64(amountLamports);
    const validatorBytes = DEFAULT_VALIDATOR.toBytes();
    
    const data = new Uint8Array(discriminator.length + amountBytes.length + validatorBytes.length);
    data.set(discriminator, 0);
    data.set(amountBytes, discriminator.length);
    data.set(validatorBytes, discriminator.length + amountBytes.length);

    // Build instruction
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

    console.log("✅ Instruction built");

    // Build transaction
    const transaction = new Transaction().add(instruction);
    transaction.feePayer = wallet.publicKey;

    console.log("Fetching blockhash...");
    
    // Use fresh connection with timeout
    const freshConnection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    const blockhash = await getBlockhashWithTimeout(freshConnection, 5000);
    
    transaction.recentBlockhash = blockhash;

    console.log("✅ Transaction complete, sending to wallet...");
    
    const signature = await wallet.sendTransaction(transaction, freshConnection);
    
    console.log("✅ SENT:", signature);
    console.log("https://explorer.solana.com/tx/" + signature + "?cluster=devnet");
    
    await freshConnection.confirmTransaction(signature, 'confirmed');
    console.log("✅ CONFIRMED!");
    
    return signature;
  } catch (error: any) {
    console.error("❌ Staking failed:", error.message || error);
    throw error;
  }
}

export const depositSOL = stakeSOL;
export async function unstakeSOL() { throw new Error("Not implemented"); }
export async function getUserStakeInfo() { return { amount: 0, exists: false }; }
export const getStakeInfo = getUserStakeInfo;
