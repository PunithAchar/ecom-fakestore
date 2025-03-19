import { all } from 'redux-saga/effects';
import { watchFetchProducts } from './productsSaga';
import { watchFetchCategories } from './categoriesSaga';
import { watchFetchProductById } from './productByIdSaga';

export default function* rootSaga() {
  yield all([watchFetchProducts(), watchFetchCategories(), watchFetchProductById()]);
}