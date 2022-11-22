import React from 'react'

const EmptySideCart = () => {
  return (
    <div className="no-items">
      <img src='https://cdn.shopify.com/s/files/1/0017/3103/5196/files/empty-cart.png?v=1662457916' alt="empty-cart" />
      <div className="upsell-cart-empty-label">There's nothing in here — yet!</div>
      <a href="/collections/all" className="btn button upsell-cart-empty-btn">Start shopping</a>
    </div>
  )
}

export default EmptySideCart