import React from 'react';
import Accordion from '../../src/Accordion';

export default {
  title: 'Accordion'
};

export const defaultAccordion = () => (
  <>
    <Accordion>
      <div label="Alligator Mississippiensis">
        <p>
          <strong>Common Name:</strong> American Alligator
        </p>
        <p>
          <strong>Distribution:</strong> Texas to North Carolina, US
        </p>
        <p>
          <strong>Endangered Status:</strong> Currently Not Endangered
        </p>
      </div>
      <div label="Alligator Sinensis">
        <p>
          <strong>Common Name:</strong> Chinese Alligator
        </p>
        <p>
          <strong>Distribution:</strong> Eastern China
        </p>
        <p>
          <strong>Endangered Status:</strong> Critically Endangered
        </p>
      </div>
    </Accordion>
  </>
);
