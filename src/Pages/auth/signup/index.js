import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";


import { ClassIcon, EyeIcon, MailIcon, PasswordIcon, UserIcon } from '../../../assets/icon/inputIcon';
import { emailregex, passwordRegex } from '../../../assets/regex';
import CustomButton from '../../../customComponents/button/customButton';
import CustomCard from '../../../customComponents/card/CustomCard';
import CustomInput from '../../../customComponents/customTextInput';
import FormFooter from '../../../customComponents/form-footer/form-footer';
import CustomSelect from '../../../customComponents/select/customeSelect';
import UnderLineText from '../../../customComponents/under-line-text/underLineText';
export default function Signup({ setHeight, height, width }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  useEffect(() => {
    width <= 480 && setHeight(true)
  }, [setHeight, width])

  const Login = () => {
    console.log("height", height, setHeight)
    setHeight(false)
    navigate("/")
  }
  const options = ["Class12", "Class11", "Class10"];
  return (
    <>
      <div className='section'>
        <UnderLineText value={{
          heading: t("authPage.greeting"),
          subText: t("authPage.subHeading"),
        }} />
        <CustomCard>
          <Formik
            initialValues={{ email: '', password: '', confirmPassword: '' }}

            onSubmit={async (values) => {
              console.log('on submit called')
              await new Promise((resolve) => setTimeout(resolve, 500));
              alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required("Email is Required").matches(emailregex, "Email is not valid"),
              password: Yup.string().required("Password is required").matches(passwordRegex, "Password is not valid"),
              confirmPassword: Yup.string().when("password", {
                is: val => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf([Yup.ref("password")], "Both password need to be the same")
              })
            })}
          >
            {(props) => {

              const {
                values,
                touched,
                errors,
                handleChange,
                handleSubmit,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <CustomInput name="fullname" placeholder="Full Name" type="text" label="Full Name" lefticon={<UserIcon />} righticon={""} />
                  <CustomInput name="email" id="email" onChange={handleChange} placeholder="Email Address" type="text" label="Email Address" lefticon={<MailIcon />} righticon={""} values={values} />
                  {errors.email && touched.email && (<div className="input-feedback">{errors.email}</div>)}
                  {/* <Dropdown name="class" placeholder="Class" label="Class" option={options} lefticon={<ClassIcon />} righticon={""} /> */}

                  <CustomSelect label='Class' options={options} leftIcon={<ClassIcon />} />
                  <CustomInput name="password" id="password" onChange={handleChange} placeholder="Password" type="password" label="Password" lefticon={<PasswordIcon />} righticon={<EyeIcon />} />
                  {errors.password && touched.password && (<div className="input-feedback">{errors.password}</div>)}
                  <CustomInput name="confirmPassword" id="confirmPassword" onChange={handleChange} placeholder="Confirm Password" type="password" label="Confirm Password" lefticon={<PasswordIcon />} righticon={<EyeIcon />} />
                  {errors.confirmPassword && touched.confirmPassword && (<div className="input-feedback">{errors.confirmPassword}</div>)}
                  <CustomButton title="Signup" type="submit" />
                  <FormFooter leftText='Already Have An Account' rightClick={Login} rightText='Login' />
                </form>
              );
            }}
          </Formik>
        </CustomCard>
      </div>
    </>
  )
}
