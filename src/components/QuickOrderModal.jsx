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
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 my-8 text-left max-h-[90vh] overflow-y-auto"
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

        {!isSuccess ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-blue-100 text-[#19277c]">
                <ShoppingBag className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#19277c]">
                Express Tailoring Order Request
              </span>
            </div>

            <h2 className="text-2xl font-black text-slate-900">
              Order Custom-Fitted Car Cover
            </h2>

            {/* Vehicle & Cover Summary */}
            <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500 uppercase font-semibold">Selected Vehicle</p>
                <p className="text-base font-bold text-slate-900">
                  {brand} {model} <span className="text-[#19277c]">({year})</span>
                </p>
                <p className="text-xs text-emerald-700 font-bold mt-0.5">
                  {coverType.name}
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs text-slate-500 uppercase font-semibold">Total Payable</p>
                <p className="text-2xl font-black text-[#19277c]">
                  ₹{calculatedPrice}
                </p>
                <span className="text-[11px] text-emerald-700 font-bold">
                  Free Express Shipping Included
                </span>
              </div>
            </div>

            {/* Order Form */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder="e.g. Ankit Sharma"
                    required
                    className="w-full bg-white text-slate-900 text-sm rounded-lg px-3.5 py-2.5 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#19277c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Phone Number (for Courier & WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    pattern="[0-9]{10}"
                    title="Please enter 10 digit mobile number"
                    required
                    className="w-full bg-white text-slate-900 text-sm rounded-lg px-3.5 py-2.5 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#19277c]"
                  />
                </div>

              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Delivery Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="2"
                  placeholder="House/Flat No, Street, Landmark, Area"
                  required
                  className="w-full bg-white text-slate-900 text-sm rounded-lg px-3.5 py-2.5 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#19277c]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="6-digit Pincode"
                    pattern="[0-9]{6}"
                    required
                    className="w-full bg-white text-slate-900 text-sm rounded-lg px-3.5 py-2.5 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#19277c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    City / State *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Bengaluru, Karnataka"
                    required
                    className="w-full bg-white text-slate-900 text-sm rounded-lg px-3.5 py-2.5 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#19277c]"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="pt-2">
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                  Payment Mode
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`p-3 rounded-lg border flex items-center gap-3 cursor-pointer transition-all ${
                    formData.paymentMethod === 'cod'
                      ? 'bg-blue-50 border-[#19277c] text-slate-900 ring-1 ring-[#19277c]'
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      className="text-[#19277c] focus:ring-[#19277c]"
                    />
                    <div className="text-left">
                      <p className="text-xs font-bold text-slate-900 flex items-center gap-1">
                        <Banknote className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Cash on Delivery</span>
                      </p>
                      <p className="text-[10px] text-slate-500">Pay upon delivery</p>
                    </div>
                  </label>

                  <label className={`p-3 rounded-lg border flex items-center gap-3 cursor-pointer transition-all ${
                    formData.paymentMethod === 'upi'
                      ? 'bg-blue-50 border-[#19277c] text-slate-900 ring-1 ring-[#19277c]'
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleChange}
                      className="text-[#19277c] focus:ring-[#19277c]"
                    />
                    <div className="text-left">
                      <p className="text-xs font-bold text-slate-900 flex items-center gap-1">
                        <CreditCard className="w-3.5 h-3.5 text-[#19277c]" />
                        <span>Prepaid UPI / Card</span>
                      </p>
                      <p className="text-[10px] text-slate-500">Fast-track dispatch</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#19277c] hover:bg-[#16215b] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
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
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-700">
                Order Request Received
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                Thank You, {formData.customerName}!
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Your custom cover order reference is <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">{orderNumber}</span>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-left text-slate-700 space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between">
                <span>Vehicle:</span>
                <span className="font-bold text-slate-900">{brand} {model} ({year})</span>
              </div>
              <div className="flex justify-between">
                <span>Cover Type:</span>
                <span className="font-bold text-slate-900">{coverType.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Amount:</span>
                <span className="font-bold text-emerald-700">₹{calculatedPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery:</span>
                <span className="font-bold text-slate-900">{formData.city} - {formData.pincode}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={getWhatsAppOrderConfirmationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 shadow"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25d366]" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300"
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
