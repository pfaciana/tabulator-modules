module.exports = function (cell, onRendered, success, cancel, params) {
	var start = document.createElement('input'),
		end = document.createElement('input'),
		container = document.createElement('span');

	function buildValues() {
		success({start: start.value, end: end.value,});
	}

	function keypress(e) {
		e.keyCode === 13 && buildValues();
		e.keyCode === 27 && cancel();
	}

	function createInput(input, title) {
		input.setAttribute('type', 'number');
		input.setAttribute('placeholder', title);
		if (params.min !== false) {
			input.setAttribute('min', Math.floor(params.min) || 0);
		}
		if (params.max !== false) {
			input.setAttribute('max', Math.ceil(params.max) || 100);
		}
		input.style.setProperty('padding', '4px', 'important');
		input.style.setProperty('width', params.filterMin && params.filterMax ? '50%' : '100%', 'important');
		input.style.boxSizing = 'border-box';
		input.value = cell.getValue();
		input.addEventListener('change', buildValues);
		input.addEventListener('blur', buildValues);
		input.addEventListener('keydown', keypress);
		container.appendChild(input);
	}

	params.filterMin && createInput(start, 'Min');
	params.filterMax && createInput(end, 'Max');

	return container;
};