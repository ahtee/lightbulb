import { configure, addParameters, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { themes } from '@storybook/theming';
import { checkA11y } from '@storybook/addon-a11y';

addDecorator(centered);
addDecorator(checkA11y);

setDefaults({
  inline: false,
  header: true,
  source: true
});

setOptions({
  name: 'Lightbulb React',
  url: 'https://github.com/ahtee/lightbulb',
  showAddonPanel: true,
  addonPanelInRight: true
});

addParameters({
  options: {
    theme: themes.light
  }
});

// automatically import all files ending in *.stories.js
configure(require.context('./stories', true, /\.stories\.js$/), module);
