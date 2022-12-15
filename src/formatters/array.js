const getSize = require("../helpers/getSize");

module.exports = function (cell, formatterParams, onRendered) {
	return getSize(cell.getValue());
};