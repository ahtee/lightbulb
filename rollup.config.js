import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel');

import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';

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
    postcss({
        plugins: [
          postcssModules({
            getJSON (id, exportTokens) {
              cssExportMap[id] = exportTokens;
            }
          })
        ],
        getExportNamed: false,
        getExport (id) {
          return cssExportMap[id];
        },
        extract: 'dist/styles.css',
      }),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
  ]
};
