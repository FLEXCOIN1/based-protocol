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

          <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-xl">
            <div className="text-center mb-10">
              <div className="inline-block bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-4 shadow-lg">
                Protocol Revenue Split
              </div>
              <div className="text-sm text-slate-600 bg-slate-100 inline-block px-4 py-2 rounded-lg">
                Deposit fees (0.5%) + Exit fees (0-50%) = Revenue
              </div>
            </div>

            <div className="space-y-6">
              {/* Main Buyback */}
              <div className="bg-white rounded-xl p-6 border-2 border-emerald-200 shadow-lg">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-emerald-600 to-emerald-500 text-white rounded-2xl flex flex-col items-center justify-center shadow-xl">
                    <span className="text-3xl font-bold">50%</span>
                    <span className="text-xs uppercase tracking-wider">Revenue</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-xl mb-2 flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-emerald-600" />
                      Buyback $BASED
                    </div>
                    <p className="text-sm text-slate-600">Protocol continuously buys $BASED from open market via Jupiter aggregator</p>
                  </div>
                </div>
              </div>

              {/* Flow Arrows */}
              <div className="flex justify-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-1 h-8 bg-gradient-to-b from-emerald-400 to-slate-300"></div>
                  <span className="text-xs text-slate-500 font-semibold">Splits into</span>
                  <div className="w-1 h-8 bg-gradient-to-b from-slate-300 to-orange-400"></div>
                </div>
              </div>

              {/* Sub-allocations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border-2 border-orange-200 shadow-lg">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-500 text-white rounded-2xl flex flex-col items-center justify-center shadow-xl mb-4">
                      <span className="text-2xl font-bold">25%</span>
                      <span className="text-xs uppercase tracking-wider">Burned</span>
                    </div>
                    <div className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Flame className="w-5 h-5 text-orange-600" />
                      Burn Forever
                    </div>
                    <p className="text-sm text-slate-600">Sent to null address, permanently reducing circulating supply</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border-2 border-purple-200 shadow-lg">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-500 text-white rounded-2xl flex flex-col items-center justify-center shadow-xl mb-4">
                      <span className="text-2xl font-bold">25%</span>
                      <span className="text-xs uppercase tracking-wider">Stakers</span>
                    </div>
                    <div className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Gift className="w-5 h-5 text-purple-600" />
                      Distribute to Stakers
                    </div>
                    <p className="text-sm text-slate-600">Rewards distributed to $BASED holders who stake their tokens</p>
                  </div>
                </div>
              </div>

              {/* Net Effect */}
              <div className="bg-gradient-to-r from-emerald-100 to-blue-100 rounded-xl p-6 border-2 border-emerald-300">
                <div className="text-center">
                  <h4 className="font-bold text-lg text-slate-900 mb-2">Net Effect: Deflationary Pressure</h4>
                  <p className="text-sm text-slate-700">
                    Continuous buyback + permanent burns = decreasing supply while demand increases
                  </p>
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
