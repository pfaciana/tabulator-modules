const isType = require('../helpers/isType');
const getKeys = require('es5-util/js/getKeys');
const objectPopup = require('./../popups/object');
const truncate = require('es5-util/js/truncate');
const toHtmlEntities = require('es5-util/js/toHtmlEntities');

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', ['string', 'str'], column, initial);
	if (!type) {
		return column;
	}

	const textLimit = getKeys(column, 'formatterParams.textLimit', false);
	const htmlChars = getKeys(column, 'formatterParams.htmlChars', !!textLimit);
	const showPopup = getKeys(column, 'formatterParams.showPopup', !!textLimit);

	column.headerFilter ??= 'input';

	if (textLimit) {
		column.formatter = function (cell, formatterParams, onRendered) {
			if (cell.getValue() == null) {
				return '';
			}
			const content = truncate(cell.getValue(), textLimit, '...');
			return htmlChars ? toHtmlEntities(content) : content;
		};
		if (showPopup) {
			column.clickPopup = objectPopup;
		}
	} else {
		delete column.formatter;
	}

	return column;
};