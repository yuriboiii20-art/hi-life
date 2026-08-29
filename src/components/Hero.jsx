import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Waves,
  Snowflake,
  RotateCcw
} from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 1,
    image: "/products/camo-car-daylight.jpg",
    tag: "100% Waterproof & Dustproof",
    title: "ALL-WEATHER CAMO ARMOR",
    subtitle: "Custom-fit protective vehicle covers engineered with military-grade camouflage Oxford fabric, scratch-free inner fleece, and storm-proof centre lock buckles."
  },
  {
    id: 2,
    image: "/products/camo-car-rain-monsoon.jpg",
    tag: "Monsoon Proof Tested",
    title: "100% WATERPROOF MONSOON SHIELD",
    subtitle: "Tested in heavy rainfall with zero moisture penetration, keeping your vehicle pristine, corrosion-free, and dust-resistant."
  },
  {
    id: 3,
    image: "/products/camo-car-shopfront.jpg",
    tag: "Storefront Tested Fit",
    title: "PREMIUM CUSTOM VEHICLE TAILORING",
    subtitle: "Precision-engineered mirror pockets, sleek headlights contouring, and front-to-rear elastic tension."
  },
  {
    id: 4,
    image: "/products/camo-packaging-bag.jpg",
    tag: "Official Hi-Life Product",
    title: "GENUINE BRANDED PACKAGING",
    subtitle: "Includes premium zippered heavy-duty tote storage bag with high-density protective carry straps."
  },
  {
    id: 5,
    image: "/products/camo-car-full-sidefit.jpg",
    tag: "Full Body SUV & Sedan Cut",
    title: "UNMATCHED PROFILE COVERAGE",
    subtitle: "Complete bumper-to-bumper vehicle coverage tailored to 50+ Indian hatchbacks, sedans, and SUVs."
  },
  {
    id: 6,
    image: "/products/camo-bike-covered.jpg",
    tag: "Cars & Two-Wheelers",
    title: "PRECISION FIT FOR EVERY VEHICLE",
    subtitle: "Custom-tailored for Indian vehicle models, motorcycles, and scooters with dedicated mirror pockets and elastic hems."
  },
  {
    id: 7,
    image: "/products/camo-car-night-view.jpg",
    tag: "Storm-Lock Wind Defense",
    title: "BUILT FOR 24/7 OUTDOOR PARKING",
    subtitle: "Underbody centre locking strap, ballistic camouflage weave, and reinforced dual-stitched seams ensure complete stability in extreme weather."
  }
];

export default function Hero({ onFindCoverClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-slide every 1 second (1000ms)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
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

  const scrollToFinder = () => {
    if (onFindCoverClick) {
      onFindCoverClick();
      return;
    }
    const el = document.getElementById('vehicle-finder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section 
      className="relative w-full overflow-hidden bg-stone-950 font-sans select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slide Image Backgrounds with Smooth Fade */}
      <div className="relative w-full min-h-[440px] sm:min-h-[520px] lg:min-h-[580px] flex items-center">
        
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                isActive ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
              {/* Dark Gradient Overlay for Crisp Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/45 lg:bg-gradient-to-r lg:from-stone-950/95 lg:via-stone-950/75 lg:to-stone-950/20" />
            </div>
          );
        })}

        {/* Foreground Overlaid Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-18">
          <div className="max-w-2xl space-y-3.5 sm:space-y-5 text-white">
            
            {/* Top Brand Label & Tag */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>HI-LIFE AUTOMOTIVE</span>
              </div>

              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500 text-stone-950 text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
                <Shield className="w-3 h-3 fill-stone-950" />
                <span>{activeSlide.tag}</span>
              </div>
            </div>

            {/* Overlaid Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-md">
              {activeSlide.title}
            </h1>

            {/* Overlaid Description */}
            <p className="text-xs sm:text-sm text-stone-200 font-normal leading-relaxed max-w-xl drop-shadow-xs">
              {activeSlide.subtitle}
            </p>

            {/* Micro Feature Indicators */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-0.5">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-stone-200 text-[11px] sm:text-xs">
                <Waves className="w-3.5 h-3.5 text-amber-400" />
                <span>Water & Dust Proof</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-stone-200 text-[11px] sm:text-xs">
                <Snowflake className="w-3.5 h-3.5 text-amber-400" />
                <span>UV Heat Block</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-stone-200 text-[11px] sm:text-xs">
                <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                <span>2-Min Quick Fit</span>
              </div>
            </div>

            {/* CTA Buttons - Compact on Mobile */}
            <div className="pt-2 sm:pt-3 flex flex-row items-center gap-2 sm:gap-3">
              <button
                onClick={scrollToFinder}
                type="button"
                className="flex-1 sm:flex-initial px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl bg-white hover:bg-stone-100 text-stone-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Find Cover</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <Link
                to="/products"
                className="flex-1 sm:flex-initial px-4 py-2.5 sm:px-5 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm text-center border border-white/20 backdrop-blur-md transition-all"
              >
                All Covers
              </Link>
            </div>

          </div>
        </div>

        {/* Previous Slide Arrow - Compact on Mobile */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Next Slide Arrow - Compact on Mobile */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-3 sm:bottom-6 right-4 sm:right-8 z-20 flex items-center gap-1.5">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all rounded-full h-1.5 cursor-pointer ${
                idx === currentSlide
                  ? 'w-6 bg-amber-400'
                  : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
