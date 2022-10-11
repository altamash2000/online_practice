import React from 'react'
import CustomButton from '../../customComponents/button/customButton'
import CustomInput from '../../customComponents/customTextInput'
import UnderLineText from '../../customComponents/under-line-text/underLineText'
import { ThemeColors } from '../../theme/theme'
import { cardBodyinner, cardinner } from '../login/logincss'

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
      <div style={cardinner}>
        <div style={cardBodyinner}>
          <form>
            <CustomInput name="Email" placeholder="OTP" type="email" label="OTP"  />
            <CustomButton title="Continue" onClick={onclick} />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
              <p style={rightTxt} className="pointer" >Resend</p>
            </div>

          </form>
        </div>
      </div>
    </section>
  )
}
