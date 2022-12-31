const advancedFilter = require('../../src/filters/advanced');

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
	[true, '"c":3}', {a: 1, b: 2, c: 3}],
	[true, '+"{\\"a\\":1,"', {a: 1, b: 2, c: 3}],
	[false, '+"{\\"a\\" :1,"', {a: 1, b: 2, c: 3}], // no space after key in JSON.stringify

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
	[true, '"b c"', 'a "b c" d'],
	[true, '+"b c"', 'a "b c" d'],
	[false, '+"\\"b c\\""', 'a "b c" d'], // you can't search for double quotes with +/-/not: operators (for now)
	[true, 'regex:"\\"b\\\\sc\\""', 'a "b c" d'], // you can, however, with regex and using whitespace (\s)
	[true, '"b c"', 'a "b c" d'],
	[true, '+a "b c"', 'a "b c" d'],
	[false, '"b c" -d', 'a "b c" d'],

	[true, '+a +b c', 'abc'],
	[false, '+a+b', 'abc'],
	[true, '+a+b', 'a+bc'],
	[true, '+b -d', 'abc'],
	[false, '+"b -c"', 'abc'],
	[true, '+"b -c"', 'ab -c'],
	[true, '-d -e', 'abc'],
	[false, '-d -b', 'abc'],
	[true, '+a +b c i:D -e not:f', 'a b c d'],
	[true, '+A +B C i:d -E not:F not:a -b', 'A B C D'],
	[true, 'regex:"\\"b\\\\sc\\"" +d', 'a "b c" d'],
	[true, 'regex:"\\"b\\\\sc\\"" -z', 'a "b c" d'],
	[false, 'regex:"\\"b\\\\sc\\"" -d', 'a "b c" d'],

	[true, 'regex:"c.*land\\\\s+rocks!"', ' cleveland rocks! '],
	[true, 'regex:"c.*land\\\\s+\\"rocks\\"!"', ' cleveland "rocks"! '],
	[true, 'regex:\\"rocks\\"', ' cleveland "rocks"! '],
	[true, 'regex:"rtl\\":\\""', {rtl: "replace", suffix: ".min"}],
];

test.each(table)(
	'%s advancedFilter(%j, %j)',
	(expected, headerValue, rowValue) => {
		expect(advancedFilter(headerValue, rowValue)).toStrictEqual(expected);
	},
);