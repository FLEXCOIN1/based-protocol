import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Professional DeFi Fund
              <br />Built on Solana
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Institutional-grade yield strategies delivering 10-100%+ APY through automated DeFi protocols and $BASED token utility
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/stake" className="btn-primary text-lg">
                Start Earning Now
              </Link>
              <Link href="/how-it-works" className="btn-secondary text-lg">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">10-100%+</div>
              <div className="text-gray-400">Target APY Range</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">$BASED</div>
              <div className="text-gray-400">Utility Token with Real Value</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">3 Tiers</div>
              <div className="text-gray-400">Risk-Matched Strategies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Tier System */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Strategy</h2>
            <p className="text-xl text-gray-400">Three tiers designed for different risk tolerances and return targets</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Conservative */}
            <div className="card hover:border-primary transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Conservative</h3>
                <div className="text-4xl font-bold text-primary mb-2">10-12%</div>
                <div className="text-gray-400">Target APY</div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Free entry - no $BASED required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Low-risk lending strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Stable USDC-based returns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>0.1% deposit fee</span>
                </li>
              </ul>
            </div>

            {/* Aggressive */}
            <div className="card hover:border-primary transition-colors border-primary/50">
              <div className="text-center mb-6">
                <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">Aggressive</h3>
                <div className="text-4xl font-bold text-primary mb-2">15-20%</div>
                <div className="text-gray-400">Target APY</div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>10K $BASED unlocks tier</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Advanced yield strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Multi-protocol diversification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>0.05% deposit + 1% unlock fee</span>
                </li>
              </ul>
            </div>

            {/* Life Changing */}
            <div className="card hover:border-primary transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Life Changing</h3>
                <div className="text-4xl font-bold text-primary mb-2">30-100%+</div>
                <div className="text-gray-400">Target APY</div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>50K $BASED unlocks tier</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>High-yield DeFi strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Early access to opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>0% deposit + 2% unlock fee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why BASED Protocol */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why BASED Protocol Wins</h2>
            <p className="text-xl text-gray-400">Built different. Built to last. Built to make you money.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-primary">Real Utility, Real Value</h3>
              <p className="text-gray-300">
                $BASED isn't another memecoin. Every protocol fee automatically buys back $BASED tokens, creating constant buy pressure. 50% of fees go to buyback, 25% burned forever, 25% to stakers.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-primary">Professional Management</h3>
              <p className="text-gray-300">
                Your funds deployed across proven DeFi protocols like Kamino, Jito, and Meteora. Automated strategies optimized for yield with risk management built in.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-primary">Automatic Tier Unlocks</h3>
              <p className="text-gray-300">
                Deposit USDC and the protocol automatically buys $BASED for you to unlock higher tiers. No manual buying, no swapping - just deposit and earn.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-primary">Aligned Incentives</h3>
              <p className="text-gray-300">
                Founder holds $BASED. Team holds $BASED. Your success is our success. We win when you win.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join BASED Protocol and put your capital to work in professional DeFi strategies
          </p>
          <Link href="/stake" className="btn-primary text-lg">
            Connect Wallet & Stake Now
          </Link>
        </div>
      </section>
    </div>
  );
}
