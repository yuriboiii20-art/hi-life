import React from 'react';
import { Shield, Sparkles, Check, ArrowRight, Eye, Layers } from 'lucide-react';

export default function ProductCard({ cover, onSelectCover, onViewDetails }) {
  return (
    <div className="rounded-3xl bg-white border border-stone-200/90 hover:border-stone-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      
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
          <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm bg-stone-900 text-white">
            {cover.badge}
          </span>
        </div>

        {/* Fabric Weight */}
        <div className="absolute bottom-2.5 right-2.5 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-stone-200 text-[10px] font-bold text-stone-900 flex items-center gap-1 shadow-sm">
          <Layers className="w-3 h-3 text-stone-900" />
          <span>{cover.fabricSpecs.fabricWeight}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
              {cover.fabricSpecs.material.split('+')[0]}
            </span>
            <span className="text-xs font-bold text-stone-900 flex items-center gap-1">
              <span className="text-amber-500">★</span> {cover.rating} <span className="text-stone-400 font-normal">({cover.reviewsCount})</span>
            </span>
          </div>

          <h3 className="text-base font-black text-stone-950 mt-1 group-hover:text-stone-700 transition-colors leading-snug">
            {cover.name}
          </h3>

          <p className="text-xs text-stone-600 mt-1.5 line-clamp-2 leading-relaxed font-normal">
            {cover.description}
          </p>

          {/* Benefits */}
          <div className="mt-3 space-y-1.5 border-t border-stone-100 pt-3">
            {cover.keyBenefits.slice(0, 3).map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-stone-700">
                <Check className="w-3.5 h-3.5 text-stone-900 shrink-0 mt-0.5 stroke-[2.5]" />
                <span className="line-clamp-1">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-3 border-t border-stone-200/90 space-y-3">
          
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-semibold">
                Starting from
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black text-stone-950">
                  ₹{cover.basePrice}
                </span>
                <span className="text-xs text-stone-400 line-through">
                  ₹{cover.originalPrice}
                </span>
              </div>
            </div>

            <span className="text-xs font-bold text-amber-900 bg-amber-50 px-2.5 py-0.5 rounded-lg border border-amber-200/80">
              Save {cover.discountPercent}%
            </span>
          </div>

          {/* Dual Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onViewDetails && onViewDetails(cover)}
              className="w-full inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold border border-stone-200 transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Details</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectCover && onSelectCover(cover.id)}
              className="w-full inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl bg-stone-950 hover:bg-black text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
            >
              <span>Custom Fit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
