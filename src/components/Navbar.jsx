import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Search, 
  ShoppingBag, 
  Menu, 
  X, 
  User, 
  ChevronDown, 
  ChevronRight,
  ShieldCheck,
  Phone,
  MessageCircle,
  Car,
  Compass
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { totalItemsCount, setIsCartOpen } = useCart();
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  const [coversSubmenuOpen, setCoversSubmenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [coversDropdownHover, setCoversDropdownHover] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Close menus on route navigation
  useEffect(() => {
    setMenuDrawerOpen(false);
    setSearchOpen(false);
    setCoversDropdownHover(false);
  }, [location.pathname]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    } else {
      navigate('/products');
    }
  };

  return (
    <>
      {/* Sticky Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/90 transition-all font-sans select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Left: Mobile Menu Trigger + Search Icon */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                type="button"
                onClick={() => setMenuDrawerOpen(true)}
                className="p-2 -ml-2 rounded-full hover:bg-stone-100 text-stone-900 transition-colors cursor-pointer"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-full hover:bg-stone-100 text-stone-900 transition-colors cursor-pointer"
                aria-label="Search Vehicle Covers"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Center: Brand Logo / Wordmark with Official Hi-Life Logo */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 focus:outline-none group">
              <img 
                src="/logo.png" 
                alt="Hi-Life Automotive Covers" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-sm" 
              />
              <div className="flex flex-col items-start justify-center">
                <span className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 group-hover:text-orange-600 transition-colors">
                  Hi-Life
                </span>
                <span className="text-[7.5px] sm:text-[8.5px] font-extrabold tracking-[0.22em] text-orange-600 uppercase -mt-1">
                  HANUMAN TARPAULINS
                </span>
              </div>
            </Link>

            {/* Center-Right: Desktop Nav Links (Home, Covers, Why Hi-Life, Support) */}
            <nav className="hidden md:flex items-center space-x-6 text-xs sm:text-sm font-medium text-stone-700">
              <Link
                to="/"
                className={`transition-colors py-1 ${
                  location.pathname === '/' 
                    ? 'text-orange-600 font-bold border-b-2 border-orange-600' 
                    : 'hover:text-orange-600'
                }`}
              >
                Home
              </Link>

              {/* Covers Dropdown Menu on Desktop */}
              <div 
                className="relative"
                onMouseEnter={() => setCoversDropdownHover(true)}
                onMouseLeave={() => setCoversDropdownHover(false)}
              >
                <Link
                  to="/products"
                  className={`flex items-center gap-1 transition-colors py-2 ${
                    location.pathname.startsWith('/products') || 
                    location.pathname.startsWith('/pages/car-brand-page') || 
                    location.pathname.startsWith('/shop-by-model') ||
                    location.pathname.startsWith('/pages/nexus') || 
                    location.pathname.startsWith('/pages/plasma')
                      ? 'text-orange-600 font-bold' 
                      : 'hover:text-orange-600'
                  }`}
                >
                  <span>Covers</span>
                  <ChevronDown className="w-3.5 h-3.5 text-stone-400 transition-transform duration-200 group-hover:rotate-180" />
                </Link>

                {coversDropdownHover && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-68 bg-white border border-orange-100 rounded-2xl shadow-xl py-2 px-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150 ring-1 ring-black/5">
                    <Link
                      to="/products"
                      className="block px-3.5 py-2 rounded-xl text-xs text-stone-800 hover:bg-orange-50 hover:text-orange-700 transition-colors font-semibold"
                    >
                      All Covers Catalog
                    </Link>

                    <Link
                      to="/pages/car-brand-page"
                      className="block px-3.5 py-2 rounded-xl text-xs text-stone-800 hover:bg-orange-50 hover:text-orange-700 transition-colors bg-orange-50/40 border border-orange-100/60 my-0.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-stone-950 uppercase tracking-wide text-[11px]">SHOP BY MODEL</span>
                        <span className="text-[9px] bg-orange-600 text-white font-extrabold px-1.5 py-0.5 rounded-md tracking-wider">NEW</span>
                      </div>
                      <span className="text-[10px] text-stone-500">Select Car Brand & Model Logo</span>
                    </Link>

                    <Link
                      to="/products?category=car"
                      className="block px-3.5 py-2 rounded-xl text-xs text-stone-800 hover:bg-orange-50 hover:text-orange-700 transition-colors"
                    >
                      <span className="font-semibold block text-stone-950">Car & SUV Covers</span>
                      <span className="text-[10px] text-stone-500">Tailored Fit for 250+ Models</span>
                    </Link>
                    <Link
                      to="/products?category=two-wheeler-camo"
                      className="block px-3.5 py-2 rounded-xl text-xs text-stone-800 hover:bg-orange-50 hover:text-orange-700 transition-colors"
                    >
                      <span className="font-semibold block text-stone-950">Bike & Scooter Covers</span>
                      <span className="text-[10px] text-stone-500">Custom Handlebar & Mirror Fit</span>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className={`transition-colors py-1 ${
                  location.pathname === '/about' 
                    ? 'text-orange-600 font-bold border-b-2 border-orange-600' 
                    : 'hover:text-orange-600'
                }`}
              >
                Why Hi-Life
              </Link>

              <Link
                to="/pages/who-it-is-for"
                className={`transition-colors py-1 ${
                  location.pathname === '/pages/who-it-is-for' 
                    ? 'text-orange-600 font-bold border-b-2 border-orange-600' 
                    : 'hover:text-orange-600'
                }`}
              >
                Who It's For
              </Link>

              <Link
                to="/contact"
                className={`transition-colors py-1 ${
                  location.pathname === '/contact' 
                    ? 'text-orange-600 font-bold border-b-2 border-orange-600' 
                    : 'hover:text-orange-600'
                }`}
              >
                Support
              </Link>
            </nav>

            {/* Right: Account & Cart Bag */}
            <div className="flex items-center gap-1 sm:gap-2">
              <Link
                to="/contact"
                className="p-2 rounded-full hover:bg-orange-50 hover:text-orange-600 text-stone-900 transition-colors cursor-pointer"
                title="Customer Support & Account"
                aria-label="Customer Account"
              >
                <User className="w-5 h-5" />
              </Link>

              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-full hover:bg-orange-50 hover:text-orange-600 text-stone-900 transition-colors cursor-pointer"
                title="View Cart"
                aria-label="View Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItemsCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-orange-600 text-white text-[10px] font-bold flex items-center justify-center animate-in zoom-in-50 duration-150 shadow-sm shadow-orange-500/40">
                    {totalItemsCount}
                  </span>
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Slide-out Navigation Drawer */}
      {menuDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            onClick={() => setMenuDrawerOpen(false)}
          />

          {/* Drawer Menu Panel */}
          <div className="relative w-full max-w-sm sm:max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-left duration-300 z-10 p-6 sm:p-8">
            
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-orange-100">
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="Hi-Life" className="h-9 w-auto object-contain" />
                  <div className="flex flex-col">
                    <span className="font-editorial text-2xl font-bold text-stone-950">
                      Hi-Life
                    </span>
                    <span className="text-[8px] font-extrabold tracking-[0.2em] text-orange-600 uppercase -mt-1">
                      HANUMAN TARPAULINS
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuDrawerOpen(false)}
                  className="p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-orange-50 transition-colors cursor-pointer"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Drawer Links */}
              <nav className="mt-8 space-y-4">
                <Link
                  to="/"
                  onClick={() => setMenuDrawerOpen(false)}
                  className="block text-2xl font-editorial text-stone-950 hover:text-orange-600 transition-colors py-1"
                >
                  Home
                </Link>

                {/* Expandable Covers Section */}
                <div className="border-b border-stone-200/60 pb-3">
                  <button
                    type="button"
                    onClick={() => setCoversSubmenuOpen(!coversSubmenuOpen)}
                    className="w-full flex items-center justify-between text-2xl font-editorial text-stone-950 hover:text-orange-600 transition-colors py-1 text-left"
                  >
                    <span>Covers</span>
                    <span className="text-xl font-light text-orange-600">
                      {coversSubmenuOpen ? '−' : '+'}
                    </span>
                  </button>

                  {coversSubmenuOpen && (
                    <div className="pl-4 mt-2 space-y-3 pt-2 text-sm text-stone-600 animate-in fade-in slide-in-from-top-1 duration-150">
                      <Link
                        to="/products"
                        onClick={() => setMenuDrawerOpen(false)}
                        className="block hover:text-orange-600 font-medium"
                      >
                        All Covers Catalog
                      </Link>
                      <Link
                        to="/pages/car-brand-page"
                        onClick={() => setMenuDrawerOpen(false)}
                        className="flex items-center justify-between text-orange-600 font-bold py-1"
                      >
                        <span className="uppercase tracking-wide text-xs">SHOP BY MODEL</span>
                        <span className="text-[9px] bg-orange-600 text-white font-extrabold px-1.5 py-0.5 rounded-md">NEW</span>
                      </Link>
                      <Link
                        to="/products?category=car"
                        onClick={() => setMenuDrawerOpen(false)}
                        className="block hover:text-orange-600 font-medium"
                      >
                        Car & SUV Covers
                      </Link>
                      <Link
                        to="/products?category=two-wheeler-camo"
                        onClick={() => setMenuDrawerOpen(false)}
                        className="block hover:text-orange-600 font-medium"
                      >
                        Two-Wheeler & Scooter Covers
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/about"
                  onClick={() => setMenuDrawerOpen(false)}
                  className="block text-2xl font-editorial text-stone-950 hover:text-orange-600 transition-colors py-1"
                >
                  Why Hi-Life
                </Link>

                <Link
                  to="/pages/who-it-is-for"
                  onClick={() => setMenuDrawerOpen(false)}
                  className="block text-2xl font-editorial text-stone-950 hover:text-orange-600 transition-colors py-1"
                >
                  Who Hi-Life Is For
                </Link>

                <Link
                  to="/faq"
                  onClick={() => setMenuDrawerOpen(false)}
                  className="block text-2xl font-editorial text-stone-950 hover:text-orange-600 transition-colors py-1"
                >
                  FAQs
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setMenuDrawerOpen(false)}
                  className="block text-2xl font-editorial text-stone-950 hover:text-orange-600 transition-colors py-1"
                >
                  Support
                </Link>
              </nav>
            </div>

            {/* Drawer Footer & Direct Help */}
            <div className="pt-6 border-t border-stone-200 space-y-4">
              <div className="bg-white rounded-2xl p-4 border border-orange-100 text-xs space-y-2 shadow-xs">
                <span className="font-bold text-stone-900 block">
                  Hanuman Tarpaulins • Bangalore
                </span>
                <p className="text-stone-500 text-[11px] leading-relaxed">
                  {BUSINESS_CONFIG.address.street}, {BUSINESS_CONFIG.address.city} - {BUSINESS_CONFIG.address.pincode}
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.defaultMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${BUSINESS_CONFIG.phone}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-800 border border-orange-200 font-bold text-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-orange-600" />
                    <span>Call Store</span>
                  </a>
                </div>
              </div>

              <div className="text-[11px] text-stone-400 text-center">
                © 2026 Hanuman Tarpaulins. 20+ Years Trusted Quality.
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Global Search Overlay Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <div 
            className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity animate-in fade-in"
            onClick={() => setSearchOpen(false)}
          />

          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-orange-100 p-6 z-10 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Search Hi-Life Covers
              </span>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-full text-stone-400 hover:text-stone-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSearchSubmit} className="mt-4">
              <div className="flex items-center bg-stone-50 rounded-2xl px-4 py-3 border border-stone-200 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20">
                <Search className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type car brand, model (e.g. Creta, Fortuner, Thar)..."
                  className="w-full text-sm bg-transparent text-stone-900 focus:outline-none placeholder:text-stone-400 font-medium"
                  autoFocus
                />
                <button
                  type="submit"
                  className="ml-2 px-5 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-all shrink-0 cursor-pointer shadow-sm shadow-orange-600/30"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-stone-400 text-[11px]">Popular:</span>
              {['Creta', 'Fortuner', 'Thar', 'Swift', 'Nexon', 'Innova', 'Scorpio', 'City'].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    navigate(`/products?q=${tag}`);
                    setSearchOpen(false);
                  }}
                  className="px-2.5 py-1 rounded-full bg-orange-50 hover:bg-orange-100 text-orange-800 border border-orange-200 text-[11px] font-medium transition-colors cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
