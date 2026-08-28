import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Layers, 
  Droplets, 
  Sun, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  HeartHandshake, 
  Target, 
  Compass 
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import FinalCTA from '../components/FinalCTA';

export default function About() {
  return (
    <div className="bg-[#fafaf9] text-stone-900 font-sans min-h-screen">
      
      {/* Hero Banner */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-white border-b border-stone-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col items-center">
          <div className="mb-6 inline-block">
            <img 
              src="/logo.png" 
              alt="Hi-Life Official Brand Logo" 
              className="h-28 sm:h-36 w-auto object-contain drop-shadow-2xl"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Our Brand Purpose</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Stronger Fabric.<br />
            <span className="text-stone-400">
              Stronger Trust.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-stone-300 mt-4 leading-relaxed font-normal">
            Hi-Life was founded on a straightforward mission: to engineer dependable, precision-tailored automotive covers that protect vehicles against extreme Indian weather without compromise.
          </p>
        </div>
      </section>

      {/* Core Features & ULY Coated Fabric Specification */}
      <section className="py-16 sm:py-24 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 6 Cols: Core Features of Our Product */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  Product Architecture
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-stone-950 leading-tight mt-1">
                  Core Features of Our Product
                </h2>
                <p className="text-sm text-stone-600 mt-2 font-normal leading-relaxed">
                  Every Hi-Life car cover is precision-crafted with six essential protection standards for all-weather durability and vehicle safety.
                </p>
              </div>

              <div className="space-y-3.5">
                <div className="p-5 rounded-3xl bg-stone-50 border border-stone-200/90 flex items-center gap-4 hover:border-stone-400 transition-all shadow-[0_2px_10px_-2px_rgba(28,25,23,0.03)]">
                  <div className="w-10 h-10 rounded-2xl bg-stone-900 text-amber-400 flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                    1
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-950">UV Resistant</h3>
                    <p className="text-xs text-stone-600 mt-0.5 font-normal">Blocks harsh solar radiation and protects clear coat & car paint from fading.</p>
                  </div>
                </div>

                <div className="p-5 rounded-3xl bg-stone-50 border border-stone-200/90 flex items-center gap-4 hover:border-stone-400 transition-all shadow-[0_2px_10px_-2px_rgba(28,25,23,0.03)]">
                  <div className="w-10 h-10 rounded-2xl bg-stone-900 text-amber-400 flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                    2
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-950">100% Waterproof and Leakproof</h3>
                    <p className="text-xs text-stone-600 mt-0.5 font-normal">Advanced hydrostatic barrier keeps heavy torrential monsoon rains completely out.</p>
                  </div>
                </div>

                <div className="p-5 rounded-3xl bg-stone-50 border border-stone-200/90 flex items-center gap-4 hover:border-stone-400 transition-all shadow-[0_2px_10px_-2px_rgba(28,25,23,0.03)]">
                  <div className="w-10 h-10 rounded-2xl bg-stone-900 text-amber-400 flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                    3
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-950">Side Mirror Pockets</h3>
                    <p className="text-xs text-stone-600 mt-0.5 font-normal">Dedicated dual ORVM mirror slots ensure an exact tailored fit without fabric tension.</p>
                  </div>
                </div>

                <div className="p-5 rounded-3xl bg-stone-50 border border-stone-200/90 flex items-center gap-4 hover:border-stone-400 transition-all shadow-[0_2px_10px_-2px_rgba(28,25,23,0.03)]">
                  <div className="w-10 h-10 rounded-2xl bg-stone-900 text-amber-400 flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                    4
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-950">Center Belt Below the Car to Lock It Safe</h3>
                    <p className="text-xs text-stone-600 mt-0.5 font-normal">Heavy-duty underbody buckle prevents cover blow-off during intense windy storms.</p>
                  </div>
                </div>

                <div className="p-5 rounded-3xl bg-stone-50 border border-stone-200/90 flex items-center gap-4 hover:border-stone-400 transition-all shadow-[0_2px_10px_-2px_rgba(28,25,23,0.03)]">
                  <div className="w-10 h-10 rounded-2xl bg-stone-900 text-amber-400 flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                    5
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-950">Front and Back Elastic</h3>
                    <p className="text-xs text-stone-600 mt-0.5 font-normal">Reinforced dual-end elastic hems grip the front and rear bumpers securely.</p>
                  </div>
                </div>

                <div className="p-5 rounded-3xl bg-stone-50 border border-stone-200/90 flex items-center gap-4 hover:border-stone-400 transition-all shadow-[0_2px_10px_-2px_rgba(28,25,23,0.03)]">
                  <div className="w-10 h-10 rounded-2xl bg-stone-900 text-amber-400 flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                    6
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-950">Covers Antina</h3>
                    <p className="text-xs text-stone-600 mt-0.5 font-normal">Designed to comfortably accommodate and protect vehicle roof antennas.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 6 Cols: ULY Coated Fabric Specification */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-3xl p-7 sm:p-9 bg-stone-900 text-white shadow-2xl space-y-6 border border-stone-800">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Advanced Material Technology</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  ULY Coated Fabric Engineering
                </h3>

                <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800 space-y-4">
                  <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-normal">
                    ULY coated fabric is a high-performance textile treated with an advanced Ultra Laminated Polyurethane (ULY) resin coating on base materials like polyester or nylon. It offers exceptional waterproofing, tear strength, and abrasion resistance while remaining lighter and more flexible than standard PVC-coated materials. The base fabric is polyester.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="p-5 rounded-2xl bg-stone-950/80 border border-stone-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                      Base Material
                    </span>
                    <p className="text-base font-black text-white">100% Polyester</p>
                    <p className="text-xs text-stone-400 mt-1 font-normal">High tensile strength and tear resistance</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-stone-950/80 border border-stone-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                      Resin Coating
                    </span>
                    <p className="text-base font-black text-white">Ultra Laminated Polyurethane</p>
                    <p className="text-xs text-stone-400 mt-1 font-normal">Flexible, lightweight, and waterproof</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-stone-800">
                  <div className="flex items-center gap-2.5 text-xs text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Lighter and more flexible than standard PVC-coated materials</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Extreme hydrostatic water resistance & zero capillary leakage</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>High abrasion and tear resistance for long outdoor lifespans</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-[#fafaf9] border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-black text-stone-950">
              What Drives Every Hi-Life Cover
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-stone-200/90 hover:border-stone-400 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.05)] hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-stone-900 text-amber-400 flex items-center justify-center shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-stone-950">Zero Compromise on Sizing</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                We do not sell 'one-size-fits-all'. Every cover pattern is calibrated to the specific length, width, height, and side mirror positions of Indian vehicle models.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-stone-200/90 hover:border-stone-400 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.05)] hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-stone-900 text-amber-400 flex items-center justify-center shadow-sm">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-stone-950">Durable Hardware & Fasteners</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                From high-tension front-rear elastic bands to heavy underbody centre buckles, our fasteners are engineered to keep covers anchored during sudden stormy gusts.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-stone-200/90 hover:border-stone-400 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.05)] hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-stone-900 text-amber-400 flex items-center justify-center shadow-sm">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-stone-950">Transparent Customer Support</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                Direct WhatsApp consultation with real automotive fitting specialists ensures you get the exact right cover size before your order leaves our hub.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />

    </div>
  );
}
