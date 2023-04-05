const isType = require('../helpers/isType');
const urlsFormatter = require('./../formatters/urls');

const formatters = ['url', 'urls'];

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', formatters, column, initial);
	if (!type) {
		return column;
	}

	column.headerFilter ??= 'input';

	column.hozAlign ??= 'left';

	column.formatter = column.formatterOutput ?? urlsFormatter;

	delete column.formatterOutput;

	return column;
};

module.exports.formatter = formatters;