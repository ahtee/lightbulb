import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../theme';

const StyledBreadcrumb = styled.div`
  background-color: ${colors.offWhite};
  height: 50px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);
  color: ${colors.secondary};
  .breadcrumb-link {
    color: ${colors.primaryBlue};
  }
  ul {
    margin: 0;
  }
`;

function Breadcrumb(props) {
  const { children } = props;
  return <StyledBreadcrumb>{children}</StyledBreadcrumb>;
}

Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired
};

export default Breadcrumb;
