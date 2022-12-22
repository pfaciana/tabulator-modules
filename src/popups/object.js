const isObject = require('es5-util/js/isObject');
const getKeys = require('es5-util/js/getKeys');
const toHtmlEntities = require('es5-util/js/toHtmlEntities');

module.exports = function (e, component, onRendered) {
	let content = component.getValue();
	if (content == null) {
		return null;
	}
	if (isObject(content)) {
		content = JSON.stringify(content, null, 4);
	}

	const config = component.getColumn().getDefinition() || {};
	const htmlChars = getKeys(config, 'popupParams.htmlChars', getKeys(config, 'formatterParams.htmlChars', false));

	content = htmlChars ? toHtmlEntities(content) : content;

	return '<div style="white-space: pre; max-width: 50vw; max-height: 50vh">' + content + '</div>';
};