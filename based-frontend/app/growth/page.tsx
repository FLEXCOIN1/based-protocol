'use client';

import Link from 'next/link';
import WalletButton from '@/components/WalletButton';

export default function Growth() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">BASED Reserve</h1>
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium text-gray-600 hover:text-blue-600">How It Works</Link>
            <Link href="/tokenomics" className="text-sm font-medium text-gray-600 hover:text-blue-600">Tokenomics</Link>
            <Link href="/growth" className="text-sm font-medium text-blue-600">Launch Roadmap</Link>
            <Link href="/about-based" className="text-sm font-medium text-gray-600 hover:text-blue-600">About $BSOL</Link>
            <Link href="/faq" className="text-sm font-medium text-gray-600 hover:text-blue-600">FAQ</Link>
          </div>
          <WalletButton />
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">$BSOL Launch Roadmap</h1>
        <p className="text-xl text-gray-600 mb-12">Three-phase launch strategy for BASED Reserve token</p>

        {/* Phase Timeline */}
        <div className="mb-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200"></div>

            {/* Phase 1 */}
            <div className="relative mb-12 ml-20">
              <div className="absolute -left-16 top-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
              <div className="bg-white border-2 border-blue-600 rounded-lg p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">Phase 1: Pump.fun Launch</h2>
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">MONDAY, NOV 18</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">What Happens:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>$BSOL token launches on Pump.fun bonding curve</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Pure speculation/trading phase - no utility yet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Community building and early supporter rewards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>SOL staking pool available (separate from $BSOL)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r">
                    <p className="text-sm text-gray-700">
                      <strong>Important:</strong> During Phase 1, you CANNOT stake $BSOL. Pump.fun tokens have zero utility until they graduate to Raydium. You can only buy/sell on the bonding curve.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">What You Can Do:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Buy $BSOL on Pump.fun</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Stake SOL for 8.5% APY (build position while waiting)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Join community, spread awareness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span className="line-through">Stake $BSOL (not possible yet)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative mb-12 ml-20">
              <div className="absolute -left-16 top-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
              <div className="bg-white border-2 border-green-600 rounded-lg p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">Phase 2: Raydium Migration</h2>
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">AT $69K MARKET CAP</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">What Happens:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Token automatically migrates to Raydium DEX</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Liquidity locked, becomes real SPL token</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Token mint address available for smart contract integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>$BSOL staking pool deployed within 24 hours</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
                    <p className="text-sm text-gray-700">
                      <strong>Timeline Unknown:</strong> Raydium migration happens automatically when market cap hits $69,000. Could be hours, days, or weeks depending on community support.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">What Unlocks:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>$BSOL staking activated</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Dual staking pools (SOL + $BSOL)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Trade on Raydium with full liquidity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Token utility begins</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative ml-20">
              <div className="absolute -left-16 top-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
              <div className="bg-white border-2 border-purple-600 rounded-lg p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">Phase 3: Full Protocol</h2>
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">POST-RAYDIUM</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">What Happens:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>Complete dual-pool staking system operational</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>Buyback & burn mechanism activated (40% of revenue)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>Revenue sharing with stakers (30% of platform fees)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>6-tier gamification system live</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>Referral rewards fully operational</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">The Full Benefits:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 p-4 rounded">
                        <p className="font-bold text-purple-900 mb-2">SOL Staking Pool</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• 8.5% base APY</li>
                          <li>• Up to 10X multiplier (85% APY)</li>
                          <li>• 12-month vesting for max rewards</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 p-4 rounded">
                        <p className="font-bold text-purple-900 mb-2">$BSOL Staking Pool</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Boosted APY for $BSOL holders</li>
                          <li>• Priority access to new features</li>
                          <li>• Revenue sharing participation</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">Deflationary Mechanics</h3>
                    <p className="text-gray-700 mb-3">
                      Once Phase 3 activates, every transaction generates revenue that flows into:
                    </p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-purple-600">40%</span>
                        <span>→ Buyback & Burn (reduces $BSOL supply)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-blue-600">30%</span>
                        <span>→ Staker Rewards (distributed to active stakers)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-green-600">20%</span>
                        <span>→ Treasury (protocol development)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-gray-600">10%</span>
                        <span>→ Team & Operations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategy Recommendations */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Recommended Strategy by Phase</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">Phase 1 Strategy (Now - $69k)</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Buy $BSOL on Pump.fun early (lower entry price)</li>
                <li>• Simultaneously stake SOL to earn 8.5% APY while waiting</li>
                <li>• Join Telegram/Discord for migration announcements</li>
                <li>• Don't overinvest - save capital for Phase 2 staking</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">Phase 2 Strategy (Post-$69k)</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Stake your $BSOL immediately for boosted rewards</li>
                <li>• Consider adding to SOL stake for dual-pool benefits</li>
                <li>• Early $BSOL stakers get founder multipliers</li>
                <li>• Monitor buyback events (creates price floor)</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">Phase 3 Strategy (Full Protocol)</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Maximize time-based multipliers (longer stake = higher APY)</li>
                <li>• Use referral system to earn bonus rewards</li>
                <li>• Compound rewards regularly to boost position</li>
                <li>• Track burn events - deflationary pressure increases value</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Risk Warning */}
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
            <span>⚠️</span> Important Disclaimers
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold mt-1">•</span>
              <span><strong>Timeline Uncertainty:</strong> Raydium migration happens at $69k market cap. This could take hours or weeks depending on community support.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold mt-1">•</span>
              <span><strong>No Utility During Phase 1:</strong> Pump.fun tokens cannot be used for staking or governance until Raydium migration.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold mt-1">•</span>
              <span><strong>Smart Contract Risk:</strong> DeFi protocols carry smart contract risk. Only invest what you can afford to lose.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold mt-1">•</span>
              <span><strong>Market Volatility:</strong> Crypto prices are volatile. $BSOL price can go up or down regardless of staking rewards.</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Phase 1 launches Monday, November 18, 2025. Start staking SOL now to build your position, then add $BSOL once it migrates to Raydium.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold">
                Stake SOL Now
              </button>
            </Link>
            <Link href="/tokenomics">
              <button className="bg-blue-500 bg-opacity-30 hover:bg-opacity-40 border-2 border-white px-8 py-3 rounded-lg font-semibold">
                Read Tokenomics
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
