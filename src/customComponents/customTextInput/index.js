import React from "react";
import { useState } from "react";
import { CrossEyeIcon } from "../../assets/icon/inputIcon";
import { formControl, formControlOtp, InputLabel, StyledInput } from "./indexCss";

export default function CustomInput(props, formdata) {
    const { name, placeholder, type, lefticon, righticon, label, id, onChange ,maxLength,tabIndex ,onKeyUp,onClick} = props;
    const [inputType, setInputType] = useState(false);

    const changeType = () => {
        if (type === 'password') {
            setInputType(!inputType);
        }
    }
    return (
        maxLength === "1" ?
            <StyledInput className={"inputWithIcon"}>
                <div className="left-icon">{lefticon}</div>
                <input type={type} name={name} style={formControlOtp} maxLength={maxLength} tabIndex={tabIndex} onClick={onClick} onKeyUp={onKeyUp} />
                <div className="right-icon">{righticon}</div>
            </StyledInput>
            : <>
                <InputLabel>{label}</InputLabel>
                <StyledInput className={"inputWithIcon"}>
                    <div className="left-icon">{lefticon}</div>
                    <input type={inputType ? 'text' : type} id={id} onChange={onChange} name={name} placeholder={placeholder} style={formControl} />
                    <div className="right-icon" onClick={() => changeType()}>{!inputType ? righticon : <CrossEyeIcon />}</div>
                </StyledInput>
            </>
    )
}
