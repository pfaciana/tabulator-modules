module.exports = function (column, data, initial, options, element) {
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