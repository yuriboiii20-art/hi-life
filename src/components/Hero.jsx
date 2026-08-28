import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Droplets, 
  Sun, 
  Wind, 
  Sparkles, 
  ArrowRight, 
  Shield, 
  RotateCcw,
  CheckCircle2,
  Waves,
  Snowflake
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function Hero({ onFindCoverClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToFinder = () => {
    if (onFindCoverClick) {
      onFindCoverClick();
      return;
    }
    const el = document.getElementById('vehicle-finder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#f7f5f0] to-[#ede9e1] text-stone-900 border-b border-stone-200">
      
      {/* Background Subtle Minimalist Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#78716c_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline & Feature Badges */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Brand Mark */}
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-amber-600 rounded-full"></span>
              <span className="text-xs font-black uppercase tracking-widest text-stone-500">
                HI-LIFE AUTOMOTIVE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-stone-950 leading-none">
              ALL-WEATHER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-950 via-stone-800 to-amber-700">
                ARMOR
              </span>
            </h1>

            {/* 100% Weatherproof Shield Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-50 border border-amber-200/80 text-xs sm:text-sm font-bold text-amber-900 shadow-sm">
              <div className="w-6 h-6 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 fill-stone-950 text-stone-950" />
              </div>
              <span className="tracking-wide">100% Weatherproof & Leakproof Protection</span>
            </div>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-stone-600 max-w-xl font-normal leading-relaxed">
              Custom-fit protective car covers engineered with military-grade 300D Oxford fabric, scratch-free inner fleece, and storm-proof centre lock buckles.
            </p>

            {/* 3 Circular Feature Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              
              {/* Badge 1 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-stone-200/90 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:border-stone-900 group-hover:shadow-md transition-all">
                  <Waves className="w-6 h-6 text-stone-900" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-tight text-stone-700 mt-1.5 leading-tight">
                  SAND &<br />WATERPROOF
                </span>
              </div>

              {/* Badge 2 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-stone-200/90 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:border-stone-900 group-hover:shadow-md transition-all">
                  <Snowflake className="w-6 h-6 text-stone-900" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-tight text-stone-700 mt-1.5 leading-tight">
                  SNOW & MUD<br />PROOF
                </span>
              </div>

              {/* Badge 3 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-stone-200/90 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:border-stone-900 group-hover:shadow-md transition-all">
                  <RotateCcw className="w-6 h-6 text-stone-900" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-tight text-stone-700 mt-1.5 leading-tight">
                  EASY 2-MIN<br />RINSE & FIT
                </span>
              </div>

            </div>

            {/* Primary Call-To-Action Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={scrollToFinder}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-stone-950 hover:bg-black text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>SHOP ALL-WEATHER COVERS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/products"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-stone-50 text-stone-900 font-bold text-sm text-center border border-stone-300 shadow-sm transition-all"
              >
                Explore Specifications
              </Link>
            </div>

          </div>

          {/* Right Column: High-Impact Vehicle Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-6 sm:p-7 bg-white border border-stone-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden group">
              
              {/* Product Cover Visual Preview */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-50 flex items-center justify-center border border-stone-200/80 p-6">
                <img
                  src="/logo.png"
                  alt="Hi-Life All-Weather Automotive Protective Car Cover"
                  className="w-full h-auto object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating Assurance Badges */}
                <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-md px-3 py-1 rounded-xl text-[11px] font-bold text-white flex items-center gap-1.5 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>3-Year Warranty</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-amber-500 text-stone-950 px-3 py-1 rounded-xl font-bold text-[11px] uppercase tracking-wider shadow-sm">
                  Laser Cut 3D Fit
                </div>
              </div>

              {/* 3 Quick Features underneath visual */}
              <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                  <p className="text-stone-900 text-xs font-extrabold">100%</p>
                  <p className="text-[10px] text-stone-500 font-medium">Waterproof</p>
                </div>
                <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                  <p className="text-stone-900 text-xs font-extrabold">UPF 50+</p>
                  <p className="text-[10px] text-stone-500 font-medium">UV Deflect</p>
                </div>
                <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                  <p className="text-stone-900 text-xs font-extrabold">Spun Fleece</p>
                  <p className="text-[10px] text-stone-500 font-medium">No Scratches</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Carousel indicator dots at bottom */}
        <div className="flex items-center justify-center gap-2 pt-8">
          {[0, 1, 2, 3, 4].map((dot) => (
            <button
              key={dot}
              onClick={() => setCurrentSlide(dot)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentSlide === dot ? 'bg-stone-900 w-6' : 'bg-stone-300'
              }`}
              aria-label={`Slide ${dot + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
