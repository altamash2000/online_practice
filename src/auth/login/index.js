import React from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ auth, setAuth }) => {
  const navigate = useNavigate();
  const signIn = () => {
    setAuth(!auth);
    localStorage.setItem("auth", true);
    navigate("/first-page")
  }
  return (
    <div>
      <button onClick={signIn}>Sign-IN</button>
      <button onClick={() => navigate("sign-up")}>Sign-UP</button>
    </div>
  )
}

export default LoginPage
