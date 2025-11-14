'use client';

import Link from 'next/link';
import WalletButton from '@/components/WalletButton';

export default function AboutBased() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="p-6 flex justify-between items-center border-b border-gray-200">
        <div className="flex gap-6 items-center">
          <Link href="/" className="text-3xl font-bold text-blue-600">BASED Reserve</Link>
          <Link href="/leaderboard" className="text-gray-700 hover:text-blue-600">Wealth Rankings</Link>
          <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600">How It Works</Link>
          <Link href="/tokenomics" className="text-gray-700 hover:text-blue-600">Tokenomics</Link>
          <Link href="/about-based" className="text-blue-600 font-bold">About $BSOL</Link>
          <Link href="/faq" className="text-gray-700 hover:text-blue-600">FAQ</Link>
        </div>
        <WalletButton />
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🏦</div>
          <h1 className="text-6xl font-bold mb-4 text-gray-900">$BSOL Token</h1>
          <p className="text-2xl text-gray-600">The Foundation of BASED Reserve</p>
          <p className="text-lg text-blue-600 mt-4">Sustainable. Deflationary. Community-Owned.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 border border-blue-200 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">What is $BSOL?</h2>
            <p className="text-gray-700 mb-4">
              $BSOL is the native reserve token powering BASED Reserve's decentralized banking platform. 
              Unlike traditional bank stocks or crypto tokens that rely solely on speculation, $BSOL is 
              backed by real protocol revenue and designed to appreciate through deflationary tokenomics.
            </p>
            <p className="text-gray-700">
              When you hold $BSOL, you own a share of the protocol's future - earning interest on deposits, 
              participating in governance, and benefiting from revenue-sharing mechanisms.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Revenue Model</h2>
            <p className="text-gray-700 mb-4">
              BASED Reserve generates revenue through multiple streams that directly benefit token holders:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Deposit fees (0.1% on all deposits)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Early withdrawal penalties (5-25% based on duration)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Trading fees from $BSOL liquidity pools</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 rounded-lg text-white mb-16">
          <h2 className="text-4xl font-bold mb-6 text-center">Deflationary Tokenomics</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">40%</div>
              <p className="text-blue-100">Token Buyback & Burn</p>
              <p className="text-sm text-blue-200 mt-2">Permanent supply reduction</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">40%</div>
              <p className="text-blue-100">Staking Rewards Pool</p>
              <p className="text-sm text-blue-200 mt-2">Distributed to members</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">20%</div>
              <p className="text-blue-100">Protocol Development</p>
              <p className="text-sm text-blue-200 mt-2">Platform improvements</p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why $BSOL is Different</h2>
          
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Real Revenue, Not Speculation</h3>
            <p className="text-gray-700">
              Most crypto tokens have no revenue model - they rely entirely on new buyers pushing the price up. 
              $BSOL generates actual income from platform usage. Every deposit, every withdrawal fee, every trade 
              contributes to protocol revenue that flows back to token holders.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Deflationary by Design</h3>
            <p className="text-gray-700">
              Traditional tokens die because supply constantly increases (inflation). $BSOL does the opposite - 
              40% of all revenue buys tokens from the market and burns them permanently. Less supply + steady demand = 
              natural price appreciation. This is how successful companies use stock buybacks.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Progressive Decentralization</h3>
            <p className="text-gray-700">
              Phase 1 launches with centralized control for rapid iteration and security. As the protocol matures and reaches 10,000+ active stakers, governance will progressively transition to $BSOL holders. 
              We believe in earning decentralization through proven execution, not promising it on day one.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/tokenomics">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-xl">
              View Full Tokenomics
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
