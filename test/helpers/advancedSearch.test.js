const advancedSearch = require('../../src/helpers/advancedSearch');

const table = [
	[true, 'null', null],
	[true, '', null],
	[false, '0', null],

	[true, 'false', false],
	[false, '0', false],

	[true, 'true', true],
	[false, '1', true],

	[true, 'a', 'abc'],
	[true, 'b', 'abc'],
	[true, 'c', 'a b c'],
	[false, 'd', 'a b c'],
	[false, 'B', 'a b c'],
	[false, 'a', ''],
	[true, '', 'a'],

	[true, '2', [1, 2, 3]],
	[true, '2,3', [1, 2, 3]],
	[true, '3]', [1, 2, 3]],
	[false, '3,', [1, 2, 3]],

	[true, '+b', 'abc'],
	[false, '+d', 'abc'],

	[false, '-b', 'abc'],
	[true, '-d', 'abc'],

	[false, 'not:b', 'abc'],
	[true, 'not:d', 'abc'],

	[true, 'i:b', 'abc'],
	[false, 'i:d', 'abc'],
	[true, 'i:B', 'abc'],
	[false, 'i:D', 'abc'],

	[true, 'regex:^a', 'abc'],
	[true, 'regex:c$', 'abc'],
	[true, 'regex:.*b.*', 'abc'],
	[false, 'regex:^ABC$', 'abc'],

	[true, 'regex:i:^a', 'abc'],
	[true, 'regex:i:c$', 'abc'],
	[true, 'regex:i:.*b.*', 'abc'],
	[true, 'regex:i:^ABC$', 'abc'],

	[true, '+"b -c"', 'ab -c'],
	[true, '+"\\"b c\\""', 'a "b c" d'],
	[true, '"b c"', 'a "b c" d'],
	[true, '+a "b c"', 'a "b c" d'],
	[false, '"b c" -d', 'a "b c" d'],
];

test.each(table)(
	'%# %s advancedSearch(%j, %j)',
	(expected, keyword, content) => {
		expect(advancedSearch(keyword, content)).toStrictEqual(expected);
	},
);