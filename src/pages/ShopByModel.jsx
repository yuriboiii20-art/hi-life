import React, { useState, useMemo, useEffect } from 'react';
import { Link, useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { 
  Search, 
  CheckSquare, 
  Ruler, 
  Box, 
  ArrowLeft, 
  ChevronRight, 
  RotateCcw,
  SlidersHorizontal,
  Car
} from 'lucide-react';
import { ALL_CAR_BRANDS, getCarBrandById, getModelCoverSlug } from '../data/carBrandsData';
import { BrandLogo } from '../components/BrandLogos';
import CustomDropdown from '../components/CustomDropdown';

export default function ShopByModel() {
  const { brandSlug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Selected brand from URL param or search query param
  const activeBrandId = brandSlug || searchParams.get('brand') || null;
  const currentBrand = activeBrandId ? getCarBrandById(activeBrandId) : null;

  // Search state on the main brand page
  const [vehicleSearch, setVehicleSearch] = useState('');

  // Filter states on the brand collection view
  const [priceFilter, setPriceFilter] = useState('all');
  const [selectedBodyType, setSelectedBodyType] = useState('all');
  const [selectedModelFilter, setSelectedModelFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedFabric, setSelectedFabric] = useState('camo');

  // Scroll to top when brand changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeBrandId]);

  // Filtered brands on main page based on search input
  const filteredBrands = useMemo(() => {
    if (!vehicleSearch.trim()) return ALL_CAR_BRANDS;
    const q = vehicleSearch.toLowerCase().trim();
    return ALL_CAR_BRANDS.filter((brand) => {
      const matchBrand = brand.name.toLowerCase().includes(q);
      const matchModel = brand.models.some((m) => m.name.toLowerCase().includes(q));
      return matchBrand || matchModel;
    });
  }, [vehicleSearch]);

  // If user typed a search that directly matches models, extract those models for quick jumping
  const quickModelMatches = useMemo(() => {
    if (!vehicleSearch.trim() || vehicleSearch.trim().length < 2) return [];
    const q = vehicleSearch.toLowerCase().trim();
    const matches = [];
    ALL_CAR_BRANDS.forEach((brand) => {
      brand.models.forEach((model) => {
        if (model.name.toLowerCase().includes(q)) {
          matches.push({
            brand,
            model,
            slug: getModelCoverSlug(brand.id, model.id)
          });
        }
      });
    });
    return matches.slice(0, 8);
  }, [vehicleSearch]);

  // If a brand is selected, calculate filtered models for this brand
  const filteredBrandModels = useMemo(() => {
    if (!currentBrand) return [];
    return currentBrand.models.filter((model) => {
      // Body type filter
      if (selectedBodyType !== 'all') {
        const type = model.bodyType.toLowerCase();
        if (selectedBodyType === 'suv' && !type.includes('suv') && !type.includes('4x4')) return false;
        if (selectedBodyType === 'sedan' && !type.includes('sedan')) return false;
        if (selectedBodyType === 'hatchback' && !type.includes('hatchback')) return false;
        if (selectedBodyType === 'mpv' && !type.includes('mpv') && !type.includes('muv')) return false;
      }
      // Model dropdown filter
      if (selectedModelFilter !== 'all' && model.id !== selectedModelFilter) {
        return false;
      }
      // Price filter
      if (priceFilter === 'under-5000' && model.price >= 5000) return false;
      if (priceFilter === '5000-6000' && (model.price < 5000 || model.price > 6000)) return false;
      if (priceFilter === 'above-6000' && model.price <= 6000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name-az') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [currentBrand, selectedBodyType, selectedModelFilter, priceFilter, sortBy]);

  // Handle clicking on a brand card
  const handleSelectBrand = (brandId) => {
    navigate(`/pages/car-brand-page/${brandId}`);
  };

  const handleClearAllFilters = () => {
    setPriceFilter('all');
    setSelectedBodyType('all');
    setSelectedModelFilter('all');
    setSortBy('featured');
    setSelectedFabric('camo');
  };

  // ==========================================
  // VIEW 1: BRAND COLLECTION VIEW (e.g. Maruti Suzuki, Tata, etc.)
  // ==========================================
  if (currentBrand) {
    return (
      <div className="bg-white text-stone-900 font-sans min-h-screen py-8 sm:py-12 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6">
            <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-300" />
            <Link to="/pages/car-brand-page" className="hover:text-orange-600 transition-colors">Car Brands</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-300" />
            <span className="text-stone-950 font-bold">{currentBrand.name}</span>
          </nav>

          {/* Brand Header */}
          <div className="mb-8 sm:mb-10 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="font-editorial text-4xl sm:text-6xl text-stone-950 font-normal tracking-tight">
                  {currentBrand.name}
                </h1>
                <p className="font-editorial text-lg sm:text-xl text-stone-600 italic mt-1">
                  {currentBrand.tagline}
                </p>
              </div>

              {/* Brand Logo Avatar / Badge */}
              <div className="p-3 bg-stone-50 border border-stone-200/80 rounded-2xl flex items-center justify-center shrink-0">
                <BrandLogo brandId={currentBrand.id} className="w-16 h-12 object-contain" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed">
              {currentBrand.description}
            </p>
          </div>

          {/* Filter & Toolbar Header */}
          <div className="py-4 border-y border-stone-200/80 mb-8 flex flex-wrap items-center justify-between gap-3 text-xs">
            
            {/* Filter Dropdowns Left */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 flex-1">
              
              {/* Price Filter */}
              <div className="w-36">
                <CustomDropdown
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.value || e.target.value)}
                  size="compact"
                  options={[
                    { value: 'all', label: 'Price: All' },
                    { value: 'under-5000', label: 'Under ₹5,000' },
                    { value: '5000-6000', label: '₹5,000 - ₹6,000' },
                    { value: 'above-6000', label: 'Above ₹6,000' }
                  ]}
                  title="Filter by Price"
                />
              </div>

              {/* Model Dropdown */}
              <div className="w-44">
                <CustomDropdown
                  value={selectedModelFilter}
                  onChange={(e) => setSelectedModelFilter(e.value || e.target.value)}
                  size="compact"
                  options={[
                    { value: 'all', label: 'All Models' },
                    ...currentBrand.models.map((m) => ({ value: m.id, label: m.name }))
                  ]}
                  title="Filter by Model"
                />
              </div>

              {/* Body Type Filter */}
              <div className="w-36">
                <CustomDropdown
                  value={selectedBodyType}
                  onChange={(e) => setSelectedBodyType(e.value || e.target.value)}
                  size="compact"
                  options={[
                    { value: 'all', label: 'Body: All Types' },
                    { value: 'suv', label: 'SUV & 4x4' },
                    { value: 'sedan', label: 'Sedans' },
                    { value: 'hatchback', label: 'Hatchbacks' },
                    { value: 'mpv', label: 'MPV / MUV' }
                  ]}
                  title="Filter by Body Type"
                />
              </div>

              {/* Fabric Type */}
              <div className="w-40">
                <CustomDropdown
                  value={selectedFabric}
                  onChange={(e) => setSelectedFabric(e.value || e.target.value)}
                  size="compact"
                  options={[
                    { value: 'camo', label: 'Hi-Life Camo (130 GSM)' },
                    { value: 'nexus', label: 'Nexus 3-Layer All-Weather' },
                    { value: 'plasma', label: 'Plasma 4-Layer Heavy Duty' }
                  ]}
                  title="Filter by Fabric Grade"
                />
              </div>

              {/* Clear all link */}
              {(priceFilter !== 'all' || selectedBodyType !== 'all' || selectedModelFilter !== 'all' || selectedFabric !== 'camo') && (
                <button
                  type="button"
                  onClick={handleClearAllFilters}
                  className="inline-flex items-center gap-1 text-[11px] text-stone-500 hover:text-orange-600 underline font-medium cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear all</span>
                </button>
              )}
            </div>

            {/* Right: Item Count & Sort Selector */}
            <div className="flex items-center gap-3 shrink-0 ml-auto">
              <span className="text-stone-500 font-medium">
                {filteredBrandModels.length} items
              </span>

              <div className="flex items-center gap-1.5">
                <span className="text-stone-500">Sort:</span>
                <div className="w-40">
                  <CustomDropdown
                    value={sortBy}
                    onChange={(e) => setSortBy(e.value || e.target.value)}
                    size="compact"
                    options={[
                      { value: 'featured', label: 'Featured' },
                      { value: 'price-low', label: 'Price: Low to High' },
                      { value: 'price-high', label: 'Price: High to Low' },
                      { value: 'name-az', label: 'Name: A-Z' }
                    ]}
                    title="Sort Models"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Model Covers Grid */}
          {filteredBrandModels.length === 0 ? (
            <div className="py-24 text-center space-y-4 bg-stone-50/50 rounded-3xl border border-stone-100">
              <Car className="w-12 h-12 text-stone-300 mx-auto" />
              <h3 className="font-editorial text-2xl text-stone-900">No matching models found</h3>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                Try selecting a different body type or price range, or reset your filters.
              </p>
              <button
                type="button"
                onClick={handleClearAllFilters}
                className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold shadow-md shadow-orange-600/30 cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {filteredBrandModels.map((model) => {
                const coverSlug = getModelCoverSlug(currentBrand.id, model.id);
                const fabricName = selectedFabric === 'nexus' 
                  ? 'Nexus Car Cover' 
                  : selectedFabric === 'plasma' 
                    ? 'Plasma Car Cover' 
                    : 'Hi-Life Camo Car Cover';

                return (
                  <Link
                    key={model.id}
                    to={`/products/${coverSlug}`}
                    className="group flex flex-col justify-between bg-white rounded-2xl p-2.5 sm:p-3 border border-transparent hover:border-orange-200 hover:shadow-lg transition-all"
                  >
                    {/* Cover Product Image */}
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-50 border border-stone-200/80 shadow-2xs group-hover:shadow-md transition-shadow">
                      <img
                        src={model.image}
                        alt={`${fabricName} for ${currentBrand.name} ${model.name}`}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Sale Badge */}
                      <div className="absolute top-2.5 right-2.5">
                        <span className="px-2 py-0.5 rounded-full bg-orange-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                          Sale
                        </span>
                      </div>
                    </div>

                    {/* Cover Product Title & Pricing */}
                    <div className="pt-3 pb-1 space-y-1">
                      <h3 className="text-xs sm:text-sm font-semibold text-stone-900 group-hover:text-orange-600 transition-colors line-clamp-2 leading-snug">
                        {fabricName} for {currentBrand.name} {model.name}
                      </h3>

                      <div className="flex items-baseline gap-2 pt-0.5">
                        <span className="font-editorial text-sm sm:text-base font-bold text-stone-950">
                          Rs. {model.price.toLocaleString('en-IN')}.00
                        </span>
                        <span className="text-[11px] text-stone-400 line-through">
                          Rs. {model.originalPrice.toLocaleString('en-IN')}.00
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Bottom Back Button */}
          <div className="mt-12 pt-6 border-t border-stone-100 flex items-center justify-between">
            <Link
              to="/pages/car-brand-page"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Car Brands</span>
            </Link>

            <Link
              to="/products"
              className="text-xs text-orange-600 hover:text-orange-700 font-semibold underline"
            >
              View Full Covers Catalog
            </Link>
          </div>

        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: ALL CAR BRANDS DIRECTORY (Oenum car-brand-page match)
  // ==========================================
  return (
    <div className="bg-white text-stone-900 font-sans min-h-screen py-10 sm:py-16 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header / Hero Section */}
        <div className="max-w-3xl space-y-3 mb-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-600 block">
            FIND YOUR VEHICLE
          </span>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-stone-950 font-normal tracking-tight leading-tight">
            Premium covers engineered for your cars.
          </h1>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
            Some people see vehicles as machines. We see memories, late night drives, road trips, hard work, and passion. That's what we protect. That's Hi-Life.
          </p>
        </div>

        {/* Global Vehicle Search Bar */}
        <div className="max-w-4xl mb-8 relative">
          <div className="flex items-center bg-stone-50/80 rounded-2xl px-4 py-3.5 border border-stone-200 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20 shadow-2xs transition-all">
            <Search className="w-5 h-5 text-stone-400 mr-3 shrink-0" />
            <input
              type="text"
              value={vehicleSearch}
              onChange={(e) => setVehicleSearch(e.target.value)}
              placeholder="Search your vehicle (e.g. Swift, Creta, Fortuner, Thar, Audi, BMW)..."
              className="w-full text-xs sm:text-sm bg-transparent text-stone-900 focus:outline-none placeholder:text-stone-400 font-medium"
            />
            {vehicleSearch && (
              <button
                type="button"
                onClick={() => setVehicleSearch('')}
                className="text-xs text-stone-400 hover:text-stone-700 px-2 py-1 font-semibold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Instant Model Quick-Jump Dropdown when searching */}
          {quickModelMatches.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-orange-100 shadow-xl p-3 z-30 animate-in fade-in duration-150">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 px-2 block mb-1">
                Direct Model Matches ({quickModelMatches.length})
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {quickModelMatches.map(({ brand, model, slug }) => (
                  <Link
                    key={`${brand.id}-${model.id}`}
                    to={`/products/${slug}`}
                    className="flex items-center justify-between p-2 rounded-xl hover:bg-orange-50 transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <BrandLogo brandId={brand.id} className="w-5 h-5 shrink-0" />
                      <span className="text-xs font-semibold text-stone-900 group-hover:text-orange-600">
                        {brand.name} {model.name}
                      </span>
                    </div>
                    <span className="text-[11px] text-stone-500 font-medium">
                      Rs. {model.price.toLocaleString('en-IN')}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 3 Value Proposition Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl py-6 mb-12 sm:mb-16 border-y border-stone-100">
          
          {/* 1. 250+ Model */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
              <CheckSquare className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <span className="block text-xs sm:text-sm font-bold text-stone-950">250+ Model</span>
              <span className="block text-[11px] text-stone-500">Wide compatibility</span>
            </div>
          </div>

          {/* 2. Tailored Fit */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
              <Ruler className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <span className="block text-xs sm:text-sm font-bold text-stone-950">Tailored Fit</span>
              <span className="block text-[11px] text-stone-500">Exact models</span>
            </div>
          </div>

          {/* 3. Premium Materials */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
              <Box className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <span className="block text-xs sm:text-sm font-bold text-stone-950">Premium Materials</span>
              <span className="block text-[11px] text-stone-500">Built to protect</span>
            </div>
          </div>

        </div>

        {/* Car Brands Grid - Exactly 5 Columns on Desktop */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Select Your Car Make ({filteredBrands.length} Brands)
            </span>
            {vehicleSearch && (
              <span className="text-xs text-orange-600 font-medium">
                Filtering by "{vehicleSearch}"
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-5">
            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                onClick={() => handleSelectBrand(brand.id)}
                className="group bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/70 hover:border-orange-300 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col items-center justify-center text-center relative overflow-hidden"
              >
                {/* Brand Logo Container */}
                <div className="h-20 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-105">
                  <BrandLogo brandId={brand.id} className="max-h-16 max-w-full text-stone-900 group-hover:text-orange-600 transition-colors" />
                </div>

                {/* Brand Name */}
                <span className="text-xs sm:text-sm font-semibold text-stone-900 group-hover:text-orange-600 transition-colors">
                  {brand.name}
                </span>

                {/* Model Count Hint */}
                <span className="text-[10px] text-stone-400 group-hover:text-stone-500 mt-0.5">
                  {brand.models.length} Tailored Models
                </span>
              </div>
            ))}
          </div>

          {filteredBrands.length === 0 && (
            <div className="py-20 text-center space-y-3 bg-stone-50/50 rounded-3xl border border-stone-100">
              <h3 className="font-editorial text-2xl text-stone-900">No vehicle brand matched "{vehicleSearch}"</h3>
              <p className="text-xs text-stone-500">
                Please check the spelling or view our complete catalog of vehicle covers.
              </p>
              <button
                type="button"
                onClick={() => setVehicleSearch('')}
                className="px-4 py-2 rounded-xl bg-orange-600 text-white text-xs font-bold"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
