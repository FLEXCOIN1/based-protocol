#!/bin/bash

echo "🏦 Starting BASED Reserve complete rebrand..."

# Backup all files
cp app/page.tsx app/page.tsx.backup
cp app/faq/page.tsx app/faq/page.tsx.backup
cp app/about-based/page.tsx app/about-based/page.tsx.backup
cp app/how-it-works/page.tsx app/how-it-works/page.tsx.backup
cp app/tokenomics/page.tsx app/tokenomics/page.tsx.backup
cp app/leaderboard/page.tsx app/leaderboard/page.tsx.backup

echo "✅ Backups created"

# Update FAQ page
cat > app/faq/page.tsx << 'FAQEOF'
'use client';

import Link from 'next/link';
import WalletButton from '@/components/WalletButton';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="p-6 flex justify-between items-center border-b border-gray-200">
        <div className="flex gap-6 items-center">
          <Link href="/">
            <h1 className="text-3xl font-bold text-blue-600 cursor-pointer">BASED Reserve</h1>
          </Link>
          <Link href="/leaderboard" className="text-gray-700 hover:text-blue-600">Wealth Rankings</Link>
          <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600">How It Works</Link>
          <Link href="/tokenomics" className="text-gray-700 hover:text-blue-600">Tokenomics</Link>
          <Link href="/faq" className="text-blue-600 font-bold">FAQ</Link>
        </div>
        <WalletButton />
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 mb-12">Everything you need to know about BASED Reserve</p>

        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">What is BASED Reserve?</h2>
            <p className="text-gray-700">
              BASED Reserve is a decentralized social banking platform built on Solana blockchain. Deposit your SOL or $BSOL tokens, earn competitive interest rates up to 300% APY, and build wealth through our tiered account system. The longer you maintain your deposits, the higher your account tier and interest multiplier grows. First 100 members receive a permanent 2X Founders Bonus.
            </p>
          </div>

          <div className="bg-green-50 border border-green-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Why Decentralized Social Banking Now?</h2>
            <p className="text-gray-700 mb-4">
              In April 2025, U.S. banking regulators — the Federal Reserve, OCC, and FDIC — made a historic policy shift, allowing traditional banks to custody and service cryptocurrency. This reversed years of restrictive guidance and signaled that digital assets are now recognized as a legitimate part of the financial system.
            </p>
            <p className="text-gray-700 mb-4">
              While traditional banks can now offer crypto services, they bring the same problems that have always plagued conventional banking: account minimums, monthly fees, overdraft charges, geographic restrictions, and centralized control. Banks profit billions annually from YOUR deposits while paying you near-zero interest.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>BASED Reserve is the decentralized alternative.</strong> We complement traditional crypto banking services like <a href="https://uscr.xyz/reserve" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">US Crypto Reserve</a> by offering what traditional banks cannot: no account minimums, no fees, no credit checks, no geographic restrictions, and community-owned profit sharing.
            </p>
            <div className="mt-4 bg-white border-l-4 border-green-600 p-4 rounded">
              <p className="text-sm text-gray-700">
                <strong>Your Choice:</strong> Traditional banking with fees and restrictions, or decentralized social banking with full control and transparency. BASED Reserve exists because both models serve different needs — we're here for those who want financial freedom without compromise.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">How do I earn interest?</h2>
            <p className="text-gray-700 mb-3">
              You earn 8.5% base APY on deposited assets. Your account tier increases based on deposit duration:
            </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                <span className="text-2xl">📄</span>
                <div>
                  <p className="font-bold text-gray-900">Basic Account (Week 0-4)</p>
                  <p className="text-gray-600">1.0X multiplier (8.5% APY)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                <span className="text-2xl">💎</span>
                <div>
                  <p className="font-bold text-gray-900">Premium Account (Week 10-19)</p>
                  <p className="text-gray-600">2.0X multiplier (17% APY)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded border-2 border-blue-300">
                <span className="text-2xl">👑</span>
                <div>
                  <p className="font-bold text-gray-900">Chairman's Circle (Week 100+)</p>
                  <p className="text-gray-600">10X multiplier (85% APY)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Can I make early withdrawals?</h2>
            <p className="text-gray-700 mb-3">
              Yes, you maintain full control of your assets. However, early withdrawals incur fees based on account age:
            </p>
            <div className="bg-white border border-gray-200 p-4 rounded-lg mb-3">
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between py-2 border-b">
                  <span>Week 1-4:</span>
                  <span className="text-red-600 font-bold">25% fee</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Month 6-12:</span>
                  <span className="text-blue-600 font-bold">5% fee</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Year 1+:</span>
                  <span className="text-green-600 font-bold">0% fee</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">How do I get started?</h2>
            <p className="text-gray-700 mb-3">Opening your account is straightforward:</p>
            <ol className="space-y-2 text-gray-700">
              <li className="flex gap-3"><span className="font-bold text-blue-600">1.</span><span>Install a Solana wallet (Phantom recommended)</span></li>
              <li className="flex gap-3"><span className="font-bold text-blue-600">2.</span><span>Connect your wallet on BASED Reserve</span></li>
              <li className="flex gap-3"><span className="font-bold text-blue-600">3.</span><span>Make your first deposit and start earning</span></li>
            </ol>
          </div>
        </div>

        <div className="mt-12 text-center">
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
FAQEOF

echo "✅ FAQ page updated to professional banking design"
echo "🎉 Done! Check the changes."

