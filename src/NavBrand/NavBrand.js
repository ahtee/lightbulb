import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNavBrandText = styled.a`
  padding: 0px 20px 0px 15px;
  color: #ffffff;
  text-decoration: none;
  font-size: 22px;
`;

function NavBrand({ brandName }) {
  return (
    <StyledNavBrandText>
      {children}
      {brandName}
    </StyledNavBrandText>
  );
}

NavBrand.propTypes = {
  brandImage: PropTypes.string,
  brandName: PropTypes.string
};

NavBrand.defaultProps = {
  brandName: 'My Company'
};

export default NavBrand;
