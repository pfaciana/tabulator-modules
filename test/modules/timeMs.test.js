const jsdom = require('jsdom');
global.jQuery = global.$ = require("jquery")((new jsdom.JSDOM('')).window);
global.document = (new jsdom.JSDOM('')).window.document;
const isPubSubLoaded = require('jquery-small-pubsub');
const Tabulator = require('../../index');

afterEach(() => {
	$.unsubscribeAll();
});

test('timeMs', () => {

	const data = [
		{a: 5},
		{a: 10},
		{a: 2},
		{a: 3},
		{a: 7},
	];

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).toHaveProperty('headerFilterParams', {
			min: 2, max: 10, filterMin: true, filterMax: true,
		});
		expect(options.columns[0]).toHaveProperty('headerFilter');
		expect(options.columns[0]).toHaveProperty('headerFilterFunc');
		expect(options.columns[0]).toHaveProperty('headerFilterLiveFilter', false);
		expect(options.columns[0]).toHaveProperty('hozAlign', 'right');
		expect(options.columns[0]).toHaveProperty('formatter');
	});

	Tabulator.Create('#timeMs', {
		data,
		columns: [
			{title: 'A', field: 'a', formatter: 'timeMs',},
		],
	});
});

test('minTimeMs', () => {

	const data = [
		{a: 5},
		{a: 3},
		{a: 7},
	];

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).toHaveProperty('headerFilterParams', {
			min: 3, max: 7, filterMin: true, filterMax: false,
		});
	});

	Tabulator.Create('#min', {
		data,
		columns: [
			{title: 'A', field: 'a', formatter: 'minTimeMs',},
		],
	});

});

test('maxTimeMs', () => {

	const data = [
		{a: 1},
		{a: 8},
		{a: 4},
	];

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).toHaveProperty('headerFilterParams', {
			min: 1, max: 8, filterMin: false, filterMax: true,
		});
	});

	Tabulator.Create('#max', {
		data,
		columns: [
			{title: 'A', field: 'a', formatter: 'maxTimeMs',},
		],
	});

});

test('duration', () => {

	const data = [
		{a: 5},
		{a: 10},
		{a: 2},
		{a: 3},
		{a: 7},
	];

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).toHaveProperty('headerFilterParams', {
			min: 2, max: 10, filterMin: true, filterMax: true,
		});
		expect(options.columns[0]).toHaveProperty('headerFilter');
		expect(options.columns[0]).toHaveProperty('headerFilterFunc');
		expect(options.columns[0]).toHaveProperty('headerFilterLiveFilter', false);
		expect(options.columns[0]).toHaveProperty('hozAlign', 'right');
		expect(options.columns[0]).toHaveProperty('formatter');
	});

	Tabulator.Create('#duration', {
		data,
		columns: [
			{title: 'A', field: 'a', formatter: 'duration', formatterParams: {bottomSum: true}},
		],
	});
});