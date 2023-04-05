const isType = require('../helpers/isType');
const minMaxDom = require("../html/minMax");
const timeAgoFilter = require("../filters/timeAgo");
const timeAgoFormatter = require("../formatters/timeAgo");

const formatters = ['timeAgo', 'minTimeAgo', 'maxTimeAgo'];

module.exports = function (column, data, initial, options, element) {
	var type = isType('formatter', formatters, column, initial);
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
	column.formatter = column.formatterOutput ?? timeAgoFormatter;

	delete column.formatterOutput;

	return column;
};

module.exports.formatter = formatters;