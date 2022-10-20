import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";

import { EyeIcon, PasswordIcon } from '../../../assets/icon/inputIcon'
import CustomButton from '../../../customComponents/button/customButton'
import CustomInput from '../../../customComponents/customTextInput'
import UnderLineText from '../../../customComponents/under-line-text/underLineText'
import CustomCard from '../../../customComponents/card/CustomCard';


export default function Reset() {
  const navigate = useNavigate(0)
  const { t } = useTranslation();

  const onclick = () => {
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
          <CustomInput name="password" placeholder="Password" type="password" label="Password" lefticon={<PasswordIcon />} righticon={<EyeIcon />} />
          <CustomInput name="confirmpassword" placeholder="Confirm Password" type="password" label="Confirm Password" lefticon={<PasswordIcon />} righticon={<EyeIcon />} />
          <CustomButton title="Continue" onClick={onclick} />
          <br />
        </form>
      </CustomCard>
    </section>
  )
}
