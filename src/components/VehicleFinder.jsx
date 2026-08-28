import React, { useState, useEffect } from 'react';
import { CAR_BRANDS, MANUFACTURING_YEARS } from '../data/vehicles';
import { COVER_TYPES, calculateDynamicPrice } from '../data/products';

export default function VehicleFinder({ 
  onSelectResult, 
  initialCoverTypeId = null,
  compactMode = false 
}) {
  const [selectedBrandId, setSelectedBrandId] = useState('');
  const [selectedModelId, setSelectedModelId] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedCoverTypeId, setSelectedCoverTypeId] = useState(initialCoverTypeId || '');
  const [validationError, setValidationError] = useState('');

  // Handle external cover type pre-selection
  useEffect(() => {
    if (initialCoverTypeId) {
      setSelectedCoverTypeId(initialCoverTypeId);
    }
  }, [initialCoverTypeId]);

  const selectedBrand = CAR_BRANDS.find((b) => b.id === selectedBrandId) || null;
  const availableModels = selectedBrand ? selectedBrand.models : [];
  const selectedModel = availableModels.find((m) => m.id === selectedModelId) || null;
  const selectedCoverType = COVER_TYPES.find((c) => c.id === selectedCoverTypeId) || null;

  const handleBrandChange = (e) => {
    setSelectedBrandId(e.target.value);
    setSelectedModelId('');
    setSelectedYear('');
    if (!initialCoverTypeId) {
      setSelectedCoverTypeId('');
    }
    setValidationError('');
  };

  const handleModelChange = (e) => {
    setSelectedModelId(e.target.value);
    setSelectedYear('');
    if (!initialCoverTypeId) {
      setSelectedCoverTypeId('');
    }
    setValidationError('');
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setValidationError('');
  };

  const handleCoverTypeChange = (coverId) => {
    if (!selectedYear) {
      setValidationError('Please select Brand, Model, and Year first.');
      return;
    }
    setSelectedCoverTypeId(coverId);
    setValidationError('');
  };

  const handleReset = () => {
    setSelectedBrandId('');
    setSelectedModelId('');
    setSelectedYear('');
    setSelectedCoverTypeId('');
    setValidationError('');
  };

  const isFormComplete = Boolean(
    selectedBrandId && 
    selectedModelId && 
    selectedYear && 
    selectedCoverTypeId
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormComplete) {
      setValidationError('Please select Brand, Model, Year, and Cover Type.');
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
      year: selectedYear,
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
    <div id="vehicle-finder" className="scroll-mt-20 w-full">
      <div className={`rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-5 sm:p-8 lg:p-10 shadow-sm ${
        compactMode ? 'p-4 sm:p-6' : ''
      }`}>
        
        {/* Simple Clean Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-stone-200/80">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-stone-950 tracking-tight">
              Select Your Vehicle
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
              Choose your car make, model, year, and cover grade to view guaranteed custom fitment.
            </p>
          </div>

          {(selectedBrandId || selectedModelId || selectedYear || selectedCoverTypeId) && (
            <button
              onClick={handleReset}
              type="button"
              className="text-xs font-semibold text-stone-600 hover:text-stone-950 underline self-start sm:self-auto cursor-pointer"
            >
              Reset selections
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4 sm:space-y-6">
          
          {/* Inputs Grid - Clean Minimalist Design with NO Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            
            {/* 1. Brand Selector */}
            <div className="space-y-1">
              <label htmlFor="car-brand-select" className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 block">
                Brand
              </label>
              <select
                id="car-brand-select"
                value={selectedBrandId}
                onChange={handleBrandChange}
                className="w-full bg-stone-50 hover:bg-stone-100/70 text-stone-900 text-xs sm:text-sm font-medium rounded-xl px-3 py-2.5 sm:px-4 sm:py-3.5 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-stone-900 transition-all cursor-pointer"
                required
              >
                <option value="" disabled>Select Brand</option>
                {CAR_BRANDS.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Model Selector */}
            <div className="space-y-1">
              <label htmlFor="car-model-select" className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 block">
                Model
              </label>
              <select
                id="car-model-select"
                value={selectedModelId}
                onChange={handleModelChange}
                disabled={!selectedBrandId}
                className={`w-full text-xs sm:text-sm font-medium rounded-xl px-3 py-2.5 sm:px-4 sm:py-3.5 border transition-all ${
                  !selectedBrandId
                    ? 'bg-stone-100 border-stone-200 text-stone-400 cursor-not-allowed'
                    : 'bg-stone-50 hover:bg-stone-100/70 text-stone-900 border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-stone-900 cursor-pointer'
                }`}
                required
              >
                <option value="" disabled>
                  {!selectedBrandId ? 'Select Brand first' : 'Select Model'}
                </option>
                {availableModels.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name} ({model.bodyType})
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Year Selector */}
            <div className="space-y-1">
              <label htmlFor="car-year-select" className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 block">
                Year
              </label>
              <select
                id="car-year-select"
                value={selectedYear}
                onChange={handleYearChange}
                disabled={!selectedModelId}
                className={`w-full text-xs sm:text-sm font-medium rounded-xl px-3 py-2.5 sm:px-4 sm:py-3.5 border transition-all ${
                  !selectedModelId
                    ? 'bg-stone-100 border-stone-200 text-stone-400 cursor-not-allowed'
                    : 'bg-stone-50 hover:bg-stone-100/70 text-stone-900 border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-stone-900 cursor-pointer'
                }`}
                required
              >
                <option value="" disabled>
                  {!selectedModelId ? 'Select Model first' : 'Select Year'}
                </option>
                {MANUFACTURING_YEARS.map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* 4. Cover Type Selection - Clean Typographic Cards (No Icons) */}
          <div className="space-y-2 pt-1">
            <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 block">
              Cover Grade
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
              {COVER_TYPES.map((cover) => {
                const isSelected = selectedCoverTypeId === cover.id;
                const isLocked = !selectedYear;
                
                const dynamicP = selectedModel 
                  ? calculateDynamicPrice(cover.basePrice, cover.originalPrice, selectedModel.bodyType)
                  : { price: cover.basePrice, originalPrice: cover.originalPrice };

                return (
                  <button
                    key={cover.id}
                    type="button"
                    disabled={isLocked}
                    onClick={() => handleCoverTypeChange(cover.id)}
                    className={`p-3 sm:p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isLocked
                        ? 'bg-stone-100 border-stone-200 opacity-60 cursor-not-allowed'
                        : isSelected
                          ? 'bg-stone-950 text-white border-stone-950 shadow-md ring-2 ring-stone-900'
                          : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-900'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          isSelected ? 'bg-amber-400 text-stone-950 font-bold' : 'bg-stone-200 text-stone-700'
                        }`}>
                          {cover.badge}
                        </span>
                      </div>
                      <h4 className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-white' : 'text-stone-950'}`}>
                        {cover.name}
                      </h4>
                      <p className={`text-[11px] mt-0.5 line-clamp-1 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                        {cover.tagline}
                      </p>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-stone-200/40 flex items-center justify-between">
                      <span className={`text-xs sm:text-sm font-black ${isSelected ? 'text-white' : 'text-stone-950'}`}>
                        ₹{dynamicP.price}
                      </span>
                      <span className={`text-[9px] sm:text-[10px] font-semibold ${isSelected ? 'text-amber-300' : 'text-stone-500'}`}>
                        Save {cover.discountPercent}%
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Validation Message */}
          {validationError && (
            <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
              {validationError}
            </div>
          )}

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="text-[11px] sm:text-xs text-stone-600 w-full sm:w-auto">
              {isFormComplete ? (
                <span className="text-stone-900 font-semibold">
                  Selected: {selectedBrand.name} {selectedModel.name} ({selectedYear}) — {selectedCoverType.name}
                </span>
              ) : (
                <span className="text-stone-400">
                  Select brand, model, year, and cover grade.
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={!isFormComplete}
              className={`w-full sm:w-auto px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm ${
                isFormComplete
                  ? 'bg-stone-950 hover:bg-black text-white cursor-pointer active:scale-[0.99]'
                  : 'bg-stone-200 text-stone-400 cursor-not-allowed'
              }`}
            >
              View Fitment & Price
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
