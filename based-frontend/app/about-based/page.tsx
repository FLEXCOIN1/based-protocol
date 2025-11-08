'use client';

import Link from 'next/link';
import WalletButton from '@/components/WalletButton';

export default function AboutBased() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900">
      <nav className="p-6 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <Link href="/" className="text-3xl font-bold text-white">BASED Protocol</Link>
          <Link href="/leaderboard" className="text-white hover:underline">Leaderboard</Link>
          <Link href="/how-it-works" className="text-white hover:underline">How It Works</Link>
          <Link href="/about-based" className="text-white underline font-bold">About $BASED</Link>
          <Link href="/dashboard" className="text-white hover:underline">Dashboard</Link>
          <Link href="/faq" className="text-white hover:underline">FAQ</Link>
        </div>
        <WalletButton />
      </nav>

      <main className="container mx-auto px-6 py-12 text-white max-w-5xl">
        <div className="text-center mb-16">
          <div className="text-8xl mb-6">🔥</div>
          <h1 className="text-6xl font-bold mb-4">$BASED Token</h1>
          <p className="text-2xl text-gray-300">The Heart of the Protocol</p>
        </div>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">What is $BASED?</h2>
          <div className="bg-white/10 backdrop-blur p-8 rounded-lg">
            <p className="text-xl text-gray-300 mb-8">
              $BASED is the native utility token powering the BASED Protocol staking ecosystem on Solana.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">Stake & Earn</h3>
                <p className="text-gray-400 text-sm">Stake $BASED to earn high APY rewards</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">🎮</div>
                <h3 className="text-xl font-bold mb-2">Gamified</h3>
                <p className="text-gray-400 text-sm">Level up from Paper Hands to BASED God</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">🔥</div>
                <h3 className="text-xl font-bold mb-2">Deflationary</h3>
                <p className="text-gray-400 text-sm">Burn mechanics via rage quit penalties</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">🚀 Launch Status</h2>
          <div className="space-y-4">
            <div className="bg-green-500/20 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">✅ Token Created</h3>
              <p className="text-gray-300">Successfully deployed on Solana devnet with 1B supply</p>
            </div>
            <div className="bg-yellow-500/20 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">🚀 Mainnet Launch Soon</h3>
              <p className="text-gray-300">Launching on Pump.fun when market conditions are optimal</p>
            </div>
            <div className="bg-blue-500/20 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">⏳ Staking Ready</h3>
              <p className="text-gray-300">Full platform built and tested - ready to go live</p>
            </div>
          </div>
        </section>

        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 p-12 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">Join the Community</h2>
          <p className="text-xl mb-8">Be first to know when $BASED launches</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://twitter.com/BASEDProtocol" target="_blank" rel="noopener noreferrer" 
               className="bg-white text-purple-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
              Twitter
            </a>
            <a href="https://t.me/BASEDProtocol" target="_blank" rel="noopener noreferrer"
               className="bg-white/20 text-white border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white/30">
              Telegram
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
