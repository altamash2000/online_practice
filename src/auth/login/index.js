import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MailIcon, PasswordIcon } from '../../assets/icon/inputIcon';
import CustomButton from '../../customComponents/button/customButton';
import CustomInput from '../../customComponents/customTextInput';
import { ThemeColors } from '../../theme/theme';
import UnderLineText from '../../customComponents/under-line-text/underLineText';

const LoginPage = ({ auth, setAuth }) => {
  const navigate = useNavigate();
  const onClick = () => {
    console.log('clicked');
    setAuth(!auth);
    localStorage.setItem("auth", true);
    navigate("/first-page")
  }

  const sectioninner = {
    backgroundColor: ThemeColors.white,
    height: 'auto',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: `calc(100% - 1200px)`,
    position: 'absolute',
    margin: 'auto',
    display: 'flex',

  }



  return (
    <section>
      <UnderLineText text='Hey, enter your details to get sign in to your account' subText='when an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
      <div style={sectioninner}>
        <form>
          <CustomInput name="Email" placeholder="Email Address" type="text" label="Email Address" lefticon={<MailIcon />} righticon={<PasswordIcon />} />
          <CustomButton title="Login" onClick={onClick} />
        </form>
      </div>
    </section>
  )
}

export default LoginPage
