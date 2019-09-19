'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('../lib/lightbulb.prod.js');
} else {
  module.exports = require('../lib/lightbulb.dev.js');
}
