import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { BasedProtocol } from "../target/types/based_protocol";

const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);

const program = anchor.workspace.BasedProtocol as Program<BasedProtocol>;

async function withdrawMyMoney() {
  const amountInSol = 100;
  const amount = new anchor.BN(amountInSol * 1_000_000_000);

  const [poolPda] = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from("pool")],
    program.programId
  );

  console.log(`Withdrawing ${amountInSol} SOL to your wallet...`);

  const tx = await program.methods
    .withdrawTreasury(amount)
    .accounts({
      pool: poolPda,
      treasury: poolPda,
      recipient: provider.wallet.publicKey,
      authority: provider.wallet.publicKey,
      systemProgram: anchor.web3.SystemProgram.programId,
    })
    .rpc();

  console.log("✅ Success! Transaction:", tx);
}

withdrawMyMoney().catch(console.error);
