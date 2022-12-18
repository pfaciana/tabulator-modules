const objectFormatter = require('../../src/formatters/object');

function cellConstructor(value) {
	return {getValue: () => value};
}

const table = [
	['', undefined],
	['', null],
	['false', false],
	['true', true],

	['0', 0],
	['1', 1],
	['2', 2],
	['0', 0.0],
	['1.1', 1.1],
	['Infinity', Infinity],

	['0', '0'],
	['1', '1'],
	['2', '2'],
	['3.4', '3.4'],
	['', ''],
	['abc', 'abc'],

	['', []],
	['1,2,3', [1, 2, 3]],
	[`<div style="white-space: pre">{}</div>`, {}],
	[`<div style="white-space: pre">{"3":4,"a":1,"b":2,"c":3}</div>`, {a: 1, b: 2, c: 3, 3: 4}],
	[`<div style="white-space: pre">{
    "3": 4,
    "a": 1,
    "b": 2,
    "c": 3
}</div>`, {a: 1, b: 2, c: 3, 3: 4}, {space: 4}],
	[`<div style="white-space: normal">{"a":1,"b":2,"c":3}</div>`, {a: 1, b: 2, c: 3}, {whiteSpace: 'normal'}],
	[`{"a":1,"b":2,"c":3}`, {a: 1, b: 2, c: 3}, {whiteSpace: false}],

];

test.each(table)(
	'%s objectFormatter(%j, %j)',
	(expected, cell, formatterParams = {join: ','}) => {
		expect(objectFormatter(cellConstructor(cell), formatterParams)).toStrictEqual(expected);
	},
);

const tableByKeys = [
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

	[1, '0'],
	[1, '1'],
	[1, '2'],
	[1, '3.4'],
	[0, ''],
	[1, 'abc'],

	[0, []],
	[3, [1, 2, 3]],
	[0, {}],
	[4, {a: 1, b: 2, c: 3, 3: 4}],
	[3, {a: 1, b: 2, c: 3}],

];

test.each(tableByKeys)(
	'%s objectFormatter.byKeys(%j, %j)',
	(expected, cell, formatterParams = {join: ','}) => {
		expect(objectFormatter.byKeys(cellConstructor(cell), formatterParams)).toStrictEqual(expected);
	},
);
