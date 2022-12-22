const objectPopup = require('../../src/popups/object');

function cellConstructor(value) {
	return {
		getValue: () => value,
		getColumn: () => ({getDefinition: () => ({})}),
	};
}

const p = '<div style="white-space: pre; max-width: 50vw; max-height: 50vh">';
const s = '</div>';

const table = [
	[null, undefined],
	[null, null],
	[`${p}false${s}`, false],
	[`${p}true${s}`, true],

	[`${p}0${s}`, 0],
	[`${p}1${s}`, 1],
	[`${p}2${s}`, 2],
	[`${p}0${s}`, 0.0],
	[`${p}1.1${s}`, 1.1],
	[`${p}Infinity${s}`, Infinity],

	[`${p}0${s}`, '0'],
	[`${p}1${s}`, '1'],
	[`${p}2${s}`, '2'],
	[`${p}3.4${s}`, '3.4'],
	[`${p}${s}`, ''],
	[`${p}abc${s}`, 'abc'],

	[`${p}[]${s}`, []],
	[`${p}[
    1,
    2,
    3
]${s}`, [1, 2, 3]],
	[`${p}{}${s}`, {}],
	[`${p}{
    "3": 4,
    "a": 1,
    "b": 2,
    "c": 3
}${s}`, {a: 1, b: 2, c: 3, 3: 4}],
];

test.each(table)(
	'%s objectPopup(%j, %j)',
	(expected, cell) => {
		expect(objectPopup({}, cellConstructor(cell))).toStrictEqual(expected);
	},
);