import React from 'react';
import { ShieldCheck, Droplets, Sun, Layers, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function ProtectionSolution({ onFinderClick }) {
  const engineeringHighlights = [
    {
      title: "Soft Spun Cotton Fleece Lining",
      desc: "Creates an ultra-gentle cushion against your car's clear-coat, ceramic coat, or PPF, preventing micro-swirls during repeated installation.",
      highlight: "Paint Armor"
    },
    {
      title: "100% Waterproof TPU Membrane",
      desc: "Advanced hydrophobic lamination with heat-sealed taped seams blocks 5000mm+ monsoonal rain without single-drop capillary leakage.",
      highlight: "Monsoon Proof"
    },
    {
      title: "Reflective Solar Heat Deflection",
      desc: "High-density weave blocks 98% of harmful ultraviolet rays, preventing interior dashboard warping, leather drying, and clear-coat fading.",
      highlight: "Solar Defense"
    },
    {
      title: "Storm-Ready Centre Lock Belt",
      desc: "Underbody snap buckle with high-tension perimeter elastic locks beneath chassis, ensuring complete anchor security against stormy winds.",
      highlight: "Grip Lock"
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-stone-950 text-white border-b border-stone-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Oenum Clean White on Dark) */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 block">
            THE HANUMAN TARPAULINS & HI-LIFE STANDARD
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Premium Protection. Effortlessly.
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 font-normal max-w-xl mx-auto leading-relaxed">
            Every detail is engineered for a smooth 2-minute installation, a precise fit, and dependable protection that complements your vehicle's premium appeal.
          </p>
        </div>

        {/* Visual + Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden bg-stone-900 border border-white/10 shadow-2xl aspect-[4/3]">
              <img
                src="/products/camo-car-rain-monsoon.jpg"
                alt="100% Monsoon Waterproof Car Cover"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs">
                <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl text-white font-medium border border-white/15">
                  Real Monsoonal Road Test
                </span>
                <span className="bg-amber-500 text-stone-950 px-3 py-1.5 rounded-xl font-bold">
                  Zero Water Seepage
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Engineering Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {engineeringHighlights.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 backdrop-blur-md transition-all flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {feat.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {feat.highlight}
                    </span>
                  </div>

                  <p className="text-xs text-stone-300 mt-1 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <button
                type="button"
                onClick={onFinderClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <span>Find Your Vehicle Fit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
