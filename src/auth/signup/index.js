import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ClassIcon, EyeIcon, MailIcon, PasswordIcon, UserIcon } from '../../assets/icon/inputIcon'
import CustomButton from '../../customComponents/button/customButton'
import CustomInput from '../../customComponents/customTextInput'
import Dropdown from '../../customComponents/dropdown/dropdown'
import FormFooter from '../../customComponents/form-footer/form-footer'
import UnderLineText from '../../customComponents/under-line-text/underLineText'
import { cardBodyinner, cardinner } from '../login/logincss'
export default function Signup() {
  const navigate = useNavigate();
  const onClick = () => {
    console.log("signup create")
  }

  const Login = () => {
    navigate("/")
  }
  const options = ["Class12", "Class11", "Class10"];
  return (
    <>
      <section>
      <UnderLineText text='Hey, enter your details to get sign up to create your account' subText='when an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
      <div style={cardinner}>
        <div style={cardBodyinner}>
          <form>
            <CustomInput name="fullname" placeholder="Full Name" type="text" label="Full Name" lefticon={<UserIcon />} righticon={""} />
            <CustomInput name="Email" placeholder="Email Address" type="email" label="Email Address" lefticon={<MailIcon />} righticon={""} />
            <Dropdown name="class" placeholder="Class"  label="Class" option={options} lefticon={<ClassIcon/>}  righticon={""} />
            <CustomInput name="password" placeholder="Password" type="password" label="Password" lefticon={<PasswordIcon />} righticon={<EyeIcon />} />
            <CustomInput name="confirmpassword" placeholder="Confirm Password" type="password" label="Confirm Password" lefticon={<PasswordIcon />} righticon={<EyeIcon />} />
            <CustomButton title="Signup" onClick={onClick} />
            <FormFooter leftText='Already Have An Account' rightClick={Login} rightText='Login' />
          </form>
        </div>
      </div>
    </section>
    </>
  )
}
