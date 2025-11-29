'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useState } from 'react';
import { Shield, TrendingUp, Zap, Wallet, ArrowUpRight, ArrowDownLeft, BarChart3, Lock, Info } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const { publicKey, connected } = useWallet();
  const [selectedTier, setSelectedTier] = useState<'conservative' | 'aggressive' | 'life-changing'>('aggressive');
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  // Mock data - in production, fetch from smart contract
  const userBalance = {
    deposited: 5000,
    basedTokens: 10000,
    currentValue: 5750,
    totalEarned: 750,
    apy: 18.5
  };

  if (!connected) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white p-8 md:p-12 rounded-2xl border-2 border-slate-200 text-center">
          <Wallet className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Connect Your Wallet</h1>
          <p className="text-slate-600 mb-8">
            Connect your Solana wallet to access the BASED Protocol dashboard and start investing.
          </p>
          <WalletMultiButton />
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Don't have a wallet?{' '}
              <a href="https://phantom.app" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                Get Phantom
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-2 font-semibold">YOUR DASHBOARD</p>
              <h1 className="text-3xl font-bold text-white mb-2">Investment Overview</h1>
              <p className="text-slate-400 text-sm font-mono">
                {publicKey?.toBase58().slice(0, 4)}...{publicKey?.toBase58().slice(-4)}
              </p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 px-6 py-3 rounded-lg">
              <p className="text-xs text-emerald-400 mb-1">Current APY</p>
              <p className="text-2xl font-bold text-white">{userBalance.apy}%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-slate-600">Total Deposited</p>
                <BarChart3 className="w-5 h-5 text-slate-400" />
              </div>
              <p className="text-2xl font-bold text-slate-900">${userBalance.deposited.toLocaleString()}</p>
              <p className="text-xs text-slate-500 mt-1">USDC</p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-slate-600">Current Value</p>
                <TrendingUp className="w-5 h-5 text-emerald-500" />
              </div>
              <p className="text-2xl font-bold text-slate-900">${userBalance.currentValue.toLocaleString()}</p>
              <p className="text-xs text-emerald-600 mt-1">+{((userBalance.currentValue / userBalance.deposited - 1) * 100).toFixed(1)}%</p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-slate-600">Total Earned</p>
                <ArrowUpRight className="w-5 h-5 text-emerald-500" />
              </div>
              <p className="text-2xl font-bold text-slate-900">${userBalance.totalEarned.toLocaleString()}</p>
              <p className="text-xs text-slate-500 mt-1">All-time</p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-slate-600">$BASED Tokens</p>
                <Lock className="w-5 h-5 text-slate-400" />
              </div>
              <p className="text-2xl font-bold text-slate-900">{userBalance.basedTokens.toLocaleString()}</p>
              <p className="text-xs text-slate-500 mt-1">Locked</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Deposit/Withdraw */}
            <div className="lg:col-span-2 space-y-6">
              {/* Tier Selection */}
              <div className="bg-white p-6 md:p-8 rounded-xl border-2 border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Select Investment Tier</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <button
                    onClick={() => setSelectedTier('conservative')}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedTier === 'conservative'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    <Shield className="w-6 h-6 text-blue-600 mb-2" />
                    <h3 className="font-bold text-slate-900">Conservative</h3>
                    <p className="text-xs text-slate-600 mt-1">10-12% APY</p>
                  </button>

                  <button
                    onClick={() => setSelectedTier('aggressive')}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedTier === 'aggressive'
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-slate-200 hover:border-emerald-300'
                    }`}
                  >
                    <TrendingUp className="w-6 h-6 text-emerald-600 mb-2" />
                    <h3 className="font-bold text-slate-900">Aggressive</h3>
                    <p className="text-xs text-slate-600 mt-1">15-20% APY</p>
                  </button>

                  <button
                    onClick={() => setSelectedTier('life-changing')}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedTier === 'life-changing'
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-slate-200 hover:border-purple-300'
                    }`}
                  >
                    <Zap className="w-6 h-6 text-purple-600 mb-2" />
                    <h3 className="font-bold text-slate-900">Life Changing</h3>
                    <p className="text-xs text-slate-600 mt-1">30-100%+ APY</p>
                  </button>
                </div>

                {/* Tier Info */}
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-slate-600">
                      {selectedTier === 'conservative' && (
                        <p><strong>Conservative:</strong> No $BASED required. 0.1% deposit fee. Stable yields through lending.</p>
                      )}
                      {selectedTier === 'aggressive' && (
                        <p><strong>Aggressive:</strong> Auto-buys 10K $BASED. 0.05% deposit fee, 1% unlock fee. Jito staking + LPs.</p>
                      )}
                      {selectedTier === 'life-changing' && (
                        <p><strong>Life Changing:</strong> Auto-buys 50K $BASED. 0% deposit fee, 2% unlock fee. Leveraged strategies.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Deposit */}
              <div className="bg-white p-6 md:p-8 rounded-xl border-2 border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <ArrowDownLeft className="w-5 h-5 text-emerald-600" />
                  Deposit USDC
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Amount (USDC)</label>
                    <input
                      type="number"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none text-lg font-semibold"
                    />
                  </div>
                  <button className="w-full bg-emerald-600 text-white py-4 rounded-lg font-bold hover:bg-emerald-500 transition-all">
                    Deposit & Start Earning
                  </button>
                </div>
              </div>

              {/* Withdraw */}
              <div className="bg-white p-6 md:p-8 rounded-xl border-2 border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <ArrowUpRight className="w-5 h-5 text-slate-600" />
                  Withdraw Funds
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Amount (USDC)</label>
                    <input
                      type="number"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-400 focus:outline-none text-lg font-semibold"
                    />
                  </div>
                  <button className="w-full bg-slate-800 text-white py-4 rounded-lg font-bold hover:bg-slate-700 transition-all">
                    Withdraw
                  </button>
                  <p className="text-xs text-slate-500 text-center">
                    Early withdrawal may incur auto-unlock fees
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Links */}
              <div className="bg-white p-6 rounded-xl border-2 border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link href="/how-it-works" className="block text-sm text-slate-600 hover:text-emerald-600 transition">
                    → How It Works
                  </Link>
                  <Link href="/tokenomics" className="block text-sm text-slate-600 hover:text-emerald-600 transition">
                    → Tokenomics
                  </Link>
                  <Link href="/faq" className="block text-sm text-slate-600 hover:text-emerald-600 transition">
                    → FAQ
                  </Link>
                  <Link href="/whitepaper" className="block text-sm text-slate-600 hover:text-emerald-600 transition">
                    → Whitepaper
                  </Link>
                </div>
              </div>

              {/* Risk Warning */}
              <div className="bg-amber-50 border-2 border-amber-200 p-6 rounded-xl">
                <h3 className="font-bold text-amber-900 mb-2 text-sm">⚠️ Risk Warning</h3>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Cryptocurrency investments carry risk. Only invest what you can afford to lose. 
                  Past performance does not guarantee future results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
