import React from 'react';
import { 
  X, 
  ShieldCheck, 
  Droplets, 
  Sun, 
  Layers, 
  Check, 
  MessageCircle, 
  Truck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function ProductDetailModal({ cover, onClose, onSelectForFinder }) {
  if (!cover) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 my-8 text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${cover.badgeColor}`}>
            {cover.badge}
          </span>
          <span className="text-xs text-[#19277c] font-bold uppercase">
            Hi-Life Engineering Series
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {cover.name}
        </h2>
        <p className="text-sm font-semibold text-slate-600 mt-1">
          {cover.tagline}
        </p>

        {/* Hero Visual */}
        <div className="relative aspect-[16/8] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 my-5 shadow-sm">
          <img
            src={cover.heroImage}
            alt={cover.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
            <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg">
              Material: {cover.fabricSpecs.material}
            </span>
            <span className="bg-emerald-600 px-3 py-1 rounded-lg font-bold">
              {cover.fabricSpecs.waterproofing}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 text-sm text-slate-700">
          <p className="leading-relaxed font-normal">
            {cover.description}
          </p>

          {/* Technical Specs Grid */}
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#19277c] flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Full Fabric & Fitment Profile</span>
            </h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                <p className="text-[10px] text-slate-500 uppercase font-semibold">Fabric Density</p>
                <p className="font-bold text-slate-900">{cover.fabricSpecs.fabricWeight}</p>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                <p className="text-[10px] text-slate-500 uppercase font-semibold">Inner Lining</p>
                <p className="font-bold text-slate-900 truncate">{cover.fabricSpecs.lining}</p>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                <p className="text-[10px] text-slate-500 uppercase font-semibold">UV Defense</p>
                <p className="font-bold text-amber-600">{cover.fabricSpecs.uvProtection}</p>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                <p className="text-[10px] text-slate-500 uppercase font-semibold">Seam Technology</p>
                <p className="font-bold text-slate-900 truncate">{cover.fabricSpecs.stitchType}</p>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                <p className="text-[10px] text-slate-500 uppercase font-semibold">Starting Price</p>
                <p className="font-bold text-[#19277c]">From ₹{cover.basePrice}</p>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                <p className="text-[10px] text-slate-500 uppercase font-semibold">Dispatch Time</p>
                <p className="font-bold text-slate-900">{cover.leadTime}</p>
              </div>
            </div>
          </div>

          {/* Included Features */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Key Included Features:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cover.includedFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-800">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Actions */}
        <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-500 uppercase block font-semibold">Starting Price</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-[#19277c]">₹{cover.basePrice}</span>
              <span className="text-sm text-slate-400 line-through">₹{cover.originalPrice}</span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                Save {cover.discountPercent}%
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(`Hello Hi-Life Team! I am enquiring about ${cover.name} for my car.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl bg-[#25d366] text-white text-xs font-bold flex items-center gap-1.5 hover:bg-[#20ba59] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25d366]" />
              <span>WhatsApp Query</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                if (onSelectForFinder) onSelectForFinder(cover.id);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#19277c] hover:bg-[#16215b] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow transition-all hover:scale-[1.01]"
            >
              <span>Find Fit for My Car</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
