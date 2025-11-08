'use client';

import Link from 'next/link';
import WalletButton from '@/components/WalletButton';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900">
      <nav className="p-6 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <Link href="/">
            <h1 className="text-3xl font-bold text-white cursor-pointer">BASED Protocol</h1>
          </Link>
          <Link href="/leaderboard" className="text-white hover:underline">Leaderboard</Link>
          <Link href="/how-it-works" className="text-white hover:underline">How It Works</Link>
          <Link href="/faq" className="text-white hover:underline font-bold">FAQ</Link>
        </div>
        <WalletButton />
      </nav>

      <main className="container mx-auto px-6 py-12 text-white max-w-4xl">
        <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-300 mb-12">Everything you need to know about BASED Protocol</p>

        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3">What is BASED Protocol?</h2>
            <p className="text-gray-300">
              BASED Protocol is a social staking platform built on Solana. Stake your SOL, earn 8.5% APY, 
              and compete on the leaderboard. The longer you hold, the higher your level grows 
              (up to 10X multiplier). First 100 stakers get a permanent 2X founder bonus.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3">How do I earn rewards?</h2>
            <p className="text-gray-300 mb-3">
              You earn 8.5% base APY on your staked SOL. Your level increases every week you hold, 
              giving you bigger multipliers:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>📄 Paper Hands (Week 0): 1.0X multiplier (8.5% APY)</li>
              <li>🥉 Bronze Stacker (Week 5): 1.5X multiplier (12.75% APY)</li>
              <li>🥈 Silver Hodler (Week 10): 2.0X multiplier (17% APY)</li>
              <li>🥇 Gold Diamond (Week 20): 3.0X multiplier (25.5% APY)</li>
              <li>💎 Platinum Legend (Week 50): 5.0X multiplier (42.5% APY)</li>
              <li>👑 BASED God (Week 100): 10X multiplier (85% APY)</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3">What's the Founders Bonus?</h2>
            <p className="text-gray-300">
              The first 100 stakers get a permanent 2X multiplier boost. If you're staker #50 
              with a 1.5X multiplier, you actually get 3.0X. This bonus stacks with your time-based 
              multiplier and never expires. Once we hit 100 stakers, this opportunity is gone forever.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3">⚔️ Can I withdraw early? (Rage Quit System)</h2>
            <p className="text-gray-300 mb-3">
              Yes, but paper hands pay the price. We use a gaming-style penalty system that gets friendlier the longer you hold:
            </p>
            <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg mb-3">
              <p className="font-bold text-red-400 mb-2">🔥 RAGE QUIT PENALTIES:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><span className="font-bold text-red-400">Week 1-4:</span> 25% penalty (Instant Rage Quit - Maximum pain for quitters)</li>
                <li><span className="font-bold text-orange-400">Month 1-3:</span> 15% penalty (Early Rage Quit - Still hurts)</li>
                <li><span className="font-bold text-yellow-400">Month 3-6:</span> 10% penalty (Impatient Exit - Getting better)</li>
                <li><span className="font-bold text-green-400">Month 6-12:</span> 5% penalty (Respectable Exit - Almost there)</li>
                <li><span className="font-bold text-blue-400">Year 1+:</span> 0% penalty (Diamond Hands Certified - Exit with honor)</li>
              </ul>
            </div>
            <p className="text-gray-300 mb-2">
              All penalties go back into the reward pool, making it better for everyone who stays. 
              This isn't a punishment - it's a commitment device that separates the diamond hands from paper hands.
            </p>
            <p className="text-sm text-purple-400 font-bold">
              💎 Pro Tip: Unlock the "Never Sold" achievement by holding 365 days = instant legend status
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3">Is my SOL safe?</h2>
            <p className="text-gray-300">
              Your SOL is locked in a Solana smart contract that's been deployed to devnet for testing. 
              The contract code is immutable (can't be changed) and all transactions are public on the 
              Solana blockchain. You maintain full custody - we never hold your keys.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3">How does the leaderboard work?</h2>
            <p className="text-gray-300">
              Rankings are based on your total staked amount multiplied by your multiplier. 
              Higher ranks get bragging rights, badges, and show up on the homepage. The top 10 
              unlock exclusive achievements. Compete with other stakers to climb the ranks.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3">What are achievements?</h2>
            <p className="text-gray-300">
              Unlock 10+ achievements by completing challenges: First Blood (stake your first SOL), 
              Diamond Hands (hold 90 days), Never Sold (365 days no withdrawals), Whale Status (100+ SOL), 
              Top 10 (leaderboard position), and more. Some achievements give permanent bonuses!
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3">What are daily streaks?</h2>
            <p className="text-gray-300 mb-3">
              Visit the site every day to build your streak. Longer streaks = bonus APY on top of your level multiplier:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>7-day streak: +0.1% APY bonus</li>
              <li>30-day streak: +0.25% APY bonus</li>
              <li>100-day streak: +0.5% APY bonus</li>
              <li>365-day streak: +1% APY bonus + special rewards</li>
            </ul>
            <p className="text-gray-300 mt-3">
              Miss a day and your streak resets. This keeps you engaged and rewards loyal community members.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3">What wallets are supported?</h2>
            <p className="text-gray-300">
              We support all Solana wallets including Phantom, Solflare, Backpack, and others. 
              Just click "Connect Wallet" and choose your preferred wallet.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3">Who built this?</h2>
            <p className="text-gray-300">
              BASED Protocol was built by CJ, a personal trainer and fitness entrepreneur from 
              Westlake Village, CA. The goal is to bring gamified DeFi staking to the 1% Club community 
              and beyond. This is currently running on Solana devnet for testing before mainnet launch.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3">When is mainnet launch?</h2>
            <p className="text-gray-300">
              We're currently on devnet for testing. Mainnet launch is planned after we validate 
              all features with the first 100 founders. Join early to secure your founder bonus 
              and help shape the protocol.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3">How do I get started?</h2>
            <p className="text-gray-300 mb-3">
              Getting started is simple:
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li>Install a Solana wallet (Phantom recommended)</li>
              <li>Get some devnet SOL from a faucet (we'll help you)</li>
              <li>Connect your wallet on BASED Protocol</li>
              <li>Stake your SOL and start leveling up</li>
            </ol>
            <p className="text-gray-300 mt-3">
              Questions? Reach out to CJ directly or join the 1% Club community.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/">
            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded font-bold text-xl">
              🚀 Start Staking
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
