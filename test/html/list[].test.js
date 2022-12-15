const jsdom = require('jsdom');
global.jQuery = global.$ = require("jquery")((new jsdom.JSDOM('')).window);
global.document = (new jsdom.JSDOM('')).window.document;
const {valuesLookup} = require('../../src/html/list[]');

const cell = value => ({
	getValue: () => value
});
const component = data => ({
	getColumn: () => ({
		getCells: () => data.map(value => cell(value)),
	}),
});

const table = [
	[
		['a', 'b', 'c'],
		[
			['a'],
			['b'],
			['c'],
			['a', 'b'],
			['a', 'c'],
			['b', 'c'],
			['a', 'b', 'c'],
		]
	],
	[
		[1, 2, 3],
		[
			3,
			[3],
			[2, 1],
		]
	],
];

test.each(table)(
	'%s valuesLookup(%j)',
	(expected, data) => {
		expect(valuesLookup(component(data))).toStrictEqual(expected);
	},
);