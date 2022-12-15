const toAssociativeArray = require('es5-util/js/toAssociativeArray');
const hasKey = require('es5-util/js/hasKey');
const getKey = require('es5-util/js/getKey');
const toString = require('es5-util/js/toString');

module.exports = function (cell, formatterParams, onRendered) {
	if (cell.getValue() == null) {
		return '';
	}

	const defaultType = getKey(formatterParams, 'type')

	var values = [];

	function formatArg(arg) {
		return `<span title="(${arg.type}) ${arg.type === 'same' ? 'This value did not change' : arg.text}" data-type="${arg.type}">${arg.type === 'same' ? '(same)' : arg.text}</span>`;
	}

	var args = Array.isArray(cell.getValue()) ? cell.getValue() : [cell.getValue()];
	args.forEach(function (arg) {
		if (hasKey(arg, 'type')) {
			values.push(formatArg(arg));
		} else if (defaultType) {
			values.push(formatArg({type: defaultType, text: arg}));
		} else if (typeof arg === 'object' || typeof arg === 'function') {
			values.push(JSON.stringify(arg));
		} else {
			values.push(toString(arg));
		}
	});

	return (formatterParams.before ?? '<div>') + toAssociativeArray(values).join(formatterParams.join ?? "\n") + (formatterParams.after ?? '</div>');
};