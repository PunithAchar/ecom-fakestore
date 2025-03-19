'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { fetchProductsStart } from '@/store/reducers/productsSlice';
import { fetchCategoriesStart } from '@/store/reducers/categoriesSlice';
import ProductGrid from '@/components/product-grid';
import CategoryFilter from '@/components/category-filter';

export default function Home() {
  const dispatch = useDispatch();
  const { items: products, loading } = useSelector(
    (state: RootState) => state.products
  );
  const { selectedCategory } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    dispatch(fetchProductsStart());
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64">
          <CategoryFilter />
        </aside>
        <main className="flex-1">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-100 animate-pulse h-64 rounded-lg"
                />
              ))}
            </div>
          ) : (
            <ProductGrid products={filteredProducts} />
          )}
        </main>
      </div>
    </div>
  );
}