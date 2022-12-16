const arraySorter = require('../../src/sorters/array');

const arr1 = ['A', 'B', 'C'],
	arr2 = ['w', 'x', 'y', 'z'],
	obj1 = {A: 1, B: 2, C: 3},
	obj2 = {w: 23, x: 24, y: 25, z: 26};

const table = [
	[-1, arr1, arr2],
	[1, arr2, arr1],
	[0, arr1, arr1],

	[-1, obj1, obj2],
	[1, obj2, obj1],
	[0, obj1, obj1],

	[2, arr1, obj1],
	[2, arr1, obj2],
	[3, arr2, obj1],
	[3, arr2, obj2],

	[-1, '[a]', '{a}'],
	[-1, '[a]', 'a'],
	[1, '{a}', 'a'],
	[-1, 'a', 'b'],
	[-1, '1', 'a'],
	[-1, '-1', 'a'],

	[-99, 1, 100],
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

	[1, [1, 2, 3], ['A', 'B', 'C']], // JSON.stringify make "'" (from string) so ' < 1 instead of 1 < A
	[-1, ['1', '2', '3'], ['A', 'B', 'C']],
	[1, ['abc', 'xyz'], ['abc', 'def']],
];

test.each(table)(
	'%s arraySorter(%j, %j)',
	(expected, objA, objB) => {
		expect(arraySorter(objA, objB)).toStrictEqual(expected);
	},
);