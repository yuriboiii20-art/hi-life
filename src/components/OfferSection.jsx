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
        return <Tag className="w-5 h-5 text-white" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-white" />;
      case 'Umbrella':
        return <Umbrella className="w-5 h-5 text-white" />;
      case 'Gift':
        return <Gift className="w-5 h-5 text-white" />;
      default:
        return <Percent className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="offers-section" className="py-16 sm:py-20 bg-[#f8fafc] border-b border-neutral-200 font-sans scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Exclusive Promotions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
            Special Offers & Savings
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-normal">
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
                className="relative rounded-2xl p-6 bg-white hover:bg-neutral-50 border border-neutral-200 hover:border-black shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shadow-md">
                      {renderOfferIcon(offer.iconName)}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-black text-white">
                      {offer.badge}
                    </span>
                  </div>

                  {/* Title & Discount */}
                  <h3 className="text-base font-bold text-black group-hover:text-black transition-colors">
                    {offer.title}
                  </h3>

                  <p className="text-xl font-black text-black mt-1">
                    {offer.discount}
                  </p>

                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed font-normal">
                    {offer.description}
                  </p>
                </div>

                {/* Promo Code Copy Bar */}
                <div className="pt-4 mt-4 border-t border-neutral-100 space-y-2">
                  <div className="flex items-center justify-between bg-neutral-100 px-3 py-2 rounded-xl border border-neutral-200">
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase tracking-wider text-neutral-500 font-bold">
                        Coupon Code
                      </span>
                      <span className="font-mono text-xs font-black text-black tracking-wider">
                        {offer.code}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopyCode(offer.code)}
                      className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${
                        isCopied
                          ? 'bg-black text-white'
                          : 'bg-white hover:bg-neutral-200 text-black border border-neutral-300'
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
