#!/bin/bash

echo "🔧 Final BASED Reserve updates..."
echo ""

# Backup tokenomics
cp app/tokenomics/page.tsx app/tokenomics/page.tsx.backup2

# Update TOKENOMICS
echo "📝 Updating Tokenomics page..."
cat > app/tokenomics/page.tsx << 'TOKENEOF'
'use client';

import Link from 'next/link';
import WalletButton from '@/components/WalletButton';

export default function Tokenomics() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="p-6 flex justify-between items-center border-b border-gray-200">
        <div className="flex gap-6 items-center">
          <Link href="/">
            <h1 className="text-3xl font-bold text-blue-600 cursor-pointer">BASED Reserve</h1>
          </Link>
          <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600">How It Works</Link>
          <Link href="/tokenomics" className="text-blue-600 font-bold">Tokenomics</Link>
          <Link href="/about-based" className="text-gray-700 hover:text-blue-600">About $BSOL</Link>
          <Link href="/faq" className="text-gray-700 hover:text-blue-600">FAQ</Link>
        </div>
        <WalletButton />
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 text-gray-900">$BSOL Tokenomics</h1>
          <p className="text-2xl text-gray-600">Revenue-Backed. Deflationary. Community-Owned.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 border border-blue-200 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Token Supply</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 mb-1">Total Supply</p>
                <p className="text-4xl font-bold text-blue-600">1,000,000,000</p>
                <p className="text-sm text-gray-500">1 Billion $BSOL tokens</p>
              </div>
              <div className="mt-6">
                <p className="text-gray-600 mb-1">Circulating at Launch</p>
                <p className="text-4xl font-bold text-green-600">800,000,000</p>
                <p className="text-sm text-gray-500">80% immediately available</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Token Allocation</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-green-200 pb-2">
                <span className="text-gray-700 font-medium">Liquidity Pool</span>
                <span className="text-green-600 font-bold">60%</span>
              </div>
              <div className="flex justify-between items-center border-b border-green-200 pb-2">
                <span className="text-gray-700 font-medium">Community Treasury</span>
                <span className="text-green-600 font-bold">20%</span>
              </div>
              <div className="flex justify-between items-center border-b border-green-200 pb-2">
                <span className="text-gray-700 font-medium">Team (2yr vest)</span>
                <span className="text-green-600 font-bold">10%</span>
              </div>
              <div className="flex justify-between items-center border-b border-green-200 pb-2">
                <span className="text-gray-700 font-medium">Marketing</span>
                <span className="text-green-600 font-bold">5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Development</span>
                <span className="text-green-600 font-bold">5%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 rounded-lg text-white mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Revenue Distribution Model</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold mb-3">40%</div>
              <h3 className="text-xl font-bold mb-2">Buyback & Burn</h3>
              <p className="text-blue-100">Protocol revenue used to buy $BSOL from market and burn permanently</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-3">40%</div>
              <h3 className="text-xl font-bold mb-2">Staking Rewards</h3>
              <p className="text-blue-100">Distributed to members based on account tier and deposit duration</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-3">20%</div>
              <h3 className="text-xl font-bold mb-2">Protocol Development</h3>
              <p className="text-blue-100">Platform maintenance, security audits, and new features</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">Revenue Sources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Deposit Fees</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">0.1%</p>
              <p className="text-gray-600">Small fee on all deposits to fund protocol operations</p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Withdrawal Penalties</h3>
              <p className="text-3xl font-bold text-orange-600 mb-2">5-25%</p>
              <p className="text-gray-600">Early withdrawal fees decrease over time, rewarding commitment</p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Trading Fees</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">0.3%</p>
              <p className="text-gray-600">Standard DEX trading fees from $BSOL liquidity pools</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Deflationary Mechanism</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Unlike inflationary tokens that constantly increase supply, $BSOL implements aggressive deflationary tokenomics:
            </p>
            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Automatic Buyback & Burn</h3>
              <p className="text-gray-700">
                40% of ALL protocol revenue is automatically used to purchase $BSOL tokens from the open market and burn them permanently. 
                This creates constant buy pressure while reducing total supply - a proven model used by successful DeFi protocols 
                generating millions in revenue.
              </p>
            </div>
            <div className="bg-white border-l-4 border-green-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Math is Simple</h3>
              <p className="text-gray-700">
                Decreasing supply + steady demand = natural price appreciation. As the protocol grows and more revenue flows through, 
                more tokens are burned, making remaining tokens more scarce and valuable.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Governance Rights</h2>
          <p className="text-gray-700 mb-6">
            $BSOL holders participate in protocol governance, voting on key decisions:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-bold text-gray-900 mb-1">Fee Structure Changes</p>
              <p className="text-sm text-gray-600">Adjust deposit fees, withdrawal penalties, and revenue distribution</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-bold text-gray-900 mb-1">New Features</p>
              <p className="text-sm text-gray-600">Vote on platform upgrades and new banking services</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-bold text-gray-900 mb-1">Treasury Allocation</p>
              <p className="text-sm text-gray-600">Decide how community treasury funds are deployed</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-bold text-gray-900 mb-1">Partnership Approvals</p>
              <p className="text-sm text-gray-600">Review and approve strategic partnerships and integrations</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-xl">
              Open Your Account
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
TOKENEOF

echo "✅ Tokenomics updated"

# Update HOW IT WORKS - Remove emojis
echo "📝 Removing emojis from How It Works..."
cat > app/how-it-works/page.tsx << 'HOWITWORKSEOF'
'use client';

import Link from 'next/link';
import WalletButton from '@/components/WalletButton';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="p-6 flex justify-between items-center border-b border-gray-200">
        <div className="flex gap-6 items-center">
          <Link href="/">
            <h1 className="text-3xl font-bold text-blue-600 cursor-pointer">BASED Reserve</h1>
          </Link>
          <Link href="/how-it-works" className="text-blue-600 font-bold">How It Works</Link>
          <Link href="/tokenomics" className="text-gray-700 hover:text-blue-600">Tokenomics</Link>
          <Link href="/about-based" className="text-gray-700 hover:text-blue-600">About $BSOL</Link>
          <Link href="/faq" className="text-gray-700 hover:text-blue-600">FAQ</Link>
        </div>
        <WalletButton />
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <h1 className="text-6xl font-bold mb-4 text-center text-gray-900">How It Works</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">Earn competitive interest through tiered accounts</p>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Account Tier System</h2>
          <p className="text-gray-700 mb-6 text-lg">
            The longer you maintain your deposits, the higher your account tier. Higher tiers provide increased interest multipliers.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">Basic Account</h3>
                <span className="text-sm text-gray-600">Week 0-4</span>
              </div>
              <p className="text-gray-700 mb-2">1.0X multiplier • 8.5% APY</p>
              <p className="text-gray-600">Standard account features with base interest rate</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">Growth Account</h3>
                <span className="text-sm text-gray-600">Week 5-9</span>
              </div>
              <p className="text-gray-700 mb-2">1.5X multiplier • 12.75% APY</p>
              <p className="text-gray-600">Enhanced interest rates and priority support</p>
            </div>

            <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">Premium Account</h3>
                <span className="text-sm text-gray-600">Week 10-19</span>
              </div>
              <p className="text-gray-700 mb-2">2.0X multiplier • 17% APY</p>
              <p className="text-gray-600">Premium features with significantly higher returns</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">Elite Reserve</h3>
                <span className="text-sm text-gray-600">Week 20-49</span>
              </div>
              <p className="text-gray-700 mb-2">3.0X multiplier • 25.5% APY</p>
              <p className="text-gray-600">Elite status with VIP benefits and reduced fees</p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">Platinum Reserve</h3>
                <span className="text-sm text-gray-600">Week 50-99</span>
              </div>
              <p className="text-gray-700 mb-2">5.0X multiplier • 42.5% APY</p>
              <p className="text-gray-600">Maximum benefits with no withdrawal fees</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">Chairman's Circle</h3>
                <span className="text-sm text-gray-600">Week 100+</span>
              </div>
              <p className="text-gray-700 mb-2">10X multiplier • 85% APY</p>
              <p className="text-gray-600">Lifetime rewards and full governance rights</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-blue-50 border border-blue-200 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Getting Started</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Connect Your Wallet</h3>
                <p className="text-gray-700">Install Phantom or any Solana-compatible wallet and connect to BASED Reserve</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Make Your First Deposit</h3>
                <p className="text-gray-700">Deposit SOL or $BSOL tokens to open your account and start earning interest</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Watch Your Account Grow</h3>
                <p className="text-gray-700">Earn interest automatically and advance through account tiers over time</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center">
          <Link href="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-xl">
              Open Your Account
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
HOWITWORKSEOF

echo "✅ How It Works updated (emojis removed)"

# Remove leaderboard from navigation in all files
echo "🗑️  Removing leaderboard links from navigation..."

# This will be handled by updating the main page next

echo ""
echo "🎉 All updates complete!"
echo ""
echo "Changes made:"
echo "  ✅ Tokenomics - full professional rebrand"
echo "  ✅ How It Works - emojis removed"
echo "  ✅ Ready to remove leaderboard links"

