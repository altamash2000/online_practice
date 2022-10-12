import styled from "styled-components";
import { ThemeColors } from "../../theme/theme";
export const StyledInput = styled.div`
  &.inputWithIcon {
    position: relative;
    margin:10px 0 10px 0;
  }
  .left-icon {
    position: absolute;
    margin-left: 1rem;
    margin-top:1.6rem;
    transform: translateY(-50%);
  }
 .right-icon {
    position: absolute;
    right: 10px;
    margin-top:-1.3rem;
    transform: translateY(-50%);
  }
`;
export const InputLabel = styled.label`
  color: ${ThemeColors.other};
  margin-bottom: 4rem;
  font-family:medium;
`;

export const Button = styled.button`
background-color:  transparent;
border: none;
border-radius: 5px;
color: white;
padding: 15px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 20px;
font-family:SemiBold;
margin: 4px 2px;
cursor: pointer;
`

export const formControl = {
  display: 'block',
  width: '95%',
  padding: ' 0.375rem 0.75rem',
  fontSize: ' 1rem',
  lineHeight: ' 2.4rem',
  backgroundClip: 'padding-box',
  background: ThemeColors.inputbg,
  textAlign: 'center',
  border: 'none',
}
export const formSelect = {
  display: 'block',
  width: '100%',
  fontSize: '1rem',
  background: ThemeColors.inputbg,
  textAlign: 'center',
  border: 'none',
  paddingTop: '0.9rem',
  paddingBottom: '0.9rem',
  paddingLeft: '1rem',

  // display: 'block',
  // width: '95%',
  // padding:'0.375rem 2.25rem 0.375rem 0.75rem',
  // fontSize:' 1rem',
  // lineHeight:' 2.4rem',
  // backgroundClip: 'padding-box', 
  // background:ThemeColors.inputbg,
  // textAlign:'center',
  // border: 'none',
  // appearance: 'none',
}
