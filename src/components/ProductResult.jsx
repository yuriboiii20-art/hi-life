import React, { useState } from 'react';
import { 
  ShieldCheck, 
  MessageCircle, 
  ShoppingBag, 
  Truck, 
  RotateCcw, 
  Sparkles, 
  Check, 
  Layers, 
  Info,
  Calendar,
  Car,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function ProductResult({ result, onReset, onBuyNow }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!result) return null;

  const {
    brand,
    model,
    bodyType,
    year,
    coverType,
    calculatedPrice,
    calculatedOriginalPrice,
    discountPercent
  } = result;

  const images = coverType.detailImages && coverType.detailImages.length > 0
    ? coverType.detailImages
    : [coverType.heroImage];

  const currentImage = images[selectedImageIndex] || coverType.heroImage;

  const whatsappUrl = BUSINESS_CONFIG.whatsapp.getEnquiryUrl(
    brand,
    model,
    year,
    coverType.name,
    calculatedPrice
  );

  return (
    <div id="product-result-view" className="scroll-mt-24 mt-8">
      <div className="rounded-2xl border-2 border-[#19277c]/20 bg-white shadow-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        
        {/* Top Match Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300">
              <Check className="w-5 h-5 stroke-[2.5]" />
            </span>
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-700 font-extrabold">
                Guaranteed Fitment Verified
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#19277c]">
                {brand} {model} ({year})
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold uppercase tracking-wider">
              {bodyType || 'Custom 3D Fit'}
            </span>
            {onReset && (
              <button
                onClick={onReset}
                className="text-xs text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-colors flex items-center gap-1.5 font-semibold"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Change Vehicle</span>
              </button>
            )}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-8 items-start">
          
          {/* Left: Product Images & Assurance */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md group">
              <img
                src={currentImage}
                alt={`${coverType.name} tailored for ${brand} ${model}`}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              
              <div className="absolute top-3 left-3">
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow ${coverType.badgeColor}`}>
                  {coverType.badge}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-200 flex items-center justify-between text-xs shadow">
                <div className="flex items-center gap-2 text-emerald-700 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span>In Stock & Ready for Tailoring</span>
                </div>
                <span className="text-slate-500 font-medium">{coverType.leadTime}</span>
              </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex items-center gap-2.5">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx
                        ? 'border-[#19277c] ring-2 ring-[#19277c]/30'
                        : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Assurance Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2 text-[#19277c] font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Hi-Life 100% Fitment Guarantee</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Precision-cut to your specific {brand} {model} ({year}) dimensions with exact mirror & antenna positions. 7-day seamless replacement warranty.
              </p>
              <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-emerald-700 font-bold">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" /> Free Express Delivery Pan-India
                </span>
                <span>COD Available</span>
              </div>
            </div>

          </div>

          {/* Right: Specifications & Pricing */}
          <div className="lg:col-span-7 space-y-5">
            
            <div>
              <span className="text-xs uppercase tracking-wider font-extrabold text-[#19277c]">
                Recommended Cover Selection
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                {coverType.name}
              </h2>
              <p className="text-sm font-medium text-slate-600 mt-1">
                {coverType.tagline}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-5 rounded-xl bg-[#eff6ff] border border-[#bfdbfe] flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-[#19277c]">
                    ₹{calculatedPrice}
                  </span>
                  <span className="text-base text-slate-400 line-through">
                    ₹{calculatedOriginalPrice}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold">
                    Save {discountPercent}%
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 font-medium">
                  * Inclusive of all taxes & free pan-India express shipping.
                </p>
              </div>

              <span className="px-3 py-1 rounded-md bg-[#dc2626] text-white text-xs font-extrabold">
                Code: HILIFE15 Active
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-700 leading-relaxed">
              {coverType.description}
            </p>

            {/* Specs Grid */}
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                <Layers className="w-4 h-4 text-[#19277c]" />
                <span>Fabric & Construction Specs</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">Material</p>
                  <p className="font-bold text-slate-900 truncate">{coverType.fabricSpecs.material}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">Fabric Density</p>
                  <p className="font-bold text-slate-900">{coverType.fabricSpecs.fabricWeight}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">Waterproofing</p>
                  <p className="font-bold text-blue-700">{coverType.fabricSpecs.waterproofing}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">Inner Lining</p>
                  <p className="font-bold text-slate-900 truncate">{coverType.fabricSpecs.lining}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">UV Rating</p>
                  <p className="font-bold text-amber-600">{coverType.fabricSpecs.uvProtection}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">Stitching</p>
                  <p className="font-bold text-slate-900 truncate">{coverType.fabricSpecs.stitchType}</p>
                </div>
              </div>
            </div>

            {/* Included Features */}
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Included Features for {model}:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {coverType.includedFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-800">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white font-extrabold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25d366]" />
                <span>Enquire on WhatsApp</span>
              </a>

              <button
                onClick={() => onBuyNow && onBuyNow(result)}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#19277c] hover:bg-[#16215b] text-white font-extrabold text-sm uppercase tracking-wider shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Buy Now (Order Request)</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
