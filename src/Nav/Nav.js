import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBrand from '../NavBrand';
import Breadcrumb from '../Breadcrumb';
import { colors } from '../../theme';

const StyledNavContainer = styled.div`
  width: 970px;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  & > ul {
    display: flex;
    justify-content: flex-end;
    padding: 0px 10px;
  }
  & > ul > li {
    display: flex;
  }
  & > ul > li > a {
    color: #fff;
    font-size: 16px;
    text-decoration: none;
  }
`;

const StyledListItem = styled.li`
  margin-left: 20px;
`;

/**
 * `<Nav />` is the root component that renders `<NavBrand />`, and `<NavBreadcrumbs />`.
 * `Nav` component is to be rendered on all the pages, so it is added into
 * `./pages/index.js` to prevent duplication.
 * `src/Nav/index.js` exports the `<Nav />` component by default to prevent import Duplication.
 */

function Nav(props) {
  const { children, breadcrumbs } = props;

  const StyledNav = styled.nav`
    min-height: 75px;
    text-align: center;
    background-color: ${'blue' in props ? colors.primaryBlue : colors.darkGray};
    color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    ${'fixed' in props &&
      `position: fixed;
    width: 100%; 
    top: 0; 
    z-index: 999;
    transition: background-color .6s ease-in;`}
  `;

  return (
    <StyledNav>
      <StyledNavContainer>{children}</StyledNavContainer>
    </StyledNav>
  );
}

Nav.propTypes = {
  children: PropTypes.node.isRequired,
  breadcrumbs: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.number.isRequired,
        href: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })
    )
  ])
};

Nav.defaultProps = {
  brandName: 'My Company',
  breadcrumbs: []
};

export default Nav;
