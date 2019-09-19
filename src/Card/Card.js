import React from 'react';
import PropTypes from 'prop-types';
import styled from 'Button/node_modules/styled-components';
import { colors } from '../../theme';

/**
 * The Card component is served to be multipurpose to support informational
 * text as well Graphs to represent data. The Card is purposed to be flexible,
 * based on the current size of the grid and the contents will be resized/reorganized
 *  to fit on most screens.
 *
 * You may render text only, Graphs, buttons, and even make the entire card a button.
 */

const StyledCardHeader = styled.div`
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.07);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;

const StyledChildren = styled.div`
  padding: 18px 18px 24px;
  text-align: left;
  text-decoration: none;
`;

// TODO useRef to resize the graph based on the size of the Card
function Card(props) {
  const { status, title, children } = props;

  const StyledCard = styled.div`
    color: ${'status' in props ? colors.white : colors.black};
    box-shadow: 0 0 4px rgba(165, 165, 165, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 4px;
    background-color: ${status === 'danger'
      ? colors.danger
      : status === 'error'
      ? colors.error
      : status === 'warning'
      ? colors.warning
      : status === 'stable'
      ? colors.green
      : status === 'success'
      ? colors.success
      : colors.white}};
    &:hover {
      border-color: 'rgba(0, 0, 0, 0.125)';
    }
    & > h3 {
      margin: 0;
      font-size: 18px;
    }
    & > p {
      margin: 0;
      padding: 12px 0;
      font-size: 13px;
    }
  `;

  return (
    <StyledCard>
      {title && <StyledCardHeader>{title}</StyledCardHeader>}
      <StyledChildren>{children}</StyledChildren>
    </StyledCard>
  );
}

Card.propTypes = {
  status: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.element.isRequired
};

Card.defaultProps = {
  status: 'nostatus',
  title: ''
};

export default Card;
