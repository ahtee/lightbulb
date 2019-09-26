import { configure, addParameters, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';
import { themes } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(centered);
addDecorator(withA11y);

withInfo({
  inline: true,
  header: true,
  source: true
});

withOptions({
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
