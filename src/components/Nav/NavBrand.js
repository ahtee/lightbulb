import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavBrandImage = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  font-size: 22px;
  margin: 0px 15px;
`;

const StyledNavBrandText = styled(Link)`
  padding: 0px 20px 0px 10px;
  color: #ffffff;
  text-decoration: none;
`;

function NavBrand({ name, children }) {
  return (
    <StyledNavBrandImage>
      {children}
      <StyledNavBrandText to="/">{name}</StyledNavBrandText>
    </StyledNavBrandImage>
  );
}
export default NavBrand;
