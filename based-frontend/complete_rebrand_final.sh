#!/bin/bash

echo "🏦 BASED Reserve - Final Professional Rebrand"
echo "=============================================="
echo ""

# Backup everything
echo "📦 Creating backups..."
cp app/page.tsx app/page.tsx.backup_final
cp app/faq/page.tsx app/faq/page.tsx.backup_final
cp app/tokenomics/page.tsx app/tokenomics/page.tsx.backup_final
cp app/how-it-works/page.tsx app/how-it-works/page.tsx.backup_final
echo "✅ Backups created"
echo ""

# ====================
# HOME PAGE
# ====================
echo "📝 Updating Homepage..."
cat > app/page.tsx << 'HOMEEOF'
'use client';

import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import WalletButton from '@/components/WalletButton';
import PoolSelector from '@/components/PoolSelector';
import { useState, useEffect } from 'react';
import { getStakeInfo } from '@/lib/staking';
import Link from 'next/link';

type PoolType = 'sol' | 'based';

export default function Home() {
  const { publicKey } = useWallet();
  const { connection } = useConnection();
  const [mounted, setMounted] = useState(false);
  const [selectedPool, setSelectedPool] = useState<PoolType>('sol');
  const [stakeData, setStakeData] = useState<any>(null);
  const [calcAmount, setCalcAmount] = useState('100');
  const [calcWeeks, setCalcWeeks] = useState('52');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const launchDate = new Date('2025-12-03T00:00:00Z').getTime();
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (publicKey && mounted) {
      loadStakeInfo();
    }
  }, [publicKey, mounted]);

  const loadStakeInfo = async () => {
    if (!publicKey) return;
    
    try {
      const info = await getStakeInfo(connection, publicKey);
      setStakeData(info);
    } catch (error) {
      console.error('Error loading stake info:', error);
    }
  };

  const calculateReturns = () => {
    const amount = parseFloat(calcAmount) || 0;
    const weeks = parseFloat(calcWeeks) || 0;
    const baseAPY = 0.085;
    
    let multiplier = 1.0;
    if (weeks >= 100) multiplier = 10.0;
    else if (weeks >= 50) multiplier = 5.0;
    else if (weeks >= 20) multiplier = 3.0;
    else if (weeks >= 10) multiplier = 2.0;
    else if (weeks >= 5) multiplier = 1.5;
    
    const effectiveAPY = baseAPY * multiplier;
    const weeklyRate = effectiveAPY / 52;
    const totalReturn = amount * weeklyRate * weeks;
    const finalAmount = amount + totalReturn;
    
    return {
      multiplier,
      effectiveAPY: (effectiveAPY * 100).toFixed(2),
      totalReturn: totalReturn.toFixed(2),
      finalAmount: finalAmount.toFixed(2)
    };
  };

  const returns = calculateReturns();

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
            <Link href="/faq" className="text-sm font-medium text-gray-600 hover:text-blue-600">FAQ</Link>
          </div>
          <WalletButton />
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-500 bg-opacity-30 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Launching December 3, 2025
                </div>
                <h1 className="text-5xl font-bold mb-6 leading-tight">
                  Decentralized Social Banking on Solana
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Earn competitive yields on your crypto deposits. No fees. No minimums. Full self-custody.
                </p>
                <div className="flex gap-4">
                  <Link href="/how-it-works">
                    <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold">
                      Learn More
                    </button>
                  </Link>
                  <Link href="/growth">
                    <button className="bg-blue-500 bg-opacity-30 hover:bg-opacity-40 border border-white border-opacity-30 px-6 py-3 rounded-lg font-semibold">
                      Growth Strategy
                    </button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Launch Countdown</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold">{timeLeft.days}</div>
                    <div className="text-sm text-blue-200">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold">{timeLeft.hours}</div>
                    <div className="text-sm text-blue-200">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold">{timeLeft.minutes}</div>
                    <div className="text-sm text-blue-200">Minutes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold">{timeLeft.seconds}</div>
                    <div className="text-sm text-blue-200">Seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">9/10</div>
                <div className="text-sm text-gray-600">Security Audit Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">Up to 85%</div>
                <div className="text-sm text-gray-600">Maximum APY</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">2X</div>
                <div className="text-sm text-gray-600">Founder Bonus (First 100)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Calculator */}
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Calculate Your Returns</h2>
            <p className="text-lg text-gray-600">See how your deposits grow over time</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Deposit Amount (SOL)</label>
                <input
                  type="number"
                  value={calcAmount}
                  onChange={(e) => setCalcAmount(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration (Weeks)</label>
                <input
                  type="number"
                  value={calcWeeks}
                  onChange={(e) => setCalcWeeks(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="52"
                />
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Account Multiplier</div>
                  <div className="text-3xl font-bold text-blue-600">{returns.multiplier}X</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Effective APY</div>
                  <div className="text-3xl font-bold text-green-600">{returns.effectiveAPY}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Total Interest</div>
                  <div className="text-3xl font-bold text-purple-600">{returns.totalReturn} SOL</div>
                </div>
              </div>
              <div className="border-t border-gray-300 pt-6 text-center">
                <div className="text-sm text-gray-600 mb-2">Final Account Value</div>
                <div className="text-5xl font-bold text-gray-900">{returns.finalAmount} SOL</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why BASED Reserve</h2>
              <p className="text-lg text-gray-600">Decentralized banking built for the crypto economy</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Audited</h3>
                <p className="text-sm text-gray-600">9/10 security audit. All critical issues resolved.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Fees</h3>
                <p className="text-sm text-gray-600">Zero monthly fees. No account minimums.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">High Yields</h3>
                <p className="text-sm text-gray-600">Competitive APY rates up to 85% based on tier.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Access</h3>
                <p className="text-sm text-gray-600">Open to anyone, anywhere. No KYC required.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">Join the first 100 founding members and secure your 2X bonus</p>
          <Link href="/how-it-works">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg">
              Learn How It Works
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
HOMEEOF

echo "✅ Homepage updated"

# ====================
# FAQ PAGE
# ====================
echo "📝 Updating FAQ..."
cat > app/faq/page.tsx << 'FAQEOF'
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
FAQEOF

echo "✅ FAQ updated"

echo ""
echo "🎉 Phase 1 complete (Home + FAQ)"
echo "Run script again to continue with remaining pages..."

