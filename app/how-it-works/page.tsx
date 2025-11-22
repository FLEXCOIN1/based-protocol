export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">How BASED Protocol Works</h1>
          <p className="text-xl text-gray-600 mb-12">Simple deposits, automatic diversification, deflationary tokenomics</p>

          {/* Step 1 */}
          <div className="mb-16">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Deposit USDC</h2>
                <p className="text-gray-600 mb-4">Choose one of three risk tiers (Basic, Advanced, or Aggressive) and deposit USDC. A 0.5% fee covers gas and operations.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-mono">Example: Deposit $1,000 USDC → Pay $5 fee → Net $995 invested</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-16">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Receive Shares</h2>
                <p className="text-gray-600 mb-4">Protocol issues you shares representing your ownership % of the fund. Share value = Total NAV / Total Shares.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-mono">Your shares = Your portion of fund assets at current NAV</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-16">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Automatic Portfolio Construction</h2>
                <p className="text-gray-600 mb-4">Protocol uses Jupiter DEX to automatically buy your diversified portfolio in seconds.</p>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <p className="text-sm"><strong>BASIC:</strong> 35% BTC, 30% ETH, 20% SOL, 10% USDC, 5% $BASED</p>
                  <p className="text-sm"><strong>ADVANCED:</strong> 30% BTC, 25% ETH, 20% SOL, 10% DeFi, 5% L1s, 10% $BASED</p>
                  <p className="text-sm"><strong>AGGRESSIVE:</strong> 20% BTC, 20% ETH, 15% SOL, 10% DeFi, 10% Alts, 25% $BASED</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-16">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">4</div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Earn Returns</h2>
                <p className="text-gray-600 mb-4">Your portfolio grows with the market. NAV updates in real-time via Pyth oracles.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Bitcoin, Ethereum, Solana appreciation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>$BASED buyback creates upward price pressure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>USDC portion earns 8-10% via lending (Basic tier)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="mb-16">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">5</div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Withdraw Anytime</h2>
                <p className="text-gray-600 mb-4">Burn your shares to receive USDC. Exit fees incentivize long-term holding:</p>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>0-1 month:</span>
                    <span className="font-bold">50% fee</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>2-6 months:</span>
                    <span className="font-bold">25% fee</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>6-9 months:</span>
                    <span className="font-bold">10% fee</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>9-11 months:</span>
                    <span className="font-bold">5% fee</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>12+ months:</span>
                    <span className="font-bold text-green-600">0% fee ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buyback Mechanism */}
          <div className="border-t-2 pt-16">
            <h2 className="text-3xl font-bold mb-6">The $BASED Buyback Mechanism</h2>
            <p className="text-gray-600 mb-6">Protocol fees create constant buy pressure and deflationary tokenomics:</p>
            
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">💰</div>
                  <div>
                    <p className="font-semibold mb-1">Protocol Revenue</p>
                    <p className="text-sm text-gray-600">Deposit fees (0.5%) + Exit fees (0-50%)</p>
                  </div>
                </div>
                <div className="border-t-2 border-blue-300 my-4"></div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🔥</div>
                  <div>
                    <p className="font-semibold mb-1">50% → Buyback $BASED</p>
                    <p className="text-sm text-gray-600">Protocol buys $BASED from open market via Jupiter</p>
                  </div>
                </div>
                <div className="ml-8 space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="text-xl">🔥</div>
                    <div>
                      <p className="font-semibold mb-1">25% Burned Forever</p>
                      <p className="text-sm text-gray-600">Sent to dead address, removed from supply permanently</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-xl">💎</div>
                    <div>
                      <p className="font-semibold mb-1">25% to Stakers</p>
                      <p className="text-sm text-gray-600">Distributed as rewards to $BASED stakers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-6">
              <strong>Example:</strong> $10M TVL with 20% annual turnover = $2M exits. Average 15% exit fee = $300K revenue. 
              50% ($150K) buys $BASED → 25% ($75K) burned + 25% ($75K) to stakers.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a href="/invest" className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
              Start Investing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
