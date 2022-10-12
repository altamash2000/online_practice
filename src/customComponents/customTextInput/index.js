import React from "react";
import { formControl, formControlOtp, InputLabel, StyledInput } from "./indexCss";


export default function CustomInput(props) {
    const { name, placeholder, type, lefticon, righticon, label } = props
    return (
        label === "OTP" ? <StyledInput className={"inputWithIcon"}>
            <div className="left-icon">{lefticon}</div>
            <input type={type} name={name} style={formControlOtp} />
            <div className="right-icon">{righticon}</div>
        </StyledInput>
            : <><InputLabel>{label}</InputLabel>
                <StyledInput className={"inputWithIcon"}>
                    <div className="left-icon">{lefticon}</div>
                    <input type={type} name={name} placeholder={placeholder} style={formControl} />
                    <div className="right-icon">{righticon}</div>
                </StyledInput>
            </>
    )
}
