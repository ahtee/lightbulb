import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../theme';

/**
 * Button Component based on ge.com. Colors included: `white`, `blue`, and `outline`
 * (transparent but Blue border and font color).
 * It is recommended to not use more than one of these, as it may introduce
 * render bugs (while this is still in development stage).
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

    :hover {
      background-color: ${colors.lightBlue};
      border-color: ${colors.lightBlue};
      color: ${colors.white};
      cursor: pointer;
    }
  `;
  const { onClick, children } = props;
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

Button.propTypes = {
  /** The function that will be executed each time you click the button. */
  onClick: PropTypes.func,
  /** The name of the button. In \<Button>Click Me!\<Button>, children is _Click Me!_ */
  children: PropTypes.string
};

Button.defaultProps = {
  onClick: () => {},
  children: 'Button'
};

export default Button;
