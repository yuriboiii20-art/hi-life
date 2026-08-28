import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, Zap, ShieldCheck } from 'lucide-react';

export default function AnnouncementBar() {
  // Live countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 45,
    seconds: 18
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  const marqueeText = "Site-Wide Free Express Shipping (No Min. Order Value)   •   🌧️ Monsoon Waterproof Protection Sale Live   •   🏷️ Use Code 'HILIFE15' for 15% OFF + Free Duffle Bag   •   🛡️ 100% Custom 3D Vehicle Fitment Guarantee   •   📦 Dispatches in 24 Hours Across India   •   ";

  return (
    <div className="w-full relative z-40">
      
      {/* 1. Top Nordic Minimalist Countdown Strip */}
      <div className="bg-[#1c1917] text-stone-200 py-2 px-4 font-sans text-xs font-semibold border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-center">
          
          <div className="flex items-center gap-1.5 uppercase tracking-wider text-xs sm:text-sm font-black text-white">
            <span>MONSOON PROTECTION SALE</span>
            <span className="text-[11px] font-bold text-amber-400">ENDS IN:</span>
          </div>

          {/* Countdown Boxes */}
          <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-stone-100">
            <div className="flex items-center gap-0.5">
              <span className="bg-stone-800/90 border border-stone-700 px-2 py-0.5 rounded-md shadow-sm text-xs text-stone-100 font-bold">
                {formatNumber(timeLeft.days)}
              </span>
              <span className="text-[10px] text-stone-400 font-sans font-medium">Days</span>
            </div>
            <span className="text-stone-500 font-bold">:</span>

            <div className="flex items-center gap-0.5">
              <span className="bg-stone-800/90 border border-stone-700 px-2 py-0.5 rounded-md shadow-sm text-xs text-stone-100 font-bold">
                {formatNumber(timeLeft.hours)}
              </span>
              <span className="text-[10px] text-stone-400 font-sans font-medium">Hours</span>
            </div>
            <span className="text-stone-500 font-bold">:</span>

            <div className="flex items-center gap-0.5">
              <span className="bg-stone-800/90 border border-stone-700 px-2 py-0.5 rounded-md shadow-sm text-xs text-stone-100 font-bold">
                {formatNumber(timeLeft.minutes)}
              </span>
              <span className="text-[10px] text-stone-400 font-sans font-medium">Mins</span>
            </div>
            <span className="text-stone-500 font-bold">:</span>

            <div className="flex items-center gap-0.5">
              <span className="bg-stone-800/90 border border-stone-700 px-2 py-0.5 rounded-md shadow-sm text-xs text-stone-100 font-bold">
                {formatNumber(timeLeft.seconds)}
              </span>
              <span className="text-[10px] text-stone-400 font-sans font-medium">Secs</span>
            </div>
          </div>

          {/* Hurry Badge */}
          <span className="inline-flex items-center gap-1 bg-amber-500 text-stone-950 text-[10px] uppercase font-black px-2.5 py-0.5 rounded-full shadow-sm">
            <Zap className="w-2.5 h-2.5 fill-stone-950 text-stone-950" />
            <span>HURRY!</span>
          </span>

        </div>
      </div>

      {/* 2. Warm Stone Notice Marquee */}
      <div className="bg-[#f5f5f4] text-stone-700 py-1.5 text-xs font-semibold overflow-hidden relative border-b border-stone-200/80">
        <div className="animate-marquee-infinite text-[11px] sm:text-xs tracking-wide font-semibold text-stone-800">
          <span className="mx-4">{marqueeText}</span>
          <span className="mx-4">{marqueeText}</span>
        </div>
      </div>

    </div>
  );
}
