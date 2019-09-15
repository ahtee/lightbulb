import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';

/**
 * Button Component based on ge.com. Colors included: `white`, `blue`, and `outline` (transparent but Blue border and font color).
 * It is recommended to not use more than one of these, as it may introduce render bugs (while this is still in development stage).
 *
 * By default, the button is GE Blue with white text.
 */

function Button(props) {
  const StyledButton = styled.button`
    background-color: ${'outline' in props
      ? 'transparent'
      : 'white' in props
      ? colors.white
      : colors.primaryBlue};
    color: ${'outline' in props
      ? colors.primaryBlue
      : 'white' in props
      ? colors.primaryBlue
      : colors.white};
    border: ${'outline' in props ? `2px solid ${colors.primaryBlue}` : 'none'};
    border-radius: 50px;
    letter-spacing: 1px;
    max-height: 40px;
    display: inline-block;
    font-size: 14px;
    outline: none;
    padding: 9px 45px;
    margin: 10px 0px;

    &:hover {
      background-color: ${colors.lightBlue};
      border-color: ${colors.lightBlue};
      color: ${colors.white};
      cursor: pointer;
    }
  `;

  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
}
export default Button;
