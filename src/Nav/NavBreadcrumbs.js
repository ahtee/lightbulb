import React from 'react';
import PropTypes from 'prop-types';
import styled from 'Footer/node_modules/Card/node_modules/Button/node_modules/styled-components';
import { colors } from '../../theme';

const StyledBreadcrumb = styled.div`
  background-color: ${colors.offWhite};
  height: 50px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);
  color: ${colors.secondary};
  .breadcrumb-link {
    color: ${colors.primaryBlue};
  }
  div > ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  li {
    list-style-type: none;
    margin-left: 10px;
  }
  li:after {
    content: '>';
    margin-left: 10px;
  }
  a {
    color: ${colors.white};
    font-size: 16px;
    text-decoration: none;
  }
`;

function NavBreadcrumbs({ breadcrumbs }) {
  return (
    <StyledBreadcrumb>
      <div className="container">
        <ul>
          {breadcrumbs.map(breadcrumb => (
            <li>
              <a href={breadcrumb.href} className="breadcrumb-link">
                {breadcrumb.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style jsx />
    </StyledBreadcrumb>
  );
}

NavBreadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  )
};

NavBreadcrumbs.defaultProps = {
  breadcrumbs: []
};

export default NavBreadcrumbs;
