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
      setMessage(`✓ Successfully staked ${stakeAmount} SOL`);
      await loadStakeInfo();
    } catch (error: any) {
      setMessage(`✗ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleUnstake = async () => {
    setLoading(true);
    setMessage('');
    try {
      const tx = await unstakeSOL(wallet, parseFloat(stakeAmount), connection);
      setMessage(`✓ Successfully unstaked ${stakeAmount} SOL`);
      await loadStakeInfo();
    } catch (error: any) {
      setMessage(`✗ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const stakedSOL = userStake?.exists ? (userStake.amount / 1e9).toFixed(4) : '0.0000';

  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-blue-600">BASED Protocol</h1>
            <p className="text-sm text-gray-600 mt-1">Institutional-Grade Staking Platform</p>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/stats" className="text-gray-700 hover:text-blue-600 font-medium">Statistics</Link>
            <Link href="/about-based" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
            <WalletButton />
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🏦</div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Stake SOL, Earn Rewards</h2>
          <p className="text-xl text-gray-600">Secure, transparent, and reliable institutional staking</p>
        </div>

        {wallet.connected && userStake?.exists && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 mb-8">
            <p className="text-blue-700 font-semibold mb-2">Your Staked Balance</p>
            <p className="text-5xl font-bold text-blue-900">{stakedSOL} SOL</p>
            <p className="text-blue-600 mt-2">Earning {CURRENT_APY}% APY</p>
          </div>
        )}

        <div className="bg-white border-2 border-gray-200 rounded-2xl p-10 shadow-sm">
          {wallet.connected ? (
            <>
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Amount (SOL)</label>
                <input
                  type="number"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  className="w-full bg-gray-50 border-2 border-gray-300 rounded-xl p-4 text-gray-900 text-xl focus:border-blue-500 focus:outline-none"
                  step="0.01"
                  min="0.01"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={handleStake}
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-xl p-4 font-semibold text-lg transition-colors"
                >
                  {loading ? 'Processing...' : 'Stake SOL'}
                </button>
                
                <button
                  onClick={handleUnstake}
                  disabled={loading}
                  className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 rounded-xl p-4 font-semibold text-lg transition-colors"
                >
                  {loading ? 'Processing...' : 'Unstake SOL'}
                </button>
              </div>

              {message && (
                <div className={`mt-6 p-4 rounded-xl border-2 ${message.includes('✓') ? 'bg-green-50 border-green-300 text-green-800' : 'bg-red-50 border-red-300 text-red-800'}`}>
                  {message}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-6">Connect your wallet to begin staking</p>
              <WalletButton />
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-6 mt-12">
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-gray-900">{CURRENT_APY}%</p>
            <p className="text-sm text-gray-600 mt-2">Annual Yield</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-gray-900">24/7</p>
            <p className="text-sm text-gray-600 mt-2">Instant Access</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-gray-900">100%</p>
            <p className="text-sm text-gray-600 mt-2">Transparent</p>
          </div>
        </div>
      </div>
    </main>
  );
}
