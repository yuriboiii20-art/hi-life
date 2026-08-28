import React, { useState, useEffect } from 'react';
import { 
  Car, 
  Calendar, 
  Shield, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  Info,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import { CAR_BRANDS, MANUFACTURING_YEARS } from '../data/vehicles';
import { COVER_TYPES, calculateDynamicPrice } from '../data/products';
import { BUSINESS_CONFIG } from '../config/business';

export default function VehicleFinder({ 
  onSelectResult, 
  initialCoverTypeId = null,
  compactMode = false 
}) {
  const [selectedBrandId, setSelectedBrandId] = useState('');
  const [selectedModelId, setSelectedModelId] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedCoverTypeId, setSelectedCoverTypeId] = useState(initialCoverTypeId || '');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Handle external cover type pre-selection
  useEffect(() => {
    if (initialCoverTypeId) {
      setSelectedCoverTypeId(initialCoverTypeId);
    }
  }, [initialCoverTypeId]);

  // Derived objects
  const selectedBrand = CAR_BRANDS.find((b) => b.id === selectedBrandId) || null;
  const availableModels = selectedBrand ? selectedBrand.models : [];
  const selectedModel = availableModels.find((m) => m.id === selectedModelId) || null;
  const selectedCoverType = COVER_TYPES.find((c) => c.id === selectedCoverTypeId) || null;

  // Step 1: Handle Brand Change -> Resets Model, Year, Cover Type
  const handleBrandChange = (e) => {
    const brandId = e.target.value;
    setSelectedBrandId(brandId);
    setSelectedModelId('');
    setSelectedYear('');
    if (!initialCoverTypeId) {
      setSelectedCoverTypeId('');
    }
    setHasSubmitted(false);
    setValidationError('');
  };

  // Step 2: Handle Model Change -> Resets Year, Cover Type
  const handleModelChange = (e) => {
    const modelId = e.target.value;
    setSelectedModelId(modelId);
    setSelectedYear('');
    if (!initialCoverTypeId) {
      setSelectedCoverTypeId('');
    }
    setHasSubmitted(false);
    setValidationError('');
  };

  // Step 3: Handle Year Change
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setHasSubmitted(false);
    setValidationError('');
  };

  // Step 4: Handle Cover Type Change
  const handleCoverTypeChange = (coverId) => {
    if (!selectedYear) {
      setValidationError('Please select the manufacturing year first.');
      return;
    }
    setSelectedCoverTypeId(coverId);
    setHasSubmitted(false);
    setValidationError('');
  };

  // Reset entire flow
  const handleReset = () => {
    setSelectedBrandId('');
    setSelectedModelId('');
    setSelectedYear('');
    setSelectedCoverTypeId('');
    setHasSubmitted(false);
    setValidationError('');
  };

  const isFormComplete = Boolean(
    selectedBrandId && 
    selectedModelId && 
    selectedYear && 
    selectedCoverTypeId
  );

  // Submit / View Result
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormComplete) {
      setValidationError('Please complete all 4 selection steps above to view the custom-fit cover.');
      return;
    }

    setValidationError('');
    setHasSubmitted(true);

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
    <div id="vehicle-finder" className="scroll-mt-24">
      <div className={`rounded-3xl border border-stone-200/90 bg-white shadow-[0_4px_24px_-4px_rgba(28,25,23,0.06)] p-6 sm:p-8 lg:p-10 relative overflow-hidden ${
        compactMode ? 'p-4 sm:p-6' : ''
      }`}>
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-stone-200/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Smart Vehicle Matcher</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight">
              Find the Perfect Cover for Your Car
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-xl font-normal">
              Select your vehicle details below to view guaranteed 3D laser dimensions, fabric specifications, and active offers.
            </p>
          </div>

          {(selectedBrandId || selectedModelId || selectedYear || selectedCoverTypeId) && (
            <button
              onClick={handleReset}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-stone-950 px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-300 transition-colors self-start md:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Selections</span>
            </button>
          )}
        </div>

        {/* Selection Steps Progress Indicator */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 py-6 text-xs font-medium">
          
          <div className={`p-3 rounded-2xl border flex items-center gap-2.5 transition-all ${
            selectedBrandId 
              ? 'bg-stone-900 border-stone-900 text-white shadow-sm' 
              : 'bg-stone-50 border-stone-200 text-stone-700'
          }`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
              selectedBrandId ? 'bg-amber-400 text-stone-950' : 'bg-stone-200 text-stone-700'
            }`}>
              {selectedBrandId ? '✓' : '1'}
            </span>
            <div className="truncate">
              <p className={`text-[10px] uppercase ${selectedBrandId ? 'text-stone-400' : 'text-stone-500'}`}>Step 1</p>
              <p className="font-bold truncate">{selectedBrand ? selectedBrand.name : 'Car Brand'}</p>
            </div>
          </div>

          <div className={`p-3 rounded-2xl border flex items-center gap-2.5 transition-all ${
            selectedModelId 
              ? 'bg-stone-900 border-stone-900 text-white shadow-sm' 
              : selectedBrandId 
                ? 'bg-stone-100 border-stone-400 text-stone-900 ring-1 ring-stone-400' 
                : 'bg-stone-50 border-stone-200 text-stone-400 opacity-60'
          }`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
              selectedModelId ? 'bg-amber-400 text-stone-950' : 'bg-stone-200 text-stone-700'
            }`}>
              {selectedModelId ? '✓' : '2'}
            </span>
            <div className="truncate">
              <p className={`text-[10px] uppercase ${selectedModelId ? 'text-stone-400' : 'text-stone-500'}`}>Step 2</p>
              <p className="font-bold truncate">{selectedModel ? selectedModel.name : 'Car Model'}</p>
            </div>
          </div>

          <div className={`p-3 rounded-2xl border flex items-center gap-2.5 transition-all ${
            selectedYear 
              ? 'bg-stone-900 border-stone-900 text-white shadow-sm' 
              : selectedModelId 
                ? 'bg-stone-100 border-stone-400 text-stone-900 ring-1 ring-stone-400' 
                : 'bg-stone-50 border-stone-200 text-stone-400 opacity-60'
          }`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
              selectedYear ? 'bg-amber-400 text-stone-950' : 'bg-stone-200 text-stone-700'
            }`}>
              {selectedYear ? '✓' : '3'}
            </span>
            <div className="truncate">
              <p className={`text-[10px] uppercase ${selectedYear ? 'text-stone-400' : 'text-stone-500'}`}>Step 3</p>
              <p className="font-bold truncate">{selectedYear ? `${selectedYear} Model` : 'Year'}</p>
            </div>
          </div>

          <div className={`p-3 rounded-2xl border flex items-center gap-2.5 transition-all ${
            selectedCoverTypeId 
              ? 'bg-stone-900 border-stone-900 text-white shadow-sm' 
              : selectedYear 
                ? 'bg-stone-100 border-stone-400 text-stone-900 ring-1 ring-stone-400' 
                : 'bg-stone-50 border-stone-200 text-stone-400 opacity-60'
          }`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
              selectedCoverTypeId ? 'bg-amber-400 text-stone-950' : 'bg-stone-200 text-stone-700'
            }`}>
              {selectedCoverTypeId ? '✓' : '4'}
            </span>
            <div className="truncate">
              <p className={`text-[10px] uppercase ${selectedCoverTypeId ? 'text-stone-400' : 'text-stone-500'}`}>Step 4</p>
              <p className="font-bold truncate">{selectedCoverType ? selectedCoverType.name : 'Cover Type'}</p>
            </div>
          </div>

        </div>

        {/* Guided Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* 3 Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            
            {/* Step 1: Brand */}
            <div className="space-y-1.5">
              <label htmlFor="car-brand-select" className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-800">
                <span className="flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-stone-900" />
                  <span>1. Car Brand *</span>
                </span>
                <span className="text-[11px] text-stone-500 font-normal">12+ Indian Brands</span>
              </label>
              
              <div className="relative">
                <select
                  id="car-brand-select"
                  value={selectedBrandId}
                  onChange={handleBrandChange}
                  className="w-full bg-stone-50 text-stone-900 text-sm font-semibold rounded-2xl px-4 py-3.5 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-stone-900 transition-all cursor-pointer appearance-none shadow-sm"
                  required
                >
                  <option value="" disabled className="text-stone-400">
                    -- Select Car Brand --
                  </option>
                  {CAR_BRANDS.map((brand) => (
                    <option key={brand.id} value={brand.id} className="text-stone-900">
                      {brand.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-500">
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </div>
              </div>
            </div>

            {/* Step 2: Model */}
            <div className="space-y-1.5">
              <label htmlFor="car-model-select" className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-800">
                <span className="flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-stone-900" />
                  <span>2. Car Model *</span>
                </span>
                {selectedBrand && (
                  <span className="text-[11px] text-stone-500 font-normal">
                    {availableModels.length} Models
                  </span>
                )}
              </label>
              
              <div className="relative">
                <select
                  id="car-model-select"
                  value={selectedModelId}
                  onChange={handleModelChange}
                  disabled={!selectedBrandId}
                  className={`w-full text-sm font-semibold rounded-2xl px-4 py-3.5 border transition-all appearance-none shadow-sm ${
                    !selectedBrandId
                      ? 'bg-stone-100 border-stone-200 text-stone-400 cursor-not-allowed'
                      : 'bg-stone-50 text-stone-900 border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-stone-900 cursor-pointer'
                  }`}
                  required
                >
                  <option value="" disabled className="text-stone-400">
                    {!selectedBrandId ? '← First select car brand' : '-- Select Car Model --'}
                  </option>
                  {availableModels.map((model) => (
                    <option key={model.id} value={model.id} className="text-stone-900">
                      {model.name} ({model.bodyType})
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-500">
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </div>
              </div>
            </div>

            {/* Step 3: Year */}
            <div className="space-y-1.5">
              <label htmlFor="car-year-select" className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-800">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-stone-900" />
                  <span>3. Manufacturing Year *</span>
                </span>
                <span className="text-[11px] text-stone-500 font-normal">2005 – 2026</span>
              </label>
              
              <div className="relative">
                <select
                  id="car-year-select"
                  value={selectedYear}
                  onChange={handleYearChange}
                  disabled={!selectedModelId}
                  className={`w-full text-sm font-semibold rounded-2xl px-4 py-3.5 border transition-all appearance-none shadow-sm ${
                    !selectedModelId
                      ? 'bg-stone-100 border-stone-200 text-stone-400 cursor-not-allowed'
                      : 'bg-stone-50 text-stone-900 border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-stone-900 cursor-pointer'
                  }`}
                  required
                >
                  <option value="" disabled className="text-stone-400">
                    {!selectedModelId ? '← First select car model' : '-- Select Manufacturing Year --'}
                  </option>
                  {MANUFACTURING_YEARS.map((yr) => (
                    <option key={yr} value={yr} className="text-stone-900">
                      {yr}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-500">
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </div>
              </div>
            </div>

          </div>

          {/* Step 4: Cover Types Cards */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-800">
                <Shield className="w-4 h-4 text-stone-900" />
                <span>4. Choose Cover Fabric & Protection Level *</span>
              </label>
              {!selectedYear && (
                <span className="text-xs text-stone-500 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-amber-600" /> Select brand, model & year above
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
                    className={`relative p-4 sm:p-5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      isLocked
                        ? 'bg-stone-100 border-stone-200 opacity-60 cursor-not-allowed'
                        : isSelected
                          ? 'bg-stone-950 text-white border-stone-950 shadow-xl ring-2 ring-stone-900 scale-[1.01]'
                          : 'bg-white hover:bg-stone-50 border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        isSelected ? 'bg-amber-500 text-stone-950 font-black' : 'bg-stone-100 text-stone-800'
                      }`}>
                        {cover.badge}
                      </span>
                      {isSelected && (
                        <span className="w-5 h-5 rounded-full bg-white text-stone-950 flex items-center justify-center">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className={`text-sm font-bold leading-snug ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                        {cover.name}
                      </h4>
                      <p className={`text-[11px] mt-1 line-clamp-2 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                        {cover.tagline}
                      </p>
                    </div>

                    <div className={`mt-4 pt-3 border-t flex items-center justify-between ${isSelected ? 'border-stone-800' : 'border-stone-200'}`}>
                      <div>
                        <span className={`text-xs line-through mr-1.5 ${isSelected ? 'text-stone-400' : 'text-stone-400'}`}>
                          ₹{dynamicP.originalPrice}
                        </span>
                        <span className={`text-base font-black ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                          ₹{dynamicP.price}
                        </span>
                      </div>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                        isSelected ? 'text-stone-950 bg-amber-400 font-black' : 'text-stone-900 bg-stone-100 border border-stone-200'
                      }`}>
                        Save {cover.discountPercent}%
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Validation Error */}
          {validationError && (
            <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{validationError}</span>
            </div>
          )}

          {/* Step 5: Summary & Submit */}
          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="text-xs text-stone-600 w-full sm:w-auto">
              <span className="font-bold text-stone-900 uppercase tracking-wider mr-2">
                Your Selection:
              </span>
              {isFormComplete ? (
                <span className="text-stone-900 font-bold bg-stone-100 px-3 py-1.5 rounded-xl inline-flex items-center gap-1.5 border border-stone-300">
                  <span>{selectedBrand.name} {selectedModel.name}</span>
                  <span className="text-stone-600">({selectedYear})</span>
                  <span>•</span>
                  <span className="text-stone-900 font-extrabold">{selectedCoverType.name}</span>
                </span>
              ) : (
                <span className="text-stone-500 italic">
                  Select brand, model, year, and cover type above.
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={!isFormComplete}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all shadow-md ${
                isFormComplete
                  ? 'bg-stone-950 hover:bg-black text-white hover:scale-[1.01] active:scale-[0.99] cursor-pointer'
                  : 'bg-stone-200 text-stone-400 border border-stone-300 cursor-not-allowed'
              }`}
            >
              <span>View Cover & Available Offers</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}
