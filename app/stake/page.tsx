'use client';
import { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const TIERS = {
  conservative: {
    name: 'Conservative',
    apy: '10-12%',
    basedRequired: 0,
    strategies: [
      { name: 'Kamino USDC Lending', value: 60, color: '#3b82f6' },
      { name: 'Solend Stable Pools', value: 30, color: '#60a5fa' },
      { name: 'Reserve Fund', value: 10, color: '#93c5fd' },
    ]
  },
  aggressive: {
    name: 'Aggressive',
    apy: '15-20%',
    basedRequired: 10000,
    strategies: [
      { name: 'Kamino Lending', value: 30, color: '#3b82f6' },
      { name: 'Jito Liquid Staking', value: 25, color: '#60a5fa' },
      { name: 'Meteora LP Pools', value: 25, color: '#93c5fd' },
      { name: 'Marinade mSOL', value: 15, color: '#bfdbfe' },
      { name: 'Reserve Fund', value: 5, color: '#dbeafe' },
    ]
  },
  lifeChanging: {
    name: 'Life Changing',
    apy: '30-100%+',
    basedRequired: 50000,
    strategies: [
      { name: 'High-Yield LP Pools', value: 35, color: '#8b5cf6' },
      { name: 'Leveraged Strategies', value: 30, color: '#a78bfa' },
      { name: 'New Protocol Farming', value: 20, color: '#c4b5fd' },
      { name: 'Conservative Base', value: 10, color: '#ddd6fe' },
      { name: 'Reserve Fund', value: 5, color: '#ede9fe' },
    ]
  }
};

export default function Stake() {
  const { connected } = useWallet();
  const [selectedTier, setSelectedTier] = useState<'conservative' | 'aggressive' | 'lifeChanging'>('conservative');
  const [amount, setAmount] = useState('');

  const tier = TIERS[selectedTier];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-6">Stake Your Capital</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          All tiers stake into ONE Solana-based protocol. Choose your strategy, deposit USDC, earn yield.
        </p>

        {/* Tier Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <button
            onClick={() => setSelectedTier('conservative')}
            className={`card text-left transition-all ${
              selectedTier === 'conservative' ? 'border-2 border-blue-600 shadow-lg' : 'border border-gray-200'
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">Conservative</h3>
            <div className="text-3xl font-bold text-blue-600 mb-2">{TIERS.conservative.apy}</div>
            <p className="text-gray-600 text-sm">Free entry - no $BASED required</p>
          </button>

          <button
            onClick={() => setSelectedTier('aggressive')}
            className={`card text-left transition-all ${
              selectedTier === 'aggressive' ? 'border-2 border-blue-600 shadow-lg' : 'border border-gray-200'
            }`}
          >
            <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">POPULAR</div>
            <h3 className="text-2xl font-bold mb-2">Aggressive</h3>
            <div className="text-3xl font-bold text-blue-600 mb-2">{TIERS.aggressive.apy}</div>
            <p className="text-gray-600 text-sm">10K $BASED required</p>
          </button>

          <button
            onClick={() => setSelectedTier('lifeChanging')}
            className={`card text-left transition-all ${
              selectedTier === 'lifeChanging' ? 'border-2 border-purple-600 shadow-lg' : 'border border-gray-200'
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">Life Changing</h3>
            <div className="text-3xl font-bold text-purple-600 mb-2">{TIERS.lifeChanging.apy}</div>
            <p className="text-gray-600 text-sm">50K $BASED required</p>
          </button>
        </div>

        {/* Selected Tier Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-6">{tier.name} - Fund Allocation</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={tier.strategies}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ value }) => `${value}%`}
                  outerRadius={100}
                  dataKey="value"
                >
                  {tier.strategies.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-6 space-y-2">
              {tier.strategies.map((strategy, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span className="text-gray-700">{strategy.name}</span>
                  <span className="font-semibold text-gray-900">{strategy.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deposit Interface */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-6">Deposit USDC</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount (USDC)</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={!connected}
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Target APY</span>
                  <span className="font-bold text-blue-600">{tier.apy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">$BASED Required</span>
                  <span className="font-bold">{tier.basedRequired === 0 ? 'None' : tier.basedRequired.toLocaleString()}</span>
                </div>
              </div>

              {tier.basedRequired > 0 && (
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-blue-600">Auto-unlock:</span> Protocol automatically buys {tier.basedRequired.toLocaleString()} $BASED for you. No manual swapping.
                  </p>
                </div>
              )}

              <button
                onClick={() => alert('Contract integration coming January 2026. Token launches Dec 3rd!')}
                disabled={!connected || !amount}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {!connected ? 'Connect Wallet First' : 'Deposit & Earn'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Coming January 2026. $BASED launches December 3rd on Pump.fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
