import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AlertButtonStyles = styled.button`
  color: inherit;
  background-color: inherit;
  border: none;
  font-size: 1.5rem;
  margin: 0 10px;
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.25rem 0.5rem;
  outline: none;
  cursor: pointer;
`;

function Alert(props) {
  const AlertStyles = styled.div`
    position: relative;
    width: 100%;
    padding: 0.75rem 1.25rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    display: block;
    background-color: ${'primary' in props
      ? '#cce5ff'
      : 'secondary' in props
      ? '#e2e3e5'
      : 'success' in props
      ? '#d4edda'
      : 'danger' in props
      ? '#f8d7da'
      : 'warning' in props
      ? '#fff3cd'
      : 'info' in props
      ? '#d1ecf1'
      : 'dark' in props
      ? '#d6d8d9'
      : '#cce5ff'};
    border-color: ${'primary' in props
      ? '#b8daff'
      : 'secondary' in props
      ? '#d6d8db'
      : 'success' in props
      ? '#c3e6cb'
      : 'danger' in props
      ? '#f5c6cb'
      : 'warning' in props
      ? '#ffeeba'
      : 'info' in props
      ? '#bee5eb'
      : 'dark' in props
      ? '#c6c8ca'
      : '#b8daff'};
    color: ${'primary' in props
      ? '#004085'
      : 'secondary' in props
      ? '#383d41'
      : 'success' in props
      ? '#155724'
      : 'danger' in props
      ? '#721c24'
      : 'warning' in props
      ? '#856404'
      : 'info' in props
      ? '#0c5460'
      : 'dark' in props
      ? '#1b1e21'
      : '#004085'};
  `;

  const { alertMessage, isDismissable, children } = props;
  const [showAlert, setShowAlert] = useState(true);

  const AlertMessage = () => (
    <AlertStyles showAlert={showAlert} setShowAlert={setShowAlert}>
      {children || alertMessage}
      {isDismissable && (
        <AlertButtonStyles
          type="button"
          aria-label="Close"
          onClick={() => setShowAlert(!showAlert)}
        >
          <span>x</span>
        </AlertButtonStyles>
      )}
    </AlertStyles>
  );

  return showAlert && <AlertMessage />;
}
export default Alert;

Alert.propTypes = {
  alertMessage: PropTypes.string,
  isDismissable: PropTypes.bool,
  children: PropTypes.node
};

Alert.defaultProps = {
  alertMessage: 'Alert message!',
  isDismissable: false,
  children: 'Alert message'
};
