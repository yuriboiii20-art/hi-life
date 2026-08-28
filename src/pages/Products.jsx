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
      
      {/* Header Banner - Clean & Minimal */}
      <section className="relative py-12 lg:py-16 bg-stone-950 text-white border-b border-stone-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
            Hi-Life Catalogue
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Protective Car Covers
          </h1>

          <p className="text-xs sm:text-sm text-stone-300 mt-2 font-normal">
            Choose your cover tier or enter your vehicle details below for custom dimensions.
          </p>
        </div>
      </section>

      {/* Embedded Vehicle Matcher Section */}
      <section id="products-finder-widget" className="py-6 sm:py-10 bg-[#fafaf9] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VehicleFinder
            onSelectResult={handleSelectResult}
            initialCoverTypeId={finderCoverTypeId}
            compactMode={true}
          />

          {matchingResult && (
            <div id="products-match-result" className="mt-6">
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
      <section className="py-10 sm:py-14 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar - Pure Typography, No Icons */}
          <div className="space-y-4 pb-6 border-b border-stone-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              
              {/* Search input (No icons) */}
              <div className="relative w-full sm:max-w-md">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search covers by name, waterproof, fabric..."
                  className="w-full bg-stone-50 text-stone-900 text-xs sm:text-sm rounded-xl px-4 py-3 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-500 hover:text-stone-950 font-bold cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Sorting Selector (No icons) */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <span className="text-xs text-stone-600 font-semibold">
                  Sort:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-stone-50 text-stone-900 text-xs font-semibold rounded-xl px-3.5 py-2.5 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

            </div>

            {/* Category Filter Pills (No icons) */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => setSelectedFilter('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedFilter === 'all'
                    ? 'bg-stone-950 text-white'
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
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedFilter === cov.id
                      ? 'bg-stone-950 text-white'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200'
                  }`}
                >
                  {cov.name}
                </button>
              ))}
            </div>

          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-8">
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
              <div className="col-span-full py-12 text-center text-stone-500 space-y-3">
                <p className="text-sm">No cover types match "{searchQuery}"</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedFilter('all');
                  }}
                  className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-bold border border-stone-300 cursor-pointer"
                >
                  Reset Filters
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
