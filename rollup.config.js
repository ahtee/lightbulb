import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import bundleSize from 'rollup-plugin-bundle-size';
import typescript from 'rollup-plugin-typescript';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/lightbulb.js',
    format: 'cjs'
  },
  external: [
    'prop-types',
    '@types/react',
    'react',
    '@types/react-dom',
    'react-dom',
    'react-router-dom',
    '@types/styled-components',
    'styled-components',
    'styled-theming'
  ],
  plugins: [
    typescript(),
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    bundleSize()
  ]
};
