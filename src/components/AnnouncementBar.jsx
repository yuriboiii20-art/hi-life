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
      
      {/* 1. Top Black & White Countdown Strip */}
      <div className="bg-black text-white py-1.5 px-4 font-sans text-xs font-bold border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center">
          
          <div className="flex items-center gap-1.5 uppercase tracking-wider text-xs sm:text-sm font-extrabold text-white">
            <span>MONSOON PROTECTION SALE</span>
            <span className="text-[11px] font-semibold text-neutral-400">ENDS IN:</span>
          </div>

          {/* Countdown Boxes */}
          <div className="flex items-center gap-1.5 font-mono text-xs font-black text-white">
            <div className="flex items-center gap-0.5">
              <span className="bg-neutral-900 border border-neutral-700 px-2 py-0.5 rounded shadow-sm text-xs text-white">
                {formatNumber(timeLeft.days)}
              </span>
              <span className="text-[10px] text-neutral-400 font-sans font-bold">Days</span>
            </div>
            <span className="text-neutral-500 font-bold">:</span>

            <div className="flex items-center gap-0.5">
              <span className="bg-neutral-900 border border-neutral-700 px-2 py-0.5 rounded shadow-sm text-xs text-white">
                {formatNumber(timeLeft.hours)}
              </span>
              <span className="text-[10px] text-neutral-400 font-sans font-bold">Hours</span>
            </div>
            <span className="text-neutral-500 font-bold">:</span>

            <div className="flex items-center gap-0.5">
              <span className="bg-neutral-900 border border-neutral-700 px-2 py-0.5 rounded shadow-sm text-xs text-white">
                {formatNumber(timeLeft.minutes)}
              </span>
              <span className="text-[10px] text-neutral-400 font-sans font-bold">Mins</span>
            </div>
            <span className="text-neutral-500 font-bold">:</span>

            <div className="flex items-center gap-0.5">
              <span className="bg-neutral-900 border border-neutral-700 px-2 py-0.5 rounded shadow-sm text-xs text-white">
                {formatNumber(timeLeft.seconds)}
              </span>
              <span className="text-[10px] text-neutral-400 font-sans font-bold">Secs</span>
            </div>
          </div>

          {/* Hurry Badge */}
          <span className="inline-flex items-center gap-1 bg-white text-black text-[10px] uppercase font-black px-2.5 py-0.5 rounded shadow-sm">
            <Zap className="w-2.5 h-2.5 fill-black text-black" />
            <span>HURRY!</span>
          </span>

        </div>
      </div>

      {/* 2. Sleek Monochrome Scrolling Notice Strip */}
      <div className="bg-[#111111] text-neutral-300 py-1 text-xs font-semibold overflow-hidden relative border-b border-neutral-800">
        <div className="animate-marquee-infinite text-[11px] sm:text-xs tracking-wide">
          <span className="mx-4">{marqueeText}</span>
          <span className="mx-4">{marqueeText}</span>
        </div>
      </div>

    </div>
  );
}
