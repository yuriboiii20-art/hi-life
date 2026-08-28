import React from 'react';
import { Shield, Sparkles, Check, ArrowRight, Eye, Layers } from 'lucide-react';

export default function ProductCard({ cover, onSelectCover, onViewDetails }) {
  return (
    <div className="rounded-2xl bg-white border border-neutral-200 hover:border-black hover:shadow-xl transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      
      {/* Product Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        <img
          src={cover.heroImage}
          alt={cover.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow bg-black text-white">
            {cover.badge}
          </span>
        </div>

        {/* Fabric Weight */}
        <div className="absolute bottom-2.5 right-2.5 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded border border-neutral-200 text-[10px] font-black text-black flex items-center gap-1 shadow-sm">
          <Layers className="w-3 h-3 text-black" />
          <span>{cover.fabricSpecs.fabricWeight}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-black text-black uppercase tracking-wider">
              {cover.fabricSpecs.material.split('+')[0]}
            </span>
            <span className="text-xs font-bold text-black">
              ★ {cover.rating} <span className="text-neutral-400 font-normal">({cover.reviewsCount})</span>
            </span>
          </div>

          <h3 className="text-base font-extrabold text-black mt-1 group-hover:text-neutral-700 transition-colors leading-snug">
            {cover.name}
          </h3>

          <p className="text-xs text-neutral-600 mt-1.5 line-clamp-2 leading-relaxed font-normal">
            {cover.description}
          </p>

          {/* Benefits */}
          <div className="mt-3 space-y-1.5 border-t border-neutral-100 pt-3">
            {cover.keyBenefits.slice(0, 3).map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-neutral-700">
                <Check className="w-3.5 h-3.5 text-black shrink-0 mt-0.5 stroke-[2.5]" />
                <span className="line-clamp-1">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-3 border-t border-neutral-200 space-y-3">
          
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-semibold">
                Starting from
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black text-black">
                  ₹{cover.basePrice}
                </span>
                <span className="text-xs text-neutral-400 line-through">
                  ₹{cover.originalPrice}
                </span>
              </div>
            </div>

            <span className="text-xs font-bold text-black bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
              Save {cover.discountPercent}%
            </span>
          </div>

          {/* Dual Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onViewDetails && onViewDetails(cover)}
              className="w-full inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-black text-xs font-bold border border-neutral-300 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Details</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectCover && onSelectCover(cover.id)}
              className="w-full inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs font-black shadow transition-all"
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
