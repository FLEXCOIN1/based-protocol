import { PublicKey, Transaction } from '@solana/web3.js';

export class AnchorWallet {
  constructor(public publicKey: PublicKey, public signTransaction: any, public signAllTransactions: any) {}

  static fromWalletAdapter(wallet: any) {
    return new AnchorWallet(
      wallet.publicKey,
      wallet.signTransaction?.bind(wallet),
      wallet.signAllTransactions?.bind(wallet)
    );
  }
}
