'use client';

import Link from 'next/link';
import { FileText, Download, Shield, TrendingUp, Lock, Zap, CheckCircle2 } from 'lucide-react';

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-white to-slate-100 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FileText className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-4 font-semibold">TECHNICAL DOCUMENTATION</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            BASED Protocol Whitepaper
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            A comprehensive guide to the institutional-grade DeFi fund with automatic token buyback mechanisms
          </p>
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-500 transition-all inline-flex items-center gap-3">
            <Download className="w-5 h-5" />
            Download PDF
          </button>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 px-6 bg-white border-b-2 border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              '1. Executive Summary',
              '2. Protocol Overview',
              '3. Investment Tiers',
              '4. Tokenomics',
              '5. Security & Audits',
              '6. Roadmap'
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition cursor-pointer">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Executive Summary */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-3 font-semibold">SECTION 1</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Executive Summary</h2>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              BASED Protocol is an institutional-grade DeFi fund built on Solana, offering tiered investment strategies
              ranging from conservative (10-12% APY) to aggressive (30-100%+ APY). The protocol combines traditional fund
              management principles with innovative tokenomics to create sustainable value for both investors and token holders.
            </p>

            <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-8 mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Multi-Tier Strategy:</strong> Three risk profiles (Conservative, Aggressive, Life Changing) to suit different investor preferences
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Auto-Buyback Mechanism:</strong> Protocol automatically purchases $BASED tokens with investor deposits, creating constant buy pressure
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Institutional Strategies:</strong> Deployed across Kamino, Jito, Meteora, and other audited Solana protocols
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Deflationary Token:</strong> 50% of protocol revenue used for buyback, with 25% burned and 25% distributed to stakers
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-slate-600 leading-relaxed">
              The protocol solves a critical problem in DeFi: how to provide professional fund management while creating
              sustainable token value. By requiring higher tiers to hold $BASED tokens and implementing a revenue-based
              buyback-and-burn mechanism, BASED creates aligned incentives between fund performance and token price.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Protocol Overview */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-3 font-semibold">SECTION 2</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Protocol Overview</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl border-2 border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">How It Works</h3>
              <ol className="space-y-4 list-decimal list-inside text-slate-600">
                <li className="leading-relaxed">
                  <strong>User Deposits USDC:</strong> Investor connects wallet and deposits USDC into chosen tier
                </li>
                <li className="leading-relaxed">
                  <strong>Auto-Buy $BASED (if applicable):</strong> Protocol purchases required amount of $BASED from market and locks to position
                </li>
                <li className="leading-relaxed">
                  <strong>Deploy to Strategies:</strong> Remaining USDC allocated across curated yield strategies
                </li>
                <li className="leading-relaxed">
                  <strong>Compound & Earn:</strong> Yields accrue automatically, withdrawable anytime with tier-specific fees
                </li>
              </ol>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Yield Sources</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span><strong>Kamino Finance:</strong> USDC lending (6-9% APY)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span><strong>Jito Staking:</strong> SOL liquid staking (6-8% APY)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span><strong>Meteora:</strong> Liquidity pools and dynamic vaults (10-30% APY)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span><strong>Advanced Strategies:</strong> Leveraged farming, options, perpetuals (varies)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Investment Tiers */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-3 font-semibold">SECTION 3</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Investment Tiers</h2>
          </div>

          <div className="space-y-6">
            <div className="border-2 border-blue-200 bg-blue-50/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Conservative</h3>
              <p className="text-sm text-slate-600 mb-4">Target APY: 10-12% | Risk: Low</p>
              <p className="text-slate-600 mb-4">
                Designed for capital preservation with stable yields through USDC lending and low-volatility liquidity pools.
                No $BASED requirement makes this the entry-level tier.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><strong>Deposit Fee:</strong> 0.1%</div>
                <div><strong>$BASED Required:</strong> None</div>
              </div>
            </div>

            <div className="border-2 border-emerald-200 bg-emerald-50/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Aggressive</h3>
              <p className="text-sm text-slate-600 mb-4">Target APY: 15-20% | Risk: Medium</p>
              <p className="text-slate-600 mb-4">
                Balanced risk-reward combining Jito staking, Meteora LPs, and protocol yields. Auto-purchases 10,000 $BASED tokens.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><strong>Deposit Fee:</strong> 0.05%</div>
                <div><strong>$BASED Required:</strong> 10,000 (auto-buy)</div>
              </div>
            </div>

            <div className="border-2 border-purple-200 bg-purple-50/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Life Changing</h3>
              <p className="text-sm text-slate-600 mb-4">Target APY: 30-100%+ | Risk: High</p>
              <p className="text-slate-600 mb-4">
                Maximum yield potential through leveraged strategies and advanced DeFi protocols. Auto-purchases 50,000 $BASED tokens.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><strong>Deposit Fee:</strong> 0%</div>
                <div><strong>$BASED Required:</strong> 50,000 (auto-buy)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Connect your wallet and start earning institutional-grade yields on Solana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-400 transition-all">
              Go to Dashboard
            </Link>
            <Link href="/how-it-works" className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all">
              How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
