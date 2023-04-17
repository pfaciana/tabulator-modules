const isObject = require('es5-util/js/isObject');

function getHtmlTag(args) {
	if (!args) {
		return false;
	}

	args.tag ??= 'a';

	let attributes = Object.entries(args.attr).map(([key, value]) => `${key}="${String(value).replace(/"/g, '&quot;')}"`).join(' ');

	return `<${args.tag} ${attributes}>${args.text}</${args.tag}>`;
}

function normalizeArgs(args = {}) {
	args.text = args.text ?? args.content ?? null;

	args.attr ??= {};

	args.attr.href = args.href ?? args.url ?? args.attr.href ?? args.attr.url ?? null

	args.attr.target = args.target ?? args.attr.target ?? null

	args.attr.class = args.class ?? args.className ?? args.attr.class ?? args.attr.className ?? null

	delete args.href;
	delete args.url;
	delete args.attr.url;
	if (!args.attr.href) {
		delete args.attr.href;
	}
	if (!args.attr.target) {
		delete args.attr.target;
	}

	delete args.class;
	delete args.className;
	delete args.attr.className;
	if (!args.attr.class) {
		delete args.attr.class;
	}

	delete args.content;
	if (!args.text) {
		delete args.text;
	}

	if (!Object.keys(args.attr).length) {
		delete args.attr;
	}

	return args;
}

function mergeArgs(value, formatterParams = {}, cell = {}) {
	let normalizedValue = {};

	if (value && ['number', 'string'].includes(typeof value)) {
		normalizedValue = {tag: 'a', attr: {href: value}, text: value};
	} else if (isObject(value)) {
		normalizedValue = normalizeArgs({...value});
	}

	const normalizedParams = normalizeArgs({...formatterParams});

	Object.entries(normalizedParams ?? {}).map(([name, item]) => {
		if (!(name in normalizedValue) || (typeof normalizedValue[name] !== 'function' && typeof item === 'function')) {
			normalizedValue[name] = item;
		}
	});

	Object.entries(normalizedParams.attr ?? {}).map(([name, item]) => {
		if (!(name in normalizedValue.attr) || (typeof normalizedValue.attr[name] !== 'function' && typeof item === 'function')) {
			normalizedValue.attr[name] = item;
		}
	});

	Object.entries(normalizedValue ?? {}).map(([name, item]) => {
		if (typeof item === 'function') {
			normalizedValue[name] = item(cell, value, normalizedValue);
		}
	});

	Object.entries(normalizedValue.attr ?? {}).map(([name, item]) => {
		if (typeof item === 'function') {
			normalizedValue.attr[name] = item(cell, value, normalizedValue);
		}
	});

	if (!normalizedValue?.attr?.href && !normalizedValue?.text) {
		return false;
	}

	return normalizedValue;
}

function buildHtmlTags(cell, formatterParams, onRendered) {
	var urls = cell.getValue();

	urls = Array.isArray(urls) ? urls : [urls];

	var links = urls.map(url => getHtmlTag(mergeArgs(url, formatterParams, cell))).filter(Boolean);

	return links.join(formatterParams.join || '<br>');
}

module.exports = buildHtmlTags;
module.exports.getHtmlTag = getHtmlTag;
module.exports.normalizeArgs = normalizeArgs;
module.exports.mergeArgs = mergeArgs;
