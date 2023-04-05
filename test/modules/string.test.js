const jsdom = require('jsdom');
global.jQuery = global.$ = require("jquery")((new jsdom.JSDOM('')).window);
global.document = (new jsdom.JSDOM('')).window.document;
const isPubSubLoaded = require('jquery-small-pubsub');
const Tabulator = require('../../index');

afterEach(() => {
	$.unsubscribeAll();
});

const data = [
	{a: 'a'},
	{a: 'b'},
	{a: 'c'},
	{a: 'd'},
	{a: 'e'},
];

test('string', () => {

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).toHaveProperty('headerFilter', 'input');
		expect(options.columns[0]).toHaveProperty('formatter');
	});

	Tabulator.Create('#string', {
		data,
		columns: [
			{title: 'A', field: 'a', formatter: 'string',},
		],
	});
});

test('ignore non-string', () => {

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).not.toHaveProperty('headerFilter');
		expect(options.columns[0]).toHaveProperty('formatter', 'not-string');
	});

	Tabulator.Create('#nonstring', {
		data,
		columns: [
			{title: 'A', field: 'a', formatter: 'not-string',},
		],
	});
});

test('string truncate', () => {

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).toHaveProperty('headerFilter', 'input');
		expect(options.columns[0]).toHaveProperty('formatter');
		expect(options.columns[0]).toHaveProperty('clickPopup');
	});

	Tabulator.Create('#string', {
		data,
		columns: [
			{title: 'A', field: 'a', formatter: 'string', formatterParams: {textLimit: 25},},
		],
	});
});

test('text', () => {

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).toHaveProperty('headerFilter', 'input');
		expect(options.columns[0]).toHaveProperty('headerFilterFunc');
		expect(options.columns[0]).toHaveProperty('hozAlign', 'left');
		expect(options.columns[0]).toHaveProperty('formatter');
	});

	Tabulator.Create('#text', {
		data,
		columns: [
			{title: 'A', field: 'a', formatter: 'text',},
		],
	});
});