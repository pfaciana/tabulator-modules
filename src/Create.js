let filters = [
	require('./modules/regex'),
	require('./modules/timeAgo'),
	require('./modules/timeMs'),
	require('./modules/minMax'),
	require('./modules/minMax{}'),
	require('./modules/minMax[]'),
	require('./modules/list[]'),
	require('./modules/list'),
	require('./modules/args'),
	require('./modules/files'),
	require('./modules/urls'),
	require('./modules/boolean'),
	require('./modules/number'),
	require('./modules/string'),
	require('./modules/object'),
	require('./modules/all'),
];

function Create(element, options) {
	var table, parameters = Object.values(arguments);

	if (typeof jQuery === 'function' && 'publish' in jQuery) {
		options = jQuery.publish('tabulator-table-setup', options, element);
	}

	function updateColumn(column, data) {
		const initial = jQuery.extend(true, {}, column || {});
		if (typeof jQuery === 'function' && 'publish' in jQuery) {
			column = jQuery.publish('tabulator-column-setup', column, data, initial, options, element);
		}
		filters.forEach(function (filter) {
			column = filter(column, data, initial, options, element);
		});
		if (typeof jQuery === 'function' && 'publish' in jQuery) {
			column = jQuery.publish('tabulator-column-setup-after', column, data, initial, options, element);
		}
		return column;
	}

	if ('columns' in options && Array.isArray(options.columns) && options.columns.length && //
		'data' in options && Array.isArray(options.data) && options.data.length) {
		options.columns = options.columns.map(function (column) {
			return updateColumn(column, options.data);
		});
		parameters[1] = options;
		table = new Tabulator(...parameters);
	} else {
		parameters[1] = options;
		table = new Tabulator(...parameters);
		table.on('tableBuilt', function () {
			var data = table.getData();
			jQuery.each(table.columnManager.getColumns(), function (i, column) {
				setTimeout(function () {
					column.updateDefinition(updateColumn(column.getDefinition(), data));
				}, 1);
			});
		});
	}

	if (typeof jQuery === 'function' && 'publish' in jQuery) {
		jQuery.publish('tabulator-table-created', table, ...parameters);
	}

	return table;
}

module.exports = Create;