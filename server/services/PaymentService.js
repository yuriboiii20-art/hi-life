import { paymentProviderFactory } from '../providers/index.js';
import { dataStore } from '../models/dataStore.js';

export class PaymentService {
  /**
   * Initiates payment for an existing pending order
   * @param {string} orderId
   * @param {string} accessToken
   */
  static async initiatePayment(orderId, accessToken) {
    const order = dataStore.getOrder(orderId);
    if (!order) {
      throw new Error(`Order ${orderId} not found.`);
    }

    if (accessToken && order.accessToken !== accessToken) {
      const err = new Error('Unauthorized access to this order.');
      err.statusCode = 403;
      throw err;
    }

    if (order.paymentStatus === 'paid') {
      return {
        alreadyPaid: true,
        order
      };
    }

    const provider = paymentProviderFactory.getProvider();
    const paymentIntent = await provider.createPaymentOrder(order);

    return {
      orderId: order.id,
      accessToken: order.accessToken,
      paymentIntent,
      orderSummary: {
        totalAmount: order.totalAmount,
        currency: order.currency,
        itemsCount: order.items.reduce((acc, i) => acc + i.quantity, 0),
        items: order.items
      }
    };
  }

  /**
   * Processes a simulated or real payment outcome with full idempotency
   * @param {Object} params
   */
  static async processPaymentResult({
    orderId,
    accessToken,
    simulationAction,
    paymentMethod,
    idempotencyKey
  }) {
    const order = dataStore.getOrder(orderId);
    if (!order) {
      const err = new Error(`Order ${orderId} not found.`);
      err.statusCode = 404;
      throw err;
    }

    if (accessToken && order.accessToken !== accessToken) {
      const err = new Error('Unauthorized order modification.');
      err.statusCode = 403;
      throw err;
    }

    // Idempotency check: if order is already paid, return confirmed state immediately
    if (order.paymentStatus === 'paid') {
      return {
        success: true,
        order,
        isIdempotentReplay: true,
        message: 'Order was already successfully paid.'
      };
    }

    const provider = paymentProviderFactory.getProvider();

    // Special case for Cash on Delivery
    if (paymentMethod === 'cod' || simulationAction === 'cod') {
      const updatedOrder = dataStore.updateOrder(orderId, {
        paymentStatus: 'pending_cod',
        orderStatus: 'confirmed',
        paymentProvider: 'cash_on_delivery',
        paymentMethod: 'Cash on Delivery',
        paymentId: `cod_${Date.now().toString().slice(-8)}`,
        paidAmount: 0,
        codAmountDue: order.totalAmount,
        paidAt: null,
        history: [
          ...(order.history || []),
          {
            status: 'cod_order_placed',
            timestamp: new Date().toISOString(),
            note: 'Order placed under Cash on Delivery. Payment to be collected at doorstep.'
          }
        ]
      });

      return {
        success: true,
        order: updatedOrder,
        message: 'Cash on Delivery order confirmed.'
      };
    }

    const verification = await provider.verifyPayment({
      simulationAction,
      paymentMethod,
      orderId
    });

    if (verification.isValid && verification.status === 'paid') {
      const updatedOrder = dataStore.updateOrder(orderId, {
        paymentStatus: 'paid',
        orderStatus: 'confirmed',
        paymentProvider: provider.providerName,
        paymentMethod: verification.paymentMethod || paymentMethod || 'Demo Gateway',
        paymentId: verification.paymentId,
        paidAmount: order.totalAmount,
        paidAt: verification.paidAt || new Date().toISOString(),
        idempotencyKey: idempotencyKey || null,
        history: [
          ...(order.history || []),
          {
            status: 'payment_success',
            paymentId: verification.paymentId,
            timestamp: new Date().toISOString(),
            note: `Payment completed successfully via ${verification.paymentMethod || 'Demo Gateway'}.`
          }
        ]
      });

      return {
        success: true,
        order: updatedOrder,
        paymentId: verification.paymentId,
        message: 'Demo payment completed successfully.'
      };
    } else if (verification.status === 'failed') {
      const updatedOrder = dataStore.updateOrder(orderId, {
        paymentStatus: 'failed',
        failedAt: new Date().toISOString(),
        history: [
          ...(order.history || []),
          {
            status: 'payment_failed',
            timestamp: new Date().toISOString(),
            note: verification.error || 'Simulated payment failure.'
          }
        ]
      });

      return {
        success: false,
        order: updatedOrder,
        error: verification.error || 'Simulated payment failure.'
      };
    } else if (verification.status === 'cancelled') {
      const updatedOrder = dataStore.updateOrder(orderId, {
        paymentStatus: 'cancelled',
        cancelledAt: new Date().toISOString(),
        history: [
          ...(order.history || []),
          {
            status: 'payment_cancelled',
            timestamp: new Date().toISOString(),
            note: 'Payment was cancelled by user.'
          }
        ]
      });

      return {
        success: false,
        cancelled: true,
        order: updatedOrder,
        error: 'Payment was cancelled.'
      };
    }

    return {
      success: false,
      error: 'Unhandled payment verification state.'
    };
  }
}
