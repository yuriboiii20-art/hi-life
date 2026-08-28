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
      <div className="rounded-3xl border border-neutral-200 bg-white shadow-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        
        {/* Top Match Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-neutral-200">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-black text-white">
              <Check className="w-5 h-5 stroke-[2.5]" />
            </span>
            <div>
              <span className="text-xs uppercase tracking-wider text-black font-black">
                Guaranteed Fitment Verified
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-black">
                {brand} {model} ({year})
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-neutral-100 text-black border border-neutral-300 text-xs font-bold uppercase tracking-wider">
              {bodyType || 'Custom 3D Fit'}
            </span>
            {onReset && (
              <button
                onClick={onReset}
                className="text-xs text-neutral-700 hover:text-black px-3 py-1.5 rounded-lg bg-neutral-100 border border-neutral-300 hover:bg-neutral-200 transition-colors flex items-center gap-1.5 font-bold"
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
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 shadow-md group">
              <img
                src={currentImage}
                alt={`${coverType.name} tailored for ${brand} ${model}`}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              
              <div className="absolute top-3 left-3">
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow bg-black text-white">
                  {coverType.badge}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 bg-black/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-neutral-800 flex items-center justify-between text-xs shadow text-white">
                <div className="flex items-center gap-2 text-white font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>In Stock & Ready for Tailoring</span>
                </div>
                <span className="text-neutral-400 font-medium">{coverType.leadTime}</span>
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
                        ? 'border-black ring-2 ring-black/20'
                        : 'border-neutral-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Assurance Box */}
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2 text-xs text-neutral-700">
              <div className="flex items-center gap-2 text-black font-black">
                <ShieldCheck className="w-4 h-4 text-black" />
                <span>Hi-Life 100% Fitment Guarantee</span>
              </div>
              <p className="text-neutral-600 text-[11px] leading-relaxed font-normal">
                Precision-cut to your specific {brand} {model} ({year}) dimensions with exact mirror & antenna positions. 7-day seamless replacement warranty.
              </p>
              <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-[11px] text-black font-bold">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-black" /> Free Express Delivery Pan-India
                </span>
                <span>COD Available</span>
              </div>
            </div>

          </div>

          {/* Right: Specifications & Pricing */}
          <div className="lg:col-span-7 space-y-5">
            
            <div>
              <span className="text-xs uppercase tracking-wider font-black text-black">
                Recommended Cover Selection
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-black mt-1">
                {coverType.name}
              </h2>
              <p className="text-sm font-medium text-neutral-600 mt-1">
                {coverType.tagline}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-5 rounded-2xl bg-neutral-100 border border-neutral-300 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-black">
                    ₹{calculatedPrice}
                  </span>
                  <span className="text-base text-neutral-400 line-through">
                    ₹{calculatedOriginalPrice}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-black text-white text-xs font-bold">
                    Save {discountPercent}%
                  </span>
                </div>
                <p className="text-[11px] text-neutral-500 mt-1 font-medium">
                  * Inclusive of all taxes & free pan-India express shipping.
                </p>
              </div>

              <span className="px-3 py-1 rounded-lg bg-red-600 text-white text-xs font-black">
                Code: HILIFE15 Active
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-700 leading-relaxed font-normal">
              {coverType.description}
            </p>

            {/* Specs Grid */}
            <div className="rounded-2xl bg-neutral-50 p-4 border border-neutral-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black">
                <Layers className="w-4 h-4 text-black" />
                <span>Fabric & Construction Specs</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-white border border-neutral-200">
                  <p className="text-[10px] text-neutral-500 uppercase font-semibold">Material</p>
                  <p className="font-bold text-black truncate">{coverType.fabricSpecs.material}</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-neutral-200">
                  <p className="text-[10px] text-neutral-500 uppercase font-semibold">Fabric Density</p>
                  <p className="font-bold text-black">{coverType.fabricSpecs.fabricWeight}</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-neutral-200">
                  <p className="text-[10px] text-neutral-500 uppercase font-semibold">Waterproofing</p>
                  <p className="font-bold text-black">{coverType.fabricSpecs.waterproofing}</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-neutral-200">
                  <p className="text-[10px] text-neutral-500 uppercase font-semibold">Inner Lining</p>
                  <p className="font-bold text-black truncate">{coverType.fabricSpecs.lining}</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-neutral-200">
                  <p className="text-[10px] text-neutral-500 uppercase font-semibold">UV Rating</p>
                  <p className="font-bold text-black">{coverType.fabricSpecs.uvProtection}</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-neutral-200">
                  <p className="text-[10px] text-neutral-500 uppercase font-semibold">Stitching</p>
                  <p className="font-bold text-black truncate">{coverType.fabricSpecs.stitchType}</p>
                </div>
              </div>
            </div>

            {/* Included Features */}
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-black">
                Included Features for {model}:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {coverType.includedFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-800">
                    <Check className="w-4 h-4 text-black shrink-0 stroke-[2.5]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center gap-3">
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white font-black text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25d366]" />
                <span>Enquire on WhatsApp</span>
              </a>

              <button
                onClick={() => onBuyNow && onBuyNow(result)}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-black hover:bg-neutral-800 text-white font-black text-sm uppercase tracking-wider shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all"
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
