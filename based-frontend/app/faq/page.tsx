'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is BASED Protocol?",
      a: "BASED Protocol is an institutional-grade DeFi fund on Solana offering tiered investment strategies with yields ranging from 10-100%+ APY. The protocol automatically deploys capital across curated Solana protocols like Kamino, Jito, and Meteora.",
      category: "General"
    },
    {
      q: "How do I invest?",
      a: "Choose a tier (Basic, Advanced, or Aggressive), deposit USDC, and receive shares representing your ownership of the fund. Protocol automatically buys your diversified portfolio."
    },
    {
      q: "What are the fees?",
      a: "0.5% deposit fee covers gas and operations. Exit fees range from 50% (if you withdraw in first month) down to 0% after 12 months. This incentivizes long-term holding."
    },
    {
      q: "Can I withdraw anytime?",
      a: "Yes! You can withdraw anytime by burning your shares. However, exit fees apply based on how long you've held (50% → 25% → 10% → 5% → 0% over 12 months)."
    },
    {
      q: "What is $BASED token?",
      a: "$BASED is the protocol's utility token with deflationary tokenomics. Protocol fees fund continuous buyback (50% of revenue), with 25% burned forever and 25% distributed to stakers."
    },
    {
      q: "When does $BASED launch?",
      a: "December 3rd, 2025 on Pump.fun. After graduating to Raydium, the full ETF protocol launches in Q1 2026."
    },
    {
      q: "What's the difference between the three tiers?",
      a: "BASIC (5% $BASED): Conservative, 10-15% APY target. ADVANCED (10% $BASED): Balanced, 20-30% APY target. AGGRESSIVE (25% $BASED): High risk/reward, 50-100%+ APY target."
    },
    {
      q: "Is this safe?",
      a: "No investment is without risk. Cryptocurrency is highly volatile. Our smart contracts are audited, but you should only invest what you can afford to lose. Not FDIC insured."
    },
    {
      q: "How is NAV calculated?",
      a: "NAV (Net Asset Value) = Total value of all fund assets (BTC, ETH, SOL, $BASED, USDC) at current market prices. Updated in real-time via Pyth oracles."
    },
    {
      q: "Do I own the crypto directly?",
      a: "No. You own shares representing your % of the fund. Protocol owns the actual crypto assets. This allows for automatic rebalancing and simplified tax reporting."
    },
    {
      q: "What happens if I hold for 12+ months?",
      a: "No exit fee! You can withdraw your full share value in USDC after holding 12 months or longer."
    },
    {
      q: "How does the buyback work?",
      a: "Protocol collects fees → Uses 50% to buy $BASED from market → Burns 25% forever → Distributes 25% to stakers. Creates constant buy pressure."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-white to-slate-100 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <HelpCircle className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-4 font-semibold">SUPPORT CENTER</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-slate-600">
            Everything you need to know about BASED Protocol
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden hover:border-emerald-500 transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <h3 className="text-lg font-bold text-slate-900 flex-1">{faq.q}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-slate-400 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-400 flex-shrink-0 ml-4" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions? */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Check out our documentation or connect with our community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/whitepaper" className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-400 transition-all">
              Read Whitepaper
            </Link>
            <Link href="/how-it-works" className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all">
              How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
