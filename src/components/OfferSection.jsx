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

  const renderOfferIcon = (iconName) => {
    switch (iconName) {
      case 'Tag':
        return <Tag className="w-5 h-5 text-amber-400" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-amber-400" />;
      case 'Umbrella':
        return <Umbrella className="w-5 h-5 text-amber-400" />;
      case 'Gift':
        return <Gift className="w-5 h-5 text-amber-400" />;
      default:
        return <Percent className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="offers-section" className="py-16 sm:py-24 bg-white border-b border-stone-200/90 font-sans scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Exclusive Promotions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight">
            Special Offers & Savings
          </h2>

          <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
            Take advantage of exclusive seasonal offers and coupon codes on custom-fitted Hi-Life car covers.
          </p>
        </div>

        {/* 4 Offers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {ACTIVE_OFFERS.map((offer) => {
            const isCopied = copiedCode === offer.code;

            return (
              <div
                key={offer.id}
                className="relative rounded-3xl p-6 sm:p-7 bg-stone-50/60 hover:bg-stone-50 border border-stone-200/90 hover:border-stone-400 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.04)] hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-stone-900 flex items-center justify-center shadow-sm">
                      {renderOfferIcon(offer.iconName)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500 text-stone-950 font-black shadow-sm">
                      {offer.badge}
                    </span>
                  </div>

                  {/* Title & Discount */}
                  <h3 className="text-base font-bold text-stone-950 group-hover:text-stone-900 transition-colors">
                    {offer.title}
                  </h3>

                  <p className="text-xl font-black text-stone-950 mt-1">
                    {offer.discount}
                  </p>

                  <p className="text-xs text-stone-600 mt-2 leading-relaxed font-normal">
                    {offer.description}
                  </p>
                </div>

                {/* Promo Code Copy Bar */}
                <div className="pt-4 mt-4 border-t border-stone-200/80 space-y-2">
                  <div className="flex items-center justify-between bg-white px-3.5 py-2.5 rounded-2xl border border-stone-200 shadow-sm">
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase tracking-wider text-stone-400 font-bold">
                        Coupon Code
                      </span>
                      <span className="font-mono text-xs font-black text-stone-900 tracking-wider">
                        {offer.code}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopyCode(offer.code)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        isCopied
                          ? 'bg-stone-950 text-white'
                          : 'bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-200'
                      }`}
                    >
                      {isCopied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
