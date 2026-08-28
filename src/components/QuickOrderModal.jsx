import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { getVehicleModelImage } from '../data/vehicles';

export default function QuickOrderModal({ result, onClose }) {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    pincode: '',
    city: '',
    paymentMethod: 'cod'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

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
    calculatedPrice
  } = result;

  const carImage = modelImage || getVehicleModelImage(brandId, modelId, bodyType);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const genId = 'HL-' + Math.floor(100000 + Math.random() * 900000);
      setOrderNumber(genId);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const getWhatsAppOrderConfirmationUrl = () => {
    const text = `Hello Hi-Life! 🎉 I have placed an order request on your website:%0A%0A📦 *Order ID:* ${orderNumber}%0A🚗 *Car:* ${brand} ${model} (${year})%0A🛡️ *Cover:* ${coverType.name}%0A💰 *Amount:* ₹${calculatedPrice}%0A💳 *Payment Mode:* ${formData.paymentMethod.toUpperCase()}%0A👤 *Name:* ${formData.customerName}%0A📞 *Phone:* ${formData.phone}%0A📍 *Pincode:* ${formData.pincode}%0A%0APlease confirm tailoring and dispatch schedule!`;
    return `https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${text}`;
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-white border border-stone-200 shadow-xl p-4 sm:p-6 my-6 text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3.5 right-3.5 p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-950 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="pb-3 border-b border-stone-100">
              <h2 className="text-lg sm:text-xl font-black text-stone-950 tracking-tight">
                Order Custom-Fit Cover
              </h2>
              <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
                Precision-tailored for your vehicle dimensions
              </p>
            </div>

            {/* Selected Vehicle & Cover Summary with Vehicle Image */}
            <div className="mt-3.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-3.5">
              <img
                src={carImage}
                alt={`${brand} ${model}`}
                className="w-16 h-12 rounded-lg object-cover bg-stone-200 shrink-0 border border-stone-200"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-stone-950 truncate">
                  {brand} {model} ({year})
                </p>
                <p className="text-[11px] text-stone-600 truncate">
                  {coverType.name}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-black text-stone-950">
                  ₹{calculatedPrice}
                </p>
                <span className="text-[10px] text-emerald-700 font-semibold block">
                  Free Delivery
                </span>
              </div>
            </div>

            {/* Order Form without unnecessary icons */}
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="space-y-1">
                  <label htmlFor="order-name" className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">
                    Full Name *
                  </label>
                  <input
                    id="order-name"
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full text-xs font-medium rounded-xl px-3 py-2 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="order-phone" className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">
                    Phone Number *
                  </label>
                  <input
                    id="order-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                    title="Please enter 10 digit mobile number"
                    required
                    className="w-full text-xs font-medium rounded-xl px-3 py-2 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="order-address" className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">
                  Delivery Address *
                </label>
                <textarea
                  id="order-address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={2}
                  placeholder="House/Flat No, Street, Landmark, Area"
                  required
                  className="w-full text-xs font-medium rounded-xl px-3 py-2 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="space-y-1">
                  <label htmlFor="order-pincode" className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">
                    Pincode *
                  </label>
                  <input
                    id="order-pincode"
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="6-digit Pincode"
                    pattern="[0-9]{6}"
                    required
                    className="w-full text-xs font-medium rounded-xl px-3 py-2 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="order-city" className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">
                    City / State *
                  </label>
                  <input
                    id="order-city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Bengaluru"
                    required
                    className="w-full text-xs font-medium rounded-xl px-3 py-2 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                </div>
              </div>

              {/* Payment Method - Clean & Smooth */}
              <div className="pt-1">
                <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
                  Payment Mode
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label className={`px-3 py-2 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                    formData.paymentMethod === 'cod'
                      ? 'bg-stone-950 text-white border-stone-950 shadow-xs'
                      : 'bg-stone-50 border-stone-200 text-stone-800 hover:border-stone-300'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      className="accent-amber-400 cursor-pointer"
                    />
                    <span className="text-xs font-semibold">Cash on Delivery</span>
                  </label>

                  <label className={`px-3 py-2 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                    formData.paymentMethod === 'upi'
                      ? 'bg-stone-950 text-white border-stone-950 shadow-xs'
                      : 'bg-stone-50 border-stone-200 text-stone-800 hover:border-stone-300'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleChange}
                      className="accent-amber-400 cursor-pointer"
                    />
                    <span className="text-xs font-semibold">UPI / Online</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-stone-950 hover:bg-black text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xs cursor-pointer active:scale-[0.99]"
                >
                  {isSubmitting ? 'Submitting Order...' : `Confirm Order (₹${calculatedPrice})`}
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-4 space-y-4">
            <div className="w-12 h-12 rounded-full bg-stone-950 text-amber-400 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-700">
                Order Received
              </span>
              <h3 className="text-lg sm:text-xl font-black text-stone-950 mt-0.5">
                Thank You, {formData.customerName}!
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Order Ref: <span className="font-mono font-bold text-stone-900">{orderNumber}</span>
              </p>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-left text-stone-700 space-y-1.5 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-stone-500">Vehicle:</span>
                <span className="font-bold text-stone-950">{brand} {model} ({year})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Cover:</span>
                <span className="font-bold text-stone-950">{coverType.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Amount:</span>
                <span className="font-bold text-stone-950">₹{calculatedPrice} ({formData.paymentMethod.toUpperCase()})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Delivery:</span>
                <span className="font-bold text-stone-950">{formData.city} ({formData.pincode})</span>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 pt-1">
              <a
                href={getWhatsAppOrderConfirmationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-xs text-center shadow-xs cursor-pointer"
              >
                Confirm on WhatsApp
              </a>

              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-xs border border-stone-300 cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
