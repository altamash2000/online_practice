import React, { useState } from 'react'
import CustomButton from '../../../customComponents/button/customButton'
import CustomInput from '../../../customComponents/customTextInput'
import UnderLineText from '../../../customComponents/under-line-text/underLineText'
import { ThemeColors } from '../../../theme/theme'
import CustomCard from '../../../customComponents/card/CustomCard';

export default function Otp() {
  const [otpfield, setOtpField] = useState(['otp1', 'otp2', 'otp3', 'otp4', 'otp5', 'otp6'])
  // const [value, setValue] = useState('');
  const rightTxt = {
    color: ThemeColors.primary,
    fontSize: 'large',
    fontFamily: 'SemiBold',
    fontWeight: '600'
  }

  const handleChange = (value,e) => {
  console.log("change in otp",value,e);
  }

  const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 1;
      if (next > -1) {
        elmnt.target.form.elements[next].focus()
      }
    }
    else {
      const next = elmnt.target.tabIndex + 1;
      if (next < 6) {
        elmnt.target.form.elements[next].focus()
      }
    }
  }
  return (
    <section>
      <UnderLineText text='Enter OTP' subText='Enter the 6 digit code that you received on your email' />
      <CustomCard>
        <form>
          <div style={{ display: 'flex', columnGap: '2rem' }}>
            {
              otpfield.map((item, i) =>
                <CustomInput  key={i} name="text" placeholder={item} type="text" value={item} autoComplete="off" label={item} tabIndex={i} maxLength="1" onClick={e => handleChange({ item }, e)} onKeyUp={e => inputfocus(e)} />
              )
            }
          </div>
          <CustomButton title="Continue" />
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
            <p style={rightTxt} className="pointer" >Resend</p>
          </div>
        </form>
      </CustomCard>
    </section>
  )
}
