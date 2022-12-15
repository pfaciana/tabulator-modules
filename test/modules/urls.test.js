const jsdom = require('jsdom');
global.jQuery = global.$ = require("jquery")((new jsdom.JSDOM('')).window);
global.document = (new jsdom.JSDOM('')).window.document;
const isPubSubLoaded = require('jquery-small-pubsub');
const Tabulator = require('../../index');

afterEach(() => {
	$.unsubscribeAll();
});

test('urls', () => {

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).toHaveProperty('headerFilter', 'input');
		expect(options.columns[0]).toHaveProperty('formatter');
		expect(options.columns[0]).toHaveProperty('hozAlign', 'left');
	});

	Tabulator.Create('#urls', {
		data: [{}],
		columns: [
			{title: 'A', field: 'a', formatter: 'urls',},
		],
	});
});

test('ignore non-urls', () => {

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).not.toHaveProperty('headerFilter', 'input');
		expect(options.columns[0]).toHaveProperty('formatter', 'not-urls');
	});

	Tabulator.Create('#nonurls', {
		data: [{}],
		columns: [
			{title: 'A', field: 'a', formatter: 'not-urls',},
		],
	});
});