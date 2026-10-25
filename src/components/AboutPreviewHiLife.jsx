import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPreviewHiLife() {
  return (
    <section className="py-16 sm:py-24 bg-white text-stone-900 font-sans select-none overflow-hidden border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-Width Workshop / Craftsmanship Showcase Image */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] rounded-3xl overflow-hidden bg-stone-100 border border-orange-100 shadow-xl mb-10 sm:mb-14">
          <img
            src="/hi-life-assets/about.webp"
            alt="Hi-Life Precision Stitching Workshop"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-orange-600 text-white text-[11px] font-bold tracking-wider uppercase shadow-md">
              In-House Craftsmanship • JC Road Bangalore
            </span>
          </div>
        </div>

        {/* Section Text Content */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Hi-Life" className="h-8 w-auto object-contain" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-orange-600 block">
              ABOUT HI-LIFE
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-950 tracking-tight leading-tight">
            Why we do, what we do
          </h2>

          <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed max-w-2xl pt-1">
            Hi-Life reflects our 20-year commitment to quality and care for your ride. Based at JC Road, Bangalore, with each cover that we craft we try to tell a story of dependable protection and tailored style. To learn more about us, checkout our Why Hi-Life page.
          </p>

          <div className="pt-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-orange-600/25 cursor-pointer"
            >
              <span>About Hi-Life</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
