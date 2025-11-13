const { PublicKey } = require("@solana/web3.js");
const programId = new PublicKey("4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd");
const [state] = PublicKey.findProgramAddressSync([Buffer.from("state")], programId);
console.log(state.toString());
