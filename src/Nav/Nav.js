import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../theme';

const StyledNavContainer = styled.div`
  width: 970px;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: ${colors.blue};
`;

/**
 * `<Nav />` is the root component that renders `<NavBrand />`, and `<NavBreadcrumbs />`.
 * `Nav` component is to be rendered on all the pages, so it is added into
 * `./pages/index.js` to prevent duplication.
 * `src/Nav/index.js` exports the `<Nav />` component by default to prevent import Duplication.
 */

function Nav(props) {
  const { children } = props;

  const StyledNav = styled.nav`
    min-height: 75px;
    text-align: center;
    background-color: ${'blue' in props
      ? colors.primaryBlue
      : 'black' in props
      ? colors.black
      : colors.darkGray};
    color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    ${'fixed' in props &&
      `position: fixed;
    width: 100%; 
    top: 0; 
    z-index: 999;`};
  `;

  return (
    <StyledNav>
      <StyledNavContainer>{children}</StyledNavContainer>
    </StyledNav>
  );
}

Nav.propTypes = {
  children: PropTypes.node
};

Nav.defaultProps = {
  children: <span />
};

export default Nav;
