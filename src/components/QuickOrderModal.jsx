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
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-white border border-neutral-200 shadow-2xl p-6 sm:p-8 my-8 text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-black text-white">
                <ShoppingBag className="w-4 h-4" />
              </span>
              <span className="text-xs font-black uppercase tracking-wider text-black">
                Express Tailoring Order Request
              </span>
            </div>

            <h2 className="text-2xl font-black text-black">
              Order Custom-Fitted Car Cover
            </h2>

            {/* Vehicle & Cover Summary */}
            <div className="mt-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs text-neutral-500 uppercase font-semibold">Selected Vehicle</p>
                <p className="text-base font-bold text-black">
                  {brand} {model} <span className="text-neutral-600">({year})</span>
                </p>
                <p className="text-xs text-black font-bold mt-0.5">
                  {coverType.name}
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs text-neutral-500 uppercase font-semibold">Total Payable</p>
                <p className="text-2xl font-black text-black">
                  ₹{calculatedPrice}
                </p>
                <span className="text-[11px] text-black font-bold">
                  Free Express Shipping Included
                </span>
              </div>
            </div>

            {/* Order Form */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1.5">
                  <label htmlFor="order-name" className="font-bold text-black uppercase tracking-wider block">
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
                    className="w-full text-xs sm:text-sm font-semibold rounded-xl px-4 py-3 bg-white text-black border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="order-phone" className="font-bold text-black uppercase tracking-wider block">
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
                    className="w-full text-xs sm:text-sm font-semibold rounded-xl px-4 py-3 bg-white text-black border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

              </div>

              <div className="space-y-1.5">
                <label htmlFor="order-address" className="font-bold text-black uppercase tracking-wider block">
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
                  className="w-full text-xs sm:text-sm rounded-xl px-4 py-3 bg-white text-black border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="order-pincode" className="font-bold text-black uppercase tracking-wider block">
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
                    className="w-full text-xs sm:text-sm font-semibold rounded-xl px-4 py-3 bg-white text-black border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="order-city" className="font-bold text-black uppercase tracking-wider block">
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
                    className="w-full text-xs sm:text-sm font-semibold rounded-xl px-4 py-3 bg-white text-black border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="pt-2">
                <label className="font-bold text-black uppercase tracking-wider block mb-2">
                  Payment Mode
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`p-3.5 rounded-2xl border flex items-center gap-3 cursor-pointer transition-all ${
                    formData.paymentMethod === 'cod'
                      ? 'bg-black text-white border-black shadow-md ring-1 ring-black'
                      : 'bg-neutral-50 border-neutral-200 text-neutral-700'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      className="text-black focus:ring-black"
                    />
                    <div className="text-left">
                      <p className={`text-xs font-bold flex items-center gap-1 ${formData.paymentMethod === 'cod' ? 'text-white' : 'text-black'}`}>
                        <Banknote className="w-3.5 h-3.5" />
                        <span>Cash on Delivery</span>
                      </p>
                      <p className={`text-[10px] ${formData.paymentMethod === 'cod' ? 'text-neutral-300' : 'text-neutral-500'}`}>Pay upon delivery</p>
                    </div>
                  </label>

                  <label className={`p-3.5 rounded-2xl border flex items-center gap-3 cursor-pointer transition-all ${
                    formData.paymentMethod === 'upi'
                      ? 'bg-black text-white border-black shadow-md ring-1 ring-black'
                      : 'bg-neutral-50 border-neutral-200 text-neutral-700'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleChange}
                      className="text-black focus:ring-black"
                    />
                    <div className="text-left">
                      <p className={`text-xs font-bold flex items-center gap-1 ${formData.paymentMethod === 'upi' ? 'text-white' : 'text-black'}`}>
                        <CreditCard className="w-3.5 h-3.5" />
                        <span>Prepaid UPI / Card</span>
                      </p>
                      <p className={`text-[10px] ${formData.paymentMethod === 'upi' ? 'text-neutral-300' : 'text-neutral-500'}`}>Fast-track dispatch</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-black hover:bg-neutral-800 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
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
            <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider font-black text-black">
                Order Request Received
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-black mt-1">
                Thank You, {formData.customerName}!
              </h3>
              <p className="text-sm text-neutral-600 mt-1">
                Your custom cover order reference is <span className="font-mono font-bold text-black bg-neutral-100 px-2 py-0.5 rounded border border-neutral-300">{orderNumber}</span>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs text-left text-neutral-700 space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between">
                <span>Vehicle:</span>
                <span className="font-bold text-black">{brand} {model} ({year})</span>
              </div>
              <div className="flex justify-between">
                <span>Cover Type:</span>
                <span className="font-bold text-black">{coverType.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Amount:</span>
                <span className="font-bold text-black">₹{calculatedPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery:</span>
                <span className="font-bold text-black">{formData.city} - {formData.pincode}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={getWhatsAppOrderConfirmationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white font-black text-xs flex items-center justify-center gap-2 shadow"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25d366]" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-black font-bold text-xs border border-neutral-300"
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
