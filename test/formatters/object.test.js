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
