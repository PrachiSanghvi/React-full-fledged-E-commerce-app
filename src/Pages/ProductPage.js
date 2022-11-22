import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductFetch } from '../actions/productAction'
import ProductPageInfo from '../components/ProductPageInfo';
import { productSelectedVariant } from '../actions/productAction';
const ProductPage = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductFetch())
  }, [])
  
  const products = useSelector(state => state.getProductDataReducer.products);
  // const selectedVariant = useSelector(state => state.getSelectedVariantReducer.selectedVariant)
  useEffect(() => {
    if (products?.product) {
      let firstAvailableVariant = products?.product.variants.find(variant => variant.available);
      dispatch(productSelectedVariant(firstAvailableVariant))
    }
  }, [products])

  if (!products) {
    return "Loading..."
  }
  return (
    <div className="product-section-wrapper">
      <div className="left-side-image-section">
        <img src={products?.product?.["media"][0].src} />
      </div>
      <ProductPageInfo products={products}/>
    </div>
  )
}

export default ProductPage