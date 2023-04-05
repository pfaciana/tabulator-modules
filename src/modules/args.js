const isType = require('../helpers/isType');
const argsFilter = require('./../filters/args');
const argsFormatter = require('./../formatters/args');
const argsSorter = require('./../sorters/args');

const formatters = ['args', 'argument', 'arguments', 'params', 'parameter', 'parameters'];

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', formatters, column, initial);
	if (!type) {
		return column;
	}

	column.headerFilter ??= 'input';
	column.headerFilterFunc ??= argsFilter;

	column.formatter = column.formatterOutput ?? argsFormatter;

	delete column.formatterOutput;

	column.sorter ??= argsSorter;

	column.hozAlign ??= 'left';

	return column;
};

module.exports.formatter = formatters;