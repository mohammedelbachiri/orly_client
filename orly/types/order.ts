import { Payment } from "./payment";
import { Product } from "./product";

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface Order {
  id: number;
  status: OrderStatus;
  total_amount: number;
  created_at: string;
  items: OrderItem[];
  payment?: Payment;
}

export interface OrderItem {
  id: number;
  product: Product;
  quantity: number;
  price: number;
}

export interface CreateOrderData {
  cart_id: number;
  shipping_address?: string;
}
