import React from 'react';
import { Shield, Sparkles, ArrowRight } from 'lucide-react';
import { COVER_TYPES } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductTypesSection({ onSelectCover, onViewDetails }) {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-stone-200/90 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Shield className="w-3.5 h-3.5 text-amber-600" />
              <span>Tailored Cover Range</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight">
              Engineered Cover Grades
            </h2>

            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
              Four specialized fabric architectures crafted for varying weather exposures, from daily dust protection to severe monsoon and scorching sun defense.
            </p>
          </div>

          <a
            href="#vehicle-finder"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-stone-950 hover:bg-black px-5 py-3 rounded-2xl border border-stone-950 transition-all shadow-sm hover:scale-[1.01]"
          >
            <span>Match Your Car Model</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COVER_TYPES.map((cover) => (
            <ProductCard
              key={cover.id}
              cover={cover}
              onSelectCover={onSelectCover}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
