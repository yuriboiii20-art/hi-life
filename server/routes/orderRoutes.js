import { Router } from 'express';
import { OrderController } from '../controllers/OrderController.js';

const router = Router();

router.post('/create', OrderController.createOrder);
router.get('/:orderId', OrderController.getOrder);

export default router;
