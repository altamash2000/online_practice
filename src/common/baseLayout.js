import React from 'react'
import { ThemeColors } from '../theme/theme'
import "./baseLayout.css"

export default function baseLayout() {
  return (
    <div className='outerDiv'>
     <div className='innerDiv'>
        <div className='outerflex'>
         <div className='left-flex' style={{backgroundColor:ThemeColors.light}}>
    
         </div>
         <div className='right-flex' style={{backgroundColor:ThemeColors.primary}}>
         
         </div>
        </div>
     </div>
    </div>
  )
}
