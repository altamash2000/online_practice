import React from 'react'
import CustomButton from '../../customComponents/button/customButton'
import CustomInput from '../../customComponents/customTextInput'
import UnderLineText from '../../customComponents/under-line-text/underLineText'
import { ThemeColors } from '../../theme/theme'
import CustomCard from '../../customComponents/card/CustomCard';

export default function Otp() {
  const onclick = () => {

  }

  const rightTxt = {
    color: ThemeColors.primary,
    fontSize: 'large',
    fontFamily: 'SemiBold',
    fontWeight: '600'
  }
  return (
    <section>
      <UnderLineText text='Enter OTP' subText='Enter the 6 digit code that you received on your email' />
      <CustomCard>
        <form>
          <div style={{ display: 'flex', columnGap: '2rem' }}>
            <CustomInput name="text" placeholder="OTP" type="text" label="OTP" />
            <CustomInput name="text" placeholder="OTP" type="text" label="OTP" />
            <CustomInput name="text" placeholder="OTP" type="text" label="OTP" />
            <CustomInput name="text" placeholder="OTP" type="text" label="OTP" />
            <CustomInput name="text" placeholder="OTP" type="text" label="OTP" />
            <CustomInput name="text" placeholder="OTP" type="text" label="OTP" />
          </div>
          <CustomButton title="Continue" onClick={onclick} />
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
            <p style={rightTxt} className="pointer" >Resend</p>
          </div>
        </form>
      </CustomCard>
    </section>
  )
}
