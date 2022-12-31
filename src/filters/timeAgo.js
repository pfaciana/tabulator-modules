const minMaxFilter = require('./../filters/minMax');
const getKey = require("es5-util/js/getKey");
const intervals = require('./../helpers/intervals');

module.exports = function (headerValue, rowValue, rowData, filterParams) {
	if ((headerValue.start !== '' || headerValue.end !== '') && rowValue == null) {
		return false;
	}

	let startTime = getKey(filterParams, 'startTime', Date.now() / 1000);
	if (typeof startTime === 'function') {
		startTime = startTime();
	}
	const timeAgo = Math.floor(startTime - rowValue);
	rowValue = timeAgo / getKey(intervals, getKey(filterParams, 'searchBy', 'm')[0], intervals.m);

	return minMaxFilter(headerValue, rowValue, rowData, filterParams);
};