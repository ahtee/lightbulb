import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNavBrandText = styled.a`
  padding: 0px 20px 0px 15px;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.5rem;
`;

function NavBrand({ children, brandName }) {
  return (
    <StyledNavBrandText>
      {children}
      {brandName}
    </StyledNavBrandText>
  );
}

NavBrand.propTypes = {
  children: PropTypes.node,
  brandName: PropTypes.string
};

NavBrand.defaultProps = {
  children: <span />,
  brandName: 'My Company'
};

export default NavBrand;
