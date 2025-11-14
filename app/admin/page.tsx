'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';
import WalletButton from '@/components/WalletButton';
import { getConnection, PROGRAM_ID } from '@/lib/config';
import { PublicKey } from '@solana/web3.js';

const AUTHORITY_WALLET = '4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd';

export default function AdminDashboard() {
  const { publicKey } = useWallet();
  const [stats, setStats] = useState({
    totalStaked: 0,
    activeUsers: 0,
    treasuryBalance: 0,
    pendingRewards: 0,
  });
  const [transactions, setTransactions] = useState<any[]>([]);
  const [tvlHistory, setTvlHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d'>('24h');

  const isAuthorized = publicKey?.toBase58() === AUTHORITY_WALLET;

  useEffect(() => {
    if (!isAuthorized) return;

    const fetchStats = async () => {
      try {
        const connection = getConnection();
        const programAccount = await connection.getAccountInfo(PROGRAM_ID);
        const signatures = await connection.getSignaturesForAddress(PROGRAM_ID, { limit: 50 });

        const now = Date.now();
        const mockTvl = Array.from({ length: 24 }, (_, i) => ({
          time: new Date(now - (23 - i) * 3600000).toLocaleTimeString(),
          tvl: (programAccount?.lamports || 0) / 1e9 + Math.random() * 10,
        }));

        setTransactions(signatures);
        setTvlHistory(mockTvl);
        setStats({
          totalStaked: programAccount?.lamports || 0,
          activeUsers: signatures.length,
          treasuryBalance: programAccount?.lamports || 0,
          pendingRewards: 0,
        });
        
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch admin stats:', error);
        setLoading(false);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, [isAuthorized]);

  const exportCSV = () => {
    const csvData = [
      ['Signature', 'Time', 'Status'],
      ...transactions.map(tx => [
        tx.signature,
        new Date((tx.blockTime || 0) * 1000).toISOString(),
        tx.err ? 'Failed' : 'Success'
      ])
    ];
    
    const csv = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `transactions-${Date.now()}.csv`;
    a.click();
  };

  if (!publicKey) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
          <p className="mb-8">Connect your wallet to access</p>
          <WalletButton />
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
          <p>You are not authorized to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <WalletButton />
        </div>

        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <StatCard title="Total Staked" value={`${(stats.totalStaked / 1e9).toFixed(2)} SOL`} icon="💰" />
              <StatCard title="Active Users" value={stats.activeUsers.toString()} icon="👥" />
              <StatCard title="Treasury Balance" value={`${(stats.treasuryBalance / 1e9).toFixed(2)} SOL`} icon="🏦" />
              <StatCard title="Pending Rewards" value={`${(stats.pendingRewards / 1e9).toFixed(2)} SOL`} icon="🎁" />
            </div>

            <div className="bg-gray-900 rounded-lg p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">TVL Over Time</h2>
                <div className="flex gap-2">
                  {(['24h', '7d', '30d'] as const).map(range => (
                    <button
                      key={range}
                      onClick={() => setTimeRange(range)}
                      className={`px-4 py-2 rounded ${timeRange === range ? 'bg-purple-600' : 'bg-gray-800'}`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-64 flex items-end gap-2">
                {tvlHistory.map((point, i) => (
                  <div key={i} className="flex-1 bg-purple-600 rounded-t" style={{ height: `${(point.tvl / Math.max(...tvlHistory.map(p => p.tvl))) * 100}%` }} title={`${point.time}: ${point.tvl.toFixed(2)} SOL`} />
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Live Transaction Feed</h2>
                <button onClick={exportCSV} className="px-4 py-2 bg-green-600 rounded hover:bg-green-700">
                  Export CSV
                </button>
              </div>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {transactions.map((tx, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <div className="flex items-center gap-4">
                      <span className={`w-2 h-2 rounded-full ${tx.err ? 'bg-red-500' : 'bg-green-500'}`} />
                      <span className="font-mono text-sm">{tx.signature.slice(0, 8)}...{tx.signature.slice(-8)}</span>
                      <span className="text-gray-400 text-sm">{new Date((tx.blockTime || 0) * 1000).toLocaleTimeString()}</span>
                    </div>
                    <a href={`https://explorer.solana.com/tx/${tx.signature}?cluster=devnet`} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                      View →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }: { title: string; value: string; icon: string }) {
  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-400">{title}</span>
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="text-3xl font-bold">{value}</div>
    </div>
  );
}
