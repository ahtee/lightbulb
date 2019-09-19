'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/lightbulb.production.js');
} else {
  module.exports = require('../dist/lightbulb.development.js');
}
