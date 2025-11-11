'use client';

import Link from 'next/link';
import WalletButton from '@/components/WalletButton';

export default function Tokenomics() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">BASED Reserve</h1>
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium text-gray-600 hover:text-blue-600">How It Works</Link>
            <Link href="/tokenomics" className="text-sm font-medium text-blue-600">Tokenomics</Link>
            <Link href="/growth" className="text-sm font-medium text-gray-600 hover:text-blue-600">Growth Strategy</Link>
            <Link href="/about-based" className="text-sm font-medium text-gray-600 hover:text-blue-600">About $BSOL</Link>
            <Link href="/faq" className="text-sm font-medium text-gray-600 hover:text-blue-600">FAQ</Link>
          </div>
          <WalletButton />
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">$BSOL Tokenomics</h1>
          <p className="text-xl text-gray-600">Revenue-Backed. Deflationary. Community-Owned.</p>
        </div>

        {/* Token Supply */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Token Supply</h2>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Supply</p>
                <p className="text-4xl font-bold text-gray-900">1,000,000,000</p>
                <p className="text-sm text-gray-500">1 Billion $BSOL tokens</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Circulating at Launch</p>
                <p className="text-4xl font-bold text-blue-600">800,000,000</p>
                <p className="text-sm text-gray-500">80% immediately available</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Token Allocation</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-700">Liquidity Pool</span>
                <span className="font-bold text-gray-900">60%</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-700">Community Treasury</span>
                <span className="font-bold text-gray-900">20%</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-700">Team (2yr vest)</span>
                <span className="font-bold text-gray-900">10%</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-700">Marketing</span>
                <span className="font-bold text-gray-900">5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Development</span>
                <span className="font-bold text-gray-900">5%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Distribution */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Revenue Distribution Model</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold mb-3">40%</div>
              <h3 className="text-xl font-bold mb-2">Buyback & Burn</h3>
              <p className="text-blue-100 text-sm">
                Protocol revenue used to purchase $BSOL from market and burn permanently
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-3">40%</div>
              <h3 className="text-xl font-bold mb-2">Staking Rewards</h3>
              <p className="text-blue-100 text-sm">
                Distributed to members based on account tier and deposit duration
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-3">20%</div>
              <h3 className="text-xl font-bold mb-2">Protocol Development</h3>
              <p className="text-blue-100 text-sm">
                Platform maintenance, security audits, and new features
              </p>
            </div>
          </div>
        </div>

        {/* Revenue Sources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Revenue Sources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-gray-900">Deposit Fees</h3>
              <p className="text-4xl font-bold text-blue-600 mb-2">0.1%</p>
              <p className="text-sm text-gray-600">Small fee on all deposits to fund protocol operations</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-gray-900">Withdrawal Penalties</h3>
              <p className="text-4xl font-bold text-orange-600 mb-2">5-25%</p>
              <p className="text-sm text-gray-600">Early withdrawal fees that decrease over time</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-gray-900">Trading Fees</h3>
              <p className="text-4xl font-bold text-green-600 mb-2">0.3%</p>
              <p className="text-sm text-gray-600">Standard DEX trading fees from $BSOL liquidity pools</p>
            </div>
          </div>
        </div>

        {/* Deflationary Mechanism */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Deflationary Mechanism</h2>
          <div className="space-y-6">
            <p className="text-gray-700">
              Unlike inflationary tokens that constantly increase supply, $BSOL implements aggressive deflationary tokenomics 
              through automatic buyback and burn mechanisms.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Automatic Buyback & Burn</h3>
              <p className="text-gray-700">
                40% of ALL protocol revenue is automatically used to purchase $BSOL tokens from the open market and burn them 
                permanently. This creates constant buy pressure while reducing total supply—a proven model used by successful 
                DeFi protocols generating millions in revenue.
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Simple Math</h3>
              <p className="text-gray-700">
                Decreasing supply + steady demand = natural price appreciation. As the protocol grows and more revenue flows 
                through, more tokens are burned, making remaining tokens increasingly scarce and valuable.
              </p>
            </div>
          </div>
        </div>

        {/* Governance */}
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Governance Rights</h2>
          <p className="text-gray-700 mb-6">
            $BSOL holders participate in protocol governance, voting on key decisions:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">Fee Structure Changes</p>
              <p className="text-sm text-gray-600">Adjust deposit fees, withdrawal penalties, revenue distribution</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">New Features</p>
              <p className="text-sm text-gray-600">Vote on platform upgrades and new banking services</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">Treasury Allocation</p>
              <p className="text-sm text-gray-600">Decide how community treasury funds are deployed</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">Partnership Approvals</p>
              <p className="text-sm text-gray-600">Review and approve strategic partnerships and integrations</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold">
              Get Started
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
