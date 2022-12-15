const jsdom = require('jsdom');
global.jQuery = global.$ = require("jquery")((new jsdom.JSDOM('')).window);
global.document = (new jsdom.JSDOM('')).window.document;
const argsFormatter = require('../../src/formatters/args');

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
	[`{}`, {}],
	[`{"3":4,"a":1,"b":2,"c":3}`, {a: 1, b: 2, c: 3, 3: 4}],

	[`<span title="(undefined) undefined" data-type="undefined">undefined</span>`, 'undefined', 'undefined'],
	[`<span title="(null) null" data-type="null">null</span>`, 'null', null],
	[`<span title="(boolean) false" data-type="boolean">false</span>`, 'boolean', false],
	[`<span title="(boolean) true" data-type="boolean">true</span>`, 'boolean', true],
	[`<span title="(integer) 1234" data-type="integer">1234</span>`, 'integer', 1234],
	[`<span title="(float) 123.45" data-type="float">123.45</span>`, 'float', 123.45],
	[`<span title="(string) some content" data-type="string">some content</span>`, 'string', 'some content'],
	[`<span title="(array) array[3]" data-type="array">array[3]</span>`, 'array', 'array[3]'],
	[`<span title="(array) assoc_array[5]" data-type="array">assoc_array[5]</span>`, 'array', 'assoc_array[5]'],
	[`<span title="(object) WP_Post{72}" data-type="object">WP_Post{72}</span>`, 'object', 'WP_Post{72}'],
	[`<span title="(callable) Closure()" data-type="callable">Closure()</span>`, 'callable', 'Closure()'],
	[`<span title="(callable) Function()" data-type="callable">Function()</span>`, 'callable', 'Function()'],
	[`<span title="(resource) Resource" data-type="resource">Resource</span>`, 'resource', 'Resource'],
	[`<span title="(same) This value did not change" data-type="same">(same)</span>`, {type: 'same'}],

	[`<span title="(string) CONST" data-type="string">CONST</span>`, 'CONST', undefined, {type: 'string', before: '', after: ''}],
	[`<span title="(boolean) 0" data-type="boolean">0</span>`, 0, undefined, {type: 'boolean', before: '', after: ''}],
];

test.each(table)(
	'%s argsFormatter(%j, %j)',
	(expected, type, text = undefined, formatterParams = {join: ',', before: '', after: ''}) => {
		let cell = text === undefined ? type : {type, text};
		expect(argsFormatter(cellConstructor(cell), formatterParams)).toStrictEqual(expected);
	},
);
