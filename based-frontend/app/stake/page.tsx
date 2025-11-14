'use client';

import Link from 'next/link';
import WalletButton from '../../components/WalletButton';
import { useWallet } from '@solana/wallet-adapter-react';

export default function Stake() {
  const wallet = useWallet();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">← BASED Protocol</Link>
          <WalletButton />
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black text-white mb-6">
            Stake $BASED
          </h1>
          <p className="text-2xl text-gray-300">
            Earn revenue share from ALL protocol fees
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-700/30 border-2 border-blue-500 rounded-3xl p-8 text-center">
            <div className="text-6xl mb-4">🔓</div>
            <h3 className="text-2xl font-bold text-white mb-3">Unlock Tiers</h3>
            <p className="text-gray-300">
              10K = Aggressive tier
              <br />
              50K = Life Changing tier
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-purple-700/30 border-2 border-purple-500 rounded-3xl p-8 text-center">
            <div className="text-6xl mb-4">💰</div>
            <h3 className="text-2xl font-bold text-white mb-3">Earn Revenue</h3>
            <p className="text-gray-300">
              Get 25% of all protocol fees distributed proportionally
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-900/50 to-pink-700/30 border-2 border-pink-500 rounded-3xl p-8 text-center">
            <div className="text-6xl mb-4">💎</div>
            <h3 className="text-2xl font-bold text-white mb-3">Benefit from Burns</h3>
            <p className="text-gray-300">
              Your stake becomes worth more as supply decreases
            </p>
          </div>
        </div>

        {/* Staking Interface */}
        <div className="bg-white/5 border-2 border-white/20 rounded-3xl p-12 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Staking Interface
          </h2>

          <div className="bg-yellow-500/20 border-2 border-yellow-500 rounded-2xl p-8 text-center mb-8">
            <p className="text-yellow-300 text-xl font-bold">
              🚧 Staking goes live December 3rd, 2025
            </p>
            <p className="text-yellow-200 mt-2">
              Get your $BASED ready for launch day
            </p>
          </div>

          {!wallet.connected ? (
            <div className="text-center">
              <p className="text-gray-300 text-xl mb-8">
                Connect your wallet to stake $BASED
              </p>
              <WalletButton />
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-black/40 rounded-2xl p-8">
                <p className="text-gray-400 mb-2">Your $BASED Balance</p>
                <p className="text-4xl font-bold text-white">Coming Soon</p>
              </div>

              <div className="bg-black/40 rounded-2xl p-8">
                <p className="text-gray-400 mb-2">Currently Staked</p>
                <p className="text-4xl font-bold text-white">Coming Soon</p>
              </div>

              <div className="bg-black/40 rounded-2xl p-8">
                <p className="text-gray-400 mb-2">Unclaimed Rewards</p>
                <p className="text-4xl font-bold text-white">Coming Soon</p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <button 
                  disabled
                  className="bg-blue-500 opacity-50 cursor-not-allowed text-white font-bold text-xl px-12 py-5 rounded-xl"
                >
                  Stake $BASED
                </button>
                <button 
                  disabled
                  className="bg-purple-500 opacity-50 cursor-not-allowed text-white font-bold text-xl px-12 py-5 rounded-xl"
                >
                  Claim Rewards
                </button>
              </div>
            </div>
          )}
        </div>

        {/* APY Calculator */}
        <div className="mt-16 bg-gradient-to-br from-green-900/50 to-blue-900/50 border-2 border-green-500 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Staking Rewards Calculator
          </h2>
          
          <div className="bg-black/40 rounded-2xl p-8 text-center">
            <p className="text-gray-300 text-lg mb-4">
              Example: If protocol generates $100K in annual fees
            </p>
            <div className="space-y-4">
              <div className="bg-black/40 rounded-xl p-6">
                <p className="text-white font-semibold mb-2">25% to stakers = $25,000</p>
                <p className="text-gray-400">If you stake 10K tokens (1% of staked supply)</p>
                <p className="text-green-400 text-2xl font-bold mt-2">You earn ~$250/year</p>
              </div>
              <p className="text-yellow-300 text-sm">
                Actual returns depend on total staked amount and protocol revenue
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/tokenomics"
            className="inline-block bg-white text-blue-600 font-bold text-xl px-12 py-5 rounded-xl hover:bg-gray-100 transition-all"
          >
            Learn More About Tokenomics →
          </Link>
        </div>
      </div>
    </main>
  );
}
