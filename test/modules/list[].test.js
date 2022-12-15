const jsdom = require('jsdom');
global.jQuery = global.$ = require("jquery")((new jsdom.JSDOM('')).window);
global.document = (new jsdom.JSDOM('')).window.document;
const isPubSubLoaded = require('jquery-small-pubsub');
const Tabulator = require('../../index');

afterEach(() => {
	$.unsubscribeAll();
});

const data = [
	{a: ['a']},
	{a: ['b']},
	{a: ['c']},
	{a: ['a', 'b']},
	{a: ['a', 'c']},
	{a: ['b', 'c']},
	{a: ['a', 'b', 'c']},
];

test('list[]', () => {

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).toHaveProperty('headerFilter', 'list');
		expect(options.columns[0]).toHaveProperty('headerFilterParams');
		expect(options.columns[0].headerFilterParams).toHaveProperty('valuesLookup');
		expect(options.columns[0]).toHaveProperty('headerFilterFunc');
		expect(options.columns[0]).not.toHaveProperty('formatter');
	});

	Tabulator.Create('#list[]', {
		data,
		columns: [
			{title: 'A', field: 'a', formatter: 'list[]',},
		],
	});
});

test('ignore non-list[]', () => {

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).not.toHaveProperty('headerFilter', 'list');
		expect(options.columns[0]).not.toHaveProperty('headerFilterParams');
		expect(options.columns[0]).not.toHaveProperty('headerFilterFunc');
		expect(options.columns[0]).toHaveProperty('formatter', 'not-list[]');
	});

	Tabulator.Create('#nonlist[]', {
		data,
		columns: [
			{title: 'A', field: 'a', formatter: 'not-list[]',},
		],
	});
});