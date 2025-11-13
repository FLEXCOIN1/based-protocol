import * as anchor from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import idl from "../target/idl/based_protocol.json";

const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);

const programId = new PublicKey("4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd");
const program = new anchor.Program(idl as any, programId, provider);

const VALIDATOR_VOTE_ACCOUNT = new PublicKey("DcDLRm1ZwcXfeHE3XwjB61dbJnk1f6XF3KeEqJqe6oPA");
const STAKE_PROGRAM_ID = new PublicKey("Stake11111111111111111111111111111111111111");

(async () => {
  console.log("Testing REAL validator staking...\n");
  
  const [state] = PublicKey.findProgramAddressSync([Buffer.from("state")], programId);
  const [vault] = PublicKey.findProgramAddressSync([Buffer.from("vault")], programId);
  const [userStake] = PublicKey.findProgramAddressSync([Buffer.from("user_stake"), provider.wallet.publicKey.toBuffer()], programId);
  const [stakeAccount] = PublicKey.findProgramAddressSync([Buffer.from("stake"), provider.wallet.publicKey.toBuffer()], programId);

  console.log("State:", state.toString());
  console.log("Vault:", vault.toString());
  console.log("User Stake:", userStake.toString());
  console.log("Stake Account:", stakeAccount.toString());
  console.log("Validator:", VALIDATOR_VOTE_ACCOUNT.toString());

  try {
    console.log("\n1. Staking 0.5 SOL to validator...");
    const tx = await program.methods
      .createStakeAccount(
        new anchor.BN(500000000), // 0.5 SOL
        VALIDATOR_VOTE_ACCOUNT
      )
      .accounts({
        user: provider.wallet.publicKey,
        voteAccount: VALIDATOR_VOTE_ACCOUNT,
        stakeProgram: STAKE_PROGRAM_ID,
        stakeConfig: new PublicKey("StakeConfig11111111111111111111111111111111"),
      })
      .rpc();
    
    console.log("✅ Staked! TX:", tx);
    console.log("\n2. Checking state...");
    
    const stateData = await program.account.protocolState.fetch(state);
    console.log("Total Staked:", stateData.totalStaked.toString(), "lamports");
    console.log("Total Users:", stateData.totalUsers.toString());
    
    const userData = await program.account.userStake.fetch(userStake);
    console.log("\nUser stake:", userData.amount.toString(), "lamports");
    console.log("Stake account:", userData.stakeAccount.toString());
    
  } catch (e: any) {
    console.log("❌ Error:", e.message);
    if (e.logs) console.log("Logs:", e.logs);
  }
})();
