const isType = require('../helpers/isType');

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', ['number', 'num', 'int', 'integer'], column, initial);
	if (!type) {
		return column;
	}

	column.headerFilter ??= 'input';

	column.sorter ??= 'number';

	delete column.formatter;

	return column;
};