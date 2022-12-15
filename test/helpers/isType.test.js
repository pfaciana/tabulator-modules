const isType = require('../../src/helpers/isType');

const table = [
	[true, 'value', 'key', 'value', {key: 'value'}],
	[true, 'value', 'key', 'value', {key: 'value'}, {notKey: 'value'}],
	[true, 'value', 'key', 'value', {key: 'value'}, {notKey: 'value'}, {other: 'value'}],
	[true, 'value', 'key', 'value', {other: 'value'}, {notKey: 'value'}, {key: 'value'}],
	[false, false, 'key', 'value', {key: 'c'}],
	[false, false, 'key', 'value', {notKey: 'b'}],
	[false, false, 'key', 'value', {other: 'a'}, {notKey: 'b'}, {key: 'c'}],
	[true, 'value', 'key', ['value'], {key: 'value'}],
	[true, 'a', 'key', ['a', 'b', 'c'], {key: 'a'}, {notKey: 'value'}, {other: 'value'}],
	[true, 'c', 'key', ['a', 'b', 'c'], {other: 'value'}, {notKey: 'value'}, {key: 'c'}],
	[false, false, 'key', ['a', 'b', 'c'], {key: 'value'}, {notKey: 'value'}, {other: 'a'}],
	[false, false, 'key', ['a', 'b', 'c'], {key: 'value'}, {notKey: 'a'}, {other: 'b'}],
];

test.each(table)(
	'%# %s %s isType(%j, %j, ...{})',
	(expectedBool, expected, ...args) => {
		expect(!!isType(...args)).toStrictEqual(expectedBool);
		expect(isType(...args)).toStrictEqual(expected);
	},
);