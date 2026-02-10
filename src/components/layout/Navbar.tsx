'use client';

import MobileMenuPanel from '@/components/layout/MobileMenuPanel';
import Button from '@/components/ui/Button';
import NavDropdown, { type DropdownItem } from '@/components/ui/NavDropdown';
import SearchInput from '@/components/ui/SearchInput';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

// Static data for Browse dropdown
const browseItems: DropdownItem[] = [
  { id: '1', label: 'Pets & Companions', href: '#' },
  { id: '2', label: 'Farm & Livestock', href: '#' },
  { id: '3', label: 'Exotic Species', href: '#' },
  { id: '4', label: 'Breeders', href: '#' }
];

const shopItems: DropdownItem[] = [
  { id: '1', label: 'Pet Supplies', href: '#' },
  { id: '2', label: 'Farm & Livestock Gear', href: '#' },
  { id: '3', label: 'Food & Nutrition', href: '#' },
  { id: '4', label: 'Health & Wellness', href: '#' }
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle dropdown interactions with delay
  const handleDropdownEnter = (id: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(id);
  };

  const handleDropdownLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-surface border-b border-border">
      <nav className="main-container py-[max(20px,1.0416666667vw)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[max(50px,2.6041666667vw)]">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.svg"
                alt="Pets&Plus"
                width={242}
                height={60}
                className="w-[max(163px,8.4895833333vw)] lg:w-[max(180px,12.6041666667vw)] lg:h-[max(60px, 3.125vw)]"
                priority
              />
            </Link>

            {/* Desktop Search - Centered */}
            <div className="hidden lg:flex justify-center">
              <SearchInput className="w-full" onSearch={query => console.log('Search:', query)} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-[max(50px,2.6041666667vw)]">
            <div className="flex items-center gap-[max(28px,1.4583333333vw)]">
              {/* Browse Dropdown */}
              <NavDropdown
                label="Browse"
                items={browseItems}
                isOpen={activeDropdown === 'Browse'}
                onMouseEnter={() => handleDropdownEnter('Browse')}
                onMouseLeave={handleDropdownLeave}
              />

              {/* Shop Link */}
              <NavDropdown
                label="Shop"
                items={shopItems}
                isOpen={activeDropdown === 'Shop'}
                onMouseEnter={() => handleDropdownEnter('Shop')}
                onMouseLeave={handleDropdownLeave}
              />
            </div>

            {/* Three Dots Menu with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('Dots')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                className="w-[max(50px,2.6041666667vw)] h-[max(50px,2.6041666667vw)] hover:bg-background-light rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center relative"
                aria-label="More options"
                aria-expanded={activeDropdown === 'Dots'}
                aria-haspopup="true"
              >
                <Image src="/dots.svg" alt="More options" fill className="object-contain p-[max(12px,0.625vw)]" />
              </button>

              {/* Dropdown Menu */}
              {activeDropdown === 'Dots' && (
                <div className="absolute top-full left-0 mt-[max(5.88px,0.30625vw)] min-w-[max(260px,13.55vw)] bg-surface border border-border rounded-[max(20px,1.0416666667vw)] z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 shadow-[0_0_30.3px_0_#E2E3F240]">
                  <ul className="p-[max(10px,.52vw)]">
                    {browseItems.map(item => (
                      <li key={item.id}>
                        <a
                          href={item.href}
                          className="block px-[max(16px,0.83vw)] py-[max(10px,.52vw)] text-body-medium font-semibold! transition-colors duration-150 rounded-[max(10px,0.52vw)] text-nowrap hover:bg-mint-light hover:text-primary"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sign Up Button */}
            <Button variant="primary">Sign up</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="lg:hidden transition-all duration-200 flex flex-col gap-[10px] items-start justify-center"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block w-[34px] h-[2px] bg-current transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'rotate-45 translate-y-[11.5px]' : ''
              }`}
            />
            <span
              className={`block w-[34px] h-[2px] bg-current transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-[21px] h-[2px] bg-current transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-[11.5px] w-[34px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-20 z-40 bg-black/50 h-screen"
            onClick={toggleMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel - Slides from right */}
      <MobileMenuPanel
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        browseItems={browseItems}
        shopItems={shopItems}
      />
    </header>
  );
}
