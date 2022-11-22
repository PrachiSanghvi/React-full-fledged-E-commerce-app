import { all, call } from 'redux-saga/effects';
import myWebsiteSaga from './userSaga';
import { productDataSaga,productAddToCart } from './productSaga';
export default function* rootSaga() {
  yield all([
    call(myWebsiteSaga),
    call(productDataSaga),
    call(productAddToCart)
  ])
}