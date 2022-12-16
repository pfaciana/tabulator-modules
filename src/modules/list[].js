const isType = require('../helpers/isType');
const {valuesLookup} = require('./../html/list[]');
const arraySorter = require("../sorters/array");

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', ['list[]'], column, initial);
	if (!type) {
		return column;
	}

	column.headerFilter ??= 'list';

	column.headerFilterParams ??= {
		clearable: true,
		valuesLookup
	};

	column.headerFilterFunc ??= function (headerValue, rowValue, rowData, filterParams = {}) {
		return rowValue.includes(headerValue);
	};

	column.sorter ??= arraySorter;

	delete column.formatter;

	return column;
};