import crypto from 'crypto';
import { BACKEND_COVER_CATALOG, calculateServerDynamicPrice } from '../data/productsCatalog.js';
import { dataStore } from '../models/dataStore.js';

export class OrderService {
  /**
   * Validates and recalculates authoritative order totals from server-side catalog
   * @param {Array} items - [{ coverId, bodyType, brand, model, year, quantity }]
   * @param {Object} customerDetails - { customerName, phone, email, address, pincode, city }
   * @param {string} guestSessionId - session identifier
   */
  static createValidatedOrder({ items, customerDetails, guestSessionId }) {
    if (!items || !Array.isArray(items) || items.length === 0) {
      throw new Error('Order items list is empty or invalid.');
    }

    if (!customerDetails || !customerDetails.customerName || !customerDetails.phone || !customerDetails.address || !customerDetails.pincode) {
      throw new Error('Customer name, phone, address, and pincode are required.');
    }

    // Phone & Pincode regex validation
    const cleanPhone = String(customerDetails.phone).replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      throw new Error('A valid 10-digit mobile phone number is required.');
    }

    const cleanPincode = String(customerDetails.pincode).replace(/\D/g, '');
    if (cleanPincode.length !== 6) {
      throw new Error('A valid 6-digit Indian postal pincode is required.');
    }

    let calculatedSubtotal = 0;
    const validatedItems = [];

    for (const item of items) {
      const cover = BACKEND_COVER_CATALOG[item.coverId || item.id];
      if (!cover) {
        throw new Error(`Product with ID "${item.coverId || item.id}" was not found in authoritative catalog.`);
      }

      const qty = Math.max(1, parseInt(item.quantity, 10) || 1);
      if (qty > 50) {
        throw new Error('Maximum quantity per order item is 50.');
      }

      // Dynamic price calculation based on car body type
      const priceInfo = calculateServerDynamicPrice(
        cover.basePrice,
        cover.originalPrice,
        item.bodyType || ''
      );

      const unitPrice = priceInfo.price;
      const unitOriginalPrice = priceInfo.originalPrice;
      const lineTotal = unitPrice * qty;

      calculatedSubtotal += lineTotal;

      validatedItems.push({
        id: cover.id,
        name: cover.name,
        tagline: cover.tagline,
        brand: item.brand || 'Universal',
        model: item.model || 'Universal',
        year: item.year || 'All Years',
        bodyType: item.bodyType || 'Standard',
        unitPrice,
        unitOriginalPrice,
        quantity: qty,
        lineTotal,
        leadTime: cover.leadTime
      });
    }

    // Delivery charges: Free delivery site-wide
    const deliveryCharge = 0;

    // Subtotal already inclusive of GST, or itemized breakdown:
    // We treat final total amount as calculatedSubtotal + deliveryCharge
    const totalAmount = calculatedSubtotal + deliveryCharge;
    const totalAmountPaise = Math.round(totalAmount * 100);

    const taxAmount = Math.round(totalAmount - (totalAmount / 1.18)); // 18% GST itemization

    const orderId = `HL-${Date.now().toString().slice(-6)}-${crypto.randomBytes(2).toString('hex').toUpperCase()}`;
    const accessToken = crypto.randomBytes(16).toString('hex');

    const newOrder = {
      id: orderId,
      userId: customerDetails.userId || null,
      guestSessionId: guestSessionId || `guest_${crypto.randomBytes(8).toString('hex')}`,
      accessToken,
      items: validatedItems,
      subtotal: calculatedSubtotal,
      tax: taxAmount,
      deliveryCharge,
      discount: 0,
      totalAmount,
      totalAmountPaise,
      currency: 'INR',
      customerDetails: {
        customerName: customerDetails.customerName.trim(),
        phone: cleanPhone,
        email: customerDetails.email ? customerDetails.email.trim() : '',
        address: customerDetails.address.trim(),
        pincode: cleanPincode,
        city: customerDetails.city ? customerDetails.city.trim() : ''
      },
      paymentProvider: process.env.PAYMENT_PROVIDER || 'demo',
      paymentMethod: null,
      paymentStatus: 'payment_pending',
      paymentId: null,
      orderStatus: 'initiated',
      createdAt: new Date().toISOString(),
      paidAt: null,
      failedAt: null,
      cancelledAt: null,
      history: [
        {
          status: 'order_created',
          timestamp: new Date().toISOString(),
          note: 'Order initiated with pending payment.'
        }
      ]
    };

    return dataStore.createOrder(newOrder);
  }

  static getOrderById(orderId, accessToken, guestSessionId) {
    const order = dataStore.getOrder(orderId);
    if (!order) return null;

    // Security check: verify accessToken or guestSessionId
    if (accessToken && order.accessToken !== accessToken) {
      // If token provided is wrong, reject
      return { unauthorized: true };
    }

    if (!accessToken && guestSessionId && order.guestSessionId !== guestSessionId) {
      return { unauthorized: true };
    }

    return order;
  }
}
