import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { BasedProtocol } from "./target/types/based_protocol";
import { PublicKey, SystemProgram } from "@solana/web3.js";

const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);

const program = anchor.workspace.BasedProtocol as Program<BasedProtocol>;

const [poolPda] = PublicKey.findProgramAddressSync(
  [Buffer.from("pool")],
  program.programId
);

async function initializePool() {
  try {
    const rewardRate = new anchor.BN(850);
    
    const tx = await program.methods
      .initializePool(rewardRate)
      .accountsPartial({
        authority: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    console.log("✅ Pool initialized!");
    console.log("   Transaction:", tx);
    console.log("   Pool address:", poolPda.toString());
    
    const poolAccount = await program.account.stakingPool.fetch(poolPda);
    console.log("\n📊 Pool State:");
    console.log("   Reward Rate:", poolAccount.rewardRate.toNumber(), "bps");
    console.log("   Total Staked:", poolAccount.totalStaked.toNumber());
    console.log("   Total Users:", poolAccount.totalUsers.toNumber());
  } catch (err) {
    console.error("Error:", err);
  }
}

initializePool();
