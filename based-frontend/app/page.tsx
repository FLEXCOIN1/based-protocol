import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6 text-gray-900">
            Professional DeFi Fund<br/>Built on Solana
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Institutional-grade yield strategies delivering 10-100%+ APY through automated protocols and $BASED token utility
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/stake" className="btn-primary text-lg">
              Start Earning Now
            </Link>
            <Link href="/how-it-works" className="btn-secondary text-lg">
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">10-100%+</div>
              <div className="text-gray-600">Target APY Range</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">$BASED</div>
              <div className="text-gray-600">Utility Token</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">3 Tiers</div>
              <div className="text-gray-600">Risk-Matched Strategies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Choose Your Strategy</h2>
          <p className="text-xl text-gray-600 text-center mb-12">All tiers stake into ONE Solana-based protocol</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card border-2 border-blue-200">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Conservative</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">10-12%</div>
              <p className="text-gray-600 mb-4">Target APY</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Free entry - no $BASED required</li>
                <li>✓ Low-risk lending strategies</li>
                <li>✓ 0.1% deposit fee</li>
              </ul>
            </div>

            <div className="card border-2 border-blue-600 shadow-lg">
              <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">POPULAR</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Aggressive</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">15-20%</div>
              <p className="text-gray-600 mb-4">Target APY</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 10K $BASED unlocks tier</li>
                <li>✓ Advanced yield strategies</li>
                <li>✓ 0.05% deposit + 1% unlock fee</li>
              </ul>
            </div>

            <div className="card border-2 border-purple-200">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Life Changing</h3>
              <div className="text-4xl font-bold text-purple-600 mb-4">30-100%+</div>
              <p className="text-gray-600 mb-4">Target APY</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 50K $BASED unlocks tier</li>
                <li>✓ High-yield opportunities</li>
                <li>✓ 0% deposit + 2% unlock fee</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why BASED */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why BASED Protocol</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Real Utility, Real Value</h3>
              <p className="text-gray-700">
                Every protocol fee automatically buys back $BASED. 50% buyback, 25% burned forever, 25% to stakers. Constant buy pressure.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Professional Management</h3>
              <p className="text-gray-700">
                Funds deployed across proven Solana DeFi protocols. Automated strategies optimized for yield with built-in risk management.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Automatic Tier Unlocks</h3>
              <p className="text-gray-700">
                Deposit USDC, protocol automatically buys $BASED to unlock higher tiers. No manual swapping required.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Aligned Incentives</h3>
              <p className="text-gray-700">
                Founder holds $BASED. Team holds $BASED. We win when you win.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
