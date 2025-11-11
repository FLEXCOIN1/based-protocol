'use client';

import { useState } from 'react';

type PoolType = 'sol' | 'based';

interface PoolSelectorProps {
  selectedPool: PoolType;
  onPoolChange: (pool: PoolType) => void;
}

export default function PoolSelector({ selectedPool, onPoolChange }: PoolSelectorProps) {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Choose Your Pool</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* SOL Pool */}
        <button
          onClick={() => onPoolChange('sol')}
          className={`p-8 rounded-lg border-4 transition-all ${
            selectedPool === 'sol'
              ? 'border-blue-500 bg-blue-500/20 scale-105'
              : 'border-white/20 bg-white/5 hover:border-blue-500/50'
          }`}
        >
          <div className="text-6xl mb-4">💎</div>
          <h3 className="text-2xl font-bold text-white mb-2">SOL Staking</h3>
          <p className="text-gray-300 mb-4">Conservative yield farming</p>
          <div className="space-y-2 text-left">
            <div className="flex justify-between">
              <span className="text-gray-400">APY:</span>
              <span className="font-bold text-green-400">8.5%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Risk:</span>
              <span className="font-bold text-blue-400">Low</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Rewards:</span>
              <span className="font-bold text-white">SOL</span>
            </div>
          </div>
          {selectedPool === 'sol' && (
            <div className="mt-4 bg-blue-500 text-white py-2 rounded font-bold">
              SELECTED ✓
            </div>
          )}
        </button>

        {/* BASED Pool */}
        <button
          onClick={() => onPoolChange('based')}
          className={`p-8 rounded-lg border-4 transition-all ${
            selectedPool === 'based'
              ? 'border-purple-500 bg-purple-500/20 scale-105'
              : 'border-white/20 bg-white/5 hover:border-purple-500/50'
          }`}
        >
          <div className="text-6xl mb-4">🔥</div>
          <h3 className="text-2xl font-bold text-white mb-2">$BSOL Staking</h3>
          <p className="text-gray-300 mb-4">High yield, high reward</p>
          <div className="space-y-2 text-left">
            <div className="flex justify-between">
              <span className="text-gray-400">APY:</span>
              <span className="font-bold text-green-400">50-100%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Risk:</span>
              <span className="font-bold text-orange-400">Higher</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Rewards:</span>
              <span className="font-bold text-purple-400">$BSOL</span>
            </div>
          </div>
          {selectedPool === 'based' && (
            <div className="mt-4 bg-purple-500 text-white py-2 rounded font-bold">
              SELECTED ✓
            </div>
          )}
        </button>
      </div>

      <div className="mt-6 text-center text-sm text-gray-400">
        Both pools share the same gamification: levels, achievements, and leaderboard
      </div>
    </div>
  );
}
