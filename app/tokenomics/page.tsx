export default function Tokenomics() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">$BASED Tokenomics</h1>
          <p className="text-xl text-gray-600 mb-12">Deflationary utility token with integrated buyback & burn</p>

          {/* Token Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="text-sm text-gray-600 mb-2">Total Supply</div>
              <div className="text-3xl font-bold">1,000,000,000</div>
              <div className="text-sm text-gray-500 mt-1">1 Billion $BASED</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="text-sm text-gray-600 mb-2">Launch Date</div>
              <div className="text-3xl font-bold">Dec 3, 2025</div>
              <div className="text-sm text-gray-500 mt-1">Pump.fun Launch</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="text-sm text-gray-600 mb-2">Chain</div>
              <div className="text-3xl font-bold">Solana</div>
              <div className="text-sm text-gray-500 mt-1">SPL Token Standard</div>
            </div>
          </div>

          {/* Distribution */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Token Distribution</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-32 text-right font-bold">80%</div>
                <div className="flex-1 h-12 bg-blue-600 rounded-lg flex items-center px-4 text-white font-semibold">
                  Pump.fun Liquidity Pool
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-right font-bold">10%</div>
                <div className="flex-1 h-12 bg-blue-500 rounded-lg flex items-center px-4 text-white font-semibold">
                  Protocol Treasury (24mo vest)
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-right font-bold">5%</div>
                <div className="flex-1 h-12 bg-blue-400 rounded-lg flex items-center px-4 text-white font-semibold">
                  Team (36mo vest)
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-right font-bold">5%</div>
                <div className="flex-1 h-12 bg-blue-300 rounded-lg flex items-center px-4 text-white font-semibold">
                  Marketing & Partnerships
                </div>
              </div>
            </div>
          </div>

          {/* Deflationary Mechanism */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Deflationary Mechanism</h2>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
              <div className="text-center mb-8">
                <div className="text-lg font-semibold mb-2">Protocol Revenue Split</div>
                <div className="text-sm text-gray-600">Deposit fees (0.5%) + Exit fees (0-50%) = Revenue</div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    50%
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg mb-1">Buyback $BASED</div>
                    <p className="text-sm text-gray-600">Protocol buys $BASED from open market via Jupiter</p>
                  </div>
                </div>

                <div className="ml-8 space-y-4">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      25%
                    </div>
                    <div className="flex-1">
                      <div className="font-bold mb-1">🔥 Burn Forever</div>
                      <p className="text-sm text-gray-600">Sent to dead address, removed from supply permanently</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      25%
                    </div>
                    <div className="flex-1">
                      <div className="font-bold mb-1">💎 Distribute to Stakers</div>
                      <p className="text-sm text-gray-600">Rewards for $BASED holders who stake their tokens</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example Calculation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Example: Buyback Impact</h2>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="space-y-4">
                <div className="flex justify-between pb-3 border-b">
                  <span className="font-semibold">Scenario:</span>
                  <span>$10M TVL, 20% annual turnover</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual exits:</span>
                  <span className="font-mono">$2,000,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Average exit fee (15%):</span>
                  <span className="font-mono">$300,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Deposit fees:</span>
                  <span className="font-mono">$50,000</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-3">
                  <span>Total Revenue:</span>
                  <span className="font-mono">$350,000</span>
                </div>
                
                <div className="mt-6 pt-6 border-t space-y-2">
                  <div className="flex justify-between text-blue-600">
                    <span>50% → Buyback:</span>
                    <span className="font-mono font-bold">$175,000</span>
                  </div>
                  <div className="flex justify-between text-orange-500 ml-4">
                    <span>25% → Burn:</span>
                    <span className="font-mono font-bold">$87,500</span>
                  </div>
                  <div className="flex justify-between text-green-600 ml-4">
                    <span>25% → Stakers:</span>
                    <span className="font-mono font-bold">$87,500</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-gray-600">
                    <strong>Result:</strong> $175K annual buy pressure + 87.5K tokens burned (0.00875% of supply) + $87.5K rewards to stakers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Utility */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">$BASED Utility</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">ETF Allocation</h3>
                <p className="text-gray-600 text-sm">5-25% of every ETF tier automatically purchases $BASED, creating constant demand</p>
              </div>
              
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">Staking Rewards</h3>
                <p className="text-gray-600 text-sm">Earn 25% of protocol revenue by staking $BASED tokens</p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">Governance (Future)</h3>
                <p className="text-gray-600 text-sm">Vote on protocol changes, new asset additions, and fee structures</p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">Deflationary</h3>
                <p className="text-gray-600 text-sm">25% of buyback burned forever, continuously reducing total supply</p>
              </div>
            </div>
          </div>

          {/* Launch Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Launch Timeline</h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right font-bold text-blue-600">Dec 3, 2025</div>
                <div className="flex-1 border-l-4 border-blue-600 pl-6 pb-6">
                  <h3 className="font-bold text-lg mb-2">Token Launch</h3>
                  <p className="text-gray-600">$BASED launches on Pump.fun. Community building begins.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right font-bold text-gray-600">Mid-Dec 2025</div>
                <div className="flex-1 border-l-4 border-gray-300 pl-6 pb-6">
                  <h3 className="font-bold text-lg mb-2">Raydium Graduation</h3>
                  <p className="text-gray-600">Bonding curve completes, $BASED migrates to Raydium liquidity pool.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right font-bold text-gray-600">Q1 2026</div>
                <div className="flex-1 border-l-4 border-gray-300 pl-6">
                  <h3 className="font-bold text-lg mb-2">Full ETF Launch</h3>
                  <p className="text-gray-600">BASED Protocol goes live. Automatic portfolio buying begins. Buyback-and-burn mechanism activates.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gray-900 text-white rounded-xl p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">$BASED Token Launches December 3rd</h3>
            <p className="text-gray-400 mb-6">Join the community and be ready for launch day</p>
            <div className="flex gap-4 justify-center">
              <a href="https://discord.gg/based" className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100">
                Join Discord
              </a>
              <a href="https://twitter.com/basedprotocol" className="px-8 py-4 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-gray-900">
                Follow on X
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
