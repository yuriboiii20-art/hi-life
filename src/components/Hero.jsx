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
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0d1438] via-[#16215b] to-[#101744] text-white">
      
      {/* Background Graphic Pattern / Weather Elements */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#47c7f1_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Bold Headline & Feature Badges */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Speed Brand Mark */}
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#47c7f1] rounded-full"></span>
              <span className="text-xs font-black uppercase tracking-widest text-[#47c7f1]">
                HI-LIFE AUTOMOTIVE
              </span>
            </div>

            {/* Main Headline (Matching "ALL-WEATHER ARMOR" in screenshot) */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-none">
              ALL-WEATHER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#47c7f1]">
                ARMOR
              </span>
            </h1>

            {/* 100% Weatherproof Shield Pill (Matching screenshot pill) */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/50 border border-white/20 backdrop-blur-md text-sm font-extrabold text-white shadow-lg">
              <div className="w-6 h-6 rounded-full bg-white text-[#19277c] flex items-center justify-center">
                <Shield className="w-4 h-4 fill-[#19277c]" />
              </div>
              <span className="tracking-wide">100% Weatherproof & Leakproof</span>
            </div>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed">
              Custom-fit protective car covers engineered with military-grade 300D Oxford fabric, scratch-free inner fleece, and storm-proof centre lock buckles.
            </p>

            {/* 3 Circular Feature Badges (Matching reference screenshot exactly) */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              
              {/* Badge 1 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ea580c] to-[#c2410c] border-2 border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Waves className="w-7 h-7 text-white" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-tight text-white mt-1.5 leading-tight">
                  SAND &<br />WATERPROOF
                </span>
              </div>

              {/* Badge 2 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ea580c] to-[#c2410c] border-2 border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Snowflake className="w-7 h-7 text-white" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-tight text-white mt-1.5 leading-tight">
                  SNOW & MUD<br />PROOF
                </span>
              </div>

              {/* Badge 3 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ea580c] to-[#c2410c] border-2 border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <RotateCcw className="w-7 h-7 text-white" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-tight text-white mt-1.5 leading-tight">
                  EASY 2-MIN<br />RINSE & FIT
                </span>
              </div>

            </div>

            {/* Primary Orange Call-To-Action Button (Matching Reference) */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={scrollToFinder}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-orange-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>SHOP ALL-WEATHER COVERS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/products"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm text-center border border-white/20 transition-all"
              >
                Explore Full Catalogue
              </Link>
            </div>

          </div>

          {/* Right Column: Hero Visual Product Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-[#0a0f2b]">
              <img
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80"
                alt="Hi-Life All-Weather Automotive Protective Car Cover"
                className="w-full h-[320px] sm:h-[400px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2b]/80 via-transparent to-transparent" />

              {/* Float Tag inside visual */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-slate-200 text-slate-900 flex items-center justify-between shadow-lg">
                <div>
                  <p className="text-xs font-black uppercase text-[#19277c]">
                    3-Layer Waterproof Technology
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Engineered for 120+ Indian Car Models
                  </p>
                </div>
                <span className="bg-[#19277c] text-white text-[10px] font-extrabold px-2.5 py-1 rounded">
                  UPF 50+
                </span>
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
