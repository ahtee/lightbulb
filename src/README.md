# Components

Welcome to the Components section! We are glad you are here to possibly help us! :smile: All components here are written in React `16.9.0` or later. If you are interested in learning React, check the official [React documentation site](https://reactjs.org/docs/getting-started.html)!

## React component rules

- Only use `function` declared components. Refrain from creating Arrow function components whenever possible. Lookup **Variable hoisting** in JavaScript to learn more.
- `function` declared components **must** use Hooks.
- `class` components are highly discouraged
- Only push code that does not have errors in it. T
  - Treat branches as if each are of production quality.
- Each high level component will need it's own folder. Any child components **must** inherit the name of all the parents. This is called tightly-coupled component naming. [(See Vuejs component guide: Tightly coupled component names)](https://vuejs.org/v2/style-guide/#Tightly-coupled-component-names-strongly-recommended)

## Style Guide

This project follows the [GE Style Guide](https://github.com/GeneralElectric/javascript) which closely resembles the Airbnb Style Guide.

Airbnb style guide is enforced with ESlint.

- Download the `ESLint` extenion in **VSCode** to automatically format to this style guide.
- Download the `Pretter` extension in VSCode

## React DevTools

You may download the React DevTools extension for Chromium-based browsers and Firefox at the following links:

- [Chromium](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) (Google Chrome, Microsoft Edge Beta, Brave) **Highly recommended**
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

## SVGs

All SVG's must be a component and added to `Svg.js`. Add your `function` SVG component and be sure to `export` the component to use.
