const isObject = require('es5-util/js/isObject');
const advancedFilter = require('./../filters/advanced');
const safeStringify = require('es5-util/js/safeStringify');

module.exports = function (headerValue, rowValueObj, ...args) {
	var rowValue = isObject(rowValueObj) && 'text' in rowValueObj ? rowValueObj.text : rowValueObj;
	return advancedFilter(headerValue, safeStringify(rowValue), ...args);
};