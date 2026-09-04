import React from 'react';
import DemoPaymentModal from './DemoPaymentModal';

export default function QuickOrderModal({ result, cartItems, onClose }) {
  return (
    <DemoPaymentModal
      initialProductResult={result}
      cartItems={cartItems}
      onClose={onClose}
    />
  );
}
