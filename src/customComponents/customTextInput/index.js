import React from "react";
import { formControl, InputLabel, StyledInput } from "./indexCss";


export default function CustomInput(props) {
const {name ,placeholder,type ,lefticon , righticon,label} = props
    return (
        <>
        <InputLabel>{label}</InputLabel>
        <StyledInput className={"inputWithIcon"}>
         <div className="left-icon">{lefticon}</div>
        <input type={type} name={name} placeholder={placeholder} style={formControl}/>
        <div className="right-icon">{righticon}</div>
        </StyledInput>  
        </>
    )
}
