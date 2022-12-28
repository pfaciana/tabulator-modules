const isType = require('../helpers/isType');
const getKeys = require('es5-util/js/getKeys');
const objectPopup = require('./../popups/object');
const formatString = require('./../helpers/formatString');

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', ['string', 'str'], column, initial);
	if (!type) {
		return column;
	}

	column.formatterParams ??= {};
	column.formatterParams.textLimit ??= false;
	column.formatterParams.htmlChars ??= !!column.formatterParams.textLimit;
	column.formatterParams.showPopup ??= column.formatterParams.textLimit;

	column.headerFilter ??= 'input';

	if (column.formatterParams.textLimit) {
		column.formatter = function (cell, formatterParams, onRendered) {
			return formatString(cell.getValue(), formatterParams);
		};
		if (column.formatterParams.showPopup) {
			column.clickPopup = objectPopup;
		}
	} else {
		delete column.formatter;
	}

	return column;
};