const isObject = require('es5-util/js/isObject');
const toAssociativeArray = require('es5-util/js/toAssociativeArray');
const formatString = require('./../helpers/formatString');

module.exports = function (cell, formatterParams, onRendered) {
	const params = {
		...{whiteSpace: 'pre', textLimit: false, htmlChars: false, space: 0,},
		...formatterParams
	};

	var values = cell.getValue();
	if (isObject(values) && !Array.isArray(values)) {
		var content = JSON.stringify(values, null, params.space);
		params.prefix ??= params.whiteSpace ? `<div style="white-space: ${params.whiteSpace}">` : '';
		params.suffix ??= params.whiteSpace ? `</div>` : '';
		return formatString(content, params);
	}
	return formatString(toAssociativeArray(values).join(params.join ?? '<br>'), params);
};

module.exports.byKeys = function (cell, formatterParams, onRendered) {
	var value = cell.getValue();
	return isObject(value) ? Object.keys(value).length : (+!!value);
};