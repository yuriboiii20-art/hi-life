import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import QuickOrderModal from './QuickOrderModal';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalItemsCount
  } = useCart();

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  if (!isCartOpen) return null;

  const handleOpenCheckout = () => {
    if (cart.length === 0) return;
    setIsCartOpen(false);
    setCheckoutModalOpen(true);
  };

  return (
    <>
      <div 
        className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs transition-opacity flex justify-end"
        onClick={() => setIsCartOpen(false)}
      >
        <div 
          className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-stone-950 text-white flex items-center justify-center shadow-xs">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-black text-stone-950">Your Cart</h3>
                <p className="text-[11px] text-stone-500 font-medium">
                  {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 divide-y divide-stone-100">
            {cart.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h4 className="text-sm font-bold text-stone-900">Your cart is empty</h4>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Select your vehicle model and chosen cover grade to add protective custom covers to your bag.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 px-4 py-2 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-bold transition-all cursor-pointer"
                >
                  Explore Catalogue
                </button>
              </div>
            ) : (
              cart.map((item, idx) => {
                const itemPrice = item.calculatedPrice || item.basePrice || 0;
                const lineTotal = itemPrice * (item.quantity || 1);

                return (
                  <div key={idx} className="pt-3.5 first:pt-0 flex gap-3.5">
                    {/* Item Image */}
                    <img
                      src={item.modelImage || item.heroImage || '/products/camo-car-daylight.jpg'}
                      alt={item.name || item.coverName}
                      className="w-20 h-16 rounded-xl object-cover bg-stone-100 border border-stone-200 shrink-0"
                    />

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-1">
                        <h4 className="text-xs font-bold text-stone-950 truncate">
                          {item.brand && item.model ? `${item.brand} ${item.model} (${item.year || '3D'})` : item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(idx)}
                          className="text-stone-400 hover:text-red-600 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] text-stone-600 font-medium truncate mt-0.5">
                        {item.coverType?.name || item.name}
                      </p>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50 overflow-hidden">
                          <button
                            onClick={() => updateQuantity(idx, -1)}
                            className="p-1 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-bold text-stone-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(idx, 1)}
                            className="p-1 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <span className="text-xs font-black text-stone-950">
                            ₹{lineTotal}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer & Checkout Action */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-900">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Express Delivery</span>
                  <span className="font-semibold text-emerald-700">FREE</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>GST (18% Included)</span>
                  <span className="font-semibold text-stone-900">₹{Math.round(subtotal - subtotal / 1.18)}</span>
                </div>
                <div className="pt-2 border-t border-stone-200 flex justify-between text-sm font-black text-stone-950">
                  <span>Total Amount</span>
                  <span>₹{subtotal}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-stone-500 font-medium justify-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Simulated demo payment gateway • 100% Secure</span>
              </div>

              <button
                onClick={handleOpenCheckout}
                className="w-full py-3 px-4 rounded-xl bg-stone-950 hover:bg-black text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-[0.99]"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Checkout Modal when triggered from Cart */}
      {checkoutModalOpen && (
        <QuickOrderModal
          cartItems={cart}
          onClose={() => setCheckoutModalOpen(false)}
        />
      )}
    </>
  );
}
