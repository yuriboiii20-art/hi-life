import React, { useState, useEffect } from 'react';
import { CAR_BRANDS, MANUFACTURING_YEARS, getVehicleModelImage } from '../data/vehicles';
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
    setValidationError('');
  };

  const handleModelChange = (e) => {
    setSelectedModelId(e.target.value);
    setSelectedYear('');
    setValidationError('');
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setValidationError('');
  };

  const handleCoverTypeChange = (e) => {
    setSelectedCoverTypeId(e.target.value);
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
      setValidationError('Please select your Brand, Model, and Year.');
      return;
    }

    setValidationError('');

    const priceInfo = calculateDynamicPrice(
      selectedCoverType.basePrice,
      selectedCoverType.originalPrice,
      selectedModel?.bodyType
    );

    const modelImg = selectedModel?.image || getVehicleModelImage(selectedBrand.id, selectedModel.id, selectedModel.bodyType);

    const resultPayload = {
      brand: selectedBrand.name,
      brandId: selectedBrand.id,
      model: selectedModel.name,
      modelId: selectedModel.id,
      bodyType: selectedModel.bodyType,
      modelImage: modelImg,
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
      <div className={`rounded-2xl border border-stone-200/90 bg-white p-4 sm:p-6 lg:p-7 shadow-xs ${
        compactMode ? 'p-3.5 sm:p-5' : ''
      }`}>
        
        {/* Compact Header */}
        <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-stone-100">
          <div>
            <h2 className="text-base sm:text-lg font-black text-stone-950 tracking-tight">
              Select Your Vehicle
            </h2>
            <p className="text-[11px] sm:text-xs text-stone-500">
              Instant custom dimensions & verified cover fitment
            </p>
          </div>

          {(selectedBrandId || selectedModelId || selectedYear) && (
            <button
              onClick={handleReset}
              type="button"
              className="text-[11px] font-semibold text-stone-500 hover:text-stone-950 underline cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>

        {/* Compact Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          
          {/* Selectors Grid: 2x2 on Mobile, 4 columns on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            
            {/* 1. Brand */}
            <div className="space-y-1">
              <label htmlFor="car-brand-select" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 block truncate">
                1. Brand
              </label>
              <select
                id="car-brand-select"
                value={selectedBrandId}
                onChange={handleBrandChange}
                className="w-full bg-stone-50 hover:bg-stone-100/80 text-stone-900 text-xs sm:text-sm font-medium rounded-xl px-2.5 py-2 sm:px-3.5 sm:py-2.5 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 transition-all cursor-pointer truncate"
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

            {/* 2. Model */}
            <div className="space-y-1">
              <label htmlFor="car-model-select" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 block truncate">
                2. Model
              </label>
              <select
                id="car-model-select"
                value={selectedModelId}
                onChange={handleModelChange}
                disabled={!selectedBrandId}
                className={`w-full text-xs sm:text-sm font-medium rounded-xl px-2.5 py-2 sm:px-3.5 sm:py-2.5 border transition-all truncate ${
                  !selectedBrandId
                    ? 'bg-stone-100 border-stone-200 text-stone-400 cursor-not-allowed'
                    : 'bg-stone-50 hover:bg-stone-100/80 text-stone-900 border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 cursor-pointer'
                }`}
                required
              >
                <option value="" disabled>
                  {!selectedBrandId ? 'Select Brand' : 'Select Model'}
                </option>
                {availableModels.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Year */}
            <div className="space-y-1">
              <label htmlFor="car-year-select" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 block truncate">
                3. Year
              </label>
              <select
                id="car-year-select"
                value={selectedYear}
                onChange={handleYearChange}
                disabled={!selectedModelId}
                className={`w-full text-xs sm:text-sm font-medium rounded-xl px-2.5 py-2 sm:px-3.5 sm:py-2.5 border transition-all truncate ${
                  !selectedModelId
                    ? 'bg-stone-100 border-stone-200 text-stone-400 cursor-not-allowed'
                    : 'bg-stone-50 hover:bg-stone-100/80 text-stone-900 border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 cursor-pointer'
                }`}
                required
              >
                <option value="" disabled>
                  {!selectedModelId ? 'Select Model' : 'Select Year'}
                </option>
                {MANUFACTURING_YEARS.map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
            </div>

            {/* 4. Cover Grade Selector (Compact Dropdown) */}
            <div className="space-y-1">
              <label htmlFor="cover-grade-select" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 block truncate">
                4. Cover Grade
              </label>
              <select
                id="cover-grade-select"
                value={selectedCoverTypeId}
                onChange={handleCoverTypeChange}
                className="w-full bg-stone-50 hover:bg-stone-100/80 text-stone-900 text-xs sm:text-sm font-medium rounded-xl px-2.5 py-2 sm:px-3.5 sm:py-2.5 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 transition-all cursor-pointer truncate"
                required
              >
                <option value="" disabled>Select Cover Grade</option>
                {COVER_TYPES.map((cov) => (
                  <option key={cov.id} value={cov.id}>
                    {cov.name} (from ₹{cov.basePrice})
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Validation Error */}
          {validationError && (
            <div className="p-2 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
              {validationError}
            </div>
          )}

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2.5">
            <div className="text-[11px] text-stone-500 w-full sm:w-auto truncate">
              {isFormComplete ? (
                <span className="text-stone-900 font-semibold">
                  {selectedBrand.name} {selectedModel.name} ({selectedYear}) — {selectedCoverType.name}
                </span>
              ) : (
                <span>Select Brand, Model, Year & Cover Grade above.</span>
              )}
            </div>

            <button
              type="submit"
              disabled={!isFormComplete}
              className={`w-full sm:w-auto px-5 py-2.5 sm:py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-xs shrink-0 ${
                isFormComplete
                  ? 'bg-stone-950 hover:bg-black text-white cursor-pointer active:scale-[0.99]'
                  : 'bg-stone-200 text-stone-400 cursor-not-allowed'
              }`}
            >
              Check Fit & Price
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
