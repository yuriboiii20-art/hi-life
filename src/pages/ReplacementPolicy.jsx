import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';

export default function ReplacementPolicy() {
  return (
    <div className="bg-white text-stone-900 font-sans py-16 sm:py-24 max-w-4xl mx-auto px-5 sm:px-8">
      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-orange-600 block mb-2">
        RETURNS & REPLACEMENTS
      </span>
      <h1 className="font-editorial text-4xl sm:text-6xl font-normal text-stone-950 tracking-tight mb-8">
        Replacement & Cancellation Policy
      </h1>

      <div className="prose prose-stone text-xs sm:text-sm leading-relaxed space-y-6 text-stone-700">
        <p>
          We take immense pride in our 20-year reputation at JC Road, Bangalore. Every cover is cut to precision dimensions for your vehicle.
        </p>

        <h3 className="text-base sm:text-lg font-bold text-stone-950">1. 7-Day Fitment Guarantee</h3>
        <p>
          If the cover does not fit your vehicle correctly due to model variant discrepancies (e.g. aftermarket roof carrier, spoiler, bullbar, or custom dimensions), notify us within 7 days of delivery.
        </p>

        <h3 className="text-base sm:text-lg font-bold text-stone-950">2. Replacement Procedure</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Take 2–3 photos of the cover on your vehicle highlighting the fitting issue.</li>
          <li>Send the photos along with your Order ID to our WhatsApp support ({BUSINESS_CONFIG.displayPhone}) or email ({BUSINESS_CONFIG.email}).</li>
          <li>Our master cutting technician will review the photos and dispatch a tailored replacement at zero additional shipping cost.</li>
        </ul>

        <h3 className="text-base sm:text-lg font-bold text-stone-950">3. Manufacturing Defects</h3>
        <p>
          If your product arrives with any structural tear, defective buckle, or seam flaw, it will be replaced immediately with an express shipment.
        </p>
      </div>
    </div>
  );
}
