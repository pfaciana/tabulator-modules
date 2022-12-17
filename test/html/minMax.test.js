const jsdom = require('jsdom');
global.jQuery = global.$ = require("jquery")((new jsdom.JSDOM('')).window);
global.document = (new jsdom.JSDOM('')).window.document;
const minMaxDom = require('../../src/html/minMax');

const cell = {getValue: () => 1};
const noop = () => {
};
const headerFilterArgs = [cell, noop, noop, noop];

test('minMax', () => {
	const filterParams = {min: 2, max: 10, filterMin: true, filterMax: true};

	const wrapper = minMaxDom(...headerFilterArgs, filterParams);
	expect($(wrapper).find('input').length).toStrictEqual(2);
	expect($(wrapper).find('input').attr('min')).toEqual('2');
	expect($(wrapper).find('input').attr('max')).toEqual('10');
	expect($(wrapper).find('input').toArray().reduce((accumulator, currentValue) => accumulator + $(currentValue).attr('placeholder'), '')).toEqual('MinMax');
	expect($(wrapper).prop('outerHTML')).toEqual(`<span>
		<input type="number" placeholder="Min" min="2" max="10" style="padding: 4px !important; width: 50% !important; box-sizing: border-box;">
		<input type="number" placeholder="Max" min="2" max="10" style="padding: 4px !important; width: 50% !important; box-sizing: border-box;">
	</span>`.replace(/[\t\r\n]/g, ''));
});

test('min', () => {
	const filterParams = {min: 3, max: 7, filterMin: true, filterMax: false};

	const wrapper = minMaxDom(...headerFilterArgs, filterParams);
	expect($(wrapper).find('input').length).toStrictEqual(1);
	expect($(wrapper).find('input').attr('min')).toEqual('3');
	expect($(wrapper).find('input').attr('max')).toEqual('7');
	expect($(wrapper).find('input').toArray().reduce((accumulator, currentValue) => accumulator + $(currentValue).attr('placeholder'), '')).toEqual('Min');
	expect($(wrapper).prop('outerHTML')).toEqual(`<span>
		<input type="number" placeholder="Min" min="3" max="7" style="padding: 4px !important; width: 100% !important; box-sizing: border-box;">
	</span>`.replace(/[\t\r\n]/g, ''));
});

test('max', () => {
	const filterParams = {min: 1, max: 8, filterMin: false, filterMax: true};

	const wrapper = minMaxDom(...headerFilterArgs, filterParams);
	expect($(wrapper).find('input').length).toStrictEqual(1);
	expect($(wrapper).find('input').attr('min')).toEqual('1');
	expect($(wrapper).find('input').attr('max')).toEqual('8');
	expect($(wrapper).find('input').toArray().reduce((accumulator, currentValue) => accumulator + $(currentValue).attr('placeholder'), '')).toEqual('Max');
	expect($(wrapper).prop('outerHTML')).toEqual(`<span>
		<input type="number" placeholder="Max" min="1" max="8" style="padding: 4px !important; width: 100% !important; box-sizing: border-box;">
	</span>`.replace(/[\t\r\n]/g, ''));
});

test('no min/max attrs', () => {
	const filterParams = {min: false, max: false, filterMin: false, filterMax: true};

	const wrapper = minMaxDom(...headerFilterArgs, filterParams);
	expect($(wrapper).find('input').length).toStrictEqual(1);
	expect($(wrapper).find('input').attr('min')).toEqual(undefined);
	expect($(wrapper).find('input').attr('max')).toEqual(undefined);
	expect($(wrapper).find('input').toArray().reduce((accumulator, currentValue) => accumulator + $(currentValue).attr('placeholder'), '')).toEqual('Max');
	expect($(wrapper).prop('outerHTML')).toEqual(`<span>
		<input type="number" placeholder="Max" style="padding: 4px !important; width: 100% !important; box-sizing: border-box;">
	</span>`.replace(/[\t\r\n]/g, ''));
});