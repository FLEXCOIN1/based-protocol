import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { BasedProtocol } from "../target/types/based_protocol";
import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

async function main() {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  
  const program = anchor.workspace.BasedProtocol as Program<BasedProtocol>;
  
  const [poolPDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("pool")],
    program.programId
  );
  
  const [treasuryPDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("treasury")],
    program.programId
  );
  
  // Amount to withdraw (in SOL)
  const withdrawAmount = 0.1; // Test with small amount
  
  console.log("Withdrawing", withdrawAmount, "SOL from treasury...");
  
  const tx = await program.methods
    .withdrawTreasury(new anchor.BN(withdrawAmount * LAMPORTS_PER_SOL))
    .accounts({
      pool: poolPDA,
      treasury: treasuryPDA,
      recipient: provider.wallet.publicKey,
      authority: provider.wallet.publicKey,
    })
    .rpc();
  
  console.log("✅ Withdrawn!", tx);
  console.log(`New balance: ${await provider.connection.getBalance(provider.wallet.publicKey) / LAMPORTS_PER_SOL} SOL`);
}

main().catch(console.error);
