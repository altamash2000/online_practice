import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UploadPhoto from './uploadPhoto'

const PrivateRoute = () => {
  return (
    <>
      <Routes>
        <Route path='upload-photo' element={<UploadPhoto />} />
        <Route index element={<UploadPhoto />} />
      </Routes>
    </>
  )
}

export default PrivateRoute
