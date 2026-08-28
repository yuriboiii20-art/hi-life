import React from 'react';
import { Shield, Sparkles, Check, ArrowRight, Eye, Layers } from 'lucide-react';

export default function ProductCard({ cover, onSelectCover, onViewDetails }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 hover:border-[#19277c]/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      
      {/* Product Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={cover.heroImage}
          alt={cover.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow ${cover.badgeColor}`}>
            {cover.badge}
          </span>
        </div>

        {/* Fabric Weight */}
        <div className="absolute bottom-2.5 right-2.5 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded border border-slate-200 text-[10px] font-extrabold text-slate-800 flex items-center gap-1 shadow-sm">
          <Layers className="w-3 h-3 text-[#19277c]" />
          <span>{cover.fabricSpecs.fabricWeight}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-extrabold text-[#19277c] uppercase tracking-wider">
              {cover.fabricSpecs.material.split('+')[0]}
            </span>
            <span className="text-xs font-bold text-amber-600">
              ★ {cover.rating} <span className="text-slate-400 font-normal">({cover.reviewsCount})</span>
            </span>
          </div>

          <h3 className="text-base font-extrabold text-slate-900 mt-1 group-hover:text-[#19277c] transition-colors leading-snug">
            {cover.name}
          </h3>

          <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed font-normal">
            {cover.description}
          </p>

          {/* Benefits */}
          <div className="mt-3 space-y-1.5 border-t border-slate-100 pt-3">
            {cover.keyBenefits.slice(0, 3).map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                <span className="line-clamp-1">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-3 border-t border-slate-200 space-y-3">
          
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
                Starting from
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black text-[#19277c]">
                  ₹{cover.basePrice}
                </span>
                <span className="text-xs text-slate-400 line-through">
                  ₹{cover.originalPrice}
                </span>
              </div>
            </div>

            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
              Save {cover.discountPercent}%
            </span>
          </div>

          {/* Dual Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onViewDetails && onViewDetails(cover)}
              className="w-full inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-200 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Details</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectCover && onSelectCover(cover.id)}
              className="w-full inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-lg bg-[#19277c] hover:bg-[#16215b] text-white text-xs font-bold shadow transition-all"
            >
              <span>Choose</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
