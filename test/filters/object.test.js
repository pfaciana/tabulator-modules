const objectFilter = require('../../src/filters/object');

const table = [
	[true, {start: '', end: ''}, {}],
	[true, {start: '', end: ''}, {a: 1, b: 2, c: 3, d: 4, e: 5}],
	[true, {start: '1', end: '10'}, {a: 1, b: 2, c: 3, d: 4, e: 5}],
	[true, {start: '', end: '10'}, {a: 1, b: 2, c: 3, d: 4, e: 5}],
	[true, {start: '1', end: ''}, {a: 1, b: 2, c: 3, d: 4, e: 5}],
	[false, {start: '1', end: '10'}, {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, k: 10, l: 11}],
	[false, {start: '', end: '10'}, {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, k: 10, l: 11}],
	[false, {start: '10', end: '1'}, {a: 1, b: 2, c: 3, d: 4, e: 5}],

	[true, {start: '', end: ''}, {}],
	[true, {start: '', end: ''}, {a: 1, b: 2, c: 3, d: 4, e: 5}],
	[true, {start: '', end: ''}, ''],
	[true, {start: '', end: ''}, null],
	[true, {start: '', end: ''}, undefined],

	[true, {start: '', end: '10'}, {}],
	[true, {start: '', end: '10'}, ''],
	[true, {start: '', end: '10'}, null],
	[true, {start: '', end: '10'}, undefined],

	[false, {start: '1', end: '10'}, {}],
	[false, {start: '1', end: '10'}, ''],
	[false, {start: '1', end: '10'}, null],
	[false, {start: '1', end: '10'}, undefined],
	[false, {start: '2', end: '10'}, 'some string'],
	[true, {start: '1', end: '10'}, 'some string'],
];

test.each(table)(
	'%s objectFilter(%j, %j)',
	(expected, headerValue, rowValue) => {
		expect(objectFilter(headerValue, rowValue)).toStrictEqual(expected);
	},
);