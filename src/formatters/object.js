const isObject = require('es5-util/js/isObject');
const toAssociativeArray = require('es5-util/js/toAssociativeArray');

module.exports = function (cell, formatterParams, onRendered) {
	formatterParams.whiteSpace ??= 'pre';
	var values = cell.getValue();
	if (isObject(values) && !Array.isArray(values)) {
		var content = JSON.stringify(values, null, formatterParams.space || 0);
		return formatterParams.whiteSpace ? '<div style="white-space: ' + formatterParams.whiteSpace + '">' + content + '</div>' : content;
	}
	return toAssociativeArray(values).join(formatterParams.join ?? '<br>');
};

module.exports.byKeys = function (cell, formatterParams, onRendered) {
	var value = cell.getValue();
	return isObject(value) ? Object.keys(value).length : (+!!value);
};