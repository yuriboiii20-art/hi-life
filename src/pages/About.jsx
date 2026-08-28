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
    <div className="bg-[#f8fafc] text-neutral-800 font-sans min-h-screen">
      
      {/* Hero Banner */}
      <section className="relative py-16 lg:py-24 bg-black text-white border-b border-neutral-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col items-center">
          <div className="mb-6 inline-block">
            <img 
              src="/logo.png" 
              alt="Hi-Life Official Brand Logo" 
              className="h-28 sm:h-36 w-auto object-contain drop-shadow-2xl"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Our Brand Purpose</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Stronger Fabric.<br />
            <span className="text-neutral-400">
              Stronger Trust.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 mt-4 leading-relaxed font-normal">
            Hi-Life was founded on a straightforward mission: to engineer dependable, precision-tailored automotive covers that protect vehicles against extreme Indian weather without compromise.
          </p>
        </div>
      </section>

      {/* Core Features & ULY Coated Fabric Specification */}
      <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 6 Cols: Core Features of Our Product */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-black">
                  Product Architecture
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight mt-1">
                  Core Features of Our Product
                </h2>
                <p className="text-sm text-neutral-600 mt-2 font-normal">
                  Every Hi-Life car cover is precision-crafted with six essential protection standards for all-weather durability and vehicle safety.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center gap-4 hover:border-black transition-all">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-black text-sm shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-black">UV Resistant</h3>
                    <p className="text-xs text-neutral-600 mt-0.5 font-normal">Blocks harsh solar radiation and protects clear coat & car paint from fading.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center gap-4 hover:border-black transition-all">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-black text-sm shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-black">100% Waterproof and Leakproof</h3>
                    <p className="text-xs text-neutral-600 mt-0.5 font-normal">Advanced hydrostatic barrier keeps heavy torrential monsoon rains completely out.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center gap-4 hover:border-black transition-all">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-black text-sm shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-black">Side Mirror Pockets</h3>
                    <p className="text-xs text-neutral-600 mt-0.5 font-normal">Dedicated dual ORVM mirror slots ensure an exact tailored fit without fabric tension.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center gap-4 hover:border-black transition-all">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-black text-sm shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-black">Center Belt Below the Car to Lock It Safe</h3>
                    <p className="text-xs text-neutral-600 mt-0.5 font-normal">Heavy-duty underbody buckle prevents cover blow-off during intense windy storms.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center gap-4 hover:border-black transition-all">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-black text-sm shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-black">Front and Back Elastic</h3>
                    <p className="text-xs text-neutral-600 mt-0.5 font-normal">Reinforced dual-end elastic hems grip the front and rear bumpers securely.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center gap-4 hover:border-black transition-all">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-black text-sm shrink-0">
                    6
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-black">Covers Antina</h3>
                    <p className="text-xs text-neutral-600 mt-0.5 font-normal">Designed to comfortably accommodate and protect vehicle roof antennas.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 6 Cols: ULY Coated Fabric Specification */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-3xl p-7 sm:p-9 bg-black text-white shadow-2xl space-y-6 border border-neutral-800">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Advanced Material Technology</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  ULY Coated Fabric Engineering
                </h3>

                <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
                  <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
                    ULY coated fabric is a high-performance textile treated with an advanced Ultra Laminated Polyurethane (ULY) resin coating on base materials like polyester or nylon. It offers exceptional waterproofing, tear strength, and abrasion resistance while remaining lighter and more flexible than standard PVC-coated materials. The base fabric is polyester.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                    <span className="text-[10px] font-black uppercase tracking-wider text-neutral-400 block mb-1">
                      Base Material
                    </span>
                    <p className="text-base font-black text-white">100% Polyester</p>
                    <p className="text-xs text-neutral-400 mt-1 font-normal">High tensile strength and tear resistance</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                    <span className="text-[10px] font-black uppercase tracking-wider text-neutral-400 block mb-1">
                      Resin Coating
                    </span>
                    <p className="text-base font-black text-white">Ultra Laminated Polyurethane</p>
                    <p className="text-xs text-neutral-400 mt-1 font-normal">Flexible, lightweight, and waterproof</p>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-neutral-800">
                  <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span>Lighter and more flexible than standard PVC-coated materials</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span>Extreme hydrostatic water resistance & zero capillary leakage</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span>High abrasion and tear resistance for long outdoor lifespans</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-[#f8fafc] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-black">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-black text-black">
              What Drives Every Hi-Life Cover
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200 hover:border-black shadow-sm hover:shadow-lg transition-all space-y-2.5">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center shadow">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-black">Zero Compromise on Sizing</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                We do not sell 'one-size-fits-all'. Every cover pattern is calibrated to the specific length, width, height, and side mirror positions of Indian vehicle models.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200 hover:border-black shadow-sm hover:shadow-lg transition-all space-y-2.5">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center shadow">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-black">Durable Hardware & Fasteners</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                From high-tension front-rear elastic bands to heavy underbody centre buckles, our fasteners are engineered to keep covers anchored during sudden stormy gusts.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200 hover:border-black shadow-sm hover:shadow-lg transition-all space-y-2.5">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center shadow">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-black">Transparent Customer Support</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
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
