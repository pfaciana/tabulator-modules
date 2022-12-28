const arrayColumn = require("es5-util/js/arrayColumn");
const getKeys = require('es5-util/js/getKeys');
const isType = require('../helpers/isType');
const minMaxDom = require("../html/minMax");
const minMaxFilter = require("../filters/minMax");

module.exports = function (column, data, initial, options, element) {
	// `timeMs*` to be deprecated in future versions, use `duration*` instead
	var type = isType('formatter', ['duration', 'minDuration', 'maxDuration', 'timeMs', 'minTimeMs', 'maxTimeMs'], column, initial);
	if (!type) {
		return column;
	}

	const unit = getKeys(column, 'formatterParams.unit', 'ms');
	const prefix = getKeys(column, 'formatterParams.prefix', '');
	const suffix = getKeys(column, 'formatterParams.suffix', ' ' + unit);
	const precision = getKeys(column, 'formatterParams.precision', 2);
	const bottomSum = getKeys(column, 'formatterParams.bottomSum', false);

	var values = data.length ? arrayColumn(data, column.field) : [];
	column.headerFilterParams ??= {
		min: values.length ? Math.min(...values) : false,
		max: values.length ? Math.max(...values) : false,
		filterMin: ['duration', 'minDuration', 'timeMs', 'minTimeMs'].includes(type),
		filterMax: ['duration', 'maxDuration', 'timeMs', 'maxTimeMs'].includes(type),
	};
	column.headerFilter ??= minMaxDom;

	column.headerFilterFunc ??= minMaxFilter;
	column.headerFilterLiveFilter ??= false;

	column.formatter = function (cell, formatterParams, onRendered) {
		return prefix + cell.getValue().toLocaleString(undefined, {
			minimumFractionDigits: precision,
			maximumFractionDigits: precision,
		}) + suffix;
	};

	if (bottomSum) {
		column.bottomCalc ??= function (values, data) {
			return prefix + Math.round(values.reduce(function (a, b) {
				return a + b;
			}, 0)) + suffix;
		};
	}

	column.hozAlign ??= 'right';

	return column;
};