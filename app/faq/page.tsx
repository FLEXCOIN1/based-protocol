export default function FAQ() {
  const faqs = [
    {
      q: "What is BASED Protocol?",
      a: "BASED Protocol is a DeFi ETF that automatically diversifies your USDC into Bitcoin, Ethereum, Solana, and $BASED token. Think of it as a professionally managed crypto fund accessible to everyone."
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
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 mb-12">Everything you need to know about BASED Protocol</p>

          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-4">Join our community or read the full whitepaper</p>
            <div className="flex gap-4 justify-center">
              <a href="/whitepaper" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                Read Whitepaper
              </a>
              <a href="https://discord.gg/based" className="px-6 py-3 border-2 border-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white">
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
