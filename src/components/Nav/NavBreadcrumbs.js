import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledBreadcrumb = styled.div`
  background-color: #f8f8f8;
  height: 50px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);
  color: #3a4851;
  .breadcrumb-link {
    color: #005eb8;
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
    color: #fff;
    font-size: 16px;
    text-decoration: none;
  }
`;

function NavBreadcrumbs({ breadcrumbs = [] }) {
  return (
    <StyledBreadcrumb>
      <div className="container">
        <ul>
          {breadcrumbs.map(breadcrumb => (
            <li>
              <Link to={breadcrumb.link} className="breadcrumb-link">
                {breadcrumb}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{``}</style>
    </StyledBreadcrumb>
  );
}
export default NavBreadcrumbs;
