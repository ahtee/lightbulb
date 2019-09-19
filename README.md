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

Import the specific component blocks you need:

```jsx
import React from 'react';
import { Button, Card } from '@generalelectric/lightbulb';

function App() {
  return (
    <div className="App">
      <Card status="success" title="Success">
        <Button>Learn React</Button>
      </Card>
    </div>
  );
}
export default App;
```

## Applying the theme

Optionally, you can apply a light, dark or toggle between themes by adding a `<ThemeProvider />` component wrapper in your App entry point.

```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const App = props => (
  <ThemeProvider theme={theme}>{/* application elements */}</ThemeProvider>
)

export default App
```