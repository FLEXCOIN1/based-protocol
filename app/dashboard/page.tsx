'use client';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-12">Track your BASED Protocol positions</p>

        {/* Coming Soon */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-12 text-center">
          <div className="text-6xl mb-4">🚀</div>
          <h2 className="text-2xl font-bold mb-4">Dashboard Coming Q1 2026</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Connect your wallet to view your shares, current NAV, portfolio breakdown, and withdrawal options. Full dashboard launches with the ETF protocol.
          </p>
          <button disabled className="px-8 py-4 bg-gray-300 text-gray-500 rounded-lg font-semibold cursor-not-allowed">
            Connect Wallet (Coming Soon)
          </button>
        </div>

        {/* Feature Preview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold mb-2">Your Shares</h3>
            <p className="text-sm text-gray-600">View total shares owned and current value in real-time</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold mb-2">Portfolio Breakdown</h3>
            <p className="text-sm text-gray-600">See exact allocation across BTC, ETH, SOL, and $BASED</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold mb-2">Exit Fee Countdown</h3>
            <p className="text-sm text-gray-600">Track days until 0% exit fee eligibility</p>
          </div>
        </div>
      </div>
    </div>
  );
}
