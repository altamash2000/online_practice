import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, MailIcon, PasswordIcon } from '../../assets/icon/inputIcon';
import CustomButton from '../../customComponents/button/customButton';
import CustomInput from '../../customComponents/customTextInput';
import FormFooter from '../../customComponents/form-footer/form-footer';
import UnderLineText from '../../customComponents/under-line-text/underLineText';
import { ThemeColors } from '../../theme/theme';
import { cardBodyinner, cardinner } from './logincss';
import { Formik } from "formik";
import * as Yup from "yup";
const LoginPage = ({ auth, setAuth }) => {
  const navigate = useNavigate();
  const onClick = () => {
    console.log('clicked');
    setAuth(!auth);
    localStorage.setItem("auth", true);
    navigate("/upload-photo")
  }
  const signUp = () => {
    navigate("sign-up")
  }
  const forgotPass = () => {
    navigate('forgot-password')
  }
  return (
    <section>
      <UnderLineText text='Hey, enter your details to get sign in to your account' subText='when an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
      <div style={cardinner}>
        <div style={cardBodyinner}>
        <Formik
        initialValues={{ email: "", gender: "", color: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email(),
          password: Yup.string()
        })}
      >
        {(props) => {
          return (
          <form>
            <CustomInput name="Email" placeholder="Email Address" type="email" label="Email Address" lefticon={<MailIcon />} righticon={""} formdata={props}/>
            <CustomInput name="password" placeholder="Password" type="password" label="Password" lefticon={<PasswordIcon />} righticon={<EyeIcon />} formdata={props} />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
              <p><input type="checkbox" value="RememberMe" />Remember me</p>
              <p style={{ color: ThemeColors.primary }} className="pointer" onClick={forgotPass} >Forgot Password?</p>
            </div>
            <CustomButton title="Login" onClick={onClick} />
            <FormFooter leftText='Need An Account?' rightClick={signUp} rightText='Signup' />

          </form>
          );
          }}
          </Formik>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
