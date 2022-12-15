const getSize = require('./../helpers/getSize');
const minMaxFilter = require('./../filters/minMax');

module.exports = function (headerValue, rowValue, ...args) {
	return minMaxFilter(headerValue, getSize(rowValue), ...args);
};