import React, { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProtectionSolution({ onFinderClick }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white text-stone-900 font-sans select-none border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-orange-600 block">
            THE SOLUTION
          </span>

          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-950 tracking-tight leading-tight">
            Premium Protection. Effortlessly.
          </h2>

          <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed max-w-2xl">
            Every detail is engineered for a smooth installation, a precise fit, and dependable protection that complements your car's premium appeal.
          </p>
        </div>

        {/* Interactive Comparison Slider Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseUp={() => setIsDragging(false)}
          onTouchEnd={() => setIsDragging(false)}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-stone-200 cursor-ew-resize"
        >
          {/* Covered Image (Underneath) */}
          <img
            src="/hi-life-assets/slider-covered.jpg"
            alt="Protected Car with Hi-Life Military Camouflage Cover"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />

          {/* Uncovered Image (Clipped Overlay on Left) */}
          <div
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src="/hi-life-assets/slider-uncovered.jpg"
              alt="Uncovered Car Exposed to Dirt and Weather"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Draggable Divider Handle */}
          <div
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            className="absolute top-0 bottom-0 w-1.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] z-20 -translate-x-1/2 flex items-center justify-center cursor-ew-resize"
          >
            {/* Center Handle Knob in Vibrant Orange */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-600 text-white shadow-xl shadow-orange-600/40 border-2 border-white flex items-center justify-center gap-0.5 text-xs font-bold transition-transform active:scale-95">
              <span>‹</span>
              <span>›</span>
            </div>
          </div>

          {/* Badges on Bottom Left & Bottom Right */}
          <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
            <span className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider uppercase border border-white/20">
              Uncovered
            </span>
          </div>

          <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
            <span className="px-3.5 py-1.5 rounded-full bg-orange-600/95 backdrop-blur-md text-white text-[11px] font-bold tracking-wider uppercase border border-orange-400 shadow-md">
              Hi-Life Protected
            </span>
          </div>
        </div>

        {/* Bottom CTA / Action */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500 font-medium text-center sm:text-left">
            Drag the handle horizontally to compare paint preservation under everyday environmental exposure.
          </p>

          <button
            type="button"
            onClick={onFinderClick}
            className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md shadow-orange-600/25 cursor-pointer shrink-0"
          >
            <span>Find My Cover</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
