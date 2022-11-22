import React, { useEffect ,useState} from 'react'
import { getCartData } from '../../javascript/helper'
import { useDispatch, useSelector } from 'react-redux'
import { cartResultData, isSideCartOpen } from '../actions/cartAction'
import CartItem from './CartItem';
import SideCartFooter from '../components/SideCartFooter';
import SideCartHeader from '../components/SideCartHeader'
import EmptySideCart from '../components/EmptySideCart';
import SideCartEditVariant from '../components/SideCartEditVariant';
const SideCart = () => {
  const dispatch = useDispatch()
  const cartData = useSelector(state => state?.getCartDataReducer?.cartData)
  const LoadingData = useSelector(state => state?.checkShowLoader?.showLoader);
  const hideCartItem = useSelector(state => state?.hideCartItemData?.hideCartItem);
  const checkForSideCartOpen = useSelector((state) => state?.checkIsSideCartOpen?.sideCartOpen)
  const { items = [], total_price = 0 } = cartData;

  // Fetch latest cart data
  const fetchCartData = async () => {
    setLoading(true)
    const cartResult = await getCartData();
    dispatch(cartResultData(cartResult))
    setLoading(false)
  }

  useEffect(() => {
    fetchCartData();
  }, [])

  // On Outside of sidecart click
  let sideCartCloseBtn = document.querySelector('.overflow-data');
  sideCartCloseBtn?.addEventListener('click', (e) => {
    e.target.classList.remove('active');
    dispatch(isSideCartOpen(false))
  })

  const [loading, setLoading] = useState(LoadingData);
  const [hideCartItemData,setHideCartItemData] = useState(hideCartItem);
  useEffect(() => {
    /* This useEffect will change local state when Redux Loading state gets updated */
    setLoading(LoadingData);
  } , [LoadingData])

  return (
    <div className={`sidecart-wrapper ${checkForSideCartOpen ? " active" : ""} `}>
      <div className="side-cart-main">
        <div className={`loading-overlay ${loading ? "active" : ""}`}></div>
        <div className="side-cart-header">
          <SideCartHeader />
        </div>
        {
          hideCartItemData ?
          <SideCartEditVariant /> :
          <div>
            <div className="side-cart-body">
              <div className="side-cart-products">
                {
                  items?.map((item, i) => (
                    <CartItem key={i} item={item} i={i} />
                  ))
                }
              </div>
            </div>
            {
              items.length == 0 ?
                <EmptySideCart />
                :
                <SideCartFooter total_price={total_price} />
            }
          </div>
        }
      </div>
    </div>
  )
}

export default SideCart