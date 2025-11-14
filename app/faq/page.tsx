'use client';

import Link from 'next/link';
import WalletButton from '../../components/WalletButton';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is BASED Protocol?",
      a: "BASED Protocol is a professional DeFi fund that manages your crypto assets across multiple high-yielding protocols on Solana (and eventually other chains). We target 15-20% annual returns through active management, leverage, and yield optimization. The $BASED token acts as your access key - the more you hold, the better strategies you unlock."
    },
    {
      q: "How does $BASED token have value?",
      a: "Unlike most tokens, $BASED has real utility: (1) Access Key - hold it to unlock higher-yield strategies, (2) Revenue Share - stake it to earn from protocol fees, (3) Fee Discounts - hold 10K tokens = 50% off fees, 50K tokens = free deposits, (4) Buyback & Burn - 50% of all protocol fees buy $BASED from the market, with half burned forever and half distributed to stakers."
    },
    {
      q: "What are the three strategy tiers?",
      a: "Conservative (free): Blue-chip assets (USDC, SOL, ETH) with 10-12% APY targets. Aggressive (10K $BASED required): Adds leveraged positions and LP farming for 15-20% APY. Life Changing (50K $BASED required): Adds calculated meme plays and moonshots for 30-100%+ APY potential (high risk)."
    },
    {
      q: "What are the fees?",
      a: "Deposit fees: 0.1% Conservative, 0.05% Aggressive, 0% Life Changing. Plus standard 2/20 structure (2% annual management fee, 20% performance fee on profits above 8%). All fees contribute to $BASED buyback/burn/rewards."
    },
    {
      q: "Is this safe? What are the risks?",
      a: "All DeFi carries risk. Main risks: (1) Smart contract bugs (we audit everything), (2) Market volatility (crypto can crash), (3) Protocol failures (we diversify across 5+ protocols), (4) Impermanent loss in LP strategies. Never invest more than you can afford to lose. Conservative tier is lowest risk."
    },
    {
      q: "When can I withdraw my funds?",
      a: "Deposits can be withdrawn at any time with no lock-up period. However, we recommend staying invested at least 6-12 months to capture full yield potential and reduce gas fee impact."
    },
    {
      q: "How do you generate 15-20% returns?",
      a: "Through multi-protocol yield optimization: Kamino lending (12% on USDC), Jito SOL staking (9.5%), Meteora LP pools (15-20%), MarginFi leveraged positions (18-25%), and active rebalancing. We use strategies most retail investors can't access or don't understand."
    },
    {
      q: "Do I need to hold $BASED to use the fund?",
      a: "No - the Conservative tier is available to everyone with no $BASED required. However, holding $BASED unlocks: (1) Aggressive strategies (10K tokens), (2) Life Changing strategies (50K tokens), (3) Lower fees, (4) Revenue sharing from protocol."
    },
    {
      q: "When does $BASED launch?",
      a: "December 3rd, 2025 on Pump.fun. The full fund with all strategies launches Q1 2026 after smart contract audits and testing."
    },
    {
      q: "Is this regulated? Are you registered?",
      a: "We are establishing proper legal structure for fund operations. For accredited investors and larger amounts, we will have appropriate documentation. For smaller retail amounts, users interact directly with smart contracts. Always consult your own legal/tax advisor."
    },
    {
      q: "What blockchain is this on?",
      a: "Initially Solana for low fees and fast transactions. Phase 2 expands to Ethereum, Base, and Arbitrum for multi-chain yield opportunities."
    },
    {
      q: "How can I track my returns?",
      a: "Live dashboard at usbased.xyz/dashboard shows real-time balances, APY, and performance. Monthly reports sent to all fund participants. Everything is transparent on-chain."
    },
    {
      q: "What makes you different from Lido/Rocket Pool?",
      a: "They're single-asset staking protocols (just ETH). We're a multi-asset fund with active management. They offer 4-6% returns. We target 15-20%. They have no token utility beyond governance. $BASED unlocks strategies, shares revenue, and gets burned."
    },
    {
      q: "Can I lose money?",
      a: "Yes. Crypto is volatile. Even with 15% APY, if the assets drop 30%, you're still down 15% net. Life Changing tier can lose 50%+ in bear markets. Only invest what you can afford to lose. Conservative tier in stablecoins has lowest risk."
    },
    {
      q: "Who runs this?",
      a: "Sirmark - 13+ years building successful businesses, trained 500+ clients, built 3 fitness companies. Now applying that discipline to DeFi. Christian values, full transparency, no BS."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">← BASED Protocol</Link>
          <WalletButton />
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-2xl text-gray-300">
            Everything you need to know about BASED Protocol
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/5 border-2 border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-blue-500 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center"
              >
                <h3 className="text-xl font-bold text-white pr-8">{faq.q}</h3>
                <span className="text-3xl text-blue-400">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-lg text-gray-300 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white mb-8">
            Join our Telegram and ask the community
          </p>
          <a 
            href="https://t.me/staybasedpro"
            target="_blank"
            className="inline-block bg-white text-blue-600 font-bold text-xl px-12 py-5 rounded-xl hover:bg-gray-100 transition-all"
          >
            Join Telegram →
          </a>
        </div>
      </div>
    </main>
  );
}
