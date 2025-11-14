import { Connection, clusterApiUrl } from '@solana/web3.js';

export const RPC_ENDPOINTS = {
  devnet: [
    'https://api.devnet.solana.com',
    clusterApiUrl('devnet'),
    'https://rpc.ankr.com/solana_devnet',
  ],
  mainnet: [
    'https://api.mainnet-beta.solana.com',
    clusterApiUrl('mainnet-beta'),
    'https://rpc.ankr.com/solana',
  ],
};

export class RpcManager {
  private endpoints: string[];
  private currentIndex = 0;
  private failCount = 0;
  private maxFails = 3;
  private healthCheckInterval: NodeJS.Timeout | null = null;

  constructor(cluster: 'devnet' | 'mainnet') {
    this.endpoints = RPC_ENDPOINTS[cluster];
  }

  getConnection(): Connection {
    return new Connection(this.endpoints[this.currentIndex], 'confirmed');
  }

  async switchToNextRpc(): Promise<void> {
    this.currentIndex = (this.currentIndex + 1) % this.endpoints.length;
    this.failCount = 0;
    console.log(`Switched to RPC: ${this.endpoints[this.currentIndex]}`);
  }

  recordFailure(): void {
    this.failCount++;
    if (this.failCount >= this.maxFails) {
      this.switchToNextRpc();
    }
  }

  recordSuccess(): void {
    this.failCount = 0;
  }

  getCurrentEndpoint(): string {
    return this.endpoints[this.currentIndex];
  }
}
