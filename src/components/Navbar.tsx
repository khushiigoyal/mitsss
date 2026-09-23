import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, Search, Sparkles, Plane, ExternalLink, GraduationCap } from 'lucide-react';
import { NAV_ITEMS } from '../data/portalData';
import { NavItem } from '../types';

interface NavbarProps {
  onSelectItem: (title: string, description?: string) => void;
  onOpenSearch: () => void;
  highContrast: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectItem, onOpenSearch, highContrast }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (item: NavItem) => {
    if (item.children && item.children.length > 0) {
      setActiveDropdown(activeDropdown === item.id ? null : item.id);
    } else {
      setActiveDropdown(null);
      onSelectItem(item.label, `Explore ${item.label} updates, regulations and circulars.`);
      if (item.href) {
        const el = document.querySelector(item.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSubItemClick = (parentLabel: string, subTitle: string, desc?: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onSelectItem(`${parentLabel} › ${subTitle}`, desc);
  };

  return (
    <nav
      ref={navRef}
      id="main-navigation"
      className={`w-full relative z-40 shadow-md ${
        highContrast ? 'bg-black border-y-2 border-yellow-400' : 'bg-[#0f3b7d]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-stretch justify-between h-12">
          
          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-stretch flex-1 overflow-visible">
            {NAV_ITEMS.map((item) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isOpen = activeDropdown === item.id;

              if (item.isRed) {
                return (
                  <button
                    key={item.id}
                    id={`nav-${item.id}`}
                    onClick={() => handleNavClick(item)}
                    className="flex items-center px-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-sm tracking-wide transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <div key={item.id} className="relative flex items-stretch">
                  <button
                    id={`nav-${item.id}`}
                    onClick={() => handleNavClick(item)}
                    onMouseEnter={() => hasChildren && setActiveDropdown(item.id)}
                    className={`flex items-center px-3 py-2 text-[13px] font-semibold tracking-tight transition-colors cursor-pointer ${
                      isOpen
                        ? 'bg-[#1b4e9b] text-amber-300'
                        : 'text-white hover:bg-[#15468f] hover:text-amber-200'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasChildren && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-amber-300' : 'opacity-80'
                        }`}
                      />
                    )}
                    {item.badge && (
                      <span className="ml-1.5 px-1.5 py-0.2 text-[9px] font-bold bg-amber-400 text-slate-900 rounded-sm uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}
                  </button>

                  {/* Mega-Dropdown Menu */}
                  {hasChildren && isOpen && (
                    <div
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 w-80 bg-white text-slate-900 rounded-b-lg shadow-2xl border-t-2 border-[#dc2626] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                    >
                      <div className="px-3 py-1.5 border-b border-slate-100 flex items-center justify-between text-xs font-bold text-[#0f3b7d] uppercase tracking-wider">
                        <span>{item.label}</span>
                        <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
                      </div>
                      <div className="py-1 max-h-96 overflow-y-auto">
                        {item.children!.map((sub, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSubItemClick(item.label, sub.title, sub.description)}
                            className="w-full text-left px-3.5 py-2 hover:bg-slate-50 transition-colors group cursor-pointer border-b border-slate-50 last:border-0"
                          >
                            <div className="text-xs font-semibold text-slate-800 group-hover:text-[#0f3b7d] flex items-center justify-between">
                              <span>{sub.title}</span>
                              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#0f3b7d] opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            {sub.description && (
                              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1 leading-snug">
                                {sub.description}
                              </p>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Medium Screens (Horizontal scrollable or compact) */}
          <div className="flex xl:hidden items-center justify-between w-full">
            <button
              onClick={() => onSelectItem('Home', 'Welcome to MITS Gwalior official portal')}
              className="flex items-center px-4 py-2 bg-[#dc2626] text-white font-bold text-sm"
            >
              Home
            </button>

            <span className="text-xs font-semibold text-amber-200 tracking-wide px-2 truncate">
              MITS Gwalior Portal
            </span>

            <div className="flex items-center space-x-1">
              <button
                onClick={onOpenSearch}
                aria-label="Search Portal"
                className="p-2 text-white hover:text-amber-300 transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                id="btn-mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-amber-300 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Quick Search Button on Desktop */}
          <div className="hidden xl:flex items-center pl-3">
            <button
              id="btn-desktop-search"
              onClick={onOpenSearch}
              className="flex items-center space-x-1.5 px-2.5 py-1 text-xs text-amber-200 bg-[#0a2752] hover:bg-[#071c3b] rounded border border-blue-400/30 transition-colors cursor-pointer"
              title="Search courses, departments, faculty & tenders"
            >
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span>Search</span>
              <kbd className="text-[10px] bg-blue-900/60 px-1 rounded text-blue-200">⌘K</kbd>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a2959] border-t border-blue-700 px-4 py-3 space-y-2 text-white text-sm max-h-[75vh] overflow-y-auto shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <div key={item.id} className="border-b border-blue-800/60 pb-2">
              <div
                className="flex items-center justify-between py-1.5 font-bold cursor-pointer text-amber-200"
                onClick={() => {
                  if (item.children) {
                    setActiveDropdown(activeDropdown === item.id ? null : item.id);
                  } else {
                    handleNavClick(item);
                    setMobileMenuOpen(false);
                  }
                }}
              >
                <span>{item.label}</span>
                {item.children && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${activeDropdown === item.id ? 'rotate-180' : ''}`}
                  />
                )}
              </div>

              {item.children && activeDropdown === item.id && (
                <div className="pl-3 py-1 space-y-1 bg-[#071f45] rounded mt-1">
                  {item.children.map((sub, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => handleSubItemClick(item.label, sub.title, sub.description)}
                      className="w-full text-left py-1.5 px-2 text-xs text-slate-200 hover:text-amber-300 transition-colors"
                    >
                      {sub.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};
