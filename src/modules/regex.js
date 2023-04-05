const isType = require('../helpers/isType');

const formatters = ['regex', 'RegExp'];

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', formatters, column, initial);
	if (!type) {
		return column;
	}

	column.headerFilter ??= 'input';

	column.headerFilterFunc ??= function (headerValue, rowValue, rowData, filterParams) {
		return (new RegExp(rowValue)).test(headerValue);
	};

	column.hozAlign ??= 'left';

	column.formatter = column.formatterOutput ?? column.formatter;

	delete column.formatterOutput;

	return column;
};

module.exports.formatter = formatters;