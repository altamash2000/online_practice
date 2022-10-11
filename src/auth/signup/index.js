import React from 'react'
import { useNavigate } from 'react-router-dom'
import { EyeIcon, MailIcon, PasswordIcon, UserIcon } from '../../assets/icon/inputIcon'
import CustomButton from '../../customComponents/button/customButton'
import CustomInput from '../../customComponents/customTextInput'
import UnderLineText from '../../customComponents/under-line-text/underLineText'
import { ThemeColors } from '../../theme/theme'
import { cardBodyinner, cardinner, signUp } from '../login/logincss'


export default function Signup() {
  const navigate = useNavigate();
  const onClick = () => {
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
            <CustomButton title="Signup" onClick={onClick} />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
              <p className="pointer" style={{ fontSize: 'large', color: ThemeColors.other }}>Already Have An Account</p>
              <p style={signUp} onClick={() => navigate("/")} className="pointer">Login</p>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}
