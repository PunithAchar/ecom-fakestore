import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from '../reducers/productsSlice';

function* fetchProducts() {
  try {
    const response = yield call(axios.get, 'https://fakestoreapi.com/products');
    yield put(fetchProductsSuccess(response.data));
  } catch (error:any) {
    yield put(fetchProductsFailure(error.message));
  }
}

export function* watchFetchProducts() {
  yield takeLatest(fetchProductsStart.type, fetchProducts);
}