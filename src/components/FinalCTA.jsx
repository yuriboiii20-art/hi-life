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
    <section className="py-16 sm:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 text-white p-8 sm:p-12 lg:p-16 shadow-2xl shadow-orange-500/20 border border-orange-400">
          
          <div className="relative z-10 max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>{BUSINESS_CONFIG.tagline}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Give Your Car the Protection It Deserves
            </h2>

            <p className="text-sm sm:text-base text-orange-50 font-normal leading-relaxed">
              Find the perfect custom-fitted, 100% waterproof, and UV-shielded car cover for your exact vehicle make, model, and year today.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-3">
              <button
                onClick={scrollToFinder}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white hover:bg-orange-50 text-orange-600 font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <span>Find Your Cover</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-orange-700/60 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/20 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-white" />
                <span>Contact Hi-Life</span>
              </Link>
            </div>

            {/* Quick Contact Pill */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-orange-100">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-300" />
                Support Available 9:30 AM – 7:30 PM
              </span>
              <span>•</span>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 font-bold inline-flex items-center gap-1.5 bg-emerald-600 px-3 py-1 rounded-full shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" /> Direct WhatsApp Assistance
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
