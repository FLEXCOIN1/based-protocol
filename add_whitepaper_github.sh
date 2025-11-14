#!/bin/bash

echo "📄 Creating professional whitepaper and adding GitHub transparency..."
echo ""

# Create whitepaper directory
mkdir -p app/whitepaper

# ====================
# CREATE WHITEPAPER PAGE
# ====================
cat > app/whitepaper/page.tsx << 'WHITEPAPEREOF'
'use client';

import Link from 'next/link';
import WalletButton from '@/components/WalletButton';

export default function Whitepaper() {
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
            <Link href="/whitepaper" className="text-sm font-medium text-blue-600">Whitepaper</Link>
            <Link href="/growth" className="text-sm font-medium text-gray-600 hover:text-blue-600">Growth Strategy</Link>
            <Link href="/about-based" className="text-sm font-medium text-gray-600 hover:text-blue-600">About $BSOL</Link>
            <Link href="/faq" className="text-sm font-medium text-gray-600 hover:text-blue-600">FAQ</Link>
          </div>
          <WalletButton />
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">BASED Reserve</h1>
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Technical Whitepaper</h2>
          <p className="text-lg text-gray-600 mb-4">Version 1.0 | November 2025</p>
          <div className="flex gap-4 justify-center">
            <a 
              href="https://github.com/FLEXCOIN1/based-protocol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>

        {/* Abstract */}
        <section className="mb-12 bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Abstract</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            BASED Reserve is a decentralized social banking protocol built on Solana blockchain that provides tiered staking 
            services with deflationary tokenomics. Following the April 2025 regulatory shift allowing U.S. banks to custody 
            cryptocurrency, BASED Reserve positions itself as the decentralized alternative—offering higher yields through 
            aggressive DeFi staking mechanisms while maintaining full user custody and transparent on-chain operations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This whitepaper outlines the technical architecture, economic model, security measures, and growth strategy of 
            BASED Reserve, demonstrating how revenue-backed tokenomics and tiered reward systems create sustainable value 
            for long-term participants.
          </p>
        </section>

        {/* Table of Contents */}
        <section className="mb-12 bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Table of Contents</h2>
          <ol className="space-y-2 text-gray-700">
            <li className="font-semibold">1. Introduction</li>
            <li className="font-semibold">2. Market Context & Regulatory Landscape</li>
            <li className="font-semibold">3. Technical Architecture</li>
            <li className="font-semibold">4. Tokenomics & Economic Model</li>
            <li className="font-semibold">5. Staking Mechanisms</li>
            <li className="font-semibold">6. Security & Audits</li>
            <li className="font-semibold">7. Governance</li>
            <li className="font-semibold">8. Roadmap</li>
            <li className="font-semibold">9. Risk Disclosure</li>
            <li className="font-semibold">10. Conclusion</li>
          </ol>
        </section>

        {/* 1. Introduction */}
        <section className="mb-12 bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">1. Introduction</h2>
          
          <h3 className="text-xl font-bold mb-4 text-gray-900">1.1 Problem Statement</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Traditional banking infrastructure charges fees, imposes minimums, restricts access, and provides near-zero yields 
            on deposits (average 0.01-0.5% APY). While April 2025 regulations now permit banks to custody cryptocurrency, they 
            bring the same extractive model to digital assets: custody fees, withdrawal restrictions, and yields barely exceeding 
            1-4% APY.
          </p>

          <h3 className="text-xl font-bold mb-4 text-gray-900">1.2 Solution</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            BASED Reserve eliminates intermediaries through smart contract automation on Solana blockchain. Users maintain full 
            custody of assets while earning competitive yields (8.5-85% APY for SOL staking, 50-1000% APY for $BSOL staking) 
            through tiered reward systems. All protocol revenue flows back to users via staking rewards (40%), token buyback & 
            burn (40%), and protocol development (20%).
          </p>

          <h3 className="text-xl font-bold mb-4 text-gray-900">1.3 Core Principles</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Self-Custody:</strong> Users retain private keys at all times</li>
            <li><strong>Transparency:</strong> All transactions verifiable on Solana blockchain</li>
            <li><strong>Revenue-Backed:</strong> Protocol generates real income from deposit fees, withdrawal penalties, and trading fees</li>
            <li><strong>Deflationary:</strong> 40% of revenue permanently removes $BSOL from circulation</li>
            <li><strong>Community-Owned:</strong> Governance rights distributed to token holders</li>
          </ul>
        </section>

        {/* 2. Market Context */}
        <section className="mb-12 bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">2. Market Context & Regulatory Landscape</h2>
          
          <h3 className="text-xl font-bold mb-4 text-gray-900">2.1 April 2025 Regulatory Shift</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            In April 2025, the Federal Reserve, OCC, and FDIC jointly reversed restrictive guidance on cryptocurrency, 
            permitting banks to offer custody and banking services for digital assets. This historic shift legitimized crypto 
            as an asset class while simultaneously creating market segmentation: conservative capital flows to regulated banks 
            seeking safety and insurance, while aggressive capital seeks higher yields through DeFi protocols.
          </p>

          <h3 className="text-xl font-bold mb-4 text-gray-900">2.2 Competitive Landscape</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-700 border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Traditional Banks</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Crypto Banks (USCR)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">BASED Reserve</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">APY</td>
                  <td className="border border-gray-300 px-4 py-2">0.01-0.5%</td>
                  <td className="border border-gray-300 px-4 py-2">1-4%</td>
                  <td className="border border-gray-300 px-4 py-2">8.5-1000%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Custody</td>
                  <td className="border border-gray-300 px-4 py-2">Bank holds assets</td>
                  <td className="border border-gray-300 px-4 py-2">Bank holds assets</td>
                  <td className="border border-gray-300 px-4 py-2">User self-custody</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Insurance</td>
                  <td className="border border-gray-300 px-4 py-2">FDIC insured</td>
                  <td className="border border-gray-300 px-4 py-2">Varies</td>
                  <td className="border border-gray-300 px-4 py-2">None (smart contract security)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Fees</td>
                  <td className="border border-gray-300 px-4 py-2">Monthly + withdrawal</td>
                  <td className="border border-gray-300 px-4 py-2">Monthly + withdrawal</td>
                  <td className="border border-gray-300 px-4 py-2">Zero monthly (only early withdrawal)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Access</td>
                  <td className="border border-gray-300 px-4 py-2">KYC required</td>
                  <td className="border border-gray-300 px-4 py-2">KYC required</td>
                  <td className="border border-gray-300 px-4 py-2">Global, no KYC</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            BASED Reserve is not competing directly with traditional banks—we serve different risk appetites. Conservative 
            capital seeks regulated custody; aggressive capital seeks maximum yields.
          </p>
        </section>

        {/* 3. Technical Architecture */}
        <section className="mb-12 bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">3. Technical Architecture</h2>
          
          <h3 className="text-xl font-bold mb-4 text-gray-900">3.1 Blockchain Infrastructure</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Platform:</strong> Solana blockchain
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            <strong>Rationale:</strong> Solana provides high throughput (65,000+ TPS), sub-second finality, and low transaction 
            costs (~$0.00025 per transaction), making frequent staking/unstaking operations economically viable for users.
          </p>

          <h3 className="text-xl font-bold mb-4 text-gray-900">3.2 Smart Contract Architecture</h3>
          <div className="bg-gray-50 border border-gray-200 rounded p-6 mb-6">
            <p className="text-gray-700 mb-4"><strong>Core Contracts:</strong></p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>StakingVault.sol:</strong> Manages user deposits, withdrawals, and reward distribution</li>
              <li><strong>TierManager.sol:</strong> Tracks user account tiers and multiplier calculations</li>
              <li><strong>TokenEconomics.sol:</strong> Handles $BSOL buyback, burn, and revenue distribution</li>
              <li><strong>Governance.sol:</strong> Manages proposal submission and voting mechanisms</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-4 text-gray-900">3.3 Key Features</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Immutable Code:</strong> Smart contracts cannot be modified post-deployment</li>
            <li><strong>Time-Locked Withdrawals:</strong> Enforced by blockchain timestamps</li>
            <li><strong>Automated Compounding:</strong> Rewards automatically reinvested</li>
            <li><strong>On-Chain Transparency:</strong> All transactions publicly verifiable</li>
          </ul>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r">
            <p className="text-sm text-gray-700">
              <strong>Open Source:</strong> All smart contract code is publicly available at{' '}
              <a href="https://github.com/FLEXCOIN1/based-protocol" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                github.com/FLEXCOIN1/based-protocol
              </a>
            </p>
          </div>
        </section>

        {/* 4. Tokenomics */}
        <section className="mb-12 bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">4. Tokenomics & Economic Model</h2>
          
          <h3 className="text-xl font-bold mb-4 text-gray-900">4.1 Token Supply</h3>
          <div className="bg-gray-50 border border-gray-200 rounded p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Supply</p>
                <p className="text-3xl font-bold text-gray-900">1,000,000,000</p>
                <p className="text-sm text-gray-500">1 Billion $BSOL</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Circulating at Launch</p>
                <p className="text-3xl font-bold text-blue-600">800,000,000</p>
                <p className="text-sm text-gray-500">80% available immediately</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4 text-gray-900">4.2 Token Allocation</h3>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-gray-700">Liquidity Pool (DEX)</span>
              <span className="font-bold text-gray-900">60%</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-gray-700">Community Treasury</span>
              <span className="font-bold text-gray-900">20%</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-gray-700">Team (2-year linear vest)</span>
              <span className="font-bold text-gray-900">10%</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-gray-700">Marketing & Partnerships</span>
              <span className="font-bold text-gray-900">5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Development Fund</span>
              <span className="font-bold text-gray-900">5%</span>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4 text-gray-900">4.3 Revenue Streams</h3>
          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="font-bold text-gray-900 mb-2">Deposit Fees: 0.1%</p>
              <p className="text-sm text-gray-700">Applied to all deposits to fund protocol operations</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded p-4">
              <p className="font-bold text-gray-900 mb-2">Early Withdrawal Penalties: 5-25%</p>
              <p className="text-sm text-gray-700">Tiered fees that decrease over time, rewarding long-term commitment</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded p-4">
              <p className="font-bold text-gray-900 mb-2">DEX Trading Fees: 0.3%</p>
              <p className="text-sm text-gray-700">Standard trading fees from $BSOL liquidity pools</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4 text-gray-900">4.4 Revenue Distribution Model</h3>
          <div className="grid md:grid-cols-3 gap-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg p-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">40%</div>
              <p className="text-sm text-blue-100">Buyback & Burn</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">40%</div>
              <p className="text-sm text-blue-100">Staking Rewards</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">20%</div>
              <p className="text-sm text-blue-100">Protocol Development</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4 mt-8 text-gray-900">4.5 Deflationary Mechanism</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            40% of all protocol revenue is automatically used to purchase $BSOL tokens from DEX liquidity pools and burn them 
            permanently. This creates constant buy pressure while reducing total supply, implementing a proven economic model 
            used by successful DeFi protocols generating millions in annual revenue (e.g., GMX, Curve).
          </p>
          <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
            <p className="text-gray-700 font-semibold">Economic Formula: Decreasing Supply + Steady Demand = Price Appreciation</p>
          </div>
        </section>

        {/* 5. Staking Mechanisms */}
        <section className="mb-12 bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">5. Staking Mechanisms</h2>
          
          <h3 className="text-xl font-bold mb-4 text-gray-900">5.1 Dual Staking Pools</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-2 border-blue-500 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">SOL Staking Pool (Conservative)</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Base APY: 8.5%</li>
                <li>• Maximum APY: 85% (10X multiplier at week 100)</li>
                <li>• Asset: Native Solana token</li>
                <li>• Risk: Lower (established asset)</li>
                <li>• Rewards: Paid in SOL</li>
              </ul>
            </div>

            <div className="border-2 border-purple-500 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">$BSOL Staking Pool (Aggressive)</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Base APY: 50-100% (protocol revenue dependent)</li>
                <li>• Maximum APY: 500-1000% (10X multiplier + revenue growth)</li>
                <li>• Asset: Protocol governance token</li>
                <li>• Risk: Higher (token price volatility)</li>
                <li>• Rewards: Paid in $BSOL</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4 text-gray-900">5.2 Tier Progression System</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Both staking pools utilize the same tier progression system. User account tiers automatically advance based on 
            deposit duration, unlocking higher reward multipliers:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-gray-700 border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Tier</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Time Required</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Multiplier</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">SOL APY</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">$BSOL APY (est.)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Basic</td>
                  <td className="border border-gray-300 px-4 py-2">Week 0-4</td>
                  <td className="border border-gray-300 px-4 py-2">1.0X</td>
                  <td className="border border-gray-300 px-4 py-2">8.5%</td>
                  <td className="border border-gray-300 px-4 py-2">50-100%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Growth</td>
                  <td className="border border-gray-300 px-4 py-2">Week 5-9</td>
                  <td className="border border-gray-300 px-4 py-2">1.5X</td>
                  <td className="border border-gray-300 px-4 py-2">12.75%</td>
                  <td className="border border-gray-300 px-4 py-2">75-150%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Premium</td>
                  <td className="border border-gray-300 px-4 py-2">Week 10-19</td>
                  <td className="border border-gray-300 px-4 py-2">2.0X</td>
                  <td className="border border-gray-300 px-4 py-2">17%</td>
                  <td className="border border-gray-300 px-4 py-2">100-200%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Elite Reserve</td>
                  <td className="border border-gray-300 px-4 py-2">Week 20-49</td>
                  <td className="border border-gray-300 px-4 py-2">3.0X</td>
                  <td className="border border-gray-300 px-4 py-2">25.5%</td>
                  <td className="border border-gray-300 px-4 py-2">150-300%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Platinum Reserve</td>
                  <td className="border border-gray-300 px-4 py-2">Week 50-99</td>
                  <td className="border border-gray-300 px-4 py-2">5.0X</td>
                  <td className="border border-gray-300 px-4 py-2">42.5%</td>
                  <td className="border border-gray-300 px-4 py-2">250-500%</td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="border border-gray-300 px-4 py-2 font-bold">Chairman's Circle</td>
                  <td className="border border-gray-300 px-4 py-2">Week 100+</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">10X</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">85%</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">500-1000%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold mb-4 text-gray-900">5.3 Withdrawal Policy</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Users maintain full custody and can withdraw at any time. Early withdrawal fees ensure platform stability and reward 
            long-term commitment:
          </p>
          <div className="space-y-2">
            <div className="flex justify-between items-center pb-2 border-b border-gray-200">
              <span className="text-gray-700">Week 1-4</span>
              <span className="font-bold text-red-600">25% fee</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-200">
              <span className="text-gray-700">Month 1-3</span>
              <span className="font-bold text-orange-600">15% fee</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-200">
              <span className="text-gray-700">Month 3-6</span>
              <span className="font-bold text-yellow-600">10% fee</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-200">
              <span className="text-gray-700">Month 6-12</span>
              <span className="font-bold text-blue-600">5% fee</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Year 1+</span>
              <span className="font-bold text-green-600">0% fee</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            All withdrawal fees are redistributed to remaining stakers, creating positive feedback for long-term participants.
          </p>

          <h3 className="text-xl font-bold mb-4 mt-8 text-gray-900">5.4 Founders Bonus Program</h3>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r">
            <p className="text-gray-700 mb-2">
              <strong>First 100 Stakers:</strong> Permanent 2X multiplier on all rewards
            </p>
            <p className="text-sm text-gray-600">
              Example: A Founder at Elite Reserve tier (3.0X) receives 6.0X total multiplier (3.0X tier × 2X founder bonus). 
              This bonus never expires and applies to both SOL and $BSOL staking pools.
            </p>
          </div>
        </section>

        {/* 6. Security & Audits */}
        <section className="mb-12 bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">6. Security & Audits</h2>
          
          <h3 className="text-xl font-bold mb-4 text-gray-900">6.1 Security Audit</h3>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-2xl font-bold text-gray-900">Security Score: 9/10</p>
                <p className="text-sm text-gray-600">Independent third-party audit</p>
              </div>
              <div className="text-5xl">✓</div>
            </div>
            <p className="text-gray-700 mb-2"><strong>Status:</strong> All critical vulnerabilities resolved</p>
            <p className="text-gray-700"><strong>Date:</strong> October 2025</p>
          </div>

          <h3 className="text-xl font-bold mb-4 text-gray-900">6.2 Security Measures</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong>Immutable Smart Contracts:</strong> Cannot be modified post-deployment
              </div>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong>Time-Lock Mechanisms:</strong> Enforced by blockchain timestamps, not modifiable
              </div>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong>Open Source Code:</strong> Publicly auditable at{' '}
                <a href="https://github.com/FLEXCOIN1/based-protocol" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  github.com/FLEXCOIN1/based-protocol
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong>Self-Custody Model:</strong> Users retain private keys at all times
              </div>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong>Blockchain Transparency:</strong> All transactions verifiable on Solana explorer
              </div>
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-4 mt-8 text-gray-900">6.3 Risk Mitigation</h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              <strong>Smart Contract Risk:</strong> While audited and tested extensively, smart contracts are not infallible. 
              Users should only deposit funds they can afford to lose.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Market Volatility Risk:</strong> Cryptocurrency markets are highly volatile. $BSOL token price may fluctuate 
              significantly.
            </p>
            <p className="text-gray-700">
              <strong>Regulatory Risk:</strong> Cryptocurrency regulations continue evolving. While BASED Reserve operates 
              transparently with no securities claims, regulatory changes could impact operations.
            </p>
          </div>
        </section>

        {/* 7. Governance */}
        <section className="mb-12 bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">7. Governance</h2>
          
          <h3 className="text-xl font-bold mb-4 text-gray-900">7.1 Governance Model</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            $BSOL token holders participate in protocol governance through on-chain voting. Voting power is proportional to 
            tokens held and staked. Proposals require minimum quorum and approval thresholds to pass.
          </p>

          <h3 className="text-xl font-bold mb-4 text-gray-900">7.2 Governance Scope</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900 mb-2">Fee Structure Adjustments</p>
              <p className="text-sm text-gray-600">Modify deposit fees, withdrawal penalties, revenue distribution percentages</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900 mb-2">New Feature Proposals</p>
              <p className="text-sm text-gray-600">Vote on platform upgrades, new staking pools, additional services</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900 mb-2">Treasury Allocation</p>
              <p className="text-sm text-gray-600">Decide how community treasury funds are deployed</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900 mb-2">Partnership Approvals</p>
              <p className="text-sm text-gray-600">Review and approve strategic partnerships and integrations</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4 text-gray-900">7.3 Proposal Process</h3>
          <ol className="space-y-3 text-gray-700">
            <li><strong>1. Discussion:</strong> Informal community discussion in governance forum (7 days minimum)</li>
            <li><strong>2. Formal Proposal:</strong> Structured proposal submitted on-chain with implementation details</li>
            <li><strong>3. Voting Period:</strong> 72-hour voting window for token holders</li>
            <li><strong>4. Execution:</strong> If approved, proposal is executed via timelock mechanism (48-hour delay)</li>
          </ol>
        </section>

        {/* 8. Roadmap */}
        <section className="mb-12 bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">8. Roadmap</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <p className="font-bold text-gray-900 mb-2">Q4 2025 - Launch Phase</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Mainnet launch (December 3, 2025)</li>
                <li>• Acquire first 100 founding members</li>
                <li>• Establish initial liquidity pools</li>
                <li>• Community building and engagement</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <p className="font-bold text-gray-900 mb-2">Q1 2026 - Growth & Features</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• First token buyback & burn event</li>
                <li>• Mobile app development</li>
                <li>• Referral program launch</li>
                <li>• Advanced analytics dashboard</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <p className="font-bold text-gray-900 mb-2">Q2-Q3 2026 - Expansion</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Strategic partnerships with DeFi protocols</li>
                <li>• Additional staking pools (if community approves)</li>
                <li>• Governance v2 implementation</li>
                <li>• Cross-chain bridge exploration</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-600 pl-6">
              <p className="font-bold text-gray-900 mb-2">Q4 2026+ - Maturity</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Protocol optimization and gas reduction</li>
                <li>• Institutional partnership opportunities</li>
                <li>• Potential cross-chain expansion</li>
                <li>• Community-driven development priorities</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded p-4">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> Roadmap is subject to change based on community governance decisions, market conditions, 
              and regulatory developments.
            </p>
          </div>
        </section>

        {/* 9. Risk Disclosure */}
        <section className="mb-12 bg-yellow-50 border-2 border-yellow-400 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">9. Risk Disclosure</h2>
          
          <div className="bg-white border border-yellow-300 rounded-lg p-6 mb-6">
            <p className="font-bold text-gray-900 mb-4">IMPORTANT: READ CAREFULLY</p>
            <p className="text-gray-700 mb-4">
              BASED Reserve is a high-risk DeFi protocol. By participating, you acknowledge and accept the following risks:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">•</span>
                <div>
                  <strong>Smart Contract Risk:</strong> Despite security audits, smart contracts may contain undiscovered 
                  vulnerabilities that could result in loss of funds.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">•</span>
                <div>
                  <strong>Market Volatility Risk:</strong> Cryptocurrency prices are extremely volatile. $BSOL token value may 
                  fluctuate significantly, potentially resulting in total loss.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">•</span>
                <div>
                  <strong>No Insurance:</strong> Unlike traditional banks, deposits are NOT FDIC insured. You bear full risk of loss.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">•</span>
                <div>
                  <strong>Regulatory Risk:</strong> Cryptocurrency regulations are evolving. Future regulatory changes could impact 
                  protocol operations or token value.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">•</span>
                <div>
                  <strong>Liquidity Risk:</strong> There is no guarantee of liquidity for $BSOL token. You may not be able to exit 
                  positions at desired prices.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">•</span>
                <div>
                  <strong>Technology Risk:</strong> Blockchain networks may experience downtime, congestion, or technical failures.
                </div>
              </li>
            </ul>

            <div className="mt-6 bg-red-50 border-l-4 border-red-600 p-4 rounded-r">
              <p className="text-sm text-gray-700 font-bold">
                ONLY DEPOSIT FUNDS YOU CAN AFFORD TO LOSE. PAST PERFORMANCE DOES NOT GUARANTEE FUTURE RESULTS. 
                THIS IS NOT FINANCIAL ADVICE.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4 text-gray-900">User Responsibilities</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Conduct your own research (DYOR) before participating</li>
            <li>• Understand the technology and risks involved</li>
            <li>• Secure your private keys and wallet access</li>
            <li>• Never share your private keys with anyone</li>
            <li>• Consult with financial and legal advisors as appropriate</li>
          </ul>
        </section>

        {/* 10. Conclusion */}
        <section className="mb-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">10. Conclusion</h2>
          <p className="mb-4 leading-relaxed">
            BASED Reserve represents a new paradigm in decentralized finance—providing aggressive yield opportunities through 
            transparent, audited smart contracts on Solana blockchain. By implementing revenue-backed tokenomics, tiered reward 
            systems, and deflationary supply mechanics, BASED Reserve creates sustainable value for long-term participants.
          </p>
          <p className="mb-4 leading-relaxed">
            Following the April 2025 regulatory shift that legitimized crypto banking, BASED Reserve positions itself as the 
            decentralized alternative: offering higher yields in exchange for accepting smart contract risk and market volatility. 
            We do not compete with traditional banks—we serve different risk appetites.
          </p>
          <p className="mb-4 leading-relaxed">
            All protocol code is open source and publicly auditable. All transactions are verifiable on-chain. All governance 
            decisions are community-driven. BASED Reserve embodies the core principles of decentralization: transparency, 
            self-custody, and community ownership.
          </p>
          <p className="font-bold text-xl">
            The future of banking is decentralized. The future of yield is here.
          </p>
        </section>

        {/* Footer */}
        <div className="text-center border-t-2 border-gray-300 pt-8">
          <p className="text-gray-600 mb-4">
            <strong>Contact:</strong> Join our community at{' '}
            <a href="https://t.me/staybasedpro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              t.me/staybasedpro
            </a>
          </p>
          <p className="text-gray-600 mb-4">
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/FLEXCOIN1/based-protocol" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              github.com/FLEXCOIN1/based-protocol
            </a>
          </p>
          <p className="text-sm text-gray-500">
            © 2025 BASED Reserve. This whitepaper is for informational purposes only and does not constitute financial, 
            legal, or investment advice.
          </p>
        </div>
      </main>
    </div>
  );
}
WHITEPAPEREOF

echo "✅ Professional whitepaper created"
echo ""
echo "🎉 Complete! Professional whitepaper + GitHub transparency added"
echo ""
echo "Next: Update all navigation bars to include whitepaper link"

