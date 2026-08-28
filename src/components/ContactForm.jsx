import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Car, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { CAR_BRANDS, MANUFACTURING_YEARS } from '../data/vehicles';
import { COVER_TYPES } from '../data/products';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    brand: '',
    model: '',
    year: '',
    coverType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const selectedBrand = CAR_BRANDS.find((b) => b.name === formData.brand) || null;
  const availableModels = selectedBrand ? selectedBrand.models : [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === 'brand') {
        updated.model = '';
      }
      return updated;
    });
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      setErrorMessage('Please fill in all mandatory contact fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Hi-Life! 👋%0A%0A*Name:* ${encodeURIComponent(formData.name || 'Customer')}%0A*Phone:* ${encodeURIComponent(formData.phone || '')}%0A*Vehicle:* ${encodeURIComponent(formData.brand || '')} ${encodeURIComponent(formData.model || '')} (${encodeURIComponent(formData.year || '')})%0A*Cover Type:* ${encodeURIComponent(formData.coverType || 'Not Specified')}%0A*Message:* ${encodeURIComponent(formData.message || 'I have an enquiry regarding Hi-Life car covers.')}`;
    window.open(`https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${text}`, '_blank');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-sans">
      
      {/* Left 5 Cols: Business Info & Support */}
      <div className="lg:col-span-5 space-y-6">
        
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-md space-y-5">
          <div>
            <span className="text-xs uppercase tracking-wider font-extrabold text-[#19277c]">
              Get in Touch
            </span>
            <h3 className="text-2xl font-black text-slate-900 mt-1">
              Hi-Life Customer Support
            </h3>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
              Have questions about vehicle sizing, custom measurements, or bulk orders? Our team is available 6 days a week.
            </p>
          </div>

          <div className="space-y-3 text-xs text-slate-700">
            {/* Phone */}
            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="p-2 rounded-lg bg-blue-100 text-[#19277c] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Call Support</p>
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="text-slate-600 hover:text-[#19277c] font-semibold">
                  {BUSINESS_CONFIG.displayPhone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="p-2 rounded-lg bg-blue-100 text-[#19277c] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Email Enquiries</p>
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-slate-600 hover:text-[#19277c] font-semibold">
                  {BUSINESS_CONFIG.email}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="p-2 rounded-lg bg-blue-100 text-[#19277c] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Office & Dispatch Hub</p>
                <p className="text-slate-600 leading-relaxed text-[11px] font-normal">
                  {BUSINESS_CONFIG.address.fullAddress}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="p-2 rounded-lg bg-blue-100 text-[#19277c] shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Operational Hours</p>
                <p className="text-slate-600 text-[11px] font-normal">{BUSINESS_CONFIG.businessHours}</p>
              </div>
            </div>
          </div>

          {/* Direct WhatsApp Action */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="w-full py-3.5 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow transition-all hover:scale-[1.01]"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25d366]" />
              <span>Chat Directly on WhatsApp</span>
            </button>
          </div>

        </div>

        {/* Map Placeholder Card */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#19277c]" />
              <span>Location Map</span>
            </span>
            <span className="text-[10px] text-slate-500 uppercase font-semibold">Dispatch Center</span>
          </div>

          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex flex-col items-center justify-center p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-[#19277c] flex items-center justify-center mb-1.5 animate-pulse">
              <MapPin className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold text-slate-900">{BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.country}</p>
            <p className="text-[10px] text-slate-500 mt-0.5 font-normal">Central Logistics Hub • Pan-India Courier Dispatches</p>
          </div>
        </div>

      </div>

      {/* Right 7 Cols: Enquiry Form */}
      <div className="lg:col-span-7">
        <div className="p-6 sm:p-8 lg:p-9 rounded-2xl bg-white border border-slate-200 shadow-md relative">
          
          <span className="text-xs uppercase tracking-wider font-extrabold text-[#19277c]">
            Enquiry & Custom Sizing Form
          </span>
          <h3 className="text-2xl font-black text-slate-900 mt-1">
            Send Us a Message
          </h3>
          <p className="text-xs text-slate-600 mt-1 mb-6 font-normal">
            Fill out your details and vehicle specification below. We typically respond within 30–60 minutes during business hours.
          </p>

          {isSuccess ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">Message Received!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto font-normal">
                Thank you, {formData.name}. Our car cover specialist has received your enquiry for {formData.brand ? `${formData.brand} ${formData.model}` : 'your vehicle'} and will contact you promptly.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      brand: '',
                      model: '',
                      year: '',
                      coverType: '',
                      message: ''
                    });
                  }}
                  className="px-6 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300"
                >
                  Send Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {errorMessage && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full bg-white text-slate-900 text-xs rounded-lg px-3.5 py-2.5 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#19277c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit Phone"
                    pattern="[0-9]{10}"
                    required
                    className="w-full bg-white text-slate-900 text-xs rounded-lg px-3.5 py-2.5 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#19277c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@email.com"
                    required
                    className="w-full bg-white text-slate-900 text-xs rounded-lg px-3.5 py-2.5 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#19277c]"
                  />
                </div>
              </div>

              {/* Vehicle Sub-section */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-[#19277c]" />
                  <span>Vehicle Specifics (Optional)</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div>
                    <label className="block text-[11px] text-slate-500 font-semibold mb-1">Car Brand</label>
                    <select
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                      className="w-full bg-white text-slate-900 text-xs rounded-lg px-2.5 py-2 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#19277c]"
                    >
                      <option value="">Select Brand</option>
                      {CAR_BRANDS.map((b) => (
                        <option key={b.id} value={b.name}>{b.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-500 font-semibold mb-1">Car Model</label>
                    <select
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                      disabled={!formData.brand}
                      className="w-full bg-white text-slate-900 text-xs rounded-lg px-2.5 py-2 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#19277c] disabled:opacity-50"
                    >
                      <option value="">Select Model</option>
                      {availableModels.map((m) => (
                        <option key={m.id} value={m.name}>{m.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-500 font-semibold mb-1">Mfg. Year</label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full bg-white text-slate-900 text-xs rounded-lg px-2.5 py-2 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#19277c]"
                    >
                      <option value="">Select Year</option>
                      {MANUFACTURING_YEARS.map((yr) => (
                        <option key={yr} value={yr}>{yr}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-500 font-semibold mb-1">Preferred Cover Type</label>
                  <select
                    name="coverType"
                    value={formData.coverType}
                    onChange={handleChange}
                    className="w-full bg-white text-slate-900 text-xs rounded-lg px-2.5 py-2 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#19277c]"
                  >
                    <option value="">Any / Suggest Best Fit</option>
                    {COVER_TYPES.map((c) => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Message / Special Fitting Requirements
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Mention if you have aftermarket roof carriers, spoilers, bull bars, or specific parking concerns."
                  className="w-full bg-white text-slate-900 text-xs rounded-lg px-3.5 py-2.5 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#19277c]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3.5 rounded-xl bg-[#19277c] hover:bg-[#16215b] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  {isSubmitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Form Enquiry</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25d366]" />
                  <span>Quick WhatsApp</span>
                </button>
              </div>

            </form>
          )}

        </div>
      </div>

    </div>
  );
}
