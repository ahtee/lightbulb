import React from 'react';
import Footer from '../../src/Footer';

export default {
  title: 'Footer'
};

export const defaultFooter = () => <Footer />;

export const footerWithProps = () => (
  <Footer company="My Company" license="MIT License" />
);
