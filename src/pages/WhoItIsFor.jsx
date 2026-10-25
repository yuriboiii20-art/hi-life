import React, { useState } from 'react';
import VehicleFinder from '../components/VehicleFinder';
import ProductResult from '../components/ProductResult';
import QuickOrderModal from '../components/QuickOrderModal';

export default function WhoItIsFor() {
  const [matchingResult, setMatchingResult] = useState(null);
  const [orderModalResult, setOrderModalResult] = useState(null);

  return (
    <div className="bg-white text-stone-900 font-sans select-none overflow-x-hidden">
      
      {/* Editorial Hero Container */}
      <section className="py-20 sm:py-28 max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-6">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-stone-400 block">
          THE PHILOSOPHY
        </span>

        <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-stone-950 tracking-tight leading-[1.08]">
          Hard work builds taste.
        </h1>

        <p className="font-editorial text-2xl sm:text-3xl text-stone-600 font-normal italic max-w-2xl mx-auto leading-relaxed">
          So why should what protects your car be made for no one in particular?
        </p>

        <p className="text-xs sm:text-sm text-stone-500 max-w-xl mx-auto leading-relaxed font-normal pt-2">
          Most car covers in the market are mass-cut from thin leftover synthetic sheets, stamped with arbitrary 'Universal' sizing labels, and sold to anyone whose vehicle is roughly four wheels and a roof.
        </p>
      </section>

      {/* Contrast Showcase Section (White & Orange Theme) */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-50 via-white to-amber-50 text-stone-900 border-y border-orange-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-12">
          
          <div className="max-w-2xl">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-orange-600 block mb-2">
              THE DIFFERENCE
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-stone-950 tracking-tight">
              We make covers for one car at a time.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
              <p>
                At Hanuman Tarpaulins on JC Road, Bangalore, we have spent over 20 years studying vehicle silhouettes. When a customer orders a cover for a Creta, a Fortuner, a Thar, or a 3-Series, our patterns match that specific car's body panels, mirror housings, antenna mast, and roofline curvature.
              </p>
              <p>
                The elastic pulls tight beneath the bumpers, the central lock belt clips under the belly, and the soft cotton fleece inner lining cushions the ceramic clear-coat like fine tailored clothing.
              </p>
              <p className="font-editorial text-xl sm:text-2xl text-orange-600 pt-2 font-bold">
                "A cover that doesn't fit properly isn't protection — it's an abrasive hazard in the wind."
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden aspect-4/3 bg-stone-100 border border-orange-200 shadow-xl">
              <img
                src="/hi-life-assets/about.webp"
                alt="Crafting custom tailored covers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Affirmation Section */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-4">
        <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-stone-950 tracking-tight">
          If this sounds like you, Hi-Life is made for you.
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed font-normal">
          For owners who park outside, who appreciate enduring craftsmanship, who notice every stitch, and who believe that protecting their investment shouldn't be an afterthought.
        </p>
      </section>

      {/* Integrated Vehicle Finder */}
      <VehicleFinder
        onSelectResult={(res) => setMatchingResult(res)}
      />

      {matchingResult && (
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-16">
          <ProductResult
            result={matchingResult}
            onReset={() => setMatchingResult(null)}
            onBuyNow={(res) => setOrderModalResult(res)}
          />
        </div>
      )}

      {orderModalResult && (
        <QuickOrderModal
          result={orderModalResult}
          onClose={() => setOrderModalResult(null)}
        />
      )}

    </div>
  );
}
