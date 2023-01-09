const jsdom = require('jsdom');
global.jQuery = global.$ = require("jquery")((new jsdom.JSDOM('')).window);
global.document = (new jsdom.JSDOM('')).window.document;
const {valuesLookup} = require('../../src/html/list[]');

const field = 'field_name';
const component = data => ({
	getField: () => field,
	getTable: () => ({
		getData: () => data,
	}),
});

const table = [
	[
		['a', 'b', 'c'],
		[
			{field_name: ['a']},
			{field_name: ['b']},
			{field_name: ['c']},
			{field_name: ['a', 'b']},
			{field_name: ['a', 'c']},
			{field_name: ['b', 'c']},
			{field_name: ['a', 'b', 'c']},
		]
	],
	[
		[1, 2, 3],
		[
			{field_name: 3},
			{field_name: [3]},
			{field_name: [2, 1]},
		]
	],
];

test.each(table)(
	'%s valuesLookup(%j)',
	(expected, data) => {
		expect(valuesLookup(component(data))).toStrictEqual(expected);
	},
);