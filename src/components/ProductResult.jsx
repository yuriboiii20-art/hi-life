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
import { getVehicleModelImage } from '../data/vehicles';
import { useCart } from '../context/CartContext';

export default function ProductResult({ result, onReset, onBuyNow }) {
  const { addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!result) return null;

  const {
    brand,
    brandId,
    model,
    modelId,
    bodyType,
    modelImage,
    year,
    coverType,
    calculatedPrice,
    calculatedOriginalPrice,
    discountPercent
  } = result;

  const primaryCarImage = modelImage || getVehicleModelImage(brandId, modelId, bodyType);

  const images = [
    primaryCarImage,
    ...(coverType.detailImages && coverType.detailImages.length > 0
      ? coverType.detailImages
      : [coverType.heroImage])
  ];

  const currentImage = images[selectedImageIndex] || primaryCarImage;

  const whatsappUrl = BUSINESS_CONFIG.whatsapp.getEnquiryUrl(
    brand,
    model,
    year,
    coverType.name,
    calculatedPrice
  );

  return (
    <div id="product-result-view" className="scroll-mt-20 mt-6">
      <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-5 sm:p-8 relative overflow-hidden shadow-sm">
        
        {/* Top Match Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-stone-200/80">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-amber-700 font-bold block">
              Verified Fitment
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-stone-950">
              {brand} {model} ({year})
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold">
              {bodyType || 'Custom 3D Fit'}
            </span>
            {onReset && (
              <button
                onClick={onReset}
                className="text-xs text-stone-600 hover:text-stone-950 underline cursor-pointer"
              >
                Change Vehicle
              </button>
            )}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-6 items-start">
          
          {/* Left: Product Images */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-50 border border-stone-200/90">
              <img
                src={currentImage}
                alt={`${coverType.name} tailored for ${brand} ${model}`}
                className="w-full h-full object-cover object-center"
              />
              
              <div className="absolute top-3 left-3">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-stone-900 text-white shadow-xs">
                  {coverType.badge}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex items-center gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      selectedImageIndex === idx
                        ? 'border-stone-900'
                        : 'border-stone-200 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Specs & Action */}
          <div className="lg:col-span-7 space-y-4">
            
            <div>
              <h2 className="text-2xl font-black text-stone-950">
                {coverType.name}
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                {coverType.tagline}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-baseline justify-between gap-4">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-black text-stone-950">
                    ₹{calculatedPrice}
                  </span>
                  <span className="text-sm text-stone-400 line-through">
                    ₹{calculatedOriginalPrice}
                  </span>
                  <span className="text-xs font-bold text-stone-900 bg-amber-100 px-2 py-0.5 rounded">
                    Save {discountPercent}%
                  </span>
                </div>
                <p className="text-[10px] text-stone-500 mt-0.5 font-medium">
                  Free Pan-India Delivery • Cash on Delivery Available
                </p>
              </div>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                <p className="text-[10px] text-stone-400 uppercase font-semibold">Material</p>
                <p className="font-bold text-stone-900 truncate">{coverType.fabricSpecs.material}</p>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                <p className="text-[10px] text-stone-400 uppercase font-semibold">Density</p>
                <p className="font-bold text-stone-900">{coverType.fabricSpecs.fabricWeight}</p>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                <p className="text-[10px] text-stone-400 uppercase font-semibold">Waterproof</p>
                <p className="font-bold text-stone-900">{coverType.fabricSpecs.waterproofing}</p>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                <p className="text-[10px] text-stone-400 uppercase font-semibold">Lining</p>
                <p className="font-bold text-stone-900 truncate">{coverType.fabricSpecs.lining}</p>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                <p className="text-[10px] text-stone-400 uppercase font-semibold">UV Rating</p>
                <p className="font-bold text-stone-900">{coverType.fabricSpecs.uvProtection}</p>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                <p className="text-[10px] text-stone-400 uppercase font-semibold">Dispatch</p>
                <p className="font-bold text-stone-900">{coverType.leadTime}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={() => {
                  addToCart({
                    coverId: coverType.id,
                    name: coverType.name,
                    brand,
                    brandId,
                    model,
                    modelId,
                    bodyType,
                    year,
                    calculatedPrice,
                    modelImage: primaryCarImage,
                    coverType
                  });
                }}
                className="w-full sm:flex-1 py-2.5 sm:py-3.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-xs sm:text-sm text-center border border-stone-300 transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={() => onBuyNow && onBuyNow(result)}
                className="w-full sm:flex-1 py-2.5 sm:py-3.5 px-4 rounded-xl bg-stone-950 hover:bg-black text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xs transition-all cursor-pointer"
              >
                Order Custom Fit
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
