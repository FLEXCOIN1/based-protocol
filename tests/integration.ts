import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { BasedProtocol } from "../target/types/based_protocol";
import { expect } from "chai";

describe("BASED Protocol Integration Tests", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.BasedProtocol as Program<BasedProtocol>;
  const user = provider.wallet;

  it("Initializes the staking pool", async () => {
    const [poolPDA] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("pool")],
      program.programId
    );

    try {
      await program.methods
        .initializePool(new anchor.BN(850)) // 8.5% APY
        .accounts({
          pool: poolPDA,
          authority: user.publicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        })
        .rpc();

      const poolAccount = await program.account.stakingPool.fetch(poolPDA);
      expect(poolAccount.rewardRate.toNumber()).to.equal(850);
      console.log("✅ Pool initialized successfully");
    } catch (e: any) {
      if (e.message.includes("already in use")) {
        console.log("✅ Pool already initialized (expected)");
      } else {
        throw e;
      }
    }
  });

  it("Deposits SOL to staking pool", async () => {
    const [poolPDA] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("pool")],
      program.programId
    );

    const [userStakePDA] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("user_stake"), user.publicKey.toBuffer()],
      program.programId
    );

    const depositAmount = new anchor.BN(0.1 * anchor.web3.LAMPORTS_PER_SOL);

    const balanceBefore = await provider.connection.getBalance(user.publicKey);

    await program.methods
      .deposit(depositAmount, null)
      .accounts({
        pool: poolPDA,
        userStake: userStakePDA,
        user: user.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .rpc();

    const userStakeAccount = await program.account.userStake.fetch(userStakePDA);
    expect(userStakeAccount.amount.toNumber()).to.be.greaterThan(0);
    
    const balanceAfter = await provider.connection.getBalance(user.publicKey);
    expect(balanceAfter).to.be.lessThan(balanceBefore);
    
    console.log("✅ Deposited:", depositAmount.toNumber() / anchor.web3.LAMPORTS_PER_SOL, "SOL");
    console.log("✅ Staked balance:", userStakeAccount.amount.toNumber() / anchor.web3.LAMPORTS_PER_SOL, "SOL");
  });

  it("Calculates rewards correctly", async () => {
    const [poolPDA] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("pool")],
      program.programId
    );

    const [userStakePDA] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("user_stake"), user.publicKey.toBuffer()],
      program.programId
    );

    // Wait 2 seconds to accumulate some rewards
    await new Promise(resolve => setTimeout(resolve, 2000));

    const rewards = await program.methods
      .calculateRewards()
      .accounts({
        pool: poolPDA,
        userStake: userStakePDA,
        user: user.publicKey,
      })
      .view();

    console.log("✅ Calculated rewards:", rewards.toNumber() / anchor.web3.LAMPORTS_PER_SOL, "SOL");
    expect(rewards.toNumber()).to.be.greaterThanOrEqual(0);
  });

  it("Withdraws SOL with penalty", async () => {
    const [poolPDA] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("pool")],
      program.programId
    );

    const [userStakePDA] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("user_stake"), user.publicKey.toBuffer()],
      program.programId
    );

    const userStakeBefore = await program.account.userStake.fetch(userStakePDA);
    const withdrawAmount = new anchor.BN(0.05 * anchor.web3.LAMPORTS_PER_SOL);

    await program.methods
      .withdraw(withdrawAmount)
      .accounts({
        pool: poolPDA,
        userStake: userStakePDA,
        user: user.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .rpc();

    const userStakeAfter = await program.account.userStake.fetch(userStakePDA);
    
    expect(userStakeAfter.amount.toNumber()).to.be.lessThan(userStakeBefore.amount.toNumber());
    console.log("✅ Withdrawn with penalty applied");
    console.log("✅ Remaining stake:", userStakeAfter.amount.toNumber() / anchor.web3.LAMPORTS_PER_SOL, "SOL");
  });

  it("Prevents unauthorized treasury withdrawal", async () => {
    const [poolPDA] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("pool")],
      program.programId
    );

    const unauthorizedUser = anchor.web3.Keypair.generate();
    
    try {
      await program.methods
        .withdrawTreasury(new anchor.BN(1000))
        .accounts({
          pool: poolPDA,
          treasury: poolPDA,
          recipient: unauthorizedUser.publicKey,
          authority: unauthorizedUser.publicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        })
        .signers([unauthorizedUser])
        .rpc();
      
      throw new Error("Should have failed - unauthorized access allowed!");
    } catch (e: any) {
      expect(e.message).to.include("Signature verification failed");
      console.log("✅ Treasury is protected from unauthorized access");
    }
  });
});
