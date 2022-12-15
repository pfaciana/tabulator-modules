module.exports = function (items) {
	return Array.isArray(items) ? items.length : +![undefined, null, false, '', '0', 0].includes(items);
};