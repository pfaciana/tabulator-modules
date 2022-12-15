module.exports = global.Tabulator = global.hasOwnProperty('Tabulator') ? global.Tabulator : function () {
};
module.exports.Create = require('./src/Create');

module.exports.filters = {
	advanced: require('./src/filters/advanced'),
	args: require('./src/filters/args'),
	array: require('./src/filters/array'),
	minMax: require('./src/filters/minMax'),
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

if (typeof window === 'object') {
	window.Tabulator = module.exports;
}