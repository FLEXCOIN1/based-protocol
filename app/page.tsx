'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, TrendingUp, Zap, LineChart, Users, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>Launching December 3rd, 2025</span>
            </div>
            
            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Professional DeFi Fund
              <br />
              <span className="text-emerald-600">Powered by $BASED</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Institutional-grade cryptocurrency fund with automatic tier unlocking.
              <br />
              Deposit USDC, unlock premium strategies automatically.
            </p>
            
            <div className="flex gap-4 justify-center">
              <Link 
                href="/dashboard"
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center gap-2 text-lg"
              >
                Launch App
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/how-it-works"
                className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold border-2 border-slate-200 hover:border-slate-300 transition-colors text-lg"
              >
                How It Works
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-3xl font-bold text-slate-900 mb-2">15-20%</div>
              <div className="text-slate-600">Target APY Range</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-3xl font-bold text-slate-900 mb-2">3 Tiers</div>
              <div className="text-slate-600">Risk-Adjusted Strategies</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-3xl font-bold text-slate-900 mb-2">$BASED</div>
              <div className="text-slate-600">Deflationary Utility Token</div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Tiers */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Strategy</h2>
            <p className="text-xl text-slate-600">Three tiers designed for different risk appetites</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Conservative */}
            <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-emerald-500 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Conservative</h3>
                  <p className="text-slate-600">Low Risk</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Target APY</span>
                  <span className="font-semibold text-slate-900">10-12%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Deposit Fee</span>
                  <span className="font-semibold text-slate-900">0.1%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">$BASED Required</span>
                  <span className="font-semibold text-emerald-600">None</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-slate-700">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>USDC lending on Kamino</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>Stable liquidity pools</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>Low volatility strategies</span>
                </li>
              </ul>

              <Link 
                href="/dashboard?tier=conservative"
                className="w-full bg-slate-100 text-slate-900 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors block text-center"
              >
                Select Conservative
              </Link>
            </div>

            {/* Aggressive */}
            <div className="bg-white p-8 rounded-2xl border-2 border-emerald-500 hover:border-emerald-600 transition-all relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Aggressive</h3>
                  <p className="text-slate-600">Medium Risk</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Target APY</span>
                  <span className="font-semibold text-slate-900">15-20%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Deposit Fee</span>
                  <span className="font-semibold text-slate-900">0.05%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">$BASED Required</span>
                  <span className="font-semibold text-emerald-600">10,000</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-600">Auto-Unlock Fee</span>
                  <span className="font-semibold text-slate-900">1%</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-slate-700">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>Jito staking (6-8% APY)</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>Meteora liquidity pools</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>Protocol automatically buys 10K $BASED for you</span>
                </li>
              </ul>

              <Link 
                href="/dashboard?tier=aggressive"
                className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors block text-center"
              >
                Select Aggressive
              </Link>
            </div>

            {/* Life Changing */}
            <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-purple-500 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Life Changing</h3>
                  <p className="text-slate-600">High Risk</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Target APY</span>
                  <span className="font-semibold text-slate-900">30-100%+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Deposit Fee</span>
                  <span className="font-semibold text-emerald-600">0%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">$BASED Required</span>
                  <span className="font-semibold text-emerald-600">50,000</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-600">Auto-Unlock Fee</span>
                  <span className="font-semibold text-slate-900">2%</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-slate-700">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>Leveraged yield farming</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>Advanced DeFi strategies</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>Protocol automatically buys 50K $BASED for you</span>
                </li>
              </ul>

              <Link 
                href="/dashboard?tier=life-changing"
                className="w-full bg-slate-100 text-slate-900 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors block text-center"
              >
                Select Life Changing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How $BASED Creates Value */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How $BASED Creates Value</h2>
            <p className="text-xl text-slate-600">Real utility, real revenue, real deflation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Users Deposit USDC</h3>
                    <p className="text-slate-600">Protocol collects fees on every deposit (0.05%-0.1%) plus one-time unlock fees (1%-2%) for premium tiers.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Protocol Generates Revenue</h3>
                    <p className="text-slate-600">Collected fees are automatically split: 50% used to buy $BASED from the open market via Jupiter DEX aggregator.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Automatic Buyback & Burn</h3>
                    <p className="text-slate-600">Of the $BASED purchased, 50% is permanently burned (reducing supply), 50% distributed to stakers as rewards.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Value Accrues to Holders</h3>
                    <p className="text-slate-600">As fund grows, more fees → more buybacks → more burns → decreasing supply + increasing demand = price appreciation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Revenue Distribution</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700">Buyback $BASED</span>
                    <span className="font-semibold text-slate-900">50%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div className="bg-emerald-600 h-3 rounded-full" style={{width: '50%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700">Burn Forever 🔥</span>
                    <span className="font-semibold text-slate-900">25%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div className="bg-orange-500 h-3 rounded-full" style={{width: '25%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700">Staker Rewards</span>
                    <span className="font-semibold text-slate-900">25%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{width: '25%'}}></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white rounded-lg border border-slate-200">
                <p className="text-sm text-slate-600">
                  <strong className="text-slate-900">Example:</strong> $10,000 in fees collected
                  <br />→ $5,000 buys $BASED
                  <br />→ $2,500 burned permanently
                  <br />→ $2,500 to stakers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Projections */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Growth Projections</h2>
            <p className="text-xl text-slate-600">Based on user adoption and market conditions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="text-slate-600 mb-2">Year 1 Target</div>
              <div className="text-4xl font-bold text-slate-900 mb-4">$5M</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Users:</span>
                  <span className="font-semibold text-slate-900">500-1,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Avg Deposit:</span>
                  <span className="font-semibold text-slate-900">$5,000-10,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Annual Fees:</span>
                  <span className="font-semibold text-emerald-600">$50K-100K</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-emerald-500">
              <div className="text-slate-600 mb-2">Year 2 Target</div>
              <div className="text-4xl font-bold text-slate-900 mb-4">$25M</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Users:</span>
                  <span className="font-semibold text-slate-900">2,000-5,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Avg Deposit:</span>
                  <span className="font-semibold text-slate-900">$5,000-15,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Annual Fees:</span>
                  <span className="font-semibold text-emerald-600">$250K-500K</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="text-slate-600 mb-2">Year 3 Target</div>
              <div className="text-4xl font-bold text-slate-900 mb-4">$100M</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Users:</span>
                  <span className="font-semibold text-slate-900">5,000-10,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Avg Deposit:</span>
                  <span className="font-semibold text-slate-900">$10,000-20,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Annual Fees:</span>
                  <span className="font-semibold text-emerald-600">$1M-2M</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Why These Projections Are Achievable</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span className="text-slate-700">Institutional-grade infrastructure on Solana</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span className="text-slate-700">Automatic tier unlocking reduces friction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span className="text-slate-700">Competitive yields with professional risk management</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span className="text-slate-700">Deflationary token with real utility and buybacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span className="text-slate-700">Growing Solana DeFi ecosystem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span className="text-slate-700">Clear value proposition for retail and institutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start?</h2>
          <p className="text-xl text-emerald-50 mb-10">
            Join the waitlist for December 3rd launch. Early supporters get exclusive benefits.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/dashboard"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors inline-flex items-center gap-2 text-lg"
            >
              Launch App
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/tokenomics"
              className="bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-800 transition-colors text-lg border-2 border-emerald-500"
            >
              View Tokenomics
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <div className="bg-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-slate-500 text-center">
            Risk Warning: Cryptocurrency investments carry significant risk. Past performance does not guarantee future results. 
            APY targets are projections and not guarantees. Only invest what you can afford to lose. This is not financial advice.
          </p>
        </div>
      </div>
    </div>
  );
}
