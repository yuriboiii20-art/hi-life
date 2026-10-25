import React, { useState } from 'react';
import { Shield, Sparkles, Check, ArrowRight, Eye, Layers } from 'lucide-react';
import { COVER_TYPES } from '../data/products';

export default function ProtectionSystem({ onSelectCover, onViewDetails }) {
  const [activeTab, setActiveTab] = useState('all');

  const displayedCovers = activeTab === 'all'
    ? COVER_TYPES
    : activeTab === 'cars'
    ? COVER_TYPES.filter(c => c.id !== 'two-wheeler-camo')
    : COVER_TYPES.filter(c => c.id === 'two-wheeler-camo');

  return (
    <section id="protection-system" className="py-14 sm:py-20 bg-white border-b border-orange-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-orange-600 block mb-1">
              THE PROTECTION BENCHMARK
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight">
              Signature Vehicle Cover Protection
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-normal mt-1">
              Our signature all-weather military camouflage cover, precision-tailored for your exact vehicle.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-orange-50/60 p-1 rounded-xl border border-orange-100">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all' ? 'bg-orange-600 text-white shadow-xs' : 'text-stone-600 hover:text-orange-600'
              }`}
            >
              All Covers
            </button>
            <button
              onClick={() => setActiveTab('cars')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'cars' ? 'bg-orange-600 text-white shadow-xs' : 'text-stone-600 hover:text-orange-600'
              }`}
            >
              Cars & SUVs
            </button>
            <button
              onClick={() => setActiveTab('bikes')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'bikes' ? 'bg-orange-600 text-white shadow-xs' : 'text-stone-600 hover:text-orange-600'
              }`}
            >
              Two-Wheelers
            </button>
          </div>
        </div>

        {/* Cover Tier Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedCovers.map((cover) => (
            <div
              key={cover.id}
              className="rounded-3xl bg-stone-50 border border-stone-200/90 hover:border-stone-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Product Visual */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                <img
                  src={cover.heroImage}
                  alt={cover.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-stone-950 text-white shadow-xs">
                  {cover.badge}
                </span>
                <span className="absolute bottom-2.5 right-2.5 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-semibold text-stone-900 shadow-xs">
                  {cover.fabricSpecs.fabricWeight}
                </span>
              </div>

              {/* Specs & Description */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-1 text-[11px] font-semibold text-stone-500">
                    <span className="uppercase text-orange-600 font-bold tracking-wider">
                      {cover.fabricSpecs.material.split('+')[0]}
                    </span>
                    <span className="text-stone-800">★ {cover.rating}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-stone-950 tracking-tight mt-1">
                    {cover.name}
                  </h3>

                  <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed font-normal">
                    {cover.tagline}
                  </p>
                </div>

                {/* Key Checklist */}
                <div className="space-y-1.5 text-xs text-stone-700 pt-2 border-t border-stone-200/60 font-medium">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{cover.fabricSpecs.waterproofing}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{cover.fabricSpecs.lining}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{cover.fabricSpecs.uvProtection}</span>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="pt-3 border-t border-stone-200/80 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-stone-500 font-medium block">Starting from</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-stone-950">
                          ₹{cover.basePrice}
                        </span>
                        <span className="text-xs text-stone-400 line-through">
                          ₹{cover.originalPrice}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded">
                      Save {cover.discountPercent}%
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onViewDetails && onViewDetails(cover)}
                      className="w-full py-2.5 rounded-xl bg-white hover:bg-stone-100 text-stone-900 text-xs font-semibold border border-stone-300 transition-colors cursor-pointer"
                    >
                      Specs
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectCover && onSelectCover(cover.id)}
                      className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs shadow-orange-500/25"
                    >
                      Select Fit
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
