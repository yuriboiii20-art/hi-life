import React, { useState } from 'react';
import Hero from '../components/Hero';
import VehicleFinder from '../components/VehicleFinder';
import ProductResult from '../components/ProductResult';
import ProductTypesSection from '../components/ProductTypesSection';
import FeatureGrid from '../components/FeatureGrid';
import OfferSection from '../components/OfferSection';
import Testimonials from '../components/Testimonials';
import ProductDetailModal from '../components/ProductDetailModal';
import QuickOrderModal from '../components/QuickOrderModal';

export default function Home() {
  const [matchingResult, setMatchingResult] = useState(null);
  const [preSelectedCoverId, setPreSelectedCoverId] = useState(null);
  const [detailModalCover, setDetailModalCover] = useState(null);
  const [orderModalResult, setOrderModalResult] = useState(null);

  const handleSelectCoverFromCards = (coverId) => {
    setPreSelectedCoverId(coverId);
    const finderEl = document.getElementById('vehicle-finder');
    if (finderEl) {
      finderEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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

      {/* 2. Vehicle Cover Finder & Matching Product Result */}
      <section className="py-8 sm:py-12 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VehicleFinder
            onSelectResult={handleSelectResult}
            initialCoverTypeId={preSelectedCoverId}
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

      {/* 3. Product Types (4 Cover tiers) */}
      <ProductTypesSection
        onSelectCover={handleSelectCoverFromCards}
        onViewDetails={(cover) => setDetailModalCover(cover)}
      />

      {/* 4. Core Product Features (6 Exact features) */}
      <FeatureGrid />

      {/* 5. Promotional Offers & Coupons */}
      <OfferSection />

      {/* 6. Customer Reviews */}
      <Testimonials />

      {/* Modals */}
      {detailModalCover && (
        <ProductDetailModal
          cover={detailModalCover}
          onClose={() => setDetailModalCover(null)}
          onSelectForFinder={(coverId) => {
            setDetailModalCover(null);
            handleSelectCoverFromCards(coverId);
          }}
        />
      )}

      {orderModalResult && (
        <QuickOrderModal
          result={orderModalResult}
          onClose={() => setOrderModalResult(null)}
        />
      )}

    </div>
  );
}
