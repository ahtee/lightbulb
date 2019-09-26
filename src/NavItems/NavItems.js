import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../theme/colors';

const LI = styled.li`
  margin: 0px 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
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
          <StyledLink to={item.href}>{item.title}</StyledLink>
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
