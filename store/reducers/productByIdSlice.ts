import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/lib/types";

interface ProductByIdState {
  item: Product | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductByIdState = {
  item: null,
  loading: false,
  error: null,
};

const productByIdSlice = createSlice({
  name: "productById",
  initialState,
  reducers: {
    fetchProductByIdStart: (state, action: PayloadAction<number>) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductByIdSuccess: (state, action: PayloadAction<Product>) => {
      state.item = action.payload;
      state.loading = false;
    },
    fetchProductByIdFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductByIdStart,
  fetchProductByIdSuccess,
  fetchProductByIdFailure,
} = productByIdSlice.actions;

export default productByIdSlice.reducer;
