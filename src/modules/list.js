const isType = require('../helpers/isType');

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', ['list'], column, initial);
	if (!type) {
		return column;
	}

	column.headerFilter ??= 'list';

	column.headerFilterParams ??= {
		clearable: true,
		sort: 'asc',
		valuesLookup: true,
	};

	delete column.formatter;

	return column;
};