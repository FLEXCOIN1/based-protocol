#!/bin/bash

# HOW IT WORKS - Value Creation
cat > app/how-it-works/page.tsx << 'EOF'
export default function HowItWorks() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6 text-center">How $BASED Creates Value</h1>
        <p className="text-xl text-gray-600 text-center mb-16">
          Real revenue. Real buybacks. Real burns. This is how we build token value.
        </p>

        {/* Revenue Engine */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">The Revenue Engine</h2>
          
          <div className="card mb-6">
            <h3 className="text-xl font-bold mb-3 text-blue-600">Step 1: Users Deposit USDC</h3>
            <p className="text-gray-700 mb-4">
              Users choose their tier and deposit USDC into the protocol. This capital gets deployed into proven DeFi strategies across Solana - Kamino lending, Jito staking, Meteora liquidity pools.
            </p>
          </div>

          <div className="card mb-6">
            <h3 className="text-xl font-bold mb-3 text-blue-600">Step 2: Protocol Generates Yield</h3>
            <p className="text-gray-700 mb-4">
              Your USDC works across multiple DeFi protocols simultaneously:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Conservative: 10-12% APY from stable lending</li>
              <li>• Aggressive: 15-20% APY from diversified strategies</li>
              <li>• Life Changing: 30-100%+ APY from high-yield opportunities</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-3 text-blue-600">Step 3: Fee Collection</h3>
            <p className="text-gray-700 mb-4">
              Protocol collects fees on deposits and withdrawals. These fees power the entire $BASED ecosystem.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="font-bold text-blue-600">Conservative</div>
                <div className="text-2xl font-bold">0.1%</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="font-bold text-blue-600">Aggressive</div>
                <div className="text-2xl font-bold">1.05%</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="font-bold text-purple-600">Life Changing</div>
                <div className="text-2xl font-bold">2%</div>
              </div>
            </div>
          </div>
        </section>

        {/* Buyback Machine */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">The Buyback Machine</h2>
          
          <div className="card bg-blue-50 border-2 border-blue-200">
            <h3 className="text-2xl font-bold mb-6 text-center">Where Protocol Fees Go</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">50%</div>
                <div className="font-bold mb-2">Buyback $BASED</div>
                <p className="text-gray-600 text-sm">
                  Half of all fees automatically buy $BASED from the market. Constant buy pressure every single day.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">25%</div>
                <div className="font-bold mb-2">Burn Forever</div>
                <p className="text-gray-600 text-sm">
                  Burned tokens permanently removed from supply. Supply decreases while demand increases.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">25%</div>
              <div className="font-bold mb-2">Distribute to Stakers</div>
              <p className="text-gray-600 text-sm">
                Hold and stake $BASED? You get a share of protocol revenue. Your investment pays dividends.
              </p>
            </div>
          </div>
        </section>

        {/* Real Example */}
        <section>
          <div className="card">
            <h3 className="text-2xl font-bold mb-4">Real World Example</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-4 font-semibold">Protocol has $1M in deposits. Over one month:</p>
              <ol className="space-y-2 text-gray-700 list-decimal ml-6">
                <li>Generates $15,000 in yields (1.5% monthly average)</li>
                <li>Collects $3,000 in protocol fees</li>
                <li>$1,500 automatically buys $BASED → price goes up</li>
                <li>$750 of $BASED burned → supply goes down</li>
                <li>$750 distributed to stakers → passive income</li>
              </ol>
              <p className="text-blue-600 font-bold mt-4">
                Result: Buy pressure + Decreasing supply + Staker rewards = Token value increases
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
EOF

echo "✅ Updated: How It Works"
