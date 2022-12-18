const objectSorter = require('../../src/sorters/object');

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

	[1, 'array[]', 'array[8]'],
	[-1, 'array[3]', 'assoc_array[5]'],
	[1, 'WP_Post{}', 'WP_Post{72}'],
];

test.each(table)(
	'%s objectSorter(%j, %j)',
	(expected, objA, objB) => {
		expect(objectSorter(objA, objB)).toStrictEqual(expected);
	},
);

const tableByKeys = [
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

	[1, 'array[]', 'array[8]'],
	[-1, 'array[3]', 'assoc_array[5]'],
	[1, 'WP_Post{}', 'WP_Post{72}'],
];

test.each(tableByKeys)(
	'%s objectSorter.byKeys(%j, %j)',
	(expected, objA, objB) => {
		expect(objectSorter.byKeys(objA, objB)).toStrictEqual(expected);
	},
);