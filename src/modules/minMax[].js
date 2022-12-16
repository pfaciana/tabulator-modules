const arrayColumn = require('es5-util/js/arrayColumn');
const isType = require('../helpers/isType');
const getSize = require('../helpers/getSize');
const arrayFilter = require('./../filters/array');
const arrayFormatter = require('./../formatters/array');
const arraySorter = require('./../sorters/array');
const minMaxDom = require("../html/minMax");

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', ['minMax[]', 'min[]', 'max[]'], column, initial);
	if (!type) {
		return column;
	}

	var values = data.length ? arrayColumn(data, column.field) : [];
	values = values.map(value => getSize(value));
	column.headerFilterParams ??= {
		min: values.length ? Math.min(...values) : false,
		max: values.length ? Math.max(...values) : false,
		filterMin: ['minMax[]', 'min[]'].includes(type),
		filterMax: ['minMax[]', 'max[]'].includes(type),
	};
	column.headerFilter ??= minMaxDom;
	column.headerFilterFunc ??= arrayFilter;
	column.headerFilterLiveFilter ??= false;

	column.formatter = arrayFormatter;

	column.headerSortStartingDir ??= 'desc';
	column.sorter ??= arraySorter;

	return column;
};