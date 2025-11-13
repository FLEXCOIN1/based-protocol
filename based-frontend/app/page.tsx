'use client';

import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import WalletButton from '../components/WalletButton';
import { useState, useEffect } from 'react';
import { stakeSOL, unstakeSOL, getUserStakeInfo, CURRENT_APY } from '../lib/staking';
import Link from 'next/link';

export default function Home() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [stakeAmount, setStakeAmount] = useState('0.1');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [userStake, setUserStake] = useState<any>(null);

  useEffect(() => {
    if (wallet.publicKey) loadStakeInfo();
  }, [wallet.publicKey]);

  const loadStakeInfo = async () => {
    if (!wallet.publicKey) return;
    const info = await getUserStakeInfo(wallet.publicKey, connection);
    setUserStake(info);
  };

  const handleStake = async () => {
    setLoading(true);
    setMessage('');
    try {
      const tx = await stakeSOL(wallet, parseFloat(stakeAmount), connection);
      setMessage(`✅ Staked! TX: ${tx.slice(0, 8)}...`);
      await loadStakeInfo();
    } catch (error: any) {
      setMessage(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleUnstake = async () => {
    setLoading(true);
    setMessage('');
    try {
      const tx = await unstakeSOL(wallet, parseFloat(stakeAmount), connection);
      setMessage(`✅ Unstaked! TX: ${tx.slice(0, 8)}...`);
      await loadStakeInfo();
    } catch (error: any) {
      setMessage(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const stakedSOL = userStake?.exists ? (userStake.amount / 1e9).toFixed(4) : '0.0000';

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white p-8">
      <nav className="max-w-6xl mx-auto flex justify-between items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">BASED Protocol</h1>
          <p className="text-gray-400 text-sm">Institutional-Grade Staking</p>
        </div>
        <WalletButton />
      </nav>

      <div className="max-w-4xl mx-auto">
        {wallet.connected && userStake?.exists && (
          <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 border border-green-500/20 rounded-2xl p-8 mb-8">
            <p className="text-gray-300 text-sm mb-2">Your Staked Balance</p>
            <p className="text-5xl font-bold text-green-400">{stakedSOL} SOL</p>
            <p className="text-gray-400 mt-2">Earning {CURRENT_APY}% APY</p>
          </div>
        )}

        <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Stake & Earn</h2>

          {wallet.connected ? (
            <>
              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">Amount (SOL)</label>
                <input
                  type="number"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg p-4 text-white text-xl"
                  step="0.01"
                  min="0.01"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={handleStake}
                  disabled={loading}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-600 disabled:to-gray-700 rounded-lg p-4 font-bold text-lg transition-all"
                >
                  {loading ? '⏳ Processing...' : '➕ Stake'}
                </button>
                
                <button
                  onClick={handleUnstake}
                  disabled={loading}
                  className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 rounded-lg p-4 font-bold text-lg transition-all"
                >
                  {loading ? '⏳ Processing...' : '➖ Unstake'}
                </button>
              </div>

              {message && (
                <div className={`mt-6 p-4 rounded-lg ${message.includes('✅') ? 'bg-green-900/50 border border-green-500/50' : 'bg-red-900/50 border border-red-500/50'}`}>
                  {message}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-6">Connect your wallet to start earning</p>
              <WalletButton />
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <Link href="/stats" className="bg-gray-800/50 backdrop-blur border border-gray-700 p-6 rounded-xl hover:border-purple-500/50 transition-all">
            <h3 className="font-bold text-lg mb-2">📊 Stats</h3>
            <p className="text-sm text-gray-400">View protocol stats</p>
          </Link>
          <Link href="/about-based" className="bg-gray-800/50 backdrop-blur border border-gray-700 p-6 rounded-xl hover:border-purple-500/50 transition-all">
            <h3 className="font-bold text-lg mb-2">ℹ️ About</h3>
            <p className="text-sm text-gray-400">Learn more</p>
          </Link>
          <Link href="/whitepaper" className="bg-gray-800/50 backdrop-blur border border-gray-700 p-6 rounded-xl hover:border-purple-500/50 transition-all">
            <h3 className="font-bold text-lg mb-2">📄 Docs</h3>
            <p className="text-sm text-gray-400">Read whitepaper</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
