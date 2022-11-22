  import { takeEvery, call, put,takeLatest } from "redux-saga/effects";
import { GET_PRODUCT_FETCH, GET_PRODUCT_FETCH_SUCCESS,PRODUCT_ADD_TO_CART } from "../actions/productAction";
import { showLoadingOverlay } from "../actions/cartAction";
import axios from "axios";
import { getCartData } from "../../javascript/helper";
import {cartResultData} from '../actions/cartAction';
// Product data fetch saga
function myProductFetch() {
  return axios.get('https://lucent-theme-2.myshopify.com/products/t-shirt?view=react').then((result) => {
    return result.data
  }).catch((err) => {
    console.log(err);
  });
}

function* workGetMyProductFetch() {
  const products = yield call(myProductFetch);
  yield put({ type: GET_PRODUCT_FETCH_SUCCESS, products })
}
export function* productDataSaga() {
  yield takeEvery(GET_PRODUCT_FETCH, workGetMyProductFetch)
}

function* AddToCartEvent(action) {
  try {
    yield put(showLoadingOverlay(true))
    yield fetch('/cart/add.js', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(action.payload)
    })
    let res = yield call(getCartData);
    // put is dispatching a new action with the result from the previous yield
    yield put(cartResultData(res));
    yield put(showLoadingOverlay(false))

    return res;
  } catch(e) {
    console.log("e",e);
  }
}

//Product Add to cart saga
export function* productAddToCart() {
  yield takeLatest(PRODUCT_ADD_TO_CART, AddToCartEvent)
}
