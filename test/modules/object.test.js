const jsdom = require('jsdom');
global.jQuery = global.$ = require("jquery")((new jsdom.JSDOM('')).window);
global.document = (new jsdom.JSDOM('')).window.document;
const isPubSubLoaded = require('jquery-small-pubsub');
const Tabulator = require('../../index');

afterEach(() => {
	$.unsubscribeAll();
});

test('object', () => {

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).toHaveProperty('headerFilter', 'input');
		expect(options.columns[0]).toHaveProperty('headerFilterFunc');
		expect(options.columns[0]).toHaveProperty('sorter');
		expect(options.columns[0]).toHaveProperty('formatter');
		expect(options.columns[0]).toHaveProperty('hozAlign', 'left');
	});

	Tabulator.Create('#object', {
		data: [{}],
		columns: [
			{title: 'A', field: 'a', formatter: 'object',},
		],
	});
});

test('ignore non-object', () => {

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).not.toHaveProperty('headerFilter', 'input');
		expect(options.columns[0]).not.toHaveProperty('headerFilterFunc');
		expect(options.columns[0]).not.toHaveProperty('sorter');
		expect(options.columns[0]).toHaveProperty('formatter', 'not-object');
	});

	Tabulator.Create('#nonObject', {
		data: [{}],
		columns: [
			{title: 'A', field: 'a', formatter: 'not-object',},
		],
	});
});

test('object showKeys', () => {

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).toHaveProperty('headerFilter', 'input');
		expect(options.columns[0]).toHaveProperty('headerFilterFunc');
		expect(options.columns[0]).toHaveProperty('headerFilterLiveFilter', true);
		expect(options.columns[0]).toHaveProperty('headerSortStartingDir', 'desc');
		expect(options.columns[0]).toHaveProperty('sorter');
		expect(options.columns[0]).toHaveProperty('formatter');
		expect(options.columns[0]).toHaveProperty('clickPopup');
	});

	Tabulator.Create('#object', {
		data: [{}],
		columns: [
			{title: 'A', field: 'a', formatter: 'object', formatterParams: {showKeys: true}},
		],
	});
});

test('object showKeys noPopup', () => {

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).toHaveProperty('headerFilter', 'input');
		expect(options.columns[0]).toHaveProperty('headerFilterFunc');
		expect(options.columns[0]).toHaveProperty('headerFilterLiveFilter', true);
		expect(options.columns[0]).toHaveProperty('headerSortStartingDir', 'desc');
		expect(options.columns[0]).toHaveProperty('sorter');
		expect(options.columns[0]).toHaveProperty('formatter');
		expect(options.columns[0]).not.toHaveProperty('clickPopup');
	});

	Tabulator.Create('#object', {
		data: [{}],
		columns: [
			{title: 'A', field: 'a', formatter: 'object', formatterParams: {showKeys: true, showPopup: false}},
		],
	});
});