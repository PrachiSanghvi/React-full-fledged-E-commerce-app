import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from './Search';
import DarkMode from './DarkMode';
import LoginBtn from './LoginBtn';
import CartIcon from './CartIcon';
import { useSelector } from 'react-redux';
// Add context api-dark mode,
const Navigation = () => {
  const isLoginUser = useSelector(state => state.checkForLoggedInUser.UserLoggedin);

  return (
    <div>
      <header>
        <a href="/">Logo</a>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products/t-shirt">Product</NavLink></li>
            {/* <li><NavLink to="/Collection">Colelction</NavLink></li> */}
            {/* <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li> */}
            {isLoginUser && <li><NavLink to="/User">User</NavLink></li>}
            {/* {isLoginUser && <Search/>}        */}
            <DarkMode/>
            <LoginBtn/>
            <CartIcon />
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navigation