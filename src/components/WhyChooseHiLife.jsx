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
        return <Layers className="w-6 h-6 text-[#19277c]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
      case 'CloudLightning':
        return <CloudLightning className="w-6 h-6 text-blue-600" />;
      case 'Car':
        return <Car className="w-6 h-6 text-amber-600" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-purple-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-cyan-600" />;
      default:
        return <Shield className="w-6 h-6 text-[#19277c]" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#f4f6f8] border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#19277c] text-xs font-bold uppercase tracking-wider shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>The Hi-Life Benchmark</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19277c] tracking-tight">
              Why Car Owners Choose Hi-Life
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Unlike generic universal covers that flap in the wind and scratch paint, Hi-Life delivers vehicle-specific engineering designed for Indian driving & parking realities.
            </p>
          </div>

          {/* Tagline Card */}
          <div className="p-6 rounded-2xl bg-[#19277c] text-white shadow-lg shrink-0 max-w-sm">
            <p className="text-[11px] uppercase tracking-widest text-[#47c7f1] font-extrabold">
              Our Unwavering Brand Creed
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              “{BUSINESS_CONFIG.tagline}”
            </h3>
            <p className="text-xs text-slate-200 mt-2 font-normal">
              Every seam, buckle, and elastic is tested for durable real-world defense.
            </p>
          </div>
        </div>

        {/* 6 Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_FACTORS.map((factor, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#19277c]/30 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-4">
                  {renderIcon(factor.iconName)}
                </div>

                <h4 className="text-base font-bold text-slate-900">
                  {factor.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                  {factor.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#19277c]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
                <span>Engineered for Indian Climate</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Trigger */}
        <div className="mt-10 text-center">
          <button
            onClick={() => {
              if (onFindCoverClick) onFindCoverClick();
              else {
                const el = document.getElementById('vehicle-finder');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#19277c] hover:bg-[#16215b] text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:scale-[1.01] transition-all"
          >
            <span>Match Your Vehicle with Hi-Life</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
