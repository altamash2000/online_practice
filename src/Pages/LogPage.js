import React from 'react'
import { useNavigate } from 'react-router-dom';

const LogPage = ({auth,setAuth}) => {
  const navigate= useNavigate()
  return (
    <div>
      <button onClick={()=>{setAuth(!auth);localStorage.setItem("auth",true); navigate("/first-page")}}>Sign-IN</button>
      <button onClick={()=>navigate("sign-up")}>Sign-UP</button>
    </div>
  )
}

export default LogPage
