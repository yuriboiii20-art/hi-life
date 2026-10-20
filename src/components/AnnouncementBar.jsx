import React from 'react';
import { Truck, ShieldCheck, Zap } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function AnnouncementBar() {
  const marqueeText = "Free All-India Express Shipping on All Orders   •   🛡️ Quality Covers. Trusted Protection. 20 Years of Experience in Bangalore   •   🏷️ Use Code 'HILIFE15' for 15% OFF + Free Duffle Bag   •   📍 Visit Hanuman Tarpaulins at JC Road, Bangalore   •   📦 Dispatches in 24 Hours Across India   •   ";

  return (
    <div className="w-full relative z-40 font-sans">
      
      {/* 1. Slim Top Bar (Oenum Clean High-Contrast Dark Strip) */}
      <div className="bg-[#111111] text-stone-200 py-2 px-4 text-xs font-semibold border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="font-bold text-white uppercase tracking-wider">
              HANUMAN TARPAULINS
            </span>
            <span className="hidden sm:inline text-stone-400 font-normal">
              — Quality Covers & Trusted Protection for 20 Years
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center gap-1.5 text-stone-300">
              <Truck className="w-3.5 h-3.5 text-amber-400" />
              <span>Free Pan-India Delivery</span>
            </span>

            <span className="inline-flex items-center gap-1 bg-amber-500 text-stone-950 text-[10px] uppercase font-black px-2 py-0.5 rounded-full shadow-xs">
              <Zap className="w-2.5 h-2.5 fill-stone-950" />
              <span>CODE: HILIFE15</span>
            </span>
          </div>

        </div>
      </div>

      {/* 2. Marquee Notice */}
      <div className="bg-[#f5f5f4] text-stone-800 py-1.5 text-xs font-semibold overflow-hidden relative border-b border-stone-200">
        <div className="animate-marquee-infinite text-[11px] sm:text-xs tracking-wide font-medium text-stone-800">
          <span className="mx-4">{marqueeText}</span>
          <span className="mx-4">{marqueeText}</span>
        </div>
      </div>

    </div>
  );
}
