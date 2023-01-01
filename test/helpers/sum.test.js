const sum = require('../../src/helpers/sum');

const table = [
	['10', [1, 2, 3, 4], {}],
	['$10.00', [1, 2, 3, 4], {locales: 'en-US', options: {style: 'currency', currency: 'USD', minimumFractionDigits: 2}}],
	['$ 10', [1, 2, 3, 4], {prefix: '$ '}],
	['11 ms', [1.5, 2, 3, 4], {suffix: ' ms'}],
	['10.321 ms', [1, 2, 3, 4.321], {suffix: ' ms', options: {maximumFractionDigits: 3}}],
	['10.32 ms', [1, 2, 3, 4.321], {suffix: ' ms', options: {maximumFractionDigits: 2}}],
];

test.each(table)(
	'%# sum(%j, %j)',
	(expected, values, params = {options: {minimumFractionDigits: 0, maximumFractionDigits: 0}}) => {
		expect(sum(values, [], params)).toStrictEqual(expected);
	},
);