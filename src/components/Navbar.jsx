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
  Car, 
  Tag,
  Percent,
  Calendar,
  Sparkles,
  Layers,
  ArrowRight,
  Check,
  CheckCircle2,
  Gift,
  Truck
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { CAR_BRANDS, MANUFACTURING_YEARS } from '../data/vehicles';
import { COVER_TYPES } from '../data/products';
import { ACTIVE_OFFERS } from '../data/offers';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // Interactive Vehicle Selector Dropdown States
  const [selectedBrand, setSelectedBrand] = useState('maruti-suzuki');
  const [selectedModel, setSelectedModel] = useState('swift');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedCover, setSelectedCover] = useState('military-camo');
  const [appliedOffer, setAppliedOffer] = useState('HILIFE15');
  const [mobileSelectorOpen, setMobileSelectorOpen] = useState(false);

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
    setActiveDropdown(null);
    if (location.pathname === '/') {
      const el = document.getElementById('vehicle-finder');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#vehicle-finder');
    }
  };

  const handleApplyVehicleSelection = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    navigate(`/products?brand=${selectedBrand}&model=${selectedModel}&year=${selectedYear}&category=${selectedCover}`);
  };

  // Get active brand object and its models
  const currentBrandObj = CAR_BRANDS.find(b => b.id === selectedBrand) || CAR_BRANDS[0];
  const availableModels = currentBrandObj ? currentBrandObj.models : [];

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

              {/* VEHICLE & OFFERS SELECTOR DROPDOWN BUTTON (Requirement 3) */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('vehicleSelector')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className={`px-3.5 py-2 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeDropdown === 'vehicleSelector'
                      ? 'text-white bg-amber-600 shadow-sm'
                      : 'text-amber-900 bg-amber-100/80 hover:bg-amber-200/80 border border-amber-300/60'
                  }`}
                >
                  <Car className="w-3.5 h-3.5 text-amber-900" />
                  <span>Select Car & Offers</span>
                  <span className="px-1.5 py-0.2 bg-amber-500 text-stone-950 rounded text-[9px] font-black uppercase">
                    Finder
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'vehicleSelector' ? 'rotate-180 text-white' : 'text-amber-800'}`} />
                </button>

                {/* MEGA DROPDOWN POPUP ON HOVER */}
                {activeDropdown === 'vehicleSelector' && (
                  <div className="absolute top-full left-0 w-[840px] max-w-[92vw] bg-white rounded-3xl shadow-2xl border border-stone-200 p-5 z-50 animate-fadeIn">
                    
                    {/* Header summary strip */}
                    <div className="pb-3 mb-4 border-b border-stone-100 flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-amber-100 text-amber-900">
                          <Sparkles className="w-4 h-4" />
                        </span>
                        <div>
                          <h4 className="text-xs font-black text-stone-950 uppercase tracking-wider">
                            Interactive Vehicle Matcher & Offers
                          </h4>
                          <p className="text-[11px] text-stone-500 font-normal">
                            Hover or click options below to configure exact fitment and apply deals
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] font-bold bg-stone-100 px-3 py-1 rounded-xl text-stone-800">
                        <span>Selected:</span>
                        <span className="text-amber-800 font-black capitalize">{currentBrandObj?.name} {selectedModel} ({selectedYear})</span>
                      </div>
                    </div>

                    {/* 5-Section Configuration Grid */}
                    <div className="grid grid-cols-12 gap-4 items-start">
                      
                      {/* Section 1: Select Car Brand (3 cols) */}
                      <div className="col-span-3 border-r border-stone-100 pr-3 space-y-2">
                        <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-stone-500">
                          <Car className="w-3 h-3 text-amber-700" />
                          <span>1. Select Brand</span>
                        </div>
                        <div className="max-h-56 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                          {CAR_BRANDS.slice(0, 10).map((brand) => (
                            <button
                              key={brand.id}
                              type="button"
                              onClick={() => {
                                setSelectedBrand(brand.id);
                                if (brand.models && brand.models.length > 0) {
                                  setSelectedModel(brand.models[0].id);
                                }
                              }}
                              onMouseEnter={() => {
                                setSelectedBrand(brand.id);
                                if (brand.models && brand.models.length > 0) {
                                  setSelectedModel(brand.models[0].id);
                                }
                              }}
                              className={`w-full text-left px-2.5 py-1.5 rounded-xl text-[11px] font-bold flex items-center justify-between transition-all cursor-pointer ${
                                selectedBrand === brand.id
                                  ? 'bg-stone-950 text-white shadow-xs'
                                  : 'text-stone-700 hover:bg-stone-100'
                              }`}
                            >
                              <span className="truncate">{brand.name}</span>
                              {selectedBrand === brand.id && <Check className="w-3 h-3 text-amber-400 shrink-0" />}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Section 2: Select Car Model (3 cols) */}
                      <div className="col-span-3 border-r border-stone-100 pr-3 space-y-2">
                        <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-stone-500">
                          <Layers className="w-3 h-3 text-amber-700" />
                          <span>2. Select Model</span>
                        </div>
                        <div className="max-h-56 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                          {availableModels.map((model) => (
                            <button
                              key={model.id}
                              type="button"
                              onClick={() => setSelectedModel(model.id)}
                              onMouseEnter={() => setSelectedModel(model.id)}
                              className={`w-full text-left px-2.5 py-1.5 rounded-xl text-[11px] font-bold flex items-center justify-between transition-all cursor-pointer ${
                                selectedModel === model.id
                                  ? 'bg-stone-950 text-white shadow-xs'
                                  : 'text-stone-700 hover:bg-stone-100'
                              }`}
                            >
                              <div className="truncate">
                                <p className="truncate leading-tight">{model.name}</p>
                                <span className={`text-[9px] font-normal ${selectedModel === model.id ? 'text-stone-300' : 'text-stone-400'}`}>
                                  {model.bodyType}
                                </span>
                              </div>
                              {selectedModel === model.id && <Check className="w-3 h-3 text-amber-400 shrink-0" />}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Section 3: Select Manufacturing Year (2 cols) */}
                      <div className="col-span-2 border-r border-stone-100 pr-3 space-y-2">
                        <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-stone-500">
                          <Calendar className="w-3 h-3 text-amber-700" />
                          <span>3. Year</span>
                        </div>
                        <div className="max-h-56 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                          {MANUFACTURING_YEARS.slice(0, 10).map((year) => (
                            <button
                              key={year}
                              type="button"
                              onClick={() => setSelectedYear(year)}
                              onMouseEnter={() => setSelectedYear(year)}
                              className={`w-full text-left px-2.5 py-1.5 rounded-xl text-[11px] font-bold flex items-center justify-between transition-all cursor-pointer ${
                                selectedYear === year
                                  ? 'bg-stone-950 text-white shadow-xs'
                                  : 'text-stone-700 hover:bg-stone-100'
                              }`}
                            >
                              <span>{year}</span>
                              {selectedYear === year && <Check className="w-3 h-3 text-amber-400 shrink-0" />}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Section 4 & 5: Select Cover Types + Offers (4 cols) */}
                      <div className="col-span-4 space-y-3">
                        
                        {/* 4. Select Cover Types */}
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-stone-500">
                            <Shield className="w-3 h-3 text-amber-700" />
                            <span>4. Select Cover Type</span>
                          </div>
                          <div className="space-y-1">
                            {COVER_TYPES.map((cov) => (
                              <button
                                key={cov.id}
                                type="button"
                                onClick={() => setSelectedCover(cov.id)}
                                onMouseEnter={() => setSelectedCover(cov.id)}
                                className={`w-full text-left p-1.5 rounded-xl text-[11px] font-bold flex items-center justify-between transition-all border cursor-pointer ${
                                  selectedCover === cov.id
                                    ? 'bg-amber-50/80 border-amber-400 text-stone-950'
                                    : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                                }`}
                              >
                                <span className="truncate pr-1">{cov.name}</span>
                                <span className="text-[10px] font-black bg-stone-900 text-white px-1.5 py-0.5 rounded-md shrink-0">
                                  ₹{cov.basePrice}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* 5. Offers & Promo Deals */}
                        <div className="space-y-1.5 pt-1 border-t border-stone-100">
                          <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-stone-500">
                            <span className="flex items-center gap-1">
                              <Tag className="w-3 h-3 text-emerald-600" />
                              <span>5. Active Offers</span>
                            </span>
                            <span className="text-emerald-700 font-bold">Auto-applied</span>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-1.5">
                            {ACTIVE_OFFERS.slice(0, 4).map((off) => (
                              <div
                                key={off.id}
                                onClick={() => setAppliedOffer(off.code)}
                                className={`p-1.5 rounded-xl border text-[10px] cursor-pointer transition-all ${
                                  appliedOffer === off.code
                                    ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-mono font-black text-[9px] uppercase">{off.code}</span>
                                  {appliedOffer === off.code && <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />}
                                </div>
                                <p className="truncate text-[10px] mt-0.5 text-stone-900 font-semibold">{off.discount}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>

                    </div>

                    {/* Bottom Action CTA */}
                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between flex-wrap gap-2">
                      <div className="text-[11px] text-stone-500">
                        <span>Ready to protect your vehicle with guaranteed custom fitment?</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleFinderScroll}
                          className="px-3.5 py-2 rounded-xl text-stone-700 hover:bg-stone-100 text-xs font-bold transition-colors cursor-pointer"
                        >
                          Scroll to Matcher
                        </button>
                        <button
                          type="button"
                          onClick={handleApplyVehicleSelection}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-950 hover:bg-black text-white text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
                        >
                          <span>View Matched Covers</span>
                          <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                        </button>
                      </div>
                    </div>

                  </div>
                )}
              </div>

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
            className="fixed inset-y-0 left-0 z-50 w-[80%] max-w-sm bg-white shadow-2xl flex flex-col justify-between p-4 overflow-y-auto transform transition-transform duration-300 animate-slideInLeft"
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

                {/* Mobile Vehicle Selector & Offers Accordion */}
                <div className="p-2.5 rounded-2xl bg-amber-50 border border-amber-200 space-y-2 my-1">
                  <div 
                    onClick={() => setMobileSelectorOpen(!mobileSelectorOpen)}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <span className="font-black text-xs text-amber-950 flex items-center gap-1.5 uppercase">
                      <Car className="w-3.5 h-3.5 text-amber-800" />
                      <span>Select Car & Offers</span>
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 text-amber-800 transition-transform ${mobileSelectorOpen ? 'rotate-180' : ''}`} />
                  </div>

                  {mobileSelectorOpen && (
                    <div className="pt-2 border-t border-amber-200 space-y-2 text-[11px]">
                      <div>
                        <label className="text-[10px] font-bold text-stone-600 uppercase block mb-1">Brand</label>
                        <select 
                          value={selectedBrand} 
                          onChange={(e) => {
                            setSelectedBrand(e.target.value);
                            const b = CAR_BRANDS.find(br => br.id === e.target.value);
                            if (b && b.models.length > 0) setSelectedModel(b.models[0].id);
                          }}
                          className="w-full p-2 bg-white rounded-xl border border-stone-300 text-xs font-semibold"
                        >
                          {CAR_BRANDS.map(b => (
                            <option key={b.id} value={b.id}>{b.name}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] font-bold text-stone-600 uppercase block mb-1">Model</label>
                        <select 
                          value={selectedModel} 
                          onChange={(e) => setSelectedModel(e.target.value)}
                          className="w-full p-2 bg-white rounded-xl border border-stone-300 text-xs font-semibold"
                        >
                          {availableModels.map(m => (
                            <option key={m.id} value={m.id}>{m.name} ({m.bodyType})</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] font-bold text-stone-600 uppercase block mb-1">Year</label>
                        <select 
                          value={selectedYear} 
                          onChange={(e) => setSelectedYear(e.target.value)}
                          className="w-full p-2 bg-white rounded-xl border border-stone-300 text-xs font-semibold"
                        >
                          {MANUFACTURING_YEARS.slice(0, 15).map(y => (
                            <option key={y} value={y}>{y}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] font-bold text-stone-600 uppercase block mb-1">Cover Type</label>
                        <select 
                          value={selectedCover} 
                          onChange={(e) => setSelectedCover(e.target.value)}
                          className="w-full p-2 bg-white rounded-xl border border-stone-300 text-xs font-semibold"
                        >
                          {COVER_TYPES.map(c => (
                            <option key={c.id} value={c.id}>{c.name} - ₹{c.basePrice}</option>
                          ))}
                        </select>
                      </div>

                      <button
                        type="button"
                        onClick={handleApplyVehicleSelection}
                        className="w-full py-2.5 rounded-xl bg-stone-950 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <span>Match Cover Now</span>
                        <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                      </button>
                    </div>
                  )}
                </div>

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
