import React from 'react';
import styled from 'styled-components';
import NavBrand from './NavBrand';
import NavBreadcrumbs from './NavBreadcrumbs';
import { colors } from '../utils/colors';
import { GELogoSvg } from '../Svg/GELogoSvg';

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

function Nav(props) {
  const { name, links, breadcrumbs } = props;

  const StyledNav = styled.nav`
    min-height: 75px;
    text-align: center;
    background-color: ${props.blue ? colors.primaryBlue : colors.darkGray};
    color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    ${props.fixed &&
      `position: fixed;
    width: 100%; 
    top: 0; 
    z-index: 999;
    transition: background-color .6s ease-in;`}
  `;

  return (
    <StyledNav>
      <StyledNavContainer>
        <NavBrand name={name}>
          <GELogoSvg />
        </NavBrand>
        <ul>
          {links.map(({ key, href, label }) => (
            <li key={key}>
              <a href={href}>{label.toUpperCase()}</a>
            </li>
          ))}
        </ul>
      </StyledNavContainer>
      {breadcrumbs && <NavBreadcrumbs breadcrumbs={breadcrumbs} />}
    </StyledNav>
  );
}

export default Nav;
