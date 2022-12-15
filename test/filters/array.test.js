const arrayFilter = require('../../src/filters/array');

const table = [
	[true, {start: '', end: ''}, new Array(0)],
	[true, {start: '', end: ''}, new Array(5)],
	[true, {start: '1', end: '10'}, new Array(5)],
	[true, {start: '', end: '10'}, new Array(5)],
	[true, {start: '1', end: ''}, new Array(5)],
	[false, {start: '1', end: '10'}, new Array(50)],
	[false, {start: '', end: '10'}, new Array(50)],
	[false, {start: '10', end: '1'}, new Array(5)],

	[true, {start: '', end: ''}, new Array(0)],
	[true, {start: '', end: ''}, new Array(5)],
	[true, {start: '', end: ''}, ''],
	[true, {start: '', end: ''}, null],
	[true, {start: '', end: ''}, undefined],

	[true, {start: '', end: '10'}, new Array(0)],
	[true, {start: '', end: '10'}, ''],
	[true, {start: '', end: '10'}, null],
	[true, {start: '', end: '10'}, undefined],

	[false, {start: '1', end: '10'}, new Array(0)],
	[false, {start: '1', end: '10'}, ''],
	[false, {start: '1', end: '10'}, null],
	[false, {start: '1', end: '10'}, undefined],
	[false, {start: '2', end: '10'}, 'some string'],
	[true, {start: '1', end: '10'}, 'some string'],
];

test.each(table)(
	'%s arrayFilter(%j, %j)',
	(expected, headerValue, rowValue) => {
		expect(arrayFilter(headerValue, rowValue)).toStrictEqual(expected);
	},
);