const jsdom = require('jsdom');
global.jQuery = global.$ = require("jquery")((new jsdom.JSDOM('')).window);
global.document = (new jsdom.JSDOM('')).window.document;
const {getType} = argsFormatter = require('../../src/formatters/args');

function cellConstructor(value) {
	return {getValue: () => value};
}

const table = [
	[``, undefined],
	[`<span title="(undefined) undefined" data-type="undefined">undefined</span>`, [undefined]],
	[``, null],
	[`<span title="(null) null" data-type="null">null</span>`, [null]],
	[`<span title="(boolean) false" data-type="boolean">false</span>`, false],
	[`<span title="(boolean) true" data-type="boolean">true</span>`, true],

	[`<span title="(integer) 0" data-type="integer">0</span>`, 0],
	[`<span title="(integer) 1" data-type="integer">1</span>`, 1],
	[`<span title="(integer) 2" data-type="integer">2</span>`, 2],
	[`<span title="(integer) 0" data-type="integer">0</span>`, 0.0],
	[`<span title="(float) 1.1" data-type="float">1.1</span>`, 1.1],
	[`<span title="(number) Infinity" data-type="number">Infinity</span>`, Infinity],
	[`<span title="(number) NaN" data-type="number">NaN</span>`, NaN],

	[`<span title="(string) 0" data-type="string">0</span>`, '0'],
	[`<span title="(string) 1" data-type="string">1</span>`, '1'],
	[`<span title="(string) 2" data-type="string">2</span>`, '2'],
	[`<span title="(string) 3.4" data-type="string">3.4</span>`, '3.4'],
	[`<span title="(string) (empty)" data-type="string">(empty)</span>`, ''],
	[`<span title="(string) abc" data-type="string">abc</span>`, 'abc'],
	[`<span title="(string) abcdefghijklmnopqrstuvwxyz" data-type="string">abcdefghijkl...</span>`, 'abcdefghijklmnopqrstuvwxyz', undefined, {textLimit: 12, prefix: '', suffix: ''}],
	[`<span title="(string) abc&quot;def" data-type="string">abc"def</span>`, 'abc"def'],

	[``, []],
	[`<span title="(array) array[0]" data-type="array">array[0]</span>`, [[]]],
	[`<span title="(integer) 1" data-type="integer">1</span>,<span title="(integer) 2" data-type="integer">2</span>,<span title="(integer) 3" data-type="integer">3</span>`, [1, 2, 3]],
	[`<span title="(array) array[3]" data-type="array">array[3]</span>`, [[1, 2, 3]]],
	[`<span title="(object) object{0}" data-type="object">object{0}</span>`, {}],
	[`<span title="(object) object{4}" data-type="object">object{4}</span>`, {a: 1, b: 2, c: 3, 3: 4}],

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

	[`<span title="(string) CONST" data-type="string">CONST</span>`, 'CONST', undefined, {type: 'string', prefix: '', suffix: ''}],
	[`<span title="(boolean) 0" data-type="boolean">0</span>`, 0, undefined, {type: 'boolean', prefix: '', suffix: ''}],
];

test.each(table)(
	'%s argsFormatter(%j, %j)',
	(expected, type, text = undefined, formatterParams = {join: ',', prefix: '', suffix: ''}) => {
		let cell = text === undefined ? type : {type, text};
		expect(argsFormatter(cellConstructor(cell), formatterParams)).toStrictEqual(expected);
	},
);

const associativeArray = [];
associativeArray['a'] = 1;
associativeArray['b'] = 2;
associativeArray['c'] = 3;
associativeArray['3'] = 4;

const Foo = function (x, y, z) {
	this.a = 1;
	this.b = 2;
};

Foo.prototype.c = 3;
Foo.prototype['3'] = 4;

const typeTable = [
	['undefined', undefined, {type: 'undefined', text: 'undefined'}],
	['null', null, {type: 'null', text: 'null'}],
	['false', false, {type: 'boolean', text: 'false'}],
	['true', true, {type: 'boolean', text: 'true'}],
	['empty number', 0, {type: 'integer', text: '0'}],
	['non-empty number', 1, {type: 'integer', text: '1'}],
	['non-empty number 2', 2, {type: 'integer', text: '2'}],
	['negative number', -0, {type: 'integer', text: '0'}],
	['empty float', 0.0, {type: 'integer', text: '0'}],
	['non-empty float', 1.1, {type: 'float', text: '1.1'}],
	['Infinity', Infinity, {type: 'number', text: 'Infinity'}],
	['NaN', NaN, {type: 'number', text: 'NaN'}],
	['empty number string', '0', {type: 'string', text: '0'}],
	['non-empty number string', '1', {type: 'string', text: '1'}],
	['non-empty number string int', '2', {type: 'string', text: '2'}],
	['non-empty number string float', '3.4', {type: 'string', text: '3.4'}],
	['empty string', '', {type: 'string', text: '(empty)'}],
	['non-empty string', 'abc', {type: 'string', text: 'abc'}],
	['empty array', [], {type: 'array', text: 'array[0]'}],
	['non-empty array', [1, 2, 3], {type: 'array', text: 'array[3]'}],
	['associativeArray', associativeArray, {type: 'array', text: 'array[4]'}],
	['empty object', {}, {type: 'object', text: 'object{0}'}],
	['non-empty object', {a: 1, b: 2, c: 3}, {type: 'object', text: 'object{3}'}],
	['function', Foo, {type: 'callable', text: 'Function()'}],
	['instance', new Foo, {type: 'object', text: 'object{2}'}],
	['same', '(same)', {type: 'same', text: '(same)'}],
];

test.each(typeTable)(
	'%s getType(%j)',
	(message, input, expected) => {
		expect(getType(input)).toStrictEqual(expected);
	},
);
