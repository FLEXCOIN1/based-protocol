import { Program, AnchorProvider } from '@coral-xyz/anchor';
import { PublicKey } from '@solana/web3.js';
import { getConnection, PROGRAM_ID, rpcManager } from './config';
import { IDL, BasedProtocol } from './idl';
import { AnchorWallet } from './anchorWallet';

export async function getProgram(wallet: AnchorWallet) {
  const connection = getConnection();
  const provider = new AnchorProvider(connection, wallet, {
    commitment: 'confirmed',
  });
  return new Program<BasedProtocol>(IDL, PROGRAM_ID, provider);
}

// Retry wrapper with RPC failover
export async function retryWithFailover<T>(
  fn: () => Promise<T>,
  maxRetries = 3
): Promise<T> {
  let lastError: Error | null = null;

  for (let i = 0; i < maxRetries; i++) {
    try {
      const result = await fn();
      rpcManager.recordSuccess();
      return result;
    } catch (error) {
      lastError = error as Error;
      console.error(`Attempt ${i + 1} failed:`, error);
      rpcManager.recordFailure();

      if (i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
      }
    }
  }

  throw lastError || new Error('All retry attempts failed');
}

export async function getUserStake(program: Program<BasedProtocol>, userPubkey: PublicKey) {
  return retryWithFailover(async () => {
    return await program.account.userStake.fetch(userPubkey);
  });
}

export async function claimRewards(program: Program<BasedProtocol>, userPubkey: PublicKey) {
  return retryWithFailover(async () => {
    return await program.methods
      .claimRewards()
      .accounts({ user: userPubkey })
      .rpc();
  });
}

export async function claimReferralRewards(program: Program<BasedProtocol>, userPubkey: PublicKey) {
  return retryWithFailover(async () => {
    return await program.methods
      .claimReferralRewards()
      .accounts({ user: userPubkey })
      .rpc();
  });
}
