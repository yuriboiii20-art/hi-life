/**
 * Automated Verification Script for Backend Order & Demo Payment Flow
 */
import { OrderService } from './services/OrderService.js';
import { PaymentService } from './services/PaymentService.js';
import { BACKEND_COVER_CATALOG, calculateServerDynamicPrice } from './data/productsCatalog.js';

async function runVerification() {
  console.log('--- STARTING PAYMENT FLOW AUTOMATED TESTS ---');

  // Test 1: Authoritative Dynamic Price Calculation
  console.log('\n[Test 1] Testing server-side dynamic pricing for SUV vs Standard...');
  const basePrice = 2499;
  const originalPrice = 3899;
  const suvPrice = calculateServerDynamicPrice(basePrice, originalPrice, 'Full-Size SUV');
  console.log(`SUV Price: ₹${suvPrice.price} (Original: ₹${suvPrice.originalPrice}, Discount: ${suvPrice.discountPercent}%)`);
  if (suvPrice.price <= basePrice) {
    throw new Error('SUV price should apply multiplier.');
  }
  console.log('✅ Test 1 Passed: Dynamic pricing logic is sound.');

  // Test 2: Order Creation & Tamper-proof Backend Calculation
  console.log('\n[Test 2] Creating order on backend...');
  const testOrder = OrderService.createValidatedOrder({
    items: [
      {
        coverId: 'premium-waterproof',
        brand: 'Hyundai',
        model: 'Creta',
        year: '2023',
        bodyType: 'Mid SUV',
        quantity: 2
      }
    ],
    customerDetails: {
      customerName: 'Rahul Sharma',
      phone: '9876543210',
      email: 'rahul@example.com',
      address: '123 MG Road, Indiranagar',
      pincode: '560038',
      city: 'Bengaluru'
    }
  });

  console.log(`Created Order ID: ${testOrder.id}`);
  console.log(`Calculated Total: ₹${testOrder.totalAmount} (${testOrder.totalAmountPaise} paise)`);
  console.log(`Initial Status: ${testOrder.paymentStatus}, Order Status: ${testOrder.orderStatus}`);

  if (testOrder.paymentStatus !== 'payment_pending' || testOrder.orderStatus !== 'initiated') {
    throw new Error('Initial status mismatch.');
  }
  console.log('✅ Test 2 Passed: Order creation is valid.');

  // Test 3: Payment Initiation
  console.log('\n[Test 3] Initiating payment for order...');
  const initResult = await PaymentService.initiatePayment(testOrder.id, testOrder.accessToken);
  console.log('Payment Intent Provider:', initResult.paymentIntent.provider);
  console.log('Demo Notice:', initResult.paymentIntent.demoNotice);
  if (!initResult.paymentIntent.isDemo) {
    throw new Error('Provider must be demo.');
  }
  console.log('✅ Test 3 Passed: Payment initiated with demo provider.');

  // Test 4: Simulate Successful Demo Payment
  console.log('\n[Test 4] Simulating successful payment...');
  const successResult = await PaymentService.processPaymentResult({
    orderId: testOrder.id,
    accessToken: testOrder.accessToken,
    simulationAction: 'success',
    paymentMethod: 'upi_demo',
    idempotencyKey: 'test_key_123'
  });

  console.log('Payment ID:', successResult.paymentId);
  console.log('Order Status:', successResult.order.orderStatus);
  console.log('Payment Status:', successResult.order.paymentStatus);

  if (successResult.order.paymentStatus !== 'paid' || successResult.order.orderStatus !== 'confirmed') {
    throw new Error('Order not marked as paid & confirmed.');
  }
  if (!successResult.paymentId.startsWith('demo_pay_')) {
    throw new Error('Payment ID must have demo_pay_ prefix.');
  }
  console.log('✅ Test 4 Passed: Successful payment simulated and recorded.');

  // Test 5: Idempotency Protection
  console.log('\n[Test 5] Testing idempotency on repeated payment confirmation...');
  const duplicateResult = await PaymentService.processPaymentResult({
    orderId: testOrder.id,
    accessToken: testOrder.accessToken,
    simulationAction: 'success',
    paymentMethod: 'upi_demo',
    idempotencyKey: 'test_key_123'
  });

  if (!duplicateResult.isIdempotentReplay) {
    throw new Error('Repeated payment must return idempotent replay without error.');
  }
  console.log('✅ Test 5 Passed: Idempotency check verified.');

  // Test 6: Access Control / Security
  console.log('\n[Test 6] Testing unauthorized access prevention...');
  const unauthorizedCheck = OrderService.getOrderById(testOrder.id, 'wrong_token', null);
  if (!unauthorizedCheck || !unauthorizedCheck.unauthorized) {
    throw new Error('Order access must be blocked with invalid token.');
  }
  console.log('✅ Test 6 Passed: Unauthorized order access rejected.');

  console.log('\n🎉 ALL AUTOMATED BACKEND VERIFICATION TESTS PASSED SUCCESSFULLY!');
}

runVerification().catch((err) => {
  console.error('❌ Verification failed:', err);
  process.exit(1);
});
