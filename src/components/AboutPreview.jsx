import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle2, ArrowRight, Award, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function AboutPreview() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-stone-200/90 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Brand Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Shield className="w-3.5 h-3.5 text-amber-600" />
              <span>About Hi-Life</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight leading-tight">
              Engineered for Real-World Vehicle Defense
            </h2>

            <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
              At Hi-Life, we focus on what matters most to car owners: durable, heavyweight fabrics that resist tearing, accurate 3D patterning that hugs your car’s exact profile, and practical details like dedicated mirror pockets and storm-ready underbody straps.
            </p>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              We design our protective covers to withstand everyday outdoor challenges — from intense ultraviolet sun exposure and seasonal monsoons to urban dust and abrasive micro-particles — keeping your vehicle pristine in every parking condition.
            </p>

            {/* Core Values checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Heavy-density woven fabrics</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Vehicle-specific 3D laser patterning</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Non-abrasive inner paint shield</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Double-stitched storm lock belts</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-stone-950 hover:bg-black text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md transition-all hover:scale-[1.01]"
              >
                <span>Read Our Full Philosophy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Right Column: Visual Philosophy Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-7 bg-stone-50 border border-stone-200/90 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.05)] space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-stone-900 text-white flex items-center justify-center shadow-sm">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-stone-950">Our Driving Standard</h4>
                  <p className="text-xs text-stone-500 font-normal">Quality built into every stitch</p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-stone-900 text-white shadow-lg border border-stone-800">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold">
                    Brand Creed
                  </span>
                  <img src="/logo.png" alt="Hi-Life Logo" className="h-9 w-auto object-contain" />
                </div>
                <p className="text-xl font-black text-white">
                  “{BUSINESS_CONFIG.tagline}”
                </p>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed font-normal">
                  We believe a car cover should do more than just drape over a vehicle; it should deliver unyielding protection that you can trust day after day.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs text-stone-600 border-t border-stone-200 font-medium">
                <div className="flex justify-between">
                  <span>Coverage Scope:</span>
                  <span className="font-bold text-stone-950">Hatchbacks, Sedans, SUVs, MPVs</span>
                </div>
                <div className="flex justify-between">
                  <span>Supported Generations:</span>
                  <span className="font-bold text-stone-950">2005 – 2026 Models</span>
                </div>
                <div className="flex justify-between">
                  <span>Testing Standard:</span>
                  <span className="font-bold text-stone-950">Hydrostatic Water & UV Tested</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
