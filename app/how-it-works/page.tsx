'use client';

import Link from 'next/link';
import WalletButton from '@/components/WalletButton';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">BASED Reserve</h1>
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium text-blue-600">How It Works</Link>
            <Link href="/tokenomics" className="text-sm font-medium text-gray-600 hover:text-blue-600">Tokenomics</Link>
            <Link href="/growth" className="text-sm font-medium text-gray-600 hover:text-blue-600">Growth Strategy</Link>
            <Link href="/about-based" className="text-sm font-medium text-gray-600 hover:text-blue-600">About $BSOL</Link>
            <Link href="/faq" className="text-sm font-medium text-gray-600 hover:text-blue-600">FAQ</Link>
          </div>
          <WalletButton />
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-4 text-center text-gray-900">How It Works</h1>
        <p className="text-xl text-gray-600 mb-16 text-center">Choose your staking strategy: conservative or aggressive</p>

        {/* Staking Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Two Staking Options</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border-2 border-blue-500 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">💎</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">SOL Staking</h3>
                <p className="text-blue-600 font-semibold">Conservative Approach</p>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium">Base APY:</span>
                  <span className="font-bold text-green-600">8.5%</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium">Max APY:</span>
                  <span className="font-bold text-green-600">85%</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-bold text-blue-600">Lower</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Rewards In:</span>
                  <span className="font-bold">SOL</span>
                </div>
              </div>
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>Best for:</strong> Long-term holders who want steady returns on Solana's native token.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-purple-500 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🔥</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">$BSOL Staking</h3>
                <p className="text-purple-600 font-semibold">Aggressive Approach</p>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium">Base APY:</span>
                  <span className="font-bold text-green-600">50-100%</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium">Max APY:</span>
                  <span className="font-bold text-green-600">500-1000%</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-bold text-orange-600">Higher</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Rewards In:</span>
                  <span className="font-bold text-purple-600">$BSOL</span>
                </div>
              </div>
              <div className="mt-6 bg-purple-50 border border-purple-200 rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>Best for:</strong> Risk-tolerant yield farmers who want maximum returns and believe in the protocol.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
            <p className="text-gray-700">
              <strong>Similar to traditional crypto banks (like USCR), but with bigger returns and more risk.</strong> We offer 
              self-custody and higher yields. They offer insurance and lower yields. Choose based on your risk tolerance.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <p className="text-gray-700 mb-8 text-lg">
            Both SOL and $BSOL staking use the same tier progression. The longer you stake, the higher your multiplier:
          </p>

          <div className="space-y-4">
            <div className="bg-white border-l-4 border-gray-400 rounded-r-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">Basic Account</h3>
                <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded">Week 0-4</span>
              </div>
              <p className="text-gray-700 font-semibold">1.0X multiplier</p>
            </div>

            <div className="bg-white border-l-4 border-blue-500 rounded-r-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">Growth Account</h3>
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded">Week 5-9</span>
              </div>
              <p className="text-gray-700 font-semibold">1.5X multiplier</p>
            </div>

            <div className="bg-white border-l-4 border-blue-600 rounded-r-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">Premium Account</h3>
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded">Week 10-19</span>
              </div>
              <p className="text-gray-700 font-semibold">2.0X multiplier</p>
            </div>

            <div className="bg-white border-l-4 border-green-600 rounded-r-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">Elite Reserve</h3>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded">Week 20-49</span>
              </div>
              <p className="text-gray-700 font-semibold">3.0X multiplier</p>
            </div>

            <div className="bg-white border-l-4 border-purple-600 rounded-r-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">Platinum Reserve</h3>
                <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded">Week 50-99</span>
              </div>
              <p className="text-gray-700 font-semibold">5.0X multiplier</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-600 rounded-r-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">Chairman's Circle</h3>
                <span className="text-sm font-medium text-yellow-700 bg-yellow-100 px-3 py-1 rounded">Week 100+</span>
              </div>
              <p className="text-gray-700 font-semibold">10X multiplier</p>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-16">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Getting Started</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Connect Your Wallet</h3>
                  <p className="text-gray-700">Install Phantom or any Solana wallet and connect to BASED Reserve.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Choose Your Pool</h3>
                  <p className="text-gray-700">Select SOL (conservative) or $BSOL (aggressive) based on your risk tolerance.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Stake Your Assets</h3>
                  <p className="text-gray-700">Deposit your tokens and immediately start earning interest that compounds automatically.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <p className="text-gray-700">Your account tier increases automatically as weeks pass, unlocking higher multipliers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Withdrawal Policy */}
        <section className="mb-16">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Withdrawal Policy</h2>
            <p className="text-gray-700 mb-6">
              You maintain full control of your assets. Early withdrawals incur fees to ensure platform stability:
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Week 1-4</span>
                  <span className="font-bold text-red-600">25% fee</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Month 1-3</span>
                  <span className="font-bold text-orange-600">15% fee</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Month 3-6</span>
                  <span className="font-bold text-yellow-600">10% fee</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Month 6-12</span>
                  <span className="font-bold text-blue-600">5% fee</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Year 1+</span>
                  <span className="font-bold text-green-600">No fee</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              All withdrawal fees are redistributed to remaining stakers, strengthening returns for long-term participants.
            </p>
          </div>
        </section>

        <div className="text-center">
          <Link href="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg">
              Start Staking
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
