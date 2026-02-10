'use client';

import Button from '@/components/ui/Button';
import NavDropdown, { type DropdownItem } from '@/components/ui/NavDropdown';
import SearchInput from '@/components/ui/SearchInput';
import { defaultStagger, defaultTransition, fadeUp } from '@/lib/animations';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
                style={{
                  width: 'max(180px, 12.6041666667vw)',
                  height: 'max(60px, 3.125vw)'
                }}
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
              <NavDropdown label="Browse" items={browseItems} />

              {/* Shop Link */}
              <NavDropdown label="Shop" items={shopItems} />
            </div>

            {/* Three Dots Menu */}
            <button
              type="button"
              className="w-[max(50px,2.6041666667vw)] h-[max(50px,2.6041666667vw)]  hover:bg-background-light rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center relative"
              aria-label="More options"
            >
              <Image src="/dots.svg" alt="More options" fill className="object-contain p-[max(12px,0.625vw)]" />
            </button>

            {/* Sign Up Button */}
            <Button variant="primary">Sign up</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="lg:hidden transition-all duration-200 flex flex-col gap-[10px] w-10 h-10 items-start justify-center"
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

        {/* Mobile Search - Below navbar on desktop, visible on tablet */}
        <div className="hidden md:flex lg:hidden py-4">
          <SearchInput placeholder="Search" className="w-full" onSearch={query => console.log('Search:', query)} />
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
            className="lg:hidden fixed top-[80px] right-0 bottom-0 w-full max-w-md z-50 bg-surface/95 backdrop-blur-md border-l border-border shadow-2xl"
          >
            <div className="px-6 py-8 h-full overflow-y-auto flex flex-col">
              <div className="flex-1">
                {/* Mobile Search */}
                <div className="md:hidden mb-6">
                  <SearchInput
                    placeholder="Search pets, breeders..."
                    className="w-full"
                    onSearch={query => {
                      console.log('Search:', query);
                      setIsMobileMenuOpen(false);
                    }}
                  />
                </div>

                {/* Mobile Navigation Links with Stagger Animation */}
                <motion.nav variants={defaultStagger} initial="initial" animate="animate" className="space-y-4">
                  {/* Browse Section */}
                  <motion.div variants={fadeUp} transition={defaultTransition}>
                    <p className="px-2 py-2 text-body-small font-bold text-primary uppercase tracking-wide mb-3">
                      Browse
                    </p>
                    <motion.ul variants={defaultStagger} initial="initial" animate="animate" className="space-y-2">
                      {browseItems.map(item => (
                        <motion.li key={item.id} variants={fadeUp} transition={defaultTransition}>
                          <Link
                            href={item.href}
                            className="block px-4 py-3 text-lg font-medium text-text hover:text-primary hover:bg-mint-faint/50 rounded-xl transition-all duration-200 hover:translate-x-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  {/* Divider */}
                  <motion.div variants={fadeUp} transition={defaultTransition} className="border-t border-border/50" />

                  {/* Shop Section */}
                  <motion.div variants={fadeUp} transition={defaultTransition}>
                    <p className="px-2 py-2 text-body-small font-bold text-primary uppercase tracking-wide mb-3">
                      Shop
                    </p>
                    <motion.ul variants={defaultStagger} initial="initial" animate="animate" className="space-y-2">
                      {shopItems.map(item => (
                        <motion.li key={item.id} variants={fadeUp} transition={defaultTransition}>
                          <Link
                            href={item.href}
                            className="block px-4 py-3 text-lg font-medium text-text hover:text-primary hover:bg-mint-faint/50 rounded-xl transition-all duration-200 hover:translate-x-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </motion.nav>
              </div>

              {/* Mobile Sign Up Button */}
              <motion.div
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ ...defaultTransition, delay: 0.4 }}
                className="pt-6 mt-auto border-t border-border/50"
              >
                <Button variant="primary" className="w-full text-lg py-4">
                  Sign up
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
