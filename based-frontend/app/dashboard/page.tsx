'use client';

import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import WalletButton from '@/components/WalletButton';
import { useState, useEffect } from 'react';
import { getProgram, getUserStake, claimRewards, claimReferralRewards } from '@/lib/contract';
import { AnchorWallet } from '@/lib/anchorWallet';
import Link from 'next/link';

export default function Dashboard() {
  const { publicKey, signTransaction, signAllTransactions } = useWallet();
  const { connection } = useConnection();
  const [stakeData, setStakeData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [claiming, setClaiming] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (publicKey) {
      loadStakeData();
    }
  }, [publicKey]);

  const loadStakeData = async () => {
    if (!publicKey || !signTransaction || !signAllTransactions) return;
    try {
      const wallet = { publicKey, signTransaction, signAllTransactions };
      const anchorWallet = AnchorWallet.fromWalletAdapter(wallet);
      const program = await getProgram(connection, anchorWallet);
      const data = await getUserStake(program, publicKey);
      setStakeData(data);
    } catch (e) {
      console.error('Error loading stake:', e);
    } finally {
      setLoading(false);
    }
  };

  const handleClaimRewards = async () => {
    if (!publicKey || !signTransaction || !signAllTransactions || claiming) return;
    setClaiming(true);
    try {
      const wallet = { publicKey, signTransaction, signAllTransactions };
      const anchorWallet = AnchorWallet.fromWalletAdapter(wallet);
      const program = await getProgram(connection, anchorWallet);
      await claimRewards(program, publicKey);
      alert('Rewards claimed successfully!');
      await loadStakeData();
    } catch (e: any) {
      console.error('Error claiming rewards:', e);
      alert('Failed to claim rewards: ' + e.message);
    } finally {
      setClaiming(false);
    }
  };

  const handleClaimReferralRewards = async () => {
    if (!publicKey || !signTransaction || !signAllTransactions || claiming) return;
    setClaiming(true);
    try {
      const wallet = { publicKey, signTransaction, signAllTransactions };
      const anchorWallet = AnchorWallet.fromWalletAdapter(wallet);
      const program = await getProgram(connection, anchorWallet);
      await claimReferralRewards(program, publicKey);
      alert('Referral rewards claimed successfully!');
      await loadStakeData();
    } catch (e: any) {
      console.error('Error claiming referral rewards:', e);
      alert('Failed to claim referral rewards: ' + e.message);
    } finally {
      setClaiming(false);
    }
  };

  if (!mounted) {
    return <div className="min-h-screen bg-gray-50" />;
  }

  if (!publicKey) {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">BASED Reserve</Link>
            <WalletButton />
          </div>
        </nav>
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Connect Your Wallet</h2>
            <p className="text-gray-600">Connect to view your dashboard</p>
          </div>
        </div>
      </div>
    );
  }

  if (loading || !stakeData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">BASED Reserve</Link>
            <WalletButton />
          </div>
        </nav>
        <div className="flex items-center justify-center h-screen text-gray-900">
          <p>Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">BASED Reserve</Link>
            <Link href="/how-it-works" className="text-sm font-medium text-gray-600 hover:text-blue-600">How It Works</Link>
            <Link href="/tokenomics" className="text-sm font-medium text-gray-600 hover:text-blue-600">Tokenomics</Link>
            <Link href="/dashboard" className="text-sm font-medium text-blue-600 underline">Dashboard</Link>
          </div>
          <WalletButton />
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Your Dashboard</h1>
          <p className="text-gray-600 font-mono text-sm">
            {publicKey.toString().slice(0, 8)}...{publicKey.toString().slice(-8)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-sm text-gray-600 mb-2">Total Staked</p>
            <p className="text-3xl font-bold text-gray-900">{stakeData.staked.toFixed(4)} SOL</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-sm text-gray-600 mb-2">Current Multiplier</p>
            <p className="text-3xl font-bold text-blue-600">{stakeData.multiplier.toFixed(2)}x</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-sm text-gray-600 mb-2">Leaderboard Rank</p>
            <p className="text-3xl font-bold text-gray-900">#{stakeData.rank || '-'}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-900">📊 Staking Rewards</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Pending Rewards:</span>
                <span className="font-bold text-gray-900">{stakeData.rewards.toFixed(4)} SOL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Escrowed Rewards:</span>
                <span className="font-bold text-gray-900">{stakeData.escrowedRewards.toFixed(4)} SOL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Earned:</span>
                <span className="font-bold text-green-600">{stakeData.rewards.toFixed(4)} SOL</span>
              </div>
            </div>
            <button 
              onClick={handleClaimRewards}
              disabled={claiming || stakeData.rewards === 0}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-6 py-3 rounded-lg font-semibold"
            >
              {claiming ? 'Claiming...' : 'Claim Rewards'}
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-900">🤝 Referral Rewards</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Pending:</span>
                <span className="font-bold text-gray-900">{stakeData.referralRewardsPending.toFixed(4)} SOL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Claimed:</span>
                <span className="font-bold text-gray-900">{stakeData.totalReferralRewardsClaimed.toFixed(4)} SOL</span>
              </div>
            </div>
            <button 
              onClick={handleClaimReferralRewards}
              disabled={claiming || stakeData.referralRewardsPending === 0}
              className="w-full mt-4 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white px-6 py-3 rounded-lg font-semibold"
            >
              {claiming ? 'Claiming...' : 'Claim Referral Rewards'}
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-900">📈 Staking Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Weeks Staked</p>
              <p className="text-xl font-bold text-gray-900">{stakeData.weeksStaked.toFixed(1)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Effective APY</p>
              <p className="text-xl font-bold text-green-600">{(8.5 * stakeData.multiplier).toFixed(2)}%</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Staked</p>
              <p className="text-xl font-bold text-gray-900">{stakeData.totalStaked.toFixed(2)} SOL</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Vesting Progress</p>
              <p className="text-xl font-bold text-gray-900">{Math.min(100, (stakeData.weeksStaked / 52) * 100).toFixed(0)}%</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
              Stake More SOL
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
