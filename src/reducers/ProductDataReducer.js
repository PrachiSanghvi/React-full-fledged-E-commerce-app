import { GET_PRODUCT_FETCH_SUCCESS } from "../actions/productAction";
import { SELECTED_VARIANT } from "../actions/productAction";
export const getProductDataReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCT_FETCH_SUCCESS:
      return { ...state, products: action.products };
    default:
      return state;
  }
}

export const getSelectedVariantReducer = (state = { selectedVariant: null }, action) => {
  switch (action.type) {
    case SELECTED_VARIANT:
      return { ...state, selectedVariant: action.payload }
    default:
      return state;
  }
}