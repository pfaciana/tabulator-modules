module.exports = function (key, values, ...objects) {
	if (!Array.isArray(values)) {
		values = [values];
	}

	for (var object of objects) {
		for (var value of values) {
			if (typeof object === 'object' && key in object && object[key] === value) {
				return value;
			}
		}
	}

	return false;
};