import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from "yup";

import { EyeIcon, MailIcon, PasswordIcon } from '../../../assets/icon/inputIcon';
import { emailregex, passwordRegex } from '../../../assets/regex';
import CustomButton from '../../../customComponents/button/customButton';
import CustomCard from '../../../customComponents/card/CustomCard';
import CustomInput from '../../../customComponents/customTextInput';
import FormFooter from '../../../customComponents/form-footer/form-footer';
import UnderLineText from '../../../customComponents/under-line-text/underLineText';
import { ThemeColors } from '../../../theme/theme';
import { Formik } from "formik";
import { observer } from 'mobx-react';
import RootStore from '../../../MobX';
import AuthService from '../../../Services/AuthService';

const LoginPage = observer(({ auth, setAuth, setHeight, height }) => {

  const { innerWidth: width } = window;
  const navigate = useNavigate();
  const pathname = useLocation()
  const from = pathname.pathname ? pathname.pathname : "/"
  console.log(from);
  const signUp = () => {
    console.log("innerwidth", width)
    width <= 480 && setHeight(true)
    navigate("sign-up")
    AuthService.login()
  }
  const forgotPass = () => {
    navigate('forgot-password')
  }
  return (
    <section>
      <UnderLineText text='Hey, enter your details to get sign in to your account' subText='when an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
      <p>{RootStore.authStore.user.username}  </p>
      <CustomCard>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required("Email is Required").matches(emailregex, "Email is not valid"),
            password: Yup.string().required("Password is required").matches(passwordRegex, "Password is not valid"),
          })}
        >
          {(props) => {
            const {
              touched,
              errors,
              handleChange,
              handleSubmit,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <CustomInput name="email" id="email" onChange={handleChange} placeholder="Email Address" type="email" label="Email Address" lefticon={<MailIcon />} righticon={""} />
                {errors.email && touched.email && (<div className="input-feedback">{errors.email}</div>)}
                <CustomInput name="password" id="passowrd" onChange={handleChange} placeholder="Password" label="Password" lefticon={<PasswordIcon />} righticon={<EyeIcon />} />
                {errors.password && touched.password && (<div className="input-feedback">{errors.password}</div>)}
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                  <p style={{ fontFamily: 'Medium', fontSize: 'large' }} ><input type="checkbox" value="RememberMe" /> Remember me</p>
                  <p style={{ fontFamily: 'Medium', fontSize: 'large' }} className="pointer" onClick={forgotPass} >Forgot Password?</p>
                </div>
                <CustomButton title="Login" type="submit" />
                <FormFooter leftText='Need An Account?' rightClick={signUp} rightText='Signup' />
              </form>
            );
          }}
        </Formik>
      </CustomCard>


    </section>
  )
})

export default LoginPage