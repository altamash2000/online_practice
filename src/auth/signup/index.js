import React from 'react'
import { useNavigate } from 'react-router-dom'
import { EyeIcon, MailIcon, PasswordIcon, UserIcon } from '../../assets/icon/inputIcon'
import CustomButton from '../../customComponents/button/customButton'
import CustomInput from '../../customComponents/customTextInput'
import FormFooter from '../../customComponents/form-footer/form-footer'
import RadioButton from '../../customComponents/radio-button/radioButton'
import UnderLineText from '../../customComponents/under-line-text/underLineText'
import { cardBodyinner, cardinner } from '../login/logincss'


export default function Signup() {
  const navigate = useNavigate();
  const onClick = () => {
  }
  const login = () => {
    navigate("/")
  }
  return (
    <>
      <section>
        <UnderLineText text='Hey, enter your details to get sign up to create your account' subText='when an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
        <div style={cardinner}>
          <div style={cardBodyinner}>
            <form>
              <CustomInput name="fullname" placeholder="Full Name" type="text" label="Full Name" lefticon={<UserIcon />} righticon={""} />
              <CustomInput name="Email" placeholder="Email Address" type="email" label="Email Address" lefticon={<MailIcon />} righticon={""} />
              <CustomInput name="password" placeholder="Password" type="password" label="Password" lefticon={<PasswordIcon />} righticon={<EyeIcon />} />
              <CustomInput name="confirmpassword" placeholder="Confirm Password" type="password" label="Confirm Password" lefticon={<PasswordIcon />} righticon={<EyeIcon />} />
              <RadioButton text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." name='r1' />
              <RadioButton text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." name='r2' />
              <CustomButton title="Signup" onClick={onClick} />
              <FormFooter leftText="Already Have An Account" rightText="Login" rightClick={login} />

            </form>
          </div>
        </div>
      </section>
    </>
  )
}
