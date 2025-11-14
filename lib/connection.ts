import { Connection } from '@solana/web3.js';

// Use multiple RPC endpoints with fallback
const RPC_ENDPOINTS = [
  'https://api.devnet.solana.com',
  'https://rpc.ankr.com/solana_devnet',
  'https://solana-devnet.g.alchemy.com/v2/demo',
];

export function createConnection(): Connection {
  return new Connection(RPC_ENDPOINTS[0], {
    commitment: 'confirmed',
    confirmTransactionInitialTimeout: 60000,
  });
}
