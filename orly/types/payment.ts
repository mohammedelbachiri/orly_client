export type PaymentMethod = 'credit_card' | 'debit_card' | 'paypal' | 'stripe';
export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';

export interface Payment {
  id: number;
  payment_method: PaymentMethod;
  status: PaymentStatus;
  transaction_id: string;
  paid_at: string;
  order: number;
}

export interface ProcessPaymentData {
  order_id: number;
  payment_method: PaymentMethod;
  payment_details: Record<string, any>;
}
