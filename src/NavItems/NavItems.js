import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../theme/colors';

const LI = styled.li`
  margin: 0px 20px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.white};

  .activeStyledLink {
    display: inline block;
    border-bottom: 15px solid white;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    bottom: 0;
    content: '';
    left: 35%;
    position: absolute;
    width: 0;
  }
`;

function NavItems(props) {
  const { items } = props;
  const UL = styled.ul`
    margin-left: ${'right' in props && `auto`};
    display: flex;
    flex-direction: row;
    list-style-type: none;
    font-size: 1.1rem;
  `;
  return (
    <UL>
      {items.map(item => (
        <LI key={item.id}>
          <StyledLink to={item.href} activeClassName="activeStyledLink">
            {item.title}
          </StyledLink>
        </LI>
      ))}
    </UL>
  );
}
export default NavItems;

NavItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      href: PropTypes.string,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};
