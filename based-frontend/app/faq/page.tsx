'use client';

import Link from 'next/link';
import WalletButton from '@/components/WalletButton';

export default function FAQ() {
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
            <Link href="/growth" className="text-sm font-medium text-gray-600 hover:text-blue-600">Growth Strategy</Link>
            <Link href="/about-based" className="text-sm font-medium text-gray-600 hover:text-blue-600">About $BSOL</Link>
            <Link href="/faq" className="text-sm font-medium text-blue-600">FAQ</Link>
          </div>
          <WalletButton />
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 mb-12">Everything you need to know about BASED Reserve</p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">What is BASED Reserve?</h2>
            <p className="text-gray-700">
              BASED Reserve is a decentralized social banking platform built on Solana blockchain. Deposit SOL or $BSOL tokens, 
              earn competitive interest rates up to 85% APY, and build wealth through our tiered account system. The longer you 
              maintain deposits, the higher your account tier and interest multiplier grows.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Why Decentralized Banking Now?</h2>
            <p className="text-gray-700 mb-4">
              In April 2025, U.S. banking regulators (Federal Reserve, OCC, FDIC) made a historic policy shift, allowing traditional 
              banks to custody and service cryptocurrency. This reversed years of restrictive guidance and signaled that digital assets 
              are now recognized as legitimate financial instruments.
            </p>
            <p className="text-gray-700 mb-4">
              While traditional banks can now offer crypto services, they bring the same problems: account minimums, monthly fees, 
              overdraft charges, geographic restrictions, and centralized control.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>BASED Reserve is the decentralized alternative.</strong> We complement traditional crypto banking services like{' '}
              <a href="https://uscr.xyz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                US Crypto Reserve
              </a>{' '}
              by offering what traditional banks cannot: no account minimums, no fees, no credit checks, no geographic restrictions, 
              and community-owned profit sharing.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r mt-4">
              <p className="text-sm text-gray-700">
                <strong>Your Choice:</strong> Traditional banking with custody and insurance, or decentralized staking with full 
                self-custody and higher yields. Both models serve different needs.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">How do I earn interest?</h2>
            <p className="text-gray-700 mb-4">
              You earn 8.5% base APY on deposited assets. Your account tier increases based on deposit duration, providing higher multipliers:
            </p>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span>Basic Account (Week 0-4)</span>
                <span className="font-semibold">1.0X • 8.5% APY</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span>Growth Account (Week 5-9)</span>
                <span className="font-semibold">1.5X • 12.75% APY</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span>Premium Account (Week 10-19)</span>
                <span className="font-semibold">2.0X • 17% APY</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span>Elite Reserve (Week 20-49)</span>
                <span className="font-semibold">3.0X • 25.5% APY</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span>Platinum Reserve (Week 50-99)</span>
                <span className="font-semibold">5.0X • 42.5% APY</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Chairman's Circle (Week 100+)</span>
                <span className="font-semibold text-blue-600">10X • 85% APY</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Can I make early withdrawals?</h2>
            <p className="text-gray-700 mb-4">
              Yes, you maintain full control of your assets. However, early withdrawals incur fees to ensure platform stability:
            </p>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span>Week 1-4</span>
                <span className="text-red-600 font-semibold">25% fee</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span>Month 1-3</span>
                <span className="text-orange-600 font-semibold">15% fee</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span>Month 3-6</span>
                <span className="text-yellow-600 font-semibold">10% fee</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span>Month 6-12</span>
                <span className="text-blue-600 font-semibold">5% fee</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Year 1+</span>
                <span className="text-green-600 font-semibold">0% fee</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4">
              All withdrawal fees are redistributed to remaining members through the reward pool.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Are my assets secure?</h2>
            <p className="text-gray-700 mb-4">Your assets are secured through multiple layers:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Security Audit:</strong> Independent audit scoring 9/10 with all critical issues resolved</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Self-Custody:</strong> You maintain full control of your private keys at all times</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Blockchain Transparency:</strong> All transactions publicly verifiable on Solana</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Immutable Code:</strong> Smart contract cannot be modified after deployment</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">When is mainnet launch?</h2>
            <p className="text-gray-700">
              We're currently conducting final testing on Solana devnet. Mainnet launch is scheduled for <strong>December 3, 2025</strong>. 
              Join early to secure your Founders Bonus and participate in shaping the platform's future.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">How do I get started?</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <p className="font-semibold text-gray-900">Install a Solana wallet</p>
                  <p className="text-sm text-gray-600">Phantom recommended for beginners</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <p className="font-semibold text-gray-900">Connect your wallet</p>
                  <p className="text-sm text-gray-600">Click "Connect Wallet" in the navigation</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <p className="font-semibold text-gray-900">Make your first deposit</p>
                  <p className="text-sm text-gray-600">Start earning interest immediately</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
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
