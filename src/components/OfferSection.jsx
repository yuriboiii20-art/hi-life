import React, { useState } from 'react';
import { Tag, Truck, Umbrella, Gift, Copy, Check, Sparkles, Percent } from 'lucide-react';
import { ACTIVE_OFFERS } from '../data/offers';

export default function OfferSection() {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2500);
  };

  return (
    <section id="offers-section" className="py-12 sm:py-16 bg-[#fafaf9] border-b border-stone-200/90 font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight">
            Active Promotional Offers
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 font-normal">
            Use these coupon codes at checkout for additional instant savings.
          </p>
        </div>

        {/* 4 Offers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {ACTIVE_OFFERS.map((offer) => {
            const isCopied = copiedCode === offer.code;

            return (
              <div
                key={offer.id}
                className="rounded-2xl p-5 bg-white border border-stone-200/90 hover:border-stone-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500 text-stone-950">
                      {offer.badge}
                    </span>
                    <span className="text-base font-black text-stone-950">
                      {offer.discount}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-stone-950">
                    {offer.title}
                  </h3>

                  <p className="text-xs text-stone-500 mt-1 leading-relaxed font-normal">
                    {offer.description}
                  </p>
                </div>

                {/* Promo Code Copy Bar */}
                <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-stone-900 bg-stone-100 px-2.5 py-1 rounded">
                    {offer.code}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleCopyCode(offer.code)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isCopied
                        ? 'bg-stone-950 text-white'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200'
                    }`}
                  >
                    {isCopied ? 'Copied' : 'Copy'}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
