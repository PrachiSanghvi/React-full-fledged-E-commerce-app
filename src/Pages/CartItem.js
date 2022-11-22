import React from 'react'
import { useDispatch } from 'react-redux';
import { cartResultData,showLoadingOverlay,isHideCartData } from '../actions/cartAction'

import { updateItem, formatMoney } from '../../javascript/helper'
const CartItem = ({item,i}) => {
  const dispatch = useDispatch();
  const [updateCurrentVariant,setCurrentVariant] = useState({})
  // O. sidecart qty increase,decrease,remove item
  const updateCartQty = async (id, newQty) => {
    let formData = {
      updates: {
        [parseInt(id)]: newQty,
      },
    };
    dispatch(showLoadingOverlay(true))
    const updateCart = await updateItem(formData);
    dispatch(cartResultData(updateCart));
    dispatch(showLoadingOverlay(false))
  }

  const editCartProductVariant = (e) => {
    debugger
    console.log("e",e.target);
    updateCurrentVariant(e.target.id)
    dispatch(isHideCartData(true))
  }
  return (
    <div className="side-cart-item" key={i} data-line={i} current-id={item?.id}>
      <div className="cart-image">
        <a href={item.url}> <img src={item.image} alt="" width="150" height="150" /></a>
      </div>
      <div className="cart-content">
        <div className="cart-name">
          <a href={item.url}>{item.variant_title}</a>
        </div>
        <div className="cart-price"><span className="original-price">{formatMoney(item.price * item.quantity)} </span><span className="">{formatMoney(item.discounted_price * item.quantity)}</span></div>
        <div className="edit-variant-btn" id={item?.id} onClick={(e) => editCartProductVariant(e)}>EDIT</div>
        <div className="cart-qty-wrapper">
          <div className="quantity">
            <button className="quantity-button-minus quantity__button" name="minus" onClick={() => updateCartQty(item.id, item.quantity - 1)} type="button">-</button>
            <input className="quantity__input" type="number" name="updates[]" value={item.quantity} min="0" id="Quantity-1" data-index="1" onChange={() => console.log("qty changed")} />
            <button className="quantity-button-plus quantity__button" name="plus" onClick={() => updateCartQty(item.id, item.quantity + 1)} type="button">+</button>
          </div>
          <cart-remove-button className="remove-cart-item" id="Remove-1" data-index="1">
            <a href="#" className="button button--tertiary" aria-label="Remove Eyelift Undereye Gel" onClick={() => updateCartQty(item.id, 0)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true" focusable="false" role="presentation" className="icon icon-delete">
                <path fill="currentColor" d="M199.45,512q-2.74-39.42-5.49-78.84c-2.26-31.57-4.64-63.12-6.86-94.69-1.57-22.18-2.92-44.38-4.44-66.57-1.28-18.6-2.75-37.19-4-55.79-.2-3.12-1.47-4.4-4.43-4.11-4,.38-5.7-1.26-6.17-5.44-1.24-11-2.91-22-4.57-33-.53-3.52.48-5.29,4.2-5.12,1.2.05,2.4,0,3.6,0q144.39,0,288.78,0c2.22,0,4.45.14,6.67.21v2.06c-1.3,11.36-2.66,22.71-3.87,34.08-.44,4.2-.95,8-6.69,7.29-2.67-.31-3.4,1.42-3.57,3.85-1.64,23.86-3.41,47.72-5.06,71.59-1.53,22.17-2.88,44.35-4.44,66.51-1.88,26.76-3.91,53.51-5.84,80.27q-2.79,38.87-5.48,77.74ZM386.7,212c-3.08,0-6.18.21-9.24-.06-4.36-.37-6,1.08-6,5.73.05,27.73-1.12,55.45-1.89,83.17-1,37.31-1.54,74.63-2.4,111.94q-.7,30.28-1.86,60.56c-.15,4.15,1.08,5.95,5.46,5.7,5.29-.3,10.62-.23,15.92-.06,3.53.11,4.73-1.27,4.88-4.79,1.57-39,3.34-78,4.94-116.95.9-22.06,1.52-44.13,2.37-66.19.41-10.6,1.18-21.18,1.6-31.78.56-14.2.89-28.4,1.45-42.6.15-3.69-1.51-4.85-4.92-4.7S390.13,212,386.7,212Zm-84.3,50c.28,18.84.46,37.67.76,56.51.54,33.9.3,67.82.52,101.73.12,17.81.61,35.61.73,53.42,0,3.95,1.3,5.61,5.36,5.42a106,106,0,0,1,14.37,0c5.36.47,6.6-1.7,6.62-6.76q.35-88.36,1.06-176.73c.17-26-.16-52.07,1-78.08.19-4.28-1.32-5.78-5.56-5.6-6.33.26-12.68.29-19,0-4.48-.21-6,1.36-5.92,5.89C302.54,232.51,302.4,247.24,302.4,262Zm-65.63-50v0c-3.94,0-7.88,0-11.82,0-2.66,0-3.55,1.15-3.36,3.83,1.74,25.26,3.32,50.54,5,75.8,2.25,32.78,4.66,65.54,6.87,98.32q2.84,42,5.32,84c.22,3.72,1.79,5.18,5.42,5.09,5.31-.12,10.62-.17,15.93,0,4,.15,4.88-1.7,4.65-5.34-.79-12.64-1.34-25.3-2-37.95-.73-15.21-1.4-30.43-2.17-45.65-1.62-32-3.34-63.92-4.91-95.88-1.19-24.11-1.87-48.24-3.44-72.32-.73-11.27.83-9.83-10.44-10C240.19,212,238.48,212,236.77,212Z"></path>
                <path fill="currentColor" d="M221,0c9.24,4.32,16.9,11,25.09,16.85,3.61,2.6,1.24,4.68-.27,6.82q-25.7,36.54-51.45,73Q136.1,179.34,77.89,262c-2.83,4-5,4.86-8.79,1.56-4-3.46-8.37-6.52-12.6-9.72a32.51,32.51,0,0,1-11.26-14.33v-4.11c2.47-9.68,8.09-17.68,13.68-25.68,8.84-12.62,17.66-25.25,26.72-37.71,2.43-3.34,2.26-5.54-.85-8.17a78.6,78.6,0,0,1-10.1-10.21c-4.18-5.13-5.19-10.7-2.64-16.78a69.86,69.86,0,0,1,4.12-8.26c7.38-12.57,16.43-24,24.77-35.93,5.79-8.27,11.58-16.57,17.76-24.55C128.16,55.93,134.84,54.49,149,61a52.67,52.67,0,0,1,6.42,3.21c3.17,2,5.14,1.72,7.49-1.63q13.89-19.74,28.4-39c6.54-8.74,12.65-18,22.57-23.52ZM92.65,137.43c.13,4.29,3.6,6.34,6.07,9.09,2.1,2.35,3.64,1.7,5.24-.63,3.77-5.5,7.65-10.93,11.5-16.38C125,116,134.61,102.41,144.11,88.8c.93-1.32,3.08-2.63.86-4.77-5.48-5.25-14-5-18.4,1.19-10.81,15.19-21.29,30.61-31.88,45.95A10.23,10.23,0,0,0,92.65,137.43Z"></path>
                <path fill="currentColor" d="M278.32,86.64c0-17.18,13.63-31.36,30.16-31.31,16.34.05,30,14.09,30,30.94.06,17.21-13.52,31.24-30.19,31.21C291.88,117.45,278.35,103.55,278.32,86.64Z"></path>
                <path fill="currentColor" d="M418,49.09c.05,16.16-12.7,29.3-28.3,29.17-15.2-.12-27.93-13.36-28-29.12s12.48-28.82,28-28.91C405.59,20.14,417.9,32.67,418,49.09Z"></path>
                <path fill="currentColor" d="M385.89,119.58c.06,11.39-8.36,20.36-19.24,20.48s-19.67-8.92-19.8-20,8.62-20.34,19.38-20.49S385.82,108.28,385.89,119.58Z"></path>
              </svg>
            </a>
          </cart-remove-button>
        </div>
      </div>
    </div>
  )
}

export default CartItem