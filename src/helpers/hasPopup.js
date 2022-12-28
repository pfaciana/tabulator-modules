const isObject = require('es5-util/js/isObject');

module.exports = function (condition, content, params, cell, onRendered, e = {}) {
	if (typeof condition === 'boolean') {
		return condition;
	}

	if (condition instanceof Function) {
		return condition(content, params, cell, onRendered, e);
	}

	if (Object.prototype.toString.call(condition) === '[object RegExp]') {
		return condition.test(content);
	}

	return condition < (isObject(cell.getValue()) ? JSON.stringify(cell.getValue(), null, 0) : cell.getValue()).length;
};