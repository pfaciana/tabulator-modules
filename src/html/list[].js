module.exports = {
	valuesLookup: function (component, filterTerm = null) {
		var set = new Set(), field = component.getField()

		component.getTable().getData().forEach(function (row) {
			let values = row[field];
			values = Array.isArray(values) ? values : [values];
			values.forEach(function (value) {
				set.add(value);
			});
		});
		return set.size ? Array.from(set).sort() : [];
	}
};