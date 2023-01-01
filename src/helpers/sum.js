const getKey = require("es5-util/js/getKey");

function sum(values, data = [], params = {}) {
	let prefix = getKey(params, 'prefix', '');
	let suffix = getKey(params, 'suffix', '');
	let locales = getKey(params, 'locales', undefined);
	let options = getKey(params, 'options', {
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	});

	return prefix + (values.reduce(function (a, b) {
		return a + b;
	}, 0)).toLocaleString(locales, options) + suffix;
}

module.exports = sum;