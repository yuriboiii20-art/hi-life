import React, { useState } from 'react';
import HeroHotspotExperience from '../components/HeroHotspotExperience';
import VehicleFinder from '../components/VehicleFinder';
import ProductResult from '../components/ProductResult';
import WhyCoversFail from '../components/WhyCoversFail';
import ProtectionSolution from '../components/ProtectionSolution';
import ProtectionSystem from '../components/ProtectionSystem';
import AboutPreviewHiLife from '../components/AboutPreviewHiLife';
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
    <div className="bg-white text-stone-900 font-sans overflow-x-hidden">
      
      {/* 1. Hi-Life Hero Experience: Interactive Hotspots on Car Cover */}
      <HeroHotspotExperience
        onFinderClick={scrollToFinder}
        onShopClick={() => {
          const el = document.getElementById('protection-system');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      />

      {/* 2. Hi-Life Signature Inline Dropdown: 'Your vehicle. Its cover.' */}
      <VehicleFinder
        onSelectResult={handleSelectResult}
        initialCoverTypeId={preselectedCoverId}
      />

      {/* Matching Vehicle Result Card (Appears dynamically below finder) */}
      {matchingResult && (
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-12">
          <ProductResult
            result={matchingResult}
            onReset={handleResetResult}
            onBuyNow={(res) => setOrderModalResult(res)}
          />
        </div>
      )}

      {/* 3. Hi-Life Feature: Why Most Covers Fail */}
      <WhyCoversFail />

      {/* 4. Hi-Life Feature: The Solution (Interactive Before / After Comparison Slider) */}
      <ProtectionSolution onFinderClick={scrollToFinder} />

      {/* 5. Hi-Life Feature: Cover Grades & Protection System */}
      <ProtectionSystem
        onSelectCover={handleSelectCoverFromMatrix}
        onViewDetails={(cover) => setDetailModalCover(cover)}
      />

      {/* 6. Hi-Life Feature: Workshop Craftsmanship / Why We Do What We Do */}
      <AboutPreviewHiLife />

      {/* 7. Verified Customer Reviews Carousel: 'What owners say!' */}
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
