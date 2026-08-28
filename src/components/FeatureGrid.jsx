import React from 'react';
import { 
  Sun, 
  Droplets, 
  Maximize2, 
  ShieldAlert, 
  Anchor, 
  Radio, 
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { CORE_FEATURES } from '../data/features';

export default function FeatureGrid() {
  const renderFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'Sun':
        return <Sun className="w-5 h-5 text-amber-400" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-amber-400" />;
      case 'Maximize2':
        return <Maximize2 className="w-5 h-5 text-amber-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-amber-400" />;
      case 'Anchor':
        return <Anchor className="w-5 h-5 text-amber-400" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#fafaf9] border-b border-stone-200/90 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            <span>Precision Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight">
            Built to Protect. Made to Last.
          </h2>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            Every Hi-Life car cover is engineered with six signature defense elements to ensure uncompromising vehicle security against extreme weather, dust, and outdoor hazards.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {CORE_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="rounded-3xl p-7 bg-white border border-stone-200/90 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.05)] hover:border-stone-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-stone-900 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    {renderFeatureIcon(feature.iconName)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-stone-800">
                      {feature.highlightTag}
                    </span>
                    <span className="text-xs font-black text-stone-400">
                      {feature.number}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-stone-950 group-hover:text-stone-900 transition-colors">
                  {feature.title}
                </h3>

                {/* Exact summary description */}
                <p className="text-sm text-stone-600 mt-2 leading-relaxed font-normal">
                  {feature.summary}
                </p>

                {/* Technical detail */}
                <p className="text-xs text-stone-500 mt-3 pt-3 border-t border-stone-100 leading-relaxed font-normal">
                  {feature.technicalDetail}
                </p>
              </div>

              <div className="pt-4 mt-4 flex items-center gap-2 text-xs font-bold text-stone-800 border-t border-stone-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Standard on all Hi-Life covers</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
