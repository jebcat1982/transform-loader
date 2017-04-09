/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
const loader = require('./index.js');
module.exports = function (input) {
  this.cacheable && this.cacheable();
  return loader.call(this, input);
};
