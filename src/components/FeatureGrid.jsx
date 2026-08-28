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
        return <Sun className="w-5 h-5 text-amber-500" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-amber-500" />;
      case 'Maximize2':
        return <Maximize2 className="w-5 h-5 text-amber-500" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-amber-500" />;
      case 'Anchor':
        return <Anchor className="w-5 h-5 text-amber-500" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-amber-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-stone-200/90 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight">
            Core Features of Our Product
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 font-normal">
            Six essential protection standards engineered into every Hi-Life car cover.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CORE_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="rounded-2xl p-5 sm:p-6 bg-stone-50 border border-stone-200/90 hover:border-stone-400 transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center shrink-0 shadow-xs">
                {renderFeatureIcon(feature.iconName)}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-stone-400">#{feature.number}</span>
                  <h3 className="text-sm sm:text-base font-bold text-stone-950">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-xs text-stone-600 mt-1 leading-relaxed font-normal">
                  {feature.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
