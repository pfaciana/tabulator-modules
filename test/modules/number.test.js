const jsdom = require('jsdom');
global.jQuery = global.$ = require("jquery")((new jsdom.JSDOM('')).window);
global.document = (new jsdom.JSDOM('')).window.document;
const isPubSubLoaded = require('jquery-small-pubsub');
const Tabulator = require('../../index');

afterEach(() => {
	$.unsubscribeAll();
});

const data = [
	{a: 1},
	{a: 2},
	{a: 3},
	{a: 4},
	{a: 5},
];

test('number', () => {

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).toHaveProperty('headerFilter', 'input');
		expect(options.columns[0]).toHaveProperty('sorter', 'number');
		expect(options.columns[0]).not.toHaveProperty('formatter');
	});

	Tabulator.Create('#number', {
		data,
		columns: [
			{title: 'A', field: 'a', formatter: 'number',},
		],
	});
});

test('ignore non-number', () => {

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).not.toHaveProperty('headerFilter');
		expect(options.columns[0]).not.toHaveProperty('sorter');
		expect(options.columns[0]).toHaveProperty('formatter', 'not-number');
	});

	Tabulator.Create('#nonnumber', {
		data,
		columns: [
			{title: 'A', field: 'a', formatter: 'not-number',},
		],
	});
});