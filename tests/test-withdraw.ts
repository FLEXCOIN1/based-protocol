import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { BasedProtocol } from "../target/types/based_protocol";

describe("withdraw_treasury", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  
  const program = anchor.workspace.BasedProtocol as Program<BasedProtocol>;
  
  it("Is in the IDL", async () => {
    // This test just forces Anchor to include the instruction
    console.log("withdraw_treasury exists:", !!program.methods.withdrawTreasury);
  });
});
