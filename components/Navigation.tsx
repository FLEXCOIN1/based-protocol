'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white border-b-2 border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center border-2 border-emerald-500">
              <span className="text-xl font-bold text-emerald-400">B</span>
            </div>
            <span className="text-xl font-bold text-slate-900 hidden sm:inline">BASED Protocol</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-semibold transition ${isActive('/') ? 'text-emerald-600' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Home
            </Link>
            <Link
              href="/how-it-works"
              className={`text-sm font-semibold transition ${isActive('/how-it-works') ? 'text-emerald-600' : 'text-slate-600 hover:text-slate-900'}`}
            >
              How It Works
            </Link>
            <Link
              href="/dashboard"
              className={`text-sm font-semibold transition ${isActive('/dashboard') ? 'text-emerald-600' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Dashboard
            </Link>
            <Link
              href="/tokenomics"
              className={`text-sm font-semibold transition ${isActive('/tokenomics') ? 'text-emerald-600' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Tokenomics
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/whitepaper"
              className="bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-700 transition"
            >
              Whitepaper
            </Link>
            <Link
              href="/faq"
              className="bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-700 transition"
            >
              FAQ
            </Link>
            {mounted && <WalletMultiButton />}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            {mounted && <WalletMultiButton />}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className={`text-sm font-semibold py-2 ${isActive('/') ? 'text-emerald-600' : 'text-slate-600'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/how-it-works"
                className={`text-sm font-semibold py-2 ${isActive('/how-it-works') ? 'text-emerald-600' : 'text-slate-600'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/dashboard"
                className={`text-sm font-semibold py-2 ${isActive('/dashboard') ? 'text-emerald-600' : 'text-slate-600'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/tokenomics"
                className={`text-sm font-semibold py-2 ${isActive('/tokenomics') ? 'text-emerald-600' : 'text-slate-600'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Tokenomics
              </Link>
              <Link
                href="/whitepaper"
                className="bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-700 transition text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Whitepaper
              </Link>
              <Link
                href="/faq"
                className="bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-700 transition text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
