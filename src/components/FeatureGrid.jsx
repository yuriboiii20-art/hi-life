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
        return <Sun className="w-6 h-6 text-white" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-white" />;
      case 'Maximize2':
        return <Maximize2 className="w-6 h-6 text-white" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-white" />;
      case 'Anchor':
        return <Anchor className="w-6 h-6 text-white" />;
      case 'Radio':
        return <Radio className="w-6 h-6 text-white" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <Layers className="w-3.5 h-3.5 text-white" />
            <span>Precision Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
            Built to Protect. Made to Last.
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            Every Hi-Life car cover is engineered with six signature defense elements to ensure uncompromising vehicle security against extreme weather, dust, and outdoor hazards.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {CORE_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="rounded-2xl p-6 sm:p-7 bg-white hover:bg-neutral-50 border border-neutral-200 hover:border-black hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {renderFeatureIcon(feature.iconName)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-black">
                      {feature.highlightTag}
                    </span>
                    <span className="text-xs font-black text-neutral-400">
                      {feature.number}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-black group-hover:text-black transition-colors">
                  {feature.title}
                </h3>

                {/* Exact summary description */}
                <p className="text-sm text-neutral-700 mt-2 leading-relaxed font-normal">
                  {feature.summary}
                </p>

                {/* Technical detail */}
                <p className="text-xs text-neutral-500 mt-3 pt-3 border-t border-neutral-200 leading-relaxed font-normal">
                  {feature.technicalDetail}
                </p>
              </div>

              <div className="pt-4 mt-4 flex items-center gap-2 text-xs font-bold text-black border-t border-neutral-100">
                <CheckCircle2 className="w-4 h-4 text-black" />
                <span>Standard on all Hi-Life covers</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
