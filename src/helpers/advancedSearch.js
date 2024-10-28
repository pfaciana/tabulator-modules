const safeStringify = require('es5-util/js/safeStringify')

function stripQuotes(keyword) {
	if (keyword.startsWith('"') && keyword.endsWith('"')) {
		return JSON.parse(keyword)
	}

	return keyword
}

module.exports = function(keyword, content) {
	keyword = safeStringify(keyword)
	content = safeStringify(content)

	if (keyword.startsWith('regex:i:')) {
		if (!(new RegExp(stripQuotes(keyword.slice(8)), 'i').test(content))) {
			return false
		}
	} else if (keyword.startsWith('i:')) {
		if (!content.toLowerCase().includes(stripQuotes(keyword.slice(2)).toLowerCase())) {
			return false
		}
	} else if (keyword.startsWith('regex:')) {
		if (!(new RegExp(stripQuotes(keyword.slice(6)))).test(content)) {
			return false
		}
	} else if (keyword.startsWith('not:')) {
		if (content.includes(stripQuotes(keyword.slice(4)))) {
			return false
		}
	} else if (keyword.startsWith('-')) {
		if (content.includes(stripQuotes(keyword.slice(1)))) {
			return false
		}
	} else if (keyword.startsWith('+')) {
		if (!content.includes(stripQuotes(keyword.slice(1)))) {
			return false
		}
	} else if (keyword.startsWith('~')) {
		if (!content.toLowerCase().includes(stripQuotes(keyword.slice(1)).toLowerCase())) {
			return false
		}
	} else if (!content.includes(keyword)) {
		return false
	}

	return true
}