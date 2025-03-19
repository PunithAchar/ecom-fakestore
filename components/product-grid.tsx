'use client';

import { useDispatch } from 'react-redux';
import { Product } from '@/lib/types';
import { addToCart } from '@/store/reducers/cartSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Link from 'next/link';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col">
          <Link href={`/product/${product.id}`}>
            <CardContent className="p-4">
              <div className="aspect-square relative mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-sm font-medium line-clamp-2 mb-2">
                {product.title}
              </h3>
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center bg-green-600 text-white px-2 py-0.5 rounded text-sm">
                  <span>{product.rating.rate}</span>
                  <Star className="h-4 w-4 ml-1" />
                </div>
                <span className="text-gray-500 text-sm">
                  ({product.rating.count})
                </span>
              </div>
              <div className="text-lg font-bold">₹{product.price}</div>
            </CardContent>
          </Link>
          <CardFooter className="mt-auto p-4 pt-0">
            <Button
              className="w-full bg-[#ff9f00] hover:bg-[#ff9f00]/90"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}