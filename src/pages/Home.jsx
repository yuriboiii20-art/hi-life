import React, { useState } from 'react';
import Hero from '../components/Hero';
import VehicleFinder from '../components/VehicleFinder';
import ProductResult from '../components/ProductResult';
import Testimonials from '../components/Testimonials';
import QuickOrderModal from '../components/QuickOrderModal';

export default function Home() {
  const [matchingResult, setMatchingResult] = useState(null);
  const [orderModalResult, setOrderModalResult] = useState(null);

  const handleSelectResult = (result) => {
    setMatchingResult(result);
    setTimeout(() => {
      const resultEl = document.getElementById('product-result-view');
      if (resultEl) {
        resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  const handleResetResult = () => {
    setMatchingResult(null);
    const finderEl = document.getElementById('vehicle-finder');
    if (finderEl) {
      finderEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#fafaf9] text-stone-900 font-sans overflow-x-hidden">
      
      {/* 1. Hero Slider with Overlaid Text */}
      <Hero
        onFindCoverClick={() => {
          const el = document.getElementById('vehicle-finder');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      />

      {/* 2. Vehicle Cover Finder & Matching Product Result (Only shown when searched) */}
      <section className="py-8 sm:py-12 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VehicleFinder
            onSelectResult={handleSelectResult}
          />

          {matchingResult && (
            <ProductResult
              result={matchingResult}
              onReset={handleResetResult}
              onBuyNow={(res) => setOrderModalResult(res)}
            />
          )}
        </div>
      </section>

      {/* 3. Customer Reviews */}
      <Testimonials />

      {/* Quick Order Modal */}
      {orderModalResult && (
        <QuickOrderModal
          result={orderModalResult}
          onClose={() => setOrderModalResult(null)}
        />
      )}

    </div>
  );
}
