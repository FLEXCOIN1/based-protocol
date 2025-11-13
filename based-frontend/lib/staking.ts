import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, LAMPORTS_PER_SOL, SYSVAR_CLOCK_PUBKEY, SYSVAR_STAKE_HISTORY_PUBKEY } from "@solana/web3.js";
import * as borsh from "@coral-xyz/borsh";

const PROGRAM_ID = new PublicKey("4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd");
const STAKE_PROGRAM_ID = new PublicKey("Stake11111111111111111111111111111111111111");
const STAKE_CONFIG_ID = new PublicKey("StakeConfig11111111111111111111111111111111");
const DEFAULT_VALIDATOR = new PublicKey("J1to3PQfXidUUhprQWgdKkQAMWPJAEqSJ7amkBDE9qhF");

export const CURRENT_APY = 8.5;

// Manual instruction builder - NO ANCHOR
async function createStakeInstruction(
  userPubkey: PublicKey,
  amount: bigint
): Promise<TransactionInstruction> {
  
  // Find PDAs manually
  const [state] = PublicKey.findProgramAddressSync(
    [Buffer.from("state")],
    PROGRAM_ID
  );

  const [userStake] = PublicKey.findProgramAddressSync(
    [Buffer.from("user_stake"), userPubkey.toBuffer()],
    PROGRAM_ID
  );

  const [vault] = PublicKey.findProgramAddressSync(
    [Buffer.from("vault")],
    PROGRAM_ID
  );

  const [stakeAccount] = PublicKey.findProgramAddressSync(
    [Buffer.from("stake"), userPubkey.toBuffer()],
    PROGRAM_ID
  );

  // Create instruction data manually
  // Discriminator for create_stake_account: [105, 24, 131, 19, 201, 250, 157, 73]
  const discriminator = Buffer.from([105, 24, 131, 19, 201, 250, 157, 73]);
  
  // Encode amount (u64) and validator (pubkey)
  const amountBuffer = Buffer.alloc(8);
  amountBuffer.writeBigUInt64LE(amount);
  
  const validatorBuffer = DEFAULT_VALIDATOR.toBuffer();
  
  const data = Buffer.concat([discriminator, amountBuffer, validatorBuffer]);

  // Build accounts array
  const keys = [
    { pubkey: state, isSigner: false, isWritable: true },
    { pubkey: userStake, isSigner: false, isWritable: true },
    { pubkey: userPubkey, isSigner: true, isWritable: true },
    { pubkey: vault, isSigner: false, isWritable: true },
    { pubkey: stakeAccount, isSigner: false, isWritable: true },
    { pubkey: DEFAULT_VALIDATOR, isSigner: false, isWritable: false },
    { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
    { pubkey: STAKE_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: SYSVAR_CLOCK_PUBKEY, isSigner: false, isWritable: false },
    { pubkey: SYSVAR_STAKE_HISTORY_PUBKEY, isSigner: false, isWritable: false },
    { pubkey: STAKE_CONFIG_ID, isSigner: false, isWritable: false },
  ];

  return new TransactionInstruction({
    keys,
    programId: PROGRAM_ID,
    data,
  });
}

export async function stakeSOL(wallet: any, amount: number, connection: Connection): Promise<string> {
  if (!wallet.publicKey || !wallet.connected) {
    throw new Error("Wallet not connected");
  }

  try {
    console.log("=== MANUAL TRANSACTION BUILD ===");
    console.log("User:", wallet.publicKey.toString());
    console.log("Amount:", amount, "SOL");

    // Check if protocol is initialized
    const [state] = PublicKey.findProgramAddressSync(
      [Buffer.from("state")],
      PROGRAM_ID
    );

    const stateAccount = await connection.getAccountInfo(state);
    if (!stateAccount) {
      throw new Error("❌ Protocol not initialized. Contact admin to run 'initialize' first.");
    }

    console.log("✅ Protocol state exists");

    // Check if user already has a stake
    const [userStake] = PublicKey.findProgramAddressSync(
      [Buffer.from("user_stake"), wallet.publicKey.toBuffer()],
      PROGRAM_ID
    );

    const userStakeAccount = await connection.getAccountInfo(userStake);
    if (userStakeAccount) {
      throw new Error("❌ You already have an active stake. The contract doesn't support multiple stakes yet.");
    }

    console.log("✅ No existing stake found - proceeding");

    // Build transaction manually
    const amountLamports = BigInt(Math.floor(amount * LAMPORTS_PER_SOL));
    const instruction = await createStakeInstruction(wallet.publicKey, amountLamports);

    const transaction = new Transaction().add(instruction);
    transaction.feePayer = wallet.publicKey;
    transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

    console.log("✅ Transaction built");

    // Sign and send
    const signed = await wallet.signTransaction(transaction);
    const signature = await connection.sendRawTransaction(signed.serialize());

    console.log("✅ Transaction sent:", signature);

    // Wait for confirmation
    await connection.confirmTransaction(signature, "confirmed");

    console.log("✅ Transaction confirmed!");
    return signature;

  } catch (error: any) {
    console.error("=== STAKING ERROR ===");
    console.error(error);
    throw error;
  }
}

export const depositSOL = stakeSOL;

export async function unstakeSOL(wallet: any, amount: number, connection: Connection): Promise<string> {
  throw new Error("Unstake not implemented in contract yet");
}

export async function getUserStakeInfo(walletAddress: PublicKey, connection: Connection): Promise<any> {
  try {
    const [userStake] = PublicKey.findProgramAddressSync(
      [Buffer.from("user_stake"), walletAddress.toBuffer()],
      PROGRAM_ID
    );

    const account = await connection.getAccountInfo(userStake);
    
    if (!account) {
      return {
        amount: BigInt(0),
        rewardsEarned: BigInt(0),
        exists: false,
      };
    }

    // Manual deserialization (skip for now, just return exists)
    return {
      amount: BigInt(0),
      rewardsEarned: BigInt(0),
      exists: true,
    };
  } catch (error) {
    return {
      amount: BigInt(0),
      rewardsEarned: BigInt(0),
      exists: false,
    };
  }
}

export const getStakeInfo = getUserStakeInfo;
