module.exports = function (headerValue, rowValue, rowData, filterParams) {
	if ((headerValue.start !== '' || headerValue.end !== '') && rowValue == null) {
		return false;
	}
	if (rowValue || rowValue === 0 || rowValue === '') {
		if (headerValue.start !== '') {
			if (headerValue.end !== '') {
				return rowValue >= headerValue.start && rowValue <= headerValue.end;
			} else {
				return rowValue >= headerValue.start;
			}
		} else if (headerValue.end !== '') {
			return rowValue <= headerValue.end;
		}
	}

	return true;
};