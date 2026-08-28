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
        return <Tag className="w-5 h-5 text-rose-600" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-emerald-600" />;
      case 'Umbrella':
        return <Umbrella className="w-5 h-5 text-amber-600" />;
      case 'Gift':
        return <Gift className="w-5 h-5 text-purple-600" />;
      default:
        return <Percent className="w-5 h-5 text-[#19277c]" />;
    }
  };

  return (
    <section id="offers-section" className="py-16 sm:py-20 bg-[#f4f6f8] border-b border-slate-200 font-sans scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#19277c] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#f97316]" />
            <span>Exclusive Promotions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19277c] tracking-tight">
            Special Offers & Savings
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Take advantage of exclusive seasonal offers and coupon codes on custom-fitted Hi-Life car covers.
          </p>
        </div>

        {/* 4 Offers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {ACTIVE_OFFERS.map((offer) => {
            const isCopied = copiedCode === offer.code;

            return (
              <div
                key={offer.id}
                className="relative rounded-2xl p-6 bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#19277c]/40 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                      {renderOfferIcon(offer.iconName)}
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200">
                      {offer.badge}
                    </span>
                  </div>

                  {/* Title & Discount */}
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#19277c] transition-colors">
                    {offer.title}
                  </h3>

                  <p className="text-xl font-black text-[#dc2626] mt-1">
                    {offer.discount}
                  </p>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                    {offer.description}
                  </p>
                </div>

                {/* Promo Code Copy Bar */}
                <div className="pt-4 mt-4 border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between bg-slate-100 px-3 py-2 rounded-lg border border-slate-200">
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">
                        Coupon Code
                      </span>
                      <span className="font-mono text-xs font-black text-slate-900 tracking-wider">
                        {offer.code}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopyCode(offer.code)}
                      className={`px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1 transition-all ${
                        isCopied
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#19277c] hover:bg-[#16215b] text-white'
                      }`}
                      title="Copy promo code"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3 h-3 stroke-[3]" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[10px] text-slate-400 italic text-center font-normal">
                    {offer.terms}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
