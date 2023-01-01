const formatString = require('../../src/helpers/formatString');

const table = [
	['abc', 'abc', {}],
	['abc...', 'abcdefghijklmnopqrstuvwxyz', {textLimit: 3}],
	['', 'abcdefghijklmnopqrstuvwxyz', {modify: () => null}],
	['a', 'abcdefghijklmnopqrstuvwxyz', {modify: text => text[0]}],
	['new text', 'abcdefghijklmnopqrstuvwxyz', {modify: (text, params) => params.newText, newText: 'new text'}],
];

test.each(table)(
	'%s formatString(%j, %j)',
	(expected, content, formatterParams = {}) => {
		expect(formatString(content, formatterParams)).toStrictEqual(expected);
	},
);