const isObject = require('es5-util/js/isObject');

module.exports = function (cell, formatterParams, onRendered) {
	var files = cell.getValue();

	if (isObject(files) && ('text' in files || 'url' in files)) {
		files = [files];
	}

	if (!Array.isArray(files)) {
		return '';
	}

	formatterParams.className ??= 'debug-bar-file-link-format debug-bar-ide-link';

	var links = files.map(function (file) {
		if (file.url && !file.text) {
			file.text = file.url;
		}
		return file.url ? `<a href="${file.url}" target="_blank" class="${formatterParams.className}">${file.text}</a>` : (file.text ?? '');
	});

	return links.join(formatterParams.join || " | ");
}