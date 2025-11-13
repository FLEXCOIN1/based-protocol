import { PublicKey, Connection, SystemProgram, SYSVAR_CLOCK_PUBKEY } from '@solana/web3.js';
import { Program, AnchorProvider, BN } from '@coral-xyz/anchor';
import idl from './idl.json';

const PROGRAM_ID = new PublicKey('4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd');
const STAKE_PROGRAM_ID = new PublicKey('Stake11111111111111111111111111111111111111');
const VALIDATOR_VOTE = new PublicKey('DcDLRm1ZwcXfeHE3XwjB61dbJnk1f6XF3KeEqJqe6oPA');
const STAKE_CONFIG = new PublicKey('StakeConfig11111111111111111111111111111111');
const STAKE_HISTORY = new PublicKey('SysvarStakeHistory1111111111111111111111111');

export async function stakeSOL(wallet: any, amount: number, connection: Connection): Promise<string> {
  if (!wallet.publicKey) throw new Error('Wallet not connected');

  const provider = new AnchorProvider(connection, wallet, AnchorProvider.defaultOptions());
  const program = new Program(idl as any, PROGRAM_ID, provider);

  try {
    // Convert SOL to lamports
    const amountLamports = Math.floor(amount * 1_000_000_000);

    // Call create_stake_account - Anchor will auto-derive PDAs (state, user_stake, vault, stake_account)
    const txSignature = await program.methods
      .createStakeAccount(new BN(amountLamports), VALIDATOR_VOTE)
      .accounts({
        user: wallet.publicKey,
        voteAccount: VALIDATOR_VOTE,
        stakeConfig: STAKE_CONFIG,
        systemProgram: SystemProgram.programId,
        stakeProgram: STAKE_PROGRAM_ID,
        clock: SYSVAR_CLOCK_PUBKEY,
        stakeHistory: STAKE_HISTORY,
      })
      .rpc();

    console.log('✅ Stake successful! Transaction:', txSignature);
    return txSignature;
  } catch (error: any) {
    console.error('Staking error:', error);
    throw new Error(`Failed to stake: ${error.message || error}`);
  }
}

export async function getUserStakeInfo(walletAddress: PublicKey, connection: Connection): Promise<any> {
  const provider = new AnchorProvider(connection, {} as any, AnchorProvider.defaultOptions());
  const program = new Program(idl as any, PROGRAM_ID, provider);

  const [userStakeAccount] = PublicKey.findProgramAddressSync(
    [Buffer.from('user_stake'), walletAddress.toBuffer()],
    program.programId
  );

  try {
    const accountInfo = await connection.getAccountInfo(userStakeAccount);
    if (!accountInfo) {
      return { amount: 0, rewardsEarned: 0, lastStakeTime: 0, stakeAccount: '', exists: false };
    }

    const stakeInfo = await program.account.userStake.fetch(userStakeAccount);
    return {
      amount: stakeInfo.amount?.toNumber() / 1_000_000_000 || 0,
      rewardsEarned: stakeInfo.rewardsEarned?.toNumber() / 1_000_000_000 || 0,
      lastStakeTime: stakeInfo.lastStakeTime?.toNumber() || 0,
      stakeAccount: stakeInfo.stakeAccount?.toString() || '',
      exists: true,
    };
  } catch (error) {
    console.error('Error fetching stake info:', error);
    return { amount: 0, rewardsEarned: 0, lastStakeTime: 0, stakeAccount: '', exists: false };
  }
}

export const CURRENT_APY = 7.0;
