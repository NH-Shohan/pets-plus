"use client";

import Button from "@/components/ui/Button";
import NavDropdown, { type DropdownItem } from "@/components/ui/NavDropdown";
import SearchInput from "@/components/ui/SearchInput";
import { defaultStagger, defaultTransition, fadeUp } from "@/lib/animations";
import { Menu, MoreHorizontal, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Static data for Browse dropdown
const browseItems: DropdownItem[] = [
  { id: "1", label: "Pets & Companions", href: "#" },
  { id: "2", label: "Farm & Livestock", href: "#" },
  { id: "3", label: "Exotic Species", href: "#" },
  { id: "4", label: "Breeders", href: "#" },
];

const shopItems: DropdownItem[] = [
  { id: "1", label: "Pet Supplies", href: "#" },
  { id: "2", label: "Farm & Livestock Gear", href: "#" },
  { id: "3", label: "Food & Nutrition", href: "#" },
  { id: "4", label: "Health & Wellness", href: "#" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-surface border-b border-border">
      <nav className="main-container">
        <div className="flex items-center justify-between lg:gap-5 xl:gap-12 h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.svg"
              alt="Pets&Plus"
              width={242}
              height={60}
              className="w-40 lg:w-auto"
              priority
            />
          </Link>

          {/* Desktop Search - Centered */}
          <div className="hidden lg:flex flex-1 justify-center max-w-lg">
            <SearchInput
              className="w-full"
              onSearch={(query) => console.log("Search:", query)}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {/* Browse Dropdown */}
            <NavDropdown label="Browse" items={browseItems} />

            {/* Shop Link */}
            <NavDropdown label="Shop" items={shopItems} />

            {/* Three Dots Menu */}
            <button
              type="button"
              className="p-3 hover:bg-background-light rounded-full transition-all duration-200 cursor-pointer"
              aria-label="More options"
            >
              <MoreHorizontal className="w-5 h-5" />
            </button>

            {/* Sign Up Button */}
            <Button variant="primary" className="ml-2">
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 hover:text-primary hover:bg-surface-light rounded-lg transition-all duration-200"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Search - Below navbar on desktop, visible on tablet */}
        <div className="hidden md:flex lg:hidden py-4">
          <SearchInput
            placeholder="Search"
            className="w-full"
            onSearch={(query) => console.log("Search:", query)}
          />
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
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="lg:hidden fixed top-20 right-0 bottom-0 w-full z-50 bg-surface border-l border-border shadow-lg h-[100dvh-80px]"
          >
            <div className="px-4 py-6 space-y-4 h-full overflow-y-auto flex flex-col justify-between">
              <div className="">
                {/* Mobile Search */}
                <div className="md:hidden">
                  <SearchInput
                    placeholder="Search"
                    className="w-full"
                    onSearch={(query) => {
                      console.log("Search:", query);
                      setIsMobileMenuOpen(false);
                    }}
                  />
                </div>

                {/* Mobile Navigation Links with Stagger Animation */}
                <motion.nav
                  variants={defaultStagger}
                  initial="initial"
                  animate="animate"
                  className="space-y-1"
                >
                  {/* Browse Section */}
                  <motion.div
                    variants={fadeUp}
                    transition={defaultTransition}
                    className="py-2"
                  >
                    <p className="px-1 py-2 text-body-extra-small font-semibold text-primary uppercase tracking-wider">
                      Browse
                    </p>
                    <motion.ul
                      variants={defaultStagger}
                      initial="initial"
                      animate="animate"
                      className="space-y-1"
                    >
                      {browseItems.map((item) => (
                        <motion.li
                          key={item.id}
                          variants={fadeUp}
                          transition={defaultTransition}
                        >
                          <Link
                            href={item.href}
                            className="block px-1 py-2 card-title-large font-normal! hover:text-primary hover:bg-mint-faint rounded-lg transition-colors duration-150"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  {/* Divider */}
                  <motion.div
                    variants={fadeUp}
                    transition={defaultTransition}
                    className="border-t border-border my-2"
                  />

                  {/* Browse Section */}
                  <motion.div
                    variants={fadeUp}
                    transition={defaultTransition}
                    className="py-2"
                  >
                    <p className="px-1 py-2 text-body-extra-small font-semibold text-primary uppercase tracking-wider">
                      Shop
                    </p>
                    <motion.ul
                      variants={defaultStagger}
                      initial="initial"
                      animate="animate"
                      className="space-y-1"
                    >
                      {shopItems.map((item) => (
                        <motion.li
                          key={item.id}
                          variants={fadeUp}
                          transition={defaultTransition}
                        >
                          <Link
                            href={item.href}
                            className="block px-1 py-2 card-title-large font-normal! hover:text-primary hover:bg-mint-faint rounded-lg transition-colors duration-150"
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
                className="pt-4"
              >
                <Button variant="primary" className="w-full">
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
