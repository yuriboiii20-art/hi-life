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

      {/* Brand Philosophy */}
      <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-black uppercase tracking-wider text-black">
                Material & Fitting Philosophy
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight">
                Why Standard Universal Covers Fail
              </h2>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                Most generic car covers on the market use flimsy 50–70 GSM synthetic sheeting, single-stitched seams that split during light breezes, and loose baggy cuts that balloon in the wind — causing fine dust to rub against car paint and create micro-swirls.
              </p>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                At Hi-Life, we approach car protection as an engineering discipline. We build our covers using high-density Oxford weaves ranging from 130 GSM to 310 GSM, reinforced with heat-sealed ultrasonic waterproof seams, soft non-abrasive inner cotton fleeces, and vehicle-specific 3D contours tailored to mirror and antenna geometry.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 flex items-start gap-3">
                  <Layers className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-black">Dense Woven Matrix</h4>
                    <p className="text-[11px] text-neutral-500 mt-0.5 font-normal">High tear & puncture resistance</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-black">TPU Hydrostatic Film</h4>
                    <p className="text-[11px] text-neutral-500 mt-0.5 font-normal">100% leakproof monsoonal shield</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3-Layer Architecture Box */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl p-7 bg-neutral-50 border border-neutral-200 shadow-xl space-y-5">
                <h3 className="text-xl font-black text-black flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-black" />
                  <span>The Hi-Life 3-Layer Architecture</span>
                </h3>

                <div className="space-y-3.5">
                  <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-black uppercase">Layer 1: Exterior Shield</span>
                      <span className="text-neutral-500 font-semibold">UPF 50+ UV / Oxford</span>
                    </div>
                    <p className="text-xs text-neutral-600 font-normal">
                      High-density hydrophobic Oxford exterior that reflects harsh ultraviolet radiation and repels torrential water droplets.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-black uppercase">Layer 2: Hydrostatic Membrane</span>
                      <span className="text-neutral-500 font-semibold">100% Leakproof Film</span>
                    </div>
                    <p className="text-xs text-neutral-600 font-normal">
                      Microporous TPU barrier that stops standing rain and bird acid while allowing trapped interior heat condensation to breathe outwards.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-black uppercase">Layer 3: Soft Cotton Lining</span>
                      <span className="text-neutral-500 font-semibold">Zero Swirl Shield</span>
                    </div>
                    <p className="text-xs text-neutral-600 font-normal">
                      Ultra-soft spun cotton fleece cushions clear coats, ceramic coatings, and high-gloss paint finishes from abrasion.
                    </p>
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
