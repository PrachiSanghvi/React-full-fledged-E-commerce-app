import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_MY_USERS_FETCH, GET_MY_USERS_SUCCESS } from "../actions/index";
import axios from 'axios';
function myUserFetch() {
  return axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error);
  })
}

function* workGetMyUserFetch() {
  const users = yield call(myUserFetch);
  yield put({ type: GET_MY_USERS_SUCCESS, users });
}

function* myWebsiteSaga() {
  yield takeEvery(GET_MY_USERS_FETCH, workGetMyUserFetch);
}

export default myWebsiteSaga;