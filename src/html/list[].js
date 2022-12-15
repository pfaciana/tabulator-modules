module.exports = {
	valuesLookup: function (component, filterTerm = null) {
		var set = new Set();

		component.getColumn().getCells().forEach(function (cell) {
			let values = cell.getValue();
			values = Array.isArray(values) ? values : [values];
			values.forEach(function (value) {
				set.add(value);
			});
		});

		return set.size ? Array.from(set).sort() : [];
	}
};