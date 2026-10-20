import React, { useState } from 'react';
import HeroHotspotExperience from '../components/HeroHotspotExperience';
import OurEcosystem from '../components/OurEcosystem';
import WhyCoversFail from '../components/WhyCoversFail';
import ProtectionSolution from '../components/ProtectionSolution';
import ProtectionSystem from '../components/ProtectionSystem';
import VehicleFinder from '../components/VehicleFinder';
import ProductResult from '../components/ProductResult';
import AboutPreviewOenum from '../components/AboutPreviewOenum';
import Testimonials from '../components/Testimonials';
import ProductDetailModal from '../components/ProductDetailModal';
import QuickOrderModal from '../components/QuickOrderModal';

export default function Home() {
  const [matchingResult, setMatchingResult] = useState(null);
  const [orderModalResult, setOrderModalResult] = useState(null);
  const [detailModalCover, setDetailModalCover] = useState(null);
  const [preselectedCoverId, setPreselectedCoverId] = useState(null);

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

  const handleSelectCoverFromMatrix = (coverId) => {
    setPreselectedCoverId(coverId);
    const finderEl = document.getElementById('vehicle-finder');
    if (finderEl) {
      finderEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToFinder = () => {
    const finderEl = document.getElementById('vehicle-finder');
    if (finderEl) {
      finderEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#fafaf9] text-stone-900 font-sans overflow-x-hidden">
      
      {/* 1. Oenum Signature Hero: Interactive Vehicle Hotspot Experience */}
      <HeroHotspotExperience
        onFinderClick={scrollToFinder}
        onShopClick={() => {
          const el = document.getElementById('protection-system');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      />

      {/* 2. Oenum Feature: Our Ecosystem (Car Covers, Bike Covers, Tarpaulin Products) */}
      <OurEcosystem />

      {/* 3. Oenum Feature: Why Most Covers Fail (Heat, Scratches, Poor Fit, Fabric Decay) */}
      <WhyCoversFail />

      {/* 4. Oenum Feature: The Solution (Premium Protection. Effortlessly.) */}
      <ProtectionSolution onFinderClick={scrollToFinder} />

      {/* 5. Oenum Feature: The Protection System (Cover Grades Matrix) */}
      <ProtectionSystem
        onSelectCover={handleSelectCoverFromMatrix}
        onViewDetails={(cover) => setDetailModalCover(cover)}
      />

      {/* 6. Vehicle Cover Finder & Matching Product Result */}
      <section className="py-14 sm:py-20 bg-[#fafaf9] border-b border-stone-200/90 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700 block mb-1">
              CUSTOM 3D FITMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight">
              Measured for Your Vehicle. Not Vehicles in General.
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-normal">
              Select your vehicle make, model, and year to get custom-tailored dimensions and authoritative dynamic pricing.
            </p>
          </div>

          <VehicleFinder
            onSelectResult={handleSelectResult}
            initialCoverTypeId={preselectedCoverId}
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

      {/* 7. Oenum Feature: About Hanuman Tarpaulins (20 Years Experience Story) */}
      <AboutPreviewOenum />

      {/* 8. Verified Customer Reviews */}
      <Testimonials />

      {/* Modal 1: Product Technical Detail Modal */}
      {detailModalCover && (
        <ProductDetailModal
          cover={detailModalCover}
          onClose={() => setDetailModalCover(null)}
          onSelectForFinder={(coverId) => {
            setDetailModalCover(null);
            handleSelectCoverFromMatrix(coverId);
          }}
        />
      )}

      {/* Modal 2: Quick Order & Checkout Simulation Modal */}
      {orderModalResult && (
        <QuickOrderModal
          result={orderModalResult}
          onClose={() => setOrderModalResult(null)}
        />
      )}

    </div>
  );
}
