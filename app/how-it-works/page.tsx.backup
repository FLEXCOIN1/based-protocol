'use client';

import Link from 'next/link';
import WalletButton from '@/components/WalletButton';
import { LEVELS, ACHIEVEMENTS } from '@/lib/gamification';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900">
      <nav className="p-6 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <Link href="/">
            <h1 className="text-3xl font-bold text-white cursor-pointer">BASED Protocol</h1>
          </Link>
          <Link href="/leaderboard" className="text-white hover:underline">Leaderboard</Link>
          <Link href="/how-it-works" className="text-white hover:underline font-bold">How It Works</Link>
          <Link href="/faq" className="text-white hover:underline">FAQ</Link>
        </div>
        <WalletButton />
      </nav>

      <main className="container mx-auto px-6 py-12 text-white max-w-5xl">
        <h1 className="text-6xl font-bold mb-4 text-center">How It Works</h1>
        <p className="text-xl text-gray-300 mb-12 text-center">Master the game. Level up. Earn more.</p>

        {/* Level System */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">📊 Level System</h2>
          <p className="text-gray-300 mb-6 text-lg">
            The longer you stake, the higher your level. Higher levels = bigger multipliers = more rewards.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEVELS.map((level) => (
              <div 
                key={level.level} 
                className="bg-white/10 backdrop-blur p-6 rounded-lg border-2 border-white/20 hover:border-purple-500 transition-all"
              >
                <div className="text-center mb-4">
                  <p className="text-6xl mb-2">{level.emoji}</p>
                  <p className="text-2xl font-bold">{level.name}</p>
                  <p className="text-sm text-gray-400">Level {level.level}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Time Required:</span>
                    <span className="font-bold">{level.minWeeks} weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Multiplier:</span>
                    <span className="font-bold text-yellow-400">{level.multiplier.toFixed(1)}x</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Effective APY:</span>
                    <span className="font-bold text-green-400">{(8.5 * level.multiplier).toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-purple-500/20 border border-purple-500/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">💡 Pro Tip</h3>
            <p className="text-gray-300">
              Your multiplier increases by 0.5% every week you hold. The longer you stake without withdrawing, 
              the more you earn. Reach BASED God level (100 weeks) for a massive 10X multiplier!
            </p>
          </div>
        </section>

        {/* Rage Quit System */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">⚔️ Rage Quit Penalty System</h2>
          <p className="text-gray-300 mb-6 text-lg">
            Early withdrawals hurt the protocol. So we built a gaming-style penalty system that rewards diamond hands and punishes paper hands.
          </p>

          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-red-500/50 p-8 rounded-lg mb-6">
            <h3 className="text-3xl font-bold mb-6 text-center">🔥 The Rage Quit Tax</h3>
            
            <div className="space-y-4">
              <div className="bg-black/40 p-4 rounded-lg border-l-4 border-red-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xl font-bold text-red-400">Week 1-4: Instant Rage Quit</p>
                    <p className="text-sm text-gray-400">The ultimate paper hands move</p>
                  </div>
                  <p className="text-4xl font-bold text-red-400">25%</p>
                </div>
              </div>

              <div className="bg-black/40 p-4 rounded-lg border-l-4 border-orange-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xl font-bold text-orange-400">Month 1-3: Early Rage Quit</p>
                    <p className="text-sm text-gray-400">Still pretty paper hands</p>
                  </div>
                  <p className="text-4xl font-bold text-orange-400">15%</p>
                </div>
              </div>

              <div className="bg-black/40 p-4 rounded-lg border-l-4 border-yellow-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xl font-bold text-yellow-400">Month 3-6: Impatient Exit</p>
                    <p className="text-sm text-gray-400">Getting better, but still early</p>
                  </div>
                  <p className="text-4xl font-bold text-yellow-400">10%</p>
                </div>
              </div>

              <div className="bg-black/40 p-4 rounded-lg border-l-4 border-green-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xl font-bold text-green-400">Month 6-12: Respectable Exit</p>
                    <p className="text-sm text-gray-400">Almost diamond hands status</p>
                  </div>
                  <p className="text-4xl font-bold text-green-400">5%</p>
                </div>
              </div>

              <div className="bg-black/40 p-4 rounded-lg border-l-4 border-blue-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xl font-bold text-blue-400">Year 1+: Diamond Hands Certified</p>
                    <p className="text-sm text-gray-400">Exit with honor, zero penalty</p>
                  </div>
                  <p className="text-4xl font-bold text-blue-400">0%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">💎 Why This System?</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Stops pump & dump behavior</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Rewards long-term commitment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Creates diamond hands culture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Penalties go back to reward pool</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">🎯 Where Penalties Go</h3>
              <p className="text-gray-300 mb-4">
                100% of all rage quit penalties go back into the reward pool. 
                When paper hands exit early, diamond hands earn MORE.
              </p>
              <p className="text-sm text-purple-400 font-bold">
                This means YOUR rewards actually INCREASE when others quit early. 
                Win-win for committed stakers.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">🏆 Achievements</h2>
          <p className="text-gray-300 mb-6 text-lg">
            Unlock achievements by completing challenges. Some give you permanent bonuses!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ACHIEVEMENTS.map((achievement) => (
              <div 
                key={achievement.id}
                className="bg-white/10 backdrop-blur p-4 rounded-lg flex items-start gap-4"
              >
                <div className="text-5xl">{achievement.emoji}</div>
                <div className="flex-1">
                  <p className="text-xl font-bold mb-1">{achievement.name}</p>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-500/20 border border-yellow-500/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">⚡ Special Achievement: Never Sold</h3>
            <p className="text-gray-300">
              Hold for 365 days without a single withdrawal to unlock the legendary "Never Sold" 🔒 badge. 
              True diamond hands only. This achievement shows you're committed for the long haul.
            </p>
          </div>
        </section>

        {/* Daily Streaks */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">🔥 Daily Streak System</h2>
          <p className="text-gray-300 mb-6 text-lg">
            Visit the site every day to build your streak. Longer streaks = bonus APY!
          </p>

          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Streak Bonuses</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                    <span>7-day streak</span>
                    <span className="font-bold text-green-400">+0.1% APY</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                    <span>30-day streak</span>
                    <span className="font-bold text-green-400">+0.25% APY</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                    <span>100-day streak</span>
                    <span className="font-bold text-green-400">+0.5% APY</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                    <span>365-day streak</span>
                    <span className="font-bold text-yellow-400">+1% APY + Bonus</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">How It Works</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Visit the site once per day to maintain your streak</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Miss a day and your streak resets to 1</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Streak bonuses stack with your level multiplier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Your streak is tracked automatically when you connect</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Leaderboard Battles */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">⚔️ Leaderboard Competition</h2>
          <p className="text-gray-300 mb-6 text-lg">
            Compete with other stakers for top positions. Rankings are based on your total staked amount × your multiplier.
          </p>

          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">🏆 Top 10 Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="text-xl font-bold mb-2">🥇 Top 3</p>
                <p className="text-gray-300">Featured on homepage + special badge</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="text-xl font-bold mb-2">🎯 Top 10</p>
                <p className="text-gray-300">Unlock exclusive "Top 10" achievement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Referrals */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">🤝 Referral System</h2>
          <p className="text-gray-300 mb-6 text-lg">
            Invite friends and earn bonuses when they stake.
          </p>

          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                <span className="text-3xl">👥</span>
                <div className="flex-1">
                  <p className="font-bold">You get a unique referral code</p>
                  <p className="text-sm text-gray-400">Share it with friends</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                <span className="text-3xl">💰</span>
                <div className="flex-1">
                  <p className="font-bold">They stake using your code</p>
                  <p className="text-sm text-gray-400">Both of you get bonuses</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                <span className="text-3xl">🎁</span>
                <div className="flex-1">
                  <p className="font-bold">Refer 5 people = Recruiter achievement</p>
                  <p className="text-sm text-gray-400">Permanent bonus rewards</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 p-12 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Leveling Up?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Connect your wallet and start your journey to BASED God
          </p>
          <Link href="/">
            <button className="bg-white text-purple-900 px-12 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all">
              Start Staking Now
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
