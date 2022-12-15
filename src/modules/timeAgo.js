const getKey = require('es5-util/js/getKey');
const isType = require('../helpers/isType');
const minMaxDom = require("../html/minMax");
const timeAgoFilter = require("../filters/timeAgo");
const timeAgoFormatter = require("../formatters/timeAgo");

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', ['timeAgo', 'minTimeAgo', 'maxTimeAgo'], column, initial);
	if (!type) {
		return column;
	}

	column.headerFilterParams ??= {
		min: false,
		max: false,
		filterMin: ['timeAgo', 'minTimeAgo'].includes(type),
		filterMax: ['timeAgo', 'maxTimeAgo'].includes(type),
	};
	column.headerFilter ??= minMaxDom;

	column.headerFilterFuncParams ??= {
		searchBy: 'm',
	};
	column.headerFilterFunc ??= timeAgoFilter;
	column.headerFilterLiveFilter ??= false;

	column.formatterParams ??= {};
	column.formatter = timeAgoFormatter;

	return column;
};