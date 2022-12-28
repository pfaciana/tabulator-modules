const {fn: indexOfFn, nl: indexOfNl} = indexOf = require('../../src/helpers/indexOf');

const table = [
	[5, `1\n2\n3\n4\n5`, "\n", 3],
	[9, `1\n2\n3\n4\n5`, "\n", 9e9],
	[1, `a__b__c__d__e__f`, "__", 1, 16],
	[10, `a__b__c__d__e__f`, "__", 4, 16],
	[16, `a__b__c__d__e__f`, "__", 9e9],
];

test.each(table)(
	'%# %j indexOf(%j, %j, %j)',
	(expected, haystack, needle, offset, expectedNL = expected) => {
		expect(indexOf(haystack, needle, offset)).toStrictEqual(expected);
		expect(indexOfFn(needle, offset)(haystack)).toStrictEqual(expected);
		expect(indexOfNl(offset)(haystack)).toStrictEqual(expectedNL);
	},
);