import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, RotateCcw } from 'lucide-react';
import { CATALOG_PRODUCTS } from '../data/catalogProducts';
import CustomDropdown from '../components/CustomDropdown';

export default function Products() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [selectedBrand, setSelectedBrand] = useState('all');
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [sortBy, setSortBy] = useState('featured');

  // Extract unique brands from catalogue
  const uniqueBrands = useMemo(() => {
    const brands = [...new Set(CATALOG_PRODUCTS.map((p) => p.brand))];
    return brands.sort();
  }, []);

  // Filter & sort products
  const filteredProducts = useMemo(() => {
    return CATALOG_PRODUCTS.filter((prod) => {
      if (selectedBrand !== 'all' && prod.brand !== selectedBrand) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = prod.name.toLowerCase().includes(q);
        const matchesBrand = prod.brand.toLowerCase().includes(q);
        const matchesModel = prod.model.toLowerCase().includes(q);
        if (!matchesName && !matchesBrand && !matchesModel) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [selectedBrand, searchQuery, sortBy]);

  return (
    <div className="bg-white text-stone-900 font-sans select-none min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">
        
        {/* Main Title */}
        <div className="mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-orange-600 block mb-2">
            TAILORED COLLECTION
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-stone-950 tracking-tight">
            Products
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 font-normal">
            Custom-measured car and vehicle covers engineered for Indian weather conditions.
          </p>
        </div>

        {/* Filter and Sorting Header Bar */}
        <div className="py-4 border-y border-orange-100 mb-8 sm:mb-10 flex flex-wrap items-center justify-between gap-4 text-xs">
          
          {/* Left: Filters */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 flex-1">
            {/* Brand Filter */}
            <div className="w-36 sm:w-44">
              <CustomDropdown
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.value || e.target.value)}
                size="compact"
                options={[
                  { value: 'all', label: 'All Brands' },
                  ...uniqueBrands.map((b) => ({ value: b, label: b }))
                ]}
                placeholder="Brand"
                title="Filter by Brand"
              />
            </div>

            {/* Quick Search */}
            <div className="relative w-48 sm:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search vehicle model (e.g. Creta, Thar, Fortuner)..."
                className="w-full bg-stone-50 px-3.5 py-2 text-xs rounded-xl border border-stone-200 text-stone-900 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 font-medium"
              />
            </div>

            {(selectedBrand !== 'all' || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedBrand('all');
                  setSearchQuery('');
                }}
                className="inline-flex items-center gap-1 text-[11px] text-orange-600 hover:text-orange-700 underline ml-1 cursor-pointer font-medium"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Right: Item Count & Sort Selector */}
          <div className="flex items-center gap-3 shrink-0 ml-auto">
            <span className="text-stone-500 font-medium">
              {filteredProducts.length} items
            </span>

            <div className="flex items-center gap-1.5">
              <span className="text-stone-500">Sort:</span>
              <div className="w-36">
                <CustomDropdown
                  value={sortBy}
                  onChange={(e) => setSortBy(e.value || e.target.value)}
                  size="compact"
                  options={[
                    { value: 'featured', label: 'Featured' },
                    { value: 'price-low', label: 'Price: Low to High' },
                    { value: 'price-high', label: 'Price: High to Low' },
                    { value: 'rating', label: 'Highest Rated' }
                  ]}
                  title="Sort Products"
                />
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center space-y-3">
            <h3 className="font-editorial text-2xl text-stone-900">No matching covers found</h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              Try searching for a different car make or model, or reset the filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedBrand('all');
                setSelectedSeries('all');
                setSearchQuery('');
              }}
              className="mt-3 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold shadow-md shadow-orange-600/30 cursor-pointer"
            >
              Show All Covers
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredProducts.map((prod) => (
              <Link
                key={prod.id}
                to={`/products/${prod.slug}`}
                className="group flex flex-col justify-between bg-white rounded-2xl p-2 sm:p-2.5 border border-transparent hover:border-orange-200 hover:shadow-lg transition-all"
              >
                {/* Product Card Image */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-50 border border-stone-200/90 shadow-2xs group-hover:shadow-md transition-shadow">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {prod.sale && (
                    <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-orange-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
                        Sale
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="pt-3 pb-2 space-y-1">
                  <h3 className="text-xs sm:text-sm font-semibold text-stone-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {prod.name}
                  </h3>

                  <div className="flex items-baseline gap-2 pt-0.5">
                    <span className="font-editorial text-base sm:text-lg font-bold text-stone-950">
                      Rs. {prod.price.toLocaleString('en-IN')}.00
                    </span>
                    <span className="text-xs text-stone-400 line-through">
                      Rs. {prod.originalPrice.toLocaleString('en-IN')}.00
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
