import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDE_DATA = [
  {
    id: 1,
    title: "100% Waterproof & Hydrostatic Shield",
    subtitle: "Engineered for torrential monsoons with zero capillary leak",
    badge: "All-Weather Defense",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
    tag: "Monsoon Proof"
  },
  {
    id: 2,
    title: "Custom 3D Laser-Cut Fitment",
    subtitle: "Contoured for every Indian SUV, Sedan & Hatchback",
    badge: "100% Guaranteed Fit",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=85",
    tag: "Laser Tailored"
  },
  {
    id: 3,
    title: "Executive Luxury Paint Protection",
    subtitle: "Ultra-soft spun cotton fleece inner lining protects ceramic coat & clear coat",
    badge: "Scratch-Free Inner Layer",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85",
    tag: "Paint Safe"
  },
  {
    id: 4,
    title: "Heavy-Duty Storm Lock & Wind Defense",
    subtitle: "Reinforced center underbody belt and dual front-rear elastic hems",
    badge: "High-Wind Stability",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    tag: "Storm Guard"
  }
];

export default function AutoImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-play interval every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDE_DATA.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDE_DATA.length) % SLIDE_DATA.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDE_DATA.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handlePrev();
    }
  };

  return (
    <section 
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6 sm:my-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9] max-h-[480px] bg-stone-900 shadow-xl border border-stone-200/80">
        
        {/* Slides */}
        {SLIDE_DATA.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />

              {/* Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-stone-950/90 via-stone-950/50 to-transparent" />

              {/* Slide Content */}
              <div className="absolute inset-0 flex flex-col justify-end sm:justify-center p-5 sm:p-8 lg:p-12 text-white max-w-2xl">
                <div className="space-y-2 sm:space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500 text-stone-950 text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm w-fit">
                    <span>{slide.badge}</span>
                  </div>

                  <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                    {slide.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-200 font-normal leading-relaxed max-w-lg hidden sm:block">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Previous & Next Control Buttons */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer hover:scale-105 border border-white/10"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer hover:scale-105 border border-white/10"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-3 sm:bottom-4 right-4 sm:right-8 z-20 flex items-center gap-1.5 sm:gap-2">
          {SLIDE_DATA.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`transition-all rounded-full h-1.5 sm:h-2 cursor-pointer ${
                dotIdx === currentIndex
                  ? 'w-6 sm:w-8 bg-amber-400'
                  : 'w-1.5 sm:w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
