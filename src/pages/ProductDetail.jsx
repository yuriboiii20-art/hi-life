import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Truck, 
  ShoppingBag, 
  Check, 
  MapPin, 
  RotateCcw, 
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { CATALOG_PRODUCTS } from '../data/catalogProducts';
import { useCart } from '../context/CartContext';
import QuickOrderModal from '../components/QuickOrderModal';

export default function ProductDetail() {
  const { productSlug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Find product by slug or id, fallback to first product
  const product = CATALOG_PRODUCTS.find((p) => p.slug === productSlug || p.id === productSlug) || CATALOG_PRODUCTS[0];

  const [activeImage, setActiveImage] = useState(product.gallery[0] || product.image);
  const [selectedGrade, setSelectedGrade] = useState(product.series || 'Nexus');
  const [selectedAntenna, setSelectedAntenna] = useState('pocket'); // 'pocket' or 'sharkfin'
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState('');
  const [deliveryChecked, setDeliveryChecked] = useState(false);
  const [deliverySpeed, setDeliverySpeed] = useState('standard');
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  useEffect(() => {
    setActiveImage(product.gallery[0] || product.image);
    window.scrollTo(0, 0);
  }, [productSlug]);

  const handlePincodeCheck = (e) => {
    e.preventDefault();
    if (pincode.trim().length === 6) {
      setDeliveryChecked(true);
      if (pincode.startsWith('56') || pincode.startsWith('57') || pincode.startsWith('58') || pincode.startsWith('59') || pincode.startsWith('60') || pincode.startsWith('50')) {
        setDeliverySpeed('express');
      } else {
        setDeliverySpeed('standard');
      }
    }
  };

  const handleAddToCart = () => {
    addToCart({
      coverId: product.id,
      name: product.name,
      brand: product.brand,
      model: product.model,
      year: '2023-2026',
      calculatedPrice: product.price,
      basePrice: product.price,
      quantity,
      modelImage: activeImage,
      coverType: {
        name: `${selectedGrade} Car Cover`,
        badge: selectedGrade
      }
    });
  };

  const handleBuyNow = () => {
    setCheckoutModalOpen(true);
  };

  return (
    <div className="bg-white text-stone-900 font-sans select-none min-h-screen">
      
      {/* Breadcrumb Strip */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3 text-xs text-stone-500 flex items-center gap-2 border-b border-orange-50">
        <Link to="/" className="hover:text-orange-600">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-orange-600">Products</Link>
        <span>/</span>
        <span className="text-stone-900 font-semibold truncate">{product.name}</span>
      </div>

      {/* Main 2-Column Product Detail View */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Photo Gallery with Thumbnails */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Stage Image */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden bg-stone-50 border border-orange-100 shadow-md">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />

              {product.sale && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                    Sale
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 sm:gap-3">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(img)}
                  className={`relative aspect-4/3 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImage === img
                      ? 'border-orange-600 ring-2 ring-orange-600/30'
                      : 'border-stone-200 opacity-70 hover:opacity-100 hover:border-orange-300'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Buy Box & Options */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Badges */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-[11px] font-bold uppercase tracking-wider border border-orange-200">
                20+ Years Trusted Quality
              </span>
              <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-[11px] font-bold uppercase tracking-wider border border-orange-200">
                Water Repellent
              </span>
            </div>

            {/* Product Title */}
            <div>
              <h1 className="font-editorial text-2xl sm:text-4xl font-normal text-stone-950 tracking-tight leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Features Bullet Points */}
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-stone-700 font-normal">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0 mt-1.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            {/* Price Box */}
            <div className="pt-2 border-t border-orange-100 space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="font-editorial text-3xl sm:text-4xl font-bold text-stone-950">
                  Rs. {product.price.toLocaleString('en-IN')}.00
                </span>
                <span className="text-sm sm:text-base text-stone-400 line-through">
                  Rs. {product.originalPrice.toLocaleString('en-IN')}.00
                </span>
              </div>
              <p className="text-xs text-orange-700 font-semibold">
                10% off is applied automatically at checkout when you pay online.
              </p>
            </div>

            {/* Material Grade Selector */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-stone-900 block">Cover Series</span>
              <div className="flex items-center gap-2">
                {['Nexus', 'Plasma'].map((grade) => (
                  <button
                    key={grade}
                    type="button"
                    onClick={() => setSelectedGrade(grade)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedGrade === grade
                        ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                        : 'bg-stone-50 hover:bg-orange-50 hover:text-orange-950 text-stone-700 border border-stone-200'
                    }`}
                  >
                    {grade}
                  </button>
                ))}
              </div>
            </div>

            {/* Antenna Type Option */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-stone-900 block">Antenna Style</span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedAntenna('pocket')}
                  className={`p-2.5 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer ${
                    selectedAntenna === 'pocket'
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                      : 'bg-stone-50 hover:bg-orange-50 hover:text-orange-950 text-stone-700 border border-stone-200'
                  }`}
                >
                  Back (with antenna pocket)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedAntenna('sharkfin')}
                  className={`p-2.5 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer ${
                    selectedAntenna === 'sharkfin'
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                      : 'bg-stone-50 hover:bg-orange-50 hover:text-orange-950 text-stone-700 border border-stone-200'
                  }`}
                >
                  Sharkfin (no antenna pocket)
                </button>
              </div>
            </div>

            {/* 24 Hour Delivery Estimator Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-orange-50/40 border border-orange-100 shadow-xs space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 block">
                24 HOUR DISPATCH
              </span>

              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900">Bangalore & South India: get it in 24–48 hours</span>
                    <p className="text-[11px] text-stone-500">Order by 4 pm · Express dispatch from JC Road facility</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-stone-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900">Rest of India: 3–5 working days</span>
                    <p className="text-[11px] text-stone-500">Free express courier shipping on every order</p>
                  </div>
                </div>
              </div>

              {/* Pincode Check Input */}
              <form onSubmit={handlePincodeCheck} className="flex gap-2 pt-1">
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                  placeholder="6-digit pincode"
                  className="flex-1 bg-white px-3 py-2 rounded-xl border border-stone-200 text-xs font-medium text-stone-900 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
                >
                  Check
                </button>
              </form>

              {deliveryChecked && (
                <p className="text-xs text-emerald-700 font-semibold pt-1">
                  ✓ Delivery available to {pincode}! {deliverySpeed === 'express' ? 'Expected delivery in 24–48 hours.' : 'Expected delivery in 3–5 days.'}
                </p>
              )}
            </div>

            {/* Quantity Stepper & Add to Cart / Buy Now Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-stone-200 rounded-xl bg-white overflow-hidden h-[46px]">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-2 hover:bg-orange-50 text-stone-700 font-bold text-sm cursor-pointer"
                  >
                    −
                  </button>
                  <span className="px-3 text-xs font-bold text-stone-950">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-2 hover:bg-orange-50 text-stone-700 font-bold text-sm cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 h-[46px] px-6 rounded-xl border-2 border-orange-600 hover:bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-orange-600" />
                  <span>Add to cart</span>
                </button>
              </div>

              {/* Buy It Now Button */}
              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full h-[48px] rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-orange-600/30 active:scale-[0.99] cursor-pointer"
              >
                Buy it now
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Specifications Breakdown Grid: 'Why this one?' */}
      <section className="py-16 sm:py-24 bg-white border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-4 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-600 block">
                THE DETAILS
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-stone-950">
                Why this one?
              </h2>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs sm:text-sm">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block">FIT</span>
                <p className="text-stone-700 leading-relaxed">{product.specs.fit}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block">WEATHER</span>
                <p className="text-stone-700 leading-relaxed">{product.specs.weather}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block">WATER</span>
                <p className="text-stone-700 leading-relaxed">{product.specs.water}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block">AIR</span>
                <p className="text-stone-700 leading-relaxed">{product.specs.air}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block">LINING</span>
                <p className="text-stone-700 leading-relaxed">{product.specs.lining}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block">HANDLING</span>
                <p className="text-stone-700 leading-relaxed">{product.specs.handling}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 'For owners who look closely' Banner (White & Orange) */}
      <section className="py-14 sm:py-18 bg-gradient-to-r from-orange-50 via-white to-amber-50 text-stone-900 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-600 block">
              WHO IS IT FOR
            </span>
            <h3 className="font-editorial text-2xl sm:text-4xl font-normal text-stone-950">
              For owners who look closely.
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              Every cover is cut to one model's pattern and stitched at our Bangalore workshop. If you notice stitching, fit and how fabric sits on paint, it was made with you in mind.
            </p>
          </div>

          <Link
            to="/pages/who-it-is-for"
            className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-orange-600/25 shrink-0 cursor-pointer"
          >
            Who Hi-Life is for
          </Link>
        </div>
      </section>

      {/* Checkout Modal when triggered */}
      {checkoutModalOpen && (
        <QuickOrderModal
          result={{
            brand: product.brand,
            model: product.model,
            calculatedPrice: product.price,
            coverType: {
              name: product.name,
              basePrice: product.price
            }
          }}
          onClose={() => setCheckoutModalOpen(false)}
        />
      )}

    </div>
  );
}
