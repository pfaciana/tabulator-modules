const isType = require('../helpers/isType');

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', ['string', 'str'], column, initial);
	if (!type) {
		return column;
	}

	column.headerFilter ??= 'input';

	delete column.formatter;

	return column;
};