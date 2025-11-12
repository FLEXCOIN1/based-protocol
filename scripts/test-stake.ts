import * as anchor from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import idl from "../target/idl/based_protocol.json";

const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);

const programId = new PublicKey("4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd");
const program = new anchor.Program(idl as any, programId, provider);

(async () => {
  const [state] = PublicKey.findProgramAddressSync(
    [Buffer.from("state")],
    programId
  );
  
  const [vault] = PublicKey.findProgramAddressSync(
    [Buffer.from("vault")],
    programId
  );

  console.log("Program ID:", programId.toString());
  console.log("State PDA:", state.toString());
  console.log("Vault PDA:", vault.toString());

  try {
    console.log("\n1. Initializing...");
    const tx1 = await program.methods
      .initialize()
      .accounts({
        authority: provider.wallet.publicKey,
      })
      .rpc();
    console.log("✅ Initialized TX:", tx1);

    console.log("\n2. Staking 0.1 SOL...");
    const tx2 = await program.methods
      .stakeSol(new anchor.BN(100000000))
      .accounts({
        user: provider.wallet.publicKey,
        vault: vault,
      })
      .rpc();
    console.log("✅ Staked TX:", tx2);

    const stateData = await program.account.protocolState.fetch(state);
    console.log("\n📊 Total Staked:", stateData.totalStaked.toString());
  } catch (e) {
    console.log("❌", e.message);
  }
})();
