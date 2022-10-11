import React from 'react'
import { ThemeColors } from '../../theme/theme'
export default function Login() {
  const styleSection ={
    backgroundColor:ThemeColors.white,
    width:"100%",
    
  }
  return (
    <>
      <div className='left-flex' style={{ backgroundColor: ThemeColors.light }}>
       <section  style={{backgroundColor:styleSection.backgroundColor,height:styleSection.height, width:styleSection.width}}>

       </section>
      </div>
      <div className='right-flex' style={{ backgroundColor: ThemeColors.primary }}>

      </div>
    </>
  )
}
