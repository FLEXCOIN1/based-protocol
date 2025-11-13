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
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (wallet.publicKey) {
      loadStakeInfo();
    }
  }, [wallet.publicKey]);

  const loadStakeInfo = async () => {
    if (!wallet.publicKey) return;
    setRefreshing(true);
    try {
      const info = await getUserStakeInfo(wallet.publicKey, connection);
      setUserStake(info);
    } catch (error) {
      console.error('Error loading stake info:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const handleStake = async () => {
    if (!wallet.connected || !wallet.publicKey) {
      setMessage('❌ Wallet not connected');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const tx = await stakeSOL(wallet, parseFloat(stakeAmount), connection);
      setMessage(`✅ Staked ${stakeAmount} SOL! TX: ${tx.slice(0, 8)}...`);
      await loadStakeInfo();
    } catch (error: any) {
      setMessage(`❌ ${error.message || 'Failed to stake'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleUnstake = async () => {
    if (!wallet.connected || !wallet.publicKey) {
      setMessage('❌ Wallet not connected');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const tx = await unstakeSOL(wallet, parseFloat(stakeAmount), connection);
      setMessage(`✅ Unstaked ${stakeAmount} SOL! TX: ${tx.slice(0, 8)}...`);
      await loadStakeInfo();
    } catch (error: any) {
      setMessage(`❌ ${error.message || 'Failed to unstake'}`);
    } finally {
      setLoading(false);
    }
  };

  const stakedSOL = userStake && userStake.exists ? (userStake.amount / 1e9).toFixed(4) : '0.0000';

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <nav className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold">BASED Protocol</h1>
        <WalletButton />
      </nav>

      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-8 mb-6">
          <h2 className="text-2xl mb-4">Stake SOL</h2>
          <p className="text-gray-400 mb-6">Current APY: {CURRENT_APY}%</p>

          {wallet.connected ? (
            <>
              {userStake && userStake.exists && (
                <div className="mb-6 p-4 bg-gray-700 rounded">
                  <p className="text-sm text-gray-300">Your Staked Balance</p>
                  <p className="text-3xl font-bold text-green-400">{stakedSOL} SOL</p>
                  <button 
                    onClick={loadStakeInfo}
                    disabled={refreshing}
                    className="text-sm text-blue-400 hover:text-blue-300 mt-2"
                  >
                    {refreshing ? '↻ Refreshing...' : '↻ Refresh'}
                  </button>
                </div>
              )}

              <input
                type="number"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                className="w-full bg-gray-700 rounded p-3 mb-4 text-white"
                placeholder="Amount (SOL)"
                step="0.1"
                min="0.1"
              />
              
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={handleStake}
                  disabled={loading}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 rounded p-3 font-bold"
                >
                  {loading ? '⏳' : '➕'} Stake
                </button>
                
                <button
                  onClick={handleUnstake}
                  disabled={loading || !userStake?.exists}
                  className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 rounded p-3 font-bold"
                >
                  {loading ? '⏳' : '➖'} Unstake
                </button>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-400">Connect your wallet to stake</p>
          )}

          {message && (
            <div className={`mt-4 p-4 rounded ${message.includes('✅') ? 'bg-green-900' : 'bg-red-900'}`}>
              {message}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Link href="/about-based" className="bg-gray-800 p-4 rounded hover:bg-gray-700">
            <h3 className="font-bold">About BASED</h3>
            <p className="text-sm text-gray-400">Learn about the protocol</p>
          </Link>
          <Link href="/whitepaper" className="bg-gray-800 p-4 rounded hover:bg-gray-700">
            <h3 className="font-bold">Whitepaper</h3>
            <p className="text-sm text-gray-400">Read our docs</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
