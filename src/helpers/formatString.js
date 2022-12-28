const truncate = require('es5-util/js/truncate');
const toHtmlEntities = require('es5-util/js/toHtmlEntities');
const getKeys = require("es5-util/js/getKeys");

module.exports = function (content, formatterParams = {}) {
	if (content == null) {
		return '';
	}

	const textLimit = getKeys(formatterParams, 'textLimit', false);
	const moreText = getKeys(formatterParams, 'moreText', '...');
	const htmlChars = getKeys(formatterParams, 'htmlChars', false);
	const prefix = getKeys(formatterParams, 'prefix', '');
	const suffix = getKeys(formatterParams, 'suffix', '');

	content = textLimit ? truncate(content, textLimit, moreText) : content;
	content = htmlChars ? toHtmlEntities(content) : content;

	return prefix + content + suffix;
};