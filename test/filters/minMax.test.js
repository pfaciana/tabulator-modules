const minMaxFilter = require('../../src/filters/minMax');

const table = [
	[true, {start: '', end: ''}, 0],
	[true, {start: '', end: ''}, 5],
	[true, {start: '1', end: '10'}, 5],
	[true, {start: '', end: '10'}, 5],
	[true, {start: '1', end: ''}, 5],
	[false, {start: '1', end: '10'}, 50],
	[false, {start: '', end: '10'}, 50],
	[false, {start: '10', end: '1'}, 5],

	[true, {start: '', end: ''}, 0],
	[true, {start: '', end: ''}, 5],
	[true, {start: '', end: ''}, ''],
	[true, {start: '', end: ''}, null],
	[true, {start: '', end: ''}, undefined],

	[true, {start: '', end: '10'}, 0],
	[true, {start: '', end: '10'}, ''],
	[false, {start: '', end: '10'}, null],
	[false, {start: '', end: '10'}, undefined],

	[false, {start: '1', end: '10'}, 0],
	[false, {start: '1', end: '10'}, ''],
	[false, {start: '1', end: '10'}, null],
	[false, {start: '1', end: '10'}, undefined],
	[false, {start: '1', end: '10'}, 'some string'],
];

test.each(table)(
	'%s minMaxFilter(%j, %j)',
	(expected, headerValue, rowValue) => {
		expect(minMaxFilter(headerValue, rowValue)).toStrictEqual(expected);
	},
);