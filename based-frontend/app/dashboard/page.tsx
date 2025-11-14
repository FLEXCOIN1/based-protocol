'use client';

import Link from 'next/link';
import WalletButton from '../../components/WalletButton';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalBurned: 0,
    totalBuyback: 0,
    holders: 0,
    aum: 0,
    avgApy: 0
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">← BASED Protocol</Link>
          <WalletButton />
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black text-white mb-6">
            Live Dashboard
          </h1>
          <p className="text-2xl text-gray-300">
            Real-time protocol stats. Full transparency.
          </p>
          <p className="text-lg text-yellow-300 mt-4">
            🚧 Coming live December 3rd, 2025
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-red-900/50 to-red-700/30 border-2 border-red-500 rounded-3xl p-8 text-center">
            <div className="text-5xl mb-4">🔥</div>
            <p className="text-gray-300 text-sm mb-2">Total Burned</p>
            <p className="text-4xl font-black text-white mb-1">Coming Soon</p>
            <p className="text-red-300 text-sm">Tokens permanently destroyed</p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/50 to-blue-700/30 border-2 border-blue-500 rounded-3xl p-8 text-center">
            <div className="text-5xl mb-4">💎</div>
            <p className="text-gray-300 text-sm mb-2">Total Buyback</p>
            <p className="text-4xl font-black text-white mb-1">Coming Soon</p>
            <p className="text-blue-300 text-sm">$BASED bought from market</p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-purple-700/30 border-2 border-purple-500 rounded-3xl p-8 text-center">
            <div className="text-5xl mb-4">👥</div>
            <p className="text-gray-300 text-sm mb-2">Holders</p>
            <p className="text-4xl font-black text-white mb-1">Coming Soon</p>
            <p className="text-purple-300 text-sm">Unique $BASED holders</p>
          </div>

          <div className="bg-gradient-to-br from-green-900/50 to-green-700/30 border-2 border-green-500 rounded-3xl p-8 text-center">
            <div className="text-5xl mb-4">💰</div>
            <p className="text-gray-300 text-sm mb-2">AUM</p>
            <p className="text-4xl font-black text-white mb-1">Coming Soon</p>
            <p className="text-green-300 text-sm">Assets under management</p>
          </div>
        </div>

        {/* Burn History Chart Placeholder */}
        <div className="bg-white/5 border-2 border-white/20 rounded-3xl p-12 mb-16 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-8">🔥 Burn History</h2>
          <div className="bg-black/40 rounded-2xl p-16 text-center">
            <p className="text-gray-400 text-xl">
              Chart coming soon - will show daily burns over time
            </p>
          </div>
        </div>

        {/* Protocol Performance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-2 border-blue-500 rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-white mb-6">📊 Strategy Performance</h2>
            <div className="space-y-4">
              <div className="bg-black/40 rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-white font-semibold">Conservative</p>
                  <p className="text-blue-400 font-bold">Coming Soon</p>
                </div>
                <p className="text-gray-400 text-sm">Target: 10-12% APY</p>
              </div>
              <div className="bg-black/40 rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-white font-semibold">Aggressive</p>
                  <p className="text-purple-400 font-bold">Coming Soon</p>
                </div>
                <p className="text-gray-400 text-sm">Target: 15-20% APY</p>
              </div>
              <div className="bg-black/40 rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-white font-semibold">Life Changing</p>
                  <p className="text-pink-400 font-bold">Coming Soon</p>
                </div>
                <p className="text-gray-400 text-sm">Target: 30-100%+ APY</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 border-2 border-yellow-500 rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-white mb-6">💸 Fee Distribution</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-white font-semibold">Buyback this week</p>
                  <p className="text-blue-400 font-bold">Coming Soon</p>
                </div>
                <div className="bg-black/40 h-3 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-0"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-white font-semibold">Burned this week</p>
                  <p className="text-red-400 font-bold">Coming Soon</p>
                </div>
                <div className="bg-black/40 h-3 rounded-full overflow-hidden">
                  <div className="bg-red-500 h-full w-0"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-white font-semibold">Staker rewards</p>
                  <p className="text-green-400 font-bold">Coming Soon</p>
                </div>
                <div className="bg-black/40 h-3 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white/5 border-2 border-white/20 rounded-3xl p-12 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-8">Recent Activity</h2>
          <div className="bg-black/40 rounded-2xl p-16 text-center">
            <p className="text-gray-400 text-xl">
              Transaction feed coming December 3rd
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
