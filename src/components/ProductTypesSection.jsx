import React from 'react';
import { Shield, Sparkles, ArrowRight } from 'lucide-react';
import { COVER_TYPES } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductTypesSection({ onSelectCover, onViewDetails }) {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eef2ff] border border-[#c7d2fe] text-[#19277c] text-xs font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5 text-[#f97316]" />
              <span>Tailored Cover Range</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19277c] tracking-tight">
              Engineered Cover Grades
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Four specialized fabric architectures crafted for varying weather exposures, from daily dust protection to severe monsoon and scorching sun defense.
            </p>
          </div>

          <a
            href="#vehicle-finder"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#19277c] hover:text-[#16215b] transition-colors self-start md:self-auto bg-slate-100 hover:bg-slate-200 px-4 py-2.5 rounded-lg border border-slate-200"
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
