import React from 'react';

import { Outlet } from 'react-router-dom';
import BgImg from '../../customComponents/BgImg';
import { ThemeColors } from '../../theme/theme';
export default function LoginPage({auth}) {
 




  return (
    <>
      <div className='container'>
        <div className='inner-container'>
          <div style={{background:ThemeColors.light}} className='half1'>
         <Outlet/>
          </div>
          <div className='half2'>
            {/* <BgImg /> */}
          </div>
        </div>
      </div>
    </>
  )
}
