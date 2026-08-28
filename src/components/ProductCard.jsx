import React from 'react';
import { Shield, Sparkles, Check, ArrowRight, Eye, Layers } from 'lucide-react';

export default function ProductCard({ cover, onSelectCover, onViewDetails }) {
  return (
    <div className="rounded-2xl bg-white border border-stone-200/90 hover:border-stone-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      
      {/* Product Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <img
          src={cover.heroImage}
          alt={cover.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm bg-stone-900 text-white">
            {cover.badge}
          </span>
        </div>

        {/* Fabric Weight */}
        <div className="absolute bottom-2.5 right-2.5 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-semibold text-stone-900 shadow-xs">
          {cover.fabricSpecs.fabricWeight}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        
        <div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">
              {cover.fabricSpecs.material.split('+')[0]}
            </span>
            <span className="text-xs font-semibold text-stone-900">
              ★ {cover.rating} <span className="text-stone-400 font-normal">({cover.reviewsCount})</span>
            </span>
          </div>

          <h3 className="text-sm sm:text-base font-bold text-stone-950 mt-1 leading-snug">
            {cover.name}
          </h3>

          <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed font-normal">
            {cover.tagline}
          </p>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-3 border-t border-stone-100 space-y-3">
          
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg sm:text-xl font-black text-stone-950">
                ₹{cover.basePrice}
              </span>
              <span className="text-xs text-stone-400 line-through">
                ₹{cover.originalPrice}
              </span>
            </div>

            <span className="text-[10px] font-bold text-stone-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              Save {cover.discountPercent}%
            </span>
          </div>

          {/* Dual Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onViewDetails && onViewDetails(cover)}
              className="w-full py-2 sm:py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-[11px] sm:text-xs font-semibold transition-colors cursor-pointer"
            >
              Specs
            </button>

            <button
              type="button"
              onClick={() => onSelectCover && onSelectCover(cover.id)}
              className="w-full py-2 sm:py-2.5 rounded-xl bg-stone-950 hover:bg-black text-white text-[11px] sm:text-xs font-semibold shadow-xs transition-all cursor-pointer"
            >
              Select Fit
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
