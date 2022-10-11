import styled from "styled-components";
import { ThemeColors } from "../../theme/theme";
export const StyledInput = styled.div`
  &.inputWithIcon {
    position: relative;
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
`;

export const formControl = {
    display: 'block',
    width: '95%',
    padding:' 0.375rem 0.75rem',
    fontSize:' 1rem',
    lineHeight:' 2.4rem',
    backgroundClip: 'padding-box', 
    background:ThemeColors.inputbg,
    textAlign:'center',
    border: 'none',
}
