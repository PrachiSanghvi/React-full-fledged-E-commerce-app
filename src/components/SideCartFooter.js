import React from 'react'
import { formatMoney } from '../../javascript/helper'
const SideCartFooter = ({total_price}) => {
  return (
    <div className='side-cart-footer'>
      <div className="total-wrapper">
        <div className="cart-summary-left">Total</div>
        <div className="cart-summary-price">{formatMoney(total_price)}</div>
      </div>
      <div className="side-cart-checkout">
        <a href="/cart" className="button">Cart</a>
      </div>
    </div>
  )
}

export default SideCartFooter