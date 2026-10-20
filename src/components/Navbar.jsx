import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Search, 
  ShoppingBag, 
  Menu, 
  X, 
  MessageCircle
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { totalItemsCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
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

  const handleFinderScroll = () => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById('vehicle-finder');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/#vehicle-finder');
    }
  };

  return (
    <header className="sticky top-0 z-50 font-sans bg-white border-b border-[#E5E5E5] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 md:gap-4">
          
          {/* Brand Logo & Title */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 focus:outline-none">
            <img 
              src="/logo.png" 
              alt="Hanuman Tarpaulins Logo" 
              className="h-9 sm:h-11 w-auto object-contain transition-transform hover:scale-105"
            />
            <div className="leading-tight text-left">
              <span className="text-xs sm:text-sm font-black text-stone-950 uppercase tracking-tight block whitespace-nowrap">
                Hanuman Tarpaulins
              </span>
              <span className="text-[9px] sm:text-[10px] text-amber-700 font-bold uppercase tracking-wider block whitespace-nowrap">
                20 Years • JC Road
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links — Strictly Single Line / In Line */}
          <nav className="hidden lg:flex items-center flex-nowrap space-x-1 xl:space-x-2 shrink-0">
            {/* HOME */}
            <Link 
              to="/" 
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all font-bold ${
                location.pathname === '/' 
                  ? 'bg-[#f0f0f0] text-stone-950 shadow-xs' 
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              HOME
            </Link>

            {/* CAR COVERS */}
            <Link 
              to="/products" 
              className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all font-bold ${
                location.pathname === '/products' && !location.search.includes('category=two-wheeler-camo')
                  ? 'bg-[#f0f0f0] text-stone-950 shadow-xs' 
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              CAR COVERS
            </Link>

            {/* BIKE COVERS */}
            <Link 
              to="/products?category=two-wheeler-camo" 
              className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all font-bold ${
                location.search.includes('category=two-wheeler-camo')
                  ? 'bg-[#f0f0f0] text-stone-950 shadow-xs' 
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              BIKE COVERS
            </Link>

            {/* WHY HANUMAN */}
            <Link 
              to="/about" 
              className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all font-bold ${
                location.pathname === '/about' 
                  ? 'bg-[#f0f0f0] text-stone-950 shadow-xs' 
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              WHY HANUMAN
            </Link>

            {/* SUPPORT */}
            <Link 
              to="/contact" 
              className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all font-bold ${
                location.pathname === '/contact' 
                  ? 'bg-[#f0f0f0] text-stone-950 shadow-xs' 
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              SUPPORT
            </Link>

            {/* VEHICLE FINDER */}
            <button
              type="button"
              onClick={handleFinderScroll}
              className="whitespace-nowrap px-3 py-1.5 rounded-full text-xs uppercase tracking-wider font-extrabold text-[#b45309] hover:text-[#78350f] hover:bg-amber-50/80 transition-all cursor-pointer"
            >
              VEHICLE FINDER
            </button>
          </nav>

          {/* Right Action Items: Search, WhatsApp & Cart */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Search Toggle Icon */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-full hover:bg-stone-100 text-stone-700 hover:text-stone-950 transition-colors cursor-pointer"
                aria-label="Search covers"
              >
                <Search className="w-4 h-4" />
              </button>

              {searchOpen && (
                <div className="absolute right-0 top-12 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-stone-200 p-2 z-50 animate-fadeIn">
                  <form onSubmit={handleSearchSubmit} className="flex items-center bg-stone-50 rounded-xl px-3 py-2 border border-stone-300">
                    <Search className="w-4 h-4 text-stone-400 mr-2 shrink-0" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search car / bike model..."
                      className="w-full text-xs bg-transparent text-stone-900 focus:outline-none placeholder:text-stone-400"
                      autoFocus
                    />
                    <button type="submit" className="text-xs font-bold text-stone-950 hover:underline shrink-0 ml-1">
                      Go
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* WhatsApp Direct Store Link */}
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-all border border-emerald-200"
              title="Chat with JC Road Store"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden xl:inline">JC Road Store</span>
            </a>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-950 hover:bg-black text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
              title="View Shopping Cart"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Cart</span>
              <span className="min-w-4 h-4 px-1 rounded-full bg-amber-400 text-stone-950 text-[10px] font-black flex items-center justify-center">
                {totalItemsCount}
              </span>
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-stone-100 text-stone-900 hover:bg-stone-200 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-stone-200 space-y-3 animate-fadeIn">
            <form onSubmit={handleSearchSubmit} className="flex rounded-xl bg-stone-50 p-2.5 border border-stone-300">
              <Search className="w-4 h-4 text-stone-400 mr-2 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search car or bike model..."
                className="w-full text-xs bg-transparent text-stone-900 focus:outline-none font-medium"
              />
            </form>

            <nav className="flex flex-col space-y-1 text-xs font-bold uppercase tracking-wider text-stone-800">
              <Link to="/" className="p-2.5 rounded-lg hover:bg-stone-100">HOME</Link>
              <Link to="/products" className="p-2.5 rounded-lg hover:bg-stone-100">CAR COVERS</Link>
              <Link to="/products?category=two-wheeler-camo" className="p-2.5 rounded-lg hover:bg-stone-100">BIKE COVERS</Link>
              <Link to="/about" className="p-2.5 rounded-lg hover:bg-stone-100">WHY HANUMAN</Link>
              <Link to="/gallery" className="p-2.5 rounded-lg hover:bg-stone-100">FITMENT SHOWCASE</Link>
              <Link to="/contact" className="p-2.5 rounded-lg hover:bg-stone-100">SUPPORT</Link>
              <button 
                onClick={handleFinderScroll} 
                className="p-2.5 text-left rounded-lg text-[#b45309] font-black hover:bg-amber-50"
              >
                VEHICLE FINDER
              </button>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}
