import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, MailIcon, PasswordIcon } from '../../assets/icon/inputIcon';
import CustomButton from '../../customComponents/button/customButton';
import CustomInput from '../../customComponents/customTextInput';
import FormFooter from '../../customComponents/form-footer/form-footer';
import UnderLineText from '../../customComponents/under-line-text/underLineText';
import { ThemeColors } from '../../theme/theme';

const LoginPage = ({ auth, setAuth }) => {
  const navigate = useNavigate();
  const onClick = () => {
    console.log('clicked');
    setAuth(!auth);
    localStorage.setItem("auth", true);
    // navigate("/first-page")
  }
  const cardinner = {
    position: 'relative',
    display: 'flex',
    webkitBoxOrient: 'vertical',
    webkitBoxDirection: 'normal',
    msFlexDirection: 'column',
    flexDirection: 'column',
    minWidth: 0,
    wordWrap: ' break-word',
    backgroundColor: ThemeColors.white,
    backgroundClip: 'border-box',
    border: '1px solid rgba(0,0,0,.125)',
    borderRadius: '0.25rem',
  }

  const cardBodyinner = {
    webkitBoxFlex: '1',
    msFlex: '1 1 auto',
    flex: ' 1 1 auto',
    padding: '3.5rem',
  }
  const signUp = () => {
    navigate("sign-up")
  }


  return (
    <section>
      <UnderLineText text='Hey, enter your details to get sign in to your account' subText='when an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
      <div style={cardinner}>
        <div style={cardBodyinner}>
          <form>
            <CustomInput name="Email" placeholder="Email Address" type="email" label="Email Address" lefticon={<MailIcon />} righticon={""} />
            <CustomInput name="password" placeholder="Password" type="password" label="Password" lefticon={<PasswordIcon />} righticon={<EyeIcon />} />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
              <p><input type="checkbox" value="RememberMe" />Remember me</p>
              <p style={{ color: ThemeColors.primary }} className="pointer" >Forgot Password?</p>
            </div>
            <CustomButton title="Login" onClick={onClick} />
            <FormFooter leftText='Need An Account?' rightClick={signUp} rightText='Signup' />

          </form>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
