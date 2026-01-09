export interface Cart {
  id: number;
  created_at: string;
  items: CartItem[];
}

export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
  price: number;
}

export interface AddToCartData {
  product_id: number;
  quantity: number;
}

export interface UpdateCartItemData {
  quantity: number;
}
