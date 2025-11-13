import { PublicKey, SystemProgram, SYSVAR_CLOCK_PUBKEY, SYSVAR_RENT_PUBKEY } from '@solana/web3.js';
import { getProgram, retryWithFailover } from './contract';
import { AnchorWallet } from './anchorWallet';
import { handleError, getUserFriendlyError } from './errorHandler';
import { rateLimiter } from './rateLimiter';

const STAKE_PROGRAM_ID = new PublicKey('Stake11111111111111111111111111111111111111');
const VALIDATOR_VOTE = new PublicKey('DcDLRm1ZwcXfeHE3XwjB61dbJnk1f6XF3KeEqJqe6oPA'); // Active devnet validator
const STAKE_CONFIG = new PublicKey('StakeConfig11111111111111111111111111111111');
const STAKE_HISTORY = new PublicKey('SysvarStakeHistory1111111111111111111111111');

export async function depositSOL(
  walletPublicKey: PublicKey,
  amount: number,
  wallet: any
) {
  const rateCheck = rateLimiter.check(walletPublicKey.toBase58());
  if (!rateCheck.allowed) {
    throw new Error(`Rate limit exceeded. Try again in ${rateCheck.resetIn} seconds.`);
  }

  try {
    return await retryWithFailover(async () => {
      const anchorWallet = AnchorWallet.fromWalletAdapter(wallet);
      const program = await getProgram(anchorWallet);
      
      const [vault] = PublicKey.findProgramAddressSync(
        [Buffer.from('vault')],
        program.programId
      );
      
      const [userStake] = PublicKey.findProgramAddressSync(
        [Buffer.from('user_stake'), walletPublicKey.toBuffer()],
        program.programId
      );
      
      const [stakeAccount] = PublicKey.findProgramAddressSync(
        [Buffer.from('stake'), walletPublicKey.toBuffer()],
        program.programId
      );
      
      const signature = await program.methods
        .createStakeAccount(amount, VALIDATOR_VOTE)
        .accounts({
          user: walletPublicKey,
          vault,
          userStake,
          stakeAccount,
          voteAccount: VALIDATOR_VOTE,
          systemProgram: SystemProgram.programId,
          stakeProgram: STAKE_PROGRAM_ID,
          rent: SYSVAR_RENT_PUBKEY,
          clock: SYSVAR_CLOCK_PUBKEY,
          stakeHistory: STAKE_HISTORY,
          stakeConfig: STAKE_CONFIG,
        })
        .rpc();
      
      return signature;
    });
  } catch (error: any) {
    handleError(error, {
      action: 'stake',
      walletAddress: walletPublicKey.toBase58(),
      amount,
    });
    throw new Error(getUserFriendlyError(error));
  }
}

export async function getUserStake(
  walletPublicKey: PublicKey,
  wallet: any
) {
  try {
    return await retryWithFailover(async () => {
      const anchorWallet = AnchorWallet.fromWalletAdapter(wallet);
      const program = await getProgram(anchorWallet);
      
      const [userStake] = PublicKey.findProgramAddressSync(
        [Buffer.from('user_stake'), walletPublicKey.toBuffer()],
        program.programId
      );
      
      return await program.account.userStake.fetch(userStake);
    });
  } catch (error: any) {
    return null; // User hasn't staked yet
  }
}

export async function getStakeInfo(
  walletPublicKey: PublicKey,
  wallet: any
) {
  const stakeData = await getUserStake(walletPublicKey, wallet);
  
  return {
    amount: stakeData?.amount?.toNumber() || 0,
    rewardsEarned: stakeData?.rewardsEarned?.toNumber() || 0,
    lastStakeTime: stakeData?.lastStakeTime?.toNumber() || 0,
    stakeAccount: stakeData?.stakeAccount?.toString() || '',
  };
}

export const CURRENT_APY = 7.0; // 7% APY from validator staking
