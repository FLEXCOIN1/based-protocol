import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, LAMPORTS_PER_SOL, SYSVAR_CLOCK_PUBKEY, SYSVAR_STAKE_HISTORY_PUBKEY } from "@solana/web3.js";

const PROGRAM_ID = new PublicKey("4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd");
const STAKE_PROGRAM_ID = new PublicKey("Stake11111111111111111111111111111111111111");
const STAKE_CONFIG_ID = new PublicKey("StakeConfig11111111111111111111111111111111");
const DEFAULT_VALIDATOR = new PublicKey("J1to3PQfXidUUhprQWgdKkQAMWPJAEqSJ7amkBDE9qhF");

export const CURRENT_APY = 8.5;

export async function stakeSOL(wallet: any, amount: number, connection: Connection): Promise<string> {
  if (!wallet.publicKey || !wallet.connected) {
    throw new Error("Wallet not connected");
  }

  try {
    console.log("=== STAKING ===");
    console.log("User:", wallet.publicKey.toString());
    console.log("Amount:", amount, "SOL");

    // Find PDAs
    const [state] = PublicKey.findProgramAddressSync(
      [Buffer.from("state")],
      PROGRAM_ID
    );

    const [userStake] = PublicKey.findProgramAddressSync(
      [Buffer.from("user_stake"), wallet.publicKey.toBuffer()],
      PROGRAM_ID
    );

    const [vault] = PublicKey.findProgramAddressSync(
      [Buffer.from("vault")],
      PROGRAM_ID
    );

    const [stakeAccount] = PublicKey.findProgramAddressSync(
      [Buffer.from("stake"), wallet.publicKey.toBuffer()],
      PROGRAM_ID
    );

    console.log("State PDA:", state.toString());
    console.log("UserStake PDA:", userStake.toString());
    console.log("Vault PDA:", vault.toString());
    console.log("StakeAccount PDA:", stakeAccount.toString());

    // Build instruction data
    const discriminator = Buffer.from([105, 24, 131, 19, 201, 250, 157, 73]);
    
    const amountLamports = BigInt(Math.floor(amount * LAMPORTS_PER_SOL));
    const amountBuffer = Buffer.alloc(8);
    amountBuffer.writeBigUInt64LE(amountLamports);
    
    const validatorBuffer = DEFAULT_VALIDATOR.toBuffer();
    const data = Buffer.concat([discriminator, amountBuffer, validatorBuffer]);

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
      data,
    });

    console.log("✅ Instruction built");

    // Build transaction
    const transaction = new Transaction().add(instruction);
    transaction.feePayer = wallet.publicKey;
    
    const { blockhash } = await connection.getLatestBlockhash('finalized');
    transaction.recentBlockhash = blockhash;

    console.log("✅ Transaction built, sending to wallet for signature...");

    // Sign and send
    const signed = await wallet.signTransaction(transaction);
    console.log("✅ Transaction signed, sending...");

    const signature = await connection.sendRawTransaction(signed.serialize(), {
      skipPreflight: false,
      preflightCommitment: 'confirmed'
    });

    console.log("✅ Transaction sent:", signature);
    console.log("View on explorer: https://explorer.solana.com/tx/" + signature + "?cluster=devnet");

    // Wait for confirmation
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    
    if (confirmation.value.err) {
      throw new Error("Transaction failed: " + JSON.stringify(confirmation.value.err));
    }

    console.log("✅ STAKE SUCCESS!");
    return signature;

  } catch (error: any) {
    console.error("=== STAKING ERROR ===");
    console.error(error);
    
    if (error.message) {
      throw new Error(error.message);
    }
    throw error;
  }
}

export const depositSOL = stakeSOL;

export async function unstakeSOL(wallet: any, amount: number, connection: Connection): Promise<string> {
  throw new Error("Unstake not implemented yet");
}

export async function getUserStakeInfo(walletAddress: PublicKey, connection: Connection): Promise<any> {
  return {
    amount: BigInt(0),
    rewardsEarned: BigInt(0),
    exists: false,
  };
}

export const getStakeInfo = getUserStakeInfo;
