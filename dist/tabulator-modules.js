(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
"use strict";

module.exports = global.Tabulator = global.hasOwnProperty('Tabulator') ? global.Tabulator : function () {};
module.exports.Create = require('./src/Create');
module.exports.filters = {
  advanced: require('./src/filters/advanced'),
  args: require('./src/filters/args'),
  array: require('./src/filters/array'),
  minMax: require('./src/filters/minMax'),
  object: require('./src/filters/object'),
  regex: require('./src/filters/regex'),
  timeAgo: require('./src/filters/timeAgo')
};
module.exports.formatters = {
  args: require('./src/formatters/args'),
  array: require('./src/formatters/array'),
  files: require('./src/formatters/files'),
  object: require('./src/formatters/object'),
  timeAgo: require('./src/formatters/timeAgo'),
  urls: require('./src/formatters/urls')
};
module.exports.sorters = {
  args: require('./src/sorters/args'),
  array: require('./src/sorters/array'),
  object: require('./src/sorters/object')
};
module.exports.html = {
  lists: require('./src/html/list[]'),
  minMax: require('./src/html/minMax')
};
module.exports.helpers = {
  advancedSearch: require('./src/helpers/advancedSearch'),
  formatString: require('./src/helpers/formatString'),
  getSize: require('./src/helpers/getSize'),
  hasPopup: require('./src/helpers/hasPopup'),
  indexOf: require('./src/helpers/indexOf'),
  intervals: require('./src/helpers/intervals'),
  isType: require('./src/helpers/isType'),
  /* es5-util */
  arrayColumn: require('es5-util/js/arrayColumn'),
  compare: require('es5-util/js/compare'),
  getFromObjPath: require('es5-util/js/getFromObjPath'),
  getKey: require('es5-util/js/getKey'),
  getKeys: require('es5-util/js/getKeys'),
  getValues: require('es5-util/js/getValues'),
  hasKey: require('es5-util/js/hasKey'),
  hasKeys: require('es5-util/js/hasKeys'),
  isInteger: require('es5-util/js/isInteger'),
  isObject: require('es5-util/js/isObject'),
  safeParse: require('es5-util/js/safeParse'),
  safeStringify: require('es5-util/js/safeStringify'),
  toAssociativeArray: require('es5-util/js/toAssociativeArray'),
  toHtmlEntities: require('es5-util/js/toHtmlEntities'),
  truncate: require('es5-util/js/truncate')
};
module.exports.popups = {
  object: require('./src/popups/object')
};
module.exports.modules = {
  all: require('./src/modules/all')({}),
  args: require('./src/modules/args')({
    formatter: 'args'
  }),
  boolean: require('./src/modules/boolean')({
    formatter: 'boolean'
  }),
  duration: require('./src/modules/timeMs')({
    formatter: 'duration'
  }, []),
  files: require('./src/modules/files')({
    formatter: 'files'
  }),
  list: require('./src/modules/list')({
    formatter: 'list'
  }),
  "list[]": require('./src/modules/list[]')({
    formatter: 'list[]'
  }),
  minMax: require('./src/modules/minMax')({
    formatter: 'minMax'
  }, []),
  "minMax[]": require('./src/modules/minMax[]')({
    formatter: 'minMax[]'
  }, []),
  "minMax{}": require('./src/modules/minMax{}')({
    formatter: 'minMax{}'
  }, []),
  number: require('./src/modules/number')({
    formatter: 'number'
  }),
  object: require('./src/modules/object')({
    formatter: 'object'
  }),
  regex: require('./src/modules/regex')({
    formatter: 'regex'
  }),
  string: require('./src/modules/string')({
    formatter: 'string'
  }),
  timeAgo: require('./src/modules/timeAgo')({
    formatter: 'timeAgo'
  }),
  timeMs: require('./src/modules/timeMs')({
    formatter: 'timeMs'
  }, []),
  // to be deprecated in future versions, use `duration` instead
  urls: require('./src/modules/urls')({
    formatter: 'urls'
  })
};
if (typeof window === 'object') {
  var _window$Tabulator, _window$Tabulator2, _window$Tabulator3, _window$Tabulator4, _window$Tabulator5, _window$Tabulator6, _window$Tabulator7;
  (_window$Tabulator = window.Tabulator).Create ?? (_window$Tabulator.Create = module.exports.Create);
  (_window$Tabulator2 = window.Tabulator).filters ?? (_window$Tabulator2.filters = module.exports.filters);
  (_window$Tabulator3 = window.Tabulator).formatters ?? (_window$Tabulator3.formatters = module.exports.formatters);
  (_window$Tabulator4 = window.Tabulator).sorters ?? (_window$Tabulator4.sorters = module.exports.sorters);
  (_window$Tabulator5 = window.Tabulator).html ?? (_window$Tabulator5.html = module.exports.html);
  (_window$Tabulator6 = window.Tabulator).helpers ?? (_window$Tabulator6.helpers = module.exports.helpers);
  (_window$Tabulator7 = window.Tabulator).modules ?? (_window$Tabulator7.modules = module.exports.modules);
}

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./src/Create":17,"./src/filters/advanced":18,"./src/filters/args":19,"./src/filters/array":20,"./src/filters/minMax":21,"./src/filters/object":22,"./src/filters/regex":23,"./src/filters/timeAgo":24,"./src/formatters/args":25,"./src/formatters/array":26,"./src/formatters/files":27,"./src/formatters/object":28,"./src/formatters/timeAgo":29,"./src/formatters/urls":30,"./src/helpers/advancedSearch":31,"./src/helpers/formatString":32,"./src/helpers/getSize":33,"./src/helpers/hasPopup":34,"./src/helpers/indexOf":35,"./src/helpers/intervals":36,"./src/helpers/isType":37,"./src/html/list[]":39,"./src/html/minMax":40,"./src/modules/all":41,"./src/modules/args":42,"./src/modules/boolean":43,"./src/modules/files":44,"./src/modules/list":45,"./src/modules/list[]":46,"./src/modules/minMax":47,"./src/modules/minMax[]":48,"./src/modules/minMax{}":49,"./src/modules/number":50,"./src/modules/object":51,"./src/modules/regex":52,"./src/modules/string":53,"./src/modules/timeAgo":54,"./src/modules/timeMs":55,"./src/modules/urls":56,"./src/popups/object":57,"./src/sorters/args":58,"./src/sorters/array":59,"./src/sorters/object":60,"es5-util/js/arrayColumn":2,"es5-util/js/compare":3,"es5-util/js/getFromObjPath":4,"es5-util/js/getKey":5,"es5-util/js/getKeys":6,"es5-util/js/getValues":7,"es5-util/js/hasKey":8,"es5-util/js/hasKeys":9,"es5-util/js/isInteger":10,"es5-util/js/isObject":11,"es5-util/js/safeParse":12,"es5-util/js/safeStringify":13,"es5-util/js/toAssociativeArray":14,"es5-util/js/toHtmlEntities":15,"es5-util/js/truncate":16}],2:[function(require,module,exports){
const getFromObjPath = require('./getFromObjPath');
const getValues = require('./getValues');

function arrayColumn(array, columnKey, indexKey) {
	columnKey = columnKey != null ? columnKey : null;
	indexKey = indexKey != null ? indexKey : null;
	if (indexKey !== null) {
		let obj = {};
		for (var index in array) {
			if (array.hasOwnProperty(index) || typeof array[index] !== 'function') {
				obj[getFromObjPath(array[index], indexKey)] = columnKey !== null ? (typeof columnKey === 'function' ? columnKey(array[index]) : getFromObjPath(array[index], columnKey)) : array[index];
			}
		}
		return obj;
	}

	array = Array.isArray(array) ? array : getValues(array);
	return array.map(function (value, index) {
		return typeof columnKey === 'function' ? columnKey(value) : getFromObjPath(value, columnKey);
	})
}

module.exports = arrayColumn;
},{"./getFromObjPath":4,"./getValues":7}],3:[function(require,module,exports){
function isArray(value) {
	return Array.isArray(value);
}

function isObject(value) {
	return isCompound(value) && !isArray(value);
}

function isCompound(value) {
	return typeof value === 'object' || typeof value === 'function';
}

function compare(type, locale) {
	type = type != null ? type : 'sort';
	locale = locale != null ? locale : 'en-US';
	return function (a, b) {
		if (a === b) {
			return 0;
		}
		if (a === undefined || b === undefined) {
			return (a === undefined) ? -1 : 1;
		}
		if (a === null || b === null) {
			return (a === null) ? -1 : 1;
		}
		if (a === false || b === false) {
			return (a === false) ? -1 : 1;
		}
		if (a === true || b === true) {
			return (a === true) ? -1 : 1;
		}
		if (a === '' || b === '') {
			return (a === '') ? -1 : 1;
		}
		if (!isNaN(a) && !isNaN(b)) {
			return a - b;
		}
		if (!isNaN(a) || !isNaN(b)) {
			return (!isNaN(a)) ? -1 : 1;
		}
		if (isCompound(a) && !isCompound(b)) {
			return 1;
		}
		if (isCompound(b) && !isCompound(a)) {
			return -1;
		}
		if (isArray(a) && isObject(b)) {
			return -1;
		}
		if (isArray(b) && isObject(a)) {
			return 1;
		}
		if (a[0] === '_' && b[0] !== '_') {
			return -1;
		}
		if (b[0] === '_' && a[0] !== '_') {
			return 1;
		}
		if (typeof a !== 'string') {
			a = JSON.stringify(a);
		}
		if (typeof b !== 'string') {
			b = JSON.stringify(b);
		}
		if (type[0] === 'u') {
			return a.localeCompare(b, locale + '-u-kf-upper');
		}
		if (type[0] === 'l') {
			return a.localeCompare(b, locale + '-u-kf-lower');
		}
		if (type[0] === 'i') {
			a = a.toLowerCase();
			b = b.toLowerCase();
		}

		var temp = [a, b];
		temp.sort();
		return temp[0] === a ? -1 : 1;
	};
}

module.exports = compare();
module.exports.upperFirst = compare('u');
module.exports.lowerFirst = compare('l');
module.exports.insensitive = compare('i');
module.exports.compare = compare;
},{}],4:[function(require,module,exports){
function getFromObjPath(obj, path) {
	if (typeof path !== 'string' && !(path instanceof String)) {
		return obj[path];
	}
	return path.split('.').reduce((o, i) => o[i], obj);
}

module.exports = getFromObjPath;
},{}],5:[function(require,module,exports){
function getKey(object, key, defaultValue) {
	defaultValue = typeof defaultValue !== 'undefined' ? defaultValue : undefined;
	if (typeof object !== 'object' || !(key in object)) {
		return defaultValue;
	}

	return object[key];
}

module.exports = getKey;
},{}],6:[function(require,module,exports){
function getKeys(object, path, defaultValue) {
	defaultValue = typeof defaultValue !== 'undefined' ? defaultValue : undefined;
	if (typeof object !== 'object' || typeof path !== 'string') {
		return defaultValue;
	}

	var keys = path.split('.');

	for (var index in keys) {
		if (typeof object !== 'object' || !(keys[index] in object)) {
			return defaultValue;
		}
		object = object[keys[index]];
	}

	return object;
}

module.exports = getKeys;
},{}],7:[function(require,module,exports){
function getValues(object) {
	var result = [];
	for (var prop in object) {
		if (object.hasOwnProperty(prop)) {
			result.push(object[prop]);
		}
	}

	return result;
}

module.exports = getValues;
},{}],8:[function(require,module,exports){
function hasKey(object, key) {
	return typeof object === 'object' && object !== null && key in object;
}

module.exports = hasKey;
},{}],9:[function(require,module,exports){
function hasKeys(object, path) {
	if (typeof object !== 'object' || typeof path !== 'string') {
		return false;
	}

	var keys = path.split('.');

	for (var index in keys) {
		if (keys.hasOwnProperty(index)) {
			if (typeof object !== 'object' || !(keys[index] in object)) {
				return false;
			}
			object = object[keys[index]];
		}
	}

	return true;
}

module.exports = hasKeys;
},{}],10:[function(require,module,exports){
function isInteger(value) {
	return typeof value == 'number' && value == ~~value;
}

module.exports = isInteger;
},{}],11:[function(require,module,exports){
function isObject(value) {
	return (typeof value == 'object' || typeof value == 'function') && value !== null;
}

module.exports = isObject;
},{}],12:[function(require,module,exports){
/*
 * Protection against
 *  - undefined
 *  - other non strings
 *  - non parsable strings
 */

function safeParse(data, forceParse) {
	if (typeof data !== "string") {
		return data;
	}

	forceParse = forceParse != null ? forceParse : true;

	try {
		if (data === 'NULL') {
			data = 'null';
		}

		var parsedData = JSON.parse(data.replace(/(\r\n|\n|\r|\t)/gm, ""));

		if (!forceParse && (typeof parsedData !== 'object' || parsedData === null)) {
			return data;
		}

		return parsedData;
	} catch (e) {
		return data;
	}
}

module.exports = safeParse;
},{}],13:[function(require,module,exports){
/*
 * Differs from just JSON.stringify because it does not escapes strings
 *
 * so 'abc' stays 'abc', and not "'abc'"
 * and '5' stays '5', not "'5'"
 *
 * Therefor  safeParse(safeStringify("5"))    =  5
 * but       JSON.parse(JSON.stringify("5"))  = "5"
 *
 */

var safeParse = require('./safeParse');

function safeStringify(data, replacer, space, forceParse) {
	replacer = replacer != null ? replacer : null;
	space = space != null ? space : null;
	forceParse = forceParse != null ? forceParse : false;
	var stringData = String(data);

	if (stringData == '0' && (1 / data) == -(1 / 0)) {
		return '-0';
	}

	if (stringData === 'Infinity' || stringData === 'NaN') {
		return stringData;
	}

	if (forceParse) {
		data = safeParse(data);
	}

	return typeof data === "string" ? data : JSON.stringify(data, replacer, space);
}

module.exports = safeStringify;
},{"./safeParse":12}],14:[function(require,module,exports){
function toAssociativeArray(obj) {
	if (typeof obj === 'undefined') {
		return [];
	}

	if (Array.isArray(obj)) {
		return obj;
	}

	if (typeof obj !== 'object' || obj === null) {
		return [obj];
	}

	var arr = [];

	for (var key in obj) {
		if (obj.hasOwnProperty(key) || typeof arr[key] !== 'function') {
			arr[key] = obj[key];
		}
	}

	return arr;
}

module.exports = toAssociativeArray;
},{}],15:[function(require,module,exports){
function toHtmlEntities(input) {
	return input.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
};

module.exports = toHtmlEntities;
},{}],16:[function(require,module,exports){
var isObject = require('./isObject');

function truncate(input, condition, suffix) {
	input = isObject(input) ? JSON.stringify(input) : String(input);
	suffix = typeof suffix != 'undefined' ? suffix : '&hellip;';
	if (condition instanceof Function) {
		condition = condition(input, suffix);
	}

	return (input.length > condition) ? input.slice(0, condition) + suffix : input;
};

module.exports = truncate;
},{"./isObject":11}],17:[function(require,module,exports){
"use strict";

let filters = [require('./modules/regex'), require('./modules/timeAgo'), require('./modules/timeMs'), require('./modules/minMax'), require('./modules/minMax{}'), require('./modules/minMax[]'), require('./modules/list[]'), require('./modules/list'), require('./modules/args'), require('./modules/files'), require('./modules/urls'), require('./modules/boolean'), require('./modules/number'), require('./modules/string'), require('./modules/object'), require('./modules/all')];
if ('moduleBindings' in Tabulator) {
  Tabulator.moduleBindings['formatterOutput'] = function (TabulatorFull) {
    this.initialize = () => {};
    TabulatorFull.columnManager.optionsList.register('formatterOutput', null);
  };
}
if ('extendModule' in Tabulator) {
  Tabulator.extendModule('format', 'formatters', function () {
    let formatters = {};
    const formatterOutput = cell => cell.getValue();
    filters.map(filter => filter.formatter).flat().forEach(formatterType => {
      if (formatterType) {
        formatters[formatterType] = formatterOutput;
      }
    });
    return formatters;
  }());
}
function Create(element, options) {
  let namespace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'all';
  var table,
    parameters = Object.values(arguments);
  if (typeof jQuery === 'function' && 'publish' in jQuery) {
    options = jQuery.publish(`tabulator-table-setup`, options, element, namespace);
    options = jQuery.publish(`${namespace}/tabulator-table-setup`, options, element, namespace);
  }
  function updateColumn(column, data) {
    const initial = jQuery.extend(true, {}, column || {});
    if (typeof jQuery === 'function' && 'publish' in jQuery) {
      column = jQuery.publish(`tabulator-column-setup`, column, data, initial, options, element, namespace);
      column = jQuery.publish(`${namespace}/tabulator-column-setup`, column, data, initial, options, element, namespace);
    }
    filters.forEach(function (filter) {
      column = filter(column, data, initial, options, element);
    });
    if (typeof jQuery === 'function' && 'publish' in jQuery) {
      column = jQuery.publish(`tabulator-column-setup-after`, column, data, initial, options, element, namespace);
      column = jQuery.publish(`${namespace}/tabulator-column-setup-after`, column, data, initial, options, element, namespace);
    }
    return column;
  }
  if ('columns' in options && Array.isArray(options.columns) && options.columns.length &&
  //
  'data' in options && Array.isArray(options.data) && options.data.length) {
    options.columns = options.columns.map(function (column) {
      return updateColumn(column, options.data);
    });
    parameters[1] = options;
    table = new Tabulator(...parameters);
  } else {
    parameters[1] = options;
    table = new Tabulator(...parameters);
    table.on('tableBuilt', function () {
      var data = table.getData();
      jQuery.each(table.columnManager.getColumns(), function (i, column) {
        setTimeout(function () {
          column.updateDefinition(updateColumn(column.getDefinition(), data));
        }, 1);
      });
    });
  }
  if (typeof jQuery === 'function' && 'publish' in jQuery) {
    jQuery(table.element).addClass('tabulator-modules').attr('data-namespace', namespace);
    jQuery.publish(`tabulator-table-created`, table, ...parameters);
    jQuery.publish(`${namespace}/tabulator-table-created`, table, ...parameters);
  }
  return table;
}
module.exports = Create;

},{"./modules/all":41,"./modules/args":42,"./modules/boolean":43,"./modules/files":44,"./modules/list":45,"./modules/list[]":46,"./modules/minMax":47,"./modules/minMax[]":48,"./modules/minMax{}":49,"./modules/number":50,"./modules/object":51,"./modules/regex":52,"./modules/string":53,"./modules/timeAgo":54,"./modules/timeMs":55,"./modules/urls":56}],18:[function(require,module,exports){
"use strict";

const advancedSearch = require('../helpers/advancedSearch');
const safeStringify = require('es5-util/js/safeStringify');
module.exports = function (headerValue, rowValue, rowData) {
  let filterParams = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  if (headerValue == null || headerValue === '') {
    return true;
  }
  if (rowValue == null) {
    return headerValue === 'null';
  }
  headerValue = safeStringify(headerValue);
  rowValue = safeStringify(rowValue);
  if ('strict' in filterParams && !filterParams.strict) {
    headerValue = (headerValue ?? '').toLowerCase();
    rowValue = (rowValue ?? '').toLowerCase();
  }
  if (!headerValue.includes(' ') && !headerValue.includes(':') && !headerValue.includes('-') && !headerValue.includes('+')) {
    return rowValue.includes(headerValue);
  }
  var keywords = headerValue.match(/(?:[^\s"]+|"[^"]*(?:(?!\\").)*")+/g);
  for (var keyword of keywords) {
    if (!advancedSearch(keyword, rowValue)) {
      return false;
    }
  }
  return true;
};

},{"../helpers/advancedSearch":31,"es5-util/js/safeStringify":13}],19:[function(require,module,exports){
"use strict";

const isObject = require('es5-util/js/isObject');
const advancedFilter = require('./../filters/advanced');
const safeStringify = require('es5-util/js/safeStringify');
module.exports = function (headerValue, rowValueObj) {
  var rowValue = isObject(rowValueObj) && 'text' in rowValueObj ? rowValueObj.text : rowValueObj;
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  return advancedFilter(headerValue, safeStringify(rowValue), ...args);
};

},{"./../filters/advanced":18,"es5-util/js/isObject":11,"es5-util/js/safeStringify":13}],20:[function(require,module,exports){
"use strict";

const getSize = require('./../helpers/getSize');
const minMaxFilter = require('./../filters/minMax');
module.exports = function (headerValue, rowValue) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  return minMaxFilter(headerValue, getSize(rowValue), ...args);
};

},{"./../filters/minMax":21,"./../helpers/getSize":33}],21:[function(require,module,exports){
"use strict";

module.exports = function (headerValue, rowValue, rowData, filterParams) {
  if ((headerValue.start !== '' || headerValue.end !== '') && rowValue == null) {
    return false;
  }
  if (rowValue || rowValue === 0 || rowValue === '') {
    if (headerValue.start !== '') {
      if (headerValue.end !== '') {
        return rowValue >= headerValue.start && rowValue <= headerValue.end;
      } else {
        return rowValue >= headerValue.start;
      }
    } else if (headerValue.end !== '') {
      return rowValue <= headerValue.end;
    }
  }
  return true;
};

},{}],22:[function(require,module,exports){
"use strict";

const isObject = require('es5-util/js/isObject');
const minMaxFilter = require('./../filters/minMax');
module.exports = function (headerValue, rowValue) {
  var keySize = isObject(rowValue) ? Object.keys(rowValue).length : +!!rowValue;
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  return minMaxFilter(headerValue, keySize, ...args);
};

},{"./../filters/minMax":21,"es5-util/js/isObject":11}],23:[function(require,module,exports){
"use strict";

module.exports = function (headerValue, rowValue, rowData, filterParams) {
  return new RegExp(headerValue).test(rowValue);
};

},{}],24:[function(require,module,exports){
"use strict";

const minMaxFilter = require('./../filters/minMax');
const getKey = require("es5-util/js/getKey");
const intervals = require('./../helpers/intervals');
module.exports = function (headerValue, rowValue, rowData, filterParams) {
  if ((headerValue.start !== '' || headerValue.end !== '') && rowValue == null) {
    return false;
  }
  let startTime = getKey(filterParams, 'startTime', Date.now() / 1000);
  if (typeof startTime === 'function') {
    startTime = startTime();
  }
  const timeAgo = Math.floor(startTime - rowValue);
  rowValue = timeAgo / getKey(intervals, getKey(filterParams, 'searchBy', 'm')[0], intervals.m);
  return minMaxFilter(headerValue, rowValue, rowData, filterParams);
};

},{"./../filters/minMax":21,"./../helpers/intervals":36,"es5-util/js/getKey":5}],25:[function(require,module,exports){
"use strict";

const toAssociativeArray = require('es5-util/js/toAssociativeArray');
const hasKey = require('es5-util/js/hasKey');
const getKey = require('es5-util/js/getKey');
const isInteger = require('es5-util/js/isInteger');
const toHtmlEntities = require('es5-util/js/toHtmlEntities');
const formatString = require('./../helpers/formatString');
function formatArg(arg) {
  let formatterParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let type = arg.type,
    text = arg.text,
    titleText = arg.text;
  if (type === 'string') {
    text = formatString(arg.text, formatterParams);
    titleText = toHtmlEntities(titleText);
  } else if (type === 'same') {
    text = '(same)';
    titleText = 'This value did not change';
  }
  return `<span title="(${type}) ${titleText}" data-type="${type}">${text}</span>`;
}
function getType(input) {
  let type = Object.prototype.toString.call(input).replace('[object ', '').replace(']', '').toLowerCase();
  if (isInteger(input)) {
    type = 'integer';
  } else if (type === 'number' && ![NaN, Infinity].includes(input)) {
    type = 'float';
  } else if (input === '(same)') {
    type = 'same';
  } else if (type === 'function') {
    type = 'callable';
  }
  let text = String(input);
  if (input === '') {
    text = '(empty)';
  } else if (type === 'array') {
    text = `array[${input.length}]`;
  } else if (type === 'object') {
    text = `object{${Object.keys(input).length}}`;
  } else if (type === 'callable') {
    text = 'Function()';
  }
  return {
    type,
    text
  };
}
module.exports = function (cell, formatterParams, onRendered) {
  if (cell.getValue() == null) {
    return '';
  }
  const defaultType = getKey(formatterParams, 'type');
  var values = [];
  var args = Array.isArray(cell.getValue()) ? cell.getValue() : [cell.getValue()];
  args.forEach(function (arg) {
    if (hasKey(arg, 'type')) {
      values.push(formatArg(arg, formatterParams));
    } else if (defaultType) {
      values.push(formatArg({
        type: defaultType,
        text: arg
      }, formatterParams));
    } else {
      values.push(formatArg(getType(arg), formatterParams));
    }
  });
  return (formatterParams.prefix ?? '<div>') + toAssociativeArray(values).join(formatterParams.join ?? "\n") + (formatterParams.suffix ?? '</div>');
};
module.exports.getType = formatArg;
module.exports.getType = getType;

},{"./../helpers/formatString":32,"es5-util/js/getKey":5,"es5-util/js/hasKey":8,"es5-util/js/isInteger":10,"es5-util/js/toAssociativeArray":14,"es5-util/js/toHtmlEntities":15}],26:[function(require,module,exports){
"use strict";

const getSize = require("../helpers/getSize");
module.exports = function (cell, formatterParams, onRendered) {
  return getSize(cell.getValue());
};

},{"../helpers/getSize":33}],27:[function(require,module,exports){
"use strict";

const isObject = require('es5-util/js/isObject');
module.exports = function (cell, formatterParams, onRendered) {
  var files = cell.getValue();
  if (isObject(files) && ('text' in files || 'url' in files)) {
    files = [files];
  }
  if (!Array.isArray(files)) {
    return '';
  }
  formatterParams.className ?? (formatterParams.className = 'debug-bar-file-link-format debug-bar-ide-link');
  var links = files.map(function (file) {
    if (file.url && !file.text) {
      file.text = file.url;
    }
    return file.url ? `<a href="${file.url}" target="_blank" class="${formatterParams.className}">${file.text}</a>` : file.text ?? '';
  });
  return links.join(formatterParams.join || " | ");
};

},{"es5-util/js/isObject":11}],28:[function(require,module,exports){
"use strict";

const isObject = require('es5-util/js/isObject');
const toAssociativeArray = require('es5-util/js/toAssociativeArray');
const formatString = require('./../helpers/formatString');
module.exports = function (cell, formatterParams, onRendered) {
  const params = {
    ...{
      whiteSpace: 'pre',
      textLimit: false,
      htmlChars: false,
      space: 0
    },
    ...formatterParams
  };
  var values = cell.getValue();
  if (isObject(values) && !Array.isArray(values)) {
    var content = JSON.stringify(values, null, params.space);
    params.prefix ?? (params.prefix = params.whiteSpace ? `<div style="white-space: ${params.whiteSpace}">` : '');
    params.suffix ?? (params.suffix = params.whiteSpace ? `</div>` : '');
    return formatString(content, params);
  }
  return formatString(toAssociativeArray(values).join(params.join ?? '<br>'), params);
};
module.exports.byKeys = function (cell, formatterParams, onRendered) {
  var value = cell.getValue();
  return isObject(value) ? Object.keys(value).length : +!!value;
};

},{"./../helpers/formatString":32,"es5-util/js/isObject":11,"es5-util/js/toAssociativeArray":14}],29:[function(require,module,exports){
"use strict";

const getKey = require("es5-util/js/getKey");
const intervals = require('./../helpers/intervals');
module.exports = function (cell, formatterParams, onRendered) {
  if (!cell.getValue() || cell.getValue() <= 1) {
    return '<span title="Invalid Date">-</span>';
  }
  let startTime = getKey(formatterParams, 'startTime', Date.now() / 1000);
  if (typeof startTime === 'function') {
    startTime = startTime();
  }
  const timeAgo = Math.floor(startTime - (cell.getValue() || 0));
  let interval;
  const timeAgoAbs = Math.abs(timeAgo);
  if (timeAgoAbs < 60) {
    interval = 's';
  } else if (timeAgoAbs < 5970) {
    interval = 'm';
  } else if (timeAgoAbs < 86400) {
    interval = 'h';
  } else if (timeAgoAbs < 31536000) {
    interval = 'd';
  } else {
    interval = 'y';
  }
  const dateObject = new Date(startTime - timeAgo * 1000);
  const timeAgoFormatted = Math[getKey(formatterParams, 'round', 'floor')](timeAgo / intervals[interval[0]]) + interval;
  return `<span title="${dateObject.toLocaleString()}">${timeAgoFormatted}</span>`;
};

},{"./../helpers/intervals":36,"es5-util/js/getKey":5}],30:[function(require,module,exports){
"use strict";

const isObject = require('es5-util/js/isObject');
function getHtmlTag(args) {
  if (!args) {
    return false;
  }
  args.tag ?? (args.tag = 'a');
  let attributes = Object.entries(args.attr).map(_ref => {
    let [key, value] = _ref;
    return `${key}="${String(value).replace(/"/g, '&quot;')}"`;
  }).join(' ');
  return `<${args.tag} ${attributes}>${args.text}</${args.tag}>`;
}
function normalizeArgs() {
  let args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  args.text = args.text ?? args.content ?? null;
  args.attr ?? (args.attr = {});
  args.attr.href = args.href ?? args.url ?? args.attr.href ?? args.attr.url ?? null;
  args.attr.class = args.class ?? args.className ?? args.attr.class ?? args.attr.className ?? null;
  delete args.href;
  delete args.url;
  delete args.attr.url;
  if (!args.attr.href) {
    delete args.attr.href;
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
function mergeArgs(value) {
  var _normalizedValue, _normalizedValue$attr, _normalizedValue2;
  let formatterParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let cell = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let normalizedValue = {};
  if (value && typeof value === 'string') {
    normalizedValue = {
      tag: 'a',
      attr: {
        href: value,
        target: '_blank'
      },
      text: value
    };
  } else if (isObject(value)) {
    normalizedValue = normalizeArgs({
      ...value
    });
  }
  const normalizedParams = normalizeArgs({
    ...formatterParams
  });
  Object.entries(normalizedParams ?? {}).map(_ref2 => {
    let [name, item] = _ref2;
    if (!(name in normalizedValue) || typeof normalizedValue[name] !== 'function' && typeof item === 'function') {
      normalizedValue[name] = item;
    }
  });
  Object.entries(normalizedParams.attr ?? {}).map(_ref3 => {
    let [name, item] = _ref3;
    if (!(name in normalizedValue.attr) || typeof normalizedValue.attr[name] !== 'function' && typeof item === 'function') {
      normalizedValue.attr[name] = item;
    }
  });
  Object.entries(normalizedValue ?? {}).map(_ref4 => {
    let [name, item] = _ref4;
    if (typeof item === 'function') {
      normalizedValue[name] = item(cell, value, normalizedValue);
    }
  });
  Object.entries(normalizedValue.attr ?? {}).map(_ref5 => {
    let [name, item] = _ref5;
    if (typeof item === 'function') {
      normalizedValue.attr[name] = item(cell, value, normalizedValue);
    }
  });
  if (!((_normalizedValue = normalizedValue) !== null && _normalizedValue !== void 0 && (_normalizedValue$attr = _normalizedValue.attr) !== null && _normalizedValue$attr !== void 0 && _normalizedValue$attr.href) && !((_normalizedValue2 = normalizedValue) !== null && _normalizedValue2 !== void 0 && _normalizedValue2.text)) {
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

},{"es5-util/js/isObject":11}],31:[function(require,module,exports){
"use strict";

const safeStringify = require('es5-util/js/safeStringify');
function stripQuotes(keyword) {
  if (keyword.startsWith('"') && keyword.endsWith('"')) {
    return JSON.parse(keyword);
  }
  return keyword;
}
module.exports = function (keyword, content) {
  keyword = safeStringify(keyword);
  content = safeStringify(content);
  if (keyword.startsWith('regex:i:')) {
    if (!new RegExp(stripQuotes(keyword.slice(8)), 'i').test(content)) {
      return false;
    }
  } else if (keyword.startsWith('i:')) {
    if (!content.toLowerCase().includes(stripQuotes(keyword.slice(2)).toLowerCase())) {
      return false;
    }
  } else if (keyword.startsWith('regex:')) {
    if (!new RegExp(stripQuotes(keyword.slice(6))).test(content)) {
      return false;
    }
  } else if (keyword.startsWith('not:')) {
    if (content.includes(stripQuotes(keyword.slice(4)))) {
      return false;
    }
  } else if (keyword.startsWith('-')) {
    if (content.includes(stripQuotes(keyword.slice(1)))) {
      return false;
    }
  } else if (keyword.startsWith('+')) {
    if (!content.includes(stripQuotes(keyword.slice(1)))) {
      return false;
    }
  } else if (!content.includes(keyword)) {
    return false;
  }
  return true;
};

},{"es5-util/js/safeStringify":13}],32:[function(require,module,exports){
"use strict";

const truncate = require('es5-util/js/truncate');
const toHtmlEntities = require('es5-util/js/toHtmlEntities');
const getKeys = require("es5-util/js/getKeys");
module.exports = function (content) {
  let formatterParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const modify = getKeys(formatterParams, 'modify', false);
  const textLimit = getKeys(formatterParams, 'textLimit', false);
  const moreText = getKeys(formatterParams, 'moreText', '...');
  const htmlChars = getKeys(formatterParams, 'htmlChars', false);
  const prefix = getKeys(formatterParams, 'prefix', '');
  const suffix = getKeys(formatterParams, 'suffix', '');
  if (modify) {
    content = modify(content, {
      ...formatterParams,
      ...{
        textLimit,
        moreText,
        htmlChars,
        prefix,
        suffix
      }
    });
  }
  if (content == null) {
    return '';
  }
  content = textLimit ? truncate(content, textLimit, moreText) : content;
  content = htmlChars ? toHtmlEntities(content) : content;
  return prefix + content + suffix;
};

},{"es5-util/js/getKeys":6,"es5-util/js/toHtmlEntities":15,"es5-util/js/truncate":16}],33:[function(require,module,exports){
"use strict";

module.exports = function (items) {
  return Array.isArray(items) ? items.length : +![undefined, null, false, '', '0', 0].includes(items);
};

},{}],34:[function(require,module,exports){
"use strict";

const isObject = require('es5-util/js/isObject');
module.exports = function (condition, content, params, cell, onRendered) {
  let e = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  if (typeof condition === 'boolean') {
    return condition;
  }
  if (condition instanceof Function) {
    return condition(content, params, cell, onRendered, e);
  }
  if (Object.prototype.toString.call(condition) === '[object RegExp]') {
    return condition.test(content);
  }
  return condition < (isObject(cell.getValue()) ? JSON.stringify(cell.getValue(), null, 0) : cell.getValue()).length;
};

},{"es5-util/js/isObject":11}],35:[function(require,module,exports){
"use strict";

function indexOf(haystack) {
  let needle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "\n";
  let offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return haystack.split(needle).slice(0, offset).join(needle).length;
}
function indexOfFn() {
  let needle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "\n";
  let offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return function (haystack) {
    return haystack.split(needle).slice(0, offset).join(needle).length;
  };
}
function indexOfNlFn() {
  let offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  const needle = "\n";
  return function (haystack) {
    return haystack.split(needle).slice(0, offset).join(needle).length;
  };
}
module.exports = indexOf;
module.exports.fn = indexOfFn;
module.exports.nl = indexOfNlFn;

},{}],36:[function(require,module,exports){
"use strict";

module.exports = {
  s: 1,
  m: 60,
  h: 60 * 60,
  d: 60 * 60 * 24,
  y: 60 * 60 * 24 * 365
};

},{}],37:[function(require,module,exports){
"use strict";

module.exports = function (key, values) {
  if (!Array.isArray(values)) {
    values = [values];
  }
  for (var _len = arguments.length, objects = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    objects[_key - 2] = arguments[_key];
  }
  for (var object of objects) {
    for (var value of values) {
      if (typeof object === 'object' && key in object && object[key] === value) {
        return value;
      }
    }
  }
  return false;
};

},{}],38:[function(require,module,exports){
"use strict";

const getKey = require("es5-util/js/getKey");
function sum(values) {
  let data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let prefix = getKey(params, 'prefix', '');
  let suffix = getKey(params, 'suffix', '');
  let locales = getKey(params, 'locales', undefined);
  let options = getKey(params, 'options', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  return prefix + values.reduce(function (a, b) {
    return a + b;
  }, 0).toLocaleString(locales, options) + suffix;
}
module.exports = sum;

},{"es5-util/js/getKey":5}],39:[function(require,module,exports){
"use strict";

module.exports = {
  valuesLookup: function (component) {
    let filterTerm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var set = new Set(),
      field = component.getField();
    component.getTable().getData().forEach(function (row) {
      let values = row[field];
      values = Array.isArray(values) ? values : [values];
      values.forEach(function (value) {
        set.add(value);
      });
    });
    return set.size ? Array.from(set).sort() : [];
  }
};

},{}],40:[function(require,module,exports){
"use strict";

module.exports = function (cell, onRendered, success, cancel, params) {
  var start = document.createElement('input'),
    end = document.createElement('input'),
    container = document.createElement('span');
  function buildValues() {
    success({
      start: start.value,
      end: end.value
    });
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

},{}],41:[function(require,module,exports){
"use strict";

module.exports = function (column, data, initial, options, element) {
  if ('src' in column) {
    column.title = `<img alt="${column.title}" title="${column.title}" src="${column.src}" style="max-width: 100%;" />`;
    delete column.src;
  }
  return {
    ...{
      vertAlign: 'middle',
      hozAlign: 'center',
      headerHozAlign: 'center',
      headerTooltip: true
    },
    ...column
  };
};

},{}],42:[function(require,module,exports){
"use strict";

const isType = require('../helpers/isType');
const argsFilter = require('./../filters/args');
const argsFormatter = require('./../formatters/args');
const argsSorter = require('./../sorters/args');
const formatters = ['args', 'argument', 'arguments', 'params', 'parameter', 'parameters'];
module.exports = function (column, data, initial, options, element) {
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  column.headerFilter ?? (column.headerFilter = 'input');
  column.headerFilterFunc ?? (column.headerFilterFunc = argsFilter);
  column.formatter = column.formatterOutput ?? argsFormatter;
  delete column.formatterOutput;
  column.sorter ?? (column.sorter = argsSorter);
  column.hozAlign ?? (column.hozAlign = 'left');
  return column;
};
module.exports.formatter = formatters;

},{"../helpers/isType":37,"./../filters/args":19,"./../formatters/args":25,"./../sorters/args":58}],43:[function(require,module,exports){
"use strict";

const isType = require('../helpers/isType');
const formatters = ['bool', 'boolean', 'tickCross'];
module.exports = function (column, data, initial, options, element) {
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  column.formatter = column.formatterOutput ?? 'tickCross';
  delete column.formatterOutput;
  return {
    ...{
      formatterParams: {
        allowEmpty: true,
        allowTruthy: true
      },
      sorter: 'boolean',
      headerFilter: 'tickCross',
      headerFilterParams: {
        'tristate': true
      }
    },
    ...column
  };
};
module.exports.formatter = formatters;

},{"../helpers/isType":37}],44:[function(require,module,exports){
"use strict";

const isType = require('../helpers/isType');
const advancedFilter = require('./../filters/advanced');
const filesFormatter = require('./../formatters/files');
const objectSorter = require('./../sorters/object');
const formatters = ['file', 'files'];
module.exports = function (column, data, initial, options, element) {
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  column.headerFilter ?? (column.headerFilter = 'input');
  column.headerFilterFuncParams ?? (column.headerFilterFuncParams = {
    strict: false
  });
  column.headerFilterFunc ?? (column.headerFilterFunc = advancedFilter);
  column.formatter = column.formatterOutput ?? filesFormatter;
  delete column.formatterOutput;
  column.sorter ?? (column.sorter = objectSorter);
  return column;
};
module.exports.formatter = formatters;

},{"../helpers/isType":37,"./../filters/advanced":18,"./../formatters/files":27,"./../sorters/object":60}],45:[function(require,module,exports){
"use strict";

const isType = require('../helpers/isType');
const objectSorter = require("../sorters/object");
const formatters = ['list'];
module.exports = function (column, data, initial, options, element) {
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  column.headerFilter ?? (column.headerFilter = 'list');
  column.headerFilterParams ?? (column.headerFilterParams = {
    clearable: true,
    sort: 'asc',
    valuesLookup: true
  });
  column.sorter ?? (column.sorter = objectSorter);
  column.formatter = column.formatterOutput ?? column.formatter;
  delete column.formatterOutput;
  return column;
};
module.exports.formatter = formatters;

},{"../helpers/isType":37,"../sorters/object":60}],46:[function(require,module,exports){
"use strict";

const isType = require('../helpers/isType');
const {
  valuesLookup
} = require('./../html/list[]');
const arraySorter = require("../sorters/array");
const formatters = ['list[]'];
module.exports = function (column, data, initial, options, element) {
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  column.headerFilter ?? (column.headerFilter = 'list');
  column.headerFilterParams ?? (column.headerFilterParams = {
    clearable: true,
    valuesLookup
  });
  column.headerFilterFunc ?? (column.headerFilterFunc = function (headerValue, rowValue, rowData) {
    let filterParams = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return rowValue.includes(headerValue);
  });
  column.sorter ?? (column.sorter = arraySorter);
  column.formatter = column.formatterOutput ?? column.formatter;
  delete column.formatterOutput;
  return column;
};
module.exports.formatter = formatters;

},{"../helpers/isType":37,"../sorters/array":59,"./../html/list[]":39}],47:[function(require,module,exports){
"use strict";

const arrayColumn = require('es5-util/js/arrayColumn');
const getKeys = require("es5-util/js/getKeys");
const isType = require('../helpers/isType');
const minMaxDom = require('../html/minMax');
const minMaxFilter = require('../filters/minMax');
const sum = require("../helpers/sum");
const formatters = ['minMax', 'min', 'max'];
module.exports = function (column, data, initial, options, element) {
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  const bottomSum = getKeys(column, 'formatterParams.bottomSum', false);
  var values = data.length ? arrayColumn(data, column.field) : [];
  column.headerFilterParams ?? (column.headerFilterParams = {
    min: values.length ? Math.min(...values) : false,
    max: values.length ? Math.max(...values) : false,
    filterMin: ['minMax', 'min'].includes(type),
    filterMax: ['minMax', 'max'].includes(type)
  });
  column.headerFilter ?? (column.headerFilter = minMaxDom);
  column.headerFilterFunc ?? (column.headerFilterFunc = minMaxFilter);
  column.headerFilterLiveFilter ?? (column.headerFilterLiveFilter = false);
  if (bottomSum) {
    column.bottomCalc ?? (column.bottomCalc = sum);
  }
  column.formatter = column.formatterOutput ?? column.formatter;
  delete column.formatterOutput;
  return column;
};
module.exports.formatter = formatters;

},{"../filters/minMax":21,"../helpers/isType":37,"../helpers/sum":38,"../html/minMax":40,"es5-util/js/arrayColumn":2,"es5-util/js/getKeys":6}],48:[function(require,module,exports){
"use strict";

const arrayColumn = require('es5-util/js/arrayColumn');
const getKeys = require("es5-util/js/getKeys");
const isType = require('../helpers/isType');
const getSize = require('../helpers/getSize');
const arrayFilter = require('./../filters/array');
const arrayFormatter = require('./../formatters/array');
const arraySorter = require('./../sorters/array');
const minMaxDom = require("../html/minMax");
const objectPopup = require("../popups/object");
const formatters = ['minMax[]', 'min[]', 'max[]'];
module.exports = function (column, data, initial, options, element) {
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  const showPopup = getKeys(column, 'formatterParams.showPopup', false);
  var values = data.length ? arrayColumn(data, column.field) : [];
  values = values.map(value => getSize(value));
  column.headerFilterParams ?? (column.headerFilterParams = {
    min: values.length ? Math.min(...values) : false,
    max: values.length ? Math.max(...values) : false,
    filterMin: ['minMax[]', 'min[]'].includes(type),
    filterMax: ['minMax[]', 'max[]'].includes(type)
  });
  column.headerFilter ?? (column.headerFilter = minMaxDom);
  column.headerFilterFunc ?? (column.headerFilterFunc = arrayFilter);
  column.headerFilterLiveFilter ?? (column.headerFilterLiveFilter = false);
  column.formatter = column.formatterOutput ?? arrayFormatter;
  delete column.formatterOutput;
  column.headerSortStartingDir ?? (column.headerSortStartingDir = 'desc');
  column.sorter ?? (column.sorter = arraySorter);
  if (showPopup) {
    column.clickPopup = objectPopup;
  }
  return column;
};
module.exports.formatter = formatters;

},{"../helpers/getSize":33,"../helpers/isType":37,"../html/minMax":40,"../popups/object":57,"./../filters/array":20,"./../formatters/array":26,"./../sorters/array":59,"es5-util/js/arrayColumn":2,"es5-util/js/getKeys":6}],49:[function(require,module,exports){
"use strict";

const arrayColumn = require('es5-util/js/arrayColumn');
const getKeys = require("es5-util/js/getKeys");
const isType = require('../helpers/isType');
const objectFilter = require('./../filters/object');
const objectFormatter = require('./../formatters/object');
const objectSorter = require('./../sorters/object');
const minMaxDom = require("../html/minMax");
const objectPopup = require("../popups/object");
const formatters = ['minMax{}', 'min{}', 'max{}'];
module.exports = function (column, data, initial, options, element) {
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  const showPopup = getKeys(column, 'formatterParams.showPopup', false);
  var values = data.length ? arrayColumn(data, column.field) : [];
  values = values.map(value => value ? Object.keys(value).length : 0);
  column.headerFilterParams ?? (column.headerFilterParams = {
    min: values.length ? Math.min(...values) : false,
    max: values.length ? Math.max(...values) : false,
    filterMin: ['minMax{}', 'min{}'].includes(type),
    filterMax: ['minMax{}', 'max{}'].includes(type)
  });
  column.headerFilter ?? (column.headerFilter = minMaxDom);
  column.headerFilterFunc ?? (column.headerFilterFunc = objectFilter);
  column.headerFilterLiveFilter ?? (column.headerFilterLiveFilter = false);
  column.formatter = column.formatterOutput ?? objectFormatter.byKeys;
  delete column.formatterOutput;
  column.headerSortStartingDir ?? (column.headerSortStartingDir = 'desc');
  column.sorter ?? (column.sorter = objectSorter.byKeys);
  if (showPopup) {
    column.clickPopup = objectPopup;
  }
  return column;
};
module.exports.formatter = formatters;

},{"../helpers/isType":37,"../html/minMax":40,"../popups/object":57,"./../filters/object":22,"./../formatters/object":28,"./../sorters/object":60,"es5-util/js/arrayColumn":2,"es5-util/js/getKeys":6}],50:[function(require,module,exports){
"use strict";

const isType = require('../helpers/isType');
const formatters = ['number', 'num', 'int', 'integer'];
module.exports = function (column, data, initial, options, element) {
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  column.headerFilter ?? (column.headerFilter = 'number');
  column.sorter ?? (column.sorter = 'number');
  column.formatter = column.formatterOutput ?? column.formatter;
  delete column.formatterOutput;
  return column;
};
module.exports.formatter = formatters;

},{"../helpers/isType":37}],51:[function(require,module,exports){
"use strict";

const isType = require('../helpers/isType');
const advancedFilter = require('./../filters/advanced');
const objectFormatter = require('./../formatters/object');
const objectSorter = require('./../sorters/object');
const objectPopup = require('./../popups/object');
const getKeys = require('es5-util/js/getKeys');
const formatters = ['object', 'obj', 'compound'];
module.exports = function (column, data, initial, options, element) {
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  const showKeys = getKeys(column, 'formatterParams.showKeys', false);
  const showPopup = getKeys(column, 'formatterParams.showPopup', getKeys(column, 'formatterParams.textLimit', showKeys));
  column.headerFilter ?? (column.headerFilter = 'input');
  column.headerFilterFuncParams ?? (column.headerFilterFuncParams = {
    strict: false
  });
  column.headerFilterFunc ?? (column.headerFilterFunc = advancedFilter);
  if (showKeys) {
    column.headerFilterLiveFilter ?? (column.headerFilterLiveFilter = true);
    column.formatter = column.formatterOutput ?? objectFormatter.byKeys;
    column.headerSortStartingDir ?? (column.headerSortStartingDir = 'desc');
    column.sorter ?? (column.sorter = objectSorter.byKeys);
  } else {
    column.formatter = column.formatterOutput ?? objectFormatter;
    column.sorter ?? (column.sorter = objectSorter);
    column.hozAlign ?? (column.hozAlign = 'left');
  }
  delete column.formatterOutput;
  if (showPopup) {
    column.clickPopup = objectPopup;
  }
  return column;
};
module.exports.formatter = formatters;

},{"../helpers/isType":37,"./../filters/advanced":18,"./../formatters/object":28,"./../popups/object":57,"./../sorters/object":60,"es5-util/js/getKeys":6}],52:[function(require,module,exports){
"use strict";

const isType = require('../helpers/isType');
const formatters = ['regex', 'RegExp'];
module.exports = function (column, data, initial, options, element) {
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  column.headerFilter ?? (column.headerFilter = 'input');
  column.headerFilterFunc ?? (column.headerFilterFunc = function (headerValue, rowValue, rowData, filterParams) {
    return new RegExp(rowValue).test(headerValue);
  });
  column.hozAlign ?? (column.hozAlign = 'left');
  column.formatter = column.formatterOutput ?? column.formatter;
  delete column.formatterOutput;
  return column;
};
module.exports.formatter = formatters;

},{"../helpers/isType":37}],53:[function(require,module,exports){
"use strict";

const isType = require('../helpers/isType');
const objectPopup = require('./../popups/object');
const formatString = require('./../helpers/formatString');
const advancedFilter = require("../filters/advanced");
const formatters = ['string', 'str', 'text', 'html'];
module.exports = function (column, data, initial, options, element) {
  var _column$formatterPara, _column$formatterPara2, _column$formatterPara3;
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  column.formatterParams ?? (column.formatterParams = {});
  (_column$formatterPara = column.formatterParams).textLimit ?? (_column$formatterPara.textLimit = false);
  (_column$formatterPara2 = column.formatterParams).htmlChars ?? (_column$formatterPara2.htmlChars = type === 'html');
  (_column$formatterPara3 = column.formatterParams).showPopup ?? (_column$formatterPara3.showPopup = column.formatterParams.textLimit);
  column.headerFilter ?? (column.headerFilter = 'input');
  if (column.formatterParams.textLimit) {
    column.formatter = column.formatterOutput ?? function (cell, formatterParams, onRendered) {
      return formatString(cell.getValue(), formatterParams);
    };
    if (column.formatterParams.showPopup) {
      column.clickPopup = objectPopup;
    }
  } else {
    column.formatter = column.formatterOutput ?? column.formatter;
  }
  delete column.formatterOutput;
  if (['text', 'html'].includes(type)) {
    column.hozAlign ?? (column.hozAlign = 'left');
    column.headerFilterFunc ?? (column.headerFilterFunc = advancedFilter);
  }
  return column;
};
module.exports.formatter = formatters;

},{"../filters/advanced":18,"../helpers/isType":37,"./../helpers/formatString":32,"./../popups/object":57}],54:[function(require,module,exports){
"use strict";

const isType = require('../helpers/isType');
const minMaxDom = require("../html/minMax");
const timeAgoFilter = require("../filters/timeAgo");
const timeAgoFormatter = require("../formatters/timeAgo");
const formatters = ['timeAgo', 'minTimeAgo', 'maxTimeAgo'];
module.exports = function (column, data, initial, options, element) {
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  column.headerFilterParams ?? (column.headerFilterParams = {
    min: false,
    max: false,
    filterMin: ['timeAgo', 'minTimeAgo'].includes(type),
    filterMax: ['timeAgo', 'maxTimeAgo'].includes(type)
  });
  column.headerFilter ?? (column.headerFilter = minMaxDom);
  column.headerFilterFuncParams ?? (column.headerFilterFuncParams = {
    searchBy: 'm'
  });
  column.headerFilterFunc ?? (column.headerFilterFunc = timeAgoFilter);
  column.headerFilterLiveFilter ?? (column.headerFilterLiveFilter = false);
  column.formatterParams ?? (column.formatterParams = {});
  column.formatter = column.formatterOutput ?? timeAgoFormatter;
  delete column.formatterOutput;
  return column;
};
module.exports.formatter = formatters;

},{"../filters/timeAgo":24,"../formatters/timeAgo":29,"../helpers/isType":37,"../html/minMax":40}],55:[function(require,module,exports){
"use strict";

const arrayColumn = require("es5-util/js/arrayColumn");
const getKeys = require('es5-util/js/getKeys');
const isType = require('../helpers/isType');
const minMaxDom = require("../html/minMax");
const minMaxFilter = require("../filters/minMax");
const sum = require("../helpers/sum");

// `timeMs*` to be deprecated in future versions, use `duration*` instead
const formatters = ['duration', 'minDuration', 'maxDuration', 'timeMs', 'minTimeMs', 'maxTimeMs'];
module.exports = function (column, data, initial, options, element) {
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  const unit = getKeys(column, 'formatterParams.unit', 'ms');
  const prefix = getKeys(column, 'formatterParams.prefix', '');
  const suffix = getKeys(column, 'formatterParams.suffix', ' ' + unit);
  const precision = getKeys(column, 'formatterParams.precision', 2);
  const bottomSum = getKeys(column, 'formatterParams.bottomSum', false);
  var values = data.length ? arrayColumn(data, column.field) : [];
  column.headerFilterParams ?? (column.headerFilterParams = {
    min: values.length ? Math.min(...values) : false,
    max: values.length ? Math.max(...values) : false,
    filterMin: ['duration', 'minDuration', 'timeMs', 'minTimeMs'].includes(type),
    filterMax: ['duration', 'maxDuration', 'timeMs', 'maxTimeMs'].includes(type)
  });
  column.headerFilter ?? (column.headerFilter = minMaxDom);
  column.headerFilterFunc ?? (column.headerFilterFunc = minMaxFilter);
  column.headerFilterLiveFilter ?? (column.headerFilterLiveFilter = false);
  column.formatter = column.formatterOutput ?? function (cell, formatterParams, onRendered) {
    return prefix + cell.getValue().toLocaleString(undefined, {
      minimumFractionDigits: precision,
      maximumFractionDigits: precision
    }) + suffix;
  };
  if (bottomSum) {
    column.bottomCalc ?? (column.bottomCalc = sum);
  }
  column.hozAlign ?? (column.hozAlign = 'right');
  delete column.formatterOutput;
  return column;
};
module.exports.formatter = formatters;

},{"../filters/minMax":21,"../helpers/isType":37,"../helpers/sum":38,"../html/minMax":40,"es5-util/js/arrayColumn":2,"es5-util/js/getKeys":6}],56:[function(require,module,exports){
"use strict";

const isType = require('../helpers/isType');
const urlsFormatter = require('./../formatters/urls');
const formatters = ['url', 'urls'];
module.exports = function (column, data, initial, options, element) {
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  column.headerFilter ?? (column.headerFilter = 'input');
  column.hozAlign ?? (column.hozAlign = 'left');
  column.formatter = column.formatterOutput ?? urlsFormatter;
  delete column.formatterOutput;
  return column;
};
module.exports.formatter = formatters;

},{"../helpers/isType":37,"./../formatters/urls":30}],57:[function(require,module,exports){
"use strict";

const isObject = require('es5-util/js/isObject');
const getKeys = require('es5-util/js/getKeys');
const toHtmlEntities = require('es5-util/js/toHtmlEntities');
const hasPopup = require('./../helpers/hasPopup');
const formatString = require('./../helpers/formatString');
module.exports = function (e, component, onRendered) {
  let content = component.getValue();
  const column = component.getColumn().getDefinition() || {};
  const showPopup = getKeys(column, 'formatterParams.showPopup', true);
  if (content == null || showPopup === false) {
    return null;
  }
  let formatterParams = {
    ...(column.formatterParams ?? {})
  };
  formatterParams.textLimit = formatterParams.popupTextLimit ?? false;
  formatterParams.moreText = formatterParams.popupMoreText ?? '...';
  formatterParams.htmlChars = formatterParams.popupHtmlChars ?? formatterParams.htmlChars ?? false;
  formatterParams.whiteSpace = formatterParams.popupWhiteSpace ?? formatterParams.whiteSpace ?? 'pre';
  formatterParams.space = formatterParams.popupSpace ?? formatterParams.space ?? 4;
  formatterParams.modify = formatterParams.popupModify ?? false;
  if (isObject(content)) {
    content = JSON.stringify(content, null, formatterParams.space);
  }
  if (!hasPopup(showPopup, content, formatterParams, component, onRendered, e)) {
    return null;
  }
  formatterParams.prefix = formatterParams.popupPrefix ?? `<div style="white-space: ${formatterParams.whiteSpace}; max-width: 50vw; max-height: 50vh">`;
  formatterParams.suffix = formatterParams.popupSuffix ?? `</div>`;
  return formatString(content, formatterParams);
};

},{"./../helpers/formatString":32,"./../helpers/hasPopup":34,"es5-util/js/getKeys":6,"es5-util/js/isObject":11,"es5-util/js/toHtmlEntities":15}],58:[function(require,module,exports){
"use strict";

const isObject = require('es5-util/js/isObject');
const objectSorter = require('../sorters/object');
module.exports = function (o1, o2) {
  var a = isObject(o1) && 'text' in o1 ? o1.text : o1,
    b = isObject(o2) && 'text' in o2 ? o2.text : o2;
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  return objectSorter(a, b, ...args);
};

},{"../sorters/object":60,"es5-util/js/isObject":11}],59:[function(require,module,exports){
"use strict";

const getSize = require("../helpers/getSize");
const objectSorter = require("./../sorters/object");
module.exports = function (a, b, aRow, bRow, column, dir, sorterParams) {
  const sizeDiff = getSize(a) - getSize(b);
  if (sizeDiff) {
    return sizeDiff;
  }
  return objectSorter(...arguments);
};

},{"../helpers/getSize":33,"./../sorters/object":60}],60:[function(require,module,exports){
"use strict";

const isObject = require('es5-util/js/isObject');
const compare = require('es5-util/js/compare');
module.exports = function (a, b, aRow, bRow, column, dir, sorterParams) {
  return compare(a, b);
};
module.exports.byKeys = function (a, b, aRow, bRow, column, dir, sorterParams) {
  var aSize = isObject(a) ? Object.keys(a).length : +!!a;
  var bSize = isObject(b) ? Object.keys(b).length : +!!b;
  const sizeDiff = aSize - bSize;
  if (sizeDiff) {
    return sizeDiff;
  }
  return compare(a, b);
};

},{"es5-util/js/compare":3,"es5-util/js/isObject":11}]},{},[1]);
