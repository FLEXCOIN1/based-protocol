import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="gradient-hero pt-32 pb-40 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-3xl">
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
              Professional fund management delivering 10-100%+ APY through automated multi-chain strategies.
            </p>
            
            <div className="flex gap-4">
              <Link href="/stake" className="btn-primary inline-block">Start earning</Link>
              <Link href="/how-it-works" className="btn-secondary inline-block">How it works</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Choose your strategy</h2>
          <p className="text-xl text-gray-600 mb-12">Three tiers for different risk profiles</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="tier-card">
              <h3 className="text-2xl font-bold mb-4">Conservative</h3>
              <div className="text-5xl font-bold mb-2">10-12%</div>
              <p className="text-gray-600 mb-8">APY target</p>
              <Link href="/stake" className="btn-secondary w-full block text-center">Select</Link>
            </div>
            
            <div className="tier-card featured">
              <h3 className="text-2xl font-bold mb-4">Aggressive</h3>
              <div className="text-5xl font-bold mb-2">15-20%</div>
              <p className="text-gray-600 mb-8">APY target</p>
              <Link href="/stake" className="btn-primary w-full block text-center">Select</Link>
            </div>
            
            <div className="tier-card">
              <h3 className="text-2xl font-bold mb-4">Life Changing</h3>
              <div className="text-5xl font-bold mb-2">30-100%+</div>
              <p className="text-gray-600 mb-8">APY target</p>
              <Link href="/stake" className="btn-secondary w-full block text-center">Select</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
