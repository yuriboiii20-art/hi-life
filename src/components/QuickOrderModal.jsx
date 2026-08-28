import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  MessageCircle, 
  ArrowRight,
  CreditCard,
  Banknote,
  AlertCircle
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

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
    model,
    year,
    coverType,
    calculatedPrice,
    calculatedOriginalPrice,
    discountPercent
  } = result;

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
    }, 1000);
  };

  const getWhatsAppOrderConfirmationUrl = () => {
    const text = `Hello Hi-Life! 🎉 I have placed an order request on your website:%0A%0A📦 *Order ID:* ${orderNumber}%0A🚗 *Car:* ${brand} ${model} (${year})%0A🛡️ *Cover:* ${coverType.name}%0A💰 *Amount:* ₹${calculatedPrice}%0A💳 *Payment Mode:* ${formData.paymentMethod.toUpperCase()}%0A👤 *Name:* ${formData.customerName}%0A📞 *Phone:* ${formData.phone}%0A📍 *Pincode:* ${formData.pincode}%0A%0APlease confirm tailoring and dispatch schedule!`;
    return `https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${text}`;
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-white border border-stone-200/90 shadow-2xl p-6 sm:p-8 my-8 text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-stone-950 transition-colors focus:outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-2 rounded-xl bg-stone-900 text-amber-400 shadow-sm">
                <ShoppingBag className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Express Tailoring Order Request
              </span>
            </div>

            <h2 className="text-2xl font-black text-stone-950">
              Order Custom-Fitted Car Cover
            </h2>

            {/* Vehicle & Cover Summary */}
            <div className="mt-4 p-5 rounded-2xl bg-stone-50 border border-stone-200/90 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs text-stone-500 uppercase font-semibold">Selected Vehicle</p>
                <p className="text-base font-bold text-stone-950">
                  {brand} {model} <span className="text-stone-600 font-normal">({year})</span>
                </p>
                <p className="text-xs text-amber-700 font-bold mt-0.5">
                  {coverType.name}
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs text-stone-500 uppercase font-semibold">Total Payable</p>
                <p className="text-2xl font-black text-stone-950">
                  ₹{calculatedPrice}
                </p>
                <span className="text-[11px] text-emerald-700 font-bold">
                  Free Express Shipping Included
                </span>
              </div>
            </div>

            {/* Order Form */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1.5">
                  <label htmlFor="order-name" className="font-bold text-stone-900 uppercase tracking-wider block">
                    Full Name *
                  </label>
                  <input
                    id="order-name"
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder="e.g. Ankit Sharma"
                    required
                    className="w-full text-xs sm:text-sm font-semibold rounded-2xl px-4 py-3 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="order-phone" className="font-bold text-stone-900 uppercase tracking-wider block">
                    Phone Number (for Courier & WhatsApp) *
                  </label>
                  <input
                    id="order-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    pattern="[0-9]{10}"
                    title="Please enter 10 digit mobile number"
                    required
                    className="w-full text-xs sm:text-sm font-semibold rounded-2xl px-4 py-3 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 font-medium"
                  />
                </div>

              </div>

              <div className="space-y-1.5">
                <label htmlFor="order-address" className="font-bold text-stone-900 uppercase tracking-wider block">
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
                  className="w-full text-xs sm:text-sm rounded-2xl px-4 py-3 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="order-pincode" className="font-bold text-stone-900 uppercase tracking-wider block">
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
                    className="w-full text-xs sm:text-sm font-semibold rounded-2xl px-4 py-3 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="order-city" className="font-bold text-stone-900 uppercase tracking-wider block">
                    City / State *
                  </label>
                  <input
                    id="order-city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Bengaluru, Karnataka"
                    required
                    className="w-full text-xs sm:text-sm font-semibold rounded-2xl px-4 py-3 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 font-medium"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="pt-2">
                <label className="font-bold text-stone-900 uppercase tracking-wider block mb-2">
                  Payment Mode
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`p-4 rounded-2xl border flex items-center gap-3 cursor-pointer transition-all ${
                    formData.paymentMethod === 'cod'
                      ? 'bg-stone-950 text-white border-stone-950 shadow-md ring-1 ring-stone-950'
                      : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      className="text-stone-950 focus:ring-stone-950"
                    />
                    <div className="text-left">
                      <p className={`text-xs font-bold flex items-center gap-1.5 ${formData.paymentMethod === 'cod' ? 'text-white' : 'text-stone-950'}`}>
                        <Banknote className="w-3.5 h-3.5" />
                        <span>Cash on Delivery</span>
                      </p>
                      <p className={`text-[10px] ${formData.paymentMethod === 'cod' ? 'text-stone-300' : 'text-stone-500'}`}>Pay upon delivery</p>
                    </div>
                  </label>

                  <label className={`p-4 rounded-2xl border flex items-center gap-3 cursor-pointer transition-all ${
                    formData.paymentMethod === 'upi'
                      ? 'bg-stone-950 text-white border-stone-950 shadow-md ring-1 ring-stone-950'
                      : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleChange}
                      className="text-stone-950 focus:ring-stone-950"
                    />
                    <div className="text-left">
                      <p className={`text-xs font-bold flex items-center gap-1.5 ${formData.paymentMethod === 'upi' ? 'text-white' : 'text-stone-950'}`}>
                        <CreditCard className="w-3.5 h-3.5" />
                        <span>Prepaid UPI / Card</span>
                      </p>
                      <p className={`text-[10px] ${formData.paymentMethod === 'upi' ? 'text-stone-300' : 'text-stone-500'}`}>Fast-track dispatch</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-stone-950 hover:bg-black text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Order Request...</span>
                  ) : (
                    <>
                      <span>Confirm Order Request (₹{calculatedPrice})</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-3xl bg-stone-900 text-white flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10 text-amber-400" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-amber-700">
                Order Request Received
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                Thank You, {formData.customerName}!
              </h3>
              <p className="text-sm text-stone-600 mt-1">
                Your custom cover order reference is <span className="font-mono font-bold text-stone-950 bg-stone-100 px-2.5 py-0.5 rounded-lg border border-stone-300">{orderNumber}</span>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/90 text-xs text-left text-stone-700 space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span>Vehicle:</span>
                <span className="font-bold text-stone-950">{brand} {model} ({year})</span>
              </div>
              <div className="flex justify-between">
                <span>Cover Type:</span>
                <span className="font-bold text-stone-950">{coverType.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Amount:</span>
                <span className="font-bold text-stone-950">₹{calculatedPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery:</span>
                <span className="font-bold text-stone-950">{formData.city} - {formData.pincode}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={getWhatsAppOrderConfirmationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25d366]" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-xs border border-stone-300 cursor-pointer"
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
