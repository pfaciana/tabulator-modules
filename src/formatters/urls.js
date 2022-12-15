module.exports = function (cell, formatterParams, onRendered) {
	var urls = cell.getValue();

	if (!urls || (typeof urls !== 'string' && !Array.isArray(urls))) {
		return '';
	}

	urls = Array.isArray(urls) ? urls : [urls];

	var links = urls.map(function (url) {
		return `<a href="${url}" target="_blank" class="${formatterParams.className ?? ''}">${url}</a>`;
	});

	return links.join(formatterParams.join || '<br>');
}