const jsdom = require('jsdom');
global.jQuery = global.$ = require("jquery")((new jsdom.JSDOM('')).window);
global.document = (new jsdom.JSDOM('')).window.document;
const isPubSubLoaded = require('jquery-small-pubsub');
const Tabulator = require('../../index');

afterEach(() => {
	$.unsubscribeAll();
});

test('regex', () => {

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).toHaveProperty('headerFilter', 'input');
		expect(options.columns[0]).toHaveProperty('headerFilterFunc');
		expect(options.columns[0]).toHaveProperty('hozAlign', 'left');
		expect(options.columns[0]).not.toHaveProperty('formatter');
	});

	Tabulator.Create('#regex', {
		data: [{}],
		columns: [
			{title: 'A', field: 'a', formatter: 'regex',},
		],
	});
});

test('ignore non-regex', () => {

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).not.toHaveProperty('headerFilter');
		expect(options.columns[0]).not.toHaveProperty('headerFilterFunc');
		expect(options.columns[0]).toHaveProperty('formatter', 'not-regex');
	});

	Tabulator.Create('#nonregex', {
		data: [{}],
		columns: [
			{title: 'A', field: 'a', formatter: 'not-regex',},
		],
	});
});