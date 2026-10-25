import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ANNOUNCEMENTS = [
  "Exclusive prepaid discounts on checkout!",
  "Free all-India express shipping on all orders!",
  "Quality Covers • Trusted Protection • 20 Years at JC Road, Bangalore",
  "Use code HILIFE10 for an extra 10% instant discount!"
];

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
  };

  return (
    <div className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 text-white font-sans select-none relative z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-2.5 flex items-center justify-between text-xs sm:text-[13px] font-medium tracking-wide">
        
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          type="button"
          aria-label="Previous announcement"
          className="p-1 hover:opacity-80 transition-opacity cursor-pointer shrink-0"
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>

        {/* Announcement Text (Animated Fade) */}
        <div className="flex-1 text-center truncate px-2">
          <span 
            key={currentIndex} 
            className="inline-block animate-in fade-in duration-300 font-semibold text-white tracking-wide drop-shadow-sm"
          >
            {ANNOUNCEMENTS[currentIndex]}
          </span>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          type="button"
          aria-label="Next announcement"
          className="p-1 hover:opacity-80 transition-opacity cursor-pointer shrink-0"
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>

      </div>
    </div>
  );
}
