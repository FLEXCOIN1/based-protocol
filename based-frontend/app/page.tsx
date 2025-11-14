'use client';

import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import WalletButton from '../components/WalletButton';
import { useState, useEffect } from 'react';
import { stakeSOL, unstakeSOL, getUserStakeInfo, CURRENT_APY } from '../lib/staking';
import Link from 'next/link';

export default function Home() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [stakeAmount, setStakeAmount] = useState('0.1');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [userStake, setUserStake] = useState<any>(null);

  useEffect(() => {
    if (wallet.publicKey) loadStakeInfo();
  }, [wallet.publicKey]);

  const loadStakeInfo = async () => {
    if (!wallet.publicKey) return;
    const info = await getUserStakeInfo(wallet.publicKey, connection);
    setUserStake(info);
  };

  const handleStake = async () => {
    setLoading(true);
    setMessage('⏳ Staking in progress...');
    try {
      const tx = await stakeSOL(wallet, parseFloat(stakeAmount), connection);
      setMessage('⏳ Transaction confirmed, updating balance...');
      await loadStakeInfo();
      setMessage(`✓ Successfully staked ${stakeAmount} SOL`);
      setTimeout(() => setMessage(''), 5000);
    } catch (error: any) {
      setMessage(`✗ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleUnstake = async () => {
    setLoading(true);
    setMessage('⏳ Unstaking in progress...');
    try {
      const tx = await unstakeSOL(wallet, parseFloat(stakeAmount), connection);
      setMessage('⏳ Transaction confirmed, updating balance...');
      await loadStakeInfo();
      setMessage(`✓ Successfully unstaked ${stakeAmount} SOL`);
      setTimeout(() => setMessage(''), 5000);
    } catch (error: any) {
      setMessage(`✗ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const stakedSOL = userStake?.exists ? (userStake.amount / 1e9).toFixed(4) : '0.0000';

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-3xl">🏦</div>
            <div>
              <h1 className="text-2xl font-bold text-blue-600">BASED Protocol</h1>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/stats" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Stats</Link>
            <Link href="/about-based" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
            <WalletButton />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 text-center">
        <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-8">
          🚀 Now Live on Solana Devnet
        </div>
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Institutional-Grade<br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Staking Platform
          </span>
        </h1>
        <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Earn {CURRENT_APY}% APY on your SOL with institutional security, full transparency, and instant liquidity.
        </p>
        
        <div className="flex gap-4 justify-center">
          <a 
            href="#stake" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Start Staking
          </a>
          <Link 
            href="/stats" 
            className="bg-white border-2 border-gray-300 hover:border-blue-600 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
          >
            View Stats
          </Link>
        </div>
      </section>

      {/* Stats Preview */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <p className="text-gray-600 font-semibold mb-2">Annual Yield</p>
            <p className="text-5xl font-bold text-blue-600">{CURRENT_APY}%</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <p className="text-gray-600 font-semibold mb-2">Instant Access</p>
            <p className="text-5xl font-bold text-green-600">24/7</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <p className="text-gray-600 font-semibold mb-2">Security</p>
            <p className="text-5xl font-bold text-purple-600">100%</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose BASED Protocol?</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-6xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure by Design</h3>
            <p className="text-gray-600">Audited smart contracts on Solana. Your funds remain in your control.</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Liquidity</h3>
            <p className="text-gray-600">Stake and unstake anytime. No lock-up periods. No waiting.</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Transparency</h3>
            <p className="text-gray-600">Track your earnings in real-time. All transactions on-chain.</p>
          </div>
        </div>
      </section>

      {/* Staking Interface */}
      <section id="stake" className="max-w-5xl mx-auto px-8 py-20">
        <div className="bg-white border-2 border-gray-200 rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Earning Today</h2>
            <p className="text-xl text-gray-600">Connect your wallet and stake SOL in seconds</p>
          </div>

          {wallet.connected && userStake?.exists && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 mb-8">
              <p className="text-blue-700 font-semibold mb-2">Your Staked Balance</p>
              <p className="text-5xl font-bold text-blue-900">{stakedSOL} SOL</p>
              <p className="text-blue-600 mt-2">Earning {CURRENT_APY}% APY</p>
            </div>
          )}

          {wallet.connected ? (
            <>
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Amount (SOL)</label>
                <input
                  type="number"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  className="w-full bg-gray-50 border-2 border-gray-300 rounded-xl p-4 text-gray-900 text-2xl focus:border-blue-500 focus:outline-none transition-colors"
                  step="0.01"
                  min="0.01"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <button
                  onClick={handleStake}
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-xl p-5 font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                >
                  {loading ? 'Processing...' : '➕ Stake SOL'}
                </button>
                
                <button
                  onClick={handleUnstake}
                  disabled={loading}
                  className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 rounded-xl p-5 font-bold text-lg transition-all"
                >
                  {loading ? 'Processing...' : '➖ Unstake SOL'}
                </button>
              </div>

              {message && (
                <div className={`mt-6 p-5 rounded-xl border-2 font-semibold ${
                  message.includes('✓') ? 'bg-green-50 border-green-300 text-green-800' : 
                  message.includes('⏳') ? 'bg-blue-50 border-blue-300 text-blue-800' : 
                  'bg-red-50 border-red-300 text-red-800'
                }`}>
                  {message}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-xl mb-8">Connect your wallet to begin staking</p>
              <WalletButton />
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-16 text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Earn Passive Income?</h2>
          <p className="text-xl mb-8 text-blue-100">Join institutional investors earning {CURRENT_APY}% APY on SOL</p>
          <a 
            href="#stake"
            className="inline-block bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
          >
            Start Staking Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl">🏦</div>
                <h3 className="text-xl font-bold text-gray-900">BASED Protocol</h3>
              </div>
              <p className="text-gray-600">Institutional-grade staking on Solana</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Protocol</h4>
              <div className="space-y-2">
                <Link href="/stats" className="block text-gray-600 hover:text-blue-600 transition-colors">Statistics</Link>
                <Link href="/about-based" className="block text-gray-600 hover:text-blue-600 transition-colors">About</Link>
                <Link href="/whitepaper" className="block text-gray-600 hover:text-blue-600 transition-colors">Whitepaper</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Social</h4>
              <div className="space-y-2">
                <a href="https://twitter.com/basedproto78004" target="_blank" className="block text-gray-600 hover:text-blue-600 transition-colors">Twitter</a>
                <a href="https://t.me/staybasedpro" target="_blank" className="block text-gray-600 hover:text-blue-600 transition-colors">Telegram</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>© 2024 BASED Protocol. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
