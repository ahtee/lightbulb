import React from 'react';
import PropTypes from 'prop-types';
import styled from 'Footer/node_modules/Card/node_modules/Button/node_modules/styled-components';

const StyledNavBrandImage = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  font-size: 22px;
  margin: 0px 15px;
`;

const StyledNavBrandText = styled.a`
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

NavBrand.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element.isRequired
};

NavBrand.defaultProps = {
  name: 'My Company'
};

export default NavBrand;
