const arrayColumn = require('es5-util/js/arrayColumn');
const getKeys = require("es5-util/js/getKeys");
const isType = require('../helpers/isType');
const objectFilter = require('./../filters/object');
const objectFormatter = require('./../formatters/object');
const objectSorter = require('./../sorters/object');
const minMaxDom = require("../html/minMax");
const objectPopup = require("../popups/object");

const formatters = ['minMax{}', 'min{}', 'max{}'];

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', formatters, column, initial);
	if (!type) {
		return column;
	}

	const showPopup = getKeys(column, 'formatterParams.showPopup', false);

	var values = data.length ? arrayColumn(data, column.field) : [];
	values = values.map(value => value ? Object.keys(value).length : 0);
	column.headerFilterParams ??= {
		min: values.length ? Math.min(...values) : false,
		max: values.length ? Math.max(...values) : false,
		filterMin: ['minMax{}', 'min{}'].includes(type),
		filterMax: ['minMax{}', 'max{}'].includes(type),
	};
	column.headerFilter ??= minMaxDom;
	column.headerFilterFunc ??= objectFilter;
	column.headerFilterLiveFilter ??= false;

	column.formatter = column.formatterOutput ?? objectFormatter.byKeys;

	delete column.formatterOutput;

	column.headerSortStartingDir ??= 'desc';
	column.sorter ??= objectSorter.byKeys;

	if (showPopup) {
		column.clickPopup = objectPopup;
	}

	return column;
};

module.exports.formatter = formatters;