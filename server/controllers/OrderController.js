import { OrderService } from '../services/OrderService.js';

export class OrderController {
  /**
   * POST /api/orders/create
   */
  static async createOrder(req, res) {
    try {
      const { items, customerDetails, guestSessionId } = req.body;

      if (!items || !customerDetails) {
        return res.status(400).json({
          success: false,
          error: 'Missing required order parameters: items and customerDetails.'
        });
      }

      const order = OrderService.createValidatedOrder({
        items,
        customerDetails,
        guestSessionId: guestSessionId || req.headers['x-guest-session-id']
      });

      return res.status(201).json({
        success: true,
        orderId: order.id,
        accessToken: order.accessToken,
        order: {
          id: order.id,
          subtotal: order.subtotal,
          tax: order.tax,
          deliveryCharge: order.deliveryCharge,
          totalAmount: order.totalAmount,
          currency: order.currency,
          paymentStatus: order.paymentStatus,
          orderStatus: order.orderStatus,
          items: order.items,
          customerDetails: order.customerDetails,
          createdAt: order.createdAt
        }
      });
    } catch (err) {
      console.error('[OrderController.createOrder] Error:', err.message);
      return res.status(400).json({
        success: false,
        error: err.message || 'Failed to create order.'
      });
    }
  }

  /**
   * GET /api/orders/:orderId
   */
  static async getOrder(req, res) {
    try {
      const { orderId } = req.params;
      const accessToken = req.query.token || req.headers['x-order-token'];
      const guestSessionId = req.headers['x-guest-session-id'];

      const result = OrderService.getOrderById(orderId, accessToken, guestSessionId);

      if (!result) {
        return res.status(404).json({
          success: false,
          error: `Order "${orderId}" was not found.`
        });
      }

      if (result.unauthorized) {
        return res.status(403).json({
          success: false,
          error: 'You do not have permission to view this order.'
        });
      }

      // Omit internal sensitive fields if any
      const sanitizedOrder = { ...result };
      delete sanitizedOrder.accessToken;

      return res.status(200).json({
        success: true,
        order: sanitizedOrder
      });
    } catch (err) {
      console.error('[OrderController.getOrder] Error:', err.message);
      return res.status(500).json({
        success: false,
        error: 'An internal error occurred while fetching the order.'
      });
    }
  }
}
