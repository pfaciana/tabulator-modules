const isObject = require('es5-util/js/isObject');
const objectSorter = require('../sorters/object');

module.exports = function (o1, o2, ...args) {
	var a = isObject(o1) && 'text' in o1 ? o1.text : o1,
		b = isObject(o2) && 'text' in o2 ? o2.text : o2;

	return objectSorter(a, b, ...args);
};