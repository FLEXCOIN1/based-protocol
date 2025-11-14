'use client';

import Link from 'next/link';
import WalletButton from '../../components/WalletButton';

export default function Tokenomics() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">← BASED Protocol</Link>
          <WalletButton />
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-white mb-6">
            $BASED Tokenomics
          </h1>
          <p className="text-2xl text-gray-300">
            Deflationary. Revenue-sharing. Built to last.
          </p>
        </div>

        {/* Token Distribution */}
        <div className="bg-white/5 border-2 border-white/20 rounded-3xl p-12 mb-16 backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Token Distribution</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-500/20 border border-blue-500 rounded-2xl p-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">Public Sale</h3>
                <p className="text-4xl font-black text-blue-400">80%</p>
              </div>
              <p className="text-gray-300">
                Fair launch on Pump.fun. Available to everyone. No private sales, no VCs.
              </p>
            </div>

            <div className="bg-purple-500/20 border border-purple-500 rounded-2xl p-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">Protocol Treasury</h3>
                <p className="text-4xl font-black text-purple-400">10%</p>
              </div>
              <p className="text-gray-300">
                For liquidity, partnerships, and protocol development. 6-month linear vesting.
              </p>
            </div>

            <div className="bg-pink-500/20 border border-pink-500 rounded-2xl p-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">Team</h3>
                <p className="text-4xl font-black text-pink-400">5%</p>
              </div>
              <p className="text-gray-300">
                12-month lock, then 24-month linear vest. Team eats last.
              </p>
            </div>

            <div className="bg-green-500/20 border border-green-500 rounded-2xl p-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">Liquidity Pool</h3>
                <p className="text-4xl font-black text-green-400">5%</p>
              </div>
              <p className="text-gray-300">
                Paired with SOL for initial liquidity. LP tokens burned forever.
              </p>
            </div>
          </div>

          <div className="bg-yellow-500/20 border-2 border-yellow-500 rounded-xl p-6 text-center">
            <p className="text-yellow-300 font-bold text-xl">
              🔥 Total Supply: 1,000,000,000 $BASED (1 Billion)
            </p>
            <p className="text-yellow-200 mt-2">
              Supply decreases over time through burns
            </p>
          </div>
        </div>

        {/* Fee Structure */}
        <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-2 border-blue-500 rounded-3xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Protocol Fee Structure</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-black/40 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Deposit Fees</h3>
              <div className="space-y-3 text-gray-300">
                <p>• Conservative Tier: <span className="text-white font-bold">0.1%</span></p>
                <p>• Aggressive Tier: <span className="text-white font-bold">0.05%</span> (50% discount for $BASED holders)</p>
                <p>• Life Changing Tier: <span className="text-white font-bold">0%</span> (FREE for big $BASED holders)</p>
              </div>
            </div>

            <div className="bg-black/40 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Management & Performance Fees</h3>
              <div className="space-y-3 text-gray-300">
                <p>• Annual Management Fee: <span className="text-white font-bold">2%</span> of AUM</p>
                <p>• Performance Fee: <span className="text-white font-bold">20%</span> of profits above 8% APY</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500/30 to-red-500/30 border-2 border-orange-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Where Fees Go</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl mb-3">📈</div>
                <p className="text-3xl font-black text-blue-400 mb-2">50%</p>
                <p className="text-white font-semibold">Buyback $BASED</p>
                <p className="text-sm text-gray-300 mt-2">From open market via Jupiter</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">🔥</div>
                <p className="text-3xl font-black text-red-400 mb-2">25%</p>
                <p className="text-white font-semibold">Burn Forever</p>
                <p className="text-sm text-gray-300 mt-2">Permanently destroyed</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">💰</div>
                <p className="text-3xl font-black text-green-400 mb-2">25%</p>
                <p className="text-white font-semibold">Staker Rewards</p>
                <p className="text-sm text-gray-300 mt-2">Distributed to holders</p>
              </div>
            </div>
          </div>
        </div>

        {/* Deflationary Mechanics */}
        <div className="bg-gradient-to-br from-red-900/50 to-orange-900/50 border-2 border-red-500 rounded-3xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">🔥 Deflationary by Design</h2>
          
          <div className="space-y-6 text-xl text-gray-300">
            <div className="bg-black/40 rounded-xl p-6">
              <p className="font-bold text-white mb-2">Continuous Burns:</p>
              <p>25% of ALL protocol fees are used to buy $BASED, then permanently burned. As the fund grows, burn rate increases.</p>
            </div>

            <div className="bg-black/40 rounded-xl p-6">
              <p className="font-bold text-white mb-2">Supply Decreases Forever:</p>
              <p>Starting supply: 1B tokens. Over time, supply shrinks. Same demand + less supply = higher price.</p>
            </div>

            <div className="bg-black/40 rounded-xl p-6">
              <p className="font-bold text-white mb-2">Example Math:</p>
              <p>If protocol manages $10M → ~$450K annual fees → $112K buyback → $56K worth burned yearly</p>
              <p className="text-yellow-300 mt-3">At $0.10 per token = 560,000 tokens burned per year</p>
            </div>
          </div>

          <div className="mt-8 bg-red-500/20 border border-red-500 rounded-xl p-6 text-center">
            <p className="text-2xl font-bold text-red-300">
              Every single transaction makes $BASED more scarce
            </p>
          </div>
        </div>

        {/* Value Accrual */}
        <div className="bg-gradient-to-br from-green-900/50 to-blue-900/50 border-2 border-green-500 rounded-3xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">How Value Accrues to $BASED</h2>
          
          <div className="space-y-6">
            <div className="bg-black/40 rounded-xl p-8 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-400 mb-3">1. Constant Buying Pressure</h3>
              <p className="text-gray-300 text-lg">
                50% of every fee goes to market buying $BASED. More users = more fees = more buying.
              </p>
            </div>

            <div className="bg-black/40 rounded-xl p-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-purple-400 mb-3">2. Decreasing Supply</h3>
              <p className="text-gray-300 text-lg">
                25% of fees burned forever. Supply only goes down, never up.
              </p>
            </div>

            <div className="bg-black/40 rounded-xl p-8 border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold text-pink-400 mb-3">3. Revenue Distribution</h3>
              <p className="text-gray-300 text-lg">
                25% of fees distributed to stakers. Hold = earn passive income from protocol revenue.
              </p>
            </div>

            <div className="bg-black/40 rounded-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-green-400 mb-3">4. Utility Demand</h3>
              <p className="text-gray-300 text-lg">
                Need $BASED to access better strategies. Want 20%+ APY? Gotta hold the token.
              </p>
            </div>

            <div className="bg-black/40 rounded-xl p-8 border-l-4 border-yellow-500">
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">5. Fee Discounts</h3>
              <p className="text-gray-300 text-lg">
                Hold 10K tokens = 50% off fees. Hold 50K = FREE deposits. Saves real money.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="bg-white/5 border-2 border-white/20 rounded-3xl p-12 backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">vs Other Tokens</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-4 px-6 text-white font-bold text-lg"></th>
                  <th className="py-4 px-6 text-green-400 font-bold text-lg">$BASED</th>
                  <th className="py-4 px-6 text-gray-400 font-bold text-lg">Typical Meme Coin</th>
                  <th className="py-4 px-6 text-gray-400 font-bold text-lg">Other DeFi Tokens</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 font-semibold">Real Utility</td>
                  <td className="py-4 px-6 text-green-400">✓ Access to fund</td>
                  <td className="py-4 px-6 text-red-400">✗ None</td>
                  <td className="py-4 px-6 text-yellow-400">~ Governance only</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 font-semibold">Revenue Share</td>
                  <td className="py-4 px-6 text-green-400">✓ 25% of fees</td>
                  <td className="py-4 px-6 text-red-400">✗ None</td>
                  <td className="py-4 px-6 text-red-400">✗ Rare</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 font-semibold">Buyback & Burn</td>
                  <td className="py-4 px-6 text-green-400">✓ Automatic</td>
                  <td className="py-4 px-6 text-yellow-400">~ Sometimes</td>
                  <td className="py-4 px-6 text-red-400">✗ Rarely</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 font-semibold">Fee Discounts</td>
                  <td className="py-4 px-6 text-green-400">✓ Up to 100%</td>
                  <td className="py-4 px-6 text-red-400">✗ N/A</td>
                  <td className="py-4 px-6 text-yellow-400">~ Some</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Real Yield Source</td>
                  <td className="py-4 px-6 text-green-400">✓ DeFi fund fees</td>
                  <td className="py-4 px-6 text-red-400">✗ None</td>
                  <td className="py-4 px-6 text-green-400">✓ Protocol fees</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-2xl font-bold text-white mb-4">
              $BASED isn't a meme. It's a business model.
            </p>
            <p className="text-xl text-gray-300">
              Token value backed by real protocol revenue, not hype.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
