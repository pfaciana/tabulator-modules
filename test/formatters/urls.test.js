const urlsFormatter = {getHtmlTag, normalizeArgs, mergeArgs} = require('../../src/formatters/urls');

function cellConstructor(value) {
	return {getValue: () => value};
}

describe('urlsFormatter', () => {
	const table = [
		['', undefined],
		['', null],
		['', false],
		['', true],
		['', ''],
		[`<a href="abc" class="someClass">abc</a>`, 'abc'],
		['', 0],
		['', {}],
		['', []],
		[`<a href="/abc" class="someClass">/abc</a>`, ['/abc']],
		[`<a href="/abc" class="someClass">/abc</a>
<a href="/xyz" class="someClass">/xyz</a>`, ['/abc', '/xyz']],
		[`<a data-id="5" href="/page" target="_blank" class="some-class">click-me</a>`, {text: 'click-me', href: '/page', target: '_blank', class: 'some-class', attr: {'data-id': () => 5}}],
		[`<a href="/abc">link</a>`, '/abc', {show: () => true, text: () => 'link'}],
		['', 'abc', {show: () => false}],
	];

	test.each(table)(
		'%s urlsFormatter(%j)',
		(expected, cell, formatterParams = {join: "\n", className: 'someClass'}) => {
			expect(urlsFormatter(cellConstructor(cell), formatterParams)).toStrictEqual(expected);
		},
	);
});

describe('normalizeArgs', () => {
	const table = [
		[{}, {}],
		[{text: 'abc'}, {text: 'abc'}],
		[{text: 'abc', content: 'xyz'}, {text: 'abc'}],
		[{href: 'abc', url: 'xyz'}, {attr: {href: 'abc'}}],
		[{class: 'a', className: 'b'}, {attr: {class: 'a'}}],
		[{class: 'a', className: 'b', attr: {className: 'c'}}, {attr: {class: 'a'}}],
		[{text: 'abc', content: 'xyz', href: 'abc', url: 'xyz', class: 'a', className: 'b'}, {text: 'abc', attr: {href: 'abc', class: 'a'}}],
		[{attr: {href: 'abc', url: 'xyz'}}, {attr: {href: 'abc'}}],
		[{attr: {class: 'a', className: 'b'}}, {attr: {class: 'a'}}],
		[{attr: {text: 'abc', content: 'xyz'}}, {attr: {text: 'abc', content: 'xyz'}}],
	];

	test.each(table)(
		'normalizeArgs(%j) => %j',
		(input, expected) => {
			expect(normalizeArgs(input)).toEqual(expected);
		},
	);
});

describe('mergeArgs', () => {
	const testFn = (cell, value, normalizedValue) => {
		return value;
	};

	const table = [
		[{}, {tag: 'button'}, false],
		[{tag: 'a'}, {tag: 'button'}, false],
		[{text: 'abc'}, {text: 'xyz'}, {text: 'abc'}],
		[{attr: {href: 'abc'}}, {attr: {href: 'xyz'}}, {attr: {href: 'abc'}}],
		[{attr: {class: 'a'}}, {attr: {class: 'b'}}, false],
		[{text: 'abc', content: 'xyz'}, {text: 'xyz', content: 'uvw'}, {text: 'abc'}],
		[{href: 'abc', url: 'xyz'}, {href: 'uvw', url: 'rst'}, {attr: {href: 'abc'}}],
		[{class: 'a', className: 'b'}, {class: 'c', className: 'd'}, false],
		[
			{tag: 'a', text: 'abc', attr: {href: 'abc', class: 'a'}},
			{tag: 'b', text: 'xyz', attr: {href: 'xyz', class: 'b'}},
			{tag: 'a', text: 'abc', attr: {href: 'abc', class: 'a'}}
		],
		[
			'abc',
			{
				text: 'xyz',
				attr: {href: 'xyz', class: 'b'}
			},
			{
				tag: 'a',
				text: 'abc',
				attr: {href: 'abc', class: 'b'}
			}
		],
		[
			'abc',
			{
				content: testFn,
				attr: {url: testFn, target: '_blank', class: 'b'}
			},
			{
				tag: 'a',
				text: 'abc',
				attr: {href: 'abc', target: '_blank', class: 'b'}
			}
		],
	];

	test.each(table)(
		'mergeArgs(%j, %j) => %j',
		(args, formatterParams, expected) => {
			expect(mergeArgs(args, formatterParams)).toEqual(expected);
		},
	);
});