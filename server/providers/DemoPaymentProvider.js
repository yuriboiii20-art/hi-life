import { PaymentProvider } from './PaymentProvider.js';
import crypto from 'crypto';

/**
 * DemoPaymentProvider
 * Handles simulated Indian payment gateway flow (UPI, Card, NetBanking, COD)
 * Completely isolated from real banks / Razorpay API.
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
      supportedMethods: [
        {
          id: 'upi',
          name: 'UPI / QR Code',
          description: 'Instant demo UPI intent simulation',
          dummyPresets: ['user@okaxis', 'customer@okhdfcbank', 'hilife@upi']
        },
        {
          id: 'card',
          name: 'Credit / Debit Card',
          description: 'Simulated Card Payment (No real card required)',
          dummyCard: '•••• •••• •••• 4242'
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

  /**
   * Generates a realistic demo payment ID e.g. demo_pay_a1b2c3d4e5f6
   */
  generateDemoPaymentId() {
    return `demo_pay_${crypto.randomBytes(6).toString('hex')}`;
  }

  /**
   * Process simulated payment actions: 'success', 'failure', 'cancel'
   * @param {Object} params
   */
  async verifyPayment({ simulationAction, paymentMethod, orderId }) {
    if (simulationAction === 'success') {
      const paymentId = this.generateDemoPaymentId();
      return {
        isValid: true,
        paymentId,
        paymentMethod: paymentMethod || 'upi_demo',
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
