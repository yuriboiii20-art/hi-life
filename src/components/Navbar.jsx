import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Search, 
  User, 
  ShoppingBag, 
  ChevronDown, 
  Menu, 
  X, 
  MessageCircle 
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
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
    <header className="sticky top-0 z-50 shadow-sm font-sans bg-white">
      
      {/* 1. Main Header (Nordic Minimalist Crisp White) */}
      <div className="bg-white text-stone-900 py-3 px-4 sm:px-6 lg:px-8 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Brand Logo with Official Hi-Life Logo */}
          <Link to="/" className="flex items-center group shrink-0 focus:outline-none py-0.5">
            <img 
              src="/logo.png" 
              alt="Hi-Life Automotive Car Covers" 
              className="h-11 sm:h-12 md:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Central Search Bar (Warm Stone Input + Charcoal Button) */}
          <form 
            onSubmit={handleSearchSubmit} 
            className="hidden md:flex flex-1 max-w-2xl mx-4 items-center rounded-2xl overflow-hidden bg-stone-50 shadow-sm border border-stone-300 focus-within:border-stone-800 transition-colors"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by car model (e.g. Swift, Nexon, Creta) or cover type..."
              className="w-full px-4 py-2.5 text-sm bg-transparent text-stone-900 focus:outline-none placeholder:text-stone-400 font-medium"
            />
            <button
              type="submit"
              className="bg-stone-900 hover:bg-black text-white px-5 py-2.5 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-4 h-4 stroke-[2.5]" />
            </button>
          </form>

          {/* Right User Actions: Support & Cart */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            
            {/* Help Desk */}
            <Link
              to="/contact"
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-stone-600 hover:text-stone-950 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800">
                <User className="w-4 h-4" />
              </div>
              <div className="text-left leading-tight hidden xl:block">
                <p className="text-[10px] text-stone-400 font-medium">Support</p>
                <p className="font-bold text-stone-900">Help Desk</p>
              </div>
            </Link>

            {/* Shopping Cart Button */}
            <button
              onClick={handleFinderScroll}
              className="flex items-center gap-2 text-stone-800 hover:text-stone-950 transition-colors p-2 rounded-xl hover:bg-stone-100 focus:outline-none cursor-pointer"
              title="Cart & Vehicle Matcher"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-stone-800" />
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-amber-500 text-stone-950 text-[10px] font-black flex items-center justify-center shadow-sm">
                  0
                </span>
              </div>
              <span className="text-xs font-bold hidden sm:inline text-stone-800">Cart</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-stone-100 text-stone-900 hover:bg-stone-200 border border-stone-200 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

        {/* Mobile Search Bar */}
        <form onSubmit={handleSearchSubmit} className="mt-3 flex md:hidden w-full rounded-xl overflow-hidden bg-stone-50 shadow-sm border border-stone-300">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search car model (e.g. Swift, Nexon, Creta)..."
            className="w-full px-3.5 py-2 text-xs text-stone-900 bg-transparent focus:outline-none"
          />
          <button
            type="submit"
            className="bg-stone-900 text-white px-4 py-2 flex items-center justify-center"
          >
            <Search className="w-4 h-4 stroke-[2.5]" />
          </button>
        </form>

      </div>

      {/* 2. Sub-Navigation Bar (Warm Stone Alabaster Strip) */}
      <div className="bg-[#fafaf9] text-stone-800 border-b border-stone-200/80 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs font-semibold tracking-wide">
            
            {/* Left Nav Links */}
            <nav className="flex items-center space-x-1 py-2">
              
              {/* HOME */}
              <Link 
                to="/" 
                className={`px-3.5 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                  location.pathname === '/' 
                    ? 'text-white bg-stone-900 font-extrabold shadow-sm' 
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
                }`}
              >
                HOME
              </Link>

              {/* About Us */}
              <Link 
                to="/about" 
                className={`px-3.5 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                  location.pathname === '/about' 
                    ? 'text-white bg-stone-900 font-extrabold shadow-sm' 
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
                }`}
              >
                About Us
              </Link>

              {/* Products (Hover Dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/products"
                  className={`px-3.5 py-2 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                    location.pathname.startsWith('/products') 
                      ? 'text-white bg-stone-900 font-extrabold shadow-sm' 
                      : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180 text-stone-950' : 'text-stone-400'}`} />
                </Link>

                {/* Sleek Minimalist Products Dropdown */}
                {activeDropdown === 'products' && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-stone-200/90 p-3 z-50 animate-fadeIn">
                    
                    <div className="px-2 py-1.5 border-b border-stone-100 mb-1.5 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
                        Cover Grades
                      </span>
                      <Link 
                        to="/products"
                        onClick={() => setActiveDropdown(null)}
                        className="text-[11px] font-bold text-stone-900 hover:text-amber-700 underline"
                      >
                        All Covers
                      </Link>
                    </div>

                    <div className="space-y-1">
                      {COVER_TYPES.map((cov) => (
                        <Link
                          key={cov.id}
                          to={`/products?category=${cov.id}`}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center justify-between p-2 rounded-xl hover:bg-stone-100 transition-colors text-xs font-semibold text-stone-900 group"
                        >
                          <div>
                            <p className="font-bold text-stone-950 group-hover:text-amber-800 transition-colors">
                              {cov.name}
                            </p>
                            <p className="text-[10px] text-stone-500 font-normal">
                              {cov.tagline.split('&')[0]}
                            </p>
                          </div>
                          <span className="text-xs font-black text-stone-950 bg-stone-100 group-hover:bg-stone-200 px-2 py-0.5 rounded-lg shrink-0">
                            ₹{cov.basePrice}
                          </span>
                        </Link>
                      ))}
                    </div>

                    <div className="pt-2 mt-2 border-t border-stone-100">
                      <button
                        onClick={handleFinderScroll}
                        type="button"
                        className="w-full py-2 px-3 rounded-xl bg-stone-950 hover:bg-black text-white text-xs font-bold text-center transition-all cursor-pointer"
                      >
                        Match Your Car Model
                      </button>
                    </div>

                  </div>
                )}
              </div>

              {/* Gallery */}
              <Link 
                to="/gallery" 
                className={`px-3.5 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                  location.pathname === '/gallery' 
                    ? 'text-white bg-stone-900 font-extrabold shadow-sm' 
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
                }`}
              >
                Gallery
              </Link>

              {/* Contact */}
              <Link 
                to="/contact" 
                className={`px-3.5 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                  location.pathname === '/contact' 
                    ? 'text-white bg-stone-900 font-extrabold shadow-sm' 
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
                }`}
              >
                Contact
              </Link>

            </nav>

            {/* Right: WhatsApp Chat Action */}
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-800 hover:bg-stone-900 hover:text-white border border-stone-300 hover:border-stone-900 font-bold py-1.5 px-3.5 rounded-xl transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
              <span>WhatsApp Support</span>
            </a>

          </div>
        </div>
      </div>

      {/* 3. Mobile Left Slide-out Drawer with Background Blur */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          
          {/* Blurred Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Left-Side Partial Drawer (Covers ~75% screen on mobile) */}
          <div 
            className="fixed inset-y-0 left-0 z-50 w-[75%] max-w-xs bg-white shadow-2xl flex flex-col justify-between p-4 overflow-y-auto transform transition-transform duration-300 animate-slideInLeft"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header with Single Clean Logo & Close button */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-stone-100">
                <img src="/logo.png" alt="Hi-Life Logo" className="h-9 w-auto object-contain" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  type="button"
                  aria-label="Close menu"
                  className="p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-stone-950 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-1 py-1 font-medium text-xs">
                
                <Link 
                  to="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 px-2.5 rounded-xl font-bold uppercase tracking-wider transition-colors ${
                    location.pathname === '/' ? 'bg-stone-900 text-white' : 'text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  Home
                </Link>

                <Link 
                  to="/about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 px-2.5 rounded-xl font-bold uppercase tracking-wider transition-colors ${
                    location.pathname === '/about' ? 'bg-stone-900 text-white' : 'text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  About Us
                </Link>

                {/* Products Section */}
                <div className="py-1 border-y border-stone-100 my-1 space-y-1">
                  <div className="flex items-center justify-between px-2.5 py-1.5">
                    <span className="font-bold text-stone-900 uppercase tracking-wider">
                      Products
                    </span>
                    <Link 
                      to="/products"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[11px] font-bold text-stone-500 hover:text-stone-950 underline"
                    >
                      All
                    </Link>
                  </div>
                  
                  <div className="space-y-0.5 pl-2">
                    {COVER_TYPES.map((cov) => (
                      <Link
                        key={cov.id}
                        to={`/products?category=${cov.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between py-1 px-2 rounded-lg text-stone-700 hover:bg-stone-100 text-[11px] font-medium transition-colors"
                      >
                        <span className="truncate">{cov.name}</span>
                        <span className="font-bold text-stone-900 ml-1">₹{cov.basePrice}</span>
                      </Link>
                    ))}
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        handleFinderScroll();
                      }}
                      className="w-full text-left py-1.5 px-2 mt-0.5 text-[11px] font-bold text-amber-800 hover:underline cursor-pointer"
                    >
                      Match Car Model →
                    </button>
                  </div>
                </div>

                <Link 
                  to="/gallery" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 px-2.5 rounded-xl font-bold uppercase tracking-wider transition-colors ${
                    location.pathname === '/gallery' ? 'bg-stone-900 text-white' : 'text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  Gallery
                </Link>

                <Link 
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 px-2.5 rounded-xl font-bold uppercase tracking-wider transition-colors ${
                    location.pathname === '/contact' ? 'bg-stone-900 text-white' : 'text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  Contact
                </Link>

              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-stone-100 space-y-2">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white text-[#25d366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
