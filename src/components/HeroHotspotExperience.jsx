import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Volume2, VolumeX, Eye } from 'lucide-react';

const HOTSPOT_POINTS = [
  {
    id: 1,
    number: "01 / 05",
    title: "Tailored fit",
    description: "A car cover cut to your car's own lines, so it sits close instead of hanging loose.",
    image: "/products/camo-car-daylight.jpg",
    // Position percentage on vehicle image [x, y]
    x: 32, // hood / front contour
    y: 52
  },
  {
    id: 2,
    number: "02 / 05",
    title: "Water repellence",
    description: "A water-repellent outer coating. Rain gathers into beads and rolls away, keeping your car dry.",
    image: "/products/camo-car-rain-monsoon.jpg",
    x: 54, // windshield / roof
    y: 35
  },
  {
    id: 3,
    number: "03 / 05",
    title: "Mirror pocket",
    description: "A pocket shaped to each mirror, so the cover follows the car exactly without tension.",
    image: "/products/camo-car-shopfront.jpg",
    x: 48, // side mirror
    y: 48
  },
  {
    id: 4,
    number: "04 / 05",
    title: "Contrast piping & bound seams",
    description: "A clean line that traces the roof contour and double-lock bound finishes every seam.",
    image: "/products/camo-car-full-sidefit.jpg",
    x: 70, // roofline & side curve
    y: 36
  },
  {
    id: 5,
    number: "05 / 05",
    title: "Elastic hem & centre lock belt",
    description: "An elastic hem draws in beneath the bumpers with heavy underbody strap so wind cannot lift the cover.",
    image: "/products/camo-car-street-profile.jpg",
    x: 82, // rear bumper / bottom edge
    y: 72
  }
];

export default function HeroHotspotExperience({ onShopClick, onFinderClick }) {
  const [activePointIndex, setActivePointIndex] = useState(0);
  const [isAutoTour, setIsAutoTour] = useState(false);

  // Auto-tour timer when user clicks "View all details" or starts auto tour
  useEffect(() => {
    if (!isAutoTour) return;
    const interval = setInterval(() => {
      setActivePointIndex((prev) => (prev + 1) % HOTSPOT_POINTS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoTour]);

  const activePoint = HOTSPOT_POINTS[activePointIndex];

  const handleNext = () => {
    setActivePointIndex((prev) => (prev + 1) % HOTSPOT_POINTS.length);
  };

  const handlePrev = () => {
    setActivePointIndex((prev) => (prev - 1 + HOTSPOT_POINTS.length) % HOTSPOT_POINTS.length);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full bg-stone-950 text-white font-sans overflow-hidden select-none">
      
      {/* Background Image Stage */}
      <div className="relative w-full min-h-[540px] sm:min-h-[620px] lg:min-h-[700px] flex items-center justify-center">
        
        {HOTSPOT_POINTS.map((pt, idx) => {
          const isActive = idx === activePointIndex;
          return (
            <div
              key={pt.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={pt.image}
                alt={pt.title}
                className="w-full h-full object-cover object-center filter brightness-[0.88]"
                loading="eager"
              />
              {/* Oenum-style cinematic vignetting */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/70 lg:bg-gradient-to-r lg:from-stone-950/90 lg:via-stone-950/40 lg:to-stone-950/30" />
            </div>
          );
        })}

        {/* Hotspot Interactive Pins on Vehicle Stage */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="relative w-full h-full max-w-7xl mx-auto">
            {HOTSPOT_POINTS.map((pt, idx) => {
              const isSelected = idx === activePointIndex;
              return (
                <button
                  key={pt.id}
                  type="button"
                  onClick={() => {
                    setActivePointIndex(idx);
                    setIsAutoTour(false);
                  }}
                  style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                  aria-label={`Hotspot ${pt.number}: ${pt.title}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group p-2 focus:outline-none cursor-pointer"
                >
                  <span className="relative flex items-center justify-center">
                    {/* Pulsing ring */}
                    <span className={`absolute inline-flex h-9 w-9 rounded-full transition-all duration-300 ${
                      isSelected 
                        ? 'bg-white/40 animate-ping opacity-75' 
                        : 'bg-white/10 group-hover:bg-white/30'
                    }`} />
                    
                    {/* Outer border ring */}
                    <span className={`relative inline-flex items-center justify-center rounded-full h-6 w-6 border transition-all duration-300 shadow-md ${
                      isSelected
                        ? 'bg-white border-amber-400 text-stone-950 scale-125'
                        : 'bg-stone-900/80 border-white/60 text-white group-hover:scale-110 group-hover:border-white'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Top Floating Intro Box (Oenum Header Placement) */}
        <div className="absolute top-6 sm:top-10 left-4 sm:left-8 lg:left-12 z-30 max-w-lg space-y-2 pointer-events-auto">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-400">
            Premium Car Covers • Hanuman Tarpaulins
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[0.95] drop-shadow-md">
            Built for owners who care.
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 font-normal tracking-wide drop-shadow-xs">
            Touch a point on the cover to see it up close.
          </p>
        </div>

        {/* Bottom Left Detail Card (Oenum Hotspot Card) */}
        <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-8 lg:left-12 z-30 max-w-sm sm:max-w-md w-[calc(100%-2rem)] sm:w-auto pointer-events-auto">
          <div className="p-5 sm:p-6 rounded-3xl bg-stone-900/90 backdrop-blur-xl border border-white/15 shadow-2xl space-y-2.5">
            
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-xs font-black text-amber-400 tracking-wider">
                {activePoint.number}
              </span>
              <div className="flex items-center gap-1">
                {HOTSPOT_POINTS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActivePointIndex(i);
                      setIsAutoTour(false);
                    }}
                    className={`h-1 rounded-full transition-all cursor-pointer ${
                      i === activePointIndex ? 'w-5 bg-amber-400' : 'w-2 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {activePoint.title}
            </h2>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">
              {activePoint.description}
            </p>

            {/* Actions Bar */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  if (onFinderClick) onFinderClick();
                  else scrollToSection('vehicle-finder');
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-stone-100 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xs"
              >
                <span>Find Your Cover</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setIsAutoTour(!isAutoTour)}
                className="text-[11px] font-semibold text-stone-300 hover:text-white underline cursor-pointer"
              >
                {isAutoTour ? 'Pause Tour' : 'Auto Tour (5 Points)'}
              </button>
            </div>

          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-8 lg:right-12 z-30 flex items-center gap-2 pointer-events-auto">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Feature Point"
            className="w-10 h-10 rounded-full bg-stone-900/80 hover:bg-black text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Feature Point"
            className="w-10 h-10 rounded-full bg-stone-900/80 hover:bg-black text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
