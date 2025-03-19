'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/reducers/cartSlice';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

export default function ProductPageClient({ id }: { id: string }) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 bg-gray-200 aspect-square" />
            <div className="w-full md:w-1/2 space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/4" />
              <div className="h-24 bg-gray-200 rounded" />
              <div className="h-12 bg-gray-200 rounded w-1/3" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 lg:justify-evenly lg:items-center">
        <div className="w-full md:w-1/2">
          <div className="bg-white p-8 rounded-lg ">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-contain lg:w-3/4 lg:float-end"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-green-600 text-white px-2 py-0.5 rounded">
              <span>{product.rating.rate}</span>
              <Star className="h-4 w-4 ml-1" />
            </div>
            <span className="text-gray-500">
              {product.rating.count} ratings
            </span>
          </div>
          <div className="text-3xl font-bold">₹{product.price}</div>
          <p className="text-gray-600">{product.description}</p>
          <div className="space-x-4">
            <Button
              size="lg"
              className="bg-[#ff9f00] hover:bg-[#ff9f00]/90"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </Button>
            <Button size="lg" className="bg-[#fb641b] hover:bg-[#fb641b]/90">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}