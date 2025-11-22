import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BASED Protocol | Institutional DeFi on Solana",
  description: "Professional cryptocurrency fund management. Diversified ETF portfolios with deflationary tokenomics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Top Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="text-3xl font-light tracking-tight text-gray-900">
                BASED
              </Link>

              {/* Nav Links */}
              <div className="hidden md:flex items-center gap-12">
                <Link href="/invest" className="text-gray-600 hover:text-gray-900 font-normal transition">
                  Invest
                </Link>
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 font-normal transition">
                  Dashboard
                </Link>
                <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900 font-normal transition">
                  How It Works
                </Link>
                <Link href="/tokenomics" className="text-gray-600 hover:text-gray-900 font-normal transition">
                  Tokenomics
                </Link>
                <Link href="/whitepaper" className="text-gray-600 hover:text-gray-900 font-normal transition">
                  Whitepaper
                </Link>
                <Link href="/faq" className="text-gray-600 hover:text-gray-900 font-normal transition">
                  FAQ
                </Link>
              </div>

              {/* CTA Button */}
              <Link 
                href="/invest" 
                className="hidden md:inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
              >
                Launch App
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-20">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-8 py-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
              {/* Brand */}
              <div>
                <div className="text-3xl font-light mb-6 text-gray-900">BASED</div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Professional crypto fund management on Solana
                </p>
              </div>

              {/* Product */}
              <div>
                <div className="text-xs font-semibold mb-6 uppercase tracking-widest text-gray-400">
                  Product
                </div>
                <div className="space-y-4">
                  <div><Link href="/invest" className="text-gray-600 hover:text-gray-900 text-sm">Invest</Link></div>
                  <div><Link href="/dashboard" className="text-gray-600 hover:text-gray-900 text-sm">Dashboard</Link></div>
                  <div><Link href="/how-it-works" className="text-gray-600 hover:text-gray-900 text-sm">How It Works</Link></div>
                </div>
              </div>

              {/* Resources */}
              <div>
                <div className="text-xs font-semibold mb-6 uppercase tracking-widest text-gray-400">
                  Resources
                </div>
                <div className="space-y-4">
                  <div><Link href="/whitepaper" className="text-gray-600 hover:text-gray-900 text-sm">Whitepaper</Link></div>
                  <div><Link href="/tokenomics" className="text-gray-600 hover:text-gray-900 text-sm">Tokenomics</Link></div>
                  <div><Link href="/faq" className="text-gray-600 hover:text-gray-900 text-sm">FAQ</Link></div>
                </div>
              </div>

              {/* Community */}
              <div>
                <div className="text-xs font-semibold mb-6 uppercase tracking-widest text-gray-400">
                  Community
                </div>
                <div className="space-y-4">
                  <div><a href="https://twitter.com/basedprotocol" className="text-gray-600 hover:text-gray-900 text-sm">Twitter / X</a></div>
                  <div><a href="https://discord.gg/based" className="text-gray-600 hover:text-gray-900 text-sm">Discord</a></div>
                  <div><a href="https://t.me/basedprotocol" className="text-gray-600 hover:text-gray-900 text-sm">Telegram</a></div>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-200 pt-12">
              <p className="text-xs text-gray-400 leading-loose max-w-4xl">
                <strong>Risk Disclosure:</strong> Cryptocurrency investments carry high risk and may result in total loss. BASED Protocol is not FDIC insured. 
                This is not financial advice. Do your own research before investing. 
                <span className="block mt-4">© 2025 BASED Protocol. Founded by Sirmark Critney, Developer & Fund Manager.</span>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
