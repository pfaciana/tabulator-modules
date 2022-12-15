const isObject = require('es5-util/js/isObject');
const toAssociativeArray = require('es5-util/js/toAssociativeArray');

module.exports = function (cell, formatterParams, onRendered) {
	formatterParams.whiteSpace ??= 'pre';
	var values = cell.getValue();
	if (!Array.isArray(values) && isObject(values)) {
		if (formatterParams.whiteSpace) {
			return '<div style="white-space: ' + formatterParams.whiteSpace + '">' + JSON.stringify(values, null, formatterParams.space || 0) + '</div>';
		} else {
			return JSON.stringify(values, null, formatterParams.space || 0);
		}
	}
	return toAssociativeArray(values).join(formatterParams.join ?? '<br>');
};