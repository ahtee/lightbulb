import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import bundleSize from 'rollup-plugin-bundle-size';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/lightbulb.js',
    format: 'cjs'
  },
  external: [
    'prop-types',
    'react',
    'react-dom',
    'react-router-dom',
    'styled-components',
    'styled-theming'
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    bundleSize()
  ]
};
