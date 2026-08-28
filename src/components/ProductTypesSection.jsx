import React from 'react';
import { Shield, Sparkles, ArrowRight } from 'lucide-react';
import { COVER_TYPES } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductTypesSection({ onSelectCover, onViewDetails }) {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-stone-200/90 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight">
              Featured Cover Grades
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-normal mt-1">
              Custom-tailored fabric tiers for all weather conditions.
            </p>
          </div>

          <a
            href="#vehicle-finder"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-900 hover:text-black underline cursor-pointer"
          >
            <span>Match your car model →</span>
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
