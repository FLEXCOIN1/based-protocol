import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WalletContextProvider } from "@/components/WalletProvider";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <WalletContextProvider>
          <Navigation />
          {children}
          <footer className="bg-white border-t border-gray-200 py-6 mt-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <p className="text-xs text-gray-500 mb-2">
                High-risk investment. Cryptocurrency is volatile and may result in total loss. Not FDIC insured. Don't invest what you can't afford to lose. Past performance doesn't guarantee future results.
              </p>
              <p className="text-xs text-gray-400">© 2025 BASED Protocol. Founded by Sirmark Critney, Developer & Crypto Fund Manager.</p>
            </div>
          </footer>
        </WalletContextProvider>
      </body>
    </html>
  );
}
