import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-stone-900 font-sans py-16 sm:py-24 max-w-4xl mx-auto px-5 sm:px-8">
      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-orange-600 block mb-2">
        DATA & PRIVACY
      </span>
      <h1 className="font-editorial text-4xl sm:text-6xl font-normal text-stone-950 tracking-tight mb-8">
        Privacy Policy
      </h1>

      <div className="prose prose-stone text-xs sm:text-sm leading-relaxed space-y-6 text-stone-700">
        <p>
          At <strong>Hanuman Tarpaulins</strong>, we respect your privacy and are committed to protecting your personal information.
        </p>

        <h3 className="text-base sm:text-lg font-bold text-stone-950">1. Information We Collect</h3>
        <p>
          We only collect information necessary to fulfill your order and provide custom vehicle fitting assistance, including customer name, phone number, delivery address, pin code, and vehicle make/model details.
        </p>

        <h3 className="text-base sm:text-lg font-bold text-stone-950">2. Payment Data Security</h3>
        <p>
          We do not store complete credit card or debit card numbers on our servers. All digital transactions are processed through encrypted, RBI-compliant payment gateway infrastructure with 256-bit SSL encryption.
        </p>

        <h3 className="text-base sm:text-lg font-bold text-stone-950">3. Third-Party Sharing</h3>
        <p>
          Your delivery contact information is shared exclusively with our logistics courier partners for the purpose of dispatching and delivering your parcel. We never sell, rent, or trade your personal data to marketing third parties.
        </p>
      </div>
    </div>
  );
}
