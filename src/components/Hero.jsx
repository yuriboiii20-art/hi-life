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
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1800&q=85",
    tag: "100% Waterproof & Leakproof",
    badge: "Hydrostatic Defense",
    title: "ALL-WEATHER ARMOR",
    subtitle: "Custom-fit protective car covers engineered with military-grade 300D Oxford fabric, scratch-free inner fleece, and storm-proof centre lock buckles."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1800&q=85",
    tag: "Laser-Cut 3D Contoured Fit",
    badge: "SUV & Sedan Fitment",
    title: "PRECISION FIT FOR EVERY CAR",
    subtitle: "Custom-tailored for 50+ Indian vehicle models with dedicated side-mirror pockets, antenna covers, and snug front-rear elastic."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1800&q=85",
    tag: "UV & Solar Heat Defense",
    badge: "Ceramic Paint Safe",
    title: "PAINT PROTECTION STANDARD",
    subtitle: "Soft spun-cotton fleece lining prevents clear-coat scratches while high-density ULY coating reflects damaging ultraviolet radiation."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85",
    tag: "Storm-Lock Wind Buckle",
    badge: "Heavy-Duty Security",
    title: "BUILT FOR EXTREME WEATHER",
    subtitle: "Underbody centre locking strap and reinforced double-stitched seams ensure complete stability in turbulent monsoon winds."
  }
];

export default function Hero({ onFindCoverClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-slide every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3500);

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
      <div className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center">
        
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
              {/* Dark Gradient Overlay for Maximum Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-950/40 lg:bg-gradient-to-r lg:from-stone-950/95 lg:via-stone-950/75 lg:to-stone-950/20" />
            </div>
          );
        })}

        {/* Foreground Overlaid Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="max-w-2xl space-y-5 sm:space-y-6 text-white">
            
            {/* Top Brand Label & Tag */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>HI-LIFE AUTOMOTIVE</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-stone-950 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-sm">
                <Shield className="w-3.5 h-3.5 fill-stone-950" />
                <span>{activeSlide.tag}</span>
              </div>
            </div>

            {/* Overlaid Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight sm:leading-none drop-shadow-md">
              {activeSlide.title}
            </h1>

            {/* Overlaid Description */}
            <p className="text-xs sm:text-base text-stone-200 font-normal leading-relaxed max-w-xl drop-shadow-sm">
              {activeSlide.subtitle}
            </p>

            {/* Micro Feature Indicators */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-stone-200 text-xs">
                <Waves className="w-4 h-4 text-amber-400" />
                <span className="font-semibold">Waterproof & Dust Proof</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-stone-200 text-xs">
                <Snowflake className="w-4 h-4 text-amber-400" />
                <span className="font-semibold">UV & Heat Block</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-stone-200 text-xs">
                <RotateCcw className="w-4 h-4 text-amber-400" />
                <span className="font-semibold">Quick 2-Min Fit</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={scrollToFinder}
                type="button"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-stone-100 text-stone-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Find Your Car Cover</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/products"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm text-center border border-white/20 backdrop-blur-md transition-all"
              >
                View Cover Catalogue
              </Link>
            </div>

          </div>
        </div>

        {/* Previous Slide Arrow */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Next Slide Arrow */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer hover:scale-105"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-5 sm:bottom-8 right-6 sm:right-12 z-20 flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all rounded-full h-2 cursor-pointer ${
                idx === currentSlide
                  ? 'w-8 bg-amber-400'
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
