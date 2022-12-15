const filesFormatter = require('../../src/formatters/files');

function cellConstructor(value) {
	return {getValue: () => value};
}

const table = [
	['', undefined],
	['', null],
	['', false],
	['', true],
	['', ''],
	['', 'abc'],
	['', 0],
	['', {}],
	['', []],
	['', ['abc']],
	['abc', {text: 'abc'}],
	['abc', [{text: 'abc'}]],
	['abc | def', [{text: 'abc'}, {text: 'def'}]],
	['abc, xyz', [{text: 'abc'}, {text: 'xyz'}], {join: ', '}],
	[`<a href="#" target="_blank" class="">abc</a>
<a href="#" target="_blank" class="">def</a>`, [{url: '#', text: 'abc'}, {url: '#', text: 'def'}], {join: "\n", className: ''}],
	['<a href="#" target="_blank" class="someClass">abc</a>', {url: '#', text: 'abc'}],
	['<a href="#" target="_blank" class="someClass">abc</a>', [{url: '#', text: 'abc'}]],
	['<a href="#" target="_blank" class="someClass">#</a>', {url: '#'}],
	['<a href="#" target="_blank" class="someClass">#</a>', [{url: '#'}]],
];

test.each(table)(
	'%s filesFormatter(%j)',
	(expected, cell, formatterParams = {join: ' | ', className: 'someClass'}) => {
		expect(filesFormatter(cellConstructor(cell), formatterParams)).toStrictEqual(expected);
	},
);
