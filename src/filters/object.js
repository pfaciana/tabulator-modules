const isObject = require('es5-util/js/isObject');
const minMaxFilter = require('./../filters/minMax');

module.exports = function (headerValue, rowValue, ...args) {
	var keySize = isObject(rowValue) ? Object.keys(rowValue).length : (+!!rowValue);
	return minMaxFilter(headerValue, keySize, ...args);
};