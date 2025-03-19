import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';
import categoriesReducer from './categoriesSlice';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  categories: categoriesReducer,
});

export default rootReducer;