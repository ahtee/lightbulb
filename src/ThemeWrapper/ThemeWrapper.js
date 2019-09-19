import React from 'react';
import { ThemeProvider } from 'Nav/node_modules/Footer/node_modules/Card/node_modules/Button/node_modules/styled-components';
import theme from '../theme/theme';

const ThemeWrapper = props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default ThemeWrapper;
