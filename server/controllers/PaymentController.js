import { PaymentService } from '../services/PaymentService.js';
import { paymentProviderFactory } from '../providers/index.js';

export class PaymentController {
  /**
   * POST /api/payments/initiate
   */
  static async initiatePayment(req, res) {
    try {
      const { orderId, accessToken } = req.body;
      const token = accessToken || req.headers['x-order-token'];

      if (!orderId) {
        return res.status(400).json({
          success: false,
          error: 'Order ID is required to initiate payment.'
        });
      }

      const result = await PaymentService.initiatePayment(orderId, token);
      return res.status(200).json({
        success: true,
        ...result
      });
    } catch (err) {
      console.error('[PaymentController.initiatePayment] Error:', err.message);
      const status = err.statusCode || 400;
      return res.status(status).json({
        success: false,
        error: err.message || 'Payment initiation failed.'
      });
    }
  }

  /**
   * POST /api/payments/demo/process
   * Handles simulation action: 'success' | 'failure' | 'cancel' | 'cod'
   */
  static async processDemoPayment(req, res) {
    try {
      const {
        orderId,
        accessToken,
        simulationAction,
        paymentMethod,
        idempotencyKey
      } = req.body;

      const token = accessToken || req.headers['x-order-token'];

      if (!orderId || !simulationAction) {
        return res.status(400).json({
          success: false,
          error: 'Missing required parameters: orderId and simulationAction are mandatory.'
        });
      }

      const result = await PaymentService.processPaymentResult({
        orderId,
        accessToken: token,
        simulationAction,
        paymentMethod,
        idempotencyKey: idempotencyKey || req.headers['idempotency-key']
      });

      return res.status(200).json(result);
    } catch (err) {
      console.error('[PaymentController.processDemoPayment] Error:', err.message);
      const status = err.statusCode || 500;
      return res.status(status).json({
        success: false,
        error: err.message || 'Error processing payment simulation.'
      });
    }
  }

  /**
   * POST /api/payments/otp/send
   * Generates and returns/simulates 6-digit OTP
   */
  static async sendOtp(req, res) {
    try {
      const { phone } = req.body;
      const cleanPhone = String(phone || '').replace(/\D/g, '');

      if (cleanPhone.length < 10) {
        return res.status(400).json({
          success: false,
          error: 'Please enter a valid 10-digit mobile number.'
        });
      }

      // Demo OTP generation (fixed or deterministic for demo testing)
      const demoOtp = '123456';

      return res.status(200).json({
        success: true,
        phone: cleanPhone,
        demoOtp,
        message: `OTP sent successfully to +91 ${cleanPhone}. Demo OTP is ${demoOtp}`
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: 'Failed to send OTP.'
      });
    }
  }

  /**
   * POST /api/payments/otp/verify
   * Verifies 6-digit OTP
   */
  static async verifyOtp(req, res) {
    try {
      const { phone, otp } = req.body;
      const cleanPhone = String(phone || '').replace(/\D/g, '');
      const cleanOtp = String(otp || '').trim();

      if (!cleanOtp) {
        return res.status(400).json({
          success: false,
          error: 'OTP is required.'
        });
      }

      // Allow '123456' or any 6-digit number in demo mode
      if (cleanOtp === '123456' || cleanOtp.length === 6) {
        const userToken = `usr_${Date.now()}_${cleanPhone.slice(-4)}`;
        return res.status(200).json({
          success: true,
          verified: true,
          phone: cleanPhone,
          userToken,
          message: 'Mobile number verified successfully.'
        });
      }

      return res.status(400).json({
        success: false,
        error: 'Invalid OTP entered. (Demo OTP is 123456)'
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: 'OTP verification failed.'
      });
    }
  }

  /**
   * GET /api/payments/config
   * Returns safe provider client config
   */
  static getPaymentConfig(req, res) {
    try {
      const provider = paymentProviderFactory.getProvider();
      return res.status(200).json({
        success: true,
        config: provider.getClientConfig()
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: 'Failed to retrieve payment configuration.'
      });
    }
  }
}
