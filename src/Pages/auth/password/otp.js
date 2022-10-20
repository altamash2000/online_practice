import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";

import { numberOnly } from '../../../assets/regex'
import CustomButton from '../../../customComponents/button/customButton'
import CustomCard from '../../../customComponents/card/CustomCard'
import CustomInput from '../../../customComponents/customTextInput'
import UnderLineText from '../../../customComponents/under-line-text/underLineText'
import { ThemeColors } from '../../../theme/theme'

export default function Otp() {
  const [otpfield, setOtpField] = useState(['', '', '', "", "", ''])
  const { t } = useTranslation();

  const rightTxt = {
    color: ThemeColors.primary,
    fontSize: 'large',
    fontFamily: 'SemiBold',
    fontWeight: '600'
  }
  useEffect(() => {
  }, [])

  const handleChange = (e, index) => {
    let isNumber = numberOnly.test(e.target.value)
    if (!isNumber) return
    let otpfieldcopy = [...otpfield]
    otpfieldcopy[index] = e.target.value; setOtpField(otpfieldcopy)
  }

  const inputfocus = (elmnt, ind) => {
    const index = elmnt.target.tabIndex
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      let otpfieldcopy = [...otpfield]
      otpfieldcopy[ind] = '';
      setOtpField(otpfieldcopy)
      const next = index - 1;
      if (next > -1) {
        elmnt.target.form.elements[next].focus()
      }
    }
    else {
      const next = index + 1;
      let num = numberOnly.test(elmnt.target.form.elements[index].value)
      if (next < 6 && num) {
        elmnt.target.form.elements[next].focus()
      }
    }
  }
  return (
    <section>
      <UnderLineText value={{
          heading: t("authPage.greeting"),
          subText: t("authPage.subHeading"),
        }}  />
      <CustomCard>
        <form>
          <div style={{ display: 'flex', columnGap: '2rem' }}>
            {
              otpfield.map((item, i) =>
                <CustomInput key={i} name="text" placeholder={item} type="text" inputRef={i === 0 && true} value={item} autoComplete="off" label={item} tabIndex={i} maxLength="1" onClick={handleChange} onKeyUp={inputfocus} />
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
