export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: number;
  name: string;
}

export interface RootState {
  products: {
    items: Product[];
    loading: boolean;
    error: string | null;
  };
  cart: {
    items: CartItem[];
    total: number;
  };
  categories: {
    items: string[];
    selectedCategory: string | null;
    loading: boolean;
    error: string | null;
  };
}