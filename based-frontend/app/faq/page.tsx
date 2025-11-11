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
              BASED Reserve is a decentralized staking platform built on Solana blockchain. Stake SOL or $BSOL tokens 
              to earn competitive yields up to 85% APY through our tiered account system. The longer you stake, the higher 
              your tier and multiplier grows.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Why Choose BASED Reserve Over Traditional Crypto Banks?</h2>
            <p className="text-gray-700 mb-4">
              In April 2025, U.S. regulators approved traditional banks to custody crypto. This created two paths:
            </p>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r">
                <p className="font-bold text-gray-900 mb-2">Traditional Crypto Banks (like USCR)</p>
                <p className="text-gray-700 text-sm">Lower yields (1-4% APY), regulated custody, insured deposits, lower risk</p>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r">
                <p className="font-bold text-gray-900 mb-2">BASED Reserve (Aggressive DeFi Staking)</p>
                <p className="text-gray-700 text-sm">Higher yields (8.5-85% APY), self-custody, uninsured, higher risk but bigger returns</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              <strong>We're similar to USCR in concept—both offer crypto banking services.</strong> The difference? We offer 
              significantly higher returns in exchange for taking on more risk. If you want safety and insurance, use traditional 
              crypto banks. If you want maximum yields and accept smart contract risk, stake with us.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">SOL vs $BSOL Staking - Which Should I Choose?</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-bold text-gray-900 mb-2">SOL Staking (Conservative)</p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Base APY: 8.5% (up to 85% with tier multipliers)</li>
                  <li>• Lower risk - staking the native Solana token</li>
                  <li>• Rewards paid in SOL</li>
                  <li>• Good for: Long-term holders, risk-averse stakers</li>
                </ul>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-bold text-gray-900 mb-2">$BSOL Staking (Aggressive)</p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Base APY: 50-100% (varies based on protocol revenue)</li>
                  <li>• Higher risk - protocol token with market volatility</li>
                  <li>• Rewards paid in $BSOL</li>
                  <li>• Good for: Risk-seeking yield farmers, protocol believers</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded p-4">
              <p className="text-sm text-gray-700">
                <strong>Risk Warning:</strong> $BSOL staking offers higher rewards but comes with token price volatility. 
                SOL staking is more conservative. Choose based on your risk tolerance.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">How do I earn interest?</h2>
            <p className="text-gray-700 mb-4">
              Both SOL and $BSOL staking use the same tier system. Your account tier increases based on how long you stake:
            </p>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span>Basic Account (Week 0-4)</span>
                <span className="font-semibold">1.0X multiplier</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span>Growth Account (Week 5-9)</span>
                <span className="font-semibold">1.5X multiplier</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span>Premium Account (Week 10-19)</span>
                <span className="font-semibold">2.0X multiplier</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span>Elite Reserve (Week 20-49)</span>
                <span className="font-semibold">3.0X multiplier</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span>Platinum Reserve (Week 50-99)</span>
                <span className="font-semibold">5.0X multiplier</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Chairman's Circle (Week 100+)</span>
                <span className="font-semibold text-blue-600">10X multiplier</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              For SOL staking: 8.5% base × your multiplier. For $BSOL staking: 50-100% base × your multiplier.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Can I withdraw early?</h2>
            <p className="text-gray-700 mb-4">
              Yes, you maintain full control. However, early withdrawals incur fees to ensure platform stability:
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
              All withdrawal fees are redistributed to remaining stakers through the reward pool.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Is my crypto secure?</h2>
            <p className="text-gray-700 mb-4">Your assets are secured through multiple layers:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Security Audit:</strong> 9/10 score with all critical issues resolved</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Self-Custody:</strong> You keep your private keys at all times</span>
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
            <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded p-4">
              <p className="text-sm text-gray-700">
                <strong>Important:</strong> Unlike traditional banks, we are NOT FDIC insured. Your deposits are secured by 
                smart contracts, not government insurance. Higher risk = higher reward.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">When is mainnet launch?</h2>
            <p className="text-gray-700">
              We're currently testing on Solana devnet. Mainnet launch is scheduled for <strong>November 18, 2025</strong>. 
              First 100 stakers receive a permanent 2X Founders Bonus on all rewards.
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
                  <p className="font-semibold text-gray-900">Choose SOL or $BSOL staking</p>
                  <p className="text-sm text-gray-600">Pick conservative (SOL) or aggressive ($BSOL) based on risk tolerance</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <p className="font-semibold text-gray-900">Start earning</p>
                  <p className="text-sm text-gray-600">Your rewards compound automatically as your tier increases</p>
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
