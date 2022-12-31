const isType = require('../helpers/isType');

module.exports = function (column, data, initial, options, element) {
	if (!isType('formatter', ['bool', 'boolean', 'tickCross'], column, initial)) {
		return column;
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