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
  { id: '3', label: 'Berna' }
];

export default function SearchInput({
  placeholder = '',
  suggestions = defaultSuggestions,
  onSearch,
  className = ''
}: SearchInputProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter suggestions based on query using useMemo
  const filteredSuggestions = useMemo(() => {
    if (query.trim()) {
      return suggestions.filter(s => s.label.toLowerCase().includes(query.toLowerCase()));
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
      setSelectedIndex(prev => (prev < filteredSuggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
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

  // Responsive inline styles for vw-based sizing
  const inputStyles: React.CSSProperties = {
    height: 'max(55px,2.8645833333vw)',
    paddingLeft: 'max(14px, 0.972vw)',
    paddingRight: 'max(20px, 1.0416666667vw)',
    borderRadius: 'max(10px, 0.5208333333vw)',
    fontSize: 'max(14px, 0.875vw)'
  };

  const iconStyles: React.CSSProperties = {
    width: 'max(18px, 1.1458333333vw)',
    height: 'max(18px, 1.1458333333vw)',
    right: 'max(14px, 0.972vw)'
  };

  const dropdownStyles: React.CSSProperties = {
    borderRadius: 'max(16px, 1.111vw)',
    padding: 'max(8px, 0.556vw)'
  };

  const suggestionStyles: React.CSSProperties = {
    padding: 'max(8px, 0.556vw) max(14px, 0.972vw)',
    borderRadius: 'max(8px, 0.556vw)',
    fontSize: 'max(14px, 0.875vw)'
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-[max(580px,30.2083333333vw)] ${showDropdown ? 'z-100' : ''} ${className}`}
    >
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
          className="w-full lg:w-[max(370px,19.2708333333vw)] 2xl:w-[max(580px,30.2083333333vw)] bg-background-light border border-border text-body-medium font-semibold! placeholder:text-light focus:outline-none transition-all duration-200"
          style={inputStyles}
        />
        <Search strokeWidth={1.5} className="absolute text-[#98A2B3] pointer-events-none" style={iconStyles} />
      </div>

      {/* Suggestions Dropdown - fixed stacking so it overlays nav in mobile menu */}
      {showDropdown && (
        <div
          className="absolute top-full left-0 right-0 mt-1 w-full min-w-0 bg-surface border border-border z-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
          style={dropdownStyles}
        >
          <ul className="max-h-[min(16rem,60vh)] overflow-y-auto" style={{ padding: 0 }}>
            {filteredSuggestions.map((suggestion, index) => (
              <li key={suggestion.id}>
                <button
                  type="button"
                  onClick={() => handleSelectSuggestion(suggestion.label)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full text-left transition-colors duration-150 cursor-pointer font-semibold! ${
                    index === selectedIndex ? 'bg-mint-light text-primary' : 'text-foreground hover:bg-mint-faint'
                  }`}
                  style={suggestionStyles}
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
