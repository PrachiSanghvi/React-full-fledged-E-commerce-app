import { GET_MY_USERS_SUCCESS, SEARCHED_DATA, USER_LOGIN } from "../actions/index";

export const getUserDataReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case GET_MY_USERS_SUCCESS:
      return { ...state, users: action.users };
    case SEARCHED_DATA:
      return { ...state, searchedData: action.users };
    default:
      return state;
  }
}

export const checkForLoggedInUser = (state = { UserLoggedin : false}, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, UserLoggedin: action.UserLoggedin }
    default:
      return state;
  }
}