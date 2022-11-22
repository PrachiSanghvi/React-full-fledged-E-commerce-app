import React from 'react'
import { Navigate,Outlet } from 'react-router';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const isLoginUser = useSelector(state => state.checkForLoggedInUser.UserLoggedin);
  if (!isLoginUser) {
    return <Navigate to="/" replace />;
  }
  return <Outlet/>;
}

export default PrivateRoute