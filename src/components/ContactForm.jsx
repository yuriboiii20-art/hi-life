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
import CustomDropdown from './CustomDropdown';

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
        
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.05)] space-y-6">
          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-orange-600">
              Get in Touch
            </span>
            <h3 className="text-2xl font-black text-stone-950 mt-1">
              Hanuman Tarpaulins Support
            </h3>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed font-normal">
              Have questions about vehicle sizing, custom measurements, or bulk orders? Visit our JC Road store or message our team 6 days a week.
            </p>
          </div>

          <div className="space-y-3 text-xs text-stone-700">
            {/* Phone */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-orange-50/40 border border-orange-100">
              <div className="p-2.5 rounded-xl bg-orange-600 text-white shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-stone-950">Call Support</p>
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="text-stone-600 hover:text-orange-600 font-semibold">
                  {BUSINESS_CONFIG.displayPhone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-orange-50/40 border border-orange-100">
              <div className="p-2.5 rounded-xl bg-orange-600 text-white shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-stone-950">Email Enquiries</p>
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-stone-600 hover:text-orange-600 font-semibold">
                  {BUSINESS_CONFIG.email}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-orange-50/40 border border-orange-100">
              <div className="p-2.5 rounded-xl bg-orange-600 text-white shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-stone-950">Office & Dispatch Hub</p>
                <p className="text-stone-600 leading-relaxed text-[11px] font-normal">
                  {BUSINESS_CONFIG.address.fullAddress}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-orange-50/40 border border-orange-100">
              <div className="p-2.5 rounded-xl bg-orange-600 text-white shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-stone-950">Operational Hours</p>
                <p className="text-stone-600 text-[11px] font-normal">{BUSINESS_CONFIG.businessHours}</p>
              </div>
            </div>
          </div>

          {/* Direct WhatsApp Action */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="w-full py-4 rounded-2xl bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.01] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25d366]" />
              <span>Chat Directly on WhatsApp</span>
            </button>
          </div>

        </div>

        {/* Map Placeholder Card */}
        <div className="p-6 rounded-3xl bg-white border border-orange-100 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-stone-950 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-orange-600" />
              <span>Location Map</span>
            </span>
            <span className="text-[10px] text-orange-600 uppercase font-semibold">Dispatch Center</span>
          </div>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-orange-50/30 border border-orange-100 flex flex-col items-center justify-center p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center mb-1.5 animate-pulse shadow-sm">
              <MapPin className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold text-stone-950">{BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.country}</p>
            <p className="text-[10px] text-stone-500 mt-0.5 font-normal">Central Logistics Hub • Pan-India Courier Dispatches</p>
          </div>
        </div>

      </div>

      {/* Right 7 Cols: Enquiry Form */}
      <div className="lg:col-span-7">
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-orange-100 shadow-sm relative">
          
          <span className="text-xs uppercase tracking-wider font-bold text-orange-600">
            Enquiry & Custom Sizing Form
          </span>
          <h3 className="text-2xl font-black text-stone-950 mt-1">
            Send Us a Message
          </h3>
          <p className="text-xs text-stone-600 mt-1 mb-6 font-normal leading-relaxed">
            Fill out your details and vehicle specification below. We typically respond within 30–60 minutes during business hours.
          </p>

          {isSuccess ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-orange-600 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-black text-stone-950">Message Received!</h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto font-normal">
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
                  className="px-6 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-sm cursor-pointer"
                >
                  Send Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {errorMessage && (
                <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="font-bold text-stone-900 uppercase tracking-wider block">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    required
                    className="w-full text-xs sm:text-sm font-semibold rounded-2xl px-4 py-3 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="font-bold text-stone-900 uppercase tracking-wider block">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    required
                    className="w-full text-xs sm:text-sm font-semibold rounded-2xl px-4 py-3 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="font-bold text-stone-900 uppercase tracking-wider block">
                  Email Address *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. rahul@example.com"
                  required
                  className="w-full text-xs sm:text-sm font-semibold rounded-2xl px-4 py-3 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 font-medium"
                />
              </div>

              <div className="pt-2 border-t border-stone-200">
                <p className="font-bold text-stone-900 uppercase tracking-wider mb-2">
                  Vehicle Specifications (Optional for Quick Fit Verification):
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label htmlFor="contact-brand" className="text-[11px] font-semibold text-stone-600 block mb-1">
                      Car Brand
                    </label>
                    <CustomDropdown
                      id="contact-brand"
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                      placeholder="Select Brand"
                      title="Select Car Brand"
                      options={CAR_BRANDS.map((b) => ({
                        value: b.name,
                        label: b.name,
                        sublabel: b.country,
                      }))}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-model" className="text-[11px] font-semibold text-stone-600 block mb-1">
                      Model
                    </label>
                    <CustomDropdown
                      id="contact-model"
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                      disabled={!formData.brand}
                      placeholder="Select Model"
                      disabledPlaceholder="Select Brand first"
                      title="Select Vehicle Model"
                      options={availableModels.map((m) => ({
                        value: m.name,
                        label: m.name,
                        sublabel: m.bodyType,
                      }))}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-year" className="text-[11px] font-semibold text-stone-600 block mb-1">
                      Year
                    </label>
                    <CustomDropdown
                      id="contact-year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      placeholder="Select Year"
                      title="Select Year"
                      options={MANUFACTURING_YEARS.map((yr) => ({
                        value: String(yr),
                        label: String(yr),
                      }))}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-cover-type" className="text-[11px] font-semibold text-stone-600 block">
                  Preferred Cover Grade
                </label>
                <CustomDropdown
                  id="contact-cover-type"
                  name="coverType"
                  value={formData.coverType}
                  onChange={handleChange}
                  placeholder="Recommend Best Option"
                  title="Select Cover Grade"
                  options={[
                    { value: '', label: 'Not Sure / Recommend Best Option' },
                    ...COVER_TYPES.map((c) => ({
                      value: c.name,
                      label: c.name,
                      sublabel: `from ₹${c.basePrice}`,
                      badge: c.popular ? 'Popular' : undefined,
                    })),
                  ]}
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="font-bold text-stone-900 uppercase tracking-wider block">
                  Your Enquiry / Message
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ask about custom fitting, bulk discounts, color options, or accessories..."
                  className="w-full text-xs sm:text-sm rounded-2xl px-4 py-3 bg-stone-50 text-stone-900 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-orange-500/25 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Fitment Enquiry</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>
      </div>

    </div>
  );
}
