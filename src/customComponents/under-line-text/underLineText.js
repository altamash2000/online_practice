import React from 'react'
import styled from 'styled-components'
import { ThemeColors } from '../../theme/theme'

export default function UnderLineText({ text, subText }) {
    const P = styled.p`
        color: ${ThemeColors.primary};
        display: inline-block;
        position: relative;
        font-family: IBM Plex Sans;
        font-size: 2.5rem;
        &:after {
            content: "";
            height: 2px;
            width: 20%;
            background:  ${ThemeColors.primary};
            position: absolute;
            left: calc(0%);
            bottom: -5px;
        }
        `;
    return (
        <>
            <P >{text}</P>
            <p>{subText}</p>
        </>
    )
}
