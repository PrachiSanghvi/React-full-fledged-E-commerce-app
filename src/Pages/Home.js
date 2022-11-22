import React from 'react'
import { Outlet } from 'react-router'
import Navigation from '../components/Navigation';
import SideCart from './SideCart';
// import LoginPage from './LoginPage'
// import ProductPage from './ProductPage'
// import CollectionPage from './CollectionPage'
const Home = () => {
  // const state = store.getState();
  return (
    <div className="home-page-wrapper">
      <Navigation />
      {/* Shared Layout */}
      <SideCart />
      <Outlet />
    </div>
  )
}

export default Home