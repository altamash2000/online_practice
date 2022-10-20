import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";

import { MailIcon } from '../../../assets/icon/inputIcon'
import CustomButton from '../../../customComponents/button/customButton'
import CustomInput from '../../../customComponents/customTextInput'
import FormFooter from '../../../customComponents/form-footer/form-footer'
import UnderLineText from '../../../customComponents/under-line-text/underLineText'
import CustomCard from '../../../customComponents/card/CustomCard';

export default function ForgotPassword() {
  const { t } = useTranslation();

  const navigate = useNavigate(0)
  const onclick = () => {
    navigate("/auth/otp")
  }
  const login = () => {
    navigate("/")
  }
  return (
    <section>
      <UnderLineText value={{
          heading: t("authPage.greeting"),
          subText: t("authPage.subHeading"),
        }}  />
      <CustomCard>
        <form>
          <CustomInput name="Email" placeholder="Email Address" type="email" label="Email Address" lefticon={<MailIcon />} righticon={""} />
          <CustomButton title="Continue" onClick={onclick} />
          <FormFooter leftText='Remember Password?' rightClick={login} rightText='Login' />
        </form>
      </CustomCard>
    </section>
  )
}
