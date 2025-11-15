import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Premium Hero */}
      <section className="gradient-hero pt-32 pb-40 px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-3xl">
            {/* Trust badge */}
            <div className="trust-badge mb-8">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 0L10.472 5.528L16 8L10.472 10.472L8 16L5.528 10.472L0 8L5.528 5.528L8 0Z" fill="#0052FF"/>
              </svg>
              Institutional-grade DeFi on Solana
            </div>
            
            <h1 className="text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
              Earn institutional yields on your crypto
            </h1>
            
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed font-light">
              Professional fund management delivering 10-100%+ APY through automated multi-chain strategies. Deposit USDC, we handle the rest.
            </p>
            
            <div className="flex gap-4">
              <Link href="/stake" className="btn-primary inline-block">
                Start earning
              </Link>
              <Link href="/how-it-works" className="btn-secondary inline-block">
                How it works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats Bar */}
      <section className="bg-gradient-to-r from-gray-50 to-white border-y border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Total Value Locked</div>
              <div className="stat-number">$0</div>
              <div className="text-sm text-gray-500 mt-1">Coming Q1 2026</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Active Users</div>
              <div className="stat-number">0</div>
              <div className="text-sm text-gray-500 mt-1">Pre-launch</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">APY Range</div>
              <div className="stat-number text-5xl">10-100%+</div>
              <div className="text-sm text-gray-500 mt-1">Target yields</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Token Launch</div>
              <div className="stat-number text-4xl">Dec 3</div>
              <div className="text-sm text-gray-500 mt-1">2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Tiers - Premium Design */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Choose your strategy</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deposit USDC into our multi-chain fund. Select the risk level that matches your goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Conservative */}
            <div className="tier-card">
              <div className="text-sm font-bold text-blue-600 mb-6 uppercase tracking-wide">Conservative</div>
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold">10-12%</span>
                  <span className="text-gray-500 text-lg">APY</span>
                </div>
                <div className="text-gray-600">Stable, predictable returns</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="#0052FF" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">No $BASED required</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="#0052FF" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Low-risk lending strategies</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="#0052FF" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">0.1% deposit fee</span>
                </div>
              </div>
              
              <Link href="/stake" className="btn-secondary w-full block text-center">
                Select tier
              </Link>
            </div>

            {/* Aggressive - Featured */}
            <div className="tier-card featured">
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold mb-6">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 0L7.854 4.146L12 6L7.854 7.854L6 12L4.146 7.854L0 6L4.146 4.146L6 0Z" fill="white"/>
                </svg>
                MOST POPULAR
              </div>
              
              <div className="text-sm font-bold text-blue-600 mb-6 uppercase tracking-wide">Aggressive</div>
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold">15-20%</span>
                  <span className="text-gray-500 text-lg">APY</span>
                </div>
                <div className="text-gray-600">Higher yields, managed risk</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">10K $BASED auto-purchased</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Multi-chain deployment</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">0.05% deposit + 1% unlock</span>
                </div>
              </div>
              
              <Link href="/stake" className="btn-primary w-full block text-center">
                Select tier
              </Link>
            </div>

            {/* Life Changing */}
            <div className="tier-card">
              <div className="text-sm font-bold text-purple-600 mb-6 uppercase tracking-wide">Life Changing</div>
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold">30-100%+</span>
                  <span className="text-gray-500 text-lg">APY</span>
                </div>
                <div className="text-gray-600">Maximum yield opportunities</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="#9333EA" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">50K $BASED auto-purchased</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="#9333EA" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Elite yield strategies</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="#9333EA" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">0% deposit + 2% unlock</span>
                </div>
              </div>
              
              <Link href="/stake" className="btn-secondary w-full block text-center">
                Select tier
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Built for institutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional-grade infrastructure with retail accessibility
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-premium">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#0052FF"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">On-chain transparency</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every transaction verified on Solana. Real-time visibility into fund allocations, yields, and token burns.
              </p>
            </div>
            
            <div className="card-premium">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0052FF" strokeWidth="2"/>
                  <path d="M12 8V12L15 15" stroke="#0052FF" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Battle-tested protocols</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Your capital deployed only to proven DeFi protocols with established track records and security audits.
              </p>
            </div>
            
            <div className="card-premium">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 12H16L14 15H10L8 12H3M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M3 12C3 7.02944 7.02944 3 12 3M3 12C3 16.9706 7.02944 21 12 21M12 3V21" stroke="#0052FF" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Multi-chain diversification</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Automated deployment across Solana, Ethereum, and L2s. Risk management through strategic diversification.
              </p>
            </div>
            
            <div className="card-premium">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#0052FF" strokeWidth="2"/>
                  <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#0052FF" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Aligned incentives</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Founder and team hold significant $BASED positions. We only profit when you profit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-8">
            Start earning today
          </h2>
          <p className="text-2xl text-gray-600 mb-12">
            Join BASED Protocol and put your capital to work
          </p>
          <Link href="/stake" className="btn-primary inline-block text-lg">
            Get started →
          </Link>
        </div>
      </section>
    </div>
  );
}
