import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

const CART_STORAGE_KEY = 'hilife_cart_v1';
const GUEST_SESSION_KEY = 'hilife_guest_session_v1';

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [guestSessionId, setGuestSessionId] = useState(() => {
    try {
      let session = localStorage.getItem(GUEST_SESSION_KEY);
      if (!session) {
        session = `guest_${Math.random().toString(36).substring(2, 11)}_${Date.now()}`;
        localStorage.setItem(GUEST_SESSION_KEY, session);
      }
      return session;
    } catch {
      return `guest_${Date.now()}`;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to sync cart to localStorage:', e);
    }
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      // Check if exact same cover + vehicle combo exists
      const existingIndex = prevCart.findIndex(
        (i) =>
          i.coverId === item.coverId &&
          i.brandId === item.brandId &&
          i.modelId === item.modelId &&
          i.year === item.year
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += item.quantity || 1;
        return updated;
      }

      return [...prevCart, { ...item, quantity: item.quantity || 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, idx) => idx !== index));
  };

  const updateQuantity = (index, delta) => {
    setCart((prev) => {
      const updated = [...prev];
      const newQty = updated[index].quantity + delta;
      if (newQty <= 0) {
        return prev.filter((_, idx) => idx !== index);
      }
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const clearCart = () => {
    setCart([]);
    try {
      localStorage.removeItem(CART_STORAGE_KEY);
    } catch (e) {
      console.error('Failed to clear cart in localStorage:', e);
    }
  };

  const totalItemsCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  
  const subtotal = cart.reduce((sum, item) => {
    const price = item.calculatedPrice || item.basePrice || 0;
    return sum + price * (item.quantity || 1);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItemsCount,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        guestSessionId
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
