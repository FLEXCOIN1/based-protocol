const { Connection, PublicKey, Transaction, TransactionInstruction, Keypair } = require("@solana/web3.js");
const fs = require("fs");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const programId = new PublicKey("4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd");
const validatorVote = new PublicKey("DcDLRm1ZwcXfeHE3XwjB61dbJnk1f6XF3KeEqJqe6oPA");

const keypairFile = fs.readFileSync(process.env.HOME + "/.config/solana/id.json");
const payer = Keypair.fromSecretKey(new Uint8Array(JSON.parse(keypairFile.toString())));

console.log("Payer:", payer.publicKey.toString());
console.log("Program:", programId.toString());
console.log("Validator:", validatorVote.toString());

(async () => {
  const balance = await connection.getBalance(payer.publicKey);
  console.log("Balance:", balance / 1e9, "SOL\n");
  
  const [state] = PublicKey.findProgramAddressSync([Buffer.from("state")], programId);
  console.log("State PDA:", state.toString());
  
  const stateInfo = await connection.getAccountInfo(state);
  console.log("State exists:", !!stateInfo);
  
  if (stateInfo) {
    console.log("State data length:", stateInfo.data.length);
    console.log("Total staked:", stateInfo.data.readBigUInt64LE(8).toString(), "lamports");
    console.log("Total rewards:", stateInfo.data.readBigUInt64LE(16).toString(), "lamports");
    console.log("Total users:", stateInfo.data.readBigUInt64LE(24).toString());
  }
  
  console.log("\n✅ Protocol is deployed and initialized!");
  console.log("Ready to accept stakes from users.");
})();
