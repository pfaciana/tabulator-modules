const jsdom = require('jsdom');
global.jQuery = global.$ = require("jquery")((new jsdom.JSDOM('')).window);
global.document = (new jsdom.JSDOM('')).window.document;
const isPubSubLoaded = require('jquery-small-pubsub');
const Tabulator = require('../../index');

afterEach(() => {
	$.unsubscribeAll();
});

test('minMax{}', () => {

	const data = [
		{a: {a: 1, b: 2, c: 3, d: 4, e: 5}},
		{a: {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, k: 10}},
		{a: {a: 1, b: 2}},
		{a: {a: 1, b: 2, c: 3}},
		{a: {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7}},
	];

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).toHaveProperty('headerFilterParams', {
			min: 2, max: 10, filterMin: true, filterMax: true,
		});
		expect(options.columns[0]).toHaveProperty('headerFilter');
		expect(options.columns[0]).toHaveProperty('headerFilterFunc');
		expect(options.columns[0]).toHaveProperty('headerFilterLiveFilter', false);
		expect(options.columns[0]).toHaveProperty('headerSortStartingDir', 'desc');
		expect(options.columns[0]).toHaveProperty('sorter');
		expect(options.columns[0]).toHaveProperty('formatter');
	});

	Tabulator.Create('#minMax', {
		data,
		columns: [
			{title: 'A', field: 'a', formatter: 'minMax{}',},
		],
	});
});

test('min{}', () => {

	const data = [
		{a: {a: 1, b: 2, c: 3, d: 4, e: 5}},
		{a: {a: 1, b: 2, c: 3}},
		{a: {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7}},
	];

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).toHaveProperty('headerFilterParams', {
			min: 3, max: 7, filterMin: true, filterMax: false,
		});
	});

	Tabulator.Create('#min', {
		data,
		columns: [
			{title: 'A', field: 'a', formatter: 'min{}',},
		],
	});

});

test('max{}', () => {

	const data = [
		{a: {a: 1}},
		{a: {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8}},
		{a: {a: 1, b: 2, c: 3, d: 4}},
	];

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).toHaveProperty('headerFilterParams', {
			min: 1, max: 8, filterMin: false, filterMax: true,
		});
	});

	Tabulator.Create('#max', {
		data,
		columns: [
			{title: 'A', field: 'a', formatter: 'max{}',},
		],
	});

});