#!/bin/bash

echo "📱 Complete mobile fix: hamburger menu + remove leaderboard + fix countdown..."

# First, let's create a mobile-friendly navigation component
cat > components/MobileNav.tsx << 'MOBILENAV'
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <button onClick={() => setIsOpen(false)} className="mb-8 text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <nav className="flex flex-col gap-4">
            <Link href="/how-it-works" className="text-lg text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>
              How It Works
            </Link>
            <Link href="/tokenomics" className="text-lg text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Tokenomics
            </Link>
            <Link href="/whitepaper" className="text-lg text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Whitepaper
            </Link>
            <a href="https://github.com/FLEXCOIN1/based-protocol" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-blue-600 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
            <Link href="/growth" className="text-lg text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Growth
            </Link>
            <Link href="/about-based" className="text-lg text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/faq" className="text-lg text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>
              FAQ
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
MOBILENAV

echo "✅ Mobile navigation component created"

# Now update the homepage to use mobile nav and fix countdown
cp app/page.tsx app/page.tsx.backup_mobile

cat > app/page.tsx << 'HOMEPAGE'
'use client';

import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import WalletButton from '@/components/WalletButton';
import MobileNav from '@/components/MobileNav';
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
      const launchDate = new Date('November 18, 2025 00:00:00 UTC').getTime();
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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
      <nav className="bg-white border-b border-gray-200 px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-xl md:text-2xl font-bold text-blue-600 cursor-pointer">BASED Reserve</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            <Link href="/how-it-works" className="text-sm font-medium text-gray-600 hover:text-blue-600">How It Works</Link>
            <Link href="/tokenomics" className="text-sm font-medium text-gray-600 hover:text-blue-600">Tokenomics</Link>
            <Link href="/whitepaper" className="text-sm font-medium text-gray-600 hover:text-blue-600">Whitepaper</Link>
            <a href="https://github.com/FLEXCOIN1/based-protocol" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 hover:text-blue-600 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
            <Link href="/growth" className="text-sm font-medium text-gray-600 hover:text-blue-600">Growth</Link>
            <Link href="/about-based" className="text-sm font-medium text-gray-600 hover:text-blue-600">About</Link>
            <Link href="/faq" className="text-sm font-medium text-gray-600 hover:text-blue-600">FAQ</Link>
          </div>

          {/* Mobile Navigation + Wallet */}
          <div className="flex items-center gap-2">
            <WalletButton />
            <MobileNav />
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-500 bg-opacity-30 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
                  Launching Monday, November 18, 2025
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                  Decentralized Social Banking on Solana
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">
                  Earn competitive yields on your crypto deposits. No fees. No minimums. Full self-custody.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Link href="/how-it-works">
                    <button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold">
                      Learn More
                    </button>
                  </Link>
                  <Link href="/whitepaper">
                    <button className="w-full sm:w-auto bg-blue-500 bg-opacity-30 hover:bg-opacity-40 border border-white border-opacity-30 px-6 py-3 rounded-lg font-semibold">
                      Read Whitepaper
                    </button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Launch Countdown</h3>
                <div className="grid grid-cols-4 gap-2 md:gap-4">
                  <div className="text-center">
                    <div className="text-2xl md:text-4xl font-bold text-gray-900">{timeLeft.days}</div>
                    <div className="text-xs md:text-sm text-gray-600">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-4xl font-bold text-gray-900">{timeLeft.hours}</div>
                    <div className="text-xs md:text-sm text-gray-600">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-4xl font-bold text-gray-900">{timeLeft.minutes}</div>
                    <div className="text-xs md:text-sm text-gray-600">Min</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-4xl font-bold text-gray-900">{timeLeft.seconds}</div>
                    <div className="text-xs md:text-sm text-gray-600">Sec</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">9/10</div>
                <div className="text-xs md:text-sm text-gray-600">Security Audit</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">Up to 85%</div>
                <div className="text-xs md:text-sm text-gray-600">Max APY</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">2X</div>
                <div className="text-xs md:text-sm text-gray-600">Founder Bonus</div>
              </div>
              <div>
                <a href="https://github.com/FLEXCOIN1/based-protocol" target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center gap-1 text-xs md:text-sm text-gray-600 hover:text-blue-600">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold text-gray-900">Open Source</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Pool Selector */}
        {publicKey && (
          <div className="bg-gradient-to-br from-purple-900 via-black to-blue-900 py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              <PoolSelector 
                selectedPool={selectedPool}
                onPoolChange={setSelectedPool}
              />
            </div>
          </div>
        )}

        {/* Calculator */}
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Calculate Your Returns</h2>
            <p className="text-base md:text-lg text-gray-600">See how your deposits grow over time</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
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

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 md:p-6">
              <div className="grid grid-cols-3 gap-3 md:gap-6 mb-4 md:mb-6">
                <div className="text-center">
                  <div className="text-xs md:text-sm text-gray-600 mb-1">Multiplier</div>
                  <div className="text-xl md:text-3xl font-bold text-blue-600">{returns.multiplier}X</div>
                </div>
                <div className="text-center">
                  <div className="text-xs md:text-sm text-gray-600 mb-1">APY</div>
                  <div className="text-xl md:text-3xl font-bold text-green-600">{returns.effectiveAPY}%</div>
                </div>
                <div className="text-center">
                  <div className="text-xs md:text-sm text-gray-600 mb-1">Interest</div>
                  <div className="text-xl md:text-3xl font-bold text-purple-600">{returns.totalReturn}</div>
                </div>
              </div>
              <div className="border-t border-gray-300 pt-4 md:pt-6 text-center">
                <div className="text-xs md:text-sm text-gray-600 mb-2">Final Value</div>
                <div className="text-3xl md:text-5xl font-bold text-gray-900">{returns.finalAmount} SOL</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features - responsive grid */}
        <div className="bg-gray-50 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Why BASED Reserve</h2>
              <p className="text-base md:text-lg text-gray-600">Decentralized banking built for the crypto economy</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">Join the first 100 founding members and secure your 2X bonus</p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link href="/how-it-works">
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg">
                Learn How It Works
              </button>
            </Link>
            <Link href="/whitepaper">
              <button className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg">
                Read Whitepaper
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
HOMEPAGE

echo "✅ Mobile-responsive homepage complete"
echo "✅ Hamburger menu added"
echo "✅ Countdown fixed with proper contrast"
echo "✅ All text sizes responsive"

