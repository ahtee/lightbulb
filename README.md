# :bulb: Lightbulb - React component library

Bulb is a component library built in React that serves as a reusable component library for modern user interfaces.

## Installation :construction:

### NPM

```sh
npm install --save @generalelectric/lightbulb
```

### Yarn 📦 :cat2:

```sh
yarn add @generalelectric/lightbulb
```

## Components

### Button

```js
import { Button } from '@generalelectric/lightbulb';
```

### Card

```js
import { Card } from '@generalelectric/lightbulb';
```

### Footer

```js
import { Nav } from '@generalelectric/lightbulb';
```

## Applying the theme

Apply a light, dark or toggle between themes by adding a `<ThemeProvider />` component wrapper in your App entry point.

```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const App = props => (
  <ThemeProvider theme={theme}>{/* application elements */}</ThemeProvider>
)

export default App
```