const jsdom = require('jsdom')
global.jQuery = global.$ = require('jquery')((new jsdom.JSDOM('')).window)
global.document = (new jsdom.JSDOM('')).window.document
const humanReadableFormatter = require('../../src/formatters/humanReadable')

function cellConstructor(value) {
	return { getValue: () => value }
}

const table = [
	// Basic invalid inputs
	['-', undefined],
	['-', null],
	['-', false],
	['-', ''],
	['0', 0],

	// Basic numbers without params (default maximumFractionDigits: 0)
	['1', 1],
	['999', 999],
	['1K', 1000],
	['2K', 1500], // rounds to 2K with default precision 0
	['1M', 1000000],
	['2M', 1500000], // rounds to 2M with default precision 0
	['1G', 1000000000],
	['2G', 1500000000], // rounds to 2G with default precision 0
	['1T', 1000000000000],
	['2T', 1500000000000],

	// Explicit precision tests
	['1.00', 1, { format: { minimumFractionDigits: 2, maximumFractionDigits: 2 } }],
	['1.50K', 1500, { format: { minimumFractionDigits: 2, maximumFractionDigits: 2 } }],
	['1.55K', 1554, { format: { minimumFractionDigits: 2, maximumFractionDigits: 2 } }],
	['1.554K', 1554, { format: { minimumFractionDigits: 3, maximumFractionDigits: 3 } }],
	['1.5536K', 1553.6, { format: { minimumFractionDigits: 4, maximumFractionDigits: 4 } }],
	['1.234K', 1234, { format: false }],

	// Binary mode tests (default maximumFractionDigits: 0)
	['1K', 1024, { binary: true }],
	['1M', 1048576, { binary: true }],
	['1G', 1073741824, { binary: true }],
	['1T', 1099511627776, { binary: true }],
	['1.5K', 1536, { binary: true, format: false }],

	// Binary mode with precision
	['1.00K', 1024, { binary: true, format: { minimumFractionDigits: 2, maximumFractionDigits: 2 } }],
	['1.50M', 1572864, { binary: true, format: { minimumFractionDigits: 2, maximumFractionDigits: 2 } }],

	// Formatting tests with prefix/suffix/delimiter (default maximumFractionDigits: 0)
	['$1K USD', 1000, { prefix: '$', suffix: ' USD' }],
	['1 K', 1000, { delimiter: ' ' }],
	['$2 K USD', 1500, { prefix: '$', delimiter: ' ', suffix: ' USD' }], // rounds to 2K
	['$1.5 K USD', 1500, { prefix: '$', delimiter: ' ', suffix: ' USD', format: { minimumFractionDigits: 1, maximumFractionDigits: 1 } }], // explicit precision

	// Force specific unit tests
	['0.001M', 1000, { force: 'M', format: { minimumFractionDigits: 3, maximumFractionDigits: 3 } }],
	['1.000M', 1000000, { force: 'M', format: { minimumFractionDigits: 3, maximumFractionDigits: 3 } }],
	['1,000.000K', 1000000, { force: 'K', format: { minimumFractionDigits: 3, maximumFractionDigits: 3 } }],
	['1M', 1000000, { force: 'M' }], // default precision 0

	// Case sensitivity tests (default maximumFractionDigits: 0)
	['1k', 1000, { lower: true }],
	['1m', 1000000, { lower: true }],
	['1g', 1000000000, { lower: true }],

	// Billion notation test (default maximumFractionDigits: 0)
	['1B', 1000000000, { billion: 'B' }],
	['1b', 1000000000, { billion: 'B', lower: true }],

	// Complex combinations
	['$1.55 K bytes', 1554, {
		format: {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		},
		prefix: '$',
		suffix: ' bytes',
		delimiter: ' ',
	}],
	['1.52 KiB', 1554, {
		format: {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		},
		binary: true,
		suffix: 'iB',
		delimiter: ' ',
	}],

	// Force specific unit
	['1,234.57K', 1234567, { force: 'K', format: { minimumFractionDigits: 2, maximumFractionDigits: 2 } }],
	['1.23M', 1234567, { force: 'M', format: { minimumFractionDigits: 2, maximumFractionDigits: 2 } }],
	['0.001G', 1234567, { force: 'G', format: { minimumFractionDigits: 3, maximumFractionDigits: 3 } }],

	// Edge cases
	['1.23', 1.23, { force: '', format: { minimumFractionDigits: 2, maximumFractionDigits: 2 } }],
	['0.00', 0, { format: { minimumFractionDigits: 2, maximumFractionDigits: 2 } }],
]

test.each(table)(
	'%s humanReadableFormatter(%j, %j)',
	(expected, cell, formatterParams = {}) => {
		expect($(humanReadableFormatter(cellConstructor(cell), formatterParams)).html()).toStrictEqual(expected)
	},
)

// Additional test for title attribute
test('title attribute shows original number', () => {
	const result = humanReadableFormatter(cellConstructor(1234567), {})
	expect($(result).attr('title')).toBe('1,234,567')
})
