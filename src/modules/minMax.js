const arrayColumn = require('es5-util/js/arrayColumn');
const isType = require('../helpers/isType');
const minMaxDom = require('../html/minMax');
const minMaxFilter = require('../filters/minMax');

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', ['minMax', 'min', 'max'], column, initial);
	if (!type) {
		return column;
	}

	var values = data.length ? arrayColumn(data, column.field) : [];
	column.headerFilterParams ??= {
		min: values.length ? Math.min(...values) : false,
		max: values.length ? Math.max(...values) : false,
		filterMin: ['minMax', 'min'].includes(type),
		filterMax: ['minMax', 'max'].includes(type),
	};
	column.headerFilter ??= minMaxDom;

	column.headerFilterFunc ??= minMaxFilter;
	column.headerFilterLiveFilter ??= false;

	delete column.formatter;

	return column;
};