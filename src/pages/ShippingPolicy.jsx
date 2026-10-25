import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';

export default function ShippingPolicy() {
  return (
    <div className="bg-white text-stone-900 font-sans py-16 sm:py-24 max-w-4xl mx-auto px-5 sm:px-8">
      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-orange-600 block mb-2">
        DISPATCH & DELIVERY
      </span>
      <h1 className="font-editorial text-4xl sm:text-6xl font-normal text-stone-950 tracking-tight mb-8">
        Shipping Policy
      </h1>

      <div className="prose prose-stone text-xs sm:text-sm leading-relaxed space-y-6 text-stone-700">
        <p>
          At <strong>Hanuman Tarpaulins (Hi-Life Automotive Covers)</strong>, all orders are custom-tailored at our Bangalore facility and carefully inspected for fitment, seam sealing, and elastic tension before packaging.
        </p>

        <h3 className="text-base sm:text-lg font-bold text-stone-950">1. Pan-India Free Express Shipping</h3>
        <p>
          We offer 100% Free Express Shipping on all vehicle covers across India with no hidden handling or courier surcharges.
        </p>

        <h3 className="text-base sm:text-lg font-bold text-stone-950">2. Processing & Dispatch Time</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Dispatches:</strong> Within 24–48 working hours from order placement.</li>
          <li><strong>Bangalore & Karnataka Deliveries:</strong> Delivered within 24–48 hours from dispatch.</li>
          <li><strong>Rest of India:</strong> 3–5 working days via reputable express couriers (Bluedart, Delhivery, DTDC).</li>
        </ul>

        <h3 className="text-base sm:text-lg font-bold text-stone-950">3. Live Tracking</h3>
        <p>
          Once your package has been handed over to the courier partner, an automated SMS and email notification containing the courier tracking AWB link will be shared with you.
        </p>

        <h3 className="text-base sm:text-lg font-bold text-stone-950">4. JC Road Store Collection</h3>
        <p>
          Customers in Bangalore also have the option for instant in-store collection at our showroom: <em>{BUSINESS_CONFIG.address.fullAddress}</em>.
        </p>
      </div>
    </div>
  );
}
