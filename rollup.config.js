const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/lightbulb.bundle.js',
    format: 'cjs'
  },
  external: ['react', 'react-dom', 'prop-types'],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
