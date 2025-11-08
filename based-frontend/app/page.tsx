'use client';

import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import WalletButton from '@/components/WalletButton';
import PoolSelector from '@/components/PoolSelector';
import { useState, useEffect } from 'react';
import { getStakeInfo } from '@/lib/staking';
import { calculateLevelProgress, ACHIEVEMENTS } from '@/lib/gamification';
import Link from 'next/link';

type PoolType = 'sol' | 'based';

export default function Home() {
  const { publicKey, signTransaction, signAllTransactions } = useWallet();
  const { connection } = useConnection();
  const [mounted, setMounted] = useState(false);
  const [selectedPool, setSelectedPool] = useState<PoolType>('sol');
  const [stakeData, setStakeData] = useState<any>(null);
  const [stakeAmount, setStakeAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [calcAmount, setCalcAmount] = useState('100');
  const [calcWeeks, setCalcWeeks] = useState('52');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (publicKey && selectedPool === 'sol') {
      loadStakeData();
    }
  }, [publicKey, selectedPool]);

  const loadStakeData = async () => {
    if (!publicKey || !signTransaction || !signAllTransactions) return;
    try {
      const wallet = { publicKey, signTransaction, signAllTransactions };
      const data = await getStakeInfo(connection, publicKey, wallet);
      setStakeData(data);
    } catch (e) {
      console.error('Error loading stake:', e);
    }
  };

  const handleStake = async () => {
    if (!publicKey || !stakeAmount) return;
    setLoading(true);
    try {
      // TODO: Implement actual staking based on selectedPool
      alert(`Staking ${stakeAmount} ${selectedPool.toUpperCase()} - Coming soon!`);
    } catch (e) {
      console.error('Stake error:', e);
    } finally {
      setLoading(false);
    }
  };

  const calculateEarnings = () => {
    const amount = parseFloat(calcAmount) || 0;
    const weeks = parseFloat(calcWeeks) || 0;
    const baseApy = selectedPool === 'sol' ? 0.085 : 0.75; // 8.5% for SOL, 75% for BASED
    const multiplier = 1 + (weeks * 0.005); // 0.5% per week
    const effectiveApy = baseApy * multiplier;
    const earnings = amount * effectiveApy * (weeks / 52);
    return { earnings: earnings.toFixed(2), effectiveApy: (effectiveApy * 100).toFixed(2) };
  };

  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900" />;
  }

  const { earnings, effectiveApy } = calculateEarnings();
  const levelProgress = stakeData ? calculateLevelProgress(stakeData.weeksStaked) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900">
      <nav className="p-6 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <Link href="/">
            <h1 className="text-3xl font-bold text-white cursor-pointer">BASED Protocol</h1>
          </Link>
          <Link href="/leaderboard" className="text-white hover:underline">Leaderboard</Link>
          <Link href="/how-it-works" className="text-white hover:underline">How It Works</Link>
          <Link href="/dashboard" className="text-white hover:underline">Dashboard</Link>
          <Link href="/faq" className="text-white hover:underline">FAQ</Link>
        </div>
        <WalletButton />
      </nav>

      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">
            Stake. Level Up. Earn More.
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            The first gamified staking protocol on Solana. Choose your pool and start leveling up.
          </p>
        </div>

        {/* Pool Selector */}
        <PoolSelector selectedPool={selectedPool} onPoolChange={setSelectedPool} />

        {/* Staking Interface */}
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stake {selectedPool === 'sol' ? 'SOL' : '$BASED'}
          </h2>

          {selectedPool === 'based' && (
            <div className="bg-yellow-500/20 border border-yellow-500/50 p-4 rounded-lg mb-6">
              <p className="text-yellow-300 text-sm">
                🚀 $BASED token launching soon! Join the waitlist and get notified.
              </p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-white mb-2">Amount to Stake</label>
              <input
                type="number"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full p-3 rounded bg-white/5 border border-white/20 text-white"
                disabled={selectedPool === 'based'}
              />
            </div>

            <button
              onClick={handleStake}
              disabled={loading || !publicKey || !stakeAmount || selectedPool === 'based'}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white py-3 rounded font-bold text-lg transition-all"
            >
              {loading ? 'Staking...' : selectedPool === 'based' ? 'Coming Soon' : 'Stake Now'}
            </button>
          </div>

          {publicKey && stakeData && selectedPool === 'sol' && (
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-white">
                <div>
                  <p className="text-sm text-gray-400">Your Stake</p>
                  <p className="text-xl font-bold">{stakeData.staked.toFixed(4)} SOL</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Pending Rewards</p>
                  <p className="text-xl font-bold">{stakeData.rewards.toFixed(4)} SOL</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Your Level</p>
                  <p className="text-xl font-bold">{stakeData.level.emoji} {stakeData.level.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Multiplier</p>
                  <p className="text-xl font-bold text-yellow-400">{stakeData.level.multiplier.toFixed(2)}x</p>
                </div>
              </div>

              {levelProgress && levelProgress.nextLevel && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Progress to {levelProgress.nextLevel.name}</span>
                    <span>{levelProgress.progress.toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all"
                      style={{ width: `${levelProgress.progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Earnings Calculator */}
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">💰 Earnings Calculator</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-white mb-2">Amount</label>
              <input
                type="number"
                value={calcAmount}
                onChange={(e) => setCalcAmount(e.target.value)}
                className="w-full p-3 rounded bg-white/5 border border-white/20 text-white"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Weeks Staked</label>
              <input
                type="number"
                value={calcWeeks}
                onChange={(e) => setCalcWeeks(e.target.value)}
                className="w-full p-3 rounded bg-white/5 border border-white/20 text-white"
              />
            </div>
          </div>
          <div className="bg-green-500/20 border border-green-500/50 p-6 rounded-lg">
            <p className="text-gray-300 mb-2">Estimated Earnings:</p>
            <p className="text-4xl font-bold text-green-400 mb-4">
              {earnings} {selectedPool.toUpperCase()}
            </p>
            <p className="text-sm text-gray-400">
              Effective APY: {effectiveApy}% (includes time multiplier)
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/how-it-works">
            <button className="bg-white text-purple-900 px-8 py-3 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all">
              Learn How It Works
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
