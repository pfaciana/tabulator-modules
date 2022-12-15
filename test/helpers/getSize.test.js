const getSize = require('../../src/helpers/getSize');

const table = [
	['undefined', undefined, 0],
	['null', null, 0],
	['false', false, 0],
	['true', true, 1],
	['empty number', 0, 0],
	['non-empty number', 1, 1],
	['non-empty number 2', 2, 1],
	['negative number', -0, 0],
	['empty float', 0.0, 0],
	['non-empty float', 1.1, 1],
	['Infinity', Infinity, 1],
	['empty number string', '0', 0],
	['non-empty number string', '1', 1],
	['non-empty number string int', ' 2 ', 1],
	['non-empty number string float', ' 3.4 ', 1],
	['empty string', '', 0],
	['non-empty string', 'abc', 1],
	['empty array', [], 0],
	['non-empty array', [1, 2, 3], 3],
	['empty object', {}, 1],
	['non-empty object', {a: 1, b: 2, c: 3}, 1],
];

test.each(table)(
	'%s %s getSize(%j, %j, ...{})',
	(message, value, expected) => {
		expect(getSize(value)).toStrictEqual(expected);
	},
);