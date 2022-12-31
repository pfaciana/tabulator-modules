const toAssociativeArray = require('es5-util/js/toAssociativeArray');
const hasKey = require('es5-util/js/hasKey');
const getKey = require('es5-util/js/getKey');
const isInteger = require('es5-util/js/isInteger');
const toHtmlEntities = require('es5-util/js/toHtmlEntities');
const formatString = require('./../helpers/formatString');

function formatArg(arg, formatterParams = {}) {
	let type = arg.type, text = arg.text, titleText = arg.text;
	if (type === 'string') {
		text = formatString(arg.text, formatterParams);
		titleText = toHtmlEntities(titleText);
	} else if (type === 'same') {
		text = '(same)';
		titleText = 'This value did not change';
	}
	return `<span title="(${type}) ${titleText}" data-type="${type}">${text}</span>`;
}

function getType(input) {
	let type = Object.prototype.toString.call(input).replace('[object ', '').replace(']', '').toLowerCase();

	if (isInteger(input)) {
		type = 'integer';
	} else if (type === 'number' && ![NaN, Infinity].includes(input)) {
		type = 'float';
	} else if (input === '(same)') {
		type = 'same';
	} else if (type === 'function') {
		type = 'callable';
	}

	let text = String(input);

	if (input === '') {
		text = '(empty)';
	} else if (type === 'array') {
		text = `array[${input.length}]`;
	} else if (type === 'object') {
		text = `object{${Object.keys(input).length}}`;
	} else if (type === 'callable') {
		text = 'Function()';
	}

	return {type, text};
}

module.exports = function (cell, formatterParams, onRendered) {
	if (cell.getValue() == null) {
		return '';
	}

	const defaultType = getKey(formatterParams, 'type')

	var values = [];

	var args = Array.isArray(cell.getValue()) ? cell.getValue() : [cell.getValue()];
	args.forEach(function (arg) {
		if (hasKey(arg, 'type')) {
			values.push(formatArg(arg, formatterParams));
		} else if (defaultType) {
			values.push(formatArg({type: defaultType, text: arg}, formatterParams));
		} else {
			values.push(formatArg(getType(arg), formatterParams));
		}
	});

	return (formatterParams.prefix ?? '<div>') + toAssociativeArray(values).join(formatterParams.join ?? "\n") + (formatterParams.suffix ?? '</div>');
};

module.exports.getType = formatArg;
module.exports.getType = getType;