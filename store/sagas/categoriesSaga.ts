import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from '../reducers/categoriesSlice';

function* fetchCategories() {
  try {
    const response = yield call(
      axios.get,
      'https://fakestoreapi.com/products/categories'
    );
    yield put(fetchCategoriesSuccess(response.data));
  } catch (error:any) {
    yield put(fetchCategoriesFailure(error.message));
  }
}

export function* watchFetchCategories() {
  yield takeLatest(fetchCategoriesStart.type, fetchCategories);
}