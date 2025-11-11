'use client';

import Link from 'next/link';
import WalletButton from '@/components/WalletButton';

export default function Growth() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">BASED Reserve</h1>
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium text-gray-600 hover:text-blue-600">How It Works</Link>
            <Link href="/tokenomics" className="text-sm font-medium text-gray-600 hover:text-blue-600">Tokenomics</Link>
            <Link href="/growth" className="text-sm font-medium text-blue-600">Growth Strategy</Link>
            <Link href="/about-based" className="text-sm font-medium text-gray-600 hover:text-blue-600">About $BSOL</Link>
            <Link href="/faq" className="text-sm font-medium text-gray-600 hover:text-blue-600">FAQ</Link>
          </div>
          <WalletButton />
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Growth Strategy & Expectations</h1>
        <p className="text-xl text-gray-600 mb-12">Honest assessment of where we're going and why</p>

        {/* Executive Summary */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Executive Summary</h2>
          <p className="text-gray-700 mb-4">
            BASED Reserve is launching into a historic moment for crypto banking. In April 2025, U.S. regulators greenlit 
            traditional banks to custody crypto. This creates TWO opportunities:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">1.</span>
              <span>Conservative investors gain access to regulated, insured crypto custody (lower yield, lower risk)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">2.</span>
              <span>Aggressive yield seekers access decentralized staking with higher returns (higher yield, higher risk)</span>
            </li>
          </ul>
          <p className="text-gray-700 mt-4 font-semibold">
            Smart investors diversify between both. We're the aggressive yield component of a balanced crypto portfolio.
          </p>
        </div>

        {/* Market Positioning */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Market Positioning</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-6">
            <h3 className="text-xl font-bold mb-4 text-gray-900">The Competitive Landscape</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Traditional Crypto Banks (USCR, Coinbase Custody)</h4>
                <ul className="space-y-1 text-gray-700 text-sm ml-4">
                  <li>• <strong>Yields:</strong> 1-4% APY</li>
                  <li>• <strong>Risk:</strong> Low (regulated, insured)</li>
                  <li>• <strong>Control:</strong> Custodial (they hold your keys)</li>
                  <li>• <strong>Fees:</strong> Monthly maintenance fees, withdrawal fees</li>
                  <li>• <strong>Access:</strong> KYC required, geographic restrictions</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">BASED Reserve</h4>
                <ul className="space-y-1 text-gray-700 text-sm ml-4">
                  <li>• <strong>Yields:</strong> 8.5-85% APY (tier-based)</li>
                  <li>• <strong>Risk:</strong> Higher (smart contract risk, market volatility)</li>
                  <li>• <strong>Control:</strong> Self-custody (you keep your keys)</li>
                  <li>• <strong>Fees:</strong> Zero monthly fees, only early withdrawal penalties</li>
                  <li>• <strong>Access:</strong> Global, no KYC</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
            <p className="text-gray-700 font-semibold">
              We're not trying to replace traditional crypto banks—we complement them. Conservative capital goes to USCR. 
              Aggressive capital seeking higher yields comes to us.
            </p>
          </div>
        </section>

        {/* Growth Thesis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Why We'll Grow</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Regulatory Tailwind</h3>
              <p className="text-gray-700">
                April 2025 policy shift legitimized crypto as an asset class. Traditional finance is entering crypto—bringing 
                billions in capital. Some of that capital will seek higher yields than banks offer. That's our market.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Proven DeFi Economics</h3>
              <p className="text-gray-700 mb-3">
                Our model isn't experimental. Successful DeFi protocols (GMX, Curve, Aave) have proven that:
              </p>
              <ul className="text-gray-700 text-sm space-y-1 ml-4">
                <li>• Revenue-generating protocols attract capital</li>
                <li>• Buyback & burn creates price pressure</li>
                <li>• Tiered rewards incentivize long-term holding</li>
              </ul>
              <p className="text-gray-700 mt-3">
                We're applying battle-tested tokenomics to a newly legitimized market.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. Solana Infrastructure</h3>
              <p className="text-gray-700">
                Built on Solana = fast, cheap transactions. Users can deposit, withdraw, and compound without paying $50 in gas fees. 
                This makes frequent interactions economically viable, driving engagement.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Deflationary Supply Mechanics</h3>
              <p className="text-gray-700">
                40% of all revenue goes to buyback & burn. As TVL grows, revenue grows, burn rate increases. This creates a 
                self-reinforcing cycle: more deposits → more revenue → more burns → higher token price → attracts more deposits.
              </p>
            </div>
          </div>
        </section>

        {/* Risks & Mitigation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Risks & How We Address Them</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <p className="text-gray-700 mb-6 font-semibold">
              Let's be honest: DeFi isn't risk-free. Here's what could go wrong and how we mitigate it.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Risk: Smart Contract Exploit</h3>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>What it is:</strong> Bug in code allows attacker to drain funds
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Mitigation:</strong> 9/10 security audit with all critical issues resolved. Code is immutable after 
                  deployment. Public GitHub repo for community review. We're not rushing to launch—we test extensively first.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Risk: Market Volatility</h3>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>What it is:</strong> SOL/BSOL price crashes, reducing portfolio value
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Mitigation:</strong> None—crypto is volatile. Don't deposit money you can't afford to lose. This is 
                  high-risk, high-reward. Traditional banks (USCR) exist for conservative capital.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Risk: Regulatory Crackdown</h3>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>What it is:</strong> Government bans DeFi protocols or Solana
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Mitigation:</strong> We operate transparently. No securities claims (utility token, not equity). 
                  Decentralized = harder to shut down than centralized exchanges. Self-custody means users always control funds.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Risk: Low Adoption</h3>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>What it is:</strong> Not enough users = not enough revenue = model doesn't work
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Mitigation:</strong> Launch with realistic expectations. First 100 members get 2X bonus—creates urgency. 
                  Referral system incentivizes growth. We're not promising billions overnight. Steady, sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Strategy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Recommended Portfolio Strategy</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <p className="text-gray-700 mb-6">
              Smart crypto investors don't go all-in on one platform. Here's a balanced approach:
            </p>

            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="font-bold text-gray-900">50-60%: Traditional Crypto Banks (USCR, Coinbase)</p>
                <p className="text-gray-700 text-sm">Low risk, low yield. Insured custody. Your "safe" money.</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <p className="font-bold text-gray-900">20-30%: BASED Reserve</p>
                <p className="text-gray-700 text-sm">Higher risk, higher yield. Self-custody DeFi. Your "growth" allocation.</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <p className="font-bold text-gray-900">10-20%: Other DeFi (Aave, Compound, etc.)</p>
                <p className="text-gray-700 text-sm">Diversified DeFi exposure. Don't put all eggs in one basket.</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700 font-semibold">
                This gives you stability from traditional banks + upside from DeFi yields. You're not betting the farm on us—
                you're strategically allocating capital for maximum risk-adjusted returns.
              </p>
            </div>
          </div>
        </section>

        {/* Realistic Expectations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Realistic Growth Expectations</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <p className="text-gray-700 mb-6 font-semibold">We're not promising overnight riches. Here's an honest timeline:</p>

            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <p className="font-bold text-gray-900 mb-2">Month 1-3 (Launch Phase)</p>
                <p className="text-gray-700 text-sm">
                  Goal: Acquire first 100 founding members. Build community trust. Validate smart contracts on mainnet. 
                  TVL target: $100K-$500K.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="font-bold text-gray-900 mb-2">Month 4-6 (Early Growth)</p>
                <p className="text-gray-700 text-sm">
                  Expand through referrals and organic growth. First buyback & burn events. Community governance begins. 
                  TVL target: $500K-$2M.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="font-bold text-gray-900 mb-2">Month 7-12 (Expansion)</p>
                <p className="text-gray-700 text-sm">
                  Marketing ramps up. Partnership announcements. Additional features (mobile app, advanced analytics). 
                  TVL target: $2M-$10M.
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-2">Year 2+</p>
                <p className="text-gray-700 text-sm">
                  Mature protocol with proven track record. Institutional partnerships possible. Cross-chain expansion considered. 
                  TVL target: $10M+.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                <strong>Important:</strong> These are targets, not guarantees. Crypto markets are unpredictable. We're building 
                for long-term sustainability, not short-term hype.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Line */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">The Bottom Line</h2>
          <p className="text-blue-100 mb-4">
            BASED Reserve is a high-risk, high-reward DeFi protocol built for aggressive yield seekers. We're not for everyone. 
            If you want safety and insurance, go to a traditional crypto bank.
          </p>
          <p className="text-blue-100 mb-4">
            But if you understand DeFi, accept smart contract risk, and want to maximize yields through proven tokenomics—
            we're your platform.
          </p>
          <p className="text-white font-bold">
            Diversify. Don't YOLO your life savings. But if you want exposure to aggressive DeFi yields with transparent, 
            audited code—we're here.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link href="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold">
              Get Started
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
