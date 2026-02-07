'use client';

import Button from '@/components/ui/Button';
import NavDropdown, { type DropdownItem } from '@/components/ui/NavDropdown';
import SearchInput from '@/components/ui/SearchInput';
import { Menu, MoreHorizontal, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Static data for Browse dropdown
const browseItems: DropdownItem[] = [
  { id: '1', label: 'Pets & Companions', href: '#' },
  { id: '2', label: 'Farm & Livestock', href: '#' },
  { id: '3', label: 'Exotic Species', href: '#' },
  { id: '4', label: 'Breeders', href: '#' },
];

const shopItem: DropdownItem = { id: '1', label: 'Shop', href: '#' };

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-surface/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src="/logo.svg" alt="Pets&Plus" width={242} height={60} className="w-auto" priority />
          </Link>

          {/* Desktop Search - Centered */}
          <div className="hidden lg:flex flex-1 justify-center max-w-lg">
            <SearchInput placeholder="Search" className="w-full" onSearch={(query) => console.log('Search:', query)} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Browse Dropdown */}
            <NavDropdown label="Browse" items={browseItems} />

            {/* Shop Link */}
            <NavDropdown label="Shop" items={[shopItem]} />

            {/* Three Dots Menu */}
            <button
              type="button"
              className="p-3 text-foreground bg-background-light rounded-full transition-all duration-200 cursor-pointer"
              aria-label="More options"
            >
              <MoreHorizontal className="w-5 h-5" />
            </button>

            {/* Sign Up Button */}
            <Button variant="primary" className="ml-5">
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-foreground hover:text-primary hover:bg-surface-light rounded-lg transition-all duration-200"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Search - Below navbar on desktop, visible on tablet */}
        <div className="hidden md:flex lg:hidden pb-4">
          <SearchInput placeholder="Search" className="w-full" onSearch={(query) => console.log('Search:', query)} />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-16 z-40 bg-black/50 animate-in fade-in duration-200"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed top-16 left-0 right-0 z-50 bg-surface border-b border-border shadow-lg transition-all duration-300 transform ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {/* Mobile Search */}
          <div className="md:hidden">
            <SearchInput
              placeholder="Search"
              className="w-full"
              onSearch={(query) => {
                console.log('Search:', query);
                setIsMobileMenuOpen(false);
              }}
            />
          </div>

          {/* Mobile Navigation Links */}
          <nav className="space-y-1">
            {/* Browse Section */}
            <div className="py-2">
              <p className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Browse</p>
              <ul className="space-y-1">
                {browseItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-mint-faint rounded-lg transition-colors duration-150"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-2" />

            {/* Shop Link */}
            <Link
              href="#"
              className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-mint-faint rounded-lg transition-colors duration-150"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>

            {/* More Options */}
            <button
              type="button"
              className="flex items-center gap-2 w-full px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-mint-faint rounded-lg transition-colors duration-150"
            >
              <MoreHorizontal className="w-4 h-4" />
              <span>More options</span>
            </button>
          </nav>

          {/* Mobile Sign Up Button */}
          <div className="pt-4">
            <Button variant="primary" className="w-full">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
