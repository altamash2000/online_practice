import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FirstPage from './FirstPage'

const PrivateRoute = () => {
  return (
    <>
     <Routes>
        <Route path='first-page' element={<FirstPage/>}/>
        <Route index  element={<FirstPage/>}/>
        </Routes> 
    </>
  )
}

export default PrivateRoute
