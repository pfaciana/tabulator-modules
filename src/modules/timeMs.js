const arrayColumn = require("es5-util/js/arrayColumn");
const isType = require('../helpers/isType');
const minMaxDom = require("../html/minMax");
const minMaxFilter = require("../filters/minMax");

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', ['timeMs', 'minTimeMs', 'maxTimeMs'], column, initial);
	if (!type) {
		return column;
	}

	var values = data.length ? arrayColumn(data, column.field) : [];
	column.headerFilterParams ??= {
		min: values.length ? Math.min(...values) : false,
		max: values.length ? Math.max(...values) : false,
		filterMin: ['timeMs', 'minTimeMs'].includes(type),
		filterMax: ['timeMs', 'maxTimeMs'].includes(type),
	};
	column.headerFilter ??= minMaxDom;

	column.headerFilterFunc ??= minMaxFilter;
	column.headerFilterLiveFilter ??= false;

	column.formatter = function (cell, formatterParams, onRendered) {
		return cell.getValue().toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' ms';
	};

	column.hozAlign ??= 'right';

	return column;
};