import React, { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import img from '../assets/images/Group 2.png';
import LoginPage from '../auth/login';
import ForgotPassword from '../auth/password/forgot';
import Otp from '../auth/password/otp';
import Reset from '../auth/password/reset';
import SignUpPage from '../auth/signup';
import UploadPage from '../auth/uploadPhoto';
import Header from '../navigations/header';
import { ThemeColors } from '../theme/theme';
import "./baseLayout.css";

export function BaseLayout({height}) {

  return (
    <div className= 'height1 outerDivLogin'>
      
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
  )
}
const Layout = ({auth, setAuth}) => {

  const [height,setHeight]=useState(false);
  const { innerWidth: width} = window;



  return (
    <Routes>
      <Route element={<BaseLayout height={height} />}>
        <Route index element={<LoginPage auth={auth} setAuth={setAuth} setHeight={setHeight} height={height} />} />
        <Route path='login' element={<LoginPage auth={auth} setAuth={setAuth} setHeight={setHeight} height={height} />} />
        <Route path='sign-up' element={<SignUpPage setHeight={setHeight} height={height} width={width}/>} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='otp' element={<Otp />} />
        <Route path='reset-password' element={<Reset />} />
        <Route path='upload-photo' element={<UploadPage />} />
      </Route>
    </Routes>
  )
}
export default Layout