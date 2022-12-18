const isObject = require('es5-util/js/isObject');
const compare = require('es5-util/js/compare');

module.exports = function (a, b, aRow, bRow, column, dir, sorterParams) {
	return compare(a, b);
};

module.exports.byKeys = function (a, b, aRow, bRow, column, dir, sorterParams) {
	var aSize = isObject(a) ? Object.keys(a).length : (+!!a);
	var bSize = isObject(b) ? Object.keys(b).length : (+!!b);
	const sizeDiff = aSize - bSize;

	if (sizeDiff) {
		return sizeDiff;
	}

	return compare(a, b);
};