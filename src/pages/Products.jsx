import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Shield, 
  Search, 
  Filter, 
  Sparkles, 
  Car, 
  Check, 
  MessageCircle, 
  Eye, 
  ShoppingBag,
  Layers,
  ArrowUpDown
} from 'lucide-react';
import { COVER_TYPES } from '../data/products';
import { CAR_BRANDS } from '../data/vehicles';
import VehicleFinder from '../components/VehicleFinder';
import ProductResult from '../components/ProductResult';
import ProductDetailModal from '../components/ProductDetailModal';
import QuickOrderModal from '../components/QuickOrderModal';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [searchParams] = useSearchParams();
  const initialBrandParam = searchParams.get('brand') || '';
  const initialCategoryParam = searchParams.get('category') || '';
  const initialQueryParam = searchParams.get('q') || '';

  const [selectedFilter, setSelectedFilter] = useState(initialCategoryParam || 'all');
  const [searchQuery, setSearchQuery] = useState(initialQueryParam || '');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedModalCover, setSelectedModalCover] = useState(null);
  const [matchingResult, setMatchingResult] = useState(null);
  const [orderModalResult, setOrderModalResult] = useState(null);
  const [finderCoverTypeId, setFinderCoverTypeId] = useState(null);

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    return COVER_TYPES.filter((product) => {
      if (selectedFilter !== 'all' && product.id !== selectedFilter) {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesTagline = product.tagline.toLowerCase().includes(q);
        const matchesMaterial = product.fabricSpecs.material.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        if (!matchesName && !matchesTagline && !matchesMaterial && !matchesDesc) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.basePrice - b.basePrice;
      if (sortBy === 'price-high') return b.basePrice - a.basePrice;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [selectedFilter, searchQuery, sortBy]);

  const handleSelectCoverForFinder = (coverId) => {
    setFinderCoverTypeId(coverId);
    const finderEl = document.getElementById('products-finder-widget');
    if (finderEl) {
      finderEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectResult = (res) => {
    setMatchingResult(res);
    setTimeout(() => {
      const el = document.getElementById('products-match-result');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  };

  return (
    <div className="bg-[#fafaf9] text-stone-900 font-sans min-h-screen">
      
      {/* Header Banner */}
      <section className="relative py-14 lg:py-20 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-white border-b border-stone-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Complete Catalogue</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Hi-Life Protective Cover Range
          </h1>

          <p className="text-sm sm:text-base text-stone-300 mt-2 leading-relaxed font-normal">
            Select your preferred cover tier or use our custom vehicle matcher below to find precision dimensions for your car.
          </p>
        </div>
      </section>

      {/* Embedded Vehicle Matcher Section */}
      <section id="products-finder-widget" className="py-10 bg-[#fafaf9] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-5">
            <h2 className="text-lg sm:text-xl font-black text-stone-950 flex items-center gap-2">
              <Car className="w-5 h-5 text-stone-900" />
              <span>Step 1: Check Exact Fitment for Your Vehicle</span>
            </h2>
          </div>

          <VehicleFinder
            onSelectResult={handleSelectResult}
            initialCoverTypeId={finderCoverTypeId}
            compactMode={true}
          />

          {matchingResult && (
            <div id="products-match-result">
              <ProductResult
                result={matchingResult}
                onReset={() => setMatchingResult(null)}
                onBuyNow={(res) => setOrderModalResult(res)}
              />
            </div>
          )}
        </div>
      </section>

      {/* Catalogue Filter & Grid Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar */}
          <div className="space-y-4 pb-8 border-b border-stone-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Search input */}
              <div className="relative w-full md:max-w-md">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by cover name, waterproof, UV, fabric..."
                  className="w-full bg-stone-50 text-stone-900 text-xs sm:text-sm rounded-2xl pl-10 pr-4 py-3 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-500 hover:text-stone-950 font-bold"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Sorting Selector */}
              <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                <span className="text-xs text-stone-600 font-bold flex items-center gap-1">
                  <ArrowUpDown className="w-3.5 h-3.5" /> Sort:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-stone-50 text-stone-900 text-xs font-bold rounded-2xl px-3.5 py-2.5 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                >
                  <option value="featured">Featured Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs text-stone-700 font-bold mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-stone-900" /> Filter Type:
              </span>
              
              <button
                type="button"
                onClick={() => setSelectedFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === 'all'
                    ? 'bg-stone-950 text-white shadow-sm'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200'
                }`}
              >
                All Covers ({COVER_TYPES.length})
              </button>

              {COVER_TYPES.map((cov) => (
                <button
                  key={cov.id}
                  type="button"
                  onClick={() => setSelectedFilter(cov.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedFilter === cov.id
                      ? 'bg-stone-950 text-white shadow-sm'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200'
                  }`}
                >
                  {cov.name}
                </button>
              ))}
            </div>

          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((cover) => (
                <ProductCard
                  key={cover.id}
                  cover={cover}
                  onSelectCover={handleSelectCoverForFinder}
                  onViewDetails={(c) => setSelectedModalCover(c)}
                />
              ))
            ) : (
              <div className="col-span-full py-16 text-center text-stone-500 space-y-3">
                <p className="text-base">No cover types match your search query: "{searchQuery}"</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedFilter('all');
                  }}
                  className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-bold border border-stone-300"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Modals */}
      {selectedModalCover && (
        <ProductDetailModal
          cover={selectedModalCover}
          onClose={() => setSelectedModalCover(null)}
          onSelectForFinder={(coverId) => {
            setSelectedModalCover(null);
            handleSelectCoverForFinder(coverId);
          }}
        />
      )}

      {orderModalResult && (
        <QuickOrderModal
          result={orderModalResult}
          onClose={() => setOrderModalResult(null)}
        />
      )}

    </div>
  );
}
