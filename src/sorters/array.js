const getSize = require("../helpers/getSize");

module.exports = function (a, b, aRow, bRow, column, dir, sorterParams) {
	return getSize(a) - getSize(b);
};