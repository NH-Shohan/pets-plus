'use client';

import Button from '@/components/ui/Button';
import type { DropdownItem } from '@/components/ui/NavDropdown';
import SearchInput from '@/components/ui/SearchInput';
import { defaultStagger, defaultTransition, fadeUp } from '@/lib/animations';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useCallback } from 'react';

// Constants
const SLIDE_TRANSITION = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30
};

const SECTION_TITLE_CLASS = 'px-1 py-2 text-body-small font-bold text-primary uppercase tracking-wide';
const MENU_LINK_BASE_CLASS =
  'block font-medium hover:text-primary hover:bg-mint-faint/50 rounded-xl transition-all duration-200 hover:translate-x-1';

// Interfaces
interface MobileMenuPanelProps {
  isOpen: boolean;
  onClose: () => void;
  browseItems: DropdownItem[];
  shopItems: DropdownItem[];
}

interface MenuSectionProps {
  title: string;
  items: DropdownItem[];
  onItemClick: () => void;
  linkClassName?: string;
}

// Sub-component for menu sections
function MenuSection({ title, items, onItemClick, linkClassName = 'px-4 py-2 text-body-large' }: MenuSectionProps) {
  return (
    <motion.div variants={fadeUp} transition={defaultTransition}>
      <p className={SECTION_TITLE_CLASS}>{title}</p>
      <motion.ul variants={defaultStagger} initial="initial" animate="animate">
        {items.map(item => (
          <motion.li key={item.id} variants={fadeUp} transition={defaultTransition}>
            <Link href={item.href} className={`${MENU_LINK_BASE_CLASS} ${linkClassName}`} onClick={onItemClick}>
              {item.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default function MobileMenuPanel({ isOpen, onClose, browseItems, shopItems }: MobileMenuPanelProps) {
  const handleSearch = useCallback(
    (query: string) => {
      console.log('Search:', query);
      onClose();
    },
    [onClose]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={SLIDE_TRANSITION}
          className="lg:hidden fixed top-[80px] right-0 bottom-0 w-full max-w-md z-50 bg-surface border-l border-border shadow-2xl"
        >
          <div className="px-6 py-8 h-full overflow-y-auto flex flex-col">
            <div className="flex-1">
              {/* Mobile Search */}
              <div className="md:hidden mb-4">
                <SearchInput placeholder="Search pets, breeders..." className="w-full" onSearch={handleSearch} />
              </div>

              {/* Mobile Navigation Links with Stagger Animation */}
              <motion.nav variants={defaultStagger} initial="initial" animate="animate" className="space-y-4">
                <MenuSection title="Browse" items={browseItems} onItemClick={onClose} />

                {/* Divider */}
                <motion.div variants={fadeUp} transition={defaultTransition} className="border-t border-border/50" />

                <MenuSection title="Shop" items={shopItems} onItemClick={onClose} />
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
              <Button variant="primary" className="w-full py-4">
                Sign up
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
