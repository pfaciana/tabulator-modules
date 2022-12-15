module.exports = function (headerValue, rowValue, rowData, filterParams) {
	return (new RegExp(headerValue)).test(rowValue);
};