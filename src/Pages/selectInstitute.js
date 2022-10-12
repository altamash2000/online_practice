import React from 'react'
import { cardBodyinner, cardinner } from '../auth/login/logincss'
import CustomButton from '../customComponents/button/customButton'
import CustomInput from '../customComponents/customTextInput'
import UnderLineText from '../customComponents/under-line-text/underLineText'

const onclick=()=>{

}
const SelectInstitute = () => {
  return (
    <section>
      <UnderLineText text='Institute Selection' subText='When an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
      <div style={cardinner}>
        <div style={cardBodyinner}>
          <form>
            <CustomInput name="Email" placeholder="Email Address" type="email" label="Email Address" lefticon={<MailIcon />}  />
            <CustomInput name="Other" placeholder="Type Here" type="text" label="Other" lefticon={<PasswordIcon />} righticon={<EyeIcon />} />
          
            <CustomButton title="Continue" onClick={onclick} />

          </form>
        </div>
      </div>
    </section>
  )
}

export default SelectInstitute
