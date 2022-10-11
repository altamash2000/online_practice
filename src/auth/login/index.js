import React from 'react'
import { useNavigate } from 'react-router-dom';
import { EyeIcon, MailIcon, PasswordIcon } from '../../assets/icon/inputIcon';
import CustomButton from '../../customComponents/button/customButton';
import CustomInput from '../../customComponents/customTextInput';
import { ThemeColors } from '../../theme/theme';
import UnderLineText from '../../customComponents/under-line-text/underLineText';
import { cardBodyinner, cardinner, signUp } from './logincss';

const LoginPage = ({ auth, setAuth }) => {
  const navigate = useNavigate();
  const onClick = () => {
    console.log('clicked');
    setAuth(!auth);
    localStorage.setItem("auth", true);
    // navigate("/first-page")
  }

  return (
    <section>
      <UnderLineText text='Hey, enter your details to get sign in to your account' subText='when an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
      <div style={cardinner}>
        <div style={cardBodyinner}>
          <form>
            <CustomInput name="Email" placeholder="Email Address" type="email" label="Email Address" lefticon={<MailIcon />} righticon={""} />
            <CustomInput name="password" placeholder="Password" type="password" label="Password" lefticon={<PasswordIcon />} righticon={<EyeIcon />} />
            <CustomButton title="Login" onClick={onClick} />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
              <p className="pointer" style={{ fontSize: 'large', color: ThemeColors.other }}>Need An Account?</p>
              <p style={signUp} onClick={() => navigate("sign-up")} className="pointer">Signup</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
