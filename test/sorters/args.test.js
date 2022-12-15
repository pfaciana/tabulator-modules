const argsSorter = require('../../src/sorters/args');

const arr1 = ['A', 'B', 'C'],
	arr2 = ['x', 'y', 'z'],
	obj1 = {A: 1, B: 2, C: 3},
	obj2 = {x: 24, y: 25, z: 26};

const table = [
	[-1, arr1, arr2],
	[1, arr2, arr1],
	[0, arr1, arr1],

	[-1, obj1, obj2],
	[1, obj2, obj1],
	[0, obj1, obj1],

	[-1, arr1, obj1],
	[-1, arr1, obj2],
	[-1, arr2, obj1],
	[-1, arr2, obj2],

	[-1, ['a'], {a: 1}],
	[1, ['a'], 'a'],
	[1, {a: 1}, 'a'],
	[-1, 'a', 'b'],
	[-1, '1', 'a'],
	[-1, '-1', 'a'],

	[-99, 1, 100],
	[8, 10, 2],
	[-199.98, -99.99, 99.99],

	[1, '1', true],
	[1, 1, true],
	[-1, '.1', 1.1],
	[-1, 1.1, '2.1'],
	[-1, false, true],
	[-1, undefined, ''],
	[-1, undefined, null],
	[-1, null, false],
	[1, '', null],

	[-1, 'a', {text: 'b'}],
	[1, 'c', {type: 'string', text: 'b'}],
	[-1, {type: 'object', text: 'a'}, {type: 'object', text: 'b'}],
	[1, {type: 'object', text: 'c'}, {type: 'object', text: 'C'}],
	[0, 'WP_Post{72}', {type: 'object', text: 'WP_Post{72}'}],
	[-1, 'object', {type: 'object'}],
	[-1, 'a', {b: 'c'}],
];

test.each(table)(
	'%s argsSorter(%j, %j)',
	(expected, objA, objB) => {
		expect(argsSorter(objA, objB)).toStrictEqual(expected);
	},
);