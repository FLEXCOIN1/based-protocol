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
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-white border-b-2 border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Table of Contents</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              '1. Executive Summary',
              '2. Protocol Overview',
              '3. Investment Tiers',
              '4. Tokenomics',
              '5. Security & Audits',
              '6. Roadmap'
            ].map((item, index) => (
              <div key={item} className="group">
                <div className="flex items-center gap-3 p-4 bg-white border-2 border-slate-200 rounded-xl hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-500 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 group-hover:text-white transition-all" />
                  </div>
                  <span className="font-bold text-slate-700 group-hover:text-emerald-600 transition-all">{item}</span>
                </div>
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

      {/* 4. Tokenomics */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-3 font-semibold">SECTION 4</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tokenomics</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl border-2 border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Supply & Distribution</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600 font-semibold">Total Supply:</span>
                  <span className="text-2xl font-bold text-slate-900">1,000,000,000 $BASED</span>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right font-bold text-emerald-600">80%</div>
                    <div className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-400 h-12 rounded-lg flex items-center px-4 text-white font-semibold">
                      Pump.fun Liquidity Pool
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right font-bold text-blue-600">10%</div>
                    <div className="flex-1 bg-gradient-to-r from-blue-500 to-blue-400 h-12 rounded-lg flex items-center px-4 text-white font-semibold">
                      Protocol Treasury (24mo vest)
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right font-bold text-purple-600">5%</div>
                    <div className="flex-1 bg-gradient-to-r from-purple-500 to-purple-400 h-12 rounded-lg flex items-center px-4 text-white font-semibold">
                      Team (36mo vest)
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right font-bold text-orange-600">5%</div>
                    <div className="flex-1 bg-gradient-to-r from-orange-500 to-orange-400 h-12 rounded-lg flex items-center px-4 text-white font-semibold">
                      Marketing & Partnerships
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Buyback & Burn Mechanism</h3>
              <p className="text-slate-600 mb-6">
                50% of all protocol revenue (deposit fees + exit fees) is used to buy back $BASED tokens from the open market.
              </p>
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-lg border-2 border-emerald-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-white">25%</span>
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Burned Forever</h4>
                    <p className="text-sm text-slate-600">Permanently removed from circulation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-white">25%</span>
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Staking Rewards</h4>
                    <p className="text-sm text-slate-600">Distributed to $BASED stakers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Deflationary Mechanics</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Continuous Buybacks:</strong> Protocol revenue creates constant buy pressure on $BASED
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Permanent Burns:</strong> 25% of bought tokens removed from supply forever
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Staking Incentives:</strong> Holders earn passive income by staking $BASED
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Supply Reduction:</strong> Circulating supply decreases over time as protocol grows
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Security & Audits */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-3 font-semibold">SECTION 5</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Security & Audits</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border-2 border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-emerald-600" />
                Smart Contract Details
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm font-semibold text-slate-600 w-32">Program ID:</span>
                  <code className="bg-slate-100 px-4 py-2 rounded-lg text-sm font-mono text-slate-900 break-all">
                    4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd
                  </code>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-600 w-32">Network:</span>
                  <span className="text-slate-900">Solana Devnet (Mainnet deployment planned)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-600 w-32">Framework:</span>
                  <span className="text-slate-900">Anchor v0.32.1</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-600 w-32">Language:</span>
                  <span className="text-slate-900">Rust</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-xl border-2 border-emerald-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Security Measures</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Anchor Framework:</strong> Industry-standard Solana development framework with built-in security features
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Non-Custodial:</strong> Users maintain control of their funds at all times
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Open Source:</strong> Code available for community review and verification
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>PDA Architecture:</strong> Program Derived Addresses for secure account management
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-2 border-blue-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Audit Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-24 h-24 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-blue-600">Q1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-2">Q1 2025 - Security Audits</h4>
                    <p className="text-sm text-slate-600">
                      Professional smart contract audits scheduled with leading blockchain security firms.
                      Full audit reports will be published before mainnet deployment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-24 h-24 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-emerald-600">Q2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-2">Q2 2025 - Mainnet Launch</h4>
                    <p className="text-sm text-slate-600">
                      Following successful audits and any necessary fixes, protocol will deploy to Solana mainnet
                      with full security guarantees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Roadmap */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-3 font-semibold">SECTION 6</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Roadmap</h2>
          </div>

          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="bg-white p-8 rounded-xl border-2 border-emerald-500 relative">
              <div className="absolute -top-4 left-8 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                PHASE 1 - CURRENT
              </div>
              <div className="mt-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Pump.fun Token Launch</h3>
                <p className="text-sm text-emerald-600 font-semibold mb-4">December 3rd, 2025</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>$BASED token goes live on Pump.fun</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Fair launch with no presale or VCs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Community building and marketing campaign</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Protocol website and documentation launch</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white p-8 rounded-xl border-2 border-slate-300 relative">
              <div className="absolute -top-4 left-8 bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-bold">
                PHASE 2
              </div>
              <div className="mt-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Raydium Graduation</h3>
                <p className="text-sm text-slate-600 font-semibold mb-4">Target: $69K Market Cap</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Graduate from Pump.fun to Raydium DEX</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Enhanced liquidity and trading volume</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>DEX aggregator listings (Jupiter, etc.)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Broader market exposure and accessibility</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white p-8 rounded-xl border-2 border-slate-300 relative">
              <div className="absolute -top-4 left-8 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                PHASE 3
              </div>
              <div className="mt-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Protocol Activation</h3>
                <p className="text-sm text-slate-600 font-semibold mb-4">Q1 2026</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Smart contract audits completed</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Full ETF protocol launches on mainnet</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>USDC deposits and withdrawals enabled</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>All three investment tiers activated</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Buyback & burn mechanism goes live</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-white p-8 rounded-xl border-2 border-slate-300 relative">
              <div className="absolute -top-4 left-8 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                PHASE 4
              </div>
              <div className="mt-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Expansion & Growth</h3>
                <p className="text-sm text-slate-600 font-semibold mb-4">Q2 2026 and Beyond</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Additional investment tiers and strategies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Cross-chain expansion (Ethereum, Arbitrum, etc.)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Governance token and DAO implementation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Additional yield strategies and partnerships</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Mobile app development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-16 px-6 bg-amber-50 border-t-4 border-amber-400">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl border-2 border-amber-200">
            <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
              ⚠️ Legal Disclaimer
            </h3>
            <div className="prose prose-slate max-w-none text-sm text-slate-700 space-y-3">
              <p>
                <strong>This is not financial advice.</strong> The information provided in this whitepaper is for educational
                and informational purposes only and should not be construed as financial, investment, legal, or tax advice.
              </p>
              <p>
                <strong>No Guarantees:</strong> Target APYs mentioned are estimates based on historical DeFi protocol performance
                and are not guarantees of future results. Actual returns may be higher or lower and can fluctuate significantly.
              </p>
              <p>
                <strong>High Risk:</strong> Cryptocurrency and DeFi investments are highly volatile and carry substantial risk.
                You could lose some or all of your invested capital. Market conditions, smart contract bugs, protocol exploits,
                and other unforeseen events can result in total loss.
              </p>
              <p>
                <strong>Only Invest What You Can Afford to Lose:</strong> Never invest money you cannot afford to lose entirely.
                Do your own research (DYOR) and consult with qualified financial advisors before making any investment decisions.
              </p>
              <p>
                <strong>Regulatory Risk:</strong> Cryptocurrency regulations vary by jurisdiction and are subject to change.
                You are responsible for ensuring compliance with laws in your country of residence.
              </p>
              <p className="text-xs text-slate-500 mt-4">
                Last Updated: November 2025 | BASED Protocol | © 2025 All Rights Reserved
              </p>
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
