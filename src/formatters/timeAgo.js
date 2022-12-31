const getKey = require("es5-util/js/getKey");
const intervals = require('./../helpers/intervals');

module.exports = function (cell, formatterParams, onRendered) {
	if (!cell.getValue() || cell.getValue() <= 1) {
		return '<span title="Invalid Date">-</span>';
	}

	let startTime = getKey(formatterParams, 'startTime', Date.now() / 1000);
	if (typeof startTime === 'function') {
		startTime = startTime();
	}
	const timeAgo = Math.floor(startTime - (cell.getValue() || 0));

	let interval;
	const timeAgoAbs = Math.abs(timeAgo);
	if (timeAgoAbs < 60) {
		interval = 's';
	} else if (timeAgoAbs < 5970) {
		interval = 'm';
	} else if (timeAgoAbs < 86400) {
		interval = 'h';
	} else if (timeAgoAbs < 31536000) {
		interval = 'd';
	} else {
		interval = 'y';
	}

	const dateObject = new Date(startTime - timeAgo * 1000);
	const timeAgoFormatted = Math[getKey(formatterParams, 'round', 'floor')](timeAgo / intervals[interval[0]]) + interval;

	return `<span title="${dateObject.toLocaleString()}">${timeAgoFormatted}</span>`;
};