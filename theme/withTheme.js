import React from 'react';
import { ThemeProvider } from 'styled-components';

const withTheme = (Component, theme) => props => (
  <ThemeProvider theme={theme}>
    <Component {...props} />
  </ThemeProvider>
);

export default withTheme;
