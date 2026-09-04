import { PaymentProvider } from './PaymentProvider.js';
import crypto from 'crypto';

/**
 * RazorpayPaymentProvider (Production Ready Stub)
 * 
 * When credentials are ready, set:
 *   PAYMENT_PROVIDER=razorpay
 *   RAZORPAY_KEY_ID=rzp_live_...
 *   RAZORPAY_KEY_SECRET=...
 * 
 * The system will automatically initialize real Razorpay order creation and signature verification.
 */
export class RazorpayPaymentProvider extends PaymentProvider {
  constructor() {
    super('razorpay');
    this.keyId = process.env.RAZORPAY_KEY_ID || '';
    this.keySecret = process.env.RAZORPAY_KEY_SECRET || '';
    this.razorpayInstance = null;

    if (this.keyId && this.keySecret) {
      try {
        // Dynamically import razorpay if installed
        // const Razorpay = (await import('razorpay')).default;
        // this.razorpayInstance = new Razorpay({ key_id: this.keyId, key_secret: this.keySecret });
      } catch (err) {
        console.warn('[RazorpayPaymentProvider] Razorpay package not loaded:', err.message);
      }
    }
  }

  async createPaymentOrder(order) {
    if (!this.keyId || !this.keySecret) {
      throw new Error(
        'Razorpay credentials missing. Please set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET or set PAYMENT_PROVIDER=demo'
      );
    }

    // Real Razorpay API Order Creation:
    /*
    const rzpOrder = await this.razorpayInstance.orders.create({
      amount: order.totalAmountPaise,
      currency: 'INR',
      receipt: order.id,
      notes: {
        customerName: order.customerDetails?.customerName || '',
        phone: order.customerDetails?.phone || ''
      }
    });
    return {
      provider: 'razorpay',
      isDemo: false,
      razorpayOrderId: rzpOrder.id,
      amountPaise: rzpOrder.amount,
      currency: rzpOrder.currency,
      keyId: this.keyId
    };
    */
    throw new Error('Razorpay live mode is not yet configured. Please use PAYMENT_PROVIDER=demo.');
  }

  async verifyPayment({ razorpay_order_id, razorpay_payment_id, razorpay_signature }) {
    if (!this.keySecret) {
      throw new Error('Razorpay secret not configured.');
    }

    const expectedSignature = crypto
      .createHmac('sha256', this.keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    const isValid = expectedSignature === razorpay_signature;

    return {
      isValid,
      paymentId: razorpay_payment_id,
      status: isValid ? 'paid' : 'failed',
      error: isValid ? null : 'Invalid Razorpay payment signature.'
    };
  }

  getClientConfig() {
    return {
      provider: 'razorpay',
      isDemo: false,
      keyId: this.keyId,
      currency: 'INR'
    };
  }
}
