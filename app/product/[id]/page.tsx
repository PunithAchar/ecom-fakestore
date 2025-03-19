
import { Product } from '@/lib/types';
import ProductPageClient from './ProductPageClient';

// This function is required for static site generation with dynamic routes
export async function generateStaticParams() {
  const products = await fetch('https://fakestoreapi.com/products').then(res => res.json());
  return products.map((product: Product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductPageClient id={params.id}/>
}