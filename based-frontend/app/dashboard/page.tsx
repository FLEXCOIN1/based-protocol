'use client';

import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import WalletButton from '@/components/WalletButton';
import { useState, useEffect } from 'react';
import { getStakeInfo } from '@/lib/staking';
import { calculateLevelProgress, ACHIEVEMENTS } from '@/lib/gamification';
import Link from 'next/link';

export default function Dashboard() {
  const { publicKey, signTransaction, signAllTransactions } = useWallet();
  const { connection } = useConnection();
  const [stakeData, setStakeData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

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
      const data = await getStakeInfo(connection, publicKey, wallet);
      setStakeData(data);
    } catch (e) {
      console.error('Error loading stake:', e);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900" />;
  }

  if (!publicKey) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900">
        <nav className="p-6 flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <Link href="/" className="text-3xl font-bold text-white">BASED Protocol</Link>
          </div>
          <WalletButton />
        </nav>
        <div className="flex items-center justify-center h-screen">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Connect Your Wallet</h2>
            <p className="text-gray-400">Connect to view your dashboard</p>
          </div>
        </div>
      </div>
    );
  }

  if (loading || !stakeData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900">
        <nav className="p-6 flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <Link href="/" className="text-3xl font-bold text-white">BASED Protocol</Link>
          </div>
          <WalletButton />
        </nav>
        <div className="flex items-center justify-center h-screen text-white">
          <p>Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  const levelProgress = calculateLevelProgress(stakeData.weeksStaked);
  const lockedAchievements = ACHIEVEMENTS.filter(
    a => !stakeData.achievements.find((ua: any) => ua.id === a.id)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900">
      <nav className="p-6 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <Link href="/" className="text-3xl font-bold text-white">BASED Protocol</Link>
          <Link href="/leaderboard" className="text-white hover:underline">Leaderboard</Link>
          <Link href="/how-it-works" className="text-white hover:underline">How It Works</Link>
          <Link href="/faq" className="text-white hover:underline">FAQ</Link>
          <Link href="/dashboard" className="text-white underline font-bold">Dashboard</Link>
        </div>
        <WalletButton />
      </nav>

      <main className="container mx-auto px-6 py-12 text-white max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-5xl font-bold mb-2">Your Dashboard</h1>
            <p className="text-gray-400 font-mono text-sm">
              {publicKey.toString().slice(0, 8)}...{publicKey.toString().slice(-8)}
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-3">
              <span className="text-6xl">{stakeData.level.emoji}</span>
              <div>
                <p className="text-3xl font-bold">{stakeData.level.name}</p>
                <p className="text-gray-400">Level {stakeData.level.level}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <p className="text-sm text-gray-400 mb-2">Total Staked</p>
            <p className="text-3xl font-bold">{stakeData.staked.toFixed(4)} SOL</p>
          </div>
          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <p className="text-sm text-gray-400 mb-2">Current Multiplier</p>
            <p className="text-3xl font-bold text-yellow-400">{stakeData.level.multiplier.toFixed(2)}x</p>
          </div>
          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <p className="text-sm text-gray-400 mb-2">Leaderboard Rank</p>
            <p className="text-3xl font-bold">#{stakeData.rank || '-'}</p>
          </div>
          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <p className="text-sm text-gray-400 mb-2">Daily Streak</p>
            <p className="text-3xl font-bold">🔥 {stakeData.loginStreak}</p>
          </div>
        </div>

        {/* Level Progress */}
        {levelProgress && levelProgress.nextLevel && (
          <div className="bg-white/10 backdrop-blur p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Level Progress</h2>
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <span className="text-3xl">{stakeData.level.emoji}</span>
                <span className="font-bold">{stakeData.level.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Next:</span>
                <span className="text-3xl">{levelProgress.nextLevel.emoji}</span>
                <span className="font-bold">{levelProgress.nextLevel.name}</span>
              </div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-6 overflow-hidden mb-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-full transition-all duration-500 flex items-center justify-center text-sm font-bold"
                style={{ width: levelProgress.progress + '%' }}
              >
                {levelProgress.progress.toFixed(0)}%
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>{stakeData.weeksStaked.toFixed(1)} weeks staked</span>
              <span>{(levelProgress.next - levelProgress.current).toFixed(1)} weeks to next level</span>
            </div>
          </div>
        )}

        {/* Achievements Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Achievements ({stakeData.achievements.length}/{ACHIEVEMENTS.length})
          </h2>
          
          {stakeData.achievements.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-green-400">🏆 Unlocked</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {stakeData.achievements.map((achievement: any) => (
                  <div 
                    key={achievement.id}
                    className="bg-gradient-to-br from-green-500/20 to-blue-500/20 border-2 border-green-500/50 p-4 rounded-lg text-center hover:scale-105 transition-all"
                  >
                    <p className="text-5xl mb-2">{achievement.emoji}</p>
                    <p className="text-sm font-bold">{achievement.name}</p>
                    <p className="text-xs text-gray-400 mt-1">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {lockedAchievements.length > 0 && (
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-400">🔒 Locked</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {lockedAchievements.map((achievement) => (
                  <div 
                    key={achievement.id}
                    className="bg-white/5 border-2 border-white/10 p-4 rounded-lg text-center opacity-50"
                  >
                    <p className="text-5xl mb-2 grayscale">{achievement.emoji}</p>
                    <p className="text-sm font-bold">{achievement.name}</p>
                    <p className="text-xs text-gray-500 mt-1">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Stats Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">📊 Your Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Weeks Staked:</span>
                <span className="font-bold">{stakeData.weeksStaked.toFixed(1)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Effective APY:</span>
                <span className="font-bold text-green-400">{(8.5 * stakeData.level.multiplier).toFixed(2)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Pending Rewards:</span>
                <span className="font-bold">{stakeData.rewards.toFixed(4)} SOL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Is Founder:</span>
                <span className="font-bold">{stakeData.isFounder ? '✅ Yes' : '❌ No'}</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">🎯 Next Milestones</h3>
            <div className="space-y-3">
              {levelProgress && levelProgress.nextLevel && (
                <div className="flex items-center gap-2">
                  <span>{levelProgress.nextLevel.emoji}</span>
                  <span className="text-sm">
                    Reach {levelProgress.nextLevel.name} in {(levelProgress.next - levelProgress.current).toFixed(0)} weeks
                  </span>
                </div>
              )}
              {stakeData.loginStreak < 7 && (
                <div className="flex items-center gap-2">
                  <span>🔥</span>
                  <span className="text-sm">
                    {7 - stakeData.loginStreak} days to 7-day streak bonus
                  </span>
                </div>
              )}
              {stakeData.rank > 10 && (
                <div className="flex items-center gap-2">
                  <span>🎯</span>
                  <span className="text-sm">
                    Reach Top 10 to unlock achievement
                  </span>
                </div>
              )}
              {stakeData.staked < 100 && (
                <div className="flex items-center gap-2">
                  <span>🐋</span>
                  <span className="text-sm">
                    Stake {(100 - stakeData.staked).toFixed(2)} more SOL for Whale Status
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Keep Building Your Empire</h2>
          <div className="flex gap-4 justify-center">
            <Link href="/">
              <button className="bg-white text-purple-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
                Stake More
              </button>
            </Link>
            <Link href="/leaderboard">
              <button className="bg-white/20 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/30">
                View Leaderboard
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
