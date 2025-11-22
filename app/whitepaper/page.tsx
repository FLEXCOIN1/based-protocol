import Link from 'next/link';

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">BASED Protocol Whitepaper</h1>
          <p className="text-xl text-gray-600 mb-12">
            The First DeFi ETF with Integrated Deflationary Utility Token
          </p>

          <div className="prose prose-lg max-w-none">
            <h2>Executive Summary</h2>
            <p>
              BASED Protocol revolutionizes cryptocurrency investing by combining institutional-grade fund management with a deflationary utility token. We solve the complexity of crypto portfolio management while creating sustainable value through an integrated buyback-and-burn mechanism.
            </p>

            <h3>Key Innovation</h3>
            <ul>
              <li>Users deposit USDC → receive diversified crypto exposure across 3 risk tiers</li>
              <li>Protocol automatically purchases $BASED token (5-25% allocation based on tier)</li>
              <li>Protocol fees fund continuous $BASED buyback → 50% burned forever, 50% distributed to stakers</li>
              <li>Creates constant buy pressure and deflationary tokenomics</li>
            </ul>

            <h2>The Problem</h2>
            <p>
              Crypto investing is unnecessarily complex. Individual investors face analysis paralysis with 20,000+ cryptocurrencies, high gas fees ($50-200 for diversified portfolios), constant rebalancing burden, and tax complexity from every swap.
            </p>

            <h2>The Solution</h2>
            <p>
              BASED Protocol provides institutional ETF management with automatic portfolio construction via Jupiter DEX, continuous buyback mechanism from protocol fees, and time-based exit fees that incentivize long-term holding.
            </p>

            <h2>Three Investment Tiers</h2>
            
            <h3>BASIC (10-15% APY Target)</h3>
            <p><strong>Portfolio:</strong> 35% BTC, 30% ETH, 20% SOL, 10% USDC yield, 5% $BASED</p>
            <p><strong>Risk:</strong> Low volatility, capital preservation focus</p>

            <h3>ADVANCED (20-30% APY Target)</h3>
            <p><strong>Portfolio:</strong> 30% BTC, 25% ETH, 20% SOL, 10% DeFi, 5% Emerging L1s, 10% $BASED</p>
            <p><strong>Risk:</strong> Balanced growth, diversified protocol exposure</p>

            <h3>AGGRESSIVE (50-100%+ APY Target)</h3>
            <p><strong>Portfolio:</strong> 20% BTC, 20% ETH, 15% SOL, 10% DeFi, 10% High-potential alts, 25% $BASED</p>
            <p><strong>Risk:</strong> Maximum growth, venture-style returns</p>

            <h2>$BASED Tokenomics</h2>
            <p><strong>Total Supply:</strong> 1,000,000,000 (1 billion)</p>
            <p><strong>Launch:</strong> December 3, 2025 on Pump.fun</p>
            <p><strong>Chain:</strong> Solana (SPL token)</p>

            <h3>Deflationary Mechanism</h3>
            <p>Protocol revenue (deposit fees 0.5% + exit fees 0-50%) splits:</p>
            <ul>
              <li>50% → Buyback $BASED from market</li>
              <li>25% → Burn forever (deflationary)</li>
              <li>25% → Distribute to $BASED stakers (rewards)</li>
            </ul>

            <h2>Launch Strategy</h2>
            <ol>
              <li><strong>Dec 3, 2025:</strong> $BASED launches on Pump.fun</li>
              <li><strong>Mid-Dec 2025:</strong> Raydium graduation (bonding curve complete)</li>
              <li><strong>Q1 2026:</strong> Full ETF protocol launches with automatic portfolio buying</li>
            </ol>

            <h2>Revenue Model</h2>
            <ul>
              <li><strong>Deposit Fees:</strong> 0.5% on all deposits</li>
              <li><strong>Exit Fees:</strong> 50% (0-1mo) → 25% (2-6mo) → 10% (6-9mo) → 5% (9-11mo) → 0% (12+mo)</li>
              <li><strong>Management Fees (Future):</strong> 1-2% annually</li>
            </ul>

            <h2>Technical Architecture</h2>
            <p><strong>Smart Contract:</strong> Solana/Anchor framework</p>
            <p><strong>Program ID:</strong> 4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd</p>
            <p><strong>DEX Integration:</strong> Jupiter aggregator for swaps</p>
            <p><strong>Price Oracles:</strong> Pyth Network (real-time feeds)</p>

            <h2>Risk Factors</h2>
            <ul>
              <li><strong>Technical Risks:</strong> Mitigated by audits and bug bounties</li>
              <li><strong>Market Risks:</strong> Crypto volatility expected and communicated</li>
              <li><strong>Operational Risks:</strong> Emergency pause, gradual decentralization</li>
            </ul>

            <h2>Roadmap</h2>
            <ul>
              <li><strong>Q4 2024:</strong> Foundation & development ✅</li>
              <li><strong>Q1 2025:</strong> Smart contract completion ✅</li>
              <li><strong>Dec 3, 2025:</strong> $BASED token launch 🚀</li>
              <li><strong>Q1 2026:</strong> Full ETF protocol launch</li>
              <li><strong>Q2 2026:</strong> Scaling & DAO governance</li>
            </ul>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mt-12">
              <h3>Download Full Whitepaper</h3>
              <p className="mb-4">Complete technical documentation, tokenomics, and mathematical models</p>
              <a 
                href="/BASED_WHITEPAPER.pdf" 
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
              >
                Download PDF (Coming Soon)
              </a>
            </div>

            <div className="mt-12 text-sm text-gray-500">
              <p>⚠️ <strong>Disclaimer:</strong> High-risk investment. Cryptocurrency is volatile and may result in total loss. Not FDIC insured. This whitepaper is informational only, not financial advice.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
