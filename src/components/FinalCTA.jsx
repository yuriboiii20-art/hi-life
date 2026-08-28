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
    <section className="py-16 sm:py-20 bg-[#f8fafc] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-black via-neutral-900 to-black text-white p-8 sm:p-12 lg:p-14 shadow-2xl border border-neutral-800">
          
          <div className="relative z-10 max-w-3xl space-y-5">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>{BUSINESS_CONFIG.tagline}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Give Your Car the Protection It Deserves
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
              Find the perfect custom-fitted, 100% waterproof, and UV-shielded car cover for your exact vehicle make, model, and year today.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-3">
              <button
                onClick={scrollToFinder}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-neutral-200 text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Find Your Cover</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-neutral-700 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-white" />
                <span>Contact Hi-Life</span>
              </Link>
            </div>

            {/* Quick Contact Pill */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-neutral-400">
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
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-black" /> Direct WhatsApp Assistance
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
