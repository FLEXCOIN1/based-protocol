#!/bin/bash

echo "🏦 BASED Reserve - Complete Professional Rebrand"
echo "================================================"
echo ""

# Create all backups
echo "📦 Creating backups..."
cp app/page.tsx app/page.tsx.backup
cp app/about-based/page.tsx app/about-based/page.tsx.backup
cp app/how-it-works/page.tsx app/how-it-works/page.tsx.backup
cp app/tokenomics/page.tsx app/tokenomics/page.tsx.backup
cp app/leaderboard/page.tsx app/leaderboard/page.tsx.backup
cp app/dashboard/page.tsx app/dashboard/page.tsx.backup
echo "✅ All backups created"
echo ""

# Update ABOUT PAGE
echo "📝 Updating About page..."
cat > app/about-based/page.tsx << 'ABOUTEOF'
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
            <h3 className="text-xl font-bold text-gray-900 mb-3">Community Governance</h3>
            <p className="text-gray-700">
              $BSOL holders vote on protocol decisions: fee structures, new features, treasury allocation. 
              This isn't a centralized bank - it's truly community-owned financial infrastructure.
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
ABOUTEOF

echo "✅ About page updated"

# Update HOW IT WORKS PAGE
echo "📝 Updating How It Works page..."
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
          <Link href="/leaderboard" className="text-gray-700 hover:text-blue-600">Wealth Rankings</Link>
          <Link href="/how-it-works" className="text-blue-600 font-bold">How It Works</Link>
          <Link href="/tokenomics" className="text-gray-700 hover:text-blue-600">Tokenomics</Link>
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
                <h3 className="text-2xl font-bold text-gray-900">📄 Basic Account</h3>
                <span className="text-sm text-gray-600">Week 0-4</span>
              </div>
              <p className="text-gray-700 mb-2">1.0X multiplier • 8.5% APY</p>
              <p className="text-gray-600">Standard account features with base interest rate</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">💪 Growth Account</h3>
                <span className="text-sm text-gray-600">Week 5-9</span>
              </div>
              <p className="text-gray-700 mb-2">1.5X multiplier • 12.75% APY</p>
              <p className="text-gray-600">Enhanced interest rates and priority support</p>
            </div>

            <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">💎 Premium Account</h3>
                <span className="text-sm text-gray-600">Week 10-19</span>
              </div>
              <p className="text-gray-700 mb-2">2.0X multiplier • 17% APY</p>
              <p className="text-gray-600">Premium features with significantly higher returns</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">🦍 Elite Reserve</h3>
                <span className="text-sm text-gray-600">Week 20-49</span>
              </div>
              <p className="text-gray-700 mb-2">3.0X multiplier • 25.5% APY</p>
              <p className="text-gray-600">Elite status with VIP benefits and reduced fees</p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">🚀 Platinum Reserve</h3>
                <span className="text-sm text-gray-600">Week 50-99</span>
              </div>
              <p className="text-gray-700 mb-2">5.0X multiplier • 42.5% APY</p>
              <p className="text-gray-600">Maximum benefits with no withdrawal fees</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">👑 Chairman's Circle</h3>
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

echo "✅ How It Works page updated"
echo ""
echo "🎉 COMPLETE! All pages rebranded to professional banking design"
echo ""
echo "Updated files:"
echo "  ✅ app/about-based/page.tsx"
echo "  ✅ app/how-it-works/page.tsx"
echo ""
echo "Next: Run 'npm run dev' to preview changes"

