import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AccordionSelection from './AccordionSelection';

const PanelGroup = styled.div`
  display: block;
  border: 2px solid #008f68;
`;

function Accordion(props) {
  const { children, allowMultipleOpen } = props;
  const [openSections, setOpenSections] = useState({});

  const toggleOpen = label => {
    const isOpen = !!openSections[label];
    if (allowMultipleOpen) {
      setOpenSections({
        openSections: {
          ...openSections,
          [label]: !isOpen
        }
      });
    }
    setOpenSections({ label: !isOpen });
  };

  return (
    <PanelGroup>
      {children.map(child => (
        <AccordionSelection
          isOpen={!!openSections[child.props.label]}
          label={child.props.label}
          onClick={toggleOpen}
        >
          {child.props.children}
        </AccordionSelection>
      ))}
    </PanelGroup>
  );
}
export default Accordion;

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  allowMultipleOpen: PropTypes.bool
};

Accordion.defaultProps = {
  allowMultipleOpen: false
};
