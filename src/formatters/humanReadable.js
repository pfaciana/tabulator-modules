module.exports = function(cell, formatterParams, onRendered) {
	const value = cell.getValue()
	if (!value && value !== 0) {
		return '<span title="Invalid Number">-</span>'
	}

	const defaultParams = {
		format: {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
			useGrouping: true,
		},
		binary: false,
		billion: 'G',
		lower: false,
		delimiter: '',
		prefix: '',
		suffix: '',
		force: null,
	}

	const params = {
		...defaultParams,
		...formatterParams,
		format: formatterParams?.format === false
			? false
			: formatterParams?.format ? { ...defaultParams.format, ...formatterParams.format } : defaultParams.format,
	}

	const units = ['', 'K', 'M', params.billion.toUpperCase(), 'T', 'P', 'E', 'Z', 'Y']
	const multiplier = params.binary ? 1024 : 1000
	let number = +value

	let count = 0
	if (params.force) {
		count = units.indexOf(params.force.toUpperCase())
		if (count !== -1) {
			number /= Math.pow(multiplier, count)
		}
	} else {
		while (number >= multiplier && count < units.length - 1) {
			number /= multiplier
			count++
		}
	}

	if (params.format) {
		const formatter = new Intl.NumberFormat(undefined, params.format)
		number = formatter.format(number)
	}

	const unit = params.lower ? units[count].toLowerCase() : units[count].toUpperCase()
	const humanReadable = params.prefix + number + (count > 0 ? params.delimiter : '') + unit + params.suffix

	// Return with title showing the original number
	return `<span title="${value}">${humanReadable}</span>`
}