const isType = require('../helpers/isType');
const urlsFormatter = require('./../formatters/urls');

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', ['url', 'urls'], column, initial);
	if (!type) {
		return column;
	}

	column.headerFilter ??= 'input';

	column.formatter = urlsFormatter;

	column.hozAlign ??= 'left';

	return column;
};