'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export interface DropdownItem {
  id: string;
  label: string;
  href: string;
}

export interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
  className?: string;
  isOpen?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function NavDropdown({
  label,
  items,
  className = '',
  isOpen: controlledIsOpen,
  onMouseEnter: controlledOnMouseEnter,
  onMouseLeave: controlledOnMouseLeave
}: NavDropdownProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (isControlled) {
      controlledOnMouseEnter?.();
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setInternalIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isControlled) {
      controlledOnMouseLeave?.();
    } else {
      timeoutRef.current = setTimeout(() => {
        setInternalIsOpen(false);
      }, 150); // Small delay to allow mouse to move to dropdown
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        type="button"
        className="flex items-center gap-1 hover:text-primary transition-colors duration-200 cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-body-large font-bold">{label}</span>
        <ChevronDown
          strokeWidth={2.3}
          className={`w-[max(18px,0.9375vw)] h-[max(18px,0.9375vw)] mt-1 transition-transform duration-200 text-light ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-[max(17px,0.8854166667vw)] min-w-[max(260px,13.55vw)] bg-surface border border-border rounded-[max(20px,1.0416666667vw)] z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 shadow-[0_0_30.3px_0_#E2E3F240]">
          <ul className="p-[max(10px,.52vw)]">
            {items.map(item => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`block px-[max(16px,0.83vw)] py-[max(10px,.52vw)] text-body-medium font-semibold! transition-colors duration-150 rounded-[max(10px,0.52vw)] text-nowrap hover:bg-mint-light hover:text-primary`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
