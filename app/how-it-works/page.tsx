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

          {/* Visual Flow Diagram */}
          <div className="relative mb-16">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-emerald-300 to-emerald-200 -translate-y-1/2 z-0"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="group">
                <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-emerald-500 transition-all shadow-lg hover:shadow-xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Wallet className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 shadow-md">
                      1
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">You Deposit USDC</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Connect wallet and deposit USDC into your chosen tier
                    </p>
                  </div>
                </div>
                {/* Arrow for mobile */}
                <div className="md:hidden flex justify-center my-4">
                  <ChevronRight className="w-8 h-8 text-emerald-500 rotate-90" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="group">
                <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-emerald-500 transition-all shadow-lg hover:shadow-xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <RefreshCw className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 shadow-md">
                      2
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Auto-Buy $BASED</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Protocol purchases required $BASED tokens automatically
                    </p>
                  </div>
                </div>
                {/* Arrow for mobile */}
                <div className="md:hidden flex justify-center my-4">
                  <ChevronRight className="w-8 h-8 text-emerald-500 rotate-90" />
                </div>
              </div>

              {/* Step 3 */}
              <div className="group">
                <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-emerald-500 transition-all shadow-lg hover:shadow-xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 shadow-md">
                      3
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Deploy to Strategies</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Funds allocated across Kamino, Jito, and Meteora protocols
                    </p>
                  </div>
                </div>
                {/* Arrow for mobile */}
                <div className="md:hidden flex justify-center my-4">
                  <ChevronRight className="w-8 h-8 text-emerald-500 rotate-90" />
                </div>
              </div>

              {/* Step 4 */}
              <div className="group">
                <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-emerald-500 transition-all shadow-lg hover:shadow-xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 shadow-md">
                      4
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Earn & Compound</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Yields compound automatically with flexible withdrawals
                    </p>
                  </div>
                </div>
              </div>
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
