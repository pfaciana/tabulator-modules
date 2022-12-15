const arrayFormatter = require('../../src/formatters/array');

function cellConstructor(value) {
	return {getValue: () => value};
}

const table = [
	[0, undefined],
	[0, null],
	[0, false],
	[1, true],

	[0, 0],
	[1, 1],
	[1, 2],
	[0, 0.0],
	[1, 1.1],
	[1, Infinity],

	[0, '0'],
	[1, '1'],
	[1, '2'],
	[1, '3.4'],
	[0, ''],
	[1, 'abc'],

	[0, []],
	[3, [1, 2, 3]],
	[1, {}],
	[1, {a: 1, b: 2, c: 3}],

];

test.each(table)(
	'%s arrayFormatter(%j, %j)',
	(expected, cell) => {
		expect(arrayFormatter(cellConstructor(cell))).toStrictEqual(expected);
	},
);
