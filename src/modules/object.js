const isType = require('../helpers/isType');
const advancedFilter = require('./../filters/advanced');
const objectFormatter = require('./../formatters/object');
const objectSorter = require('./../sorters/object');
const objectPopup = require('./../popups/object');
const getKeys = require('es5-util/js/getKeys');

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', ['object', 'obj', 'compound'], column, initial);
	if (!type) {
		return column;
	}

	const showKeys = getKeys(column, 'formatterParams.showKeys', false);
	const showPopup = getKeys(column, 'formatterParams.showPopup', getKeys(column, 'formatterParams.textLimit', showKeys));

	column.headerFilter ??= 'input';

	column.headerFilterFuncParams ??= {strict: false};
	column.headerFilterFunc ??= advancedFilter;

	if (showKeys) {
		column.headerFilterLiveFilter ??= true;

		column.formatter = objectFormatter.byKeys;

		column.headerSortStartingDir ??= 'desc';
		column.sorter ??= objectSorter.byKeys;
	} else {
		column.formatter = objectFormatter;

		column.sorter ??= objectSorter;

		column.hozAlign ??= 'left';
	}

	if (showPopup) {
		column.clickPopup = objectPopup;
	}

	return column;
};