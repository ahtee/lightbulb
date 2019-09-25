import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function AccordionSelection(props) {
  const { children, isOpen, label, onClick } = props;

  const toggleSelection = () => {
    onClick(label);
  };

  const AccordionSelectionCard = styled.div`
    positon: relative;
    background: ${isOpen ? '#fae042' : '#6db65b'};
    border: '1px solid #008f68';
    padding: '5px 10px';
  `;

  const AccordionSelectionCardLabel = styled.div`
    cursor: pointer;
  `;

  return (
    <AccordionSelectionCard>
      <AccordionSelectionCardLabel onClick={toggleSelection}>
        {label}
        <div style={{ float: 'right' }}>
          {!isOpen && <span>&#9650;</span>}
          {isOpen && <span>&#9660;</span>}
        </div>
      </AccordionSelectionCardLabel>
      {isOpen && (
        <div
          style={{
            background: '#6db65b',
            border: '2px solid #008f68',
            marginTop: 10,
            padding: '10px 20px'
          }}
        >
          {children}
        </div>
      )}
    </AccordionSelectionCard>
  );
}
export default AccordionSelection;

AccordionSelection.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
