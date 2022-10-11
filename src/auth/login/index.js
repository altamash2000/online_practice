import React from 'react'
import { useNavigate } from 'react-router-dom';
import UnderLineText from '../../customComponents/under-line-text/underLineText';

const LoginPage = ({ auth, setAuth }) => {
  const navigate = useNavigate();
  const signIn = () => {
    setAuth(!auth);
    localStorage.setItem("auth", true);
    navigate("/first-page")
  }
  return (
    <section>
      <UnderLineText text='Hey, enter your details to get sign in to your account' subText='when an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
      <button onClick={signIn}>Sign-IN</button>
      <button onClick={() => navigate("sign-up")}>Sign-UP</button>
    </section>
  )
}

export default LoginPage
