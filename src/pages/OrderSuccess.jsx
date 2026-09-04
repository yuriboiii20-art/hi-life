import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Package, 
  Calendar, 
  Clock, 
  CreditCard, 
  MapPin, 
  MessageCircle, 
  ArrowRight, 
  ShoppingBag,
  Printer,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function OrderSuccess() {
  const { orderId } = useParams();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchOrder() {
      try {
        setLoading(true);
        const url = `/api/orders/${orderId}${token ? `?token=${encodeURIComponent(token)}` : ''}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.success && data.order) {
          setOrder(data.order);
        } else {
          setError(data.error || 'Unable to retrieve order details.');
        }
      } catch (err) {
        setError(err.message || 'Error connecting to order server.');
      } finally {
        setLoading(false);
      }
    }

    if (orderId) {
      fetchOrder();
    }
  }, [orderId, token]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 bg-[#fafaf9] text-stone-900 font-sans">
        <Loader2 className="w-10 h-10 animate-spin text-stone-900" />
        <p className="text-xs font-semibold text-stone-600 mt-3">Loading order details...</p>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 bg-[#fafaf9] text-stone-900 font-sans text-center">
        <div className="w-14 h-14 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto border border-red-200">
          <AlertCircle className="w-7 h-7" />
        </div>
        <h2 className="text-xl font-black text-stone-950 mt-4">Order Verification Failed</h2>
        <p className="text-xs text-stone-600 mt-1 max-w-sm">{error || 'Order record could not be found.'}</p>
        <Link
          to="/"
          className="mt-6 px-5 py-2.5 rounded-xl bg-stone-950 hover:bg-black text-white text-xs font-bold transition-all"
        >
          Return to Homepage
        </Link>
      </div>
    );
  }

  const isPaid = order.paymentStatus === 'paid';
  const isCod = order.paymentProvider === 'cash_on_delivery' || order.paymentStatus === 'pending_cod';

  const formattedDate = order.paidAt || order.createdAt
    ? new Date(order.paidAt || order.createdAt).toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short'
      })
    : 'Just now';

  const getWhatsAppConfirmationUrl = () => {
    const itemNames = order.items.map((i) => `${i.quantity}x ${i.name} (${i.brand} ${i.model})`).join(', ');
    const text = `Hello Hi-Life! 🎉 I have successfully confirmed my order on your website:%0A%0A📦 *Order ID:* ${order.id}%0A💳 *Payment ID:* ${order.paymentId || 'N/A (COD)'}%0A🛡️ *Items:* ${itemNames}%0A💰 *Amount:* ₹${order.totalAmount}%0A💳 *Payment Mode:* ${order.paymentMethod || 'Demo Gateway'}%0A👤 *Name:* ${order.customerDetails?.customerName}%0A📞 *Phone:* ${order.customerDetails?.phone}%0A📍 *City:* ${order.customerDetails?.city} (${order.customerDetails?.pincode})%0A%0APlease confirm tailoring and dispatch schedule!`;
    return `https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${text}`;
  };

  return (
    <div className="bg-[#fafaf9] text-stone-900 font-sans min-h-screen py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Main Success Container */}
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xl overflow-hidden">
          
          {/* Top Status Header */}
          <div className="bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 text-white p-6 sm:p-8 text-center relative overflow-hidden">
            <div className="absolute top-3 right-3">
              <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] font-bold uppercase tracking-wider">
                Demo Mode
              </span>
            </div>

            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-3 shadow-inner">
              <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
            </div>

            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-1">
              {isPaid ? 'Payment Confirmed' : 'Order Placed Successfully'}
            </span>

            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Thank You for Your Order!
            </h1>

            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-md mx-auto">
              Your custom protective cover tailoring request has been received and confirmed.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-stone-800/80 border border-stone-700 text-xs font-mono text-stone-200">
              <span className="text-stone-400 font-normal">Order Ref:</span>
              <span className="font-bold text-amber-400">{order.id}</span>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-5 sm:p-8 space-y-6">
            
            {/* Meta Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                <span className="text-[10px] text-stone-400 uppercase font-semibold block">Demo Payment ID</span>
                <span className="font-mono font-bold text-stone-950 truncate block mt-0.5" title={order.paymentId || 'N/A'}>
                  {order.paymentId || 'COD / Pending'}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                <span className="text-[10px] text-stone-400 uppercase font-semibold block">Payment Mode</span>
                <span className="font-bold text-stone-950 truncate block mt-0.5">
                  {order.paymentMethod || 'Demo Gateway'}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                <span className="text-[10px] text-stone-400 uppercase font-semibold block">Total Paid</span>
                <span className="font-black text-stone-950 block mt-0.5">
                  ₹{order.totalAmount}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                <span className="text-[10px] text-stone-400 uppercase font-semibold block">Timestamp</span>
                <span className="font-semibold text-stone-800 text-[11px] truncate block mt-0.5">
                  {formattedDate}
                </span>
              </div>
            </div>

            {/* Purchased Items List */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                Order Items ({order.items?.length || 0})
              </h3>

              <div className="rounded-2xl border border-stone-200 divide-y divide-stone-100 overflow-hidden">
                {order.items?.map((item, idx) => (
                  <div key={idx} className="p-3.5 sm:p-4 flex items-center justify-between gap-3 bg-white hover:bg-stone-50 transition-colors">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-black text-xs sm:text-sm text-stone-950 truncate">
                          {item.brand} {item.model} ({item.year})
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-stone-100 text-stone-700">
                          {item.bodyType}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 font-medium truncate mt-0.5">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-stone-400 mt-0.5">
                        Qty: {item.quantity} • Lead time: {item.leadTime || '24 Hrs Dispatch'}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-sm font-black text-stone-950">
                        ₹{item.lineTotal || (item.unitPrice * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Breakdown & Delivery Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Delivery Details */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-stone-950">
                  <MapPin className="w-4 h-4 text-stone-600" />
                  <span>Delivery Address</span>
                </div>
                <div className="text-stone-700 space-y-0.5">
                  <p className="font-bold text-stone-900">{order.customerDetails?.customerName}</p>
                  <p>{order.customerDetails?.address}</p>
                  <p>{order.customerDetails?.city} - {order.customerDetails?.pincode}</p>
                  <p className="pt-1 text-stone-500 font-medium">📞 Phone: {order.customerDetails?.phone}</p>
                </div>
              </div>

              {/* Financial Breakdown */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-stone-950">
                  <CreditCard className="w-4 h-4 text-stone-600" />
                  <span>Payment Summary</span>
                </div>
                <div className="space-y-1 text-stone-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-stone-900">₹{order.subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST (18% Included)</span>
                    <span className="font-semibold text-stone-900">₹{order.tax}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Express Delivery</span>
                    <span className="font-semibold text-emerald-700">FREE</span>
                  </div>
                  <div className="pt-2 border-t border-stone-200 flex justify-between font-black text-sm text-stone-950">
                    <span>Total {isPaid ? 'Paid' : 'Payable'}</span>
                    <span>₹{order.totalAmount}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={getWhatsAppConfirmationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm text-center shadow-xs transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>

              <Link
                to="/products"
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-stone-950 hover:bg-black text-white font-bold text-xs sm:text-sm text-center uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Continue Shopping</span>
              </Link>

              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto p-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs border border-stone-300 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                title="Print Order Receipt"
              >
                <Printer className="w-4 h-4" />
                <span className="sm:hidden">Print Receipt</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
