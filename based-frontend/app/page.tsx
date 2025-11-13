'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import WalletButton from '@/components/WalletButton';
import { useState, useEffect } from 'react';
import { depositSOL, getStakeInfo, CURRENT_APY } from '@/lib/staking';
import Link from 'next/link';

export default function Home() {
  const { publicKey, connected } = useWallet();
  const wallet = useWallet();
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [stakeInfo, setStakeInfo] = useState<any>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (connected && publicKey) {
      loadStakeInfo();
    }
  }, [connected, publicKey]);

  const loadStakeInfo = async () => {
    if (!publicKey) return;
    try {
      const info = await getStakeInfo(publicKey, wallet);
      setStakeInfo(info);
    } catch (e) {
      console.error(e);
    }
  };

  const handleStake = async () => {
    if (!publicKey || !amount) return;
    
    setLoading(true);
    setMessage('');
    
    try {
      const lamports = parseFloat(amount) * 1e9;
      const sig = await depositSOL(publicKey, lamports, wallet);
      setMessage(`✅ Staked ${amount} SOL! TX: ${sig.slice(0, 8)}...`);
      setAmount('');
      await loadStakeInfo();
    } catch (error: any) {
      setMessage(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="border-b border-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">BASED Reserve</h1>
          <div className="flex gap-4 items-center">
            <Link href="/dashboard" className="hover:text-purple-400">Dashboard</Link>
            <Link href="/how-it-works" className="hover:text-purple-400">How It Works</Link>
            <WalletButton />
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-8 mt-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Earn {CURRENT_APY}% APY</h2>
          <p className="text-xl text-gray-400">Real Solana validator staking. Your SOL earns yield from day one.</p>
        </div>

        {!connected ? (
          <div className="bg-gray-900 rounded-lg p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Connect Your Wallet</h3>
            <p className="text-gray-400 mb-6">Start earning validator rewards on your SOL</p>
            <WalletButton />
          </div>
        ) : (
          <div className="space-y-6">
            {stakeInfo && stakeInfo.amount > 0 && (
              <div className="bg-purple-900/20 border border-purple-500 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Your Active Stake</h3>
                <p className="text-3xl font-bold text-purple-400">{(stakeInfo.amount / 1e9).toFixed(4)} SOL</p>
                <p className="text-gray-400 mt-2">Earning {CURRENT_APY}% APY from validators</p>
              </div>
            )}

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Stake SOL</h3>
              
              <div className="mb-4">
                <label className="block text-sm mb-2">Amount (SOL)</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.0"
                  className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-lg"
                  step="0.01"
                  min="0.01"
                />
              </div>

              <button
                onClick={handleStake}
                disabled={loading || !amount}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:cursor-not-allowed px-6 py-3 rounded-lg font-bold text-lg"
              >
                {loading ? 'Staking...' : `Stake ${amount || '0'} SOL`}
              </button>

              {message && (
                <div className={`mt-4 p-3 rounded ${message.includes('✅') ? 'bg-green-900/20 text-green-400' : 'bg-red-900/20 text-red-400'}`}>
                  {message}
                </div>
              )}

              <div className="mt-6 p-4 bg-black rounded-lg">
                <h4 className="font-bold mb-2">How it works:</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Your SOL is delegated to active Solana validators</li>
                  <li>• Earn ~{CURRENT_APY}% APY from network inflation rewards</li>
                  <li>• Rewards accrue automatically</li>
                  <li>• Fully on-chain, non-custodial</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
