export const GET_MY_USERS_FETCH = 'GET_MY_USERS_FETCH';
export const GET_MY_USERS_SUCCESS = 'GET_MY_USERS_SUCCESS';
export const SEARCHED_DATA = 'SEARCHED_DATA';
export const USER_LOGIN = 'USER_LOGIN';

export const getMyUsersFetch = () => ({
  type : GET_MY_USERS_FETCH
})

export const searchUsersFetch = (users) => ({
  type : SEARCHED_DATA,
  users
})

export const UserLoggedIn = (UserLoggedin) => ({
  type : USER_LOGIN,
  UserLoggedin
})