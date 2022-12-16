const getSize = require("../helpers/getSize");
const objectSorter = require("./../sorters/object");

module.exports = function (a, b, aRow, bRow, column, dir, sorterParams) {
	const sizeDiff = getSize(a) - getSize(b);

	if (sizeDiff) {
		return sizeDiff;
	}

	return objectSorter(...arguments);
};