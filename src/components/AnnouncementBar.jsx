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
      
      {/* 1. Top Cyan Countdown Strip (Matching Reference Screenshot) */}
      <div className="bg-[#47c7f1] text-[#0f174a] py-1.5 px-4 font-sans text-xs font-bold border-b border-black/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center">
          
          <div className="flex items-center gap-1.5 uppercase tracking-wider text-xs sm:text-sm font-extrabold text-[#0a113a]">
            <span>MONSOON PROTECTION SALE</span>
            <span className="text-[11px] font-semibold text-[#162265]">ENDS IN:</span>
          </div>

          {/* Countdown Boxes */}
          <div className="flex items-center gap-1.5 font-mono text-xs font-black text-white">
            <div className="flex items-center gap-0.5">
              <span className="bg-[#19277c] px-1.5 py-0.5 rounded shadow-sm text-xs">
                {formatNumber(timeLeft.days)}
              </span>
              <span className="text-[10px] text-[#0f174a] font-sans font-bold">Days</span>
            </div>
            <span className="text-[#0f174a] font-bold">:</span>

            <div className="flex items-center gap-0.5">
              <span className="bg-[#19277c] px-1.5 py-0.5 rounded shadow-sm text-xs">
                {formatNumber(timeLeft.hours)}
              </span>
              <span className="text-[10px] text-[#0f174a] font-sans font-bold">Hours</span>
            </div>
            <span className="text-[#0f174a] font-bold">:</span>

            <div className="flex items-center gap-0.5">
              <span className="bg-[#19277c] px-1.5 py-0.5 rounded shadow-sm text-xs">
                {formatNumber(timeLeft.minutes)}
              </span>
              <span className="text-[10px] text-[#0f174a] font-sans font-bold">Mins</span>
            </div>
            <span className="text-[#0f174a] font-bold">:</span>

            <div className="flex items-center gap-0.5">
              <span className="bg-[#19277c] px-1.5 py-0.5 rounded shadow-sm text-xs">
                {formatNumber(timeLeft.seconds)}
              </span>
              <span className="text-[10px] text-[#0f174a] font-sans font-bold">Secs</span>
            </div>
          </div>

          {/* Hurry Badge */}
          <span className="inline-flex items-center gap-1 bg-[#19277c] text-white text-[10px] uppercase font-extrabold px-2.5 py-0.5 rounded shadow-sm hover:brightness-110 cursor-default">
            <Zap className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
            <span>HURRY!</span>
          </span>

        </div>
      </div>

      {/* 2. Red Marquee Scrolling Notice Strip (Matching Reference Screenshot) */}
      <div className="bg-[#d91e18] text-white py-1 text-xs font-semibold overflow-hidden relative shadow-inner">
        <div className="animate-marquee-infinite text-[11px] sm:text-xs tracking-wide">
          <span className="mx-4">{marqueeText}</span>
          <span className="mx-4">{marqueeText}</span>
        </div>
      </div>

    </div>
  );
}
