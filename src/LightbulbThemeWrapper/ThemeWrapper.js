import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/theme';

const ThemeWrapper = props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default ThemeWrapper;
