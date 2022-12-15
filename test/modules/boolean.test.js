const jsdom = require('jsdom');
global.jQuery = global.$ = require("jquery")((new jsdom.JSDOM('')).window);
const isPubSubLoaded = require('jquery-small-pubsub');
const Tabulator = require('../../index');

test('test', () => {

	$.subscribe('tabulator-table-created', function (table, element, options) {
		expect(options.columns[0]).toHaveProperty('formatter', 'tickCross');
		expect(options.columns[1]).not.toHaveProperty('formatter');
	});

	Tabulator.Create("#someID", {
		data: [{}],
		columns: [
			{title: 'A', field: 'a', formatter: 'boolean',},
			{title: 'B', field: 'b',},
		],
	});

});