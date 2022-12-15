const timeAgoFilter = require('../../src/filters/timeAgo');

const now = Date.now();
const currentTime = Math.floor(now / 1000);
const minutes = (count) => 60 * count;
const hours = (count) => 3600 * count;
const days = (count) => 86400 * count;
const years = (count) => 31536000 * count;

const table = [
	[true, {start: '', end: '500'}, currentTime, {searchBy: 's'}],
	[true, {start: '', end: '5000'}, currentTime, {searchBy: 's'}],
	[false, {start: '500', end: ''}, currentTime, {searchBy: 'second'}],
	[false, {start: '5000', end: ''}, currentTime, {searchBy: 'seconds'}],

	[false, {start: '', end: '500'}, currentTime - hours(1), {searchBy: 's'}],
	[true, {start: '', end: '5000'}, currentTime - hours(1), {searchBy: 's'}],
	[true, {start: '500', end: ''}, currentTime - hours(1), {searchBy: 's'}],
	[false, {start: '5000', end: ''}, currentTime - hours(1), {searchBy: 's'}],

	[true, {start: '1', end: ''}, currentTime - days(2), {searchBy: 'd'}],
	[false, {start: '3', end: ''}, currentTime - days(2), {searchBy: 'd'}],
	[false, {start: '', end: '1'}, currentTime - days(2), {searchBy: 'day'}],
	[true, {start: '', end: '3'}, currentTime - days(2), {searchBy: 'days'}],

	[true, {start: '2', end: ''}, currentTime - years(3), {searchBy: 'y'}],
	[false, {start: '4', end: ''}, currentTime - years(3), {searchBy: 'y'}],
	[false, {start: '', end: '2'}, currentTime - years(3), {searchBy: 'year'}],
	[true, {start: '', end: '4'}, currentTime - years(3), {searchBy: 'years'}],

	[true, {start: '1', end: ''}, currentTime - minutes(30)],
	[false, {start: '100', end: ''}, currentTime - minutes(30)],
	[false, {start: '', end: '1'}, currentTime - minutes(30), {searchBy: 'm'}],
	[true, {start: '', end: '100'}, currentTime - minutes(30), {searchBy: 'minute'}],
	[true, {start: '1', end: '100'}, currentTime - minutes(30), {searchBy: 'minutes'}],
	[false, {start: '1', end: '2'}, currentTime - minutes(30)],
	[false, {start: '99', end: '100'}, currentTime - minutes(30)],

	[true, {start: '', end: '500'}, currentTime + 60, {searchBy: 's'}],
	[false, {start: '0', end: ''}, currentTime + 60, {searchBy: 's'}],
	[true, {start: '-2', end: ''}, currentTime + 90, {startTime: now, searchBy: 'm'}],
	[false, {start: '-1', end: ''}, currentTime + 90, {startTime: now, searchBy: 'm'}],
	[true, {start: '', end: '-1'}, currentTime + 90, {startTime: now, searchBy: 'm'}],
	[false, {start: '', end: '-2'}, currentTime + 90, {startTime: now, searchBy: 'm'}],
];

test.each(table)(
	'%s timeAgoFilter(%j, %j)',
	(expected, headerValue, rowValue, filterParams = {startTime: now}) => {
		expect(timeAgoFilter(headerValue, rowValue, {}, filterParams)).toStrictEqual(expected);
	},
);