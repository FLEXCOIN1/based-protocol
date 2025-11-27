'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, TrendingUp, Zap, Wallet } from 'lucide-react';

const tiers = [
  {
    id: 0,
    name: 'Conservative',
    risk: 'Low Risk',
    apy: '10-12%',
    depositFee: '0.1%',
    basedRequired: 'None',
    icon: Shield,
    color: 'blue',
    features: ['USDC lending on Kamino', 'Stable liquidity pools', 'Low volatility strategies']
  },
  {
    id: 1,
    name: 'Aggressive',
    risk: 'Medium Risk',
    apy: '15-20%',
    depositFee: '0.05%',
    basedRequired: '10,000',
    unlockFee: '1%',
    icon: TrendingUp,
    color: 'emerald',
    popular: true,
    features: ['Jito staking (6-8% APY)', 'Meteora liquidity pools', 'Auto-buys 10K $BASED']
  },
  {
    id: 2,
    name: 'Life Changing',
    risk: 'High Risk',
    apy: '30-100%+',
    depositFee: '0%',
    basedRequired: '50,000',
    unlockFee: '2%',
    icon: Zap,
    color: 'purple',
    features: ['Leveraged yield farming', 'Advanced DeFi strategies', 'Auto-buys 50K $BASED']
  }
];

export default function Invest() {
  const [selectedTier, setSelectedTier] = useState<0 | 1 | 2>(1);
  const [amount, setAmount] = useState<string>('1000');

  const currentTier = tiers[selectedTier];
  const depositAmount = parseFloat(amount) || 0;
  const feePercent = parseFloat(currentTier.depositFee) / 100;
  const fee = depositAmount * feePercent;
  const netDeposit = depositAmount - fee;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6" suppressHydrationWarning>
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-10">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Invest in BASED Protocol</h1>
          <p className="text-lg text-slate-600">Select your tier and deposit amount to get started</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Tier Selection */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tier Selection */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6">1. Select Your Tier</h2>
              <div className="space-y-4" suppressHydrationWarning>
                {tiers.map((tier) => {
                  const Icon = tier.icon;
                  const isSelected = selectedTier === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => setSelectedTier(tier.id as 0 | 1 | 2)}
                      className={`w-full p-6 rounded-xl border-2 transition text-left cursor-pointer ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-50'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            tier.color === 'blue' ? 'bg-blue-100' :
                            tier.color === 'emerald' ? 'bg-emerald-100' : 'bg-purple-100'
                          }`}>
                            <Icon className={`w-6 h-6 ${
                              tier.color === 'blue' ? 'text-blue-600' :
                              tier.color === 'emerald' ? 'text-emerald-600' : 'text-purple-600'
                            }`} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-900">{tier.name}</span>
                              {tier.popular && (
                                <span className="text-xs bg-emerald-500 text-white px-2 py-0.5 rounded-full">Popular</span>
                              )}
                            </div>
                            <span className="text-sm text-slate-500">{tier.risk}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-slate-900">{tier.apy} APY</div>
                          <div className="text-sm text-slate-500">{tier.depositFee} fee</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Amount Input */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6">2. Enter Amount (USDC)</h2>
              <div className="relative" suppressHydrationWarning>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-6 py-4 text-2xl border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none"
                  placeholder="1000"
                  suppressHydrationWarning
                />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 text-lg">USDC</span>
              </div>
              <div className="mt-4 flex gap-3" suppressHydrationWarning>
                {['100', '500', '1000', '5000'].map((preset) => (
                  <div
                    key={preset}
                    onClick={() => setAmount(preset)}
                    className="px-4 py-2 border border-slate-200 rounded-lg hover:border-slate-300 text-sm cursor-pointer bg-white"
                  >
                    ${preset}
                  </div>
                ))}
              </div>
            </div>

            {/* Tier Details */}
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6">{currentTier.name} Tier Details</h2>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-sm text-slate-500 mb-1">Target APY</div>
                  <div className="text-2xl font-bold text-slate-900">{currentTier.apy}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Deposit Fee</div>
                  <div className="text-2xl font-bold text-slate-900">{currentTier.depositFee}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">$BASED Required</div>
                  <div className="text-2xl font-bold text-emerald-600">{currentTier.basedRequired}</div>
                </div>
                {currentTier.unlockFee && (
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Auto-Unlock Fee</div>
                    <div className="text-2xl font-bold text-slate-900">{currentTier.unlockFee}</div>
                  </div>
                )}
              </div>
              <div>
                <div className="text-sm text-slate-500 mb-3">Features</div>
                <ul className="space-y-2">
                  {currentTier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700">
                      <span className="text-emerald-500">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-xl border border-slate-200 sticky top-24">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Investment Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-600">Tier</span>
                  <span className="font-semibold text-slate-900">{currentTier.name}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-600">Deposit Amount</span>
                  <span className="font-semibold text-slate-900">${depositAmount.toLocaleString()} USDC</span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-600">Fee ({currentTier.depositFee})</span>
                  <span className="font-semibold text-slate-900">-${fee.toFixed(2)} USDC</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-slate-900 font-bold">Net Deposit</span>
                  <span className="font-bold text-emerald-600">${netDeposit.toFixed(2)} USDC</span>
                </div>
              </div>

              <div
                className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Wallet className="w-5 h-5" />
                Connect Wallet to Invest
              </div>

              <p className="text-xs text-slate-500 text-center mt-4">
                By investing, you agree to our terms of service and acknowledge the risks involved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
