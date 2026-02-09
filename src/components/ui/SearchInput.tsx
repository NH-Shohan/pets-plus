'use client';

import { Search } from 'lucide-react';
import { useEffect, useMemo, useRef, useState, type ChangeEvent, type KeyboardEvent } from 'react';

export interface SearchSuggestion {
  id: string;
  label: string;
}

export interface SearchInputProps {
  placeholder?: string;
  suggestions?: SearchSuggestion[];
  onSearch?: (query: string) => void;
  className?: string;
}

// Static dummy suggestions for demo
const defaultSuggestions: SearchSuggestion[] = [
  { id: '1', label: 'Bernedoddle' },
  { id: '2', label: 'Bernes' },
  { id: '3', label: 'Berna' },
];

export default function SearchInput({
  placeholder = '',
  suggestions = defaultSuggestions,
  onSearch,
  className = '',
}: SearchInputProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter suggestions based on query using useMemo
  const filteredSuggestions = useMemo(() => {
    if (query.trim()) {
      return suggestions.filter((s) => s.label.toLowerCase().includes(query.toLowerCase()));
    }
    return suggestions;
  }, [query, suggestions]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredSuggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && filteredSuggestions[selectedIndex]) {
        handleSelectSuggestion(filteredSuggestions[selectedIndex].label);
      } else if (query.trim()) {
        onSearch?.(query);
      }
    } else if (e.key === 'Escape') {
      setIsFocused(false);
      inputRef.current?.blur();
    }
  };

  const handleSelectSuggestion = (label: string) => {
    setQuery(label);
    setIsFocused(false);
    onSearch?.(label);
  };

  const showDropdown = isFocused && query.trim().length > 0 && filteredSuggestions.length > 0;

  return (
    <div ref={containerRef} className={`relative ${showDropdown ? 'z-100' : ''} ${className}`}>
      {/* Search Input */}
      <div className="relative flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full h-12 pl-4 pr-12 bg-background-light border border-border rounded-xl text-heading-small text-foreground placeholder:text-gray-400 focus:outline-none transition-all duration-200"
        />
        <Search className="absolute right-4 w-5 h-5 text-gray-300 pointer-events-none" />
      </div>

      {/* Suggestions Dropdown - fixed stacking so it overlays nav in mobile menu */}
      {showDropdown && (
        <div className="absolute top-full left-0 right-0 mt-1 w-full min-w-0 bg-surface border border-border rounded-[20px] z-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="p-[10px] max-h-[min(16rem,60vh)] overflow-y-auto">
            {filteredSuggestions.map((suggestion, index) => (
              <li key={suggestion.id}>
                <button
                  type="button"
                  onClick={() => handleSelectSuggestion(suggestion.label)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full px-4 text-left transition-colors duration-150 cursor-pointer rounded-[10px] text-heading-small ${
                    index === selectedIndex ? 'bg-mint-light text-primary' : 'text-foreground hover:bg-mint-faint'
                  }`}
                >
                  {suggestion.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
