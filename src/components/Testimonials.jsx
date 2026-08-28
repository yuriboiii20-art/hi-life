import React from 'react';
import { Star, MessageSquare, ShieldCheck, AlertCircle, Car } from 'lucide-react';
import { CUSTOMER_REVIEWS, REVIEW_NOTICE_TEXT } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 bg-[#fafaf9] border-b border-stone-200/90 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight">
            Verified Customer Reviews
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 font-normal">
            Real feedback on fitment accuracy, water repellency, and everyday durability.
          </p>
        </div>

        {/* Testimonials 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {CUSTOMER_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="rounded-2xl p-5 bg-white border border-stone-200/90 hover:border-stone-400 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                
                {/* Star rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-stone-400">
                    {rev.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs text-stone-700 leading-relaxed italic font-normal">
                  “{rev.review}”
                </p>

              </div>

              {/* Author & Car Info */}
              <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="text-xs font-bold text-stone-950 flex items-center gap-1">
                    <span>{rev.author}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  </h4>
                  <p className="text-[10px] text-stone-400">{rev.location}</p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold text-stone-900 block">
                    {rev.vehicle.split('(')[0]}
                  </span>
                  <span className="text-[9px] text-stone-400 block truncate max-w-[100px]">
                    {rev.coverType}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
