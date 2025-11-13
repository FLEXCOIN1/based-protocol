import * as Sentry from '@sentry/nextjs';

export type ErrorContext = {
  walletAddress?: string;
  transaction?: string;
  action?: string;
  amount?: number;
  [key: string]: any;
};

export function handleError(error: Error, context?: ErrorContext) {
  console.error('Error occurred:', error, context);
  
  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.captureException(error, {
      extra: context,
    });
  }
}

export function getUserFriendlyError(error: any): string {
  const errorMsg = error?.message || error?.toString() || 'Unknown error';

  // Wallet connection errors
  if (errorMsg.includes('not connected') || errorMsg.includes('wallet not found')) {
    return 'Please connect your wallet first.';
  }

  // Insufficient SOL for gas
  if (errorMsg.includes('insufficient funds') || errorMsg.includes('0x1') || errorMsg.includes('insufficient lamports')) {
    return 'Insufficient SOL for transaction. Add at least 0.1 SOL to your wallet.';
  }

  // User rejected
  if (errorMsg.includes('User rejected') || errorMsg.includes('user rejected')) {
    return 'Transaction cancelled by user.';
  }

  // Account errors
  if (errorMsg.includes('Account does not exist') || errorMsg.includes('AccountNotInitialized')) {
    // Check if it's a user account (expected) or pool account (unexpected)
    if (errorMsg.toLowerCase().includes('user') || errorMsg.toLowerCase().includes('stake account')) {
      return 'No staking history found. Start by staking SOL to earn rewards!';
    }
    if (errorMsg.toLowerCase().includes('pool')) {
      return 'Staking pool not initialized. The pool needs to be set up by the admin. Please contact support.';
    }
    return 'Required account not initialized. Please contact support.';
  }

  // Invalid account discriminator (account doesn't exist)
  if (errorMsg.includes('Invalid account discriminator')) {
    return 'No staking history found. Stake SOL to get started!';
  }

  // Account creation errors
  if (errorMsg.includes('failed to send transaction') || errorMsg.includes('custom program error')) {
    if (errorMsg.includes('0x0') || errorMsg.includes('0x1')) {
      return 'Unable to create staking account. Make sure you have enough SOL for rent (~0.003 SOL) plus transaction fees.';
    }
  }

  // Program errors
  if (errorMsg.includes('InsufficientFunds')) {
    return 'Insufficient staked balance to withdraw.';
  }

  if (errorMsg.includes('Unauthorized')) {
    return 'Unauthorized access. Make sure you own this account.';
  }

  // RPC timeout
  if (errorMsg.includes('timeout') || errorMsg.includes('429') || errorMsg.includes('rate limit')) {
    return 'Network congestion. Please try again in a moment.';
  }

  // Slippage
  if (errorMsg.includes('slippage')) {
    return 'Price changed too much. Please try again.';
  }

  // Simulation errors
  if (errorMsg.includes('simulation failed')) {
    return 'Transaction simulation failed. Please check your balance and try again.';
  }

  // Generic blockchain error
  if (errorMsg.includes('0x')) {
    return 'Transaction failed. Please check your wallet and try again.';
  }

  // Rate limiting
  if (errorMsg.includes('Rate limit exceeded')) {
    return errorMsg; // Already user-friendly
  }

  return errorMsg;
}
