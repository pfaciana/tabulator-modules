module.exports = function (column, data, initial, options, element) {

	if ('src' in column) {
		column.title = `<img alt="${column.title}" title="${column.title}" src="${column.src}" style="max-width: 100%;" />`;
		delete column.src;
	}

	return {
		...{
			vertAlign: 'middle',
			hozAlign: 'center',
			headerHozAlign: 'center',
			headerTooltip: true,
		},
		...column
	};
};