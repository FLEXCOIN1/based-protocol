'use client';

import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import WalletButton from '@/components/WalletButton';
import { useState, useEffect } from 'react';
import { getProgram } from '@/lib/contract';
import { AnchorWallet } from '@/lib/anchorWallet';
import { calculateLevel } from '@/lib/gamification';
import { PublicKey } from '@solana/web3.js';
import Link from 'next/link';

export default function Leaderboard() {
  const { connection } = useConnection();
  const { publicKey, signTransaction, signAllTransactions } = useWallet();
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    loadLeaderboard();
  }, [publicKey]);

  const loadLeaderboard = async () => {
    try {
      if (!signTransaction || !signAllTransactions) {
        if (publicKey) {
          const dummyWallet = {
            publicKey: publicKey,
            signTransaction: async (tx: any) => tx,
            signAllTransactions: async (txs: any[]) => txs,
          };
          const anchorWallet = AnchorWallet.fromWalletAdapter(dummyWallet);
          const program = await getProgram(connection, anchorWallet);
          
          const [userStakePDA] = PublicKey.findProgramAddressSync(
            [Buffer.from("user_stake"), publicKey.toBuffer()],
            program.programId
          );

          try {
            const userAccount = await (program.account as any).userStake.fetch(userStakePDA);
            const vestingStart = userAccount.vestingStart?.toNumber() || 0;
            const now = Math.floor(Date.now() / 1000);
            const secondsStaked = vestingStart > 0 ? now - vestingStart : 0;
            const weeksStaked = secondsStaked / (7 * 24 * 60 * 60);
            const level = calculateLevel(weeksStaked);

            setLeaderboard([{
              rank: 1,
              address: publicKey.toString(),
              shortAddress: publicKey.toString().slice(0, 4) + '...' + publicKey.toString().slice(-4),
              staked: (userAccount.amount?.toNumber() || 0) / 1_000_000_000,
              multiplier: (userAccount.multiplier?.toNumber() || 0) / 10000,
              level: level,
              weeksStaked: weeksStaked,
              isCurrentUser: true,
            }]);
          } catch (e) {
            console.log('User not found in leaderboard yet');
          }
        }
        setLoading(false);
        return;
      }

      const wallet = {
        publicKey: publicKey || new PublicKey('11111111111111111111111111111111'),
        signTransaction: signTransaction,
        signAllTransactions: signAllTransactions,
      };

      const anchorWallet = AnchorWallet.fromWalletAdapter(wallet);
      const program = await getProgram(connection, anchorWallet);

      const [poolPDA] = PublicKey.findProgramAddressSync(
        [Buffer.from("pool")],
        program.programId
      );

      const poolAccount = await (program.account as any).stakingPool.fetch(poolPDA);
      const totalUsers = poolAccount.totalUsers?.toNumber() || 0;

      if (totalUsers > 0 && publicKey) {
        const [userStakePDA] = PublicKey.findProgramAddressSync(
          [Buffer.from("user_stake"), publicKey.toBuffer()],
          program.programId
        );

        try {
          const userAccount = await (program.account as any).userStake.fetch(userStakePDA);
          const vestingStart = userAccount.vestingStart?.toNumber() || 0;
          const now = Math.floor(Date.now() / 1000);
          const secondsStaked = vestingStart > 0 ? now - vestingStart : 0;
          const weeksStaked = secondsStaked / (7 * 24 * 60 * 60);
          const level = calculateLevel(weeksStaked);

          const staked = (userAccount.amount?.toNumber() || 0) / 1_000_000_000;

          if (staked > 0) {
            setLeaderboard([{
              rank: 1,
              address: publicKey.toString(),
              shortAddress: publicKey.toString().slice(0, 4) + '...' + publicKey.toString().slice(-4),
              staked: staked,
              multiplier: (userAccount.multiplier?.toNumber() || 0) / 10000,
              level: level,
              weeksStaked: weeksStaked,
              isCurrentUser: true,
            }]);
          }
        } catch (e) {
          console.log('Error fetching user:', e);
        }
      }

    } catch (e) {
      console.error('Leaderboard error:', e);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900" />;
  }

  const top3 = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);
  const hasTop3 = top3.length >= 3;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900">
      <nav className="p-6 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <Link href="/" className="text-3xl font-bold text-white">BASED Protocol</Link>
          <Link href="/leaderboard" className="text-white underline">Leaderboard</Link>
          <Link href="/how-it-works" className="text-white hover:underline">How It Works</Link>
          <Link href="/tokenomics" className="text-white hover:underline">Tokenomics</Link>
          <Link href="/dashboard" className="text-white hover:underline">Dashboard</Link>
          <Link href="/faq" className="text-white hover:underline">FAQ</Link>
        </div>
        <WalletButton />
      </nav>

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-white mb-4 text-center">🏆 Leaderboard</h1>
        <p className="text-gray-300 text-center mb-12">Compete for the top spot. Earn bragging rights.</p>

        {hasTop3 && (
          <div className="max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-3 gap-4 items-end">
              <div className="bg-gradient-to-br from-gray-400/20 to-gray-600/20 border-2 border-gray-400 rounded-lg p-6 text-center">
                <p className="text-6xl mb-2">🥈</p>
                <p className="text-4xl font-bold mb-2 text-white">#{top3[1].rank}</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl">{top3[1].level.emoji}</span>
                  <p className="text-sm font-bold text-white">{top3[1].level.name}</p>
                </div>
                <p className="font-mono text-sm text-gray-300 mb-2">{top3[1].shortAddress}</p>
                <p className="text-2xl font-bold text-white">{top3[1].staked.toFixed(2)} SOL</p>
                <p className="text-sm text-gray-400">{top3[1].multiplier.toFixed(2)}x multiplier</p>
              </div>

              <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border-4 border-yellow-400 rounded-lg p-8 text-center transform scale-110">
                <p className="text-6xl mb-2">👑</p>
                <p className="text-5xl font-bold mb-2 text-white">#{top3[0].rank}</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-4xl">{top3[0].level.emoji}</span>
                  <p className="text-lg font-bold text-white">{top3[0].level.name}</p>
                </div>
                <p className="font-mono text-sm text-gray-300 mb-2">{top3[0].shortAddress}</p>
                <p className="text-3xl font-bold text-yellow-400">{top3[0].staked.toFixed(2)} SOL</p>
                <p className="text-sm text-gray-400">{top3[0].multiplier.toFixed(2)}x multiplier</p>
              </div>

              <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 border-2 border-orange-600 rounded-lg p-6 text-center">
                <p className="text-6xl mb-2">🥉</p>
                <p className="text-4xl font-bold mb-2 text-white">#{top3[2].rank}</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl">{top3[2].level.emoji}</span>
                  <p className="text-sm font-bold text-white">{top3[2].level.name}</p>
                </div>
                <p className="font-mono text-sm text-gray-300 mb-2">{top3[2].shortAddress}</p>
                <p className="text-2xl font-bold text-white">{top3[2].staked.toFixed(2)} SOL</p>
                <p className="text-sm text-gray-400">{top3[2].multiplier.toFixed(2)}x multiplier</p>
              </div>
            </div>
          </div>
        )}

        {!hasTop3 && leaderboard.length > 0 && (
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border-4 border-yellow-400 rounded-lg p-8 text-center">
              <p className="text-6xl mb-2">👑</p>
              <p className="text-5xl font-bold mb-2 text-white">#{leaderboard[0].rank}</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-4xl">{leaderboard[0].level.emoji}</span>
                <p className="text-lg font-bold text-white">{leaderboard[0].level.name}</p>
              </div>
              <p className="font-mono text-sm text-gray-300 mb-2">{leaderboard[0].shortAddress}</p>
              <p className="text-3xl font-bold text-yellow-400">{leaderboard[0].staked.toFixed(2)} SOL</p>
              <p className="text-sm text-gray-400">{leaderboard[0].multiplier.toFixed(2)}x multiplier</p>
              {leaderboard[0].isCurrentUser && <p className="mt-2 text-purple-400 font-bold">That's you! 🎉</p>}
            </div>
          </div>
        )}

        {rest.length > 0 && (
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-lg overflow-hidden">
              <div className="bg-white/5 p-4 border-b border-white/10">
                <h2 className="text-2xl font-bold text-white">All Rankings</h2>
              </div>

              <table className="w-full text-white">
                <thead className="bg-white/5 border-b border-white/10">
                  <tr>
                    <th className="p-4 text-left">Rank</th>
                    <th className="p-4 text-left">Level</th>
                    <th className="p-4 text-left">Address</th>
                    <th className="p-4 text-right">Staked</th>
                    <th className="p-4 text-right">Multiplier</th>
                  </tr>
                </thead>
                <tbody>
                  {rest.map((entry) => (
                    <tr 
                      key={entry.rank} 
                      className={`border-t border-white/10 hover:bg-white/5 transition-all ${entry.isCurrentUser ? 'bg-purple-500/20' : ''}`}
                    >
                      <td className="p-4 font-bold text-xl">
                        #{entry.rank}
                        {entry.isCurrentUser && <span className="ml-2 text-sm text-purple-400">(You)</span>}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{entry.level.emoji}</span>
                          <div>
                            <p className="font-bold text-sm">{entry.level.name}</p>
                            <p className="text-xs text-gray-400">Lvl {entry.level.level}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 font-mono text-sm">{entry.shortAddress}</td>
                      <td className="p-4 text-right font-bold">{entry.staked.toFixed(2)} SOL</td>
                      <td className="p-4 text-right">
                        <span className="text-yellow-400 font-bold">{entry.multiplier.toFixed(2)}x</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {!loading && leaderboard.length === 0 && (
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur rounded-lg p-12 text-center text-white">
            <p className="text-2xl mb-4">No stakers yet. Be the first!</p>
            <Link href="/">
              <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded font-bold">
                Start Staking
              </button>
            </Link>
          </div>
        )}

        <div className="max-w-5xl mx-auto mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Rankings update in real-time. Your position is based on total staked × multiplier.
          </p>
        </div>
      </main>
    </div>
  );
}
