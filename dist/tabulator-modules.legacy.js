(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
  getSize: require('./src/helpers/getSize'),
  intervals: require('./src/helpers/intervals'),
  isType: require('./src/helpers/isType')
};
module.exports.popups = {
  object: require('./src/popups/object')
};
module.exports.modules = {
  all: require('./src/modules/all')({}),
  args: require('./src/modules/args')({
    formatter: 'args'
  }),
  "boolean": require('./src/modules/boolean')({
    formatter: 'boolean'
  }),
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
  urls: require('./src/modules/urls')({
    formatter: 'urls'
  })
};
if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
  var _window$Tabulator, _window$Tabulator$Cre, _window$Tabulator2, _window$Tabulator2$fi, _window$Tabulator3, _window$Tabulator3$fo, _window$Tabulator4, _window$Tabulator4$so, _window$Tabulator5, _window$Tabulator5$ht, _window$Tabulator6, _window$Tabulator6$he, _window$Tabulator7, _window$Tabulator7$mo;
  (_window$Tabulator$Cre = (_window$Tabulator = window.Tabulator).Create) !== null && _window$Tabulator$Cre !== void 0 ? _window$Tabulator$Cre : _window$Tabulator.Create = module.exports.Create;
  (_window$Tabulator2$fi = (_window$Tabulator2 = window.Tabulator).filters) !== null && _window$Tabulator2$fi !== void 0 ? _window$Tabulator2$fi : _window$Tabulator2.filters = module.exports.filters;
  (_window$Tabulator3$fo = (_window$Tabulator3 = window.Tabulator).formatters) !== null && _window$Tabulator3$fo !== void 0 ? _window$Tabulator3$fo : _window$Tabulator3.formatters = module.exports.formatters;
  (_window$Tabulator4$so = (_window$Tabulator4 = window.Tabulator).sorters) !== null && _window$Tabulator4$so !== void 0 ? _window$Tabulator4$so : _window$Tabulator4.sorters = module.exports.sorters;
  (_window$Tabulator5$ht = (_window$Tabulator5 = window.Tabulator).html) !== null && _window$Tabulator5$ht !== void 0 ? _window$Tabulator5$ht : _window$Tabulator5.html = module.exports.html;
  (_window$Tabulator6$he = (_window$Tabulator6 = window.Tabulator).helpers) !== null && _window$Tabulator6$he !== void 0 ? _window$Tabulator6$he : _window$Tabulator6.helpers = module.exports.helpers;
  (_window$Tabulator7$mo = (_window$Tabulator7 = window.Tabulator).modules) !== null && _window$Tabulator7$mo !== void 0 ? _window$Tabulator7$mo : _window$Tabulator7.modules = module.exports.modules;
}

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./src/Create":16,"./src/filters/advanced":17,"./src/filters/args":18,"./src/filters/array":19,"./src/filters/minMax":20,"./src/filters/object":21,"./src/filters/regex":22,"./src/filters/timeAgo":23,"./src/formatters/args":24,"./src/formatters/array":25,"./src/formatters/files":26,"./src/formatters/object":27,"./src/formatters/timeAgo":28,"./src/formatters/urls":29,"./src/helpers/advancedSearch":30,"./src/helpers/getSize":31,"./src/helpers/intervals":32,"./src/helpers/isType":33,"./src/html/list[]":34,"./src/html/minMax":35,"./src/modules/all":36,"./src/modules/args":37,"./src/modules/boolean":38,"./src/modules/files":39,"./src/modules/list":40,"./src/modules/list[]":41,"./src/modules/minMax":42,"./src/modules/minMax[]":43,"./src/modules/minMax{}":44,"./src/modules/number":45,"./src/modules/object":46,"./src/modules/regex":47,"./src/modules/string":48,"./src/modules/timeAgo":49,"./src/modules/timeMs":50,"./src/modules/urls":51,"./src/popups/object":52,"./src/sorters/args":53,"./src/sorters/array":54,"./src/sorters/object":55}],2:[function(require,module,exports){
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
function hasKeys(object, path, defaultValue) {
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

module.exports = hasKeys;
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
	return typeof object === 'object' && key in object;
}

module.exports = hasKey;
},{}],9:[function(require,module,exports){
function isObject(value) {
	return (typeof value == 'object' || typeof value == 'function') && value !== null;
}

module.exports = isObject;
},{}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
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
},{"./safeParse":10}],12:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
function toHtmlEntities(input) {
	return input.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
};

module.exports = toHtmlEntities;
},{}],14:[function(require,module,exports){
function toString(value, glue, keyGlue) {
	if (typeof value === 'string') {
		return value;
	}

	if (value == null) {
		return '';
	}

	glue = glue != null ? glue : ',';
	keyGlue = typeof keyGlue != 'undefined' ? keyGlue : '=';

	if (typeof value === 'object' || typeof value === 'function') {
		var str = '', currentGlue = '';
		for (var key in value) {
			if (value.hasOwnProperty(key) || typeof value[key] !== 'function') {
				str += currentGlue + ((keyGlue && key != ~~key ? key + keyGlue : '') + value[key]);
				currentGlue = glue;
			}
		}
		return str;
	}

	if (String(value) == '0' && (1 / value) == -(1 / 0)) {
		return '-0';
	}

	return String(value);
}

module.exports = toString;
},{}],15:[function(require,module,exports){
var isObject = require('./isObject');

function truncate(input, length, suffix) {
	suffix = typeof suffix != 'undefined' ? suffix : '&hellip;';
	input = isObject(input) ? JSON.stringify(input) : String(input);
	return (input.length > length) ? input.slice(0, length) + suffix : input;
};

module.exports = truncate;
},{"./isObject":9}],16:[function(require,module,exports){
"use strict";

function _objectValues(obj) {
  var values = [];
  var keys = Object.keys(obj);
  for (var k = 0; k < keys.length; k++) values.push(obj[keys[k]]);
  return values;
}
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var filters = [require('./modules/regex'), require('./modules/timeAgo'), require('./modules/timeMs'), require('./modules/minMax'), require('./modules/minMax{}'), require('./modules/minMax[]'), require('./modules/list[]'), require('./modules/list'), require('./modules/args'), require('./modules/files'), require('./modules/urls'), require('./modules/boolean'), require('./modules/number'), require('./modules/string'), require('./modules/object'), require('./modules/all')];
function Create(element, options) {
  var table,
    parameters = _objectValues(arguments);
  if (typeof jQuery === 'function' && 'publish' in jQuery) {
    options = jQuery.publish('tabulator-table-setup', options, element);
  }
  function updateColumn(column, data) {
    var initial = jQuery.extend(true, {}, column || {});
    if (typeof jQuery === 'function' && 'publish' in jQuery) {
      column = jQuery.publish('tabulator-column-setup', column, data, initial, options, element);
    }
    filters.forEach(function (filter) {
      column = filter(column, data, initial, options, element);
    });
    if (typeof jQuery === 'function' && 'publish' in jQuery) {
      column = jQuery.publish('tabulator-column-setup-after', column, data, initial, options, element);
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
    table = _construct(Tabulator, _toConsumableArray(parameters));
  } else {
    parameters[1] = options;
    table = _construct(Tabulator, _toConsumableArray(parameters));
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
    var _jQuery;
    (_jQuery = jQuery).publish.apply(_jQuery, ['tabulator-table-created', table].concat(_toConsumableArray(parameters)));
  }
  return table;
}
module.exports = Create;

},{"./modules/all":36,"./modules/args":37,"./modules/boolean":38,"./modules/files":39,"./modules/list":40,"./modules/list[]":41,"./modules/minMax":42,"./modules/minMax[]":43,"./modules/minMax{}":44,"./modules/number":45,"./modules/object":46,"./modules/regex":47,"./modules/string":48,"./modules/timeAgo":49,"./modules/timeMs":50,"./modules/urls":51}],17:[function(require,module,exports){
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var advancedSearch = require('../helpers/advancedSearch');
var safeStringify = require('es5-util/js/safeStringify');
module.exports = function (headerValue, rowValue, rowData) {
  var filterParams = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  if (headerValue == null || headerValue === '') {
    return true;
  }
  if (rowValue == null) {
    return headerValue === 'null';
  }
  headerValue = safeStringify(headerValue);
  rowValue = safeStringify(rowValue);
  if ('strict' in filterParams && !filterParams.strict) {
    var _headerValue, _rowValue;
    headerValue = ((_headerValue = headerValue) !== null && _headerValue !== void 0 ? _headerValue : '').toLowerCase();
    rowValue = ((_rowValue = rowValue) !== null && _rowValue !== void 0 ? _rowValue : '').toLowerCase();
  }
  if (!headerValue.includes(' ') && !headerValue.includes(':') && !headerValue.includes('-') && !headerValue.includes('+')) {
    return rowValue.includes(headerValue);
  }
  var keywords = headerValue.match(/(?:[^\s"]+|"[^"]*")+/g);
  var _iterator = _createForOfIteratorHelper(keywords),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var keyword = _step.value;
      if (!advancedSearch(keyword, rowValue)) {
        return false;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return true;
};

},{"../helpers/advancedSearch":30,"es5-util/js/safeStringify":11}],18:[function(require,module,exports){
"use strict";

var isObject = require('es5-util/js/isObject');
var advancedFilter = require('./../filters/advanced');
var safeStringify = require('es5-util/js/safeStringify');
module.exports = function (headerValue, rowValueObj) {
  var rowValue = isObject(rowValueObj) && 'text' in rowValueObj ? rowValueObj.text : rowValueObj;
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  return advancedFilter.apply(void 0, [headerValue, safeStringify(rowValue)].concat(args));
};

},{"./../filters/advanced":17,"es5-util/js/isObject":9,"es5-util/js/safeStringify":11}],19:[function(require,module,exports){
"use strict";

var getSize = require('./../helpers/getSize');
var minMaxFilter = require('./../filters/minMax');
module.exports = function (headerValue, rowValue) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  return minMaxFilter.apply(void 0, [headerValue, getSize(rowValue)].concat(args));
};

},{"./../filters/minMax":20,"./../helpers/getSize":31}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
"use strict";

var isObject = require('es5-util/js/isObject');
var minMaxFilter = require('./../filters/minMax');
module.exports = function (headerValue, rowValue) {
  var keySize = isObject(rowValue) ? Object.keys(rowValue).length : +!!rowValue;
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  return minMaxFilter.apply(void 0, [headerValue, keySize].concat(args));
};

},{"./../filters/minMax":20,"es5-util/js/isObject":9}],22:[function(require,module,exports){
"use strict";

module.exports = function (headerValue, rowValue, rowData, filterParams) {
  return new RegExp(headerValue).test(rowValue);
};

},{}],23:[function(require,module,exports){
"use strict";

var minMaxFilter = require('./../filters/minMax');
var getKey = require("es5-util/js/getKey");
var intervals = require('./../helpers/intervals');
module.exports = function (headerValue, rowValue, rowData, filterParams) {
  if ((headerValue.start !== '' || headerValue.end !== '') && rowValue == null) {
    return false;
  }
  var startTime = getKey(filterParams, 'startTime', Date.now());
  if (typeof startTime === 'function') {
    startTime = startTime();
  }
  var timeAgo = Math.floor(startTime / 1000 - rowValue);
  rowValue = timeAgo / getKey(intervals, getKey(filterParams, 'searchBy', 'm')[0], intervals.m);
  return minMaxFilter(headerValue, rowValue, rowData, filterParams);
};

},{"./../filters/minMax":20,"./../helpers/intervals":32,"es5-util/js/getKey":5}],24:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var toAssociativeArray = require('es5-util/js/toAssociativeArray');
var hasKey = require('es5-util/js/hasKey');
var getKey = require('es5-util/js/getKey');
var toString = require('es5-util/js/toString');
module.exports = function (cell, formatterParams, onRendered) {
  var _formatterParams$befo, _formatterParams$join, _formatterParams$afte;
  if (cell.getValue() == null) {
    return '';
  }
  var defaultType = getKey(formatterParams, 'type');
  var values = [];
  function formatArg(arg) {
    return "<span title=\"(".concat(arg.type, ") ").concat(arg.type === 'same' ? 'This value did not change' : arg.text, "\" data-type=\"").concat(arg.type, "\">").concat(arg.type === 'same' ? '(same)' : arg.text, "</span>");
  }
  var args = Array.isArray(cell.getValue()) ? cell.getValue() : [cell.getValue()];
  args.forEach(function (arg) {
    if (hasKey(arg, 'type')) {
      values.push(formatArg(arg));
    } else if (defaultType) {
      values.push(formatArg({
        type: defaultType,
        text: arg
      }));
    } else if (_typeof(arg) === 'object' || typeof arg === 'function') {
      values.push(JSON.stringify(arg));
    } else {
      values.push(toString(arg));
    }
  });
  return ((_formatterParams$befo = formatterParams.before) !== null && _formatterParams$befo !== void 0 ? _formatterParams$befo : '<div>') + toAssociativeArray(values).join((_formatterParams$join = formatterParams.join) !== null && _formatterParams$join !== void 0 ? _formatterParams$join : "\n") + ((_formatterParams$afte = formatterParams.after) !== null && _formatterParams$afte !== void 0 ? _formatterParams$afte : '</div>');
};

},{"es5-util/js/getKey":5,"es5-util/js/hasKey":8,"es5-util/js/toAssociativeArray":12,"es5-util/js/toString":14}],25:[function(require,module,exports){
"use strict";

var getSize = require("../helpers/getSize");
module.exports = function (cell, formatterParams, onRendered) {
  return getSize(cell.getValue());
};

},{"../helpers/getSize":31}],26:[function(require,module,exports){
"use strict";

var isObject = require('es5-util/js/isObject');
module.exports = function (cell, formatterParams, onRendered) {
  var _formatterParams$clas;
  var files = cell.getValue();
  if (isObject(files) && ('text' in files || 'url' in files)) {
    files = [files];
  }
  if (!Array.isArray(files)) {
    return '';
  }
  (_formatterParams$clas = formatterParams.className) !== null && _formatterParams$clas !== void 0 ? _formatterParams$clas : formatterParams.className = 'debug-bar-file-link-format debug-bar-ide-link';
  var links = files.map(function (file) {
    var _file$text;
    if (file.url && !file.text) {
      file.text = file.url;
    }
    return file.url ? "<a href=\"".concat(file.url, "\" target=\"_blank\" class=\"").concat(formatterParams.className, "\">").concat(file.text, "</a>") : (_file$text = file.text) !== null && _file$text !== void 0 ? _file$text : '';
  });
  return links.join(formatterParams.join || " | ");
};

},{"es5-util/js/isObject":9}],27:[function(require,module,exports){
"use strict";

var isObject = require('es5-util/js/isObject');
var toAssociativeArray = require('es5-util/js/toAssociativeArray');
module.exports = function (cell, formatterParams, onRendered) {
  var _formatterParams$whit, _formatterParams$join;
  (_formatterParams$whit = formatterParams.whiteSpace) !== null && _formatterParams$whit !== void 0 ? _formatterParams$whit : formatterParams.whiteSpace = 'pre';
  var values = cell.getValue();
  if (isObject(values) && !Array.isArray(values)) {
    var content = JSON.stringify(values, null, formatterParams.space || 0);
    return formatterParams.whiteSpace ? '<div style="white-space: ' + formatterParams.whiteSpace + '">' + content + '</div>' : content;
  }
  return toAssociativeArray(values).join((_formatterParams$join = formatterParams.join) !== null && _formatterParams$join !== void 0 ? _formatterParams$join : '<br>');
};
module.exports.byKeys = function (cell, formatterParams, onRendered) {
  var value = cell.getValue();
  return isObject(value) ? Object.keys(value).length : +!!value;
};

},{"es5-util/js/isObject":9,"es5-util/js/toAssociativeArray":12}],28:[function(require,module,exports){
"use strict";

var getKey = require("es5-util/js/getKey");
var intervals = require('./../helpers/intervals');
module.exports = function (cell, formatterParams, onRendered) {
  if (!cell.getValue() || cell.getValue() <= 1) {
    return '<span title="Invalid Date">-</span>';
  }
  var startTime = getKey(formatterParams, 'startTime', Date.now());
  if (typeof startTime === 'function') {
    startTime = startTime();
  }
  var timeAgo = Math.floor(startTime / 1000 - (cell.getValue() || 0));
  var interval;
  var timeAgoAbs = Math.abs(timeAgo);
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
  var dateObject = new Date(startTime - timeAgo * 1000);
  var timeAgoFormatted = Math[getKey(formatterParams, 'round', 'floor')](timeAgo / intervals[interval[0]]) + interval;
  return "<span title=\"".concat(dateObject.toLocaleString(), "\">").concat(timeAgoFormatted, "</span>");
};

},{"./../helpers/intervals":32,"es5-util/js/getKey":5}],29:[function(require,module,exports){
"use strict";

module.exports = function (cell, formatterParams, onRendered) {
  var urls = cell.getValue();
  if (!urls || typeof urls !== 'string' && !Array.isArray(urls)) {
    return '';
  }
  urls = Array.isArray(urls) ? urls : [urls];
  var links = urls.map(function (url) {
    var _formatterParams$clas;
    return "<a href=\"".concat(url, "\" target=\"_blank\" class=\"").concat((_formatterParams$clas = formatterParams.className) !== null && _formatterParams$clas !== void 0 ? _formatterParams$clas : '', "\">").concat(url, "</a>");
  });
  return links.join(formatterParams.join || '<br>');
};

},{}],30:[function(require,module,exports){
"use strict";

var safeStringify = require('es5-util/js/safeStringify');
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

},{"es5-util/js/safeStringify":11}],31:[function(require,module,exports){
"use strict";

module.exports = function (items) {
  return Array.isArray(items) ? items.length : +![undefined, null, false, '', '0', 0].includes(items);
};

},{}],32:[function(require,module,exports){
"use strict";

module.exports = {
  s: 1,
  m: 60,
  h: 60 * 60,
  d: 60 * 60 * 24,
  y: 60 * 60 * 24 * 365
};

},{}],33:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
module.exports = function (key, values) {
  if (!Array.isArray(values)) {
    values = [values];
  }
  for (var _len = arguments.length, objects = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    objects[_key - 2] = arguments[_key];
  }
  for (var _i = 0, _objects = objects; _i < _objects.length; _i++) {
    var object = _objects[_i];
    var _iterator = _createForOfIteratorHelper(values),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var value = _step.value;
        if (_typeof(object) === 'object' && key in object && object[key] === value) {
          return value;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return false;
};

},{}],34:[function(require,module,exports){
"use strict";

module.exports = {
  valuesLookup: function valuesLookup(component) {
    var filterTerm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var set = new Set();
    component.getColumn().getCells().forEach(function (cell) {
      var values = cell.getValue();
      values = Array.isArray(values) ? values : [values];
      values.forEach(function (value) {
        set.add(value);
      });
    });
    return set.size ? Array.from(set).sort() : [];
  }
};

},{}],35:[function(require,module,exports){
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

},{}],36:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
module.exports = function (column, data, initial, options, element) {
  return _objectSpread(_objectSpread({}, {
    vertAlign: 'middle',
    hozAlign: 'center',
    headerHozAlign: 'center',
    headerTooltip: true
  }), column);
};

},{}],37:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
var argsFilter = require('./../filters/args');
var argsFormatter = require('./../formatters/args');
var argsSorter = require('./../sorters/args');
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilter, _column$headerFilterF, _column$sorter, _column$hozAlign;
  var type = isType('formatter', ['args', 'argument', 'arguments', 'params', 'parameter', 'parameters'], column, initial);
  if (!type) {
    return column;
  }
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = 'input';
  (_column$headerFilterF = column.headerFilterFunc) !== null && _column$headerFilterF !== void 0 ? _column$headerFilterF : column.headerFilterFunc = argsFilter;
  column.formatter = argsFormatter;
  (_column$sorter = column.sorter) !== null && _column$sorter !== void 0 ? _column$sorter : column.sorter = argsSorter;
  (_column$hozAlign = column.hozAlign) !== null && _column$hozAlign !== void 0 ? _column$hozAlign : column.hozAlign = 'left';
  return column;
};

},{"../helpers/isType":33,"./../filters/args":18,"./../formatters/args":24,"./../sorters/args":53}],38:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var isType = require('../helpers/isType');
module.exports = function (column, data, initial, options, element) {
  if (!isType('formatter', ['bool', 'boolean', 'tickCross'], column, initial)) {
    return column;
  }
  if ('src' in column) {
    column.title = "<img alt=\"".concat(column.title, "\" title=\"").concat(column.title, "\" src=\"").concat(column.src, "\" style=\"max-width: 100%;\" />");
    delete column.src;
  }
  column.formatter = 'tickCross';
  return _objectSpread(_objectSpread({}, {
    formatterParams: {
      allowEmpty: true,
      allowTruthy: true
    },
    sorter: 'boolean',
    headerFilter: 'tickCross',
    headerFilterParams: {
      'tristate': true
    }
  }), column);
};

},{"../helpers/isType":33}],39:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
var advancedFilter = require('./../filters/advanced');
var filesFormatter = require('./../formatters/files');
var objectSorter = require('./../sorters/object');
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilter, _column$headerFilterF, _column$headerFilterF2, _column$sorter;
  var type = isType('formatter', ['file', 'files'], column, initial);
  if (!type) {
    return column;
  }
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = 'input';
  (_column$headerFilterF = column.headerFilterFuncParams) !== null && _column$headerFilterF !== void 0 ? _column$headerFilterF : column.headerFilterFuncParams = {
    strict: false
  };
  (_column$headerFilterF2 = column.headerFilterFunc) !== null && _column$headerFilterF2 !== void 0 ? _column$headerFilterF2 : column.headerFilterFunc = advancedFilter;
  column.formatter = filesFormatter;
  (_column$sorter = column.sorter) !== null && _column$sorter !== void 0 ? _column$sorter : column.sorter = objectSorter;
  return column;
};

},{"../helpers/isType":33,"./../filters/advanced":17,"./../formatters/files":26,"./../sorters/object":55}],40:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
var objectSorter = require("../sorters/object");
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilter, _column$headerFilterP, _column$sorter;
  var type = isType('formatter', ['list'], column, initial);
  if (!type) {
    return column;
  }
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = 'list';
  (_column$headerFilterP = column.headerFilterParams) !== null && _column$headerFilterP !== void 0 ? _column$headerFilterP : column.headerFilterParams = {
    clearable: true,
    sort: 'asc',
    valuesLookup: true
  };
  (_column$sorter = column.sorter) !== null && _column$sorter !== void 0 ? _column$sorter : column.sorter = objectSorter;
  delete column.formatter;
  return column;
};

},{"../helpers/isType":33,"../sorters/object":55}],41:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
var _require = require('./../html/list[]'),
  valuesLookup = _require.valuesLookup;
var arraySorter = require("../sorters/array");
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilter, _column$headerFilterP, _column$headerFilterF, _column$sorter;
  var type = isType('formatter', ['list[]'], column, initial);
  if (!type) {
    return column;
  }
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = 'list';
  (_column$headerFilterP = column.headerFilterParams) !== null && _column$headerFilterP !== void 0 ? _column$headerFilterP : column.headerFilterParams = {
    clearable: true,
    valuesLookup: valuesLookup
  };
  (_column$headerFilterF = column.headerFilterFunc) !== null && _column$headerFilterF !== void 0 ? _column$headerFilterF : column.headerFilterFunc = function (headerValue, rowValue, rowData) {
    var filterParams = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return rowValue.includes(headerValue);
  };
  (_column$sorter = column.sorter) !== null && _column$sorter !== void 0 ? _column$sorter : column.sorter = arraySorter;
  delete column.formatter;
  return column;
};

},{"../helpers/isType":33,"../sorters/array":54,"./../html/list[]":34}],42:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var arrayColumn = require('es5-util/js/arrayColumn');
var isType = require('../helpers/isType');
var minMaxDom = require('../html/minMax');
var minMaxFilter = require('../filters/minMax');
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilterP, _column$headerFilter, _column$headerFilterF, _column$headerFilterL;
  var type = isType('formatter', ['minMax', 'min', 'max'], column, initial);
  if (!type) {
    return column;
  }
  var values = data.length ? arrayColumn(data, column.field) : [];
  (_column$headerFilterP = column.headerFilterParams) !== null && _column$headerFilterP !== void 0 ? _column$headerFilterP : column.headerFilterParams = {
    min: values.length ? Math.min.apply(Math, _toConsumableArray(values)) : false,
    max: values.length ? Math.max.apply(Math, _toConsumableArray(values)) : false,
    filterMin: ['minMax', 'min'].includes(type),
    filterMax: ['minMax', 'max'].includes(type)
  };
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = minMaxDom;
  (_column$headerFilterF = column.headerFilterFunc) !== null && _column$headerFilterF !== void 0 ? _column$headerFilterF : column.headerFilterFunc = minMaxFilter;
  (_column$headerFilterL = column.headerFilterLiveFilter) !== null && _column$headerFilterL !== void 0 ? _column$headerFilterL : column.headerFilterLiveFilter = false;
  delete column.formatter;
  return column;
};

},{"../filters/minMax":20,"../helpers/isType":33,"../html/minMax":35,"es5-util/js/arrayColumn":2}],43:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var arrayColumn = require('es5-util/js/arrayColumn');
var isType = require('../helpers/isType');
var getSize = require('../helpers/getSize');
var arrayFilter = require('./../filters/array');
var arrayFormatter = require('./../formatters/array');
var arraySorter = require('./../sorters/array');
var minMaxDom = require("../html/minMax");
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilterP, _column$headerFilter, _column$headerFilterF, _column$headerFilterL, _column$headerSortSta, _column$sorter;
  var type = isType('formatter', ['minMax[]', 'min[]', 'max[]'], column, initial);
  if (!type) {
    return column;
  }
  var values = data.length ? arrayColumn(data, column.field) : [];
  values = values.map(function (value) {
    return getSize(value);
  });
  (_column$headerFilterP = column.headerFilterParams) !== null && _column$headerFilterP !== void 0 ? _column$headerFilterP : column.headerFilterParams = {
    min: values.length ? Math.min.apply(Math, _toConsumableArray(values)) : false,
    max: values.length ? Math.max.apply(Math, _toConsumableArray(values)) : false,
    filterMin: ['minMax[]', 'min[]'].includes(type),
    filterMax: ['minMax[]', 'max[]'].includes(type)
  };
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = minMaxDom;
  (_column$headerFilterF = column.headerFilterFunc) !== null && _column$headerFilterF !== void 0 ? _column$headerFilterF : column.headerFilterFunc = arrayFilter;
  (_column$headerFilterL = column.headerFilterLiveFilter) !== null && _column$headerFilterL !== void 0 ? _column$headerFilterL : column.headerFilterLiveFilter = false;
  column.formatter = arrayFormatter;
  (_column$headerSortSta = column.headerSortStartingDir) !== null && _column$headerSortSta !== void 0 ? _column$headerSortSta : column.headerSortStartingDir = 'desc';
  (_column$sorter = column.sorter) !== null && _column$sorter !== void 0 ? _column$sorter : column.sorter = arraySorter;
  return column;
};

},{"../helpers/getSize":31,"../helpers/isType":33,"../html/minMax":35,"./../filters/array":19,"./../formatters/array":25,"./../sorters/array":54,"es5-util/js/arrayColumn":2}],44:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var arrayColumn = require('es5-util/js/arrayColumn');
var isType = require('../helpers/isType');
var objectFilter = require('./../filters/object');
var objectFormatter = require('./../formatters/object');
var objectSorter = require('./../sorters/object');
var minMaxDom = require("../html/minMax");
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilterP, _column$headerFilter, _column$headerFilterF, _column$headerFilterL, _column$headerSortSta, _column$sorter;
  var type = isType('formatter', ['minMax{}', 'min{}', 'max{}'], column, initial);
  if (!type) {
    return column;
  }
  var values = data.length ? arrayColumn(data, column.field) : [];
  values = values.map(function (value) {
    return value ? Object.keys(value).length : 0;
  });
  (_column$headerFilterP = column.headerFilterParams) !== null && _column$headerFilterP !== void 0 ? _column$headerFilterP : column.headerFilterParams = {
    min: values.length ? Math.min.apply(Math, _toConsumableArray(values)) : false,
    max: values.length ? Math.max.apply(Math, _toConsumableArray(values)) : false,
    filterMin: ['minMax{}', 'min{}'].includes(type),
    filterMax: ['minMax{}', 'max{}'].includes(type)
  };
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = minMaxDom;
  (_column$headerFilterF = column.headerFilterFunc) !== null && _column$headerFilterF !== void 0 ? _column$headerFilterF : column.headerFilterFunc = objectFilter;
  (_column$headerFilterL = column.headerFilterLiveFilter) !== null && _column$headerFilterL !== void 0 ? _column$headerFilterL : column.headerFilterLiveFilter = false;
  column.formatter = objectFormatter.byKeys;
  (_column$headerSortSta = column.headerSortStartingDir) !== null && _column$headerSortSta !== void 0 ? _column$headerSortSta : column.headerSortStartingDir = 'desc';
  (_column$sorter = column.sorter) !== null && _column$sorter !== void 0 ? _column$sorter : column.sorter = objectSorter.byKeys;
  return column;
};

},{"../helpers/isType":33,"../html/minMax":35,"./../filters/object":21,"./../formatters/object":27,"./../sorters/object":55,"es5-util/js/arrayColumn":2}],45:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilter, _column$sorter;
  var type = isType('formatter', ['number', 'num', 'int', 'integer'], column, initial);
  if (!type) {
    return column;
  }
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = 'input';
  (_column$sorter = column.sorter) !== null && _column$sorter !== void 0 ? _column$sorter : column.sorter = 'number';
  delete column.formatter;
  return column;
};

},{"../helpers/isType":33}],46:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
var advancedFilter = require('./../filters/advanced');
var objectFormatter = require('./../formatters/object');
var objectSorter = require('./../sorters/object');
var objectPopup = require('./../popups/object');
var getKeys = require('es5-util/js/getKeys');
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilter, _column$headerFilterF, _column$headerFilterF2;
  var type = isType('formatter', ['object', 'obj', 'compound'], column, initial);
  if (!type) {
    return column;
  }
  var showKeys = getKeys(column, 'formatterParams.showKeys', false);
  var showPopup = getKeys(column, 'formatterParams.showPopup', true);
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = 'input';
  (_column$headerFilterF = column.headerFilterFuncParams) !== null && _column$headerFilterF !== void 0 ? _column$headerFilterF : column.headerFilterFuncParams = {
    strict: false
  };
  (_column$headerFilterF2 = column.headerFilterFunc) !== null && _column$headerFilterF2 !== void 0 ? _column$headerFilterF2 : column.headerFilterFunc = advancedFilter;
  if (showKeys) {
    var _column$headerFilterL, _column$headerSortSta, _column$sorter;
    (_column$headerFilterL = column.headerFilterLiveFilter) !== null && _column$headerFilterL !== void 0 ? _column$headerFilterL : column.headerFilterLiveFilter = true;
    column.formatter = objectFormatter.byKeys;
    (_column$headerSortSta = column.headerSortStartingDir) !== null && _column$headerSortSta !== void 0 ? _column$headerSortSta : column.headerSortStartingDir = 'desc';
    (_column$sorter = column.sorter) !== null && _column$sorter !== void 0 ? _column$sorter : column.sorter = objectSorter.byKeys;
    if (showPopup) {
      column.clickPopup = objectPopup;
    }
  } else {
    var _column$sorter2, _column$hozAlign;
    column.formatter = objectFormatter;
    (_column$sorter2 = column.sorter) !== null && _column$sorter2 !== void 0 ? _column$sorter2 : column.sorter = objectSorter;
    (_column$hozAlign = column.hozAlign) !== null && _column$hozAlign !== void 0 ? _column$hozAlign : column.hozAlign = 'left';
  }
  return column;
};

},{"../helpers/isType":33,"./../filters/advanced":17,"./../formatters/object":27,"./../popups/object":52,"./../sorters/object":55,"es5-util/js/getKeys":6}],47:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilter, _column$headerFilterF, _column$hozAlign;
  var type = isType('formatter', ['regex', 'RegExp'], column, initial);
  if (!type) {
    return column;
  }
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = 'input';
  (_column$headerFilterF = column.headerFilterFunc) !== null && _column$headerFilterF !== void 0 ? _column$headerFilterF : column.headerFilterFunc = function (headerValue, rowValue, rowData, filterParams) {
    return new RegExp(rowValue).test(headerValue);
  };
  (_column$hozAlign = column.hozAlign) !== null && _column$hozAlign !== void 0 ? _column$hozAlign : column.hozAlign = 'left';
  delete column.formatter;
  return column;
};

},{"../helpers/isType":33}],48:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
var getKeys = require('es5-util/js/getKeys');
var objectPopup = require('./../popups/object');
var truncate = require('es5-util/js/truncate');
var toHtmlEntities = require('es5-util/js/toHtmlEntities');
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilter;
  var type = isType('formatter', ['string', 'str'], column, initial);
  if (!type) {
    return column;
  }
  var textLimit = getKeys(column, 'formatterParams.textLimit', false);
  var htmlChars = getKeys(column, 'formatterParams.htmlChars', !!textLimit);
  var showPopup = getKeys(column, 'formatterParams.showPopup', !!textLimit);
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = 'input';
  if (textLimit) {
    column.formatter = function (cell, formatterParams, onRendered) {
      if (cell.getValue() == null) {
        return '';
      }
      var content = truncate(cell.getValue(), textLimit, '...');
      return htmlChars ? toHtmlEntities(content) : content;
    };
    if (showPopup) {
      column.clickPopup = objectPopup;
    }
  } else {
    delete column.formatter;
  }
  return column;
};

},{"../helpers/isType":33,"./../popups/object":52,"es5-util/js/getKeys":6,"es5-util/js/toHtmlEntities":13,"es5-util/js/truncate":15}],49:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
var minMaxDom = require("../html/minMax");
var timeAgoFilter = require("../filters/timeAgo");
var timeAgoFormatter = require("../formatters/timeAgo");
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilterP, _column$headerFilter, _column$headerFilterF, _column$headerFilterF2, _column$headerFilterL, _column$formatterPara;
  var type = isType('formatter', ['timeAgo', 'minTimeAgo', 'maxTimeAgo'], column, initial);
  if (!type) {
    return column;
  }
  (_column$headerFilterP = column.headerFilterParams) !== null && _column$headerFilterP !== void 0 ? _column$headerFilterP : column.headerFilterParams = {
    min: false,
    max: false,
    filterMin: ['timeAgo', 'minTimeAgo'].includes(type),
    filterMax: ['timeAgo', 'maxTimeAgo'].includes(type)
  };
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = minMaxDom;
  (_column$headerFilterF = column.headerFilterFuncParams) !== null && _column$headerFilterF !== void 0 ? _column$headerFilterF : column.headerFilterFuncParams = {
    searchBy: 'm'
  };
  (_column$headerFilterF2 = column.headerFilterFunc) !== null && _column$headerFilterF2 !== void 0 ? _column$headerFilterF2 : column.headerFilterFunc = timeAgoFilter;
  (_column$headerFilterL = column.headerFilterLiveFilter) !== null && _column$headerFilterL !== void 0 ? _column$headerFilterL : column.headerFilterLiveFilter = false;
  (_column$formatterPara = column.formatterParams) !== null && _column$formatterPara !== void 0 ? _column$formatterPara : column.formatterParams = {};
  column.formatter = timeAgoFormatter;
  return column;
};

},{"../filters/timeAgo":23,"../formatters/timeAgo":28,"../helpers/isType":33,"../html/minMax":35}],50:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var arrayColumn = require("es5-util/js/arrayColumn");
var isType = require('../helpers/isType');
var minMaxDom = require("../html/minMax");
var minMaxFilter = require("../filters/minMax");
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilterP, _column$headerFilter, _column$headerFilterF, _column$headerFilterL, _column$hozAlign;
  var type = isType('formatter', ['timeMs', 'minTimeMs', 'maxTimeMs'], column, initial);
  if (!type) {
    return column;
  }
  var values = data.length ? arrayColumn(data, column.field) : [];
  (_column$headerFilterP = column.headerFilterParams) !== null && _column$headerFilterP !== void 0 ? _column$headerFilterP : column.headerFilterParams = {
    min: values.length ? Math.min.apply(Math, _toConsumableArray(values)) : false,
    max: values.length ? Math.max.apply(Math, _toConsumableArray(values)) : false,
    filterMin: ['timeMs', 'minTimeMs'].includes(type),
    filterMax: ['timeMs', 'maxTimeMs'].includes(type)
  };
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = minMaxDom;
  (_column$headerFilterF = column.headerFilterFunc) !== null && _column$headerFilterF !== void 0 ? _column$headerFilterF : column.headerFilterFunc = minMaxFilter;
  (_column$headerFilterL = column.headerFilterLiveFilter) !== null && _column$headerFilterL !== void 0 ? _column$headerFilterL : column.headerFilterLiveFilter = false;
  column.formatter = function (cell, formatterParams, onRendered) {
    return cell.getValue().toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) + ' ms';
  };
  (_column$hozAlign = column.hozAlign) !== null && _column$hozAlign !== void 0 ? _column$hozAlign : column.hozAlign = 'right';
  return column;
};

},{"../filters/minMax":20,"../helpers/isType":33,"../html/minMax":35,"es5-util/js/arrayColumn":2}],51:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
var urlsFormatter = require('./../formatters/urls');
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilter, _column$hozAlign;
  var type = isType('formatter', ['url', 'urls'], column, initial);
  if (!type) {
    return column;
  }
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = 'input';
  column.formatter = urlsFormatter;
  (_column$hozAlign = column.hozAlign) !== null && _column$hozAlign !== void 0 ? _column$hozAlign : column.hozAlign = 'left';
  return column;
};

},{"../helpers/isType":33,"./../formatters/urls":29}],52:[function(require,module,exports){
"use strict";

var isObject = require('es5-util/js/isObject');
var getKeys = require('es5-util/js/getKeys');
var toHtmlEntities = require('es5-util/js/toHtmlEntities');
module.exports = function (e, component, onRendered) {
  var content = component.getValue();
  if (content == null) {
    return null;
  }
  if (isObject(content)) {
    content = JSON.stringify(content, null, 4);
  }
  var config = component.getColumn().getDefinition() || {};
  var htmlChars = getKeys(config, 'popupParams.htmlChars', getKeys(config, 'formatterParams.htmlChars', false));
  content = htmlChars ? toHtmlEntities(content) : content;
  return '<div style="white-space: pre; max-width: 50vw; max-height: 50vh">' + content + '</div>';
};

},{"es5-util/js/getKeys":6,"es5-util/js/isObject":9,"es5-util/js/toHtmlEntities":13}],53:[function(require,module,exports){
"use strict";

var isObject = require('es5-util/js/isObject');
var objectSorter = require('../sorters/object');
module.exports = function (o1, o2) {
  var a = isObject(o1) && 'text' in o1 ? o1.text : o1,
    b = isObject(o2) && 'text' in o2 ? o2.text : o2;
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  return objectSorter.apply(void 0, [a, b].concat(args));
};

},{"../sorters/object":55,"es5-util/js/isObject":9}],54:[function(require,module,exports){
"use strict";

var getSize = require("../helpers/getSize");
var objectSorter = require("./../sorters/object");
module.exports = function (a, b, aRow, bRow, column, dir, sorterParams) {
  var sizeDiff = getSize(a) - getSize(b);
  if (sizeDiff) {
    return sizeDiff;
  }
  return objectSorter.apply(void 0, arguments);
};

},{"../helpers/getSize":31,"./../sorters/object":55}],55:[function(require,module,exports){
"use strict";

var isObject = require('es5-util/js/isObject');
var compare = require('es5-util/js/compare');
module.exports = function (a, b, aRow, bRow, column, dir, sorterParams) {
  return compare(a, b);
};
module.exports.byKeys = function (a, b, aRow, bRow, column, dir, sorterParams) {
  var aSize = isObject(a) ? Object.keys(a).length : +!!a;
  var bSize = isObject(b) ? Object.keys(b).length : +!!b;
  var sizeDiff = aSize - bSize;
  if (sizeDiff) {
    return sizeDiff;
  }
  return compare(a, b);
};

},{"es5-util/js/compare":3,"es5-util/js/isObject":9}]},{},[1]);
