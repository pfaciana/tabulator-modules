const arrayColumn = require('es5-util/js/arrayColumn');
const isType = require('../helpers/isType');
const objectFilter = require('./../filters/object');
const objectFormatter = require('./../formatters/object');
const objectSorter = require('./../sorters/object');
const minMaxDom = require("../html/minMax");

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', ['minMax{}', 'min{}', 'max{}'], column, initial);
	if (!type) {
		return column;
	}

	var values = data.length ? arrayColumn(data, column.field) : {};
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

	column.formatter = objectFormatter;

	column.headerSortStartingDir ??= 'desc';
	column.sorter ??= objectSorter;

	return column;
};