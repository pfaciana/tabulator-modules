const urlsFormatter = require('../../src/formatters/urls');

function cellConstructor(value) {
	return {getValue: () => value};
}

const table = [
	['', undefined],
	['', null],
	['', false],
	['', true],
	['', ''],
	[`<a href="abc" target="_blank" class="someClass">abc</a>`, 'abc'],
	['', 0],
	['', {}],
	['', []],
	[`<a href="/abc" target="_blank" class="someClass">/abc</a>`, ['/abc']],
	[`<a href="/abc" target="_blank" class="someClass">/abc</a>
<a href="/xyz" target="_blank" class="someClass">/xyz</a>`, ['/abc', '/xyz']],
];

test.each(table)(
	'%s urlsFormatter(%j)',
	(expected, cell, formatterParams = {join: "\n", className: 'someClass'}) => {
		expect(urlsFormatter(cellConstructor(cell), formatterParams)).toStrictEqual(expected);
	},
);
