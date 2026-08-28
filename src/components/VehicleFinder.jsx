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
      <div className={`rounded-2xl border border-slate-200 bg-white shadow-md p-6 sm:p-8 lg:p-10 relative overflow-hidden ${
        compactMode ? 'p-4 sm:p-6' : ''
      }`}>
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Smart Vehicle Matcher</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
              Find the Perfect Cover for Your Car
            </h2>
            <p className="text-sm text-neutral-600 mt-1 max-w-xl font-normal">
              Select your vehicle details below to view guaranteed 3D laser dimensions, fabric specifications, and active offers.
            </p>
          </div>

          {(selectedBrandId || selectedModelId || selectedYear || selectedCoverTypeId) && (
            <button
              onClick={handleReset}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 hover:text-black px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 transition-colors self-start md:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Selections</span>
            </button>
          )}
        </div>

        {/* Selection Steps Progress Indicator */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 py-6 text-xs font-medium">
          
          <div className={`p-2.5 rounded-xl border flex items-center gap-2 transition-all ${
            selectedBrandId 
              ? 'bg-black border-black text-white' 
              : 'bg-neutral-50 border-neutral-200 text-neutral-700'
          }`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
              selectedBrandId ? 'bg-white text-black' : 'bg-neutral-200 text-neutral-600'
            }`}>
              {selectedBrandId ? '✓' : '1'}
            </span>
            <div className="truncate">
              <p className={`text-[10px] uppercase ${selectedBrandId ? 'text-neutral-400' : 'text-neutral-500'}`}>Step 1</p>
              <p className="font-bold truncate">{selectedBrand ? selectedBrand.name : 'Car Brand'}</p>
            </div>
          </div>

          <div className={`p-2.5 rounded-xl border flex items-center gap-2 transition-all ${
            selectedModelId 
              ? 'bg-black border-black text-white' 
              : selectedBrandId 
                ? 'bg-neutral-100 border-neutral-400 text-black ring-1 ring-neutral-400' 
                : 'bg-neutral-50 border-neutral-200 text-neutral-400 opacity-60'
          }`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
              selectedModelId ? 'bg-white text-black' : 'bg-neutral-200 text-neutral-600'
            }`}>
              {selectedModelId ? '✓' : '2'}
            </span>
            <div className="truncate">
              <p className={`text-[10px] uppercase ${selectedModelId ? 'text-neutral-400' : 'text-neutral-500'}`}>Step 2</p>
              <p className="font-bold truncate">{selectedModel ? selectedModel.name : 'Car Model'}</p>
            </div>
          </div>

          <div className={`p-2.5 rounded-xl border flex items-center gap-2 transition-all ${
            selectedYear 
              ? 'bg-black border-black text-white' 
              : selectedModelId 
                ? 'bg-neutral-100 border-neutral-400 text-black ring-1 ring-neutral-400' 
                : 'bg-neutral-50 border-neutral-200 text-neutral-400 opacity-60'
          }`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
              selectedYear ? 'bg-white text-black' : 'bg-neutral-200 text-neutral-600'
            }`}>
              {selectedYear ? '✓' : '3'}
            </span>
            <div className="truncate">
              <p className={`text-[10px] uppercase ${selectedYear ? 'text-neutral-400' : 'text-neutral-500'}`}>Step 3</p>
              <p className="font-bold truncate">{selectedYear ? `${selectedYear} Model` : 'Year'}</p>
            </div>
          </div>

          <div className={`p-2.5 rounded-xl border flex items-center gap-2 transition-all ${
            selectedCoverTypeId 
              ? 'bg-black border-black text-white' 
              : selectedYear 
                ? 'bg-neutral-100 border-neutral-400 text-black ring-1 ring-neutral-400' 
                : 'bg-neutral-50 border-neutral-200 text-neutral-400 opacity-60'
          }`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
              selectedCoverTypeId ? 'bg-white text-black' : 'bg-neutral-200 text-neutral-600'
            }`}>
              {selectedCoverTypeId ? '✓' : '4'}
            </span>
            <div className="truncate">
              <p className={`text-[10px] uppercase ${selectedCoverTypeId ? 'text-neutral-400' : 'text-neutral-500'}`}>Step 4</p>
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
              <label htmlFor="car-brand-select" className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700">
                <span className="flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-[#19277c]" />
                  <span>1. Car Brand *</span>
                </span>
                <span className="text-[11px] text-slate-500 font-normal">12+ Indian Brands</span>
              </label>
              
              <div className="relative">
                <select
                  id="car-brand-select"
                  value={selectedBrandId}
                  onChange={handleBrandChange}
                  className="w-full bg-white text-slate-800 text-sm font-semibold rounded-xl px-4 py-3.5 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#19277c] focus:border-[#19277c] transition-all cursor-pointer appearance-none shadow-sm"
                  required
                >
                  <option value="" disabled className="text-slate-400">
                    -- Select Car Brand --
                  </option>
                  {CAR_BRANDS.map((brand) => (
                    <option key={brand.id} value={brand.id} className="text-slate-800">
                      {brand.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </div>
              </div>
            </div>

            {/* Step 2: Model */}
            <div className="space-y-1.5">
              <label htmlFor="car-model-select" className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700">
                <span className="flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-[#19277c]" />
                  <span>2. Car Model *</span>
                </span>
                {selectedBrand && (
                  <span className="text-[11px] text-slate-500 font-normal">
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
                  className={`w-full text-sm font-semibold rounded-xl px-4 py-3.5 border transition-all appearance-none shadow-sm ${
                    !selectedBrandId
                      ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-white text-slate-800 border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#19277c] focus:border-[#19277c] cursor-pointer'
                  }`}
                  required
                >
                  <option value="" disabled className="text-slate-400">
                    {!selectedBrandId ? '← First select car brand' : '-- Select Car Model --'}
                  </option>
                  {availableModels.map((model) => (
                    <option key={model.id} value={model.id} className="text-slate-800">
                      {model.name} ({model.bodyType})
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </div>
              </div>
            </div>

            {/* Step 3: Year */}
            <div className="space-y-1.5">
              <label htmlFor="car-year-select" className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#19277c]" />
                  <span>3. Manufacturing Year *</span>
                </span>
                <span className="text-[11px] text-slate-500 font-normal">2005 – 2026</span>
              </label>
              
              <div className="relative">
                <select
                  id="car-year-select"
                  value={selectedYear}
                  onChange={handleYearChange}
                  disabled={!selectedModelId}
                  className={`w-full text-sm font-semibold rounded-xl px-4 py-3.5 border transition-all appearance-none shadow-sm ${
                    !selectedModelId
                      ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-white text-slate-800 border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#19277c] focus:border-[#19277c] cursor-pointer'
                  }`}
                  required
                >
                  <option value="" disabled className="text-slate-400">
                    {!selectedModelId ? '← First select car model' : '-- Select Manufacturing Year --'}
                  </option>
                  {MANUFACTURING_YEARS.map((yr) => (
                    <option key={yr} value={yr} className="text-slate-800">
                      {yr}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </div>
              </div>
            </div>

          </div>

          {/* Step 4: Cover Types Cards */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
                <Shield className="w-4 h-4 text-[#19277c]" />
                <span>4. Choose Cover Fabric & Protection Level *</span>
              </label>
              {!selectedYear && (
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-[#ea580c]" /> Select brand, model & year above
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
                    className={`relative p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      isLocked
                        ? 'bg-neutral-100 border-neutral-200 opacity-60 cursor-not-allowed'
                        : isSelected
                          ? 'bg-black text-white border-black shadow-xl ring-2 ring-black'
                          : 'bg-white hover:bg-neutral-50 border-neutral-200 hover:border-black'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        isSelected ? 'bg-white text-black' : 'bg-neutral-100 text-neutral-800'
                      }`}>
                        {cover.badge}
                      </span>
                      {isSelected && (
                        <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className={`text-sm font-bold leading-snug ${isSelected ? 'text-white' : 'text-black'}`}>
                        {cover.name}
                      </h4>
                      <p className={`text-[11px] mt-1 line-clamp-2 ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                        {cover.tagline}
                      </p>
                    </div>

                    <div className={`mt-4 pt-3 border-t flex items-center justify-between ${isSelected ? 'border-neutral-800' : 'border-neutral-200'}`}>
                      <div>
                        <span className={`text-xs line-through mr-1.5 ${isSelected ? 'text-neutral-400' : 'text-neutral-400'}`}>
                          ₹{dynamicP.originalPrice}
                        </span>
                        <span className={`text-base font-black ${isSelected ? 'text-white' : 'text-black'}`}>
                          ₹{dynamicP.price}
                        </span>
                      </div>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        isSelected ? 'text-black bg-white' : 'text-white bg-black'
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
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{validationError}</span>
            </div>
          )}

          {/* Step 5: Summary & Submit */}
          <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="text-xs text-neutral-600 w-full sm:w-auto">
              <span className="font-bold text-black uppercase tracking-wider mr-2">
                Your Selection:
              </span>
              {isFormComplete ? (
                <span className="text-black font-bold bg-neutral-100 px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 border border-neutral-300">
                  <span>{selectedBrand.name} {selectedModel.name}</span>
                  <span className="text-neutral-600">({selectedYear})</span>
                  <span>•</span>
                  <span className="text-black font-extrabold">{selectedCoverType.name}</span>
                </span>
              ) : (
                <span className="text-neutral-500 italic">
                  Select brand, model, year, and cover type above.
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={!isFormComplete}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all shadow-md ${
                isFormComplete
                  ? 'bg-black hover:bg-neutral-800 text-white hover:scale-[1.02] active:scale-[0.98] cursor-pointer'
                  : 'bg-neutral-200 text-neutral-400 border border-neutral-300 cursor-not-allowed'
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
