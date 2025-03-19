import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  fetchProductByIdStart,
  fetchProductByIdSuccess,
  fetchProductByIdFailure,
} from "../reducers/productByIdSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/lib/types";

// API call function
const fetchProductByIdApi = (id: number) => axios.get<Product>(`https://fakestoreapi.com/products/${id}`);

// Worker Saga
function* fetchProductByIdSaga(action: PayloadAction<number>) {
  try {
    const response:{data:Product} = yield call(fetchProductByIdApi, action.payload);
    yield put(fetchProductByIdSuccess(response.data));
  } catch (error: any) {
    yield put(fetchProductByIdFailure(error.message));
  }
}

// Watcher Saga
export function* watchFetchProductById() {
  yield takeEvery(fetchProductByIdStart.type, fetchProductByIdSaga);
}
