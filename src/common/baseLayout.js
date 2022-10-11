import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import img from '../assets/images/Group 2.png';
import LoginPage from '../auth/login';
import ForgotPassword from '../auth/password/forgot';
import Otp from '../auth/password/otp';
import Reset from '../auth/password/reset';
import SignUpPage from '../auth/signup';
import Header from '../navigations/header';
import { ThemeColors } from '../theme/theme';
import "./baseLayout.css";

export function BaseLayout() {
  return (
    <div className='outerDiv'>
      <div className='innerDiv'>
        <div className='outerflex'>
          <div className='left-flex' style={{ backgroundColor: ThemeColors.light }}>
            <Header />
            <div className="container-flex"><Outlet /></div>
          </div>
          <div className='right-flex' style={{ backgroundColor: ThemeColors.primary }}>
            <img src={img} alt="" className='responsiveImg' />
          </div>
        </div>
      </div>
    </div>
  )
}
const Layout = ({ auth, setAuth }) => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route index element={<LoginPage auth={auth} setAuth={setAuth} />} />
        <Route path='login' element={<LoginPage auth={auth} setAuth={setAuth} />} />
        <Route path='sign-up' element={<SignUpPage />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='otp' element={<Otp />} />
        <Route path='reset-password' element={<Reset />} />
      </Route>
    </Routes>
  )
}
export default Layout