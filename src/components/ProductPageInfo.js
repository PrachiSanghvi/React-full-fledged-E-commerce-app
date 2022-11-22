import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productAddToCart } from '../actions/productAction';
import { isSideCartOpen } from '../actions/cartAction';
import { formatMoney } from '../../javascript/helper';
import ProductVariantSelector from './ProductVariantSelector';
const ProductPageInfo = ({ products }) => {
  const { product = {}, options = [] } = products;

  let dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const selectedVariant = useSelector((state) => state.getSelectedVariantReducer.selectedVariant);


  // On qty update qty state change
  const updateQty = (qty) => {
    setQty(qty)
  }

  // On Product Add to cart submit event 
  const submitEvent = (e) => {
    let vid = selectedVariant.id;
    let formData = {
      id: vid,
      qyantity: qty
    }
    dispatch(productAddToCart(formData))
    dispatch(isSideCartOpen(true))
    document.querySelector('.overflow-data').classList.add('active');
  }

  if (!selectedVariant) return null;
  return (
    <div className="right-side-product-info">
      <div className="prod-title">{selectedVariant.title}</div>
      <div className="prod-price"><span className="original-price">{formatMoney(selectedVariant.compare_at_price)}</span> <span>{formatMoney(selectedVariant.price)}</span></div>
      <ProductVariantSelector product={product} options={options} variant={selectedVariant} />
      <div className='quantity-input-wrapper'>
        <span>Quantity: </span>
        <div className="quantity">
          <button className="quantity__button" name="minus" onClick={() => updateQty(qty - 1)} type="button"> - </button>
          <input className="quantity__input" type="text" name="updates[]" value={qty} onChange={() => console.log("qty input change")} />
          <button className="quantity__button" name="plus" onClick={() => updateQty(qty + 1)} type="button"> + </button>
        </div>
      </div>

      <div className="prod-atc-wrapper">
        <a className={`prod-atc-btn ${selectedVariant?.available ? '' : 'sold-out'}`} onClick={(e) => submitEvent(e)} data-vid={selectedVariant?.id}>{selectedVariant?.available ? 'Add to cart' : 'Sold out'}</a>
      </div>
    </div>
  )
}

export default ProductPageInfo