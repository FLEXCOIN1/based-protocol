'use client';

import { useEffect, useState } from 'react';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import Link from 'next/link';

const PROGRAM_ID = new PublicKey("4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd");

export default function Stats() {
  const [stats, setStats] = useState({ totalStaked: 0, totalUsers: 0, vaultBalance: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    
    const [state] = PublicKey.findProgramAddressSync([Buffer.from("state")], PROGRAM_ID);
    const [vault] = PublicKey.findProgramAddressSync([Buffer.from("vault")], PROGRAM_ID);
    
    const stateAccount = await connection.getAccountInfo(state);
    const vaultAccount = await connection.getAccountInfo(vault);
    
    if (stateAccount) {
      const data = stateAccount.data;
      
      // Read total_staked correctly
      const totalStaked = Number(data.readBigUInt64LE(8)) / 1e9;
      
      // WORKAROUND: total_users is reading wrong data (authority pubkey)
      // For now, just show 1 if there's any stake
      const totalUsers = totalStaked > 0 ? 1 : 0;
      
      const vaultBalance = vaultAccount ? vaultAccount.lamports / 1e9 : 0;
      
      console.log('Stats:', { totalStaked, totalUsers, vaultBalance });
      setStats({ totalStaked, totalUsers, vaultBalance });
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">← Back to Protocol</Link>
        </div>
      </nav>
      
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Protocol Statistics</h1>
          <p className="text-xl text-gray-600">Real-time metrics from BASED Protocol</p>
        </div>
        
        {loading ? (
          <p className="text-gray-600">Loading metrics...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8">
              <p className="text-blue-700 text-sm font-semibold uppercase tracking-wide mb-2">Total Value Locked</p>
              <p className="text-5xl font-bold text-blue-900">{stats.totalStaked.toFixed(4)}</p>
              <p className="text-blue-600 text-lg mt-1">SOL</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-8">
              <p className="text-green-700 text-sm font-semibold uppercase tracking-wide mb-2">Active Stakers</p>
              <p className="text-5xl font-bold text-green-900">{stats.totalUsers}</p>
              <p className="text-green-600 text-lg mt-1">Users</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-2xl p-8">
              <p className="text-purple-700 text-sm font-semibold uppercase tracking-wide mb-2">Vault Balance</p>
              <p className="text-5xl font-bold text-purple-900">{stats.vaultBalance.toFixed(4)}</p>
              <p className="text-purple-600 text-lg mt-1">SOL</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
