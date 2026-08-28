import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Search, 
  User, 
  ShoppingBag, 
  ChevronDown, 
  Menu, 
  X, 
  MessageCircle, 
  Shield, 
  Flame, 
  Percent, 
  Car, 
  HelpCircle,
  Truck
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { CAR_BRANDS } from '../data/vehicles';
import { COVER_TYPES } from '../data/products';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/products');
    }
  };

  const handleFinderScroll = () => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById('vehicle-finder');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#vehicle-finder');
    }
  };

  return (
    <header className="sticky top-0 z-50 shadow-md font-sans">
      
      {/* 1. Main Header (Deep Navy Blue #19277c matching Reference Screenshot) */}
      <div className="bg-[#19277c] text-white py-3.5 px-4 sm:px-6 lg:px-8 border-b border-[#243599]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Brand Logo / Wordmark with Speed Wing */}
          <Link to="/" className="flex items-center gap-2 group shrink-0 focus:outline-none">
            <div className="relative flex items-center">
              {/* Dynamic Speed Lines */}
              <div className="flex flex-col gap-0.5 mr-1 text-[#47c7f1]">
                <span className="h-[2px] w-4 bg-[#47c7f1] rounded-full transform -skew-x-12"></span>
                <span className="h-[2.5px] w-6 bg-white rounded-full transform -skew-x-12"></span>
                <span className="h-[2px] w-3 bg-[#f97316] rounded-full transform -skew-x-12"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-black italic tracking-tighter text-white uppercase leading-none">
                  HI<span className="text-[#47c7f1]">-</span>LIFE
                </span>
                <span className="text-[9px] font-bold tracking-widest uppercase text-slate-300 -mt-0.5">
                  Car Covers
                </span>
              </div>
            </div>
          </Link>

          {/* Central Search Bar (White Bar + Cyan Search Button) */}
          <form 
            onSubmit={handleSearchSubmit} 
            className="hidden md:flex flex-1 max-w-2xl mx-4 items-center rounded-lg overflow-hidden bg-white shadow-sm"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by car model (e.g. Swift, Nexon, Creta) or cover type..."
              className="w-full px-4 py-2.5 text-sm text-slate-800 focus:outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="bg-[#47c7f1] hover:bg-[#38b9e4] text-[#0f174a] px-5 py-2.5 flex items-center justify-center transition-colors shrink-0"
              aria-label="Search"
            >
              <Search className="w-5 h-5 stroke-[2.5]" />
            </button>
          </form>

          {/* Right User Actions: Account & Cart */}
          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            
            {/* Account / Support */}
            <Link
              to="/contact"
              className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
            >
              <User className="w-5 h-5 text-[#47c7f1]" />
              <div className="text-left leading-tight hidden xl:block">
                <p className="text-[10px] text-slate-300">Support</p>
                <p className="font-bold text-white">Help Desk</p>
              </div>
            </Link>

            {/* Shopping Cart Pill */}
            <button
              onClick={handleFinderScroll}
              className="flex items-center gap-2 text-white hover:text-[#47c7f1] transition-colors p-1.5 focus:outline-none"
              title="Cart & Vehicle Matcher"
            >
              <div className="relative">
                <ShoppingBag className="w-6 h-6 text-white" />
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#f97316] text-white text-[10px] font-black flex items-center justify-center">
                  0
                </span>
              </div>
              <span className="text-sm font-bold hidden sm:inline">Cart</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>

        {/* Mobile Search Bar */}
        <form onSubmit={handleSearchSubmit} className="mt-3 flex md:hidden w-full rounded-lg overflow-hidden bg-white shadow-sm">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search car model (e.g. Swift, Nexon, Creta)..."
            className="w-full px-3 py-2 text-xs text-slate-800 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#47c7f1] text-[#0f174a] px-3.5 py-2 flex items-center justify-center"
          >
            <Search className="w-4 h-4 stroke-[2.5]" />
          </button>
        </form>

      </div>

      {/* 2. Sub-Navigation Bar (Pure White Background matching Reference Screenshot) */}
      <div className="bg-white text-slate-700 border-b border-slate-200 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs font-semibold tracking-wide">
            
            {/* Left Nav Links */}
            <nav className="flex items-center space-x-1 lg:space-x-2 py-2.5">
              
              <Link to="/" className="px-3 py-1.5 rounded hover:text-[#19277c] hover:bg-slate-50 transition-colors">
                Home
              </Link>

              {/* Shop by Category Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('category')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-3 py-1.5 rounded hover:text-[#19277c] flex items-center gap-1 transition-colors">
                  <span>Shop by Category</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {activeDropdown === 'category' && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-fadeIn">
                    {COVER_TYPES.map((cov) => (
                      <Link
                        key={cov.id}
                        to={`/products?category=${cov.id}`}
                        className="block px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-[#19277c]"
                      >
                        <p className="font-bold">{cov.name}</p>
                        <p className="text-[10px] text-slate-400">{cov.tagline}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Shop by Brand Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('brand')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-3 py-1.5 rounded hover:text-[#19277c] flex items-center gap-1 transition-colors">
                  <span>Shop by Brand</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {activeDropdown === 'brand' && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-200 p-3 grid grid-cols-2 gap-1 z-50 animate-fadeIn">
                    {CAR_BRANDS.slice(0, 10).map((b) => (
                      <Link
                        key={b.id}
                        to={`/products?brand=${b.id}`}
                        className="p-2 rounded-lg text-xs text-slate-700 hover:bg-slate-50 hover:text-[#19277c] font-medium"
                      >
                        {b.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Shop by Vehicle Selector */}
              <button
                onClick={handleFinderScroll}
                className="px-3 py-1.5 rounded hover:text-[#19277c] flex items-center gap-1 transition-colors"
              >
                <Car className="w-3.5 h-3.5 text-[#19277c]" />
                <span>Shop by Vehicle</span>
              </button>

              {/* Best Sellers (Orange / Coral Pill Badge) */}
              <Link 
                to="/products?filter=bestsellers" 
                className="px-3 py-1 rounded-md bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold flex items-center gap-1 shadow-sm transition-colors"
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Best Sellers</span>
              </Link>

              <Link to="/about" className="px-3 py-1.5 rounded hover:text-[#19277c] transition-colors">
                Information
              </Link>

              <Link to="/gallery" className="px-3 py-1.5 rounded hover:text-[#19277c] transition-colors">
                Gallery
              </Link>

              <Link to="/contact" className="px-3 py-1.5 rounded hover:text-[#19277c] transition-colors">
                Contact Us
              </Link>

              {/* Deals (Red Pill Badge) */}
              <a
                href="#offers-section"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('offers-section')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-3 py-1 rounded-md bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold flex items-center gap-1 shadow-sm transition-colors"
              >
                <Percent className="w-3 h-3" />
                <span>Deals</span>
                <ChevronDown className="w-3 h-3" />
              </a>

            </nav>

            {/* Right: WhatsApp Chat Action */}
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25d366] hover:text-[#1ebd59] font-bold py-1 px-2 rounded hover:bg-emerald-50 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-[#25d366] text-white" />
              <span>WhatsApp Chat</span>
            </a>

          </div>
        </div>
      </div>

      {/* 3. Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 text-sm shadow-xl font-medium">
          <Link to="/" className="block py-2 text-slate-800 border-b border-slate-100">
            Home
          </Link>
          <button onClick={handleFinderScroll} className="w-full text-left py-2 text-[#19277c] font-bold flex items-center justify-between border-b border-slate-100">
            <span>Find by Car Model</span>
            <Car className="w-4 h-4" />
          </button>
          <Link to="/products" className="block py-2 text-slate-800 border-b border-slate-100">
            Shop All Covers
          </Link>
          <Link to="/about" className="block py-2 text-slate-800 border-b border-slate-100">
            About Hi-Life
          </Link>
          <Link to="/gallery" className="block py-2 text-slate-800 border-b border-slate-100">
            Fitment Gallery
          </Link>
          <Link to="/contact" className="block py-2 text-slate-800 border-b border-slate-100">
            Contact & Support
          </Link>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg bg-[#25d366] text-white font-bold text-xs flex items-center justify-center gap-2 shadow"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25d366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}

    </header>
  );
}
