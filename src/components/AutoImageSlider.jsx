import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDE_DATA = [
  {
    id: 1,
    title: "100% Waterproof Monsoon Defense",
    subtitle: "Engineered for torrential rain and wet weather with zero capillary leak",
    badge: "Monsoon Barrier",
    image: "/products/camo-car-rain-monsoon.jpg",
    tag: "Monsoon Proof"
  },
  {
    id: 2,
    title: "Custom 3D Contoured Car Fitment",
    subtitle: "Laser-cut contour for every Indian SUV, Sedan & Hatchback",
    badge: "100% Guaranteed Fit",
    image: "/products/camo-car-daylight.jpg",
    tag: "Contoured Cut"
  },
  {
    id: 3,
    title: "Genuine Hi-Life Branded Packaging",
    subtitle: "Includes original heavy-duty zippered tote storage and carry bag",
    badge: "Official Packaging",
    image: "/products/camo-packaging-bag.jpg",
    tag: "Original Hi-Life"
  },
  {
    id: 4,
    title: "Evening Storefront Showcase",
    subtitle: "Custom-fitted with amber glow front visibility and full bumper seal",
    badge: "Precision Fit",
    image: "/products/camo-car-shopfront.jpg",
    tag: "Custom Tailoring"
  },
  {
    id: 5,
    title: "Full Profile SUV & Car Shield",
    subtitle: "Extended contouring covering side panels, wheel arches, and mirrors",
    badge: "Full Body Armor",
    image: "/products/camo-car-full-sidefit.jpg",
    tag: "Maximum Coverage"
  },
  {
    id: 6,
    title: "Two-Wheeler & Motorcycle Shield",
    subtitle: "Full-body cover for bikes and scooters with tailored mirror accommodations",
    badge: "Bikes & Scooters",
    image: "/products/camo-bike-covered.jpg",
    tag: "Bike Protection"
  },
  {
    id: 7,
    title: "24/7 Heavy-Duty Outdoor Night Armor",
    subtitle: "Reinforced center underbody belt and dual front-rear elastic hems",
    badge: "High-Wind Stability",
    image: "/products/camo-car-night-view.jpg",
    tag: "Storm Guard"
  }
];

export default function AutoImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Preload all slider images for instant transitions
  useEffect(() => {
    SLIDE_DATA.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Continuous auto-play interval every 1 second (1000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDE_DATA.length);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
                loading="eager"
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
