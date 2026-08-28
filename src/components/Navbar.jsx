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
  Truck,
  ArrowRight
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
              className="bg-stone-900 hover:bg-black text-white px-5 py-2.5 flex items-center justify-center transition-colors shrink-0"
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
              className="flex items-center gap-2 text-stone-800 hover:text-stone-950 transition-colors p-2 rounded-xl hover:bg-stone-100 focus:outline-none"
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
              className="md:hidden p-2 rounded-xl bg-stone-100 text-stone-900 hover:bg-stone-200 border border-stone-200 focus:outline-none"
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

                {/* Hover Mega-Dropdown */}
                {activeDropdown === 'products' && (
                  <div className="absolute top-full left-0 w-[540px] lg:w-[620px] bg-white rounded-3xl shadow-2xl border border-stone-200/90 p-5 z-50 animate-fadeIn">
                    
                    {/* Header bar */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100">
                      <div>
                        <p className="text-xs font-black uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                          <span>Custom Fitment Journey</span>
                        </p>
                        <p className="text-[11px] text-stone-500 font-normal">
                          Step-by-step tailor-made vehicle cover builder
                        </p>
                      </div>
                      <Link 
                        to="/products" 
                        onClick={() => setActiveDropdown(null)}
                        className="text-[11px] font-bold text-stone-900 hover:text-amber-700 flex items-center gap-1"
                      >
                        <span>Browse All Covers</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {/* Step-by-Step Selection Flow */}
                    <div className="space-y-2">
                      
                      {/* Step 1: Select Car Brand */}
                      <div 
                        onClick={handleFinderScroll}
                        className="p-2.5 rounded-2xl bg-stone-50 hover:bg-stone-100/90 border border-stone-200 hover:border-stone-900 cursor-pointer transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-base">➡️</span>
                          <div className="p-1.5 rounded-xl bg-stone-900 text-white group-hover:scale-105 transition-transform">
                            <Car className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-stone-900">
                              Select Car Brand
                            </p>
                            <p className="text-[11px] text-stone-500 font-normal">
                              Maruti Suzuki, Hyundai, Tata, Mahindra, Kia, Toyota, Honda & more
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-0.5 rounded-md border border-stone-200 text-stone-800">
                          Step 1
                        </span>
                      </div>

                      {/* Step 2: Select Car Model */}
                      <div 
                        onClick={handleFinderScroll}
                        className="p-2.5 rounded-2xl bg-stone-50 hover:bg-stone-100/90 border border-stone-200 hover:border-stone-900 cursor-pointer transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-base">➡️</span>
                          <div className="p-1.5 rounded-xl bg-stone-900 text-white group-hover:scale-105 transition-transform">
                            <Car className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-stone-900">
                              Select Car Model
                            </p>
                            <p className="text-[11px] text-stone-500 font-normal">
                              Swift, Creta, Nexon, Thar, Brezza, Scorpio-N, City, Baleno & 50+
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-0.5 rounded-md border border-stone-200 text-stone-800">
                          Step 2
                        </span>
                      </div>

                      {/* Step 3: Select Manufacturing Year */}
                      <div 
                        onClick={handleFinderScroll}
                        className="p-2.5 rounded-2xl bg-stone-50 hover:bg-stone-100/90 border border-stone-200 hover:border-stone-900 cursor-pointer transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-base">➡️</span>
                          <div className="p-1.5 rounded-xl bg-stone-900 text-white group-hover:scale-105 transition-transform">
                            <Truck className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-stone-900">
                              Select Manufacturing Year
                            </p>
                            <p className="text-[11px] text-stone-500 font-normal">
                              Exact laser-cut patterns calibrated for 2005 – 2026 vehicle generations
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-0.5 rounded-md border border-stone-200 text-stone-800">
                          Step 3
                        </span>
                      </div>

                      {/* Step 4: Select Cover Types */}
                      <div className="p-2.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-base">➡️</span>
                            <div className="p-1.5 rounded-xl bg-stone-900 text-white">
                              <Shield className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-stone-900">
                                Select Cover Types
                              </p>
                              <p className="text-[11px] text-stone-500 font-normal">
                                Choose the fabric grade designed for your parking conditions
                              </p>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-0.5 rounded-md border border-stone-200 text-stone-800">
                            Step 4
                          </span>
                        </div>

                        {/* Quick pick cover type pills */}
                        <div className="grid grid-cols-2 gap-2 pt-1 pl-9">
                          {COVER_TYPES.map((cov) => (
                            <Link
                              key={cov.id}
                              to={`/products?category=${cov.id}`}
                              onClick={() => setActiveDropdown(null)}
                              className="p-2 rounded-xl bg-white hover:bg-stone-900 hover:text-white border border-stone-200 text-[11px] text-stone-800 font-bold flex items-center justify-between transition-all"
                            >
                              <span className="truncate">{cov.name}</span>
                              <span className="text-[10px] font-extrabold ml-1">₹{cov.basePrice}</span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Step 5: Offers */}
                      <Link 
                        to="/products"
                        onClick={() => setActiveDropdown(null)}
                        className="p-2.5 rounded-2xl bg-amber-50/80 hover:bg-amber-100/80 border border-amber-200 cursor-pointer transition-all flex items-center justify-between group shadow-sm"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-base">➡️</span>
                          <div className="p-1.5 rounded-xl bg-amber-500 text-stone-950 font-bold shadow-sm">
                            <Flame className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                                Offers & Discount Deals
                              </p>
                              <span className="px-1.5 py-0.5 rounded-full bg-red-600 text-white text-[9px] font-black uppercase">
                                Active
                              </span>
                            </div>
                            <p className="text-[11px] text-stone-600 font-medium">
                              Instant coupon savings and seasonal discounts applied on all orders
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-200 text-amber-900 px-2 py-0.5 rounded-md font-black">
                          Step 5
                        </span>
                      </Link>

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

      {/* 3. Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 py-4 space-y-3 text-sm shadow-xl font-medium">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <img src="/logo.png" alt="Hi-Life Logo" className="h-11 w-auto object-contain" />
          </div>

          {/* Mobile Links */}
          <Link to="/" className="block py-2 text-stone-800 font-bold uppercase tracking-wide border-b border-stone-100">
            HOME
          </Link>
          <Link to="/about" className="block py-2 text-stone-800 font-bold uppercase tracking-wide border-b border-stone-100">
            About Us
          </Link>

          {/* Mobile Products Accordion */}
          <div className="py-2 border-b border-stone-100 space-y-2">
            <Link to="/products" className="block font-bold text-stone-900 uppercase tracking-wide">
              Products
            </Link>
            <div className="pl-2 space-y-1.5 text-xs text-stone-700">
              <button 
                onClick={handleFinderScroll} 
                className="w-full text-left py-1.5 px-2.5 rounded-xl bg-stone-50 hover:bg-stone-100 font-semibold flex items-center gap-2"
              >
                <span>➡️</span>
                <span>Select Car Brand</span>
              </button>
              <button 
                onClick={handleFinderScroll} 
                className="w-full text-left py-1.5 px-2.5 rounded-xl bg-stone-50 hover:bg-stone-100 font-semibold flex items-center gap-2"
              >
                <span>➡️</span>
                <span>Select Car Model</span>
              </button>
              <button 
                onClick={handleFinderScroll} 
                className="w-full text-left py-1.5 px-2.5 rounded-xl bg-stone-50 hover:bg-stone-100 font-semibold flex items-center gap-2"
              >
                <span>➡️</span>
                <span>Select Manufacturing year</span>
              </button>
              <Link 
                to="/products" 
                className="block py-1.5 px-2.5 rounded-xl bg-stone-50 hover:bg-stone-100 font-semibold flex items-center gap-2"
              >
                <span>➡️</span>
                <span>select cover types</span>
              </Link>
              <Link 
                to="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 px-2.5 rounded-xl bg-amber-50 text-amber-900 font-bold flex items-center gap-2"
              >
                <span>➡️</span>
                <span>offers</span>
              </Link>
            </div>
          </div>

          <Link to="/gallery" className="block py-2 text-stone-800 font-bold uppercase tracking-wide border-b border-stone-100">
            Gallery
          </Link>
          <Link to="/contact" className="block py-2 text-stone-800 font-bold uppercase tracking-wide border-b border-stone-100">
            Contact
          </Link>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
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
