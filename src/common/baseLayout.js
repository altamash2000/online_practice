import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom';
import LogPage from '../Pages/LogPage';
import SignUp from '../Pages/SignUp';
import { ThemeColors } from '../theme/theme'
import "./baseLayout.css"

export  function BaseLayout() {
  return (
    <div className='outerDiv'>
     <div className='innerDiv'>
        <div className='outerflex'>
         <div className='left-flex' style={{backgroundColor:ThemeColors.light}}>
         <Outlet/>
         </div>
         <div className='right-flex' style={{backgroundColor:ThemeColors.primary}}>
         
         </div>
        </div>
     </div>
    </div>
  )
}
 const Layout=({auth,setAuth})=>{
  return(
    <Routes>
      <Route element={<BaseLayout/>}>
              <Route path='login' element={<LogPage auth={auth} setAuth={setAuth} />} />
              <Route path='sign-up' element={<SignUp/>}/>
              <Route index element={<LogPage auth={auth} setAuth={setAuth} />} />
      </Route>
    </Routes>
  )
}
export default Layout