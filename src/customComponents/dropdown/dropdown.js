import React, { useState } from 'react';
import { formSelect, InputLabel, StyledInput } from '../customTextInput/indexCss';

export default function Dropdown(props) {
    const { option,label,lefticon} = props
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };
    return (
        <>
        <InputLabel>{label}</InputLabel>
        <StyledInput className={"inputWithIcon"}>
        <div className="left-icon">{lefticon}</div>
        <select style={formSelect}>
            {option.map(option => (
                <option onClick={onOptionClicked(option)} value={option} >
                    {option}
                </option>
            ))
            }
        </select>
        </StyledInput>
        </>
        // <DropDownContainer>
        //     <DropDownHeader>
        //         {selectedOption || "Class12"}
        //     </DropDownHeader>

        //     <DropDownListContainer>
        //         <DropDownList>
        //             {option.map(option => (
        //                 <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
        //                     {option}
        //                 </ListItem>
        //             ))}
        //         </DropDownList>
        //     </DropDownListContainer>
        // </DropDownContainer>
    )
}
