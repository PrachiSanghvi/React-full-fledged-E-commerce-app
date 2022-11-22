import React from 'react'
import { useDispatch } from 'react-redux'
import { isSideCartOpen } from '../actions/cartAction'
const SideCartHeader = () => {
  const dispatch = useDispatch()
  // On sidecart close click
  const sideCartCloseEvent = () => {
    document.querySelector('.overflow-data').classList.remove('active');
    dispatch(isSideCartOpen(false))
  }
  return (
    <div className="side-cart-left">
      <a className="close-cart-drawer" onClick={() => sideCartCloseEvent()}>
        <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" role="presentation" className="icon icon-arrow" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor">
          </path></svg>
      </a>
      <p><a href="/cart">Your Cart</a></p>
    </div>
  )
}

export default SideCartHeader