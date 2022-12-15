const isType = require('../helpers/isType');

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', ['regex', 'RegExp'], column, initial);
	if (!type) {
		return column;
	}

	column.headerFilter ??= 'input';

	column.headerFilterFunc ??= function (headerValue, rowValue, rowData, filterParams) {
		return (new RegExp(rowValue)).test(headerValue);
	};

	column.hozAlign ??= 'left';

	delete column.formatter;

	return column;
};