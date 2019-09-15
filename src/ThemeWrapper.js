import React from 'react';
import { ThemeProvider } from 'styled-components';

// import theme from 'where/your/theme/lives';

// 0.1.0 DRAFT.
// TODO: Set up GE theming for light, dark, and alt themes.
// add theme={theme} in the ThemeProvider below
//
// remove this from package and provide instructions for adding the theme to the root app.

function ThemeWrapper(props) {
  return (
    <ThemeProvider theme={{ mode: 'light' }}>{props.children}</ThemeProvider>
  );
}
export default ThemeWrapper;
