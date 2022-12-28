const objectPopup = require('../../src/popups/object');

function cellConstructor(value, formatterParams = {}) {
	return {
		getValue: () => value,
		getColumn: () => ({
			getDefinition: () => ({
				formatterParams,
			})
		}),
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

	[`${p}${s}`, '', {showPopup: true}],
	[null, '', {showPopup: 1}],
	[null, 'abc', {showPopup: 5}],
	[`${p}abcdefghi${s}`, 'abcdefghi', {showPopup: 5}],
	[null, [1, 2], {showPopup: 5}],
	[`${p}[
    1,
    2
]${s}`, [1, 2], {showPopup: 4}],
	[null, [1, 2], {showPopup: 5, popupPrefix: '', popupSuffix: '', space: 0}],
	[`[1,2]`, [1, 2], {showPopup: 4, popupPrefix: '', popupSuffix: '', space: 0}],
	[null, `<a>link</a>`, {showPopup: 11, popupPrefix: '', popupSuffix: '', htmlChars: true}],
	['&lt;a&gt;link&lt;/a&gt;', `<a>link</a>`, {showPopup: 10, popupPrefix: '', popupSuffix: '', htmlChars: true}],

	[null, 'a', {showPopup: /A/}],
	[`${p}a${s}`, 'a', {showPopup: /a/}],
	[`${p}a${s}`, 'a', {showPopup: /A/i}],
	[null, [1, 2], {showPopup: /3/}],
	[`${p}[
    1,
    2
]${s}`, [1, 2], {showPopup: /\n/}],

	[null, 'a', {showPopup: () => false}],
	[`${p}a${s}`, 'a', {showPopup: () => true}],
	[null, false, {showPopup: (content) => !!content}],
	[`${p}true${s}`, true, {showPopup: (content) => !!content}],
	[null, 'a', {showPopup: (content, formatterParams) => formatterParams.someKey, someKey: false}],
	[`${p}a${s}`, 'a', {showPopup: (content, formatterParams) => formatterParams.someKey, someKey: true}],
];

test.each(table)(
	'%# %s objectPopup(%j, %j)',
	(expected, cell, formatterParams = {}) => {
		expect(objectPopup({}, cellConstructor(cell, formatterParams))).toStrictEqual(expected);
	},
);