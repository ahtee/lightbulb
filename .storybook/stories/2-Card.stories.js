import React from 'react';
import Card from '../../src/Card';

export default {
  title: 'Card'
};

export const defaultCard = () => <Card title="No Status" />;

export const successCard = () => <Card status="success" title="Success" />;

export const warningCard = () => <Card status="warning" title="Warning" />;

export const errorCard = () => <Card status="error" title="Error" />;
