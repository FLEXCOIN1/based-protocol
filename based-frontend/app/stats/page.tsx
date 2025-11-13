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
      const totalStaked = Number(data.readBigUInt64LE(8)) / 1e9;
      const totalUsers = Number(data.readBigUInt64LE(24));
      const vaultBalance = vaultAccount ? vaultAccount.lamports / 1e9 : 0;
      
      setStats({ totalStaked, totalUsers, vaultBalance });
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">← Back</Link>
        
        <h1 className="text-4xl font-bold mb-8">BASED Protocol Stats</h1>
        
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-400 text-sm">Total Staked</p>
              <p className="text-3xl font-bold text-green-400">{stats.totalStaked.toFixed(4)} SOL</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-400 text-sm">Total Stakers</p>
              <p className="text-3xl font-bold text-blue-400">{stats.totalUsers}</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-400 text-sm">Vault Balance</p>
              <p className="text-3xl font-bold text-purple-400">{stats.vaultBalance.toFixed(4)} SOL</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
