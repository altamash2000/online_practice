import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import LoginPage from '../auth/login';
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
            <div className="container-flex">

              <Outlet />
            </div>
          </div>
          <div className='right-flex' style={{ backgroundColor: ThemeColors.primary }}>

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
        <Route path='login' element={<LoginPage auth={auth} setAuth={setAuth} />} />
        <Route path='sign-up' element={<SignUpPage />} />
        <Route index element={<LoginPage auth={auth} setAuth={setAuth} />} />
      </Route>
    </Routes>
  )
}
export default Layout