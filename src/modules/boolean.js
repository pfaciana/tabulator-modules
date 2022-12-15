const isType = require('../helpers/isType');

module.exports = function (column, data, initial, options, element) {
	if (!isType('formatter', ['bool', 'boolean', 'tickCross'], column, initial)) {
		return column;
	}

	if ('src' in column) {
		column.title = `<img alt="${column.title}" title="${column.title}" src="${column.src}" style="max-width: 100%;" />`;
		delete column.src;
	}

	column.formatter = 'tickCross';

	return {
		...{
			formatterParams: {allowEmpty: true, allowTruthy: true,},
			sorter: 'boolean',
			headerFilter: 'tickCross',
			headerFilterParams: {'tristate': true},
		},
		...column
	};
};