const advancedSearch = require('../helpers/advancedSearch')
const safeStringify = require('es5-util/js/safeStringify')

module.exports = function(headerValue, rowValue, rowData, filterParams = {}) {
	if (headerValue == null || headerValue === '') {
		return true
	}
	if (rowValue == null) {
		return headerValue === 'null'
	}

	headerValue = safeStringify(headerValue)
	rowValue = safeStringify(rowValue)

	if ('strict' in filterParams && !filterParams.strict) {
		headerValue = (headerValue ?? '').toLowerCase()
		rowValue = (rowValue ?? '').toLowerCase()
	}

	if (!headerValue.includes(' ') && !headerValue.includes(':') && !headerValue.includes('-') && !headerValue.includes('+') && !headerValue.includes('~')) {
		return rowValue.includes(headerValue)
	}

	var keywords = headerValue.match(/(?:[^\s"]+|"[^"]*(?:(?!\\").)*")+/g)
	for (var keyword of keywords) {
		if (!advancedSearch(keyword, rowValue)) {
			return false
		}
	}

	return true
}