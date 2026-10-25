import React, { useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { CAR_BRANDS } from '../data/vehicles';
import { COVER_TYPES, calculateDynamicPrice } from '../data/products';
import CustomDropdown from './CustomDropdown';

export default function VehicleFinder({ 
  onSelectResult,
  initialCoverTypeId = null,
  horizontal = true
}) {
  const [selectedCategory, setSelectedCategory] = useState('car');
  const [selectedBrandId, setSelectedBrandId] = useState('');
  const [selectedModelId, setSelectedModelId] = useState('');
  const [selectedCoverTypeId, setSelectedCoverTypeId] = useState(initialCoverTypeId || 'premium-waterproof');
  const [validationError, setValidationError] = useState('');

  const selectedBrand = CAR_BRANDS.find((b) => b.id === selectedBrandId) || null;
  const availableModels = selectedBrand ? selectedBrand.models : [];
  const selectedModel = availableModels.find((m) => m.id === selectedModelId) || null;
  const selectedCoverType = COVER_TYPES.find((c) => c.id === selectedCoverTypeId) || COVER_TYPES[1];

  const handleCategoryChange = (val) => {
    const value = val?.target?.value || val?.value || val;
    setSelectedCategory(value);
    setSelectedBrandId('');
    setSelectedModelId('');
  };

  const handleBrandChange = (val) => {
    const value = val?.target?.value || val?.value || val;
    setSelectedBrandId(value);
    setSelectedModelId('');
    setValidationError('');
  };

  const handleModelChange = (val) => {
    const value = val?.target?.value || val?.value || val;
    setSelectedModelId(value);
    setValidationError('');
  };

  const handleReset = () => {
    setSelectedBrandId('');
    setSelectedModelId('');
    setValidationError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedBrandId || !selectedModelId) {
      setValidationError('Please select both brand and vehicle model.');
      return;
    }

    setValidationError('');

    const priceInfo = calculateDynamicPrice(
      selectedCoverType.basePrice,
      selectedCoverType.originalPrice,
      selectedModel?.bodyType
    );

    const resultPayload = {
      brand: selectedBrand.name,
      brandId: selectedBrand.id,
      model: selectedModel.name,
      modelId: selectedModel.id,
      bodyType: selectedModel.bodyType,
      category: selectedCategory,
      coverType: selectedCoverType,
      calculatedPrice: priceInfo.price,
      calculatedOriginalPrice: priceInfo.originalPrice,
      discountPercent: priceInfo.discountPercent,
      timestamp: new Date().toISOString()
    };

    if (onSelectResult) {
      onSelectResult(resultPayload);
    }
  };

  return (
    <section id="vehicle-finder" className="scroll-mt-24 w-full bg-white py-14 sm:py-20 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-orange-600 block">
              FIND YOUR COVER
            </span>

            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-stone-950 tracking-tight leading-tight">
              Your vehicle. Its cover.
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
              Pick your brand and model. We'll show the covers made for it.
            </p>

            <p className="text-[11px] text-stone-400 pt-2 font-normal">
              Tailored for 250+ models. Free shipping on every order.
            </p>
          </div>

          {/* Right Column: Inline Horizontal Dropdown Selectors */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-3">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3 items-end">
                
                {/* 1. COVERS (Car / Scooter) */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                    COVERS
                  </label>
                  <CustomDropdown
                    id="cover-category-select"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    options={[
                      { value: 'car', label: 'Car Covers' },
                      { value: 'bike', label: 'Bike / Scooter Covers' }
                    ]}
                    placeholder="Select cover type"
                    title="Select Vehicle Type"
                  />
                </div>

                {/* 2. BRAND */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                    BRAND
                  </label>
                  <CustomDropdown
                    id="vehicle-brand-select"
                    value={selectedBrandId}
                    onChange={handleBrandChange}
                    options={CAR_BRANDS.map((b) => ({
                      value: b.id,
                      label: b.name,
                      sublabel: b.country
                    }))}
                    placeholder="Select make"
                    title="Select Brand"
                    required
                  />
                </div>

                {/* 3. MODEL */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                    MODEL
                  </label>
                  <CustomDropdown
                    id="vehicle-model-select"
                    value={selectedModelId}
                    onChange={handleModelChange}
                    disabled={!selectedBrandId}
                    options={availableModels.map((m) => ({
                      value: m.id,
                      label: m.name,
                      sublabel: m.bodyType
                    }))}
                    placeholder="Select model"
                    disabledPlaceholder="Select make first"
                    title="Select Model"
                    required
                  />
                </div>

                {/* 4. FIND MY COVER Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full h-[42px] px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm shadow-orange-600/25 active:scale-[0.98] cursor-pointer"
                  >
                    <span>Find My Cover</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

              {/* Validation / Reset */}
              <div className="flex items-center justify-between text-xs">
                {validationError && (
                  <span className="text-red-600 font-medium text-xs">
                    {validationError}
                  </span>
                )}

                {(selectedBrandId || selectedModelId) && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="ml-auto inline-flex items-center gap-1 text-[11px] text-stone-400 hover:text-stone-900 underline cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset selection</span>
                  </button>
                )}
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
