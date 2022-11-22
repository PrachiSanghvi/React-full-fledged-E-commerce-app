import { FETCH_CART_DATA, IS_SIDECART_OPEN,IS_SHOW_LOADER } from '../actions/cartAction'
export const getCartDataReducer = (state = { cartData: [] }, action) => {
  switch (action.type) {
    case FETCH_CART_DATA:
      return { ...state, cartData: action.payload }
    default:
      return state;
  }
}

export const checkIsSideCartOpen = (state = { sideCartOpen: false }, action) => {
  switch (action.type) {
    case IS_SIDECART_OPEN:
      return { ...state, sideCartOpen: action.sideCartOpen }
    default:
      return state;
  }
}

export const checkShowLoader = (state = { showLoader : false }, action) => {
  switch (action.type) {
    case IS_SHOW_LOADER:
      return { ...state, showLoader: action.showLoader }
    default:
      return state;
  }
}

export const hideCartItemData = (state = {hideCartItem:false},action) => {
  switch (action.type) {
    case HIDE_CART_DATA:
      return {...state,hideCartItem:action.hideCartItem}
    default:
      return state;
  }
}