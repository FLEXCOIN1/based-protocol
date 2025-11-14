import { PublicKey } from '@solana/web3.js';
import { RpcManager } from './rpc-config';

export const CLUSTER = 'devnet' as const;
export const PROGRAM_ID = new PublicKey('4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd');

// Initialize RPC manager
export const rpcManager = new RpcManager(CLUSTER);

// Get connection (will auto-failover on errors)
export const getConnection = () => rpcManager.getConnection();
