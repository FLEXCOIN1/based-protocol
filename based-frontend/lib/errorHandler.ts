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
  
  // Insufficient SOL for gas
  if (errorMsg.includes('insufficient funds') || errorMsg.includes('0x1')) {
    return 'Insufficient SOL for transaction fees. Add at least 0.01 SOL to your wallet.';
  }
  
  // User rejected
  if (errorMsg.includes('User rejected')) {
    return 'Transaction cancelled by user.';
  }
  
  // RPC timeout
  if (errorMsg.includes('timeout') || errorMsg.includes('429')) {
    return 'Network congestion. Please try again in a moment.';
  }
  
  // Slippage
  if (errorMsg.includes('slippage')) {
    return 'Price changed too much. Please try again.';
  }
  
  // Generic blockchain error
  if (errorMsg.includes('0x')) {
    return 'Transaction failed. Please check your wallet and try again.';
  }
  
  return errorMsg;
}
