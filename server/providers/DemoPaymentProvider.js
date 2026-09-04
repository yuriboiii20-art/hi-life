import { PaymentProvider } from './PaymentProvider.js';
import crypto from 'crypto';

/**
 * DemoPaymentProvider
 * Handles simulated Indian payment gateway flow (UPI QR/Barcode, Cards, Wallets, NetBanking, COD)
 */
export class DemoPaymentProvider extends PaymentProvider {
  constructor() {
    super('demo');
  }

  /**
   * Creates a simulated payment intent for the customer
   * @param {Object} order
   */
  async createPaymentOrder(order) {
    const demoTransactionId = `demo_txn_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
    const dummyUpiString = `upi://pay?pa=hilife.covers@okdemo&pn=HiLife%20Covers&am=${order.totalAmount}&cu=INR&tn=Order%20${order.id}`;

    return {
      provider: 'demo',
      isDemo: true,
      transactionId: demoTransactionId,
      orderId: order.id,
      amountPaise: order.totalAmountPaise,
      amountInr: order.totalAmount,
      currency: 'INR',
      merchantName: 'Hi-Life Premium Car Covers',
      demoNotice: 'DEMO PAYMENT — NO REAL MONEY WILL BE CHARGED',
      upiQrString: dummyUpiString,
      supportedMethods: [
        {
          id: 'upi',
          name: 'UPI / QR Code',
          description: 'Scan demo QR code or enter demo VPA',
          qrString: dummyUpiString,
          dummyPresets: ['customer@okaxis', 'hilife@okhdfcbank', 'demo@paytm']
        },
        {
          id: 'card',
          name: 'Credit / Debit Card',
          description: 'Simulated Card Payment with safe dummy presets',
          dummyCard: '4242 •••• •••• 4242'
        },
        {
          id: 'wallet',
          name: 'Digital Wallets',
          description: 'Popular Indian Wallets (Simulated)',
          demoWallets: [
            { id: 'paytm', name: 'Paytm Wallet', balance: 5000 },
            { id: 'phonepe', name: 'PhonePe Wallet', balance: 3500 },
            { id: 'amazonpay', name: 'Amazon Pay', balance: 8200 },
            { id: 'mobikwik', name: 'MobiKwik', balance: 2500 }
          ]
        },
        {
          id: 'netbanking',
          name: 'Net Banking',
          description: 'Simulated Indian Banks',
          demoBanks: [
            { id: 'DEMO_HDFC', name: 'Demo HDFC Bank' },
            { id: 'DEMO_ICICI', name: 'Demo ICICI Bank' },
            { id: 'DEMO_SBI', name: 'Demo State Bank of India' },
            { id: 'DEMO_AXIS', name: 'Demo Axis Bank' },
            { id: 'DEMO_KOTAK', name: 'Demo Kotak Mahindra' }
          ]
        },
        {
          id: 'cod',
          name: 'Cash on Delivery (COD)',
          description: 'Pay cash upon delivery at your doorstep'
        }
      ]
    };
  }

  generateDemoPaymentId() {
    return `demo_pay_${crypto.randomBytes(6).toString('hex')}`;
  }

  async verifyPayment({ simulationAction, paymentMethod, orderId }) {
    if (simulationAction === 'success') {
      const paymentId = this.generateDemoPaymentId();
      return {
        isValid: true,
        paymentId,
        paymentMethod: paymentMethod || 'upi_qr_demo',
        status: 'paid',
        simulated: true,
        paidAt: new Date().toISOString()
      };
    } else if (simulationAction === 'failure') {
      return {
        isValid: false,
        paymentId: null,
        status: 'failed',
        error: 'Simulated payment failure by user request.',
        simulated: true
      };
    } else if (simulationAction === 'cancel') {
      return {
        isValid: false,
        paymentId: null,
        status: 'cancelled',
        error: 'Payment was cancelled by the user.',
        simulated: true
      };
    }

    return {
      isValid: false,
      paymentId: null,
      status: 'failed',
      error: 'Invalid simulation action.'
    };
  }

  getClientConfig() {
    return {
      provider: 'demo',
      isDemo: true,
      merchantName: 'Hi-Life Car Covers',
      currency: 'INR'
    };
  }
}
