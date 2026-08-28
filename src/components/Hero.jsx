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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#171717] text-white border-b border-neutral-800">
      
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Bold Headline & Feature Badges */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Brand Mark */}
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-white rounded-full"></span>
              <span className="text-xs font-black uppercase tracking-widest text-neutral-300">
                HI-LIFE AUTOMOTIVE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-none">
              ALL-WEATHER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                ARMOR
              </span>
            </h1>

            {/* 100% Weatherproof Shield Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-neutral-700 text-sm font-extrabold text-white shadow-lg">
              <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center">
                <Shield className="w-4 h-4 fill-black" />
              </div>
              <span className="tracking-wide">100% Weatherproof & Leakproof</span>
            </div>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-neutral-300 max-w-xl font-normal leading-relaxed">
              Custom-fit protective car covers engineered with military-grade 300D Oxford fabric, scratch-free inner fleece, and storm-proof centre lock buckles.
            </p>

            {/* 3 Circular Feature Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              
              {/* Badge 1 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-white transition-all">
                  <Waves className="w-7 h-7 text-white" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-tight text-neutral-300 mt-1.5 leading-tight">
                  SAND &<br />WATERPROOF
                </span>
              </div>

              {/* Badge 2 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-white transition-all">
                  <Snowflake className="w-7 h-7 text-white" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-tight text-neutral-300 mt-1.5 leading-tight">
                  SNOW & MUD<br />PROOF
                </span>
              </div>

              {/* Badge 3 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-white transition-all">
                  <RotateCcw className="w-7 h-7 text-white" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-tight text-neutral-300 mt-1.5 leading-tight">
                  EASY 2-MIN<br />RINSE & FIT
                </span>
              </div>

            </div>

            {/* Primary Call-To-Action Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={scrollToFinder}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-neutral-200 text-black font-black text-sm sm:text-base uppercase tracking-wider shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>SHOP ALL-WEATHER COVERS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/products"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-sm text-center border border-neutral-700 transition-all"
              >
                Explore Specifications
              </Link>
            </div>

          </div>

          {/* Right Column: High-Impact Vehicle Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 shadow-2xl overflow-hidden group">
              
              {/* Product Cover Visual Preview */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-950 flex items-center justify-center border border-neutral-800 p-6">
                <img
                  src="/logo.png"
                  alt="Hi-Life All-Weather Automotive Protective Car Cover"
                  className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating Assurance Badges */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-neutral-700 text-[11px] font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  <span>3-Year Warranty</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-white text-black px-3 py-1 rounded-lg font-black text-[11px] uppercase tracking-wider shadow">
                  Laser Cut 3D Fit
                </div>
              </div>

              {/* 3 Quick Features underneath visual */}
              <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800">
                  <p className="text-white text-xs font-black">100%</p>
                  <p className="text-[10px] text-neutral-400 font-medium">Waterproof</p>
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800">
                  <p className="text-white text-xs font-black">UPF 50+</p>
                  <p className="text-[10px] text-neutral-400 font-medium">UV Deflect</p>
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800">
                  <p className="text-white text-xs font-black">Spun Fleece</p>
                  <p className="text-[10px] text-neutral-400 font-medium">No Scratches</p>
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
                currentSlide === dot ? 'bg-white w-6' : 'bg-white/40'
              }`}
              aria-label={`Slide ${dot + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
