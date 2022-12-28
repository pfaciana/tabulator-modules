function indexOf(haystack, needle = "\n", offset = 1) {
	return haystack.split(needle).slice(0, offset).join(needle).length;
}

function indexOfFn(needle = "\n", offset = 1) {
	return function (haystack) {
		return haystack.split(needle).slice(0, offset).join(needle).length;
	};
}

function indexOfNlFn(offset = 1) {
	const needle = "\n";
	return function (haystack) {
		return haystack.split(needle).slice(0, offset).join(needle).length;
	};
}

module.exports = indexOf;
module.exports.fn = indexOfFn;
module.exports.nl = indexOfNlFn;