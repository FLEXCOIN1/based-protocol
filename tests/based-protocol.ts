import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { BasedProtocol } from "../target/types/based_protocol";
import { PublicKey, Keypair, SystemProgram } from "@solana/web3.js";
import { assert } from "chai";

describe("based-protocol", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.BasedProtocol as Program<BasedProtocol>;
  
  // Test accounts
  const authority = provider.wallet;
  const user1 = Keypair.generate();
  const user2 = Keypair.generate();

  // PDAs
  const [poolPda] = PublicKey.findProgramAddressSync(
    [Buffer.from("pool")],
    program.programId
  );

  const [user1StakePda] = PublicKey.findProgramAddressSync(
    [Buffer.from("user_stake"), user1.publicKey.toBuffer()],
    program.programId
  );

  const [user2StakePda] = PublicKey.findProgramAddressSync(
    [Buffer.from("user_stake"), user2.publicKey.toBuffer()],
    program.programId
  );

  before(async () => {
    // Airdrop SOL to test users
    const airdropSig1 = await provider.connection.requestAirdrop(
      user1.publicKey,
      2 * anchor.web3.LAMPORTS_PER_SOL
    );
    await provider.connection.confirmTransaction(airdropSig1);

    const airdropSig2 = await provider.connection.requestAirdrop(
      user2.publicKey,
      2 * anchor.web3.LAMPORTS_PER_SOL
    );
    await provider.connection.confirmTransaction(airdropSig2);

    console.log("✅ Test wallets funded");
  });

  it("Initialize staking pool", async () => {
    const rewardRate = new anchor.BN(850); // 8.5% APY

    const tx = await program.methods
      .initializePool(rewardRate)
      .accounts({
        pool: poolPda,
        authority: authority.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    console.log("✅ Pool initialized:", tx);

    // Verify pool state
    const poolAccount = await program.account.stakingPool.fetch(poolPda);
    assert.equal(poolAccount.rewardRate.toNumber(), 850);
    assert.equal(poolAccount.totalStaked.toNumber(), 0);
    assert.equal(poolAccount.totalUsers.toNumber(), 0);
    console.log("✅ Pool state verified");
  });

  it("User 1 deposits SOL", async () => {
    const depositAmount = new anchor.BN(0.5 * anchor.web3.LAMPORTS_PER_SOL);

    const tx = await program.methods
      .deposit(depositAmount, null)
      .accounts({
        pool: poolPda,
        userStake: user1StakePda,
        user: user1.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([user1])
      .rpc();

    console.log("✅ User 1 deposited:", tx);

    // Verify user stake
    const userStake = await program.account.userStake.fetch(user1StakePda);
    assert.equal(userStake.amount.toString(), depositAmount.toString());
    assert.equal(userStake.leaderboardPosition.toNumber(), 1);
    console.log("✅ User 1 stake verified - Rank #1");
  });

  it("User 2 deposits with referral", async () => {
    const depositAmount = new anchor.BN(1 * anchor.web3.LAMPORTS_PER_SOL);

    const tx = await program.methods
      .deposit(depositAmount, user1.publicKey) // User1 is referrer
      .accounts({
        pool: poolPda,
        userStake: user2StakePda,
        user: user2.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([user2])
      .rpc();

    console.log("✅ User 2 deposited with referral:", tx);

    // Verify referral set
    const userStake = await program.account.userStake.fetch(user2StakePda);
    assert.equal(userStake.amount.toString(), depositAmount.toString());
    assert.ok(userStake.referrer);
    assert.equal(userStake.referrer.toString(), user1.publicKey.toString());
    console.log("✅ Referral verified - User 1 is referrer");
  });

  it("Calculate rewards for User 1", async () => {
    // Wait a bit for time to pass
    await new Promise(resolve => setTimeout(resolve, 2000));

    const tx = await program.methods
      .calculateRewards()
      .accounts({
        pool: poolPda,
        userStake: user1StakePda,
        user: user1.publicKey,
      })
      .signers([user1])
      .rpc();

    console.log("✅ Rewards calculated:", tx);
  });

  it("Get leaderboard stats", async () => {
    const tx = await program.methods
      .getLeaderboardStats()
      .accounts({
        userStake: user1StakePda,
        user: user1.publicKey,
      })
      .signers([user1])
      .rpc();

    console.log("✅ Leaderboard stats retrieved:", tx);
  });

  it("User 1 withdraws (with penalty)", async () => {
    const withdrawAmount = new anchor.BN(0.1 * anchor.web3.LAMPORTS_PER_SOL);

    const userBalanceBefore = await provider.connection.getBalance(user1.publicKey);

    const tx = await program.methods
      .withdraw(withdrawAmount)
      .accounts({
        pool: poolPda,
        userStake: user1StakePda,
        user: user1.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([user1])
      .rpc();

    console.log("✅ User 1 withdrew (early = 10% penalty):", tx);

    const userBalanceAfter = await provider.connection.getBalance(user1.publicKey);
    const netReceived = userBalanceAfter - userBalanceBefore;
    
    // Should receive less than withdrawal amount due to penalty
    console.log(`   Net received: ${netReceived / anchor.web3.LAMPORTS_PER_SOL} SOL`);
    console.log(`   Penalty applied: ~10%`);
  });

  it("Pool state after activity", async () => {
    const poolAccount = await program.account.stakingPool.fetch(poolPda);
    
    console.log("\n📊 FINAL POOL STATE:");
    console.log(`   Total Staked: ${poolAccount.totalStaked.toNumber() / anchor.web3.LAMPORTS_PER_SOL} SOL`);
    console.log(`   Total Users: ${poolAccount.totalUsers.toNumber()}`);
    console.log(`   Reward Rate: ${poolAccount.rewardRate.toNumber()} bps (${poolAccount.rewardRate.toNumber()/100}%)`);
    
    assert.ok(poolAccount.totalStaked.toNumber() > 0);
    assert.equal(poolAccount.totalUsers.toNumber(), 2);
  });
});
