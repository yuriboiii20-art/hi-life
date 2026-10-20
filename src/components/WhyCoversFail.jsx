import React from 'react';
import { Flame, Wind, EyeOff, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function WhyCoversFail() {
  const problems = [
    {
      number: "01",
      title: "They Trap Heat",
      tag: "Thermal Stress",
      description: "Heat trapped beneath poor-quality covers turns cabins into ovens, accelerating clear-coat oxidation, leather cracking, and electronics degradation.",
      icon: Flame,
      stat: "Up to +35°C Trapped"
    },
    {
      number: "02",
      title: "They Scratch Paint",
      tag: "Abrasive Friction",
      description: "Rough unlined synthetic fabric and loose fitment create continuous micro-friction with ambient dust, resulting in noticeable swirl marks across clear coat.",
      icon: AlertTriangle,
      stat: "Micro-Swirls & Scuffs"
    },
    {
      number: "03",
      title: "They Don't Fit Properly",
      tag: "Loose Flapping",
      description: "Universal 'one-size-fits-all' covers leave mirrors squeezed, bumpers exposed, and balloon wildly during windy storms, tearing seams prematurely.",
      icon: Wind,
      stat: "Wind Ballooning"
    },
    {
      number: "04",
      title: "Fabric Breakdown & Rot",
      tag: "UV & Rain Decay",
      description: "Low-grade PVC materials quickly degrade under Indian summer sun and torrential monsoons, leading to brittle peeling and capillary water leakage.",
      icon: EyeOff,
      stat: "Leaks Within 3 Months"
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#fafaf9] border-b border-stone-200/90 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Oenum Clean Architectural Format) */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-red-600 block mb-1">
            THE UNNOTICED PROBLEM
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight">
            Why Most Covers Fail
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-normal">
            Cheap universal covers often cause more damage than the outdoor elements they claim to protect against.
          </p>
        </div>

        {/* 4 Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div
                key={prob.number}
                className="rounded-3xl bg-white border border-stone-200/90 p-6 sm:p-7 shadow-xs hover:border-stone-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-black text-stone-400">
                      {prob.number}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-50 text-red-700 border border-red-200">
                      {prob.tag}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-2xl bg-stone-100 flex items-center justify-center mb-4 text-stone-900">
                    <Icon className="w-5 h-5 text-red-600" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-stone-950">
                    {prob.title}
                  </h3>

                  <p className="text-xs text-stone-600 mt-2 leading-relaxed font-normal">
                    {prob.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 text-[11px] font-bold text-stone-500">
                  Risk: <span className="text-red-700 font-semibold">{prob.stat}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
