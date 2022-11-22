import React, { useEffect, useState ,useContext} from 'react';
// import UserData from './components/UserData';
import { Route, Routes } from 'react-router';
import { useDispatch } from 'react-redux';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error404 from './Pages/Error404';
import ProductPage from './Pages/ProductPage';
import CollectionPage from './Pages/CollectionPage';
import Cart from './Pages/Cart';
import User from './Pages/User';
import PrivateRoute from './components/PrivateRoute';
import { isLogin } from './components/loginCredential';
import { UserLoggedIn } from './actions';
import { darkModeContext } from './useContext';

const MyWebsite = () => {
  const dispatch = useDispatch();
  const [loginStatus,SetLoginStatus] = useState(isLogin());
  useEffect(() => {
    if (loginStatus) {
      dispatch(UserLoggedIn(true))
    } else {
      dispatch(UserLoggedIn(false))
    }
  }, [])


  const theme = useContext(darkModeContext);
  useEffect(() => {
    const DarkModeStatus = localStorage.getItem('darkMode');
    if (DarkModeStatus == 'true') {
      theme.dispatch({ type : 'darkmode'})
      localStorage.setItem('darkMode', true)
    } else {
      theme.dispatch({ type: "lightmode" })
      localStorage.setItem('darkMode', false)
    }
  }, [])
  
  return (
    <div className="myWebsite-wrapper">
      <Routes>
        {/* Nested Routing */}
        <Route path="/" element={<Home />}>
          {/* <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} /> */}
          <Route path="/products/t-shirt" element={<ProductPage />} />
          {/* <Route path="Collection" element={<CollectionPage />} /> */}
          <Route path="Cart" element={<Cart />} />
              {/* react router- link ,dynamic routing */}
          <Route element={<PrivateRoute />}>
            <Route path='User' element={<User />} >
              <Route path=":name" element={<User />} />
            </Route>
          </Route>

          <Route path="*" element={<Error404 />} />
          
        </Route>
      </Routes>
    </div>
  )
}

export default MyWebsite