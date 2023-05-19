const isType = require('../helpers/isType');

const formatters = ['bool', 'boolean'];

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', [...formatters, 'tickCross'], column, initial);
	if (!type) {
		return column;
	}

	column.formatter = column.formatterOutput ?? 'tickCross';

	delete column.formatterOutput;

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

module.exports.formatter = formatters;