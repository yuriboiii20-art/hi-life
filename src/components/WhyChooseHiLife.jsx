import React from 'react';
import { 
  Layers, 
  CheckCircle2, 
  CloudLightning, 
  Car, 
  Clock, 
  ShieldCheck, 
  Shield, 
  ArrowRight 
} from 'lucide-react';
import { WHY_CHOOSE_FACTORS } from '../data/features';
import { BUSINESS_CONFIG } from '../config/business';

export default function WhyChooseHiLife({ onFindCoverClick }) {
  const renderIcon = (name) => {
    switch (name) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-amber-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-amber-400" />;
      case 'CloudLightning':
        return <CloudLightning className="w-5 h-5 text-amber-400" />;
      case 'Car':
        return <Car className="w-5 h-5 text-amber-400" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      default:
        return <Shield className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#fafaf9] border-b border-stone-200/90 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>The Hi-Life Benchmark</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight">
              Why Car Owners Choose Hi-Life
            </h2>

            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
              Unlike generic universal covers that flap in the wind and scratch paint, Hi-Life delivers vehicle-specific engineering designed for Indian driving & parking realities.
            </p>
          </div>

          {/* Tagline Card */}
          <div className="p-7 rounded-3xl bg-stone-900 text-white shadow-xl shrink-0 max-w-sm border border-stone-800">
            <p className="text-[11px] uppercase tracking-widest text-amber-400 font-bold">
              Our Unwavering Brand Creed
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              “{BUSINESS_CONFIG.tagline}”
            </h3>
            <p className="text-xs text-stone-300 mt-2 font-normal">
              Every seam, buckle, and elastic is tested for durable real-world defense.
            </p>
          </div>
        </div>

        {/* 6 Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_FACTORS.map((factor, index) => (
            <div
              key={index}
              className="p-7 rounded-3xl bg-white border border-stone-200/90 hover:border-stone-400 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.05)] hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-stone-900 flex items-center justify-center mb-5 shadow-sm">
                  {renderIcon(factor.iconName)}
                </div>

                <h4 className="text-base font-bold text-stone-950">
                  {factor.title}
                </h4>

                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed font-normal">
                  {factor.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-bold text-stone-800">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                <span>Engineered for Indian Climate</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Trigger */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              if (onFindCoverClick) onFindCoverClick();
              else {
                const el = document.getElementById('vehicle-finder');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-stone-950 hover:bg-black text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-[1.01] cursor-pointer"
          >
            <span>Match Your Vehicle with Hi-Life</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
