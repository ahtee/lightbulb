import React from 'react';
import Card from '../../src/Card';

export default {
  title: 'Card'
};

export const defaultCard = () => (
  <Card title="NoStatus">
    <span>Card content nostatus</span>
  </Card>
);

export const successCard = () => (
  <Card status="success" title="Success">
    <span>Card content success</span>
  </Card>
);

export const warningCard = () => (
  <Card status="warning" title="Warning">
    <span>Card content warning</span>
  </Card>
);

export const errorCard = () => (
  <Card status="error" title="Error">
    <span>Card content error</span>
  </Card>
);
