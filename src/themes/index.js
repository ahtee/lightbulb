import theme from 'styled-theming';
import { themeColors } from '../utils/colors';

export const backgroundColor = theme('mode', {
  light: themeColors.light.background,
  dark: themeColors.dark.background
});

export const textColor = theme('mode', {
  light: themeColors.light.text,
  dark: themeColors.dark.text
});
