'use client';

import Link from 'next/link';
import { TrendingUp, Flame, Gift, Lock, BarChart3, Calendar } from 'lucide-react';

export default function Tokenomics() {
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
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-4 font-semibold">TOKEN ECONOMICS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">$BASED Tokenomics</h1>
          <p className="text-lg md:text-xl text-slate-600">Deflationary utility token with integrated buyback & burn mechanism</p>
        </div>
      </section>

      {/* Token Stats */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-3 font-semibold">TOKEN OVERVIEW</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Statistics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-xl p-8 text-center border-2 border-slate-200 hover:border-emerald-500 transition-all">
              <BarChart3 className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <div className="text-sm text-slate-600 mb-2 font-semibold">Total Supply</div>
              <div className="text-3xl font-bold text-slate-900">1,000,000,000</div>
              <div className="text-sm text-slate-500 mt-1">1 Billion $BASED</div>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 text-center border-2 border-slate-200 hover:border-emerald-500 transition-all">
              <Calendar className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <div className="text-sm text-slate-600 mb-2 font-semibold">Launch Date</div>
              <div className="text-3xl font-bold text-slate-900">Dec 3, 2025</div>
              <div className="text-sm text-slate-500 mt-1">Pump.fun Launch</div>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 text-center border-2 border-slate-200 hover:border-emerald-500 transition-all">
              <Lock className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <div className="text-sm text-slate-600 mb-2 font-semibold">Chain</div>
              <div className="text-3xl font-bold text-slate-900">Solana</div>
              <div className="text-sm text-slate-500 mt-1">SPL Token Standard</div>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-3 font-semibold">ALLOCATION</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Token Distribution</h2>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-20 md:w-32 text-right font-bold text-slate-900 text-lg">80%</div>
              <div className="flex-1 h-16 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-lg flex items-center px-6 text-white font-semibold shadow-lg">
                Pump.fun Liquidity Pool
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 md:w-32 text-right font-bold text-slate-900 text-lg">10%</div>
              <div className="flex-1 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center px-6 text-white font-semibold shadow-lg">
                Protocol Treasury (24mo vest)
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 md:w-32 text-right font-bold text-slate-900 text-lg">5%</div>
              <div className="flex-1 h-16 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg flex items-center px-6 text-white font-semibold shadow-lg">
                Team (36mo vest)
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 md:w-32 text-right font-bold text-slate-900 text-lg">5%</div>
              <div className="flex-1 h-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg flex items-center px-6 text-white font-semibold shadow-lg">
                Marketing & Partnerships
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deflationary Mechanism */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-3 font-semibold">VALUE ACCRUAL</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Deflationary Mechanism</h2>
            <p className="text-lg text-slate-600">How protocol revenue creates sustainable token value</p>
          </div>

          <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="text-xl font-bold text-slate-900 mb-3">Protocol Revenue Split</div>
              <div className="text-sm text-slate-600">Deposit fees (0.5%) + Exit fees (0-50%) = Revenue</div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-emerald-600 to-emerald-500 text-white rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg">
                  50%
                </div>
                <div className="flex-1">
                  <div className="font-bold text-lg mb-2 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                    Buyback $BASED
                  </div>
                  <p className="text-sm text-slate-600">Protocol buys $BASED from open market via Jupiter</p>
                </div>
              </div>

              <div className="ml-8 md:ml-12 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-500 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
                    25%
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Flame className="w-5 h-5 text-orange-600" />
                      Burn Forever
                    </div>
                    <p className="text-sm text-slate-600">Sent to dead address, removed from supply permanently</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
                    25%
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Gift className="w-5 h-5 text-purple-600" />
                      Distribute to Stakers
                    </div>
                    <p className="text-sm text-slate-600">Rewards for $BASED holders who stake their tokens</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">$BASED Token Launches December 3rd</h2>
          <p className="text-lg text-slate-300 mb-8">Join the community and be ready for launch day</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-400 transition-all">
              Go to Dashboard
            </Link>
            <Link href="/whitepaper" className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all">
              Read Whitepaper
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
