import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../src/Button';

export default {
  title: 'Button'
};

export const defaultButton = () => (
  <Button onClick={action('clicked')}>Default Button</Button>
);

export const outlineButton = () => (
  <Button outline onClick={action('clicked')}>
    Outline Button
  </Button>
);

export const whiteButton = () => (
  <Button white onClick={action('clicked')}>
    White Button
  </Button>
);
