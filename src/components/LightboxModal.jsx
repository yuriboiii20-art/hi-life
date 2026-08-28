import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function LightboxModal({ items, activeIndex, onClose, onNavigate }) {
  if (activeIndex === null || !items || !items[activeIndex]) return null;

  const currentItem = items[activeIndex];

  // Handle keyboard navigation (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((activeIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((activeIndex + 1) % items.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, items, onClose, onNavigate]);

  const handlePrev = (e) => {
    e.stopPropagation();
    onNavigate((activeIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    onNavigate((activeIndex + 1) % items.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Top action bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
        <div className="text-white">
          <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
            Hi-Life Real Fitment Gallery
          </span>
          <p className="text-sm font-bold text-slate-200">
            {activeIndex + 1} / {items.length}
          </p>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev Button */}
      {items.length > 1 && (
        <button
          onClick={handlePrev}
          className="absolute left-3 sm:left-6 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all hover:scale-110 focus:outline-none"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Main Image Container */}
      <div 
        className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-charcoal-950 shadow-2xl">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[65vh] w-auto object-contain mx-auto"
          />
        </div>

        {/* Caption Card */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <h3 className="text-lg sm:text-xl font-bold text-white">
            {currentItem.title}
          </h3>
          <p className="text-sm text-slate-300 mt-1">
            {currentItem.caption}
          </p>
          <div className="flex items-center justify-center gap-2 mt-2">
            {currentItem.tags && currentItem.tags.map((tag, idx) => (
              <span key={idx} className="text-[11px] font-semibold text-brand-400 bg-brand-500/10 border border-brand-500/20 px-2 py-0.5 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Next Button */}
      {items.length > 1 && (
        <button
          onClick={handleNext}
          className="absolute right-3 sm:right-6 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all hover:scale-110 focus:outline-none"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
