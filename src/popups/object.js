const isObject = require('es5-util/js/isObject');
const getKeys = require('es5-util/js/getKeys');
const toHtmlEntities = require('es5-util/js/toHtmlEntities');
const hasPopup = require('./../helpers/hasPopup');
const formatString = require('./../helpers/formatString');

module.exports = function (e, component, onRendered) {
	let content = component.getValue();
	const column = component.getColumn().getDefinition() || {};
	const showPopup = getKeys(column, 'formatterParams.showPopup', true);
	if (content == null || showPopup === false) {
		return null;
	}

	let formatterParams = {...(column.formatterParams ?? {})};
	formatterParams.textLimit = formatterParams.popupTextLimit ?? formatterParams.textLimit ?? false;
	formatterParams.moreText = formatterParams.popupMoreText ?? formatterParams.moreText ?? '...';
	formatterParams.htmlChars = formatterParams.popupHtmlChars ?? formatterParams.htmlChars ?? false;
	formatterParams.whiteSpace = formatterParams.popupWhiteSpace ?? formatterParams.whiteSpace ?? 'pre';
	formatterParams.space = formatterParams.popupSpace ?? formatterParams.space ?? 4;

	if (isObject(content)) {
		content = JSON.stringify(content, null, formatterParams.space);
	}

	if (!hasPopup(showPopup, content, formatterParams, component, onRendered, e)) {
		return null;
	}

	formatterParams.prefix = formatterParams.popupPrefix ?? `<div style="white-space: ${formatterParams.whiteSpace}; max-width: 50vw; max-height: 50vh">`;
	formatterParams.suffix = formatterParams.popupSuffix ?? `</div>`;

	return formatString(content, formatterParams);
};