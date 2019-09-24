import React from 'react';
import Alert from '../../src/Alert';

export default {
  title: 'Alert'
};

export const defaultAlert = () => <Alert />;

export const primaryAlert = () => (
  <Alert isDismissable>Sample alert message</Alert>
);

export const secondaryAlert = () => (
  <Alert secondary>
    <b>Secondary</b> alert message
  </Alert>
);

export const successAlert = () => (
  <Alert isDismissable success>
    <b>Success</b> alert message
  </Alert>
);

export const dangerAlert = () => <Alert danger>Sample alert message</Alert>;

export const warningAlert = () => (
  <Alert isDismissable warning>
    Sample alert message
  </Alert>
);

export const infoAlert = () => <Alert info>Sample alert message</Alert>;

export const darkAlert = () => (
  <Alert isDismissable dark>
    Sample alert message
  </Alert>
);
