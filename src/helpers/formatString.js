const truncate = require('es5-util/js/truncate');
const toHtmlEntities = require('es5-util/js/toHtmlEntities');
const getKeys = require("es5-util/js/getKeys");

module.exports = function (content, formatterParams = {}) {
	const modify = getKeys(formatterParams, 'modify', false);
	const textLimit = getKeys(formatterParams, 'textLimit', false);
	const moreText = getKeys(formatterParams, 'moreText', '...');
	const htmlChars = getKeys(formatterParams, 'htmlChars', false);
	const prefix = getKeys(formatterParams, 'prefix', '');
	const suffix = getKeys(formatterParams, 'suffix', '');
	if (modify) {
		content = modify(content, {...formatterParams, ...{textLimit, moreText, htmlChars, prefix, suffix}})
	}
	if (content == null) {
		return '';
	}

	content = textLimit ? truncate(content, textLimit, moreText) : content;
	content = htmlChars ? toHtmlEntities(content) : content;

	return prefix + content + suffix;
};