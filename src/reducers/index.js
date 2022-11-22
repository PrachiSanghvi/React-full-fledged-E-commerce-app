import { combineReducers } from "redux";
import { getUserDataReducer, checkForLoggedInUser } from "./GetUserDataReducer";
import { getProductDataReducer,getSelectedVariantReducer } from "./ProductDataReducer";
import { getCartDataReducer, checkIsSideCartOpen, checkShowLoader } from "./CartDataReducer";
const myReducer = combineReducers({ getUserDataReducer, checkForLoggedInUser, getProductDataReducer, getSelectedVariantReducer,getCartDataReducer, checkIsSideCartOpen, checkShowLoader })
export default myReducer;