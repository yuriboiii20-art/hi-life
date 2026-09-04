import { DemoPaymentProvider } from './DemoPaymentProvider.js';
import { RazorpayPaymentProvider } from './RazorpayPaymentProvider.js';

class PaymentProviderFactory {
  constructor() {
    this.demoProvider = new DemoPaymentProvider();
    this.razorpayProvider = new RazorpayPaymentProvider();
  }

  getProvider() {
    const providerKey = (process.env.PAYMENT_PROVIDER || 'demo').toLowerCase().trim();
    if (providerKey === 'razorpay') {
      return this.razorpayProvider;
    }
    return this.demoProvider;
  }
}

export const paymentProviderFactory = new PaymentProviderFactory();
