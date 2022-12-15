const isType = require('../helpers/isType');
const argsFilter = require('./../filters/args');
const argsFormatter = require('./../formatters/args');
const argsSorter = require('./../sorters/args');

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', ['args', 'argument', 'arguments', 'params', 'parameter', 'parameters'], column, initial);
	if (!type) {
		return column;
	}

	column.headerFilter ??= 'input';
	column.headerFilterFunc ??= argsFilter;

	column.formatter = argsFormatter;

	column.sorter ??= argsSorter;

	column.hozAlign ??= 'left';

	return column;
};