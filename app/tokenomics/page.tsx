'use client';

import Link from 'next/link';
import WalletButton from '../../components/WalletButton';

export default function Tokenomics() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">← BASED Protocol</Link>
          <WalletButton />
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-gray-900 mb-4">
            $BASED Tokenomics
          </h1>
          <p className="text-2xl text-gray-600">
            Revenue-Backed. Deflationary. Community-Owned.
          </p>
        </div>

        {/* Token Supply & Allocation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Token Supply */}
          <div className="bg-white rounded-3xl shadow-lg p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Token Supply</h2>
            
            <div className="mb-8">
              <p className="text-gray-600 mb-2">Total Supply</p>
              <p className="text-5xl font-black text-gray-900 mb-2">1,000,000,000</p>
              <p className="text-gray-500">1 Billion $BASED tokens</p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-600 mb-2">Circulating at Launch</p>
              <p className="text-5xl font-black text-blue-600 mb-2">800,000,000</p>
              <p className="text-gray-500">80% immediately available</p>
            </div>
          </div>

          {/* Token Allocation */}
          <div className="bg-white rounded-3xl shadow-lg p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Token Allocation</h2>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Liquidity Pool</span>
                <span className="text-2xl font-bold text-gray-900">60%</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Community Treasury</span>
                <span className="text-2xl font-bold text-gray-900">20%</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Team (2yr vest)</span>
                <span className="text-2xl font-bold text-gray-900">10%</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Marketing</span>
                <span className="text-2xl font-bold text-gray-900">5%</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Development</span>
                <span className="text-2xl font-bold text-gray-900">5%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Planned Utility (Honest) */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-lg p-12 mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Planned Utility (Q1 2026)
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            These features will be live once the DeFi fund launches
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-md">
              <div className="text-5xl mb-4">🔑</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy Access</h3>
              <p className="text-gray-600">
                Hold $BASED to unlock higher-yield tiers
              </p>
              <p className="text-sm text-blue-600 mt-4 font-semibold">Coming Q1 2026</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-md">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Revenue Share</h3>
              <p className="text-gray-600">
                Stake to earn from protocol fees
              </p>
              <p className="text-sm text-blue-600 mt-4 font-semibold">Coming Q1 2026</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-md">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Buyback & Burn</h3>
              <p className="text-gray-600">
                50% of fees buy and burn $BASED
              </p>
              <p className="text-sm text-blue-600 mt-4 font-semibold">Coming Q1 2026</p>
            </div>
          </div>
        </div>

        {/* Fee Structure (When Live) */}
        <div className="bg-white rounded-3xl shadow-lg p-12 mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Fee Structure (When Fund is Live)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="border-2 border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Deposit Fees</h3>
              <div className="space-y-3 text-gray-700">
                <p>• Conservative Tier: <span className="font-bold">0.1%</span></p>
                <p>• Aggressive Tier: <span className="font-bold">0.05%</span> (50% discount)</p>
                <p>• Life Changing Tier: <span className="font-bold">0%</span> (FREE)</p>
              </div>
            </div>

            <div className="border-2 border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Management Fees</h3>
              <div className="space-y-3 text-gray-700">
                <p>• Annual Management: <span className="font-bold">2%</span> of AUM</p>
                <p>• Performance Fee: <span className="font-bold">20%</span> of profits above 8%</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Where Fees Go</h3>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl mb-2">📈</div>
                <p className="text-3xl font-black text-blue-600 mb-1">50%</p>
                <p className="text-gray-700 font-semibold">Buyback $BASED</p>
              </div>
              <div>
                <div className="text-4xl mb-2">🔥</div>
                <p className="text-3xl font-black text-red-600 mb-1">25%</p>
                <p className="text-gray-700 font-semibold">Burn Forever</p>
              </div>
              <div>
                <div className="text-4xl mb-2">💰</div>
                <p className="text-3xl font-black text-green-600 mb-1">25%</p>
                <p className="text-gray-700 font-semibold">Staker Rewards</p>
              </div>
            </div>
          </div>
        </div>

        {/* What Exists NOW vs LATER */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            ⚠️ Current Status (Be Real)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-600 mb-6">✓ Live Now (Dec 3)</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Token launches on Pump.fun</li>
                <li>✓ Website & documentation</li>
                <li>✓ Community (Telegram/Twitter)</li>
                <li>✓ Liquidity pool established</li>
                <li>✓ Trading available</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">○ Coming Q1 2026</h3>
              <ul className="space-y-3 text-gray-700">
                <li>○ DeFi fund smart contracts</li>
                <li>○ Strategy tiers & deposits</li>
                <li>○ $BASED utility (staking/access)</li>
                <li>○ Buyback & burn mechanism</li>
                <li>○ Revenue sharing</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-yellow-100 rounded-xl p-6 text-center">
            <p className="text-gray-800 text-lg font-semibold">
              🎯 Right now, $BASED is a token with a vision. The utility comes when the fund launches in Q1 2026.
            </p>
            <p className="text-gray-600 mt-2">
              Early holders position themselves for the utility rollout.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
