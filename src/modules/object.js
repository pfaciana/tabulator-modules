const isType = require('../helpers/isType');
const advancedFilter = require('./../filters/advanced');
const objectFormatter = require('./../formatters/object');
const objectSorter = require('./../sorters/object');

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', ['object', 'obj', 'compound'], column, initial);
	if (!type) {
		return column;
	}

	column.headerFilter ??= 'input';

	column.headerFilterFuncParams ??= {strict: false};
	column.headerFilterFunc ??= advancedFilter;

	column.formatter = objectFormatter;

	column.sorter ??= objectSorter;

	column.hozAlign ??= 'left';

	return column;
};