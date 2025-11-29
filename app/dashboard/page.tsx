'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useState, useEffect, useCallback } from 'react';
import { Shield, TrendingUp, Zap, Wallet, ArrowUpRight, ArrowDownLeft, BarChart3, Lock, Info, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { PublicKey } from '@solana/web3.js';
import {
  getProgram,
  getUserPosition,
  getProtocolState,
  deposit as contractDeposit,
  withdraw as contractWithdraw,
  calculateUserValue,
  calculateExitFee
} from '@/lib/etf-contract';

// Devnet token addresses - update these with your actual mints
const USDC_MINT = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'); // Devnet USDC
const BASED_MINT = new PublicKey('4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd'); // Update with your $BASED token mint

export default function Dashboard() {
  const { publicKey, connected, wallet } = useWallet();
  const [selectedTier, setSelectedTier] = useState<number>(1); // 0 = Conservative, 1 = Aggressive, 2 = Life Changing
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawShares, setWithdrawShares] = useState('');

  // Loading states
  const [loading, setLoading] = useState(true);
  const [depositing, setDepositing] = useState(false);
  const [withdrawing, setWithdrawing] = useState(false);

  // Error state
  const [error, setError] = useState<string | null>(null);

  // User data from blockchain
  const [userShares, setUserShares] = useState(0);
  const [userDeposited, setUserDeposited] = useState(0);
  const [userWithdrawn, setUserWithdrawn] = useState(0);
  const [depositTimestamp, setDepositTimestamp] = useState(0);
  const [userTier, setUserTier] = useState(0);

  // Protocol data from blockchain
  const [totalNav, setTotalNav] = useState(0);
  const [totalShares, setTotalShares] = useState(0);

  // Fetch user position and protocol state from blockchain
  const fetchData = useCallback(async () => {
    if (!connected || !publicKey || !wallet) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Create program instance
      const program = await getProgram(wallet.adapter as any);

      // Fetch protocol state
      try {
        const protocolState = await getProtocolState(program);
        setTotalNav(protocolState.totalNav.toNumber() / 1_000_000); // Convert from lamports
        setTotalShares(protocolState.totalShares.toNumber() / 1_000_000);
      } catch (stateError: any) {
        console.log('Protocol not initialized yet:', stateError);
        // Protocol hasn't been initialized - show warning but don't fail
        setError('Protocol is not initialized yet. The admin needs to initialize the protocol before deposits can be made.');
        setTotalNav(0);
        setTotalShares(0);
      }

      // Fetch user position
      const position = await getUserPosition(program, publicKey);

      if (position) {
        setUserShares(position.shares.toNumber() / 1_000_000);
        setUserDeposited(position.totalDeposited.toNumber() / 1_000_000);
        setUserWithdrawn(position.totalWithdrawn.toNumber() / 1_000_000);
        setDepositTimestamp(position.depositTimestamp.toNumber());
        setUserTier(position.tier);
      } else {
        // User has no position yet
        setUserShares(0);
        setUserDeposited(0);
        setUserWithdrawn(0);
        setDepositTimestamp(0);
        setUserTier(0);
      }

      setLoading(false);
    } catch (err: any) {
      console.error('Error fetching data:', err);
      setError(err.message || 'Failed to fetch data from blockchain');
      setLoading(false);
    }
  }, [connected, publicKey, wallet]);

  // Fetch data on mount and when wallet connects
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Calculate current value
  const currentValue = calculateUserValue(userShares, totalShares, totalNav);
  const totalEarned = currentValue - userDeposited + userWithdrawn;
  const exitFeePercent = calculateExitFee(depositTimestamp);

  // Handle deposit
  const handleDeposit = async () => {
    if (!connected || !publicKey || !wallet || !depositAmount) return;

    try {
      setDepositing(true);
      setError(null);

      const amount = parseFloat(depositAmount);
      if (amount <= 0) {
        throw new Error('Amount must be greater than 0');
      }

      const program = await getProgram(wallet.adapter as any);
      const tx = await contractDeposit(
        program,
        publicKey,
        amount,
        selectedTier,
        USDC_MINT,
        BASED_MINT
      );

      console.log('Deposit successful! Transaction:', tx);

      // Refresh data
      await fetchData();
      setDepositAmount('');

    } catch (err: any) {
      console.error('Deposit error:', err);
      setError(err.message || 'Deposit failed');
    } finally {
      setDepositing(false);
    }
  };

  // Handle withdraw
  const handleWithdraw = async () => {
    if (!connected || !publicKey || !wallet || !withdrawShares) return;

    try {
      setWithdrawing(true);
      setError(null);

      const shares = parseFloat(withdrawShares);
      if (shares <= 0) {
        throw new Error('Shares must be greater than 0');
      }
      if (shares > userShares) {
        throw new Error(`Insufficient shares. You have ${userShares.toFixed(2)} shares`);
      }

      const program = await getProgram(wallet.adapter as any);
      const tx = await contractWithdraw(
        program,
        publicKey,
        shares,
        USDC_MINT
      );

      console.log('Withdrawal successful! Transaction:', tx);

      // Refresh data
      await fetchData();
      setWithdrawShares('');

    } catch (err: any) {
      console.error('Withdraw error:', err);
      setError(err.message || 'Withdrawal failed');
    } finally {
      setWithdrawing(false);
    }
  };

  if (!connected) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white p-8 md:p-12 rounded-2xl border-2 border-slate-200 text-center">
          <Wallet className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Connect Your Wallet</h1>
          <p className="text-slate-600 mb-8">
            Connect your Solana wallet to access the BASED Protocol dashboard and start investing.
          </p>
          <WalletMultiButton />
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Don't have a wallet?{' '}
              <a href="https://phantom.app" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                Get Phantom
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  const getTierName = (tier: number) => {
    if (tier === 0) return 'Conservative';
    if (tier === 1) return 'Aggressive';
    return 'Life Changing';
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Launch Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm md:text-base font-bold">
            🚀 $BASED launches on Pump.fun - December 3rd, 2025 | Full protocol activates after Raydium graduation
          </p>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-2 font-semibold">YOUR DASHBOARD</p>
              <h1 className="text-3xl font-bold text-white mb-2">Investment Overview</h1>
              <p className="text-slate-400 text-sm font-mono">
                {publicKey?.toBase58().slice(0, 4)}...{publicKey?.toBase58().slice(-4)}
              </p>
              {userShares > 0 && (
                <p className="text-emerald-400 text-sm mt-2">Active Tier: {getTierName(userTier)}</p>
              )}
            </div>
            {!loading && (
              <button
                onClick={fetchData}
                className="text-emerald-400 hover:text-emerald-300 text-sm flex items-center gap-2"
              >
                <Loader2 className="w-4 h-4" />
                Refresh Data
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Error Message */}
      {error && (
        <div className="max-w-7xl mx-auto px-6 mt-6">
          <div className="bg-red-50 border-2 border-red-200 p-4 rounded-lg">
            <p className="text-red-800 text-sm">{error}</p>
            <button
              onClick={() => setError(null)}
              className="text-red-600 text-xs mt-2 underline"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
              <span className="ml-3 text-slate-600">Loading blockchain data...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-xl border-2 border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg group">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs uppercase tracking-wider text-slate-600 font-semibold">Total Deposited</p>
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-1">${userDeposited.toFixed(2)}</p>
                <p className="text-xs text-slate-500 font-medium">USDC Balance</p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl border-2 border-emerald-200 hover:border-emerald-300 transition-all hover:shadow-lg group">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs uppercase tracking-wider text-emerald-700 font-semibold">Current Value</p>
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-1">${currentValue.toFixed(2)}</p>
                {userDeposited > 0 && (
                  <p className="text-xs text-emerald-600 font-semibold">
                    +{((currentValue / userDeposited - 1) * 100).toFixed(1)}% Gain
                  </p>
                )}
              </div>

              <div className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-xl border-2 border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg group">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs uppercase tracking-wider text-slate-600 font-semibold">Total Earned</p>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform ${totalEarned >= 0 ? 'bg-emerald-100' : 'bg-red-100'}`}>
                    <ArrowUpRight className={`w-5 h-5 ${totalEarned >= 0 ? 'text-emerald-600' : 'text-red-600'}`} />
                  </div>
                </div>
                <p className={`text-3xl font-bold mb-1 ${totalEarned >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                  ${Math.abs(totalEarned).toFixed(2)}
                </p>
                <p className="text-xs text-slate-500 font-medium">All-time P&L</p>
              </div>

              <div className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-xl border-2 border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg group">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs uppercase tracking-wider text-slate-600 font-semibold">Your Shares</p>
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Lock className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-1">{userShares.toFixed(2)}</p>
                <p className="text-xs text-slate-500 font-medium">Exit Fee: <span className="text-slate-700 font-semibold">{exitFeePercent}%</span></p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Deposit/Withdraw */}
            <div className="lg:col-span-2 space-y-6">
              {/* Tier Selection */}
              {userShares === 0 && (
                <div className="bg-white p-6 md:p-8 rounded-xl border-2 border-slate-200">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Select Investment Tier</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <button
                      onClick={() => setSelectedTier(0)}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        selectedTier === 0
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-slate-200 hover:border-blue-300'
                      }`}
                    >
                      <Shield className="w-6 h-6 text-blue-600 mb-2" />
                      <h3 className="font-bold text-slate-900">Conservative</h3>
                      <p className="text-xs text-slate-600 mt-1">10-12% APY</p>
                    </button>

                    <button
                      onClick={() => setSelectedTier(1)}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        selectedTier === 1
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-slate-200 hover:border-emerald-300'
                      }`}
                    >
                      <TrendingUp className="w-6 h-6 text-emerald-600 mb-2" />
                      <h3 className="font-bold text-slate-900">Aggressive</h3>
                      <p className="text-xs text-slate-600 mt-1">15-20% APY</p>
                    </button>

                    <button
                      onClick={() => setSelectedTier(2)}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        selectedTier === 2
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-slate-200 hover:border-purple-300'
                      }`}
                    >
                      <Zap className="w-6 h-6 text-purple-600 mb-2" />
                      <h3 className="font-bold text-slate-900">Life Changing</h3>
                      <p className="text-xs text-slate-600 mt-1">30-100%+ APY</p>
                    </button>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-slate-600">
                        {selectedTier === 0 && (
                          <p><strong>Conservative:</strong> No $BASED required. 0.1% deposit fee. Stable yields through lending.</p>
                        )}
                        {selectedTier === 1 && (
                          <p><strong>Aggressive:</strong> Auto-buys 10K $BASED. 0.05% deposit fee. Jito staking + LPs.</p>
                        )}
                        {selectedTier === 2 && (
                          <p><strong>Life Changing:</strong> Auto-buys 50K $BASED. 0% deposit fee. Leveraged strategies.</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Deposit */}
              <div className="bg-gradient-to-br from-white to-slate-50 p-6 md:p-8 rounded-xl border-2 border-slate-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <ArrowDownLeft className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Deposit USDC</h2>
                    <p className="text-xs text-slate-500">Add funds to your position</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-600 font-semibold mb-2">Amount (USDC)</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">$</span>
                      <input
                        type="number"
                        value={depositAmount}
                        onChange={(e) => setDepositAmount(e.target.value)}
                        placeholder="0.00"
                        disabled={depositing}
                        className="w-full pl-8 pr-4 py-4 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none text-xl font-bold disabled:bg-slate-100 transition-all"
                      />
                    </div>
                  </div>
                  <button
                    disabled
                    className="w-full bg-gradient-to-r from-slate-300 to-slate-400 text-slate-600 py-4 rounded-lg font-bold cursor-not-allowed flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Lock className="w-4 h-4" />
                    Deposits Available After Raydium Graduation
                  </button>
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-4 rounded-lg">
                    <div className="flex gap-3">
                      <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-amber-900 leading-relaxed">
                        <strong className="font-bold">Phase 1:</strong> Token launches December 3rd on Pump.fun. Deposits will be enabled in Phase 3 after we graduate to Raydium at $69K market cap.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Withdraw */}
              {userShares > 0 && (
                <div className="bg-white p-6 md:p-8 rounded-xl border-2 border-slate-200">
                  <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <ArrowUpRight className="w-5 h-5 text-slate-600" />
                    Withdraw Funds
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Shares to Withdraw (Max: {userShares.toFixed(2)})
                      </label>
                      <input
                        type="number"
                        value={withdrawShares}
                        onChange={(e) => setWithdrawShares(e.target.value)}
                        placeholder="0.00"
                        max={userShares}
                        disabled={withdrawing}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-400 focus:outline-none text-lg font-semibold disabled:bg-slate-50"
                      />
                    </div>
                    <button
                      disabled
                      className="w-full bg-slate-300 text-slate-600 py-4 rounded-lg font-bold cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      Withdrawals Available After Raydium Graduation
                    </button>
                    <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                      <p className="text-xs text-amber-800 leading-relaxed">
                        Full protocol features including withdrawals will activate in Q1 2026 after Raydium graduation.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Links */}
              <div className="bg-white p-6 rounded-xl border-2 border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link href="/how-it-works" className="block text-sm text-slate-600 hover:text-emerald-600 transition">
                    → How It Works
                  </Link>
                  <Link href="/tokenomics" className="block text-sm text-slate-600 hover:text-emerald-600 transition">
                    → Tokenomics
                  </Link>
                  <Link href="/faq" className="block text-sm text-slate-600 hover:text-emerald-600 transition">
                    → FAQ
                  </Link>
                  <Link href="/whitepaper" className="block text-sm text-slate-600 hover:text-emerald-600 transition">
                    → Whitepaper
                  </Link>
                </div>
              </div>

              {/* Protocol Stats */}
              {!loading && (
                <div className="bg-white p-6 rounded-xl border-2 border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-4">Protocol Stats</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Total NAV:</span>
                      <span className="font-semibold">${totalNav.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Total Shares:</span>
                      <span className="font-semibold">{totalShares.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Share Price:</span>
                      <span className="font-semibold">
                        ${totalShares > 0 ? (totalNav / totalShares).toFixed(4) : '1.0000'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Risk Warning */}
              <div className="bg-amber-50 border-2 border-amber-200 p-6 rounded-xl">
                <h3 className="font-bold text-amber-900 mb-2 text-sm">⚠️ Risk Warning</h3>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Cryptocurrency investments carry risk. Only invest what you can afford to lose.
                  Past performance does not guarantee future results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
