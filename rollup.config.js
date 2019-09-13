import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import bundleSize from 'rollup-plugin-bundle-size';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/lightbulb.bundle.js',
    format: 'cjs'
  },
  external: [
    'react',
    'react-dom',
    'react-router-dom',
    'prop-types',
    'styled-components'
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    bundleSize()
  ]
};
