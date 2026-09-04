import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  CreditCard, 
  Smartphone, 
  Building2, 
  Banknote, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Loader2, 
  RefreshCw,
  Info
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function DemoPaymentModal({ orderData, onClose, onPaymentSuccess }) {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const [activeMethod, setActiveMethod] = useState('upi'); // 'upi' | 'card' | 'netbanking' | 'cod'
  const [upiId, setUpiId] = useState('demo-customer@okhdfcbank');
  const [selectedBank, setSelectedBank] = useState('DEMO_HDFC');
  const [isProcessing, setIsProcessing] = useState(false);
  const [simulationState, setSimulationState] = useState(null); // null | 'success' | 'failed' | 'cancelled'
  const [errorMessage, setErrorMessage] = useState('');
  const [generatedPaymentId, setGeneratedPaymentId] = useState('');

  if (!orderData) return null;

  const { order, accessToken } = orderData;
  const orderId = order.id;
  const totalAmount = order.totalAmount;
  const items = order.items || [];

  const demoBanks = [
    { id: 'DEMO_HDFC', name: 'Demo HDFC Bank' },
    { id: 'DEMO_ICICI', name: 'Demo ICICI Bank' },
    { id: 'DEMO_SBI', name: 'Demo State Bank of India' },
    { id: 'DEMO_AXIS', name: 'Demo Axis Bank' },
    { id: 'DEMO_KOTAK', name: 'Demo Kotak Mahindra Bank' }
  ];

  const handleSimulatePayment = async (action) => {
    if (isProcessing) return; // Prevent double clicks
    setIsProcessing(true);
    setErrorMessage('');

    try {
      // Realistic short simulation delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      const idempotencyKey = `idem_${orderId}_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;

      let methodLabel = 'UPI (Demo)';
      if (activeMethod === 'card') methodLabel = 'Card (Demo)';
      if (activeMethod === 'netbanking') {
        const bankObj = demoBanks.find((b) => b.id === selectedBank);
        methodLabel = `Net Banking (${bankObj ? bankObj.name : 'Demo Bank'})`;
      }
      if (activeMethod === 'cod') methodLabel = 'Cash on Delivery';

      const res = await fetch('/api/payments/demo/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-order-token': accessToken,
          'idempotency-key': idempotencyKey
        },
        body: JSON.stringify({
          orderId,
          accessToken,
          simulationAction: action,
          paymentMethod: methodLabel,
          idempotencyKey
        })
      });

      const data = await res.json();

      if (action === 'success' && data.success) {
        setSimulationState('success');
        setGeneratedPaymentId(data.paymentId || data.order?.paymentId || 'demo_pay_success');
        
        // Clear cart only after successful payment
        clearCart();

        setTimeout(() => {
          setIsProcessing(false);
          if (onPaymentSuccess) {
            onPaymentSuccess(data.order);
          }
          navigate(`/order-confirmation/${orderId}?token=${accessToken}`);
        }, 1000);
      } else if (action === 'failure' || !data.success) {
        setIsProcessing(false);
        setSimulationState('failed');
        setErrorMessage(data.error || 'Simulated payment was declined by the demo gateway.');
      } else if (action === 'cancel') {
        setIsProcessing(false);
        setSimulationState('cancelled');
        setErrorMessage('Payment was cancelled. You can choose another method or retry.');
      }
    } catch (err) {
      setIsProcessing(false);
      setSimulationState('failed');
      setErrorMessage(err.message || 'Failed to communicate with payment simulation server.');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto font-sans"
      onClick={() => {
        if (!isProcessing && simulationState !== 'success') {
          onClose();
        }
      }}
    >
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-stone-200 overflow-hidden text-left my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gateway Brand Header */}
        <div className="bg-gradient-to-r from-stone-900 via-stone-950 to-stone-900 text-white p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-black text-sm shadow-sm">
              HL
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-black tracking-tight text-white">
                  Hi-Life Payment Gateway
                </h3>
                <span className="px-2 py-0.5 rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] font-bold uppercase tracking-wider">
                  Demo Mode
                </span>
              </div>
              <p className="text-[11px] text-stone-400 mt-0.5 font-mono">
                Order ID: <span className="text-stone-200 font-bold">{orderId}</span>
              </p>
            </div>
          </div>

          <div className="text-right flex items-center gap-3">
            <div>
              <span className="text-[10px] text-stone-400 block uppercase font-semibold">Total Payable</span>
              <span className="text-base sm:text-lg font-black text-amber-400">₹{totalAmount}</span>
            </div>

            {!isProcessing && (
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Demo Warning Banner */}
        <div className="bg-amber-50 border-b border-amber-200/80 px-4 py-2.5 flex items-center gap-2.5 text-amber-900">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
          <p className="text-[11px] sm:text-xs font-semibold leading-tight">
            <strong className="font-bold">DEMO SIMULATION ONLY:</strong> No real money will be charged. Do not enter real bank credentials, card numbers, or UPI PINs.
          </p>
        </div>

        {/* Processing Spinner State */}
        {isProcessing && (
          <div className="py-16 px-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-900">
              <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
            </div>
            <div>
              <h4 className="text-base font-black text-stone-950">Processing Demo Payment...</h4>
              <p className="text-xs text-stone-500 mt-1">
                Contacting simulated banking servers and validating order token
              </p>
            </div>
          </div>
        )}

        {/* Failure / Cancellation Alert State */}
        {!isProcessing && (simulationState === 'failed' || simulationState === 'cancelled') && (
          <div className="p-4 sm:p-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto border border-red-200">
              <XCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-black text-stone-950">
                {simulationState === 'cancelled' ? 'Payment Cancelled' : 'Payment Simulation Failed'}
              </h4>
              <p className="text-xs text-stone-600 mt-1 max-w-sm mx-auto">
                {errorMessage}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 justify-center pt-2">
              <button
                type="button"
                onClick={() => setSimulationState(null)}
                className="px-5 py-2.5 rounded-xl bg-stone-950 hover:bg-black text-white text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retry Payment</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold border border-stone-200 cursor-pointer"
              >
                Return to Checkout
              </button>
            </div>
          </div>
        )}

        {/* Main Payment Selection View */}
        {!isProcessing && !simulationState && (
          <div className="p-4 sm:p-6 space-y-4">
            
            {/* Itemized Order Summary Accordion */}
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-2">
              <div className="flex justify-between items-center font-bold text-stone-900 border-b border-stone-200 pb-1.5">
                <span>Items ({items.length})</span>
                <span>Amount: ₹{totalAmount}</span>
              </div>
              <div className="space-y-1 max-h-24 overflow-y-auto">
                {items.map((it, idx) => (
                  <div key={idx} className="flex justify-between text-[11px] text-stone-600">
                    <span className="truncate pr-2">
                      {it.quantity}x {it.name} ({it.brand} {it.model})
                    </span>
                    <span className="font-semibold text-stone-900 shrink-0">₹{it.lineTotal || (it.unitPrice * it.quantity)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method Selector Tabs */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">
                Select Payment Mode (Simulated)
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={() => setActiveMethod('upi')}
                  className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 text-center transition-all cursor-pointer ${
                    activeMethod === 'upi'
                      ? 'bg-stone-950 text-white border-stone-950 shadow-xs'
                      : 'bg-stone-50 text-stone-800 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span className="text-xs font-bold">UPI / QR</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveMethod('card')}
                  className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 text-center transition-all cursor-pointer ${
                    activeMethod === 'card'
                      ? 'bg-stone-950 text-white border-stone-950 shadow-xs'
                      : 'bg-stone-50 text-stone-800 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span className="text-xs font-bold">Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveMethod('netbanking')}
                  className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 text-center transition-all cursor-pointer ${
                    activeMethod === 'netbanking'
                      ? 'bg-stone-950 text-white border-stone-950 shadow-xs'
                      : 'bg-stone-50 text-stone-800 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span className="text-xs font-bold">Net Banking</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveMethod('cod')}
                  className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 text-center transition-all cursor-pointer ${
                    activeMethod === 'cod'
                      ? 'bg-stone-950 text-white border-stone-950 shadow-xs'
                      : 'bg-stone-50 text-stone-800 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <Banknote className="w-4 h-4" />
                  <span className="text-xs font-bold">Pay on Delivery</span>
                </button>
              </div>
            </div>

            {/* Method Details Pane */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-stone-50 border border-stone-200">
              
              {/* UPI Tab Content */}
              {activeMethod === 'upi' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-900">Virtual Payment Address (Demo VPA)</span>
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      No PIN Required
                    </span>
                  </div>

                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="e.g. demo@upi"
                    className="w-full text-xs font-mono font-medium rounded-xl px-3 py-2 bg-white text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />

                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[10px] text-stone-500 font-medium">Demo Presets:</span>
                    {['customer@okaxis', 'hilife@okhdfc', 'demo@paytm'].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setUpiId(preset)}
                        className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-stone-200 hover:bg-stone-300 text-stone-800 transition-colors cursor-pointer"
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Card Tab Content */}
              {activeMethod === 'card' && (
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-900">Demo Card Simulation</span>
                    <span className="text-[10px] text-stone-500 font-medium">Safe Test Sandbox</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-stone-200 text-xs font-mono space-y-1.5">
                    <div className="flex justify-between text-stone-500 text-[10px]">
                      <span>Card Number (Simulated)</span>
                      <span>VISA DEMO</span>
                    </div>
                    <div className="text-sm font-bold text-stone-900 tracking-wider">
                      4242 •••• •••• 4242
                    </div>
                    <div className="flex justify-between text-[11px] text-stone-600 pt-1">
                      <span>Exp: 12/29</span>
                      <span>CVV: •••</span>
                    </div>
                  </div>

                  <p className="text-[10px] text-stone-500">
                    ℹ️ No real card details are collected or processed.
                  </p>
                </div>
              )}

              {/* Net Banking Tab Content */}
              {activeMethod === 'netbanking' && (
                <div className="space-y-2.5">
                  <span className="text-xs font-bold text-stone-900 block">Select Fictional Demo Bank</span>
                  <select
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                    className="w-full text-xs font-semibold rounded-xl px-3 py-2 bg-white text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 cursor-pointer"
                  >
                    {demoBanks.map((bank) => (
                      <option key={bank.id} value={bank.id}>
                        {bank.name}
                      </option>
                    ))}
                  </select>
                  <p className="text-[10px] text-stone-500">
                    ℹ️ You will not be redirected to any external bank website.
                  </p>
                </div>
              )}

              {/* COD Tab Content */}
              {activeMethod === 'cod' && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-stone-900 block">Cash on Delivery Verification</span>
                  <p className="text-xs text-stone-600">
                    Pay <strong>₹{totalAmount}</strong> cash or QR code scan directly to the courier agent upon doorstep delivery.
                  </p>
                </div>
              )}

            </div>

            {/* Simulation Control Buttons */}
            <div className="pt-2 space-y-2 border-t border-stone-200">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block text-center">
                Simulation Controls
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {/* 1. Simulate Success */}
                <button
                  type="button"
                  onClick={() => handleSimulatePayment('success')}
                  className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Simulate Success</span>
                </button>

                {/* 2. Simulate Failure */}
                <button
                  type="button"
                  onClick={() => handleSimulatePayment('failure')}
                  className="py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <XCircle className="w-3.5 h-3.5" />
                  <span>Simulate Failure</span>
                </button>

                {/* 3. Cancel Payment */}
                <button
                  type="button"
                  onClick={() => handleSimulatePayment('cancel')}
                  className="py-2.5 px-3 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Cancel Payment</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
