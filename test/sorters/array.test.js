const arraySorter = require('../../src/sorters/array');

const arr1 = ['A', 'B', 'C'],
	arr2 = ['w', 'x', 'y', 'z'],
	obj1 = {A: 1, B: 2, C: 3},
	obj2 = {w: 23, x: 24, y: 25, z: 26};

const table = [
	[-1, arr1, arr2],
	[1, arr2, arr1],
	[0, arr1, arr1],

	[0, obj1, obj2],
	[0, obj2, obj1],
	[0, obj1, obj1],

	[2, arr1, obj1],
	[2, arr1, obj2],
	[3, arr2, obj1],
	[3, arr2, obj2],

	[0, '[a]', '{a}'],
	[0, '[a]', 'a'],
	[0, '{a}', 'a'],
	[0, 'a', 'b'],
	[0, '1', 'a'],
	[0, '-1', 'a'],

	[0, 1, 100],
	[0, -99.99, 99.99],

	[0, '1', true],
	[0, 1, true],
	[0, '.1', 1.1],
	[0, 1.1, '2.1'],
	[-1, false, true],
	[0, undefined, ''],
	[0, undefined, null],
	[0, null, false],
	[0, '', null],
];

test.each(table)(
	'%s arraySorter(%j, %j)',
	(expected, objA, objB) => {
		expect(arraySorter(objA, objB)).toStrictEqual(expected);
	},
);