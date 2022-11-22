export const FETCH_CART_DATA = 'FETCH_CART_DATA';
export const IS_SIDECART_OPEN = 'IS_SIDECART_OPEN';
export const IS_SHOW_LOADER = 'IS_SHOW_LOADER'
export const HIDE_CART_DATA = 'HIDE_CART_DATA';
export const cartResultData = (cartData) => ({
    type: FETCH_CART_DATA,
    payload: cartData
})

export const isSideCartOpen = (sideCartOpen) => ({
    type:IS_SIDECART_OPEN,
    sideCartOpen
})

export const showLoadingOverlay = (showLoader) => ({
    type:IS_SHOW_LOADER,
    showLoader
})

export const isHideCartData = (hideCartItem) => ({
    type:HIDE_CART_DATA,
    hideCartItem
})