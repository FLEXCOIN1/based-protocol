import type { Metadata } from "next";
import "./globals.css";
import { WalletContextProvider } from "@/components/WalletProvider";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "BASED Protocol - Professional DeFi Fund on Solana",
  description: "Institutional-grade yield strategies delivering 10-100%+ APY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://*.solana.com https://*.helius-rpc.com https://api.devnet.solana.com wss://*.solana.com https://phantom.app https://*.phantom.app; frame-src 'self' https://phantom.app https://*.phantom.app; frame-ancestors 'self';"
        />
      </head>
      <body className="antialiased">
        <WalletContextProvider>
          <Navigation />
          <main>{children}</main>
          <footer className="bg-slate-900 text-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div>
                  <h4 className="text-xl font-bold mb-4">BASED Protocol</h4>
                  <p className="text-slate-400 text-sm">Professional DeFi fund management on Solana</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-4 text-slate-300">Product</h5>
                  <div className="space-y-3 text-slate-400 text-sm">
                    <div><a href="/dashboard" className="hover:text-white transition">Dashboard</a></div>
                    <div><a href="/how-it-works" className="hover:text-white transition">How It Works</a></div>
                    <div><a href="/tokenomics" className="hover:text-white transition">Tokenomics</a></div>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold mb-4 text-slate-300">Resources</h5>
                  <div className="space-y-3 text-slate-400 text-sm">
                    <div><a href="/whitepaper" className="hover:text-white transition">Whitepaper</a></div>
                    <div><a href="/faq" className="hover:text-white transition">FAQ</a></div>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold mb-4 text-slate-300">Community</h5>
                  <div className="space-y-3 text-slate-400 text-sm">
                    <div><a href="#" className="hover:text-white transition">Twitter</a></div>
                    <div><a href="#" className="hover:text-white transition">Discord</a></div>
                    <div><a href="#" className="hover:text-white transition">Telegram</a></div>
                  </div>
                </div>
              </div>
              <div className="border-t border-slate-800 pt-8">
                <p className="text-xs text-slate-500 text-center leading-relaxed">
                  Risk Warning: Cryptocurrency investments carry significant risk. Past performance does not guarantee future results. 
                  Only invest what you can afford to lose. © 2025 BASED Protocol. Founded by Sirmark Critney.
                </p>
              </div>
            </div>
          </footer>
        </WalletContextProvider>
      </body>
    </html>
  );
}
