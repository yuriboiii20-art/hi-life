import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, MapPin, Award, Factory } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function AboutPreviewOenum() {
  return (
    <section className="py-14 sm:py-20 bg-[#fafaf9] border-b border-stone-200/90 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-stone-950 text-white p-8 sm:p-12 lg:p-16 border border-stone-800 shadow-xl relative overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
                <Award className="w-3.5 h-3.5" />
                <span>20 YEARS IN BANGALORE • JC ROAD</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
                Quality Covers. Trusted Protection.
              </h2>

              <p className="text-xs sm:text-sm text-stone-300 font-normal leading-relaxed max-w-2xl">
                Welcome to <strong>Hanuman Tarpaulins</strong>, located at JC Road, Bangalore. With over 20 years of experience in the industry, we specialize in supplying and manufacturing quality car covers, scooter covers, and custom protective covering solutions.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/about"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Learn About Hanuman Tarpaulins</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent('Hello Hanuman Tarpaulins, I am visiting your JC Road store for custom vehicle covers.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Visit JC Road Store</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-2xl font-black text-amber-400 block">20+ Years</span>
                <span className="text-xs text-stone-300 font-medium">Industry experience supplying vehicle covers in Bangalore</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-2xl font-black text-amber-400 block">In-House</span>
                <span className="text-xs text-stone-300 font-medium">Manufacturing expertise & customized covering solutions</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
