import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, PhoneCall, Sparkles, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function FinalCTA({ onFindCoverClick }) {
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

  return (
    <section className="py-16 sm:py-24 bg-[#fafaf9] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-stone-800">
          
          <div className="relative z-10 max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{BUSINESS_CONFIG.tagline}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Give Your Car the Protection It Deserves
            </h2>

            <p className="text-sm sm:text-base text-stone-300 font-normal leading-relaxed">
              Find the perfect custom-fitted, 100% waterproof, and UV-shielded car cover for your exact vehicle make, model, and year today.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-3">
              <button
                onClick={scrollToFinder}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white hover:bg-stone-100 text-stone-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <span>Find Your Cover</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-stone-700 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-white" />
                <span>Contact Hi-Life</span>
              </Link>
            </div>

            {/* Quick Contact Pill */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-stone-400">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Support Available 9:30 AM – 7:30 PM
              </span>
              <span>•</span>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-stone-950" /> Direct WhatsApp Assistance
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
