const compare = require('es5-util/js/compare');

module.exports = function (a, b, aRow, bRow, column, dir, sorterParams) {
	return compare(a, b);
};