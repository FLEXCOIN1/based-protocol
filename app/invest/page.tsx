'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Invest() {
  const [selectedTier, setSelectedTier] = useState<0 | 1 | 2>(1);
  const [amount, setAmount] = useState('1000');

  const tiers = [
    { 
      id: 0, 
      name: 'Basic',
      apy: '10-15%',
      allocation: '35% BTC, 30% ETH, 20% SOL, 10% USDC, 5% $BASED',
      risk: 'Low'
    },
    { 
      id: 1, 
      name: 'Advanced',
      apy: '20-30%',
      allocation: '30% BTC, 25% ETH, 20% SOL, 10% DeFi, 5% L1s, 10% $BASED',
      risk: 'Medium'
    },
    { 
      id: 2, 
      name: 'Aggressive',
      apy: '50-100%+',
      allocation: '20% BTC, 20% ETH, 15% SOL, 10% DeFi, 10% Alts, 25% $BASED',
      risk: 'High'
    }
  ];

  const calculateProjection = () => {
    const principal = parseFloat(amount) || 0;
    const fee = principal * 0.005; // 0.5% deposit fee
    const net = principal - fee;
    
    const apyMid = selectedTier === 0 ? 0.125 : selectedTier === 1 ? 0.25 : 0.75;
    const projected = net * (1 + apyMid);
    
    return { fee, net, projected };
  };

  const { fee, net, projected } = calculateProjection();

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Invest in BASED Protocol</h1>
          <p className="text-xl text-gray-600">Choose your tier, deposit USDC, receive diversified crypto exposure</p>
        </div>

        {/* Coming Q1 2026 Notice */}
        <div className="mb-12 p-6 bg-blue-50 border border-blue-200 rounded-xl text-center">
          <p className="text-lg font-semibold text-blue-900">
            ⏳ Full ETF launches Q1 2026
          </p>
          <p className="text-blue-700 mt-2">
            $BASED token launches December 3rd, 2025 on Pump.fun. Connect your wallet to track progress.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Tier Selection */}
          <div>
            <h2 className="text-2xl font-bold mb-6">1. Select Your Tier</h2>
            
            <div className="space-y-4">
              {tiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id as 0 | 1 | 2)}
                  className={`w-full p-6 rounded-xl border-2 transition text-left ${
                    selectedTier === tier.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{tier.name}</h3>
                    <span className="text-2xl font-bold text-blue-600">{tier.apy}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{tier.allocation}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded">Risk: {tier.risk}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Amount Input */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">2. Enter Amount</h2>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-6 py-4 text-2xl border-2 border-gray-200 rounded-xl focus:border-blue-600 outline-none"
                  placeholder="1000"
                />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl text-gray-400">USDC</span>
              </div>
              
              <div className="mt-4 flex gap-2">
                {['100', '1000', '5000', '10000'].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setAmount(preset)}
                    className="px-4 py-2 border border-gray-200 rounded-lg hover:border-gray-300 text-sm"
                  >
                    ${preset}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Summary */}
          <div>
            <div className="sticky top-32">
              <h2 className="text-2xl font-bold mb-6">Investment Summary</h2>
              
              <div className="bg-gray-50 rounded-xl p-8 space-y-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Tier</div>
                  <div className="text-xl font-bold">{tiers[selectedTier].name}</div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-600">Deposit Amount</span>
                    <span className="font-semibold">${amount || '0'} USDC</span>
                  </div>
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-600">Deposit Fee (0.5%)</span>
                    <span className="font-semibold">-${fee.toFixed(2)} USDC</span>
                  </div>
                  <div className="flex justify-between mb-3 pb-3 border-b">
                    <span className="text-gray-600">Net Investment</span>
                    <span className="font-semibold">${net.toFixed(2)} USDC</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="font-bold">Projected (1 year)</span>
                    <span className="font-bold text-green-600">${projected.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Based on {tiers[selectedTier].apy} APY target
                  </p>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="font-semibold mb-3">Portfolio Breakdown</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tiers[selectedTier].allocation}
                  </p>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="font-semibold mb-2">Exit Fees</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex justify-between"><span>0-1 month:</span><span className="font-medium">50%</span></div>
                    <div className="flex justify-between"><span>2-6 months:</span><span className="font-medium">25%</span></div>
                    <div className="flex justify-between"><span>6-9 months:</span><span className="font-medium">10%</span></div>
                    <div className="flex justify-between"><span>9-11 months:</span><span className="font-medium">5%</span></div>
                    <div className="flex justify-between"><span>12+ months:</span><span className="font-medium text-green-600">0%</span></div>
                  </div>
                </div>

                <button
                  disabled
                  className="w-full py-4 bg-gray-300 text-gray-500 rounded-lg font-semibold cursor-not-allowed"
                >
                  Coming Q1 2026
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Full protocol launches after $BASED graduates to Raydium
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Sections */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">0.5%</div>
            <div className="text-sm text-gray-600">Deposit Fee</div>
            <p className="text-xs text-gray-500 mt-2">Covers gas and operations</p>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">Automatic</div>
            <div className="text-sm text-gray-600">Portfolio Construction</div>
            <p className="text-xs text-gray-500 mt-2">One deposit, full diversification</p>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Withdraw Anytime</div>
            <p className="text-xs text-gray-500 mt-2">Exit fees decrease over time</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/how-it-works" className="text-blue-600 hover:underline">
            Learn how BASED Protocol works →
          </Link>
        </div>
      </div>
    </div>
  );
}
