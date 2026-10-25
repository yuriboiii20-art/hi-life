import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, Search, X } from 'lucide-react';

export default function CustomDropdown({
  id,
  name,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  disabledPlaceholder,
  disabled = false,
  label,
  title,
  required = false,
  className = '',
  searchable,
  size = 'default', // 'compact', 'default', 'lg'
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const searchInputRef = useRef(null);

  // Normalize options array into objects: { value, label, sublabel, badge }
  const normalizedOptions = options.map((opt) => {
    if (typeof opt === 'object' && opt !== null) {
      return {
        value: opt.value ?? opt.id ?? opt.name,
        label: opt.label ?? opt.name ?? String(opt.value),
        sublabel: opt.sublabel ?? (opt.category ? opt.category : undefined),
        badge: opt.badge,
        disabled: opt.disabled || false,
      };
    }
    return {
      value: opt,
      label: String(opt),
      sublabel: undefined,
      badge: undefined,
      disabled: false,
    };
  });

  // Determine current selected option object
  const selectedOption = normalizedOptions.find(
    (opt) => String(opt.value) === String(value)
  );

  // Auto-detect mobile screen for uniform bottom-sheet experience
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filter options based on search query
  const shouldSearch = searchable ?? (normalizedOptions.length > 6);
  const filteredOptions = shouldSearch && searchQuery.trim()
    ? normalizedOptions.filter((opt) =>
        opt.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (opt.sublabel && opt.sublabel.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : normalizedOptions;

  // Close dropdown on outside click (desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Lock scroll on mobile when sheet is open
      if (isMobile) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      setSearchQuery('');
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, isMobile]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus search input on open
  useEffect(() => {
    if (isOpen && shouldSearch && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, shouldSearch]);

  const handleSelect = (option) => {
    if (option.disabled) return;
    setIsOpen(false);
    setSearchQuery('');
    
    if (onChange) {
      // Support both direct value and synthetic event signature for forms
      onChange({
        target: {
          id: id || name,
          name: name || id,
          value: option.value,
        },
        value: option.value,
      });
    }
  };

  const displayText = selectedOption
    ? selectedOption.label
    : disabled && disabledPlaceholder
    ? disabledPlaceholder
    : placeholder;

  return (
    <div className={`relative w-full ${className}`} ref={containerRef}>
      {/* Optional Hidden input for native form submission */}
      {name && (
        <input
          type="hidden"
          name={name}
          value={value || ''}
          required={required}
        />
      )}

      {/* Trigger Button */}
      <button
        id={id}
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={label || placeholder}
        className={`w-full flex items-center justify-between text-left transition-all duration-150 focus:outline-none select-none ${
          size === 'compact'
            ? 'px-3 py-2 text-xs rounded-xl'
            : size === 'lg'
            ? 'px-4 py-3.5 text-sm sm:text-base rounded-2xl'
            : 'px-3.5 py-2.5 sm:px-3.5 sm:py-2.5 text-xs sm:text-sm rounded-xl'
        } ${
          disabled
            ? 'bg-stone-100 border border-stone-200 text-stone-400 cursor-not-allowed'
            : isOpen
            ? 'bg-white border-orange-500 ring-2 ring-orange-500/20 shadow-sm text-stone-900'
            : 'bg-stone-50 hover:bg-stone-100/80 border border-stone-300 text-stone-900 hover:border-orange-300'
        }`}
      >
        <span
          className={`truncate font-medium ${
            !selectedOption ? 'text-stone-400 font-normal' : 'text-stone-900'
          }`}
        >
          {displayText}
        </span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 ml-1.5 transition-transform duration-200 ${
            disabled ? 'text-stone-300' : 'text-stone-500'
          } ${isOpen ? 'rotate-180 text-stone-900' : ''}`}
        />
      </button>

      {/* MOBILE VIEW: Modern Bottom Sheet Drawer */}
      {isOpen && isMobile && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
          />

          {/* Bottom Sheet Card */}
          <div className="relative w-full max-h-[85vh] bg-white rounded-t-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-full duration-200">
            {/* Handle Bar & Header */}
            <div className="pt-3 pb-3 px-5 border-b border-stone-100 bg-stone-50/70">
              <div className="w-10 h-1 bg-stone-300 rounded-full mx-auto mb-3" />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-stone-950">
                    {title || label || placeholder}
                  </h3>
                  <p className="text-[11px] text-stone-500">
                    {filteredOptions.length} option{filteredOptions.length === 1 ? '' : 's'} available
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-200/60 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Search Bar */}
              {shouldSearch && (
                <div className="relative mt-3">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search options..."
                    className="w-full bg-white pl-9 pr-8 py-2 text-xs font-medium text-stone-900 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Options List on Mobile */}
            <div className="overflow-y-auto p-2.5 space-y-1 max-h-[55vh] overscroll-contain">
              {filteredOptions.length === 0 ? (
                <div className="py-8 text-center text-xs text-stone-400">
                  No matching options found
                </div>
              ) : (
                filteredOptions.map((opt, idx) => {
                  const isSelected = String(opt.value) === String(value);
                  return (
                    <button
                      key={`${opt.value}-${idx}`}
                      type="button"
                      disabled={opt.disabled}
                      onClick={() => handleSelect(opt)}
                      className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-left transition-colors ${
                        isSelected
                          ? 'bg-stone-900 text-white shadow-xs font-semibold'
                          : 'hover:bg-stone-100 text-stone-800'
                      }`}
                    >
                      <div className="flex-1 pr-2 truncate">
                        <div className="text-xs sm:text-sm truncate">
                          {opt.label}
                        </div>
                        {opt.sublabel && (
                          <div
                            className={`text-[10px] mt-0.5 truncate ${
                              isSelected ? 'text-stone-300' : 'text-stone-500'
                            }`}
                          >
                            {opt.sublabel}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {opt.badge && (
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              isSelected
                                ? 'bg-white/20 text-white border border-white/30'
                                : 'bg-stone-200 text-stone-700'
                            }`}
                          >
                            {opt.badge}
                          </span>
                        )}
                        {isSelected && (
                          <Check className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Safe Area spacing for iPhones */}
            <div className="h-6 bg-white" />
          </div>
        </div>
      )}

      {/* DESKTOP VIEW: Sleek Floating Popover Menu */}
      {isOpen && !isMobile && (
        <div className="absolute z-50 left-0 right-0 mt-1.5 bg-white border border-stone-200 rounded-2xl shadow-xl shadow-stone-900/10 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
          {/* Desktop Search Filter if options > 6 */}
          {shouldSearch && (
            <div className="p-2 border-b border-stone-100 bg-stone-50/50">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type to filter..."
                  className="w-full bg-white pl-8 pr-7 py-1.5 text-xs text-stone-900 rounded-lg border border-stone-200 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Options Scrollable Menu */}
          <div className="max-h-60 overflow-y-auto p-1.5 space-y-0.5">
            {filteredOptions.length === 0 ? (
              <div className="py-4 text-center text-xs text-stone-400">
                No matching options
              </div>
            ) : (
              filteredOptions.map((opt, idx) => {
                const isSelected = String(opt.value) === String(value);
                return (
                  <button
                    key={`${opt.value}-${idx}`}
                    type="button"
                    disabled={opt.disabled}
                    onClick={() => handleSelect(opt)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-colors text-xs ${
                      isSelected
                        ? 'bg-orange-600 text-white font-semibold'
                        : 'hover:bg-orange-50 hover:text-orange-950 text-stone-800'
                    }`}
                  >
                    <div className="flex-1 pr-2 truncate">
                      <span className="truncate block">{opt.label}</span>
                      {opt.sublabel && (
                        <span
                          className={`text-[10px] block truncate ${
                            isSelected ? 'text-stone-300' : 'text-stone-500'
                          }`}
                        >
                          {opt.sublabel}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {opt.badge && (
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                            isSelected
                              ? 'bg-white/20 text-white border border-white/30'
                              : 'bg-stone-100 text-stone-700 border border-stone-200'
                          }`}
                        >
                          {opt.badge}
                        </span>
                      )}
                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-white" />
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
