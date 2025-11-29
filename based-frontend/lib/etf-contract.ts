import { Program, AnchorProvider, BN } from '@coral-xyz/anchor';
import { PublicKey, SystemProgram } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID, getAssociatedTokenAddress } from '@solana/spl-token';
import { getConnection, PROGRAM_ID } from './config';
import { IDL, BasedProtocol } from './idl';
import { AnchorWallet } from './anchorWallet';

export async function getProgram(wallet: AnchorWallet) {
  const connection = getConnection();
  const provider = new AnchorProvider(connection, wallet, {
    commitment: 'confirmed',
  });
  return new Program<BasedProtocol>(IDL, PROGRAM_ID, provider);
}

// Get PDA for protocol state
export function getProtocolStatePDA() {
  const [pda] = PublicKey.findProgramAddressSync(
    [Buffer.from('protocol_state')],
    PROGRAM_ID
  );
  return pda;
}

// Get PDA for user position
export function getUserPositionPDA(userPubkey: PublicKey) {
  const [pda] = PublicKey.findProgramAddressSync(
    [Buffer.from('user_position'), userPubkey.toBuffer()],
    PROGRAM_ID
  );
  return pda;
}

// Get PDA for protocol USDC vault
export function getProtocolUsdcVaultPDA() {
  const [pda] = PublicKey.findProgramAddressSync(
    [Buffer.from('protocol_usdc_vault')],
    PROGRAM_ID
  );
  return pda;
}

// Fetch user position from blockchain
export async function getUserPosition(program: Program<BasedProtocol>, userPubkey: PublicKey) {
  try {
    const userPositionPDA = getUserPositionPDA(userPubkey);
    const position = await program.account.userPosition.fetch(userPositionPDA);
    return position;
  } catch (error) {
    console.log('User position not found (no deposits yet):', error);
    return null;
  }
}

// Fetch protocol state from blockchain
export async function getProtocolState(program: Program<BasedProtocol>) {
  try {
    const protocolStatePDA = getProtocolStatePDA();
    const state = await program.account.protocolState.fetch(protocolStatePDA);
    return state;
  } catch (error) {
    console.error('Failed to fetch protocol state:', error);
    throw error;
  }
}

// Deposit USDC into the protocol
export async function deposit(
  program: Program<BasedProtocol>,
  userPubkey: PublicKey,
  amount: number, // in USDC (6 decimals)
  tier: number, // 0 = Conservative, 1 = Aggressive, 2 = Life Changing
  usdcMint: PublicKey,
  basedMint: PublicKey
) {
  const amountBN = new BN(amount * 1_000_000); // Convert to lamports (6 decimals for USDC)

  // Get PDAs
  const protocolStatePDA = getProtocolStatePDA();
  const userPositionPDA = getUserPositionPDA(userPubkey);
  const protocolUsdcVaultPDA = getProtocolUsdcVaultPDA();

  // Get user's USDC token account
  const userUsdcAccount = await getAssociatedTokenAddress(usdcMint, userPubkey);

  // Get user's $BASED token account for balance check
  const userBasedAccount = await getAssociatedTokenAddress(basedMint, userPubkey);

  // Execute deposit transaction
  const tx = await program.methods
    .deposit(amountBN, tier)
    .accounts({
      protocolState: protocolStatePDA,
      user: userPubkey,
      userPosition: userPositionPDA,
      userUsdc: userUsdcAccount,
      userBasedBalance: userBasedAccount,
      protocolUsdcVault: protocolUsdcVaultPDA,
      tokenProgram: TOKEN_PROGRAM_ID,
      systemProgram: SystemProgram.programId,
    })
    .rpc();

  return tx;
}

// Withdraw USDC from the protocol
export async function withdraw(
  program: Program<BasedProtocol>,
  userPubkey: PublicKey,
  sharesToBurn: number, // Amount of shares to burn
  usdcMint: PublicKey
) {
  const sharesBN = new BN(sharesToBurn * 1_000_000); // Shares have same decimals as USDC

  // Get PDAs
  const protocolStatePDA = getProtocolStatePDA();
  const userPositionPDA = getUserPositionPDA(userPubkey);
  const protocolUsdcVaultPDA = getProtocolUsdcVaultPDA();

  // Get user's USDC token account
  const userUsdcAccount = await getAssociatedTokenAddress(usdcMint, userPubkey);

  // Execute withdraw transaction
  const tx = await program.methods
    .withdraw(sharesBN)
    .accounts({
      protocolState: protocolStatePDA,
      user: userPubkey,
      userPosition: userPositionPDA,
      userUsdc: userUsdcAccount,
      protocolUsdcVault: protocolUsdcVaultPDA,
      tokenProgram: TOKEN_PROGRAM_ID,
    })
    .rpc();

  return tx;
}

// Calculate user's current value based on NAV
export function calculateUserValue(
  userShares: number,
  totalShares: number,
  totalNav: number
): number {
  if (totalShares === 0) return 0;
  return (userShares / totalShares) * totalNav;
}

// Calculate exit fee based on time held
export function calculateExitFee(depositTimestamp: number): number {
  const currentTime = Math.floor(Date.now() / 1000);
  const timeHeldSeconds = currentTime - depositTimestamp;
  const monthsHeld = timeHeldSeconds / (30 * 24 * 60 * 60); // Approximate months

  if (monthsHeld < 1) return 50; // 50%
  if (monthsHeld < 6) return 25; // 25%
  if (monthsHeld < 9) return 10; // 10%
  if (monthsHeld < 12) return 5; // 5%
  return 0; // 0% after 12 months
}
