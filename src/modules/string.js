const isType = require('../helpers/isType');
const objectPopup = require('./../popups/object');
const formatString = require('./../helpers/formatString');
const advancedFilter = require("../filters/advanced");

const formatters = ['string', 'str', 'text'];

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', [...formatters, 'html'], column, initial);
	if (!type) {
		return column;
	}

	column.formatterParams ??= {};
	column.formatterParams.textLimit ??= false;
	column.formatterParams.htmlChars ??= (type === 'html');
	column.formatterParams.showPopup ??= column.formatterParams.textLimit;

	column.headerFilter ??= 'input';

	if (column.formatterParams.textLimit) {
		column.formatter = column.formatterOutput ?? function (cell, formatterParams, onRendered) {
			return formatString(cell.getValue(), formatterParams);
		};
		if (column.formatterParams.showPopup) {
			column.clickPopup = objectPopup;
		}
	} else {
		column.formatter = column.formatterOutput ?? column.formatter;
	}

	delete column.formatterOutput;

	if (['text', 'html'].includes(type)) {
		column.hozAlign ??= 'left';
		column.headerFilterFunc ??= advancedFilter;
	}

	return column;
};

module.exports.formatter = formatters;