import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../auth/login'
import "./baseLayout.css"

export default function baseLayout() {
  return (
    <div className='outerDiv'>
     <div className='innerDiv'>
        <div className='outerflex'>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Login/>} />
            </Route>
          </Routes>
          </BrowserRouter>
        </div>
     </div>
    </div>
  )
}
