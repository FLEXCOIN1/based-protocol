'use client';

import Link from 'next/link';
import { Shield, TrendingUp, Zap, Wallet, BarChart3 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-slate-100 py-24 md:py-32 px-6 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        {/* Corner Brackets - Positioned to not overlap */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-emerald-500 opacity-30 pointer-events-none"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-emerald-500 opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-emerald-500 opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-emerald-500 opacity-30 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Logo with USCR styling */}
          <div className="relative inline-block mb-8">
            {/* Logo corner brackets */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-emerald-500"></div>
            <div className="absolute -top-3 -right-3 w-6 h-6 border-r-2 border-t-2 border-emerald-500"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l-2 border-b-2 border-emerald-500"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-emerald-500"></div>

            <div className="w-32 h-32 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-emerald-500">
              <span className="text-6xl font-bold text-emerald-400">B</span>
            </div>
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-6 font-semibold">
            BASED PROTOCOL
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Professional DeFi Fund<br/>for the Digital Age
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Institutional-grade cryptocurrency fund management. Deposit USDC, receive diversified exposure,
            and benefit from automatic buyback mechanisms.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-8">
            <Link href="/dashboard" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 transition-all shadow-lg inline-flex items-center justify-center gap-3">
              <Wallet className="w-5 h-5" />
              Start Investing
            </Link>
            <Link href="/how-it-works" className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold border-2 border-slate-300 hover:border-emerald-500 transition-all">
              How It Works
            </Link>
            <Link href="/tokenomics" className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold border-2 border-slate-300 hover:border-emerald-500 transition-all">
              View Tokenomics
            </Link>
          </div>

          <p className="text-xs text-slate-400 font-mono">v1.0.0 • 2025</p>
        </div>
      </section>

      {/* How to Invest */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-3 font-semibold">GETTING STARTED</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How to Invest</h2>
            <p className="text-lg md:text-xl text-slate-600">Get started with BASED Protocol in 4 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Step 1 */}
            <div className="bg-slate-50 p-6 md:p-8 rounded-xl border-2 border-slate-200 hover:border-emerald-500 transition-all text-center relative group">
              <div className="absolute top-3 right-3 w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Connect Wallet</h3>
              <p className="text-sm text-slate-600">Connect a Phantom wallet to get started</p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 p-6 md:p-8 rounded-xl border-2 border-slate-200 hover:border-emerald-500 transition-all text-center relative group">
              <div className="absolute top-3 right-3 w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Deposit USDC</h3>
              <p className="text-sm text-slate-600">Deposit USDC into your chosen tier</p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 p-6 md:p-8 rounded-xl border-2 border-slate-200 hover:border-emerald-500 transition-all text-center relative group">
              <div className="absolute top-3 right-3 w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Hold $BASED</h3>
              <p className="text-sm text-slate-600">Protocol auto-buys required tokens</p>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-50 p-6 md:p-8 rounded-xl border-2 border-slate-200 hover:border-emerald-500 transition-all text-center relative group">
              <div className="absolute top-3 right-3 w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center text-white font-bold text-sm">
                4
              </div>
              <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Watch Growth</h3>
              <p className="text-sm text-slate-600">Track your portfolio and earn yield</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Tiers */}
      <section className="py-20 md:py-28 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-3 font-semibold">CHOOSE YOUR STRATEGY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Investment Tiers</h2>
            <p className="text-lg md:text-xl text-slate-600">Three strategies for different risk profiles</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {/* Conservative */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border-2 border-slate-300 hover:border-blue-500 hover:shadow-xl transition-all relative group">
              {/* USCR corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">Conservative</h3>
                  <p className="text-sm text-slate-500">Low Risk</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-sm text-slate-600">Target APY</span>
                  <span className="font-bold text-slate-900">10-12%</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-sm text-slate-600">Deposit Fee</span>
                  <span className="font-bold text-slate-900">0.1%</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-sm text-slate-600">$BASED Required</span>
                  <span className="font-bold text-emerald-600">None</span>
                </div>
              </div>

              <ul className="space-y-2 mb-8 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 flex-shrink-0">✓</span> USDC lending on Kamino
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 flex-shrink-0">✓</span> Stable liquidity pools
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 flex-shrink-0">✓</span> Low volatility strategies
                </li>
              </ul>

              <Link href="/dashboard?tier=conservative" className="block w-full bg-slate-100 text-slate-900 py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all text-center">
                Select Conservative
              </Link>
            </div>

            {/* Aggressive - Featured */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 md:p-10 rounded-2xl text-white relative shadow-2xl border-2 border-emerald-500">
              {/* USCR corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-white opacity-50"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-white opacity-50"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-white opacity-50"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-white opacity-50"></div>

              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-emerald-600 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                MOST POPULAR
              </div>

              <div className="flex items-center gap-4 mb-6 mt-2">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">Aggressive</h3>
                  <p className="text-sm text-emerald-100">Medium Risk</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between py-2 border-b border-emerald-500/50">
                  <span className="text-sm text-emerald-100">Target APY</span>
                  <span className="font-bold">15-20%</span>
                </div>
                <div className="flex justify-between py-2 border-b border-emerald-500/50">
                  <span className="text-sm text-emerald-100">Deposit Fee</span>
                  <span className="font-bold">0.05%</span>
                </div>
                <div className="flex justify-between py-2 border-b border-emerald-500/50">
                  <span className="text-sm text-emerald-100">$BASED Required</span>
                  <span className="font-bold text-white">10,000</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-sm text-emerald-100">Auto-Unlock Fee</span>
                  <span className="font-bold">1%</span>
                </div>
              </div>

              <ul className="space-y-2 mb-8 text-sm text-emerald-50">
                <li className="flex items-center gap-2">
                  <span className="text-white flex-shrink-0">✓</span> Jito staking (6-8% APY)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white flex-shrink-0">✓</span> Meteora liquidity pools
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white flex-shrink-0">✓</span> Auto-buys 10K $BASED
                </li>
              </ul>

              <Link href="/dashboard?tier=aggressive" className="block w-full bg-white text-emerald-600 py-3 md:py-4 rounded-lg font-bold hover:bg-emerald-50 transition-all text-center">
                Select Aggressive
              </Link>
            </div>

            {/* Life Changing */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border-2 border-slate-300 hover:border-purple-500 hover:shadow-xl transition-all relative group">
              {/* USCR corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">Life Changing</h3>
                  <p className="text-sm text-slate-500">High Risk</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-sm text-slate-600">Target APY</span>
                  <span className="font-bold text-slate-900">30-100%+</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-sm text-slate-600">Deposit Fee</span>
                  <span className="font-bold text-emerald-600">0%</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-sm text-slate-600">$BASED Required</span>
                  <span className="font-bold text-purple-600">50,000</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-sm text-slate-600">Auto-Unlock Fee</span>
                  <span className="font-bold text-slate-900">2%</span>
                </div>
              </div>

              <ul className="space-y-2 mb-8 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 flex-shrink-0">✓</span> Leveraged yield farming
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 flex-shrink-0">✓</span> Advanced DeFi strategies
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 flex-shrink-0">✓</span> Auto-buys 50K $BASED
                </li>
              </ul>

              <Link href="/dashboard?tier=life-changing" className="block w-full bg-slate-100 text-slate-900 py-3 md:py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all text-center">
                Select Life Changing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Swap Section */}
      <section className="py-20 md:py-28 px-6 bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 border-2 border-slate-700 relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>

            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-3 font-semibold">TRADE $BASED</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Swap $BASED with Jupiter</h2>
              <p className="text-slate-400 mb-8 md:mb-10 text-base md:text-lg max-w-2xl">
                Execute best-price swaps across Solana liquidity. Jupiter handles routing, settlement, and deep liquidity for every trade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard" className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-400 transition-all text-center">
                  Swap on Jupiter
                </Link>
                <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all text-center">
                  View on Dexscreener
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 md:p-8 border-2 border-slate-200 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all group">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Swap $BASED</h3>
              <p className="text-sm md:text-base text-slate-600 mb-4">Route directly into $BASED with best-of-Jupiter pricing.</p>
              <Link href="/dashboard" className="text-emerald-600 font-semibold hover:text-emerald-700 group-hover:underline inline-flex items-center gap-1">
                Launch swap <span>→</span>
              </Link>
            </div>

            <div className="p-6 md:p-8 border-2 border-slate-200 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all group">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Fund Transparency</h3>
              <p className="text-sm md:text-base text-slate-600 mb-4">Review the underlying fund holdings and historical performance.</p>
              <Link href="/dashboard" className="text-emerald-600 font-semibold hover:text-emerald-700 group-hover:underline inline-flex items-center gap-1">
                Explore data <span>→</span>
              </Link>
            </div>

            <div className="p-6 md:p-8 border-2 border-slate-200 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all group">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Solana Native</h3>
              <p className="text-sm md:text-base text-slate-600 mb-4">Every strategy is Solana-native and chosen for long-term performance.</p>
              <p className="text-emerald-600 font-semibold">Institutional-grade selection</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
