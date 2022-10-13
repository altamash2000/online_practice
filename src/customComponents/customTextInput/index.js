import React from "react";
import { formControl, formControlOtp, InputLabel, StyledInput } from "./indexCss";


export default function CustomInput(props, formdata) {
    const { name, placeholder, type, lefticon, righticon, label, id, onChange } = props;
    return (
        label === "OTP" ? <StyledInput className={"inputWithIcon"}>
            <div className="left-icon">{lefticon}</div>
            <input type={type} name={name} style={formControlOtp} />
            <div className="right-icon">{righticon}</div>
        </StyledInput>
            : <><InputLabel>{label}</InputLabel>
                <StyledInput className={"inputWithIcon"}>
                    <div className="left-icon">{lefticon}</div>
                    <input type={type} id={id} onChange={onChange} name={name} placeholder={placeholder} style={formControl} />

                    <div className="right-icon">{righticon}</div>
                </StyledInput>
            </>
    )
}
