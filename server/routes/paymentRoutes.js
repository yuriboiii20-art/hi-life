import { Router } from 'express';
import { PaymentController } from '../controllers/PaymentController.js';

const router = Router();

router.get('/config', PaymentController.getPaymentConfig);
router.post('/otp/send', PaymentController.sendOtp);
router.post('/otp/verify', PaymentController.verifyOtp);
router.post('/initiate', PaymentController.initiatePayment);
router.post('/demo/process', PaymentController.processDemoPayment);

export default router;
