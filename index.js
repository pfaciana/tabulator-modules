module.exports = global.Tabulator = global.hasOwnProperty('Tabulator') ? global.Tabulator : function () {
};
module.exports.Create = require('./src/Create');

module.exports.filters = {
	advanced: require('./src/filters/advanced'),
	args: require('./src/filters/args'),
	array: require('./src/filters/array'),
	minMax: require('./src/filters/minMax'),
	object: require('./src/filters/object'),
	regex: require('./src/filters/regex'),
	timeAgo: require('./src/filters/timeAgo'),
};
module.exports.formatters = {
	args: require('./src/formatters/args'),
	array: require('./src/formatters/array'),
	files: require('./src/formatters/files'),
	object: require('./src/formatters/object'),
	timeAgo: require('./src/formatters/timeAgo'),
	urls: require('./src/formatters/urls'),
};
module.exports.sorters = {
	args: require('./src/sorters/args'),
	array: require('./src/sorters/array'),
	object: require('./src/sorters/object'),
};
module.exports.html = {
	lists: require('./src/html/list[]'),
	minMax: require('./src/html/minMax'),
};
module.exports.helpers = {
	advancedSearch: require('./src/helpers/advancedSearch'),
	getSize: require('./src/helpers/getSize'),
	intervals: require('./src/helpers/intervals'),
	isType: require('./src/helpers/isType'),
};
module.exports.modules = {
	all: require('./src/modules/all')({}),
	args: require('./src/modules/args')({formatter: 'args'}),
	boolean: require('./src/modules/boolean')({formatter: 'boolean'}),
	files: require('./src/modules/files')({formatter: 'files'}),
	list: require('./src/modules/list')({formatter: 'list'}),
	"list[]": require('./src/modules/list[]')({formatter: 'list[]'}),
	minMax: require('./src/modules/minMax')({formatter: 'minMax'}, []),
	"minMax[]": require('./src/modules/minMax[]')({formatter: 'minMax[]'}, []),
	"minMax{}": require('./src/modules/minMax{}')({formatter: 'minMax{}'}, []),
	number: require('./src/modules/number')({formatter: 'number'}),
	object: require('./src/modules/object')({formatter: 'object'}),
	regex: require('./src/modules/regex')({formatter: 'regex'}),
	string: require('./src/modules/string')({formatter: 'string'}),
	timeAgo: require('./src/modules/timeAgo')({formatter: 'timeAgo'}),
	timeMs: require('./src/modules/timeMs')({formatter: 'timeMs'}, []),
	urls: require('./src/modules/urls')({formatter: 'urls'}),
};

if (typeof window === 'object') {
	window.Tabulator.Create ??= module.exports.Create;
	window.Tabulator.filters ??= module.exports.filters;
	window.Tabulator.formatters ??= module.exports.formatters;
	window.Tabulator.sorters ??= module.exports.sorters;
	window.Tabulator.html ??= module.exports.html;
	window.Tabulator.helpers ??= module.exports.helpers;
	window.Tabulator.modules ??= module.exports.modules;
}