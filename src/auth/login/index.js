import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MailIcon, PasswordIcon, RightIcon } from '../../assets/icon/inputIcon';
import CustomButton from '../../customComponents/button/customButton';
import CustomInput from '../../customComponents/customTextInput';
import { ThemeColors } from '../../theme/theme';

const LoginPage = ({ auth, setAuth }) => {
  const navigate = useNavigate();
  const onClick = () => console.log('clicked');
  const signIn = () => {
    setAuth(!auth);
    localStorage.setItem("auth", true);
    navigate("/first-page")
  }
  const sectioninner={
    backgroundColor:ThemeColors.white,
    height:'auto',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding:5,
    width:`calc(100% - 1200px)`,
    position: 'absolute',
    margin: 'auto',
    display: 'flex',
    margin:10,
  }
    


  return (
    <div style={sectioninner}>
      <form>
      <CustomInput name="Email" placeholder="Email Address" type="text" label="Email Address" lefticon={<MailIcon/>} righticon={<PasswordIcon/>}/>
      <CustomButton title="Login" onClick={onClick}/>
      </form>
    </div>
  )
}

export default LoginPage
