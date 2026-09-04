/**
 * PaymentProvider Base Interface / Abstract Class
 * Defines the contract that both Demo and Live (Razorpay) payment providers must satisfy.
 */
export class PaymentProvider {
  /**
   * @param {string} providerName
   */
  constructor(providerName) {
    if (new.target === PaymentProvider) {
      throw new TypeError("Cannot instantiate abstract class PaymentProvider directly.");
    }
    this.providerName = providerName;
  }

  /**
   * Initializes a payment intent/order with the provider
   * @param {Object} order - The validated internal order object
   * @returns {Promise<Object>} Provider-specific payment order payload
   */
  async createPaymentOrder(order) {
    throw new Error("Method 'createPaymentOrder()' must be implemented.");
  }

  /**
   * Verifies the authenticity of a payment signature or demo simulation
   * @param {Object} verificationData
   * @returns {Promise<{ isValid: boolean, paymentId: string, error?: string }>}
   */
  async verifyPayment(verificationData) {
    throw new Error("Method 'verifyPayment()' must be implemented.");
  }

  /**
   * Provider configuration exposed safely to the client (e.g. key id, demo flags)
   * @returns {Object}
   */
  getClientConfig() {
    return {
      provider: this.providerName,
      isDemo: false
    };
  }
}
