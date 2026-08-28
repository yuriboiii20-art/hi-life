import React, { useState } from 'react';
import Hero from '../components/Hero';
import VehicleFinder from '../components/VehicleFinder';
import ProductResult from '../components/ProductResult';
import FeatureGrid from '../components/FeatureGrid';
import WhyChooseHiLife from '../components/WhyChooseHiLife';
import ProductTypesSection from '../components/ProductTypesSection';
import OfferSection from '../components/OfferSection';
import GalleryPreview from '../components/GalleryPreview';
import AboutPreview from '../components/AboutPreview';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
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
    <div className="bg-[#f4f6f8] text-slate-800 font-sans">
      {/* 1. Hero Section */}
      <Hero
        onFindCoverClick={() => {
          const el = document.getElementById('vehicle-finder');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      />

      {/* 2 & 3. Vehicle Cover Finder & Matching Product Result */}
      <section className="py-10 sm:py-14 bg-[#f4f6f8] border-b border-slate-200">
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

      {/* 4. Core Product Features (6 Exact features) */}
      <FeatureGrid />

      {/* 5. Why Choose Hi-Life Trust Section */}
      <WhyChooseHiLife
        onFindCoverClick={() => {
          const el = document.getElementById('vehicle-finder');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 6. Product Types (4 Cover tiers) */}
      <ProductTypesSection
        onSelectCover={handleSelectCoverFromCards}
        onViewDetails={(cover) => setDetailModalCover(cover)}
      />

      {/* 7. Promotional Offers & Coupons */}
      <OfferSection />

      {/* 8. Fitment Gallery Preview with Lightbox */}
      <GalleryPreview limit={6} showViewAll={true} />

      {/* 9. About Hi-Life Story & Philosophy Preview */}
      <AboutPreview />

      {/* 10. Customer Reviews */}
      <Testimonials />

      {/* 11. Final Call To Action */}
      <FinalCTA
        onFindCoverClick={() => {
          const el = document.getElementById('vehicle-finder');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

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
