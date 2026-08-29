import React from 'react';
import { 
  Shield, 
  Layers, 
  Target, 
  HeartHandshake, 
  CheckCircle2 
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function About() {
  return (
    <div className="bg-[#fafaf9] text-stone-900 font-sans min-h-screen">
      
      {/* Compact Hero Banner */}
      <section className="relative py-8 sm:py-12 bg-stone-950 text-white border-b border-stone-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-stone-200 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>Hi-Life Brand Standard</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Engineered for Indian Climate & Road Conditions
          </h1>

          <p className="text-xs sm:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed font-normal">
            Custom-fit automotive covers crafted with military-grade coatings, paint-safe fleece, and storm-proof underbody anchors.
          </p>
        </div>
      </section>

      {/* Core Features of Our Product */}
      <section className="py-8 sm:py-12 bg-white border-b border-stone-200/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 6 Cols: Core Features */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-700">
                  Standard Specifications
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-stone-950 leading-tight mt-0.5">
                  Core Features of Our Product
                </h2>
                <p className="text-xs text-stone-500 mt-1 font-normal">
                  Six foundational engineering standards in every Hi-Life cover:
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/90 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-stone-950 text-amber-400 flex items-center justify-center font-black text-xs shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-stone-950">UV resistant</h3>
                    <p className="text-[11px] text-stone-500 font-normal">Halts ultraviolet radiation and shields car paint from solar degradation.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/90 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-stone-950 text-amber-400 flex items-center justify-center font-black text-xs shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-stone-950">100% waterproof and leakproof</h3>
                    <p className="text-[11px] text-stone-500 font-normal">High hydrostatic barrier blocks torrential monsoonal downpours.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/90 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-stone-950 text-amber-400 flex items-center justify-center font-black text-xs shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-stone-950">Side mirror pockets</h3>
                    <p className="text-[11px] text-stone-500 font-normal">Custom-tailored ORVM pockets ensure a glove-like fit without seam stress.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/90 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-stone-950 text-amber-400 flex items-center justify-center font-black text-xs shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-stone-950">Center belt below the car to lock it safe</h3>
                    <p className="text-[11px] text-stone-500 font-normal">Underbody quick-release lock buckle secures against strong windstorms.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/90 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-stone-950 text-amber-400 flex items-center justify-center font-black text-xs shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-stone-950">Front and back elastic</h3>
                    <p className="text-[11px] text-stone-500 font-normal">High-tension elastic hem hugs bumper curves tightly.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/90 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-stone-950 text-amber-400 flex items-center justify-center font-black text-xs shrink-0">
                    6
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-stone-950">Covers antina</h3>
                    <p className="text-[11px] text-stone-500 font-normal">Dedicated contour accommodation for whip and shark-fin antennas.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 6 Cols: ULY Coated Fabric Specification */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-700">
                  Material Science
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-stone-950 leading-tight mt-0.5">
                  ULY Coated Textile Technology
                </h2>
                <p className="text-xs text-stone-500 mt-1 font-normal">
                  Advanced polymer lamination engineered for maximum durability:
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200/90 space-y-3">
                <div className="rounded-xl overflow-hidden aspect-[16/9] border border-stone-200 shadow-xs">
                  <img 
                    src="/products/camo-car-daylight.jpg" 
                    alt="Hi-Life Military Camouflage All-Weather Material" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                  ULY coated fabric is a high-performance textile treated with an advanced Ultra Laminated Polyurethane (ULY) resin coating on base materials like polyester or nylon. It offers exceptional waterproofing, tear strength, and abrasion resistance while remaining lighter and more flexible than standard PVC-coated materials.
                </p>

                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 font-medium">
                  <span className="font-bold text-amber-900 uppercase tracking-wider text-[10px] block mb-0.5">Base Material Note</span>
                  The base fabric is 100% heavy-gauge polyester, ensuring zero fabric stiffness in low temperatures and total tear resilience against outdoor scratches.
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                    <p className="text-[10px] text-stone-400 font-semibold uppercase">Tear Resistance</p>
                    <p className="font-bold text-stone-950 mt-0.5">Ripstop Oxford</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                    <p className="text-[10px] text-stone-400 font-semibold uppercase">Inner Lining</p>
                    <p className="font-bold text-stone-950 mt-0.5">Soft Cotton Fleece</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Values Grid */}
      <section className="py-8 sm:py-12 bg-[#fafaf9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="p-4 rounded-2xl bg-white border border-stone-200/90 space-y-1.5">
              <Target className="w-5 h-5 text-stone-900" />
              <h3 className="text-xs sm:text-sm font-bold text-stone-950">Zero Compromise Sizing</h3>
              <p className="text-[11px] text-stone-500 font-normal leading-relaxed">
                Calibrated to exact vehicle dimensions for 50+ models across hatchbacks, sedans, and SUVs.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-stone-200/90 space-y-1.5">
              <Shield className="w-5 h-5 text-stone-900" />
              <h3 className="text-xs sm:text-sm font-bold text-stone-950">Storm-Proof Hardware</h3>
              <p className="text-[11px] text-stone-500 font-normal leading-relaxed">
                Heavy-duty underbody snap buckle belts and reinforced dual-end elastics resist high winds.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-stone-200/90 space-y-1.5">
              <HeartHandshake className="w-5 h-5 text-stone-900" />
              <h3 className="text-xs sm:text-sm font-bold text-stone-950">Direct Consultation</h3>
              <p className="text-[11px] text-stone-500 font-normal leading-relaxed">
                Direct WhatsApp consultation with automotive fitting specialists before dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
