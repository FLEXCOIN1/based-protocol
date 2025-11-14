'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const WalletMultiButton = dynamic(
  () => import('@solana/wallet-adapter-react-ui').then(mod => mod.WalletMultiButton),
  { ssr: false }
);

export default function Navigation() {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;
  
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              BASED Protocol
            </Link>
            <Link 
              href="/how-it-works" 
              className={isActive('/how-it-works') ? 'text-sm font-medium text-blue-600' : 'text-sm font-medium text-gray-600 hover:text-blue-600'}
            >
              How It Works
            </Link>
            <Link 
              href="/stake" 
              className={isActive('/stake') ? 'text-sm font-medium text-blue-600' : 'text-sm font-medium text-gray-600 hover:text-blue-600'}
            >
              Stake
            </Link>
            <Link 
              href="/tokenomics" 
              className={isActive('/tokenomics') ? 'text-sm font-medium text-blue-600' : 'text-sm font-medium text-gray-600 hover:text-blue-600'}
            >
              Roadmap
            </Link>
            <Link 
              href="/faq" 
              className={isActive('/faq') ? 'text-sm font-medium text-blue-600' : 'text-sm font-medium text-gray-600 hover:text-blue-600'}
            >
              FAQ
            </Link>
          </div>
          <WalletMultiButton className="!bg-blue-600 hover:!bg-blue-700 !rounded-lg" />
        </div>
      </div>
    </nav>
  );
}
