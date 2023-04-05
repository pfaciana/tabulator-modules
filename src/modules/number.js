const isType = require('../helpers/isType');

const formatters = ['number', 'num', 'int', 'integer'];

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', formatters, column, initial);
	if (!type) {
		return column;
	}

	column.headerFilter ??= 'number';

	column.sorter ??= 'number';

	column.formatter = column.formatterOutput ?? column.formatter;

	delete column.formatterOutput;

	return column;
};

module.exports.formatter = formatters;