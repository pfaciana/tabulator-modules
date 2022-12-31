const jsdom = require('jsdom');
global.jQuery = global.$ = require("jquery")((new jsdom.JSDOM('')).window);
global.document = (new jsdom.JSDOM('')).window.document;
const timeAgoFormatter = require('../../src/formatters/timeAgo');

function cellConstructor(value) {
	return {getValue: () => value};
}

const now = Date.now() / 1000;
const currentTime = Math.floor(now);
const minutes = (count) => 60 * count;
const hours = (count) => 3600 * count;
const days = (count) => 86400 * count;
const years = (count) => 31536000 * count;

const table = [
	['-', undefined],
	['-', null],
	['-', false],
	['-', true],
	['-', ''],
	['-', 0],
	['-', -1],
	['-', currentTime - 1e10],
	['-1m', currentTime + 60],
	['1m', currentTime - 100],
	['30m', currentTime - minutes(30)],
	['4h', currentTime - hours(4)],
	['5d', currentTime - days(5)],
	['10y', currentTime - years(10)],
	['60m', currentTime - hours(1)],
	['90m', currentTime - hours(1.5)],
	['99m', currentTime - hours(1.65)],
	['1h', currentTime - hours(1.75)],
	['2h', currentTime - hours(1.75), {startTime: now, round: 'round'}],
	['2h', currentTime - hours(2)],
	['30m', currentTime - minutes(30)],
];

test.each(table)(
	'%s timeAgoFormatter(%j, %j)',
	(expected, cell, formatterParams = {startTime: now}) => {
		expect($(timeAgoFormatter(cellConstructor(cell), formatterParams)).html()).toStrictEqual(expected);
	},
);
