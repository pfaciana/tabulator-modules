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
if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
  window.Tabulator = module.exports;
}

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./src/Create":12,"./src/filters/advanced":13,"./src/filters/args":14,"./src/filters/array":15,"./src/filters/minMax":16,"./src/filters/regex":17,"./src/filters/timeAgo":18,"./src/formatters/args":19,"./src/formatters/array":20,"./src/formatters/files":21,"./src/formatters/object":22,"./src/formatters/timeAgo":23,"./src/formatters/urls":24,"./src/helpers/advancedSearch":25,"./src/helpers/getSize":26,"./src/helpers/intervals":27,"./src/helpers/isType":28,"./src/html/list[]":29,"./src/html/minMax":30,"./src/sorters/args":46,"./src/sorters/array":47,"./src/sorters/object":48}],2:[function(require,module,exports){
const getFromObjPath = require('./getFromObjPath');

function arrayColumn(array, columnKey = null, indexKey = null) {
	if (indexKey !== null) {
		let obj = {};
		for (var index in array) {
			if (array.hasOwnProperty(index) || typeof array[index] !== 'function') {
				obj[getFromObjPath(array[index], indexKey)] = columnKey !== null ? (typeof columnKey === 'function' ? columnKey(array[index]) : getFromObjPath(array[index], columnKey)) : array[index];
			}
		}
		return obj;
	}

	array = Array.isArray(array) ? array : Object.values(array);
	return array.map(function (value, index) {
		return typeof columnKey === 'function' ? columnKey(value) : getFromObjPath(value, columnKey);
	})
}

module.exports = arrayColumn;
},{"./getFromObjPath":4}],3:[function(require,module,exports){
function isArray(value) {
	return Array.isArray(value);
}

function isObject(value) {
	return isCompound(value) && !isArray(value);
}

function isCompound(value) {
	return typeof value === 'object' || typeof value === 'function';
}

function compare(type = 'sort', locale = 'en-US') {
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
function getKey(object, key, defaultValue = undefined) {
	if (typeof object !== 'object' || !(key in object)) {
		return defaultValue;
	}

	return object[key];
}

module.exports = getKey;
},{}],6:[function(require,module,exports){
function hasKey(object, key) {
	return typeof object === 'object' && key in object;
}

module.exports = hasKey;
},{}],7:[function(require,module,exports){
function isObject(value) {
	return (typeof value == 'object' || typeof value == 'function') && value !== null;
}

module.exports = isObject;
},{}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
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
},{"./safeParse":8}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
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
},{}],12:[function(require,module,exports){
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
var filters = [require('./modules/regex'), require('./modules/timeAgo'), require('./modules/timeMs'), require('./modules/minMax'), require('./modules/minMax[]'), require('./modules/list[]'), require('./modules/list'), require('./modules/args'), require('./modules/files'), require('./modules/urls'), require('./modules/boolean'), require('./modules/number'), require('./modules/string'), require('./modules/object'), require('./modules/all')];
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

},{"./modules/all":31,"./modules/args":32,"./modules/boolean":33,"./modules/files":34,"./modules/list":35,"./modules/list[]":36,"./modules/minMax":37,"./modules/minMax[]":38,"./modules/number":39,"./modules/object":40,"./modules/regex":41,"./modules/string":42,"./modules/timeAgo":43,"./modules/timeMs":44,"./modules/urls":45}],13:[function(require,module,exports){
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

},{"../helpers/advancedSearch":25,"es5-util/js/safeStringify":9}],14:[function(require,module,exports){
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

},{"./../filters/advanced":13,"es5-util/js/isObject":7,"es5-util/js/safeStringify":9}],15:[function(require,module,exports){
"use strict";

var getSize = require('./../helpers/getSize');
var minMaxFilter = require('./../filters/minMax');
module.exports = function (headerValue, rowValue) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  return minMaxFilter.apply(void 0, [headerValue, getSize(rowValue)].concat(args));
};

},{"./../filters/minMax":16,"./../helpers/getSize":26}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
"use strict";

module.exports = function (headerValue, rowValue, rowData, filterParams) {
  return new RegExp(headerValue).test(rowValue);
};

},{}],18:[function(require,module,exports){
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

},{"./../filters/minMax":16,"./../helpers/intervals":27,"es5-util/js/getKey":5}],19:[function(require,module,exports){
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

},{"es5-util/js/getKey":5,"es5-util/js/hasKey":6,"es5-util/js/toAssociativeArray":10,"es5-util/js/toString":11}],20:[function(require,module,exports){
"use strict";

var getSize = require("../helpers/getSize");
module.exports = function (cell, formatterParams, onRendered) {
  return getSize(cell.getValue());
};

},{"../helpers/getSize":26}],21:[function(require,module,exports){
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

},{"es5-util/js/isObject":7}],22:[function(require,module,exports){
"use strict";

var isObject = require('es5-util/js/isObject');
var toAssociativeArray = require('es5-util/js/toAssociativeArray');
module.exports = function (cell, formatterParams, onRendered) {
  var _formatterParams$whit, _formatterParams$join;
  (_formatterParams$whit = formatterParams.whiteSpace) !== null && _formatterParams$whit !== void 0 ? _formatterParams$whit : formatterParams.whiteSpace = 'pre';
  var values = cell.getValue();
  if (!Array.isArray(values) && isObject(values)) {
    if (formatterParams.whiteSpace) {
      return '<div style="white-space: ' + formatterParams.whiteSpace + '">' + JSON.stringify(values, null, formatterParams.space || 0) + '</div>';
    } else {
      return JSON.stringify(values, null, formatterParams.space || 0);
    }
  }
  return toAssociativeArray(values).join((_formatterParams$join = formatterParams.join) !== null && _formatterParams$join !== void 0 ? _formatterParams$join : '<br>');
};

},{"es5-util/js/isObject":7,"es5-util/js/toAssociativeArray":10}],23:[function(require,module,exports){
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

},{"./../helpers/intervals":27,"es5-util/js/getKey":5}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
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

},{"es5-util/js/safeStringify":9}],26:[function(require,module,exports){
"use strict";

module.exports = function (items) {
  return Array.isArray(items) ? items.length : +![undefined, null, false, '', '0', 0].includes(items);
};

},{}],27:[function(require,module,exports){
"use strict";

module.exports = {
  s: 1,
  m: 60,
  h: 60 * 60,
  d: 60 * 60 * 24,
  y: 60 * 60 * 24 * 365
};

},{}],28:[function(require,module,exports){
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

},{}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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
    input.style.padding = '4px';
    input.style.width = params.filterMin && params.filterMax ? '50%' : '100%';
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

},{}],31:[function(require,module,exports){
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

},{}],32:[function(require,module,exports){
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

},{"../helpers/isType":28,"./../filters/args":14,"./../formatters/args":19,"./../sorters/args":46}],33:[function(require,module,exports){
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

},{"../helpers/isType":28}],34:[function(require,module,exports){
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

},{"../helpers/isType":28,"./../filters/advanced":13,"./../formatters/files":21,"./../sorters/object":48}],35:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilter, _column$headerFilterP;
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
  delete column.formatter;
  return column;
};

},{"../helpers/isType":28}],36:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
var _require = require('./../html/list[]'),
  valuesLookup = _require.valuesLookup;
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilter, _column$headerFilterP, _column$headerFilterF;
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
  delete column.formatter;
  return column;
};

},{"../helpers/isType":28,"./../html/list[]":29}],37:[function(require,module,exports){
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
  var values = arrayColumn(data, column.field);
  (_column$headerFilterP = column.headerFilterParams) !== null && _column$headerFilterP !== void 0 ? _column$headerFilterP : column.headerFilterParams = {
    min: Math.min.apply(Math, _toConsumableArray(values)),
    max: Math.max.apply(Math, _toConsumableArray(values)),
    filterMin: ['minMax', 'min'].includes(type),
    filterMax: ['minMax', 'max'].includes(type)
  };
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = minMaxDom;
  (_column$headerFilterF = column.headerFilterFunc) !== null && _column$headerFilterF !== void 0 ? _column$headerFilterF : column.headerFilterFunc = minMaxFilter;
  (_column$headerFilterL = column.headerFilterLiveFilter) !== null && _column$headerFilterL !== void 0 ? _column$headerFilterL : column.headerFilterLiveFilter = false;
  delete column.formatter;
  return column;
};

},{"../filters/minMax":16,"../helpers/isType":28,"../html/minMax":30,"es5-util/js/arrayColumn":2}],38:[function(require,module,exports){
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
  var values = arrayColumn(data, column.field);
  values = values.map(function (value) {
    return getSize(value);
  });
  (_column$headerFilterP = column.headerFilterParams) !== null && _column$headerFilterP !== void 0 ? _column$headerFilterP : column.headerFilterParams = {
    min: Math.min.apply(Math, _toConsumableArray(values)),
    max: Math.max.apply(Math, _toConsumableArray(values)),
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

},{"../helpers/getSize":26,"../helpers/isType":28,"../html/minMax":30,"./../filters/array":15,"./../formatters/array":20,"./../sorters/array":47,"es5-util/js/arrayColumn":2}],39:[function(require,module,exports){
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

},{"../helpers/isType":28}],40:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
var advancedFilter = require('./../filters/advanced');
var objectFormatter = require('./../formatters/object');
var objectSorter = require('./../sorters/object');
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilter, _column$headerFilterF, _column$headerFilterF2, _column$sorter, _column$hozAlign;
  var type = isType('formatter', ['object', 'obj', 'compound'], column, initial);
  if (!type) {
    return column;
  }
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = 'input';
  (_column$headerFilterF = column.headerFilterFuncParams) !== null && _column$headerFilterF !== void 0 ? _column$headerFilterF : column.headerFilterFuncParams = {
    strict: false
  };
  (_column$headerFilterF2 = column.headerFilterFunc) !== null && _column$headerFilterF2 !== void 0 ? _column$headerFilterF2 : column.headerFilterFunc = advancedFilter;
  column.formatter = objectFormatter;
  (_column$sorter = column.sorter) !== null && _column$sorter !== void 0 ? _column$sorter : column.sorter = objectSorter;
  (_column$hozAlign = column.hozAlign) !== null && _column$hozAlign !== void 0 ? _column$hozAlign : column.hozAlign = 'left';
  return column;
};

},{"../helpers/isType":28,"./../filters/advanced":13,"./../formatters/object":22,"./../sorters/object":48}],41:[function(require,module,exports){
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

},{"../helpers/isType":28}],42:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilter;
  var type = isType('formatter', ['string', 'str'], column, initial);
  if (!type) {
    return column;
  }
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = 'input';
  delete column.formatter;
  return column;
};

},{"../helpers/isType":28}],43:[function(require,module,exports){
"use strict";

var getKey = require('es5-util/js/getKey');
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

},{"../filters/timeAgo":18,"../formatters/timeAgo":23,"../helpers/isType":28,"../html/minMax":30,"es5-util/js/getKey":5}],44:[function(require,module,exports){
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
  var values = arrayColumn(data, column.field);
  (_column$headerFilterP = column.headerFilterParams) !== null && _column$headerFilterP !== void 0 ? _column$headerFilterP : column.headerFilterParams = {
    min: Math.min.apply(Math, _toConsumableArray(values)),
    max: Math.max.apply(Math, _toConsumableArray(values)),
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

},{"../filters/minMax":16,"../helpers/isType":28,"../html/minMax":30,"es5-util/js/arrayColumn":2}],45:[function(require,module,exports){
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

},{"../helpers/isType":28,"./../formatters/urls":24}],46:[function(require,module,exports){
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

},{"../sorters/object":48,"es5-util/js/isObject":7}],47:[function(require,module,exports){
"use strict";

var getSize = require("../helpers/getSize");
module.exports = function (a, b, aRow, bRow, column, dir, sorterParams) {
  return getSize(a) - getSize(b);
};

},{"../helpers/getSize":26}],48:[function(require,module,exports){
"use strict";

var compare = require('es5-util/js/compare');
module.exports = function (a, b, aRow, bRow, column, dir, sorterParams) {
  return compare(a, b);
};

},{"es5-util/js/compare":3}]},{},[1]);
