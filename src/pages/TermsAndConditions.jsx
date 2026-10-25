import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';

export default function TermsAndConditions() {
  return (
    <div className="bg-white text-stone-900 font-sans py-16 sm:py-24 max-w-4xl mx-auto px-5 sm:px-8">
      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-orange-600 block mb-2">
        TERMS OF SERVICE
      </span>
      <h1 className="font-editorial text-4xl sm:text-6xl font-normal text-stone-950 tracking-tight mb-8">
        Terms and Conditions
      </h1>

      <div className="prose prose-stone text-xs sm:text-sm leading-relaxed space-y-6 text-stone-700">
        <p>
          Welcome to <strong>Hanuman Tarpaulins</strong>. By browsing this website or purchasing custom automotive covers and tarpaulins, you agree to comply with the terms and conditions outlined below.
        </p>

        <h3 className="text-base sm:text-lg font-bold text-stone-950">1. Product Customization</h3>
        <p>
          Each cover is manufactured according to the model and manufacturing year specifications selected by the customer. Please verify vehicle trim details (such as sharkfin antenna or aftermarket body kits) during selection.
        </p>

        <h3 className="text-base sm:text-lg font-bold text-stone-950">2. Pricing & Payments</h3>
        <p>
          All prices displayed are in Indian Rupees (INR) and inclusive of applicable GST. We reserve the right to modify promotional discounts or pricing without prior notice.
        </p>

        <h3 className="text-base sm:text-lg font-bold text-stone-950">3. Jurisdiction</h3>
        <p>
          Any disputes arising out of transactions on this platform shall be subject to the exclusive jurisdiction of the competent courts in Bangalore, Karnataka, India.
        </p>
      </div>
    </div>
  );
}
