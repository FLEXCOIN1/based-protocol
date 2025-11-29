'use client';

import Link from 'next/link';
import { Shield, TrendingUp, Zap, Wallet, BarChart3, Lock } from 'lucide-react';

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

          {/* Launch Banner */}
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg mb-8 inline-block">
            <p className="text-sm font-bold">🚀 TOKEN LAUNCHES DECEMBER 3RD, 2025 ON PUMP.FUN</p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-8">
            <a
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 transition-all shadow-lg inline-flex items-center justify-center gap-3"
            >
              <TrendingUp className="w-5 h-5" />
              Buy $BASED on Pump.fun
            </a>
            <Link href="/dashboard" className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold border-2 border-slate-300 hover:border-emerald-500 transition-all inline-flex items-center justify-center gap-3">
              <Wallet className="w-5 h-5" />
              View Dashboard
            </Link>
            <Link href="/how-it-works" className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold border-2 border-slate-300 hover:border-emerald-500 transition-all">
              How It Works
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

      {/* Launch Roadmap */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-3 font-semibold">LAUNCH ROADMAP</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Path to Full Protocol</h2>
            <p className="text-lg md:text-xl text-slate-600">Three-phase launch strategy for maximum value</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-xl border-2 border-emerald-500 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  PHASE 1
                </div>
                <div className="mt-4 mb-6">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 text-center">Pump.fun Launch</h3>
                  <p className="text-sm text-emerald-700 text-center mt-2 font-semibold">December 3rd, 2025</p>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 flex-shrink-0">✓</span> $BASED token goes live
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 flex-shrink-0">✓</span> Fair launch on Pump.fun
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 flex-shrink-0">✓</span> Community building begins
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 flex-shrink-0">✓</span> Marketing campaign starts
                  </li>
                </ul>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-emerald-300"></div>
            </div>

            {/* Phase 2 */}
            <div className="relative">
              <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-300 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-bold">
                  PHASE 2
                </div>
                <div className="mt-4 mb-6">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 text-center">Raydium Graduation</h3>
                  <p className="text-sm text-slate-600 text-center mt-2 font-semibold">Target: $69K Market Cap</p>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 flex-shrink-0">✓</span> Graduate to Raydium DEX
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 flex-shrink-0">✓</span> Enhanced liquidity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 flex-shrink-0">✓</span> DEX listing achieved
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 flex-shrink-0">✓</span> Broader market access
                  </li>
                </ul>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-300"></div>
            </div>

            {/* Phase 3 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border-2 border-purple-500 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  PHASE 3
                </div>
                <div className="mt-4 mb-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 text-center">Protocol Activation</h3>
                  <p className="text-sm text-purple-700 text-center mt-2 font-semibold">Q1 2026</p>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 flex-shrink-0">✓</span> Full ETF protocol launch
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 flex-shrink-0">✓</span> Deposits enabled
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 flex-shrink-0">✓</span> Yield strategies active
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 flex-shrink-0">✓</span> Buyback mechanism live
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-amber-50 border-2 border-amber-200 p-6 rounded-xl max-w-3xl mx-auto">
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Current Status:</strong> We are in Phase 1 preparation. Token launches December 3rd on Pump.fun.
                Full protocol features (deposits/withdrawals) will be available after Raydium graduation.
              </p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Buy $BASED on Pump.fun</h2>
              <p className="text-slate-400 mb-8 md:mb-10 text-base md:text-lg max-w-2xl">
                Join the fair launch on Pump.fun. After hitting $69K market cap, we'll graduate to Raydium for enhanced liquidity and full protocol features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://pump.fun" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-400 transition-all text-center">
                  Buy on Pump.fun
                </a>
                <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all text-center">
                  View on Dexscreener
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Statistics Bar */}
      <section className="py-16 md:py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 border-y border-slate-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$0.00M</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Total Value Locked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">0</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Active Investors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10-100%</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Target APY Range</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">Dec 3</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Token Launch 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust Indicators */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-3 font-semibold">SECURITY FIRST</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Built for Institutional Standards</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-200 text-center group hover:border-emerald-500 transition-all">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Smart Contract Audited</h3>
              <p className="text-sm text-slate-600">Code reviewed by leading blockchain security firms</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-200 text-center group hover:border-emerald-500 transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Non-Custodial</h3>
              <p className="text-sm text-slate-600">You maintain full control of your assets at all times</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-200 text-center group hover:border-emerald-500 transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Transparent Reporting</h3>
              <p className="text-sm text-slate-600">Real-time on-chain data and performance metrics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-3 font-semibold">WHY CHOOSE BASED</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Professional DeFi Made Simple</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 border-2 border-slate-200 rounded-xl hover:border-emerald-500 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Automated Strategies</h3>
              <p className="text-sm md:text-base text-slate-600">Set and forget. Our protocol automatically deploys capital across the best Solana yield opportunities.</p>
            </div>

            <div className="bg-white p-6 md:p-8 border-2 border-slate-200 rounded-xl hover:border-emerald-500 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Risk Management</h3>
              <p className="text-sm md:text-base text-slate-600">Choose from three risk tiers designed to match your investment goals and risk tolerance.</p>
            </div>

            <div className="bg-white p-6 md:p-8 border-2 border-slate-200 rounded-xl hover:border-emerald-500 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Token Buyback</h3>
              <p className="text-sm md:text-base text-slate-600">Protocol revenue automatically purchases $BASED tokens, creating sustainable value for holders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center mb-4 border-2 border-emerald-500">
                <span className="text-2xl font-bold text-emerald-400">B</span>
              </div>
              <p className="text-sm text-slate-400 mb-4">Institutional-grade DeFi fund on Solana</p>
              <p className="text-xs text-slate-500">© 2025 BASED Protocol</p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/dashboard" className="hover:text-emerald-400 transition">Dashboard</Link></li>
                <li><Link href="/how-it-works" className="hover:text-emerald-400 transition">How It Works</Link></li>
                <li><Link href="/tokenomics" className="hover:text-emerald-400 transition">Tokenomics</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/whitepaper" className="hover:text-emerald-400 transition">Whitepaper</Link></li>
                <li><Link href="/faq" className="hover:text-emerald-400 transition">FAQ</Link></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">GitHub</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Community</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">Twitter</a></li>
                <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">Discord</a></li>
                <li><a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">Telegram</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-slate-500">
                BASED Protocol is a decentralized finance application. Cryptocurrency investments carry risk.
              </p>
              <div className="flex gap-6 text-xs">
                <a href="#" className="text-slate-500 hover:text-emerald-400 transition">Terms</a>
                <a href="#" className="text-slate-500 hover:text-emerald-400 transition">Privacy</a>
                <a href="#" className="text-slate-500 hover:text-emerald-400 transition">Disclaimer</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
