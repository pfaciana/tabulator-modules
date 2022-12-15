const isType = require('../helpers/isType');
const advancedFilter = require('./../filters/advanced');
const filesFormatter = require('./../formatters/files');
const objectSorter = require('./../sorters/object');

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', ['file', 'files'], column, initial);
	if (!type) {
		return column;
	}

	column.headerFilter ??= 'input';

	column.headerFilterFuncParams ??= {strict: false};
	column.headerFilterFunc ??= advancedFilter;

	column.formatter = filesFormatter;

	column.sorter ??= objectSorter;

	return column;
};