'use client';

import Link from 'next/link';
import WalletButton from '@/components/WalletButton';

export default function Tokenomics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900">
      <nav className="p-6 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <Link href="/" className="text-3xl font-bold text-white">BASED Protocol</Link>
          <Link href="/leaderboard" className="text-white hover:underline">Leaderboard</Link>
          <Link href="/how-it-works" className="text-white hover:underline">How It Works</Link>
          <Link href="/tokenomics" className="text-white hover:underline">Tokenomics</Link>
          <Link href="/tokenomics" className="text-white underline font-bold">Tokenomics</Link>
          <Link href="/about-based" className="text-white hover:underline">About $BASED</Link>
          <Link href="/dashboard" className="text-white hover:underline">Dashboard</Link>
          <Link href="/faq" className="text-white hover:underline">FAQ</Link>
        </div>
        <WalletButton />
      </nav>

      <main className="container mx-auto px-6 py-12 text-white max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-bold mb-4">$BASED Tokenomics</h1>
          <p className="text-2xl text-gray-300 mb-4">Sustainable. Deflationary. Revenue-Backed.</p>
          <p className="text-lg text-purple-400">Real utility. Real value. Real growth.</p>
        </div>

        {/* Supply Overview */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-4 border-purple-500 p-8 rounded-lg text-center">
            <h2 className="text-5xl font-bold mb-4">1,000,000,000 $BASED</h2>
            <p className="text-xl text-gray-300">Total Supply (Fixed)</p>
            <p className="text-sm text-gray-500 mt-2">Deflationary through burn mechanics</p>
          </div>
        </section>

        {/* Token Distribution */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">📊 Token Distribution</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-500/20 to-green-700/20 border-2 border-green-500 p-6 rounded-lg text-center">
              <div className="text-6xl mb-2">💰</div>
              <p className="text-4xl font-bold text-green-400">40%</p>
              <p className="text-lg font-bold mt-2">Staking Rewards</p>
              <p className="text-sm text-gray-400">400M tokens</p>
              <p className="text-xs text-gray-500 mt-2">Released over 4 years</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 border-2 border-blue-500 p-6 rounded-lg text-center">
              <div className="text-6xl mb-2">💧</div>
              <p className="text-4xl font-bold text-blue-400">20%</p>
              <p className="text-lg font-bold mt-2">Liquidity Pool</p>
              <p className="text-sm text-gray-400">200M tokens</p>
              <p className="text-xs text-gray-500 mt-2">Locked on DEXs</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 border-2 border-purple-500 p-6 rounded-lg text-center">
              <div className="text-6xl mb-2">👥</div>
              <p className="text-4xl font-bold text-purple-400">15%</p>
              <p className="text-lg font-bold mt-2">Team / Founder</p>
              <p className="text-sm text-gray-400">150M tokens</p>
              <p className="text-xs text-gray-500 mt-2">2-year linear vest</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-700/20 border-2 border-yellow-500 p-6 rounded-lg text-center">
              <div className="text-6xl mb-2">📢</div>
              <p className="text-4xl font-bold text-yellow-400">10%</p>
              <p className="text-lg font-bold mt-2">Marketing</p>
              <p className="text-sm text-gray-400">100M tokens</p>
              <p className="text-xs text-gray-500 mt-2">Community growth</p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-red-700/20 border-2 border-orange-500 p-6 rounded-lg text-center">
              <div className="text-6xl mb-2">🏛️</div>
              <p className="text-4xl font-bold text-orange-400">10%</p>
              <p className="text-lg font-bold mt-2">Treasury</p>
              <p className="text-sm text-gray-400">100M tokens</p>
              <p className="text-xs text-gray-500 mt-2">Development fund</p>
            </div>

            <div className="bg-gradient-to-br from-pink-500/20 to-pink-700/20 border-2 border-pink-500 p-6 rounded-lg text-center">
              <div className="text-6xl mb-2">⭐</div>
              <p className="text-4xl font-bold text-pink-400">5%</p>
              <p className="text-lg font-bold mt-2">Early Backers</p>
              <p className="text-sm text-gray-400">50M tokens</p>
              <p className="text-xs text-gray-500 mt-2">Beta testers + first 100</p>
            </div>
          </div>
        </section>

        {/* Revenue Model */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">💸 Revenue Sources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-3xl font-bold mb-2">2%</h3>
              <p className="text-xl font-bold mb-2">Deposit Fee</p>
              <p className="text-sm text-gray-400">Charged when users stake $BASED or SOL</p>
            </div>

            <div className="bg-white/10 backdrop-blur p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-3xl font-bold mb-2">5-25%</h3>
              <p className="text-xl font-bold mb-2">Rage Quit Tax</p>
              <p className="text-sm text-gray-400">Early withdrawal penalties (decreases over time)</p>
            </div>

            <div className="bg-white/10 backdrop-blur p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-3xl font-bold mb-2">0.5%</h3>
              <p className="text-xl font-bold mb-2">Trading Fee</p>
              <p className="text-sm text-gray-400">On all $BASED swaps via DEX integration</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-2 border-purple-500 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-6 text-center">100% Revenue Distribution</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2/5 bg-gradient-to-r from-orange-500 to-red-500 h-16 rounded-lg flex items-center justify-center font-bold text-lg">
                  40% Buyback & Burn 🔥
                </div>
                <p className="flex-1 text-gray-300">Tokens bought from market & permanently destroyed</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-2/5 bg-gradient-to-r from-green-500 to-blue-500 h-16 rounded-lg flex items-center justify-center font-bold text-lg">
                  40% Staker Rewards 💰
                </div>
                <p className="flex-1 text-gray-300">Distributed to all stakers (real yield, not inflation)</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-1/5 bg-gradient-to-r from-purple-500 to-pink-500 h-16 rounded-lg flex items-center justify-center font-bold">
                  10% Treasury
                </div>
                <p className="flex-1 text-gray-300">Development, security audits, operations</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-1/5 bg-gradient-to-r from-yellow-500 to-orange-500 h-16 rounded-lg flex items-center justify-center font-bold">
                  10% Marketing
                </div>
                <p className="flex-1 text-gray-300">Community growth, partnerships, liquidity</p>
              </div>
            </div>
          </div>
        </section>

        {/* Burn Mechanics */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">🔥 Deflationary Burn Mechanics</h2>
          <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 border-4 border-red-500 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Automatic Burns</h3>
                <div className="space-y-4">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <p className="font-bold mb-2">🔥 Daily Buyback & Burn</p>
                    <p className="text-sm text-gray-400">40% of all revenue → buy $BASED → burn forever</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <p className="font-bold mb-2">🔥 Rage Quit Burns</p>
                    <p className="text-sm text-gray-400">40% of early withdrawal penalties burned instantly</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <p className="font-bold mb-2">🔥 Weekly Burn Events</p>
                    <p className="text-sm text-gray-400">Accumulated fees burned in public transactions</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Projected Deflation</h3>
                <div className="space-y-4">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <p className="font-bold mb-2">Year 1</p>
                    <p className="text-3xl font-bold text-red-400 mb-2">-35%</p>
                    <p className="text-sm text-gray-400">~350M tokens burned</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <p className="font-bold mb-2">Year 2</p>
                    <p className="text-3xl font-bold text-orange-400 mb-2">-25%</p>
                    <p className="text-sm text-gray-400">~163M more burned (513M total)</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <p className="font-bold mb-2">Year 5</p>
                    <p className="text-3xl font-bold text-yellow-400 mb-2">-65%+</p>
                    <p className="text-sm text-gray-400">Circulating supply: Circulating supply: <350M tokenslt;350M tokens</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-black/50 p-6 rounded-lg text-center">
              <p className="text-2xl font-bold mb-2">🔥 Burn Address (Public)</p>
              <p className="font-mono text-sm text-gray-400">All burns sent to: 1111111111111111111111111111111</p>
              <p className="text-xs text-gray-500 mt-2">Verifiable on Solana explorer</p>
            </div>
          </div>
        </section>

        {/* ve$BASED Lock System */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">🔒 ve$BASED Lock Multipliers</h2>
          <p className="text-center text-xl text-gray-300 mb-8">
            Lock your tokens longer = Earn exponentially more
          </p>

          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-4 border-yellow-500 p-8 rounded-lg mb-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-black/50 p-6 rounded-lg text-center border-2 border-gray-600">
                <p className="text-sm text-gray-400 mb-2">No Lock</p>
                <p className="text-5xl font-bold mb-2">1.0x</p>
                <p className="text-sm text-gray-400">Base APY</p>
                <p className="text-xs text-gray-600 mt-2">Unlock anytime</p>
              </div>

              <div className="bg-black/50 p-6 rounded-lg text-center border-2 border-blue-500">
                <p className="text-sm text-gray-400 mb-2">3 Months</p>
                <p className="text-5xl font-bold text-blue-400 mb-2">1.5x</p>
                <p className="text-sm text-green-400">+50% APY</p>
                <p className="text-xs text-gray-600 mt-2">0.25 ve$BASED per token</p>
              </div>

              <div className="bg-black/50 p-6 rounded-lg text-center border-2 border-green-500">
                <p className="text-sm text-gray-400 mb-2">6 Months</p>
                <p className="text-5xl font-bold text-green-400 mb-2">2.5x</p>
                <p className="text-sm text-green-400">+150% APY</p>
                <p className="text-xs text-gray-600 mt-2">0.50 ve$BASED per token</p>
              </div>

              <div className="bg-black/50 p-6 rounded-lg text-center border-2 border-yellow-500">
                <p className="text-sm text-gray-400 mb-2">1 Year</p>
                <p className="text-5xl font-bold text-yellow-400 mb-2">5.0x</p>
                <p className="text-sm text-green-400">+400% APY</p>
                <p className="text-xs text-gray-600 mt-2">1.0 ve$BASED per token</p>
              </div>

              <div className="bg-black/50 p-6 rounded-lg text-center border-4 border-orange-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 px-3 py-1 rounded-full text-xs font-bold">
                  MAX
                </div>
                <p className="text-sm text-gray-400 mb-2">2 Years</p>
                <p className="text-6xl font-bold text-orange-400 mb-2">10x</p>
                <p className="text-sm text-green-400">+900% APY</p>
                <p className="text-xs text-gray-600 mt-2">2.0 ve$BASED per token</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="text-3xl mb-2">🗳️</p>
                <p className="font-bold mb-1">Governance Rights</p>
                <p className="text-xs text-gray-400">ve$BASED = voting power on protocol decisions</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="text-3xl mb-2">💎</p>
                <p className="font-bold mb-1">Boosted Rewards</p>
                <p className="text-xs text-gray-400">Higher multiplier = more staking rewards</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="text-3xl mb-2">🏆</p>
                <p className="font-bold mb-1">Revenue Share</p>
                <p className="text-xs text-gray-400">ve$BASED holders get extra protocol fees</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/20 border-l-4 border-yellow-500 p-6 rounded-lg">
            <p className="font-bold mb-2">⚠️ Important: Early Unlock Penalty</p>
            <p className="text-sm text-gray-400">
              Breaking a lock early? You'll face the standard rage quit penalties (5-25% depending on time remaining). 
              Choose your lock period wisely - diamond hands only! 💎
            </p>
          </div>
        </section>

        {/* The Flywheel */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">⚡ The Sustainable Growth Flywheel</h2>
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-4 border-purple-500 p-8 rounded-lg">
            <div className="text-center mb-6">
              <p className="text-xl text-gray-300">Every action in the protocol creates MORE value for holders:</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-green-500/20 border-2 border-green-500 p-4 rounded-lg flex-1 text-center">
                  <p className="text-4xl mb-2">👥</p>
                  <p className="font-bold">More Users Stake</p>
                </div>
                <p className="text-4xl">→</p>
                <div className="bg-blue-500/20 border-2 border-blue-500 p-4 rounded-lg flex-1 text-center">
                  <p className="text-4xl mb-2">💵</p>
                  <p className="font-bold">More Fees Generated</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-red-500/20 border-2 border-red-500 p-4 rounded-lg flex-1 text-center">
                  <p className="text-4xl mb-2">🔥</p>
                  <p className="font-bold">Buyback & Burn</p>
                </div>
                <p className="text-4xl">→</p>
                <div className="bg-orange-500/20 border-2 border-orange-500 p-4 rounded-lg flex-1 text-center">
                  <p className="text-4xl mb-2">📈</p>
                  <p className="font-bold">Price Increases</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-500/20 border-2 border-purple-500 p-4 rounded-lg flex-1 text-center">
                  <p className="text-4xl mb-2">💰</p>
                  <p className="font-bold">Higher Real Yield APY</p>
                </div>
                <p className="text-4xl">→</p>
                <div className="bg-yellow-500/20 border-2 border-yellow-500 p-4 rounded-lg flex-1 text-center">
                  <p className="text-4xl mb-2">🚀</p>
                  <p className="font-bold">FOMO Intensifies</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-2xl font-bold text-green-400">↻ CYCLE REPEATS</p>
              <p className="text-sm text-gray-400 mt-2">Compounding growth for all holders</p>
            </div>
          </div>
        </section>

        {/* Example Math */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">🧮 Example: Real Revenue Model</h2>
          <div className="bg-white/10 backdrop-blur p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Assumptions (Conservative)</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between bg-white/5 p-3 rounded">
                    <span>Total Users:</span>
                    <span className="font-bold">1,000</span>
                  </div>
                  <div className="flex justify-between bg-white/5 p-3 rounded">
                    <span>Avg Stake:</span>
                    <span className="font-bold">1,000 $BASED</span>
                  </div>
                  <div className="flex justify-between bg-white/5 p-3 rounded">
                    <span>Total Staked:</span>
                    <span className="font-bold">1M $BASED</span>
                  </div>
                  <div className="flex justify-between bg-white/5 p-3 rounded">
                    <span>Daily Trading Vol:</span>
                    <span className="font-bold">$100,000</span>
                  </div>
                  <div className="flex justify-between bg-white/5 p-3 rounded">
                    <span>Daily Rage Quits:</span>
                    <span className="font-bold">10 users</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Daily Revenue</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between bg-white/5 p-3 rounded">
                    <span>Trading Fees (0.5%):</span>
                    <span className="font-bold text-green-400">$500</span>
                  </div>
                  <div className="flex justify-between bg-white/5 p-3 rounded">
                    <span>Deposit Fees (2%):</span>
                    <span className="font-bold text-green-400">$20</span>
                  </div>
                  <div className="flex justify-between bg-white/5 p-3 rounded">
                    <span>Rage Quit Penalties:</span>
                    <span className="font-bold text-green-400">$2,000</span>
                  </div>
                  <div className="flex justify-between bg-green-500/20 p-3 rounded border border-green-500">
                    <span className="font-bold">TOTAL DAILY:</span>
                    <span className="font-bold text-green-400 text-xl">$2,520</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 mt-6 text-orange-400">Daily Distribution</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between bg-white/5 p-3 rounded">
                    <span>Buyback & Burn:</span>
                    <span className="font-bold text-red-400">$1,008</span>
                  </div>
                  <div className="flex justify-between bg-white/5 p-3 rounded">
                    <span>Staker Rewards:</span>
                    <span className="font-bold text-green-400">$1,008</span>
                  </div>
                  <div className="flex justify-between bg-white/5 p-3 rounded">
                    <span>Treasury:</span>
                    <span className="font-bold">$252</span>
                  </div>
                  <div className="flex justify-between bg-white/5 p-3 rounded">
                    <span>Marketing:</span>
                    <span className="font-bold">$252</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-red-500 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">🔥 Annual Burn Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Tokens Burned/Day</p>
                  <p className="text-4xl font-bold text-red-400">~500-1K</p>
                  <p className="text-xs text-gray-500">(depends on price)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Tokens Burned/Year</p>
                  <p className="text-4xl font-bold text-orange-400">~350M</p>
                  <p className="text-xs text-gray-500">35% of supply</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">5-Year Supply</p>
                  <p className="text-4xl font-bold text-yellow-400">&lt;350M</p>
                  <p className="text-xs text-gray-500">65%+ burned</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">⚖️ How $BASED Compares</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white/10 backdrop-blur rounded-lg overflow-hidden">
              <thead className="bg-white/20">
                <tr>
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Reflection Tokens</th>
                  <th className="p-4 text-center">Rebase Tokens</th>
                  <th className="p-4 text-center">Traditional Staking</th>
                  <th className="p-4 text-center bg-purple-500/30">$BASED</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="p-4 font-bold">Real Yield</td>
                  <td className="p-4 text-center">❌</td>
                  <td className="p-4 text-center">❌</td>
                  <td className="p-4 text-center">⚠️ Sometimes</td>
                  <td className="p-4 text-center bg-purple-500/10">✅ Always</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Deflationary</td>
                  <td className="p-4 text-center">⚠️ Sometimes</td>
                  <td className="p-4 text-center">❌</td>
                  <td className="p-4 text-center">❌</td>
                  <td className="p-4 text-center bg-purple-500/10">✅ Yes</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Buyback Mechanism</td>
                  <td className="p-4 text-center">❌</td>
                  <td className="p-4 text-center">❌</td>
                  <td className="p-4 text-center">❌</td>
                  <td className="p-4 text-center bg-purple-500/10">✅ Automatic</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Sustainable APY</td>
                  <td className="p-4 text-center">❌ Inflation</td>
                  <td className="p-4 text-center">❌ Inflation</td>
                  <td className="p-4 text-center">⚠️ Mixed</td>
                  <td className="p-4 text-center bg-purple-500/10">✅ Revenue-Backed</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Lock Multipliers</td>
                  <td className="p-4 text-center">❌</td>
                  <td className="p-4 text-center">❌</td>
                  <td className="p-4 text-center">⚠️ Rare</td>
                  <td className="p-4 text-center bg-purple-500/10">✅ Up to 10X</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Governance</td>
                  <td className="p-4 text-center">❌</td>
                  <td className="p-4 text-center">❌</td>
                  <td className="p-4 text-center">⚠️ Sometimes</td>
                  <td className="p-4 text-center bg-purple-500/10">✅ ve$BASED</td>
                </tr>
                <tr className="font-bold text-lg">
                  <td className="p-4">Sustainability</td>
                  <td className="p-4 text-center text-red-400">Low</td>
                  <td className="p-4 text-center text-red-400">Low</td>
                  <td className="p-4 text-center text-yellow-400">Medium</td>
                  <td className="p-4 text-center bg-purple-500/20 text-green-400">High</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 p-12 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">Ready to Join BASED?</h2>
          <p className="text-xl mb-8">Tokenomics designed for long-term holders</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/how-it-works" className="bg-white text-purple-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
              Learn How It Works
            </Link>
            <Link href="/about-based" className="bg-white/20 text-white border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white/30">
              About $BASED
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
