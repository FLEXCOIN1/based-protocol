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

const [userStakePda] = PublicKey.findProgramAddressSync(
  [Buffer.from("user_stake"), provider.wallet.publicKey.toBuffer()],
  program.programId
);

async function deposit() {
  try {
    const depositAmount = new anchor.BN(0.1 * anchor.web3.LAMPORTS_PER_SOL);
    
    const tx = await program.methods
      .deposit(depositAmount, null)
      .accountsPartial({
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    console.log("✅ Deposit successful!");
    console.log("   Transaction:", tx);
    console.log("   Amount: 0.1 SOL");
    
    const userStake = await program.account.userStake.fetch(userStakePda);
    console.log("\n📊 Your Stake:");
    console.log("   Staked:", userStake.amount.toNumber() / anchor.web3.LAMPORTS_PER_SOL, "SOL");
    console.log("   Multiplier:", userStake.multiplierPoints.toNumber(), "bps");
    console.log("   Leaderboard Rank:", userStake.leaderboardPosition.toNumber());
  } catch (err) {
    console.error("Error:", err);
  }
}

deposit();
