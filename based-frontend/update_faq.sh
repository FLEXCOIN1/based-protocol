#!/bin/bash

cat > app/faq/page.tsx << 'EOF'
export default function FAQ() {
  const faqs = [
    {
      q: "What is BASED Protocol?",
      a: "BASED Protocol is a professional DeFi fund built on Solana. We manage user deposits across proven yield strategies and use protocol fees to buy back and burn $BASED tokens, creating constant value for holders."
    },
    {
      q: "How do the three tiers work?",
      a: "Conservative (10-12% APY) is free entry. Aggressive (15-20% APY) requires 10K $BASED. Life Changing (30-100%+ APY) requires 50K $BASED. All tiers stake into ONE Solana-based protocol - you're not choosing between different blockchains."
    },
    {
      q: "Do I need to manually buy $BASED?",
      a: "No! When you deposit USDC, the protocol automatically buys the required amount of $BASED to unlock your tier. You never need to manually swap or buy tokens."
    },
    {
      q: "Where do my funds actually go?",
      a: "Your USDC is deployed across proven Solana DeFi protocols like Kamino (lending), Jito (liquid staking), Meteora (liquidity pools), and Marinade (mSOL staking). Allocation depends on your tier."
    },
    {
      q: "How does $BASED create value?",
      a: "50% of all protocol fees automatically buy $BASED from the market. 25% is burned forever (reducing supply), and 25% is distributed to stakers. Constant buy pressure + decreasing supply = price appreciation."
    },
    {
      q: "When does everything launch?",
      a: "December 3rd: $BASED launches on Pump.fun. Late December: Migration to Raydium at $69K market cap. January 2026: Full DeFi fund goes live with Conservative tier. Q1 2026: All tiers operational."
    },
    {
      q: "What are the risks?",
      a: "Cryptocurrency is extremely volatile. DeFi protocols can be hacked. Smart contracts can have bugs. You could lose everything. Only invest what you can afford to lose completely."
    },
    {
      q: "How do I get started?",
      a: "Connect a Solana wallet (Phantom or Solflare), choose your tier, deposit USDC. The protocol handles everything else automatically."
    },
    {
      q: "Can I withdraw anytime?",
      a: "Yes, but withdrawal fees apply based on your tier. Conservative has lowest fees, Life Changing has highest unlock fees. Check the tier details before depositing."
    },
    {
      q: "Who runs BASED Protocol?",
      a: "Founded by Sirmark Critney, Developer and Crypto Fund Manager. The protocol is designed to be transparent and automated, with founder and team holding significant $BASED positions."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-6">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 text-center mb-16">
          Everything you need to know about BASED Protocol
        </p>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="card">
              <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.q}</h3>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
EOF

echo "✅ Updated: FAQ"
