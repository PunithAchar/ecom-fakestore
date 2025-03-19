"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setSelectedCategory } from "@/store/reducers/categoriesSlice";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Card, Box, Chip, Typography } from "@mui/material";

export default function CategoryFilter() {
  const dispatch = useDispatch();
  const { items: categories, selectedCategory } = useSelector(
    (state: RootState) => state.categories
  );

  return (
    <>
      <Card className="hidden lg:block">
        <CardHeader >
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              className="w-full justify-start"
              onClick={() => dispatch(setSelectedCategory(null))}
            >
              All Categories
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => dispatch(setSelectedCategory(category))}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
      <Box sx={{ mb: 3 }} className="lg:hidden">
        <Typography variant="h6" sx={{ mb: 2 }}>
          Categories
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => dispatch(setSelectedCategory(category))}
              color={selectedCategory === category ? "warning" : "default"}
              variant={selectedCategory === category ? "filled" : "outlined"}
            />
          ))}
          {selectedCategory && (
            <Chip
              label="Clear Filters"
              onClick={() => dispatch(setSelectedCategory(null))}
              color="secondary"
            />
          )}
        </Box>
      </Box>
    </>
  );
}
