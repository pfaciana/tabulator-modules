const isType = require('../helpers/isType');
const objectSorter = require("../sorters/object");

const formatters = ['list'];

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', formatters, column, initial);
	if (!type) {
		return column;
	}

	column.headerFilter ??= 'list';

	column.headerFilterParams ??= {
		clearable: true,
		sort: 'asc',
		valuesLookup: true,
	};

	column.sorter ??= objectSorter;

	column.formatter = column.formatterOutput ?? column.formatter;

	delete column.formatterOutput;

	return column;
};

module.exports.formatter = formatters;