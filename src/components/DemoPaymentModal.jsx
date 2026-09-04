import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  CreditCard, 
  Smartphone, 
  Building2, 
  Banknote, 
  Wallet,
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Loader2, 
  RefreshCw,
  QrCode,
  ArrowRight,
  ChevronLeft,
  Check,
  Lock,
  Sparkles,
  Edit3
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function DemoPaymentModal({
  orderData,
  cartItems,
  initialProductResult,
  onClose,
  onPaymentSuccess
}) {
  const navigate = useNavigate();
  const { clearCart, guestSessionId } = useCart();

  // Multi-step Checkout Flow:
  // Step 1: 'phone' -> Enter Mobile Number
  // Step 2: 'otp' -> Enter 6-digit OTP
  // Step 3: 'checkout' -> Order Summary, Delivery Address & Interactive Payment Options
  const [step, setStep] = useState('phone');

  // Customer Data
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [demoOtpHint, setDemoOtpHint] = useState('123456');
  const [isOtpSending, setIsOtpSending] = useState(false);
  const [isOtpVerifying, setIsOtpVerifying] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);

  // Delivery Address
  const [addressData, setAddressData] = useState({
    customerName: '',
    address: '',
    pincode: '',
    city: ''
  });

  // Active Payment Method: 'upi' | 'card' | 'wallet' | 'netbanking' | 'cod'
  const [activeMethod, setActiveMethod] = useState('upi');

  // UPI Method State
  const [upiId, setUpiId] = useState('customer@okaxis');
  const [qrCodeScanned, setQrCodeScanned] = useState(false);

  // Card Method State
  const [cardData, setCardData] = useState({
    cardNumber: '4242 •••• •••• 4242',
    cardHolder: 'RAHUL SHARMA',
    expiry: '12/28',
    cvv: '888'
  });

  // Wallet Method State
  const [selectedWallet, setSelectedWallet] = useState('paytm');
  const demoWallets = [
    { id: 'paytm', name: 'Paytm Wallet', icon: '🔵', balance: 5400 },
    { id: 'phonepe', name: 'PhonePe Wallet', icon: '🟣', balance: 3200 },
    { id: 'amazonpay', name: 'Amazon Pay Balance', icon: '🟠', balance: 8500 },
    { id: 'mobikwik', name: 'MobiKwik Wallet', icon: '🔷', balance: 2100 }
  ];

  // Netbanking State
  const [selectedBank, setSelectedBank] = useState('DEMO_HDFC');
  const demoBanks = [
    { id: 'DEMO_HDFC', name: 'Demo HDFC Bank' },
    { id: 'DEMO_ICICI', name: 'Demo ICICI Bank' },
    { id: 'DEMO_SBI', name: 'Demo State Bank of India' },
    { id: 'DEMO_AXIS', name: 'Demo Axis Bank' },
    { id: 'DEMO_KOTAK', name: 'Demo Kotak Mahindra Bank' }
  ];

  // Payment Execution & Simulation
  const [isProcessing, setIsProcessing] = useState(false);
  const [simulationState, setSimulationState] = useState(null); // null | 'success' | 'failed' | 'cancelled'
  const [errorMessage, setErrorMessage] = useState('');
  const [activeOrder, setActiveOrder] = useState(orderData ? orderData.order : null);
  const [activeAccessToken, setActiveAccessToken] = useState(orderData ? orderData.accessToken : null);

  // Items normalization
  const normalizedItems = React.useMemo(() => {
    if (activeOrder && activeOrder.items) {
      return activeOrder.items;
    }
    if (initialProductResult) {
      return [
        {
          coverId: initialProductResult.coverType?.id || initialProductResult.coverId,
          name: initialProductResult.coverType?.name || 'Custom Cover',
          brand: initialProductResult.brand,
          model: initialProductResult.model,
          year: initialProductResult.year,
          bodyType: initialProductResult.bodyType,
          unitPrice: initialProductResult.calculatedPrice,
          quantity: 1,
          lineTotal: initialProductResult.calculatedPrice
        }
      ];
    }
    if (cartItems && cartItems.length > 0) {
      return cartItems.map((it) => ({
        coverId: it.coverId || it.id,
        name: it.coverType?.name || it.name || 'Custom Cover',
        brand: it.brand || 'Universal',
        model: it.model || '',
        year: it.year || '',
        bodyType: it.bodyType || 'Standard',
        unitPrice: it.calculatedPrice || it.basePrice || 0,
        quantity: it.quantity || 1,
        lineTotal: (it.calculatedPrice || it.basePrice || 0) * (it.quantity || 1)
      }));
    }
    return [];
  }, [activeOrder, initialProductResult, cartItems]);

  const totalPayable = React.useMemo(() => {
    if (activeOrder) return activeOrder.totalAmount;
    return normalizedItems.reduce((sum, i) => sum + (i.lineTotal || i.unitPrice * i.quantity), 0);
  }, [activeOrder, normalizedItems]);

  // Pre-fill phone if orderData has customer details
  useEffect(() => {
    if (orderData?.order?.customerDetails?.phone) {
      setPhone(orderData.order.customerDetails.phone);
      setAddressData({
        customerName: orderData.order.customerDetails.customerName || '',
        address: orderData.order.customerDetails.address || '',
        pincode: orderData.order.customerDetails.pincode || '',
        city: orderData.order.customerDetails.city || ''
      });
      setPhoneVerified(true);
      setStep('checkout');
    }
  }, [orderData]);

  // 1. Send OTP Handler
  const handleSendOtp = async (e) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsOtpSending(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/payments/otp/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: cleanPhone })
      });
      const data = await res.json();
      if (data.success) {
        setDemoOtpHint(data.demoOtp || '123456');
        setStep('otp');
      } else {
        setErrorMessage(data.error || 'Could not send OTP.');
      }
    } catch {
      // Fallback for offline demo
      setDemoOtpHint('123456');
      setStep('otp');
    } finally {
      setIsOtpSending(false);
    }
  };

  // 2. Verify OTP Handler
  const handleVerifyOtp = async (e) => {
    if (e) e.preventDefault();
    if (!otp.trim()) {
      setErrorMessage('Please enter the 6-digit OTP.');
      return;
    }

    setIsOtpVerifying(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/payments/otp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, otp: otp.trim() })
      });
      const data = await res.json();
      if (data.success) {
        setPhoneVerified(true);
        setStep('checkout');
      } else {
        setErrorMessage(data.error || 'Invalid OTP. (Demo OTP is 123456)');
      }
    } catch {
      if (otp.trim() === '123456' || otp.trim().length === 6) {
        setPhoneVerified(true);
        setStep('checkout');
      } else {
        setErrorMessage('Invalid OTP. Please enter 123456');
      }
    } finally {
      setIsOtpVerifying(false);
    }
  };

  // Auto-fill OTP helper for quick testing
  const handleAutoFillOtp = () => {
    setOtp(demoOtpHint);
  };

  // 3. Process Payment Simulation
  const handleSimulatePayment = async (action) => {
    if (isProcessing) return;

    // Validate delivery address fields before payment
    if (!addressData.customerName || !addressData.address || !addressData.pincode || !addressData.city) {
      setErrorMessage('Please fill in your full delivery address.');
      return;
    }

    if (addressData.pincode.replace(/\D/g, '').length !== 6) {
      setErrorMessage('Please enter a valid 6-digit postal pincode.');
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');

    try {
      let orderId = activeOrder?.id;
      let accessToken = activeAccessToken;

      // Create backend order if not yet created
      if (!orderId) {
        const itemsPayload = normalizedItems.map((i) => ({
          coverId: i.coverId || i.id,
          brand: i.brand,
          model: i.model,
          year: i.year,
          bodyType: i.bodyType,
          quantity: i.quantity
        }));

        const createRes = await fetch('/api/orders/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-guest-session-id': guestSessionId
          },
          body: JSON.stringify({
            items: itemsPayload,
            customerDetails: {
              customerName: addressData.customerName,
              phone,
              address: addressData.address,
              pincode: addressData.pincode,
              city: addressData.city
            },
            guestSessionId
          })
        });

        const createData = await createRes.json();
        if (!createData.success) {
          throw new Error(createData.error || 'Failed to initialize order on server.');
        }

        orderId = createData.orderId;
        accessToken = createData.accessToken;
        setActiveOrder(createData.order);
        setActiveAccessToken(accessToken);
      }

      await new Promise((r) => setTimeout(r, 850));

      const idempotencyKey = `idem_${orderId}_${Date.now()}`;
      let paymentMethodName = 'UPI QR Code (Demo)';
      if (activeMethod === 'card') paymentMethodName = `Credit Card (Demo •••• 4242)`;
      if (activeMethod === 'wallet') {
        const wObj = demoWallets.find((w) => w.id === selectedWallet);
        paymentMethodName = `${wObj ? wObj.name : 'Digital Wallet'} (Demo)`;
      }
      if (activeMethod === 'netbanking') {
        const bObj = demoBanks.find((b) => b.id === selectedBank);
        paymentMethodName = `Net Banking (${bObj ? bObj.name : 'Demo Bank'})`;
      }
      if (activeMethod === 'cod') paymentMethodName = 'Cash on Delivery';

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
          paymentMethod: paymentMethodName,
          idempotencyKey
        })
      });

      const data = await res.json();

      if (action === 'success' && data.success) {
        setSimulationState('success');
        clearCart();
        setTimeout(() => {
          setIsProcessing(false);
          if (onPaymentSuccess) onPaymentSuccess(data.order);
          navigate(`/order-confirmation/${orderId}?token=${accessToken}`);
        }, 1000);
      } else if (action === 'failure' || !data.success) {
        setIsProcessing(false);
        setSimulationState('failed');
        setErrorMessage(data.error || 'Simulated payment was declined by the demo gateway.');
      } else if (action === 'cancel') {
        setIsProcessing(false);
        setSimulationState('cancelled');
        setErrorMessage('Payment was cancelled. You can select another method or retry.');
      }
    } catch (err) {
      setIsProcessing(false);
      setSimulationState('failed');
      setErrorMessage(err.message || 'Payment processing error.');
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
        className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-stone-200 overflow-hidden text-left my-4 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gateway Brand Header (Razorpay / Hi-Life Style) */}
        <div className="bg-gradient-to-r from-stone-900 via-stone-950 to-stone-900 text-white p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-black text-sm shadow-sm">
              HL
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-black tracking-tight text-white">
                  Hi-Life Checkout
                </h3>
                <span className="px-2 py-0.5 rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] font-bold uppercase tracking-wider">
                  Demo Mode
                </span>
              </div>
              <p className="text-[11px] text-stone-400 mt-0.5">
                {step === 'phone' && 'Step 1: Enter Mobile Number'}
                {step === 'otp' && 'Step 2: Enter 6-digit OTP'}
                {step === 'checkout' && 'Step 3: Address & Payment Methods'}
              </p>
            </div>
          </div>

          <div className="text-right flex items-center gap-3">
            <div>
              <span className="text-[10px] text-stone-400 block uppercase font-semibold">Payable</span>
              <span className="text-base sm:text-lg font-black text-amber-400">₹{totalPayable}</span>
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

        {/* Demo Warning Strip */}
        <div className="bg-amber-50 border-b border-amber-200/80 px-4 py-2 flex items-center gap-2 text-amber-900 shrink-0">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
          <p className="text-[11px] font-semibold truncate">
            <strong>DEMO PAYMENT SIMULATOR:</strong> No real bank details or real money charged.
          </p>
        </div>

        {/* Content Container (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">

          {/* Global Error Banner */}
          {errorMessage && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2 text-red-800 text-xs font-medium">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* ============================================================ */}
          {/* STEP 1: MOBILE NUMBER ENTRY */}
          {/* ============================================================ */}
          {step === 'phone' && (
            <div className="py-4 space-y-5 max-w-sm mx-auto text-center">
              <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-900 flex items-center justify-center mx-auto shadow-xs">
                <Smartphone className="w-6 h-6 text-stone-800" />
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-black text-stone-950">
                  Enter Mobile Number
                </h4>
                <p className="text-xs text-stone-500 mt-1">
                  We'll send a 6-digit demo verification OTP to confirm your order
                </p>
              </div>

              <form onSubmit={handleSendOtp} className="space-y-3.5 text-left">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">
                    Phone Number
                  </label>
                  <div className="flex items-center rounded-xl border border-stone-300 bg-stone-50 overflow-hidden focus-within:ring-2 focus-within:ring-stone-900 focus-within:border-transparent">
                    <span className="px-3 text-xs font-bold text-stone-600 bg-stone-200/70 py-2.5 border-r border-stone-300">
                      🇮🇳 +91
                    </span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="9876543210"
                      maxLength={10}
                      autoFocus
                      required
                      className="w-full px-3 py-2.5 text-sm font-semibold text-stone-900 bg-transparent focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isOtpSending}
                  className="w-full py-3 px-4 rounded-xl bg-stone-950 hover:bg-black text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer disabled:opacity-50"
                >
                  {isOtpSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Demo OTP...</span>
                    </>
                  ) : (
                    <>
                      <span>Continue & Get OTP</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant 1-Click Razorpay-Style Verification</span>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* STEP 2: OTP VERIFICATION */}
          {/* ============================================================ */}
          {step === 'otp' && (
            <div className="py-4 space-y-5 max-w-sm mx-auto text-center">
              <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-900 flex items-center justify-center mx-auto shadow-xs">
                <Lock className="w-6 h-6 text-stone-800" />
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-black text-stone-950">
                  Verify OTP
                </h4>
                <p className="text-xs text-stone-500 mt-1">
                  Sent to <strong className="text-stone-900">+91 {phone}</strong>
                </p>
              </div>

              {/* Demo Helper Pill */}
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/90 text-amber-900 flex items-center justify-between text-xs">
                <span className="font-semibold">Demo OTP: <strong className="font-mono">{demoOtpHint}</strong></span>
                <button
                  type="button"
                  onClick={handleAutoFillOtp}
                  className="px-2.5 py-1 rounded-lg bg-stone-950 text-white font-bold text-[10px] uppercase hover:bg-black transition-colors cursor-pointer"
                >
                  Auto-fill
                </button>
              </div>

              <form onSubmit={handleVerifyOtp} className="space-y-3.5 text-left">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">
                    Enter 6-Digit OTP
                  </label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="123456"
                    maxLength={6}
                    autoFocus
                    required
                    className="w-full text-center tracking-widest text-lg font-mono font-bold rounded-xl px-3 py-2.5 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isOtpVerifying}
                  className="w-full py-3 px-4 rounded-xl bg-stone-950 hover:bg-black text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer disabled:opacity-50"
                >
                  {isOtpVerifying ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Verifying...</span>
                    </>
                  ) : (
                    <>
                      <span>Verify & Proceed</span>
                      <Check className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex justify-between items-center text-xs pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setStep('phone');
                      setErrorMessage('');
                    }}
                    className="text-stone-500 hover:text-stone-900 underline cursor-pointer"
                  >
                    Change Number
                  </button>
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="text-stone-700 hover:text-stone-950 font-semibold cursor-pointer"
                  >
                    Resend OTP
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ============================================================ */}
          {/* STEP 3: ORDER SUMMARY, DELIVERY ADDRESS & PAYMENT METHODS */}
          {/* ============================================================ */}
          {step === 'checkout' && !isProcessing && !simulationState && (
            <div className="space-y-4">
              
              {/* Verified Phone Badge */}
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-semibold text-stone-800">
                    Verified: <strong>+91 {phone}</strong>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setStep('phone')}
                  className="text-[11px] text-stone-500 hover:text-stone-950 flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <Edit3 className="w-3 h-3" />
                  <span>Edit</span>
                </button>
              </div>

              {/* 1. Order Items Summary */}
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-stone-950 border-b border-stone-200 pb-1.5">
                  <span>Order Items ({normalizedItems.length})</span>
                  <span>Total: ₹{totalPayable}</span>
                </div>

                <div className="space-y-1.5 max-h-28 overflow-y-auto">
                  {normalizedItems.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-[11px] text-stone-700">
                      <span className="truncate pr-2">
                        {item.quantity}x {item.name} {item.brand && item.model ? `(${item.brand} ${item.model})` : ''}
                      </span>
                      <span className="font-bold text-stone-950 shrink-0">
                        ₹{item.lineTotal || item.unitPrice * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pt-1 flex justify-between text-[10px] text-emerald-700 font-semibold border-t border-stone-200">
                  <span>Pan-India Express Delivery</span>
                  <span>FREE</span>
                </div>
              </div>

              {/* 2. Delivery Address Form */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  Delivery Address
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={addressData.customerName}
                    onChange={(e) => setAddressData({ ...addressData, customerName: e.target.value })}
                    required
                    className="text-xs rounded-xl px-3 py-2 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 font-medium"
                  />
                  <input
                    type="text"
                    placeholder="City / State *"
                    value={addressData.city}
                    onChange={(e) => setAddressData({ ...addressData, city: e.target.value })}
                    required
                    className="text-xs rounded-xl px-3 py-2 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    placeholder="Street, Flat/House No, Landmark *"
                    value={addressData.address}
                    onChange={(e) => setAddressData({ ...addressData, address: e.target.value })}
                    required
                    className="sm:col-span-2 text-xs rounded-xl px-3 py-2 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 font-medium"
                  />
                  <input
                    type="text"
                    placeholder="6-digit Pincode *"
                    value={addressData.pincode}
                    onChange={(e) => setAddressData({ ...addressData, pincode: e.target.value })}
                    maxLength={6}
                    required
                    className="text-xs rounded-xl px-3 py-2 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 font-medium"
                  />
                </div>
              </div>

              {/* 3. Payment Method Tabs (UPI, Card, Wallet, NetBanking, COD) */}
              <div className="space-y-2 pt-1">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  Select Payment Method
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActiveMethod('upi')}
                    className={`p-2 rounded-xl border flex flex-col items-center gap-1 text-center transition-all cursor-pointer ${
                      activeMethod === 'upi'
                        ? 'bg-stone-950 text-white border-stone-950 shadow-xs'
                        : 'bg-stone-50 text-stone-800 border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <QrCode className="w-4 h-4" />
                    <span className="text-[11px] font-bold">UPI / Barcode</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveMethod('card')}
                    className={`p-2 rounded-xl border flex flex-col items-center gap-1 text-center transition-all cursor-pointer ${
                      activeMethod === 'card'
                        ? 'bg-stone-950 text-white border-stone-950 shadow-xs'
                        : 'bg-stone-50 text-stone-800 border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span className="text-[11px] font-bold">Cards</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveMethod('wallet')}
                    className={`p-2 rounded-xl border flex flex-col items-center gap-1 text-center transition-all cursor-pointer ${
                      activeMethod === 'wallet'
                        ? 'bg-stone-950 text-white border-stone-950 shadow-xs'
                        : 'bg-stone-50 text-stone-800 border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <Wallet className="w-4 h-4" />
                    <span className="text-[11px] font-bold">Wallets</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveMethod('netbanking')}
                    className={`p-2 rounded-xl border flex flex-col items-center gap-1 text-center transition-all cursor-pointer ${
                      activeMethod === 'netbanking'
                        ? 'bg-stone-950 text-white border-stone-950 shadow-xs'
                        : 'bg-stone-50 text-stone-800 border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span className="text-[11px] font-bold">Net Banking</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveMethod('cod')}
                    className={`p-2 rounded-xl border flex flex-col items-center gap-1 text-center transition-all cursor-pointer ${
                      activeMethod === 'cod'
                        ? 'bg-stone-950 text-white border-stone-950 shadow-xs'
                        : 'bg-stone-50 text-stone-800 border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <Banknote className="w-4 h-4" />
                    <span className="text-[11px] font-bold">COD</span>
                  </button>
                </div>
              </div>

              {/* 4. Active Method Panel View */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                
                {/* --- A. UPI TAB (Interactive SVG QR/Barcode & Dummy VPA) --- */}
                {activeMethod === 'upi' && (
                  <div className="space-y-3.5">
                    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-3.5 rounded-xl border border-stone-200">
                      {/* High-Precision Interactive SVG QR Barcode */}
                      <div className="relative p-2 rounded-xl bg-white border border-stone-200 shadow-xs flex flex-col items-center shrink-0">
                        <svg className="w-28 h-28" viewBox="0 0 100 100" fill="none">
                          <rect width="100" height="100" fill="white" />
                          {/* Top-Left Corner Box */}
                          <rect x="8" y="8" width="28" height="28" fill="#1c1917" rx="3" />
                          <rect x="13" y="13" width="18" height="18" fill="white" rx="2" />
                          <rect x="17" y="17" width="10" height="10" fill="#1c1917" rx="1" />
                          
                          {/* Top-Right Corner Box */}
                          <rect x="64" y="8" width="28" height="28" fill="#1c1917" rx="3" />
                          <rect x="69" y="13" width="18" height="18" fill="white" rx="2" />
                          <rect x="73" y="17" width="10" height="10" fill="#1c1917" rx="1" />

                          {/* Bottom-Left Corner Box */}
                          <rect x="8" y="64" width="28" height="28" fill="#1c1917" rx="3" />
                          <rect x="13" y="69" width="18" height="18" fill="white" rx="2" />
                          <rect x="17" y="73" width="10" height="10" fill="#1c1917" rx="1" />

                          {/* Data Pattern Matrix */}
                          <rect x="42" y="10" width="6" height="6" fill="#1c1917" />
                          <rect x="52" y="10" width="6" height="6" fill="#1c1917" />
                          <rect x="42" y="22" width="6" height="6" fill="#1c1917" />
                          <rect x="42" y="34" width="6" height="6" fill="#1c1917" />
                          <rect x="52" y="34" width="6" height="6" fill="#1c1917" />

                          <rect x="10" y="42" width="6" height="6" fill="#1c1917" />
                          <rect x="22" y="42" width="6" height="6" fill="#1c1917" />
                          <rect x="34" y="42" width="6" height="6" fill="#1c1917" />
                          <rect x="46" y="46" width="8" height="8" fill="#d97706" rx="2" />
                          <rect x="60" y="42" width="6" height="6" fill="#1c1917" />
                          <rect x="72" y="42" width="6" height="6" fill="#1c1917" />
                          <rect x="84" y="42" width="6" height="6" fill="#1c1917" />

                          <rect x="42" y="60" width="6" height="6" fill="#1c1917" />
                          <rect x="52" y="60" width="6" height="6" fill="#1c1917" />
                          <rect x="64" y="64" width="6" height="6" fill="#1c1917" />
                          <rect x="76" y="64" width="6" height="6" fill="#1c1917" />
                          <rect x="88" y="76" width="6" height="6" fill="#1c1917" />
                          <rect x="64" y="88" width="6" height="6" fill="#1c1917" />
                          <rect x="76" y="88" width="6" height="6" fill="#1c1917" />
                        </svg>
                        <span className="text-[9px] font-bold text-stone-500 mt-1 uppercase">
                          Scan to Pay ₹{totalPayable}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0 space-y-1.5 text-xs text-left">
                        <span className="text-[10px] uppercase font-bold text-amber-600 block">
                          Instant UPI QR Barcode
                        </span>
                        <h5 className="font-bold text-stone-900 text-sm">
                          Scan with any UPI App
                        </h5>
                        <p className="text-[11px] text-stone-500">
                          Google Pay, PhonePe, Paytm, BHIM, CRED
                        </p>
                        <div className="pt-1">
                          <button
                            type="button"
                            onClick={() => setQrCodeScanned(true)}
                            className="text-[11px] font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 px-2.5 py-1 rounded-lg border border-amber-200 transition-colors cursor-pointer"
                          >
                            {qrCodeScanned ? '✓ QR Simulated as Scanned' : '⚡ Click to Simulate App Scan'}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">
                        Or Enter Virtual UPI ID (VPA)
                      </span>
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="customer@okaxis"
                        className="w-full text-xs font-mono font-semibold rounded-xl px-3 py-2 bg-white text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                      />
                      <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                        <span className="text-[10px] text-stone-500">Presets:</span>
                        {['customer@okaxis', 'hilife@upi', 'user@paytm'].map((preset) => (
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
                  </div>
                )}

                {/* --- B. CARD TAB (Interactive Card Details Form) --- */}
                {activeMethod === 'card' && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-stone-900">Card Payment Details</span>
                      <button
                        type="button"
                        onClick={() => setCardData({
                          cardNumber: '4242 •••• •••• 4242',
                          cardHolder: 'RAHUL SHARMA',
                          expiry: '12/28',
                          cvv: '888'
                        })}
                        className="text-[10px] font-bold text-stone-900 bg-stone-200 hover:bg-stone-300 px-2.5 py-0.5 rounded-lg cursor-pointer"
                      >
                        ⚡ Fill Demo Card
                      </button>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <label className="text-[10px] font-bold text-stone-600 uppercase block mb-0.5">
                          Card Number
                        </label>
                        <input
                          type="text"
                          value={cardData.cardNumber}
                          onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
                          placeholder="4242 4242 4242 4242"
                          className="w-full text-xs font-mono font-bold rounded-xl px-3 py-2 bg-white text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                        />
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        <div className="sm:col-span-1">
                          <label className="text-[10px] font-bold text-stone-600 uppercase block mb-0.5">
                            Valid Thru
                          </label>
                          <input
                            type="text"
                            value={cardData.expiry}
                            onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                            placeholder="MM/YY"
                            maxLength={5}
                            className="w-full text-xs font-mono font-bold rounded-xl px-3 py-2 bg-white text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                          />
                        </div>

                        <div className="sm:col-span-1">
                          <label className="text-[10px] font-bold text-stone-600 uppercase block mb-0.5">
                            CVV
                          </label>
                          <input
                            type="password"
                            value={cardData.cvv}
                            onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                            placeholder="•••"
                            maxLength={4}
                            className="w-full text-xs font-mono font-bold rounded-xl px-3 py-2 bg-white text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                          />
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                          <label className="text-[10px] font-bold text-stone-600 uppercase block mb-0.5">
                            Name on Card
                          </label>
                          <input
                            type="text"
                            value={cardData.cardHolder}
                            onChange={(e) => setCardData({ ...cardData, cardHolder: e.target.value })}
                            placeholder="Name"
                            className="w-full text-xs font-semibold uppercase rounded-xl px-3 py-2 bg-white text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                          />
                        </div>
                      </div>
                    </div>

                    <p className="text-[10px] text-stone-500 font-medium">
                      🔒 Simulated 3D Secure Verification • No real charges applied.
                    </p>
                  </div>
                )}

                {/* --- C. WALLET TAB (Paytm, PhonePe, Amazon Pay, MobiKwik) --- */}
                {activeMethod === 'wallet' && (
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-stone-900 block">
                      Select Demo Digital Wallet
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {demoWallets.map((w) => (
                        <label
                          key={w.id}
                          className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                            selectedWallet === w.id
                              ? 'bg-stone-950 text-white border-stone-950 shadow-xs'
                              : 'bg-white text-stone-900 border-stone-200 hover:border-stone-300'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <input
                              type="radio"
                              name="selectedWallet"
                              value={w.id}
                              checked={selectedWallet === w.id}
                              onChange={() => setSelectedWallet(w.id)}
                              className="accent-amber-400 cursor-pointer"
                            />
                            <div>
                              <span className="text-xs font-bold block">{w.name}</span>
                              <span className={`text-[10px] ${selectedWallet === w.id ? 'text-stone-300' : 'text-stone-500'}`}>
                                Avail: ₹{w.balance}
                              </span>
                            </div>
                          </div>
                          <span className="text-base">{w.icon}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* --- D. NET BANKING TAB --- */}
                {activeMethod === 'netbanking' && (
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold text-stone-900 block">Select Fictional Demo Bank</span>
                    <select
                      value={selectedBank}
                      onChange={(e) => setSelectedBank(e.target.value)}
                      className="w-full text-xs font-semibold rounded-xl px-3 py-2 bg-white text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 cursor-pointer"
                    >
                      {demoBanks.map((b) => (
                        <option key={b.id} value={b.id}>{b.name}</option>
                      ))}
                    </select>
                    <p className="text-[10px] text-stone-500">
                      ℹ️ Simulated bank redirect environment.
                    </p>
                  </div>
                )}

                {/* --- E. COD TAB --- */}
                {activeMethod === 'cod' && (
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-stone-900 block">Cash on Delivery</span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Pay <strong>₹{totalPayable}</strong> cash or UPI scan directly to the delivery partner when your custom car cover is delivered.
                    </p>
                  </div>
                )}

              </div>

              {/* 5. Simulation Actions Bar */}
              <div className="pt-2 space-y-2 border-t border-stone-200">
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block text-center">
                  Simulation Controls
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => handleSimulatePayment('success')}
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Simulate Success</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSimulatePayment('failure')}
                    className="py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Simulate Failure</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSimulatePayment('cancel')}
                    className="py-2.5 px-3 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <span>Cancel Payment</span>
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* Processing State */}
          {isProcessing && (
            <div className="py-16 px-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-900">
                <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
              </div>
              <div>
                <h4 className="text-base font-black text-stone-950">Processing Demo Payment...</h4>
                <p className="text-xs text-stone-500 mt-1">
                  Validating payment intent and recording order on server
                </p>
              </div>
            </div>
          )}

          {/* Failed / Cancelled State */}
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
                  Return to Store
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
