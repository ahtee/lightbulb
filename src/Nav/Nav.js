import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBrand from './NavBrand';
import NavBreadcrumbs from './NavBreadcrumbs';
import { colors } from '../colors';

const StyledNavContainer = styled.div`
  width: 970px;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
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

/**
 * `<Nav />` is the root component that renders `<NavBrand />`, and `<NavBreadcrumbs />`.
 * `Nav` component is to be rendered on all the pages, so it is added into
 * `./pages/index.js` to prevent duplication.
 * `src/Nav/index.js` exports the `<Nav />` component by default to prevent import Duplication.
 */

function Nav(props) {
  const { name, blue, fixed, pages, breadcrumbs } = props;

  const StyledNav = styled.nav`
    min-height: 75px;
    text-align: center;
    background-color: ${blue ? colors.primaryBlue : colors.darkGray};
    color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    ${fixed &&
      `position: fixed;
    width: 100%; 
    top: 0; 
    z-index: 999;
    transition: background-color .6s ease-in;`}
  `;

  const StyledListItem = styled.li`
    margin-left: 20px;
  `;

  return (
    <StyledNav>
      <StyledNavContainer>
        <NavBrand name={name} />
        <ul>
          {pages.map(({ key, href, label }) => (
            <StyledListItem key={key}>
              <a href={href}>{label.toUpperCase()}</a>
            </StyledListItem>
          ))}
        </ul>
      </StyledNavContainer>
      {breadcrumbs && <NavBreadcrumbs breadcrumbs />}
    </StyledNav>
  );
}

Nav.propTypes = {
  blue: PropTypes.bool,
  fixed: PropTypes.bool,
  name: PropTypes.string,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  )
};

Nav.defaultProps = {
  blue: false,
  fixed: false,
  name: 'My Company',
  pages: [],
  breadcrumbs: []
};

export default Nav;
