import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import orderRoutes from './routes/orderRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Parsing Middleware
app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Request Logging
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    if (!req.path.startsWith('/health')) {
      console.log(`[API] ${req.method} ${req.path} -> ${res.statusCode} (${duration}ms)`);
    }
  });
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'hi-life-payment-server',
    paymentProvider: process.env.PAYMENT_PROVIDER || 'demo',
    timestamp: new Date().toISOString()
  });
});

// Mount Routes
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);

// 404 Handler for undefined API routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: `Route ${req.method} ${req.originalUrl} not found.`
  });
});

// Global Centralized Error Handler (prevents stack traces from leaking to client)
app.use((err, req, res, next) => {
  console.error('[Unhandled Server Error]', err);
  const status = err.statusCode || 500;
  res.status(status).json({
    success: false,
    error: err.message || 'Internal server error occurred.'
  });
});

app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`🚀 Hi-Life Backend Server is running!`);
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`💳 Payment Provider: ${process.env.PAYMENT_PROVIDER || 'demo'}`);
  console.log(`=========================================`);
});
