const isType = require('../helpers/isType');
const advancedFilter = require('./../filters/advanced');
const filesFormatter = require('./../formatters/files');
const objectSorter = require('./../sorters/object');

const formatters = ['file', 'files'];

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', formatters, column, initial);
	if (!type) {
		return column;
	}

	column.headerFilter ??= 'input';

	column.headerFilterFuncParams ??= {strict: false};
	column.headerFilterFunc ??= advancedFilter;

	column.formatter = column.formatterOutput ?? filesFormatter;

	delete column.formatterOutput;

	column.sorter ??= objectSorter;

	return column;
};

module.exports.formatter = formatters;