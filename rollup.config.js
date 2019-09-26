import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import json from 'rollup-plugin-json';
import { uglify } from 'rollup-plugin-uglify';

const NODE_ENV = process.env.NODE_ENV || 'development';
const outputFile =
  NODE_ENV === 'production'
    ? `./dist/lightbulb.${NODE_ENV}.js`
    : `./dist/lightbulb.${NODE_ENV}.js`;

const cjs = {
  input: 'index.js',
  output: [
    {
      file: outputFile,
      format: 'cjs'
    }
  ],
  external: ['react', 'react-dom', 'styled-components', 'styled-system'],
  plugins: [
    resolve({ preferBuiltins: true, mainFields: ['module', 'main'] }),
    json({ exclude: 'node_modules/**' }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    babel({ exclude: 'node_modules/**' }),
    commonjs(),
    uglify()
  ]
};

export default cjs;
