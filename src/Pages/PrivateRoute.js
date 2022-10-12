import React from 'react'
import Header from '../navigations/header'
import SelectInstitute from './selectInstitute'
import { Outlet, Route, Routes } from 'react-router-dom';
import { ThemeColors } from '../theme/theme';
import img from '../assets/images/Group 2.png';


const Private = () => {
  return (
    <>
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

    </>
  )
}

const Layout = ({ auth, setAuth }) => {
  return (
    <Routes>
      <Route element={<Private />}>
        <Route index element={<SelectInstitute />} />
        <Route path='select-institute' element={<SelectInstitute />} />
      </Route>
    </Routes>
  )
}
export default Layout
