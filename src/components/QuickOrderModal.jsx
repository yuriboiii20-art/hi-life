import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../config/business';
import { getVehicleModelImage } from '../data/vehicles';
import { useCart } from '../context/CartContext';
import DemoPaymentModal from './DemoPaymentModal';

export default function QuickOrderModal({ result, cartItems, onClose }) {
  const navigate = useNavigate();
  const { clearCart, guestSessionId } = useCart();

  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    pincode: '',
    city: '',
    paymentMethod: 'upi' // default to UPI/Online demo gateway
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentModalData, setPaymentModalData] = useState(null);

  // Normalize order items whether called with single `result` or `cartItems`
  const isCartCheckout = !result && cartItems && cartItems.length > 0;

  let orderItemsToDisplay = [];
  let displayPrice = 0;
  let summaryTitle = 'Order Custom-Fit Cover';

  if (result) {
    displayPrice = result.calculatedPrice;
    summaryTitle = `Order for ${result.brand} ${result.model}`;
    const carImg = result.modelImage || getVehicleModelImage(result.brandId, result.modelId, result.bodyType);
    orderItemsToDisplay = [
      {
        coverId: result.coverType?.id || result.coverId,
        name: result.coverType?.name || 'Custom Cover',
        brand: result.brand,
        model: result.model,
        year: result.year,
        bodyType: result.bodyType,
        image: carImg,
        price: result.calculatedPrice,
        quantity: 1
      }
    ];
  } else if (isCartCheckout) {
    displayPrice = cartItems.reduce((sum, item) => sum + (item.calculatedPrice || item.basePrice || 0) * (item.quantity || 1), 0);
    summaryTitle = `Checkout (${cartItems.length} ${cartItems.length === 1 ? 'Item' : 'Items'})`;
    orderItemsToDisplay = cartItems.map((item) => ({
      coverId: item.coverId || item.id,
      name: item.coverType?.name || item.name || 'Custom Cover',
      brand: item.brand || 'Vehicle',
      model: item.model || 'Model',
      year: item.year || '',
      bodyType: item.bodyType || 'Standard',
      image: item.modelImage || item.heroImage || '/products/camo-car-daylight.jpg',
      price: item.calculatedPrice || item.basePrice,
      quantity: item.quantity || 1
    }));
  }

  if (orderItemsToDisplay.length === 0) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const itemsPayload = orderItemsToDisplay.map((item) => ({
        coverId: item.coverId,
        brand: item.brand,
        model: item.model,
        year: item.year,
        bodyType: item.bodyType,
        quantity: item.quantity
      }));

      // Step 1: Validate cart & create order on backend with tamper-proof prices
      const createRes = await fetch('/api/orders/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-guest-session-id': guestSessionId
        },
        body: JSON.stringify({
          items: itemsPayload,
          customerDetails: formData,
          guestSessionId
        })
      });

      const createData = await createRes.json();

      if (!createData.success) {
        throw new Error(createData.error || 'Failed to initialize order on server.');
      }

      const createdOrder = createData.order;
      const accessToken = createData.accessToken;

      // Step 2: If Online / UPI payment is selected, open DemoPaymentGatewayModal
      if (formData.paymentMethod === 'upi') {
        setIsSubmitting(false);
        setPaymentModalData({
          order: createdOrder,
          accessToken
        });
      } else {
        // Cash on Delivery flow
        const codRes = await fetch('/api/payments/demo/process', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-order-token': accessToken
          },
          body: JSON.stringify({
            orderId: createdOrder.id,
            accessToken,
            simulationAction: 'cod',
            paymentMethod: 'Cash on Delivery'
          })
        });

        const codData = await codRes.json();
        if (codData.success) {
          clearCart();
          setIsSubmitting(false);
          onClose();
          navigate(`/order-confirmation/${createdOrder.id}?token=${accessToken}`);
        } else {
          throw new Error(codData.error || 'Failed to confirm Cash on Delivery order.');
        }
      }
    } catch (err) {
      console.error('Order Submission Error:', err);
      setIsSubmitting(false);
      setErrorMessage(err.message || 'Something went wrong while placing your order.');
    }
  };

  return (
    <>
      <div 
        className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto font-sans"
        onClick={onClose}
      >
        <div 
          className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl bg-white border border-stone-200 shadow-2xl p-4 sm:p-6 my-6 text-left max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-950 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div>
            {/* Header */}
            <div className="pb-3 border-b border-stone-100">
              <span className="text-[10px] uppercase font-bold text-amber-600 tracking-wider">
                Fast & Secure Checkout
              </span>
              <h2 className="text-lg sm:text-xl font-black text-stone-950 tracking-tight">
                {summaryTitle}
              </h2>
              <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
                Precision-tailored for your vehicle with Free Express Pan-India Delivery
              </p>
            </div>

            {/* Error banner if any */}
            {errorMessage && (
              <div className="mt-3 p-3 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2 text-red-800 text-xs font-medium">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Order Items Preview */}
            <div className="mt-3.5 space-y-2">
              {orderItemsToDisplay.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-3.5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-12 rounded-lg object-cover bg-stone-200 shrink-0 border border-stone-200"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-stone-950 truncate">
                      {item.brand} {item.model} {item.year ? `(${item.year})` : ''}
                    </p>
                    <p className="text-[11px] text-stone-600 truncate">
                      {item.name} {item.quantity > 1 ? `× ${item.quantity}` : ''}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-black text-stone-950">
                      ₹{item.price * item.quantity}
                    </p>
                    <span className="text-[10px] text-emerald-700 font-semibold block">
                      Free Delivery
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Form */}
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="space-y-1">
                  <label htmlFor="order-name" className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">
                    Full Name *
                  </label>
                  <input
                    id="order-name"
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full text-xs font-medium rounded-xl px-3 py-2 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="order-phone" className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">
                    Phone Number *
                  </label>
                  <input
                    id="order-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                    title="Please enter 10 digit mobile number"
                    required
                    className="w-full text-xs font-medium rounded-xl px-3 py-2 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="order-address" className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">
                  Delivery Address *
                </label>
                <textarea
                  id="order-address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={2}
                  placeholder="House/Flat No, Street, Landmark, Area"
                  required
                  className="w-full text-xs font-medium rounded-xl px-3 py-2 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="space-y-1">
                  <label htmlFor="order-pincode" className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">
                    Pincode *
                  </label>
                  <input
                    id="order-pincode"
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="6-digit Pincode"
                    pattern="[0-9]{6}"
                    required
                    className="w-full text-xs font-medium rounded-xl px-3 py-2 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="order-city" className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">
                    City / State *
                  </label>
                  <input
                    id="order-city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Bengaluru"
                    required
                    className="w-full text-xs font-medium rounded-xl px-3 py-2 bg-stone-50 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="pt-1">
                <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
                  Choose Payment Method
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label className={`px-3 py-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                    formData.paymentMethod === 'upi'
                      ? 'bg-stone-950 text-white border-stone-950 shadow-xs'
                      : 'bg-stone-50 border-stone-200 text-stone-800 hover:border-stone-300'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleChange}
                      className="accent-amber-400 cursor-pointer"
                    />
                    <div>
                      <span className="text-xs font-bold block">Online / Gateway</span>
                      <span className="text-[10px] text-amber-400 font-semibold">Demo Gateway</span>
                    </div>
                  </label>

                  <label className={`px-3 py-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                    formData.paymentMethod === 'cod'
                      ? 'bg-stone-950 text-white border-stone-950 shadow-xs'
                      : 'bg-stone-50 border-stone-200 text-stone-800 hover:border-stone-300'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      className="accent-amber-400 cursor-pointer"
                    />
                    <div>
                      <span className="text-xs font-bold block">Cash on Delivery</span>
                      <span className="text-[10px] text-stone-400 font-medium">Pay at Doorstep</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-stone-950 hover:bg-black text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md cursor-pointer active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Validating Order with Server...</span>
                    </>
                  ) : formData.paymentMethod === 'upi' ? (
                    `Proceed to Demo Payment (₹${displayPrice})`
                  ) : (
                    `Confirm Order (₹${displayPrice})`
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>

      {/* Demo Payment Gateway Modal */}
      {paymentModalData && (
        <DemoPaymentModal
          orderData={paymentModalData}
          onClose={() => setPaymentModalData(null)}
          onPaymentSuccess={() => {
            setPaymentModalData(null);
            onClose();
          }}
        />
      )}
    </>
  );
}
