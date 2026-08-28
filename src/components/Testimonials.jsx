import React, { useState, useEffect, useRef } from 'react';
import { Star, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Automatically cycle reviews every 2 seconds (2000ms)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CUSTOMER_REVIEWS.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CUSTOMER_REVIEWS.length) % CUSTOMER_REVIEWS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CUSTOMER_REVIEWS.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 40) {
      handleNext();
    }
    if (touchStartX.current - touchEndX.current < -40) {
      handlePrev();
    }
  };

  const activeReview = CUSTOMER_REVIEWS[currentIndex];

  return (
    <section 
      className="py-6 sm:py-8 bg-[#fafaf9] border-t border-stone-200/90 font-sans select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Compact Carousel Card */}
        <div className="relative rounded-2xl bg-white border border-stone-200/90 p-4 sm:p-5 shadow-xs transition-all">
          
          <div className="flex items-center justify-between gap-3 pb-2 border-b border-stone-100">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] font-bold text-stone-900 ml-1">
                Verified Owner
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            </div>

            <span className="text-[10px] font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full">
              {activeReview.vehicle}
            </span>
          </div>

          {/* Active Review Text */}
          <div className="py-3 min-h-[72px] sm:min-h-[64px] flex items-center">
            <p className="text-xs sm:text-sm text-stone-800 leading-relaxed italic font-normal">
              "{activeReview.review}"
            </p>
          </div>

          {/* Author & Footer Row with Controls */}
          <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2">
            <div>
              <p className="text-xs font-bold text-stone-950">
                {activeReview.author} <span className="text-stone-400 font-normal text-[10px]">({activeReview.location})</span>
              </p>
            </div>

            {/* Carousel Dots & Controls */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {CUSTOMER_REVIEWS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to review ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === currentIndex ? 'w-4 bg-stone-950' : 'w-1.5 bg-stone-300 hover:bg-stone-400'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1 ml-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous review"
                  className="p-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next review"
                  className="p-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
