import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';

// TODO useRef to resize the graph based on the size of the Card
function Card(props) {
  const StyledCard = styled.div`
    padding: 18px 18px 24px;
    text-align: left;
    text-decoration: none;
    color: ${props.status ? colors.white : colors.black};
    box-shadow: 0 0 4px rgba(165, 165, 165, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 4px;
    background-color: ${props.status === 'danger'
      ? colors.danger
      : props.status === 'error'
      ? colors.error
      : props.status === 'warning'
      ? colors.warning
      : props.status === 'stable'
      ? colors.green
      : props.status === 'success'
      ? colors.success
      : colors.white}};
    &:hover {
      border-color: ${props.status
        ? `rgba(0, 0, 0, 0.125)`
        : colors.primaryBlue};
    }
    & > h3 {
      margin: 0;
      color: ${props.status ? `#ffffff` : colors.primaryBlue};
      font-size: 18px;
    }
    & > p {
      margin: 0;
      padding: 12px 0;
      font-size: 13px;
      color: ${props.status ? `#ffffff` : colors.darkGray};
    }
  `;

  return (
    <StyledCard>
      <React.Fragment>
        <h3>{props.header}</h3>
        <p>{props.body}</p>
      </React.Fragment>
      {props.children}
    </StyledCard>
  );
}
export default Card;
