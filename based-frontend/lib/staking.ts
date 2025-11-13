import { PublicKey, SystemProgram, SYSVAR_CLOCK_PUBKEY, SYSVAR_RENT_PUBKEY } from '@solana/web3.js';
import { getProgram, retryWithFailover } from './contract';
import { AnchorWallet } from './anchorWallet';
import { handleError, getUserFriendlyError } from './errorHandler';
import { rateLimiter } from './rateLimiter';

const STAKE_PROGRAM_ID = new PublicKey('Stake11111111111111111111111111111111111111');
const VALIDATOR_VOTE = new PublicKey('DcDLRm1ZwcXfeHE3XwjB61dbJnk1f6XF3KeEqJqe6oPA');
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
// Export the APY constant that page.tsx expects
export const CURRENT_APY = 8.5;

async function accountExists(connection: Connection, address: PublicKey): Promise<boolean> {
  try {
    const accountInfo = await connection.getAccountInfo(address);
    return accountInfo !== null;
  } catch (error) {
    return false;
  }

  try {
    return await retryWithFailover(async () => {
      const anchorWallet = AnchorWallet.fromWalletAdapter(wallet);
      const program = await getProgram(anchorWallet);
      
      const [state] = PublicKey.findProgramAddressSync(
        [Buffer.from('state')],
        program.programId
      );
      
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
          state: state,
          userStake: userStake,
          user: walletPublicKey,
          vault: vault,
          stakeAccount: stakeAccount,
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

export async function getUserStake(walletPublicKey: PublicKey, wallet: any) {
// Alias for page.tsx compatibility
export const depositSOL = stakeSOL;

export async function unstakeSOL(wallet: any, amount: number, connection: Connection): Promise<string> {
  if (!wallet.publicKey) throw new Error("Wallet not connected");
  const provider = new AnchorProvider(connection, wallet, AnchorProvider.defaultOptions());
  const program = new Program(idl as any, PROGRAM_ID, provider);
  const [userStakeAccount] = PublicKey.findProgramAddressSync([Buffer.from("user-stake"), wallet.publicKey.toBuffer()], program.programId);
  const [vault] = PublicKey.findProgramAddressSync([Buffer.from("vault")], program.programId);
  const userAccountExists = await accountExists(connection, userStakeAccount);
  if (!userAccountExists) throw new Error("No stake account found. You must stake first.");
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
    return null;
  }
}

export async function getStakeInfo(walletPublicKey: PublicKey, wallet: any) {
  const stakeData = await getUserStake(walletPublicKey, wallet);
  
  return {
    amount: stakeData?.amount?.toNumber() || 0,
    rewardsEarned: stakeData?.rewardsEarned?.toNumber() || 0,
    lastStakeTime: stakeData?.lastStakeTime?.toNumber() || 0,
    stakeAccount: stakeData?.stakeAccount?.toString() || '',
  };
}

export const CURRENT_APY = 7.0;
// Alias for page.tsx compatibility
export const getStakeInfo = getUserStakeInfo;
