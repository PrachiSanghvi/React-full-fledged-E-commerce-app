export const GET_PRODUCT_FETCH = 'GET_PRODUCT_FETCH';
export const GET_PRODUCT_FETCH_SUCCESS = 'GET_PRODUCT_FETCH_SUCCESS';
export const PRODUCT_ADD_TO_CART = 'PRODUCT_ADD_TO_CART'
export const SELECTED_VARIANT = 'SELECTED_VARIANT'

export const getProductFetch = () => ({
  type: GET_PRODUCT_FETCH
})

export const productAddToCart = (productData) => ({
  type: PRODUCT_ADD_TO_CART,
  payload: productData
})

export const productSelectedVariant = (selectedVariant) => ({
  type: SELECTED_VARIANT,
  payload: selectedVariant
})
