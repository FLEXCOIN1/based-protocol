'use client';

import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import WalletButton from '@/components/WalletButton';
import PoolSelector from '@/components/PoolSelector';
import { useState, useEffect } from 'react';
import { getStakeInfo } from '@/lib/staking';
import { calculateLevelProgress, ACHIEVEMENTS } from '@/lib/gamification';
import Link from 'next/link';

type PoolType = 'sol' | 'based';

export default function Home() {
  const { publicKey, signTransaction, signAllTransactions } = useWallet();
  const { connection } = useConnection();
  const [mounted, setMounted] = useState(false);
  const [selectedPool, setSelectedPool] = useState<PoolType>('sol');
  const [stakeData, setStakeData] = useState<any>(null);
  const [stakeAmount, setStakeAmount] = useState('');
  const [loading, setLoading] = useState(false);
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

  // Countdown timer to Dec 3, 2024
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
    if (publicKey && selectedPool === 'sol') {
      loadStakeData();
    }
  }, [publicKey, selectedPool]);

  const loadStakeData = async () => {
    if (!publicKey || !signTransaction || !signAllTransactions) return;
    try {
      const wallet = { publicKey, signTransaction, signAllTransactions };
      const data = await getStakeInfo(connection, publicKey, wallet);
      setStakeData(data);
    } catch (e) {
      console.error('Error loading stake:', e);
    }
  };

  const handleStake = async () => {
    if (!publicKey || !stakeAmount) return;
    setLoading(true);
    try {
      alert(`Staking ${stakeAmount} ${selectedPool.toUpperCase()} - Coming soon!`);
    } catch (e) {
      console.error('Stake error:', e);
    } finally {
      setLoading(false);
    }
  };

  const calculateEarnings = () => {
    const amount = parseFloat(calcAmount) || 0;
    const weeks = parseFloat(calcWeeks) || 0;
    const baseApy = selectedPool === 'sol' ? 0.085 : 0.75;
    const multiplier = 1 + (weeks * 0.005);
    const effectiveApy = baseApy * multiplier;
    const earnings = amount * effectiveApy * (weeks / 52);
    return { earnings: earnings.toFixed(2), effectiveApy: (effectiveApy * 100).toFixed(2) };
  };

  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900" />;
  }

  const { earnings, effectiveApy } = calculateEarnings();
  const levelProgress = stakeData ? calculateLevelProgress(stakeData.weeksStaked) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900">
      {/* LAUNCH BANNER */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 py-4 px-6 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div>
            <p className="text-white font-bold text-xl">🚀 $BASED Launching on Pump.fun</p>
            <p className="text-white/90 text-sm">Fair Launch • No Presale • Community Owned</p>
          </div>
          <div className="flex gap-4 text-white font-mono text-lg">
            <div className="bg-black/30 px-4 py-2 rounded">
              <span className="font-bold text-2xl">{timeLeft.days}</span>
              <span className="text-xs block">DAYS</span>
            </div>
            <div className="bg-black/30 px-4 py-2 rounded">
              <span className="font-bold text-2xl">{timeLeft.hours}</span>
              <span className="text-xs block">HOURS</span>
            </div>
            <div className="bg-black/30 px-4 py-2 rounded">
              <span className="font-bold text-2xl">{timeLeft.minutes}</span>
              <span className="text-xs block">MINS</span>
            </div>
            <div className="bg-black/30 px-4 py-2 rounded">
              <span className="font-bold text-2xl">{timeLeft.seconds}</span>
              <span className="text-xs block">SECS</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-center mt-3">
          <a 
            href="https://twitter.com/BasedProtocolSol" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-all"
          >
            Follow on Twitter
          </a>
          <a 
            href="https://t.me/staybasedpro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-all"
          >
            Join Telegram
          </a>
        </div>
      </div>

      <nav className="p-6 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <Link href="/">
            <h1 className="text-3xl font-bold text-white cursor-pointer">BASED Protocol</h1>
          </Link>
          <Link href="/leaderboard" className="text-white hover:underline">Leaderboard</Link>
          <Link href="/how-it-works" className="text-white hover:underline">How It Works</Link>
          <Link href="/tokenomics" className="text-white hover:underline">Tokenomics</Link>
          <Link href="/dashboard" className="text-white hover:underline">Dashboard</Link>
          <Link href="/faq" className="text-white hover:underline">FAQ</Link>
        </div>
        <WalletButton />
      </nav>

      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">
            Stake. Level Up. Earn More.
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            The first gamified staking protocol on Solana. Choose your pool and start leveling up.
          </p>
          <div className="bg-yellow-500/20 border border-yellow-500/50 p-4 rounded-lg max-w-3xl mx-auto">
            <p className="text-yellow-300 font-semibold">
              📅 Token launches Dec 3 on Pump.fun → Staking activates after Raydium graduation
            </p>
          </div>
        </div>

        <PoolSelector selectedPool={selectedPool} onPoolChange={setSelectedPool} />

        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stake {selectedPool === 'sol' ? 'SOL' : '$BASED'}
          </h2>

          {selectedPool === 'based' && (
            <div className="bg-purple-500/20 border border-purple-500/50 p-4 rounded-lg mb-6">
              <p className="text-purple-300 text-sm font-semibold mb-2">
                🚀 $BASED staking unlocks after Raydium graduation!
              </p>
              <p className="text-purple-200 text-xs">
                Phase 1: Launch on Pump.fun (Dec 3) <br/>
                Phase 2: Community drives to Raydium <br/>
                Phase 3: Staking platform activates with full 6-tier system
              </p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-white mb-2">Amount to Stake</label>
              <input
                type="number"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full p-3 rounded bg-white/5 border border-white/20 text-white"
                disabled={selectedPool === 'based'}
              />
            </div>

            <button
              onClick={handleStake}
              disabled={loading || !publicKey || !stakeAmount || selectedPool === 'based'}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white py-3 rounded font-bold text-lg transition-all"
            >
              {loading ? 'Staking...' : selectedPool === 'based' ? 'Launches Dec 3' : 'Stake Now'}
            </button>
          </div>

          {publicKey && stakeData && selectedPool === 'sol' && (
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-white">
                <div>
                  <p className="text-sm text-gray-400">Your Stake</p>
                  <p className="text-xl font-bold">{stakeData.staked.toFixed(4)} SOL</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Pending Rewards</p>
                  <p className="text-xl font-bold">{stakeData.rewards.toFixed(4)} SOL</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Your Level</p>
                  <p className="text-xl font-bold">{stakeData.level.emoji} {stakeData.level.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Multiplier</p>
                  <p className="text-xl font-bold text-yellow-400">{stakeData.level.multiplier.toFixed(2)}x</p>
                </div>
              </div>

              {levelProgress && levelProgress.nextLevel && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Progress to {levelProgress.nextLevel.name}</span>
                    <span>{levelProgress.progress.toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all"
                      style={{ width: `${levelProgress.progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">💰 Earnings Calculator</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-white mb-2">Amount</label>
              <input
                type="number"
                value={calcAmount}
                onChange={(e) => setCalcAmount(e.target.value)}
                className="w-full p-3 rounded bg-white/5 border border-white/20 text-white"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Weeks Staked</label>
              <input
                type="number"
                value={calcWeeks}
                onChange={(e) => setCalcWeeks(e.target.value)}
                className="w-full p-3 rounded bg-white/5 border border-white/20 text-white"
              />
            </div>
          </div>
          <div className="bg-green-500/20 border border-green-500/50 p-6 rounded-lg">
            <p className="text-gray-300 mb-2">Estimated Earnings:</p>
            <p className="text-4xl font-bold text-green-400 mb-4">
              {earnings} {selectedPool.toUpperCase()}
            </p>
            <p className="text-sm text-gray-400">
              Effective APY: {effectiveApy}% (includes time multiplier)
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur border border-purple-500/30 p-8 rounded-lg mb-12">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">🎯 Launch Strategy</h3>
          <div className="grid md:grid-cols-3 gap-6 text-white text-center">
            <div className="bg-white/5 p-6 rounded-lg">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="font-bold mb-2">Phase 1: Pump.fun</h4>
              <p className="text-sm text-gray-300">Dec 3 - Fair launch, no presale, community-driven</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <div className="text-4xl mb-3">💧</div>
              <h4 className="font-bold mb-2">Phase 2: Raydium</h4>
              <p className="text-sm text-gray-300">Community buys = auto-graduation to Raydium liquidity</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <div className="text-4xl mb-3">💎</div>
              <h4 className="font-bold mb-2">Phase 3: Staking</h4>
              <p className="text-sm text-gray-300">Full gamified staking platform activates - HOLD & EARN</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-300 text-sm">
              💡 <span className="text-purple-400 font-semibold">Why this matters:</span> Fair launch + Real utility = Diamond hands win
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur border border-green-500/30 p-8 rounded-lg mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-bold text-white">🔒 Security First</h3>
            <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-lg">
              9/10 Audit Score
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-white">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <h4 className="font-bold mb-1">Smart Contract Audited</h4>
                <p className="text-sm text-gray-300">Comprehensive security review completed with excellent results</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <h4 className="font-bold mb-1">Multi-Layer Protection</h4>
                <p className="text-sm text-gray-300">Reentrancy guards, overflow checks, and access controls</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">⏸️</span>
              <div>
                <h4 className="font-bold mb-1">Emergency Pause</h4>
                <p className="text-sm text-gray-300">Protocol can be paused instantly if issues are detected</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">🔐</span>
              <div>
                <h4 className="font-bold mb-1">Verified on Solana</h4>
                <p className="text-sm text-gray-300">All code is open source and verifiable on-chain</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-gray-400">
              Built with Anchor Framework • Tested on Devnet • Ready for Mainnet
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/how-it-works">
            <button className="bg-white text-purple-900 px-8 py-3 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all">
              Learn How It Works
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
