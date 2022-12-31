const getKey = require("es5-util/js/getKey");

function sum(values, data = [], params = {}) {
	let prefix = getKey(params, 'prefix', '');
	let suffix = getKey(params, 'suffix', '');

	return prefix + Math.round(values.reduce(function (a, b) {
		return a + b;
	}, 0)) + suffix;
}

module.exports = sum;