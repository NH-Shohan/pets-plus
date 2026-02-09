"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface DropdownItem {
  id: string;
  label: string;
  href: string;
}

export interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
  className?: string;
}

export default function NavDropdown({
  label,
  items,
  className = "",
}: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // Small delay to allow mouse to move to dropdown
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
          className={`w-4.5 h-4.5 transition-transform duration-200 text-light ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-3 min-w-[260px] bg-surface border border-border rounded-[20px] z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="p-[10px]">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`block px-4 py-2.5 text-body-medium font-semibold! transition-colors duration-150 rounded-[10px] text-nowrap hover:bg-mint-light hover:text-primary`}
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
