import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';

const HOTSPOT_POINTS = [
  {
    id: 1,
    number: "01 / 05",
    title: "Tailored 3D Fit",
    shortTitle: "Front Bumper & Hood Contour",
    description: "Every cover is cut to your car's exact CAD dimensions, sitting flush along the front fascia and hood lines instead of hanging loose or ballooning in crosswinds.",
    image: "/products/camo-car-daylight.jpg",
    xDesktop: 22,
    yDesktop: 68,
    xMobile: 24,
    yMobile: 68,
  },
  {
    id: 2,
    number: "02 / 05",
    title: "Water Repellence & Monsoon Armor",
    shortTitle: "Heavy-Duty Camo Shield",
    description: "Engineered multi-layer weather shield. Rain gathers into tight beads and rolls off immediately without capillary seepage through fabric or stitching holes.",
    image: "/products/camo-car-rain-monsoon.jpg",
    xDesktop: 38,
    yDesktop: 52,
    xMobile: 38,
    yMobile: 52,
  },
  {
    id: 3,
    number: "03 / 05",
    title: "Molded Mirror Enclosure",
    shortTitle: "Zero-Tension Mirror Pocket",
    description: "Custom-formed pocket sculpted to each side mirror, allowing natural fold geometry without pulling stress across the A-pillar fabric.",
    image: "/products/camo-car-shopfront.jpg",
    xDesktop: 66,
    yDesktop: 46,
    xMobile: 64,
    yMobile: 46,
  },
  {
    id: 4,
    number: "04 / 05",
    title: "Double-Bound Piping & Seams",
    shortTitle: "Reinforced Bound Stitching",
    description: "Industrial double-lock bound stitching traces the roofline, ensuring long-lasting seam integrity against torrential rains and high UV exposure.",
    image: "/products/camo-car-full-sidefit.jpg",
    xDesktop: 52,
    yDesktop: 34,
    xMobile: 52,
    yMobile: 34,
  },
  {
    id: 5,
    number: "05 / 05",
    title: "Elastic Hem & Centre Storm Lock",
    shortTitle: "Underbody Chassis Anchor",
    description: "Heavy-gauge elastic cords hug both bumpers underneath, reinforced by a central belly buckle belt that prevents turbulent winds from lifting the cover.",
    image: "/products/camo-car-street-profile.jpg",
    xDesktop: 84,
    yDesktop: 62,
    xMobile: 82,
    yMobile: 62,
  }
];

export default function HeroHotspotExperience({ onShopClick, onFinderClick }) {
  const [activePointIndex, setActivePointIndex] = useState(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0);

  const handleOpenDetailModal = (index = 0) => {
    setModalCurrentIndex(index);
    setDetailsModalOpen(true);
  };

  const handleNextModal = () => {
    setModalCurrentIndex((prev) => (prev + 1) % HOTSPOT_POINTS.length);
  };

  const handlePrevModal = () => {
    setModalCurrentIndex((prev) => (prev - 1 + HOTSPOT_POINTS.length) % HOTSPOT_POINTS.length);
  };

  return (
    <section className="relative w-full bg-[#111111] text-white font-sans select-none overflow-hidden">
      
      {/* Hero Visual Container */}
      <div className="relative w-full min-h-[580px] sm:min-h-[660px] lg:min-h-[760px] flex flex-col justify-between overflow-hidden">
        
        {/* Background Image: Tailored Military Camo Car Cover */}
        <picture className="absolute inset-0 z-0">
          <img
            src="/hi-life-assets/hero-camo-car.jpg"
            alt="Hi-Life Military Camouflage Tailored Car Cover"
            className="w-full h-full object-cover object-center filter brightness-[0.94]"
            loading="eager"
          />
        </picture>

        {/* Ambient Top Vignette to ensure Navbar & Headline Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none z-10" />

        {/* Top Content: Luxury Editorial Headline */}
        <div className="relative z-20 pt-10 sm:pt-14 lg:pt-18 px-5 sm:px-8 lg:px-14 max-w-4xl">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-stone-300 block mb-2 sm:mb-3">
            PREMIUM CAR COVERS BY HI-LIFE
          </span>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.05] drop-shadow-md">
            Built for owners who care.
          </h1>

          <p className="text-xs sm:text-sm text-stone-300 mt-2.5 sm:mt-3.5 font-normal tracking-wide flex items-center gap-2 drop-shadow-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>Touch a point on the cover to see it up close.</span>
          </p>
        </div>

        {/* Interactive Pulsing Hotspots Layer */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {HOTSPOT_POINTS.map((pt, idx) => {
            const isHovered = activePointIndex === idx;

            return (
              <div
                key={pt.id}
                style={{
                  top: `${pt.yDesktop}%`,
                  left: `${pt.xDesktop}%`,
                }}
                className="absolute pointer-events-auto -translate-x-1/2 -translate-y-1/2"
              >
                {/* Pulsing Hotspot Button in High-Performance Automotive Orange */}
                <button
                  type="button"
                  onClick={() => handleOpenDetailModal(idx)}
                  onMouseEnter={() => setActivePointIndex(idx)}
                  onMouseLeave={() => setActivePointIndex(null)}
                  className="relative group p-2.5 flex items-center justify-center focus:outline-none cursor-pointer"
                  aria-label={`View feature: ${pt.title}`}
                >
                  {/* Outer Pulsing Wave */}
                  <span className="absolute w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-orange-500/35 border border-orange-400 animate-ping opacity-75" />

                  {/* Inner Halo */}
                  <span className="absolute w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-orange-500/50 backdrop-blur-xs transition-transform group-hover:scale-125 duration-200" />

                  {/* Center Solid Dot */}
                  <span className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-orange-500 ring-2 ring-white shadow-lg shadow-orange-600/50 transition-transform group-hover:scale-110" />
                </button>

                {/* Desktop Hover Tooltip Preview */}
                {isHovered && (
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl border border-orange-200 text-stone-900 shadow-2xl z-30 animate-in fade-in slide-in-from-bottom-2 duration-150">
                    <span className="text-[9px] font-mono font-bold text-orange-600 uppercase tracking-widest block">
                      {pt.number} • {pt.shortTitle}
                    </span>
                    <h4 className="text-xs font-bold mt-0.5 text-stone-950">
                      {pt.title}
                    </h4>
                    <p className="text-[11px] text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                      {pt.description}
                    </p>
                    <span className="text-[10px] text-orange-600 font-bold mt-1.5 block">
                      Click to inspect details &rarr;
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Bar: Action Buttons */}
        <div className="relative z-20 pb-8 sm:pb-12 px-5 sm:px-8 lg:px-14 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-xl">
          {/* Vibrant Orange Primary CTA */}
          <button
            type="button"
            onClick={onShopClick}
            className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-orange-600/30 active:scale-[0.98] cursor-pointer"
          >
            <span>Shop Covers</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* White Translucent Outline CTA */}
          <button
            type="button"
            onClick={() => handleOpenDetailModal(0)}
            className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-xl bg-white/90 hover:bg-white text-stone-950 border border-white text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
          >
            <span>View All Details</span>
          </button>
        </div>

      </div>

      {/* Feature Detail Modal (When user clicks any hotspot point) */}
      {detailsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-stone-950/70 backdrop-blur-md transition-opacity animate-in fade-in"
            onClick={() => setDetailsModalOpen(false)}
          />

          {/* Modal Card (Crisp White Card with Orange Accents) */}
          <div className="relative w-full max-w-2xl bg-white text-stone-900 rounded-3xl border border-orange-100 shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-orange-100 flex items-center justify-between bg-orange-50/50">
              <span className="text-xs font-mono font-bold text-orange-600 tracking-wider">
                {HOTSPOT_POINTS[modalCurrentIndex].number}
              </span>
              <button
                type="button"
                onClick={() => setDetailsModalOpen(false)}
                className="p-1.5 rounded-full text-stone-500 hover:text-stone-950 hover:bg-orange-100 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* Photo */}
              <div className="relative aspect-4/3 sm:aspect-auto bg-stone-100 overflow-hidden">
                <img
                  src={HOTSPOT_POINTS[modalCurrentIndex].image}
                  alt={HOTSPOT_POINTS[modalCurrentIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Info */}
              <div className="p-6 sm:p-7 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600 block mb-1">
                    {HOTSPOT_POINTS[modalCurrentIndex].shortTitle}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-stone-950">
                    {HOTSPOT_POINTS[modalCurrentIndex].title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                    {HOTSPOT_POINTS[modalCurrentIndex].description}
                  </p>
                </div>

                <div className="pt-4 border-t border-orange-100 flex items-center justify-between">
                  {/* Prev / Next stepper */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrevModal}
                      className="p-2 rounded-xl bg-stone-100 hover:bg-orange-50 text-stone-700 hover:text-orange-600 transition-colors cursor-pointer"
                      aria-label="Previous Feature"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextModal}
                      className="p-2 rounded-xl bg-stone-100 hover:bg-orange-50 text-stone-700 hover:text-orange-600 transition-colors cursor-pointer"
                      aria-label="Next Feature"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Find My Cover button */}
                  <button
                    type="button"
                    onClick={() => {
                      setDetailsModalOpen(false);
                      if (onFinderClick) onFinderClick();
                    }}
                    className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-orange-600/25 cursor-pointer"
                  >
                    Find My Cover &rarr;
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
