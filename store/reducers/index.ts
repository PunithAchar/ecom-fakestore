import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';
import categoriesReducer from './categoriesSlice';
import productByIdReducer from "./productByIdSlice"

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  productById:productByIdReducer,
});

export default rootReducer;