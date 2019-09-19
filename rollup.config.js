import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import json from 'rollup-plugin-json';

const NODE_ENV = process.env.NODE_ENV || 'development';
const outputFile =
  NODE_ENV === 'production'
    ? './lib/lightbulb.prod.js'
    : './lib/lightbulb.dev.js';

export default {
  input: 'src/index.js',
  output: [
    {
      file: outputFile,
      format: 'cjs'
    }
  ],
  external: id => /^react|styled-components/.test(id),
  plugins: [
    json({ exclude: 'node_modules/**' }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    babel({ exclude: 'node_modules/**' }),
    resolve(),
    commonjs()
  ]
};
