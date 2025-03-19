'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setSelectedCategory } from '@/store/reducers/categoriesSlice';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function CategoryFilter() {
  const dispatch = useDispatch();
  const { items: categories, selectedCategory } = useSelector(
    (state: RootState) => state.categories
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Button
            variant={selectedCategory === null ? 'default' : 'outline'}
            className="w-full justify-start"
            onClick={() => dispatch(setSelectedCategory(null))}
          >
            All Categories
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className="w-full justify-start"
              onClick={() => dispatch(setSelectedCategory(category))}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}