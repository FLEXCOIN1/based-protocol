'use client';

import Link from 'next/link';
import WalletButton from '@/components/WalletButton';

export default function AboutBased() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900">
      <nav className="p-6 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <Link href="/" className="text-3xl font-bold text-white">BASED Protocol</Link>
          <Link href="/leaderboard" className="text-white hover:underline">Leaderboard</Link>
          <Link href="/how-it-works" className="text-white hover:underline">How It Works</Link>
          <Link href="/tokenomics" className="text-white hover:underline">Tokenomics</Link>
          <Link href="/about-based" className="text-white underline font-bold">About $BASED</Link>
          <Link href="/dashboard" className="text-white hover:underline">Dashboard</Link>
          <Link href="/faq" className="text-white hover:underline">FAQ</Link>
        </div>
        <WalletButton />
      </nav>

      <main className="container mx-auto px-6 py-12 text-white max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="text-8xl mb-6">🔥</div>
          <h1 className="text-6xl font-bold mb-4">$BASED Token</h1>
          <p className="text-2xl text-gray-300">The Heart of the Protocol</p>
          <p className="text-lg text-purple-400 mt-4">Sustainable. Deflationary. Revenue-Backed.</p>
        </div>

        {/* What is $BASED */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">What is $BASED?</h2>
          <div className="bg-white/10 backdrop-blur p-8 rounded-lg mb-8">
            <p className="text-xl text-gray-300 mb-6">
              $BASED is NOT another memecoin. It's a revenue-generating utility token with real mechanisms 
              for sustainable growth, backed by protocol fees and automatic buyback & burn.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-500/20 to-green-700/20 border border-green-500/50 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">Real Yield</h3>
                <p className="text-gray-300 text-sm">APY backed by actual protocol revenue, not inflation</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-700/20 border border-orange-500/50 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">🔥</div>
                <h3 className="text-xl font-bold mb-2">Automatic Burns</h3>
                <p className="text-gray-300 text-sm">40% of revenue → buyback & burn daily</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-700/20 border border-purple-500/50 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">🎮</div>
                <h3 className="text-xl font-bold mb-2">Gamified Locks</h3>
                <p className="text-gray-300 text-sm">Lock longer = earn more. Up to 10X multiplier</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">💎 Tokenomics</h2>
          
          {/* Supply Distribution */}
          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-2 border-purple-500/50 p-8 rounded-lg mb-8">
            <h3 className="text-3xl font-bold mb-6 text-center">Token Distribution (1B Supply)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-green-400">40%</p>
                <p className="text-sm text-gray-300">Staking Rewards</p>
                <p className="text-xs text-gray-500">400M tokens</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-400">20%</p>
                <p className="text-sm text-gray-300">Liquidity</p>
                <p className="text-xs text-gray-500">200M tokens</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-purple-400">15%</p>
                <p className="text-sm text-gray-300">Team (2yr vest)</p>
                <p className="text-xs text-gray-500">150M tokens</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-yellow-400">10%</p>
                <p className="text-sm text-gray-300">Marketing</p>
                <p className="text-xs text-gray-500">100M tokens</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-orange-400">10%</p>
                <p className="text-sm text-gray-300">Treasury</p>
                <p className="text-xs text-gray-500">100M tokens</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-pink-400">5%</p>
                <p className="text-sm text-gray-300">Early Backers</p>
                <p className="text-xs text-gray-500">50M tokens</p>
              </div>
            </div>
          </div>

          {/* Revenue Model */}
          <div className="bg-white/10 backdrop-blur p-8 rounded-lg mb-8">
            <h3 className="text-3xl font-bold mb-6">💸 Revenue Model</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-2xl font-bold mb-2">2%</p>
                <p className="text-gray-300">Deposit Fee</p>
                <p className="text-sm text-gray-500">On all stakes</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border-l-4 border-red-500">
                <p className="text-2xl font-bold mb-2">5-25%</p>
                <p className="text-gray-300">Rage Quit Tax</p>
                <p className="text-sm text-gray-500">Early withdrawals</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border-l-4 border-green-500">
                <p className="text-2xl font-bold mb-2">0.5%</p>
                <p className="text-gray-300">Trading Fee</p>
                <p className="text-sm text-gray-500">On DEX swaps</p>
              </div>
            </div>

            <h4 className="text-2xl font-bold mb-4">Revenue Distribution (100% of fees)</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-2/5 bg-gradient-to-r from-orange-500 to-red-500 h-12 rounded flex items-center justify-center font-bold">
                  40% Buyback & Burn 🔥
                </div>
                <p className="text-sm text-gray-400">Tokens bought from market & burned forever</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2/5 bg-gradient-to-r from-green-500 to-blue-500 h-12 rounded flex items-center justify-center font-bold">
                  40% Staker Rewards 💰
                </div>
                <p className="text-sm text-gray-400">Distributed to all stakers (real yield)</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-1/5 bg-gradient-to-r from-purple-500 to-pink-500 h-12 rounded flex items-center justify-center font-bold text-sm">
                  10% Treasury
                </div>
                <p className="text-sm text-gray-400">Development & operations</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-1/5 bg-gradient-to-r from-yellow-500 to-orange-500 h-12 rounded flex items-center justify-center font-bold text-sm">
                  10% Marketing
                </div>
                <p className="text-sm text-gray-400">Growth & liquidity</p>
              </div>
            </div>
          </div>

          {/* Lock Multipliers */}
          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/50 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-6">🔒 ve$BASED Lock Multipliers</h3>
            <p className="text-gray-300 mb-6">
              Lock your tokens for higher rewards. The longer you commit, the more you earn.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="bg-black/30 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-400 mb-2">No Lock</p>
                <p className="text-3xl font-bold">1.0x</p>
                <p className="text-xs text-gray-500 mt-2">Base APY</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-400 mb-2">3 Months</p>
                <p className="text-3xl font-bold text-blue-400">1.5x</p>
                <p className="text-xs text-green-400 mt-2">+50% APY</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-400 mb-2">6 Months</p>
                <p className="text-3xl font-bold text-green-400">2.5x</p>
                <p className="text-xs text-green-400 mt-2">+150% APY</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-400 mb-2">1 Year</p>
                <p className="text-3xl font-bold text-yellow-400">5.0x</p>
                <p className="text-xs text-green-400 mt-2">+400% APY</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg text-center border-2 border-yellow-500">
                <p className="text-sm text-gray-400 mb-2">2 Years</p>
                <p className="text-3xl font-bold text-orange-400">10.0x</p>
                <p className="text-xs text-green-400 mt-2">+900% APY</p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-400 mt-6">
              💡 Locked tokens earn ve$BASED (voting power) + boosted staking rewards
            </p>
          </div>
        </section>

        {/* The Flywheel */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">⚡ The Growth Flywheel</h2>
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="text-4xl mb-2">👥</p>
                <p className="font-bold">More Users</p>
                <p className="text-xs text-gray-400">Stake tokens</p>
              </div>
              <div className="text-4xl text-center">→</div>
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="text-4xl mb-2">💵</p>
                <p className="font-bold">More Revenue</p>
                <p className="text-xs text-gray-400">From fees</p>
              </div>
              <div className="text-4xl text-center">→</div>
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="text-4xl mb-2">🔥</p>
                <p className="font-bold">More Burns</p>
                <p className="text-xs text-gray-400">Price goes up</p>
              </div>
            </div>
            <div className="text-center my-4 text-4xl">↓</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="text-4xl mb-2">🚀</p>
                <p className="font-bold">Higher APY</p>
                <p className="text-xs text-gray-400">Real yield increases</p>
              </div>
              <div className="text-4xl text-center">→</div>
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="text-4xl mb-2">😍</p>
                <p className="font-bold">FOMO Intensifies</p>
                <p className="text-xs text-gray-400">Cycle repeats</p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Timeline */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-center">🗺️ Development Roadmap</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500"></div>
            
            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="relative">
                <div className="flex items-center gap-8">
                  <div className="flex-1 text-right">
                    <div className="bg-green-500/20 border-2 border-green-500 p-6 rounded-lg inline-block">
                      <h3 className="text-2xl font-bold mb-2">✅ Phase 1: Launch</h3>
                      <p className="text-sm text-gray-400 mb-3">Month 1-2 | COMPLETE</p>
                      <ul className="text-left text-sm space-y-2">
                        <li>✅ Token created on devnet</li>
                        <li>✅ Website & staking platform built</li>
                        <li>✅ Basic staking mechanics</li>
                        <li>✅ Gamification system</li>
                        <li>🔄 Token launch on Pump.fun (pending market)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-black z-10 flex items-center justify-center">
                    <span className="text-xl">✓</span>
                  </div>
                  <div className="flex-1"></div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative">
                <div className="flex items-center gap-8">
                  <div className="flex-1"></div>
                  <div className="w-8 h-8 bg-yellow-500 rounded-full border-4 border-black z-10 flex items-center justify-center animate-pulse">
                    <span className="text-xl">⏳</span>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="bg-yellow-500/20 border-2 border-yellow-500 p-6 rounded-lg inline-block">
                      <h3 className="text-2xl font-bold mb-2">🚧 Phase 2: Growth</h3>
                      <p className="text-sm text-gray-400 mb-3">Month 3-4 | IN PROGRESS</p>
                      <ul className="text-sm space-y-2">
                        <li>⏳ Automatic buyback & burn mechanism</li>
                        <li>⏳ Revenue distribution system</li>
                        <li>⏳ Enhanced staking UI</li>
                        <li>⏳ Community building (5k+ holders)</li>
                        <li>⏳ First CEX listing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative">
                <div className="flex items-center gap-8">
                  <div className="flex-1 text-right">
                    <div className="bg-blue-500/20 border-2 border-blue-500 p-6 rounded-lg inline-block">
                      <h3 className="text-2xl font-bold mb-2">🔮 Phase 3: ve$BASED</h3>
                      <p className="text-sm text-gray-400 mb-3">Month 5-6 | PLANNED</p>
                      <ul className="text-left text-sm space-y-2">
                        <li>🔮 Launch ve$BASED (vote-escrowed locks)</li>
                        <li>🔮 Lock multipliers (up to 10X)</li>
                        <li>🔮 Governance voting</li>
                        <li>🔮 Revenue sharing for ve$BASED holders</li>
                        <li>🔮 Community-driven burns</li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-black z-10"></div>
                  <div className="flex-1"></div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="relative">
                <div className="flex items-center gap-8">
                  <div className="flex-1"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-4 border-black z-10"></div>
                  <div className="flex-1 text-left">
                    <div className="bg-purple-500/20 border-2 border-purple-500 p-6 rounded-lg inline-block">
                      <h3 className="text-2xl font-bold mb-2">🏛️ Phase 4: DAO</h3>
                      <p className="text-sm text-gray-400 mb-3">Month 7+ | FUTURE</p>
                      <ul className="text-sm space-y-2">
                        <li>🏛️ Full DAO governance</li>
                        <li>🏛️ Protocol-owned liquidity</li>
                        <li>🏛️ Cross-chain expansion</li>
                        <li>🏛️ Institutional partnerships</li>
                        <li>🏛️ BASED ecosystem expansion</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Launch Status */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">🚀 Current Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-500/20 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">✅ Platform Ready</h3>
              <p className="text-gray-300 text-sm">Full staking platform built and tested on devnet</p>
            </div>
            <div className="bg-yellow-500/20 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">⏳ Awaiting Launch</h3>
              <p className="text-gray-300 text-sm">Waiting for optimal market conditions (currently: extreme fear)</p>
            </div>
            <div className="bg-blue-500/20 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">🎯 Target: Dec 2024</h3>
              <p className="text-gray-300 text-sm">Mainnet launch when BTC/SOL sentiment turns bullish</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 p-12 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">Join the BASED Revolution</h2>
          <p className="text-xl mb-8">Be first to know when we launch on mainnet</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://twitter.com/basedproto78004" target="_blank" rel="noopener noreferrer" 
               className="bg-white text-purple-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
              Follow on Twitter 🐦
            </a>
            <a href="https://t.me/BASEDProtocol" target="_blank" rel="noopener noreferrer"
               className="bg-white/20 text-white border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white/30">
              Join Telegram 💬
            </a>
          </div>
          <p className="text-sm text-gray-300 mt-6">
            Website: <Link href="/" className="underline">basedprotocol.netlify.app</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
