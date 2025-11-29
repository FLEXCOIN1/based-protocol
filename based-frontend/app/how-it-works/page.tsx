'use client';

import Link from 'next/link';
import { ArrowRight, Shield, TrendingUp, Wallet, Zap, Lock, RefreshCw, BarChart3, ChevronRight } from 'lucide-react';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-slate-100 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-4 font-semibold">PROTOCOL OVERVIEW</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How BASED Protocol Works
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            A comprehensive guide to understanding our institutional-grade DeFi fund structure,
            automatic token buyback mechanism, and tier-based investment strategies.
          </p>
        </div>
      </section>

      {/* Core Mechanism */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-3 font-semibold">CORE MECHANISM</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Investment Flow</h2>
            <p className="text-lg text-slate-600">From deposit to yield generation in 4 automatic steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Step 1 */}
            <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-200 hover:border-emerald-500 transition-all relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <Wallet className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">You Deposit USDC</h3>
              <p className="text-slate-600 leading-relaxed">
                Connect your wallet and deposit USDC into your chosen investment tier. Your funds are immediately secured
                in our audited smart contracts on Solana.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-200 hover:border-emerald-500 transition-all relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <RefreshCw className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Auto-Buy $BASED Tokens</h3>
              <p className="text-slate-600 leading-relaxed">
                The protocol automatically uses a portion of your deposit to purchase the required amount of $BASED tokens
                (if applicable to your tier). These tokens are locked to your position.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-200 hover:border-emerald-500 transition-all relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <TrendingUp className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Funds Deploy to Strategies</h3>
              <p className="text-slate-600 leading-relaxed">
                Remaining USDC is allocated across curated yield strategies: Kamino lending, Jito staking,
                Meteora liquidity pools, and other institutional-grade protocols.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-200 hover:border-emerald-500 transition-all relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center text-white font-bold text-sm">
                4
              </div>
              <BarChart3 className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Earn & Compound Yield</h3>
              <p className="text-slate-600 leading-relaxed">
                Your investment generates yield according to your tier's strategy. Yields compound automatically,
                and you can withdraw anytime (subject to tier-specific unlock fees).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Earning?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Choose your investment tier and start generating yield with institutional-grade DeFi strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-400 transition-all inline-flex items-center justify-center gap-2">
              Go to Dashboard
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/tokenomics" className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all">
              View Tokenomics
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
