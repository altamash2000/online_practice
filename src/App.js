import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import BaseLayout from './common/baseLayout';
import PrivateLayout from './Pages/PublicPages/PrivateRoute';


function App() {
  const [authe, setAuth] = useState(false)
  let auth = localStorage.getItem("auth")
  return (
    // <BaseLayout/>
    <Routes>
      {!auth ? (
        <>
          <Route path='auth/*' element={<BaseLayout auth={authe} setAuth={setAuth} />} />
          <Route path='*' element={<Navigate to='/auth' />} />
        </>
      ) : (
        <>
          <Route path='/*' element={<PrivateLayout/>} />
          <Route index element={<Navigate to='first-page' />} />
        </>)}
    </Routes>
  )
}
export default App;
