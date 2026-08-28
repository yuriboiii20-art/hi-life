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
      <div className="rounded-3xl border border-stone-200/90 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        
        {/* Top Match Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-stone-200/80">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-stone-900 text-white shadow-sm">
              <Check className="w-5 h-5 stroke-[2.5]" />
            </span>
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-700 font-bold">
                Guaranteed Fitment Verified
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-stone-950">
                {brand} {model} ({year})
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-800 border border-stone-200 text-xs font-bold uppercase tracking-wider">
              {bodyType || 'Custom 3D Fit'}
            </span>
            {onReset && (
              <button
                onClick={onReset}
                className="text-xs text-stone-700 hover:text-stone-950 px-3.5 py-1.5 rounded-xl bg-stone-100 border border-stone-300 hover:bg-stone-200 transition-colors flex items-center gap-1.5 font-bold"
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
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-stone-50 border border-stone-200/90 shadow-md group">
              <img
                src={currentImage}
                alt={`${coverType.name} tailored for ${brand} ${model}`}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              
              <div className="absolute top-3 left-3">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow bg-stone-900 text-white">
                  {coverType.badge}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 bg-stone-950/90 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-stone-800 flex items-center justify-between text-xs shadow text-white">
                <div className="flex items-center gap-2 text-white font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>In Stock & Ready for Tailoring</span>
                </div>
                <span className="text-stone-400 font-medium">{coverType.leadTime}</span>
              </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex items-center gap-2.5">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx
                        ? 'border-stone-900 ring-2 ring-stone-900/20'
                        : 'border-stone-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Assurance Box */}
            <div className="p-4 sm:p-5 rounded-3xl bg-stone-50 border border-stone-200 space-y-2 text-xs text-stone-700">
              <div className="flex items-center gap-2 text-stone-950 font-bold">
                <ShieldCheck className="w-4 h-4 text-stone-900" />
                <span>Hi-Life 100% Fitment Guarantee</span>
              </div>
              <p className="text-stone-600 text-[11px] leading-relaxed font-normal">
                Precision-cut to your specific {brand} {model} ({year}) dimensions with exact mirror & antenna positions. 7-day seamless replacement warranty.
              </p>
              <div className="pt-2 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-800 font-bold">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-stone-900" /> Free Express Delivery Pan-India
                </span>
                <span>COD Available</span>
              </div>
            </div>

          </div>

          {/* Right: Specifications & Pricing */}
          <div className="lg:col-span-7 space-y-5">
            
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-amber-700">
                Recommended Cover Selection
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                {coverType.name}
              </h2>
              <p className="text-sm font-medium text-stone-600 mt-1">
                {coverType.tagline}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-5 rounded-3xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-4 shadow-sm">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-stone-950">
                    ₹{calculatedPrice}
                  </span>
                  <span className="text-base text-stone-400 line-through">
                    ₹{calculatedOriginalPrice}
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-amber-500 text-stone-950 text-xs font-black shadow-sm">
                    Save {discountPercent}%
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 mt-1 font-medium">
                  * Inclusive of all taxes & free pan-India express shipping.
                </p>
              </div>

              <span className="px-3.5 py-1.5 rounded-xl bg-red-600 text-white text-xs font-black shadow-sm">
                Code: HILIFE15 Active
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-stone-700 leading-relaxed font-normal">
              {coverType.description}
            </p>

            {/* Specs Grid */}
            <div className="rounded-3xl bg-stone-50 p-5 border border-stone-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900">
                <Layers className="w-4 h-4 text-stone-900" />
                <span>Fabric & Construction Specs</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 rounded-2xl bg-white border border-stone-200">
                  <p className="text-[10px] text-stone-500 uppercase font-semibold">Material</p>
                  <p className="font-bold text-stone-900 truncate">{coverType.fabricSpecs.material}</p>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-stone-200">
                  <p className="text-[10px] text-stone-500 uppercase font-semibold">Fabric Density</p>
                  <p className="font-bold text-stone-900">{coverType.fabricSpecs.fabricWeight}</p>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-stone-200">
                  <p className="text-[10px] text-stone-500 uppercase font-semibold">Waterproofing</p>
                  <p className="font-bold text-stone-900">{coverType.fabricSpecs.waterproofing}</p>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-stone-200">
                  <p className="text-[10px] text-stone-500 uppercase font-semibold">Inner Lining</p>
                  <p className="font-bold text-stone-900 truncate">{coverType.fabricSpecs.lining}</p>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-stone-200">
                  <p className="text-[10px] text-stone-500 uppercase font-semibold">UV Rating</p>
                  <p className="font-bold text-stone-900">{coverType.fabricSpecs.uvProtection}</p>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-stone-200">
                  <p className="text-[10px] text-stone-500 uppercase font-semibold">Stitching</p>
                  <p className="font-bold text-stone-900 truncate">{coverType.fabricSpecs.stitchType}</p>
                </div>
              </div>
            </div>

            {/* Included Features */}
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-900">
                Included Features for {model}:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {coverType.includedFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-stone-800">
                    <Check className="w-4 h-4 text-stone-900 shrink-0 stroke-[2.5]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center gap-3">
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25d366]" />
                <span>Enquire on WhatsApp</span>
              </a>

              <button
                onClick={() => onBuyNow && onBuyNow(result)}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-stone-950 hover:bg-black text-white font-bold text-sm uppercase tracking-wider shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
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
