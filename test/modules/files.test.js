const jsdom = require('jsdom');
global.jQuery = global.$ = require("jquery")((new jsdom.JSDOM('')).window);
global.document = (new jsdom.JSDOM('')).window.document;
const isPubSubLoaded = require('jquery-small-pubsub');
const Tabulator = require('../../index');

afterEach(() => {
	$.unsubscribeAll();
});

test('files', () => {

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).toHaveProperty('headerFilter', 'input');
		expect(options.columns[0]).toHaveProperty('headerFilterFunc');
		expect(options.columns[0]).toHaveProperty('sorter');
		expect(options.columns[0]).toHaveProperty('formatter');
	});

	Tabulator.Create('#files', {
		data: [{}],
		columns: [
			{title: 'A', field: 'a', formatter: 'files',},
		],
	});
});

test('ignore non-files', () => {

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).not.toHaveProperty('headerFilter', 'input');
		expect(options.columns[0]).not.toHaveProperty('headerFilterFunc');
		expect(options.columns[0]).not.toHaveProperty('sorter');
		expect(options.columns[0]).toHaveProperty('formatter', 'not-files');
	});

	Tabulator.Create('#nonfiles', {
		data: [{}],
		columns: [
			{title: 'A', field: 'a', formatter: 'not-files',},
		],
	});
});