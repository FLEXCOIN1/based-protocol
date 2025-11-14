'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-purple-950 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative">
        <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="text-4xl">💎</div>
              <span className="text-3xl font-black text-white">BASED</span>
            </div>
            <div className="hidden md:flex gap-8 text-white font-semibold">
              <Link href="/how-it-works" className="hover:text-blue-400 transition-colors">How It Works</Link>
              <Link href="/strategies" className="hover:text-blue-400 transition-colors">Strategies</Link>
              <Link href="/tokenomics" className="hover:text-blue-400 transition-colors">Tokenomics</Link>
              <Link href="/roadmap" className="hover:text-blue-400 transition-colors">Roadmap</Link>
              <Link href="/dashboard" className="hover:text-blue-400 transition-colors">Dashboard</Link>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-8 py-20 md:py-32">
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-3 rounded-full mb-8 animate-pulse">
              <p className="text-black font-black text-xl">
                🚀 LAUNCHING DECEMBER 3RD, 2025
              </p>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              The First Token That
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
                Actually Makes You Money
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Professional DeFi fund generating <span className="font-bold text-white">15-20% returns.</span>
              <br />
              $BASED token unlocks better strategies, earns revenue, and gets burned.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                href="/how-it-works"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-xl px-12 py-5 rounded-xl transition-all transform hover:scale-105 shadow-2xl"
              >
                How It Works →
              </Link>
              <a 
                href="https://t.me/staybasedpro"
                target="_blank"
                className="bg-white/10 border-2 border-white hover:bg-white/20 text-white font-bold text-xl px-12 py-5 rounded-xl transition-all backdrop-blur-sm"
              >
                Join Telegram
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:scale-105 transition-transform">
                <p className="text-5xl font-black text-blue-400 mb-2">15-20%</p>
                <p className="text-gray-300 text-lg">Target Annual Returns</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:scale-105 transition-transform">
                <p className="text-5xl font-black text-purple-400 mb-2">50%</p>
                <p className="text-gray-300 text-lg">Fees → Buyback $BASED</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:scale-105 transition-transform">
                <p className="text-5xl font-black text-pink-400 mb-2">3</p>
                <p className="text-gray-300 text-lg">Strategy Tiers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-black/40 py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Most Crypto Tokens Are Useless
            </h2>
            <p className="text-2xl text-gray-300">
              We're different. Here's why $BASED actually matters:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/50 to-blue-700/30 border-2 border-blue-500 rounded-3xl p-8 text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">🔑</div>
              <h3 className="text-2xl font-bold text-white mb-3">Access Key</h3>
              <p className="text-gray-300">
                Hold $BASED to unlock higher-yield strategies. No token = basic tier only.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-purple-700/30 border-2 border-purple-500 rounded-3xl p-8 text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-3">Revenue Share</h3>
              <p className="text-gray-300">
                Stake $BASED and earn from ALL protocol fees. Real passive income.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/50 to-pink-700/30 border-2 border-pink-500 rounded-3xl p-8 text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">🔥</div>
              <h3 className="text-2xl font-bold text-white mb-3">Buyback & Burn</h3>
              <p className="text-gray-300">
                50% of fees buy $BASED from market. Half gets burned forever. Supply decreases.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Simple. Transparent. Profitable.
            </h2>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 text-center md:text-left">
                <div className="inline-block bg-blue-500 text-white text-4xl font-black w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  1
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Deposit Your Crypto</h3>
                <p className="text-xl text-gray-300">
                  Choose your risk tier. We deploy across 5+ DeFi protocols.
                </p>
              </div>
              <div className="md:w-2/3 bg-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-sm">
                <p className="text-gray-300 text-lg">
                  <span className="font-bold text-white">Conservative:</span> USDC, SOL, ETH → 10-12% APY
                  <br />
                  <span className="font-bold text-white">Aggressive:</span> + Leverage, LPs → 15-20% APY
                  <br />
                  <span className="font-bold text-white">Life Changing:</span> + Moonshot plays → 30-100%+ APY
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/3 text-center md:text-right">
                <div className="inline-block bg-purple-500 text-white text-4xl font-black w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  2
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">We Generate Returns</h3>
                <p className="text-xl text-gray-300">
                  Active management across Kamino, Jito, Meteora, MarginFi, and more.
                </p>
              </div>
              <div className="md:w-2/3 bg-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-sm">
                <p className="text-gray-300 text-lg">
                  We constantly rebalance, harvest rewards, and optimize yields. You just watch your balance grow.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 text-center md:text-left">
                <div className="inline-block bg-pink-500 text-white text-4xl font-black w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  3
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Fees Feed $BASED</h3>
                <p className="text-xl text-gray-300">
                  Protocol fees automatically buyback, burn, and reward $BASED holders.
                </p>
              </div>
              <div className="md:w-2/3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500 rounded-2xl p-8">
                <p className="text-white text-lg font-semibold">
                  50% → Buy $BASED | 25% → Burn Forever 🔥 | 25% → Stakers 💰
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/how-it-works"
              className="inline-block bg-white text-black font-bold text-xl px-12 py-5 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              See Full Breakdown →
            </Link>
          </div>
        </div>
      </div>

      <div className="relative bg-black/40 py-20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-black text-white mb-6">
            Built By Real Operators
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            13+ years building successful businesses. 
            <br />
            Christian values. Full transparency. No BS.
          </p>
          
          <div className="bg-white/5 border border-white/20 rounded-3xl p-12 max-w-3xl mx-auto backdrop-blur-sm">
            <div className="text-6xl mb-6">💪</div>
            <h3 className="text-3xl font-bold text-white mb-4">Sirmark</h3>
            <p className="text-xl text-gray-300 mb-6">
              Founder, FYTS Fitness & BASED Protocol
            </p>
            <div className="text-left space-y-3 text-gray-300">
              <p>✓ 13 years personal training & fitness business</p>
              <p>✓ Built businesses in 3 cities</p>
              <p>✓ 500+ clients transformed</p>
              <p>✓ Now bringing discipline to DeFi</p>
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <a 
              href="https://twitter.com/basedproto78004" 
              target="_blank"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              Twitter →
            </a>
            <a 
              href="https://t.me/staybasedpro" 
              target="_blank"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              Telegram →
            </a>
          </div>
        </div>
      </div>

      <div className="relative py-32">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-16 shadow-2xl">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Ready to Get BASED?
            </h2>
            <p className="text-2xl text-white mb-4">
              Launching December 3rd, 2025
            </p>
            <p className="text-xl text-blue-100 mb-12">
              Be early. Get the best entry. Join the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/how-it-works"
                className="bg-white text-blue-600 font-bold text-xl px-12 py-5 rounded-xl hover:bg-gray-100 transition-all"
              >
                Learn More
              </Link>
              <a 
                href="https://t.me/staybasedpro"
                target="_blank"
                className="bg-black/40 border-2 border-white text-white font-bold text-xl px-12 py-5 rounded-xl hover:bg-black/60 transition-all"
              >
                Join Telegram
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10 bg-black/40 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold text-lg mb-4">About</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
                <li><Link href="/tokenomics" className="hover:text-white">Tokenomics</Link></li>
                <li><Link href="/roadmap" className="hover:text-white">Roadmap</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Strategies</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/strategies" className="hover:text-white">Conservative</Link></li>
                <li><Link href="/strategies" className="hover:text-white">Aggressive</Link></li>
                <li><Link href="/strategies" className="hover:text-white">Life Changing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/dashboard" className="hover:text-white">Dashboard</Link></li>
                <li><Link href="/stake" className="hover:text-white">Stake $BASED</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://twitter.com/basedproto78004" target="_blank" className="hover:text-white">Twitter</a></li>
                <li><a href="https://t.me/staybasedpro" target="_blank" className="hover:text-white">Telegram</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© 2025 BASED Protocol. All rights reserved.</p>
            <p className="mt-2">Cryptocurrency investments carry risk. Only invest what you can afford to lose.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
