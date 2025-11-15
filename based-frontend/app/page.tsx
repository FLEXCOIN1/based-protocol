import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Coinbase style */}
      <section className="pt-24 pb-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-semibold mb-6 text-gray-900 tracking-tight">
            Earn up to 100%+ APY
          </h1>
          <p className="text-2xl text-gray-600 mb-10 max-w-2xl mx-auto font-light">
            Professional DeFi fund on Solana. Deposit USDC, earn institutional-grade yields.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/stake" className="btn-primary text-lg">
              Get started
            </Link>
            <Link href="/how-it-works" className="btn-secondary text-lg">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* Stats - Clean spacing */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div>
              <div className="text-5xl font-semibold text-gray-900 mb-3">10-100%+</div>
              <div className="text-gray-600">Annual percentage yield</div>
            </div>
            <div>
              <div className="text-5xl font-semibold text-gray-900 mb-3">3 Tiers</div>
              <div className="text-gray-600">Risk-matched strategies</div>
            </div>
            <div>
              <div className="text-5xl font-semibold text-gray-900 mb-3">$BASED</div>
              <div className="text-gray-600">Utility token</div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Tiers - Minimal cards */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-4 text-gray-900">Choose your strategy</h2>
            <p className="text-xl text-gray-600">Deposit USDC into one fund. We handle the rest.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Conservative */}
            <div className="card">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">Conservative</h3>
                <div className="text-4xl font-semibold text-blue-600 mb-1">10-12%</div>
                <div className="text-gray-500">APY target</div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Free entry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Low-risk lending</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Stable returns</span>
                </li>
              </ul>
            </div>

            {/* Aggressive */}
            <div className="card border-2 border-blue-600">
              <div className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Most popular
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">Aggressive</h3>
                <div className="text-4xl font-semibold text-blue-600 mb-1">15-20%</div>
                <div className="text-gray-500">APY target</div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>10K $BASED required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Multi-chain strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Higher yields</span>
                </li>
              </ul>
            </div>

            {/* Life Changing */}
            <div className="card">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">Life Changing</h3>
                <div className="text-4xl font-semibold text-blue-600 mb-1">30-100%+</div>
                <div className="text-gray-500">APY target</div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>50K $BASED required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Elite opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Maximum returns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust section - Chase bank style */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-4 text-gray-900">Built for trust</h2>
            <p className="text-xl text-gray-600">Professional fund management meets DeFi innovation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Transparent operations</h3>
              <p className="text-gray-600 leading-relaxed">
                Every transaction on-chain. Full visibility into fund allocations, yields, and buyback activity.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Proven protocols</h3>
              <p className="text-gray-600 leading-relaxed">
                Your USDC deployed only to battle-tested DeFi protocols with strong track records.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Automatic diversification</h3>
              <p className="text-gray-600 leading-relaxed">
                Multi-chain deployment across Solana, Ethereum, and L2s. Risk management built in.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Aligned incentives</h3>
              <p className="text-gray-600 leading-relaxed">
                Founder and team hold $BASED. We only win when you win.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-semibold mb-6 text-gray-900">
            Ready to start earning?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join BASED Protocol today
          </p>
          <Link href="/stake" className="btn-primary text-lg inline-block">
            Get started
          </Link>
        </div>
      </section>
    </div>
  );
}
