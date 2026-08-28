import React from 'react';
import { Star, MessageSquare, ShieldCheck, AlertCircle, Car } from 'lucide-react';
import { CUSTOMER_REVIEWS, REVIEW_NOTICE_TEXT } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-[#fafaf9] border-b border-stone-200/90 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
            <span>Customer Experiences</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight">
            Trusted by Car Owners Across India
          </h2>

          <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
            Read feedback on fitment accuracy, water repellency, and everyday durability from owners across Indian cities.
          </p>

          {/* Notice */}
          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-[11px] font-medium">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>{REVIEW_NOTICE_TEXT}</span>
            </span>
          </div>
        </div>

        {/* Testimonials 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {CUSTOMER_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl p-6 sm:p-7 bg-white border border-stone-200/90 hover:border-stone-400 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.05)] hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                
                {/* Star rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-bold text-stone-400">
                    {rev.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic font-normal">
                  “{rev.review}”
                </p>

                {/* Aspect pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {rev.aspects.map((aspect, idx) => (
                    <span key={idx} className="text-[10px] font-bold text-stone-800 bg-stone-100 border border-stone-200 px-2.5 py-0.5 rounded-md">
                      {aspect}
                    </span>
                  ))}
                </div>

              </div>

              {/* Author & Car Info */}
              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-stone-950 flex items-center gap-1">
                    <span>{rev.author}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  </h4>
                  <p className="text-[10px] text-stone-500 font-normal">{rev.location}</p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold text-stone-900 flex items-center gap-1 justify-end">
                    <Car className="w-3 h-3 text-stone-700" />
                    <span>{rev.vehicle.split('(')[0]}</span>
                  </span>
                  <span className="text-[9px] text-stone-400 block truncate max-w-[110px]">
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
