import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { BasedProtocol } from "../target/types/based_protocol";
import { PublicKey } from "@solana/web3.js";

describe("Native Staking", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const program = anchor.workspace.BasedProtocol as Program<BasedProtocol>;

  it("Initializes and stakes", async () => {
    const [state] = PublicKey.findProgramAddressSync(
      [Buffer.from("state")],
      program.programId
    );

    const [vault] = PublicKey.findProgramAddressSync(
      [Buffer.from("vault")],
      program.programId
    );

    console.log("State:", state.toString());
    console.log("Vault:", vault.toString());

    try {
      // Initialize
      await program.methods
        .initialize()
        .accounts({
          state,
          authority: provider.wallet.publicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        })
        .rpc();
      
      console.log("✅ Initialized");

      // Stake 0.1 SOL
      await program.methods
        .stakeSol(new anchor.BN(100000000))
        .accounts({
          state,
          user: provider.wallet.publicKey,
          vault,
          systemProgram: anchor.web3.SystemProgram.programId,
        })
        .rpc();
      
      const stateAccount = await program.account.protocolState.fetch(state);
      console.log("✅ Staked! Total:", stateAccount.totalStaked.toString());
    } catch (e) {
      console.log("❌ Error:", e.message);
    }
  });
});
