import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ThemeColors } from "../../theme/theme";

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  text-align: center;
  background:${ThemeColors.inputbg};
  border: none;
  border-radius: 5px;
  ::placeholder {
    color: ${ThemeColors.other};
  }
  width:calc(100vw-500px);
  height:calc(100px - 60px);
`;


export default function CustomInput(props) {
const { name ,placeholder,type ,lefticon , righticon} = props
    return (
        <StyledInput className={"inputWithIcon"}>
         <div className="left-icon">{lefticon}</div>
        <Input type={type}  name={name} placeholder={placeholder}/>
        <div className="right-icon">{righticon}</div>
        </StyledInput>
    )
}
const StyledInput = styled.div`
  &.inputWithIcon {
    position: relative;
  }
  .left-icon {
    position: absolute;
    margin-left: 1rem;
    margin-top:2rem;
    transform: translateY(-50%);
  }
 .right-icon {
    position: absolute;
    right: 5px;
    margin-top:-1.9rem;
    transform: translateY(-50%);
  }
`;