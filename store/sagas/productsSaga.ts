import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from '../reducers/productsSlice';
import { Product } from '@/lib/types';

interface poductTypes{
  data:Product[]
}

function* fetchProducts() {
  try {
    const response:poductTypes = yield call(axios.get, 'https://fakestoreapi.com/products');
    yield put(fetchProductsSuccess(response.data));
  } catch (error:any) {
    yield put(fetchProductsFailure(error.message));
  }
}

export function* watchFetchProducts() {
  yield takeLatest(fetchProductsStart.type, fetchProducts);
}