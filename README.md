# :bulb: Bulb - A GE React component library

Bulb is a component library built in React that serves as a reusable component library for modern user interfaces.

## Publishing to Github package repository

Step 1: Add the following to `package.json`:

```json
"publishConfig": {
    "registry": "https://npm.pkg.github.com/@generalelectric"
  }
```

Step 2: Authenticate

```sh
$ npm login --registry=https://npm.pkg.github.com/
```

Step 3: Publish package

```sh
$ npm publish
```

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
