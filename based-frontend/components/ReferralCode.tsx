'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { useState } from 'react';

export default function ReferralCode() {
  const { publicKey } = useWallet();
  const [copied, setCopied] = useState(false);

  if (!publicKey) return null;

  const referralLink = `${window.location.origin}?ref=${publicKey.toString()}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-2 text-white">🔗 Your Referral Link</h3>
      <p className="text-sm text-gray-300 mb-4">Earn 10% of penalties when your referrals unstake early!</p>
      <div className="flex gap-2">
        <input
          type="text"
          value={referralLink}
          readOnly
          className="flex-1 bg-white/20 rounded px-4 py-2 text-white text-sm font-mono"
        />
        <button
          onClick={copyToClipboard}
          className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded font-bold"
        >
          {copied ? '✅ Copied!' : '📋 Copy'}
        </button>
      </div>
    </div>
  );
}
