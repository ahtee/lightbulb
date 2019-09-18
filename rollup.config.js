import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';

import pkg from './package.json';

const globals = {
  'prop-types': 'PropTypes',
  react: 'React',
  'react-dom': 'ReactDOM',
  'react-router-dom': 'ReactRouterDOM',
  'styled-components': 'styled',
  'styled-theming': 'theme'
};

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      name: 'lightbulb'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: Object.keys(globals),
  plugins: [
    peerDepsExternal(),
    postcss({ modules: true, plugins: [autoprefixer] }),
    babel({ exclude: 'node_modules/**' }),
    resolve(),
    commonjs(),
    filesize(),
    json({ exclude: 'node_modules/**' })
  ]
};
