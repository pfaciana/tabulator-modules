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
  "boolean": require('./src/modules/boolean')({
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
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var filters = [require('./modules/regex'), require('./modules/timeAgo'), require('./modules/timeMs'), require('./modules/minMax'), require('./modules/minMax{}'), require('./modules/minMax[]'), require('./modules/list[]'), require('./modules/list'), require('./modules/args'), require('./modules/files'), require('./modules/urls'), require('./modules/boolean'), require('./modules/number'), require('./modules/string'), require('./modules/object'), require('./modules/all')];
if ('moduleBindings' in Tabulator) {
  Tabulator.moduleBindings['formatterOutput'] = function (TabulatorFull) {
    this.initialize = function () {};
    TabulatorFull.columnManager.optionsList.register('formatterOutput', null);
  };
  Tabulator.moduleBindings['headerFilterTemp'] = function (TabulatorFull) {
    this.initialize = function () {};
    TabulatorFull.columnManager.optionsList.register('headerFilterTemp', null);
  };
}
if ('extendModule' in Tabulator) {
  Tabulator.extendModule('format', 'formatters', function () {
    var formatters = {};
    var formatterOutput = function formatterOutput(cell) {
      return cell.getValue();
    };
    filters.map(function (filter) {
      return filter.formatter;
    }).flat().forEach(function (formatterType) {
      if (formatterType) {
        formatters[formatterType] = formatterOutput;
      }
    });
    return formatters;
  }());
}
function Create(element, options) {
  var namespace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'all';
  var table,
    parameters = _objectValues(arguments);
  if (typeof jQuery === 'function' && 'publish' in jQuery) {
    options = jQuery.publish("tabulator-table-setup", options, element, namespace);
    options = jQuery.publish("".concat(namespace, "/tabulator-table-setup"), options, element, namespace);
  }
  function updateColumn(column, data) {
    var initial = jQuery.extend(true, {}, column || {});
    if (typeof jQuery === 'function' && 'publish' in jQuery) {
      column = jQuery.publish("tabulator-column-setup", column, data, initial, options, element, namespace);
      column = jQuery.publish("".concat(namespace, "/tabulator-column-setup"), column, data, initial, options, element, namespace);
    }
    filters.forEach(function (filter) {
      column = filter(column, data, initial, options, element);
    });
    if (typeof jQuery === 'function' && 'publish' in jQuery) {
      column = jQuery.publish("tabulator-column-setup-after", column, data, initial, options, element, namespace);
      column = jQuery.publish("".concat(namespace, "/tabulator-column-setup-after"), column, data, initial, options, element, namespace);
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
    var _options;
    if (Array.isArray((_options = options) === null || _options === void 0 ? void 0 : _options.columns)) {
      jQuery.each(options.columns, function (i, column) {
        if ('headerFilter' in column) {
          column.headerFilterTemp = column.headerFilter;
          delete column.headerFilter;
        }
      });
    }
    parameters[1] = options;
    table = _construct(Tabulator, _toConsumableArray(parameters));
    table.on('tableBuilt', function () {
      var data = table.getData();
      jQuery.each(table.columnManager.getColumns(), function (i, column) {
        setTimeout(function () {
          var def = column.getDefinition();
          if ('headerFilterTemp' in def) {
            def.headerFilter = def.headerFilterTemp;
            delete def.headerFilterTemp;
          }
          column.updateDefinition(updateColumn(def, data));
        }, 1);
      });
    });
  }
  if (typeof jQuery === 'function' && 'publish' in jQuery) {
    var _jQuery, _jQuery2;
    jQuery(table.element).addClass('tabulator-modules').attr('data-namespace', namespace);
    (_jQuery = jQuery).publish.apply(_jQuery, ["tabulator-table-created", table].concat(_toConsumableArray(parameters)));
    (_jQuery2 = jQuery).publish.apply(_jQuery2, ["".concat(namespace, "/tabulator-table-created"), table].concat(_toConsumableArray(parameters)));
  }
  return table;
}
module.exports = Create;

},{"./modules/all":41,"./modules/args":42,"./modules/boolean":43,"./modules/files":44,"./modules/list":45,"./modules/list[]":46,"./modules/minMax":47,"./modules/minMax[]":48,"./modules/minMax{}":49,"./modules/number":50,"./modules/object":51,"./modules/regex":52,"./modules/string":53,"./modules/timeAgo":54,"./modules/timeMs":55,"./modules/urls":56}],18:[function(require,module,exports){
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
  var keywords = headerValue.match(/(?:[^\s"]+|"[^"]*(?:(?!\\").)*")+/g);
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

},{"../helpers/advancedSearch":31,"es5-util/js/safeStringify":13}],19:[function(require,module,exports){
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

},{"./../filters/advanced":18,"es5-util/js/isObject":11,"es5-util/js/safeStringify":13}],20:[function(require,module,exports){
"use strict";

var getSize = require('./../helpers/getSize');
var minMaxFilter = require('./../filters/minMax');
module.exports = function (headerValue, rowValue) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  return minMaxFilter.apply(void 0, [headerValue, getSize(rowValue)].concat(args));
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

var isObject = require('es5-util/js/isObject');
var minMaxFilter = require('./../filters/minMax');
module.exports = function (headerValue, rowValue) {
  var keySize = isObject(rowValue) ? Object.keys(rowValue).length : +!!rowValue;
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  return minMaxFilter.apply(void 0, [headerValue, keySize].concat(args));
};

},{"./../filters/minMax":21,"es5-util/js/isObject":11}],23:[function(require,module,exports){
"use strict";

module.exports = function (headerValue, rowValue, rowData, filterParams) {
  return new RegExp(headerValue).test(rowValue);
};

},{}],24:[function(require,module,exports){
"use strict";

var minMaxFilter = require('./../filters/minMax');
var getKey = require("es5-util/js/getKey");
var intervals = require('./../helpers/intervals');
module.exports = function (headerValue, rowValue, rowData, filterParams) {
  if ((headerValue.start !== '' || headerValue.end !== '') && rowValue == null) {
    return false;
  }
  var startTime = getKey(filterParams, 'startTime', Date.now() / 1000);
  if (typeof startTime === 'function') {
    startTime = startTime();
  }
  var timeAgo = Math.floor(startTime - rowValue);
  rowValue = timeAgo / getKey(intervals, getKey(filterParams, 'searchBy', 'm')[0], intervals.m);
  return minMaxFilter(headerValue, rowValue, rowData, filterParams);
};

},{"./../filters/minMax":21,"./../helpers/intervals":36,"es5-util/js/getKey":5}],25:[function(require,module,exports){
"use strict";

var toAssociativeArray = require('es5-util/js/toAssociativeArray');
var hasKey = require('es5-util/js/hasKey');
var getKey = require('es5-util/js/getKey');
var isInteger = require('es5-util/js/isInteger');
var toHtmlEntities = require('es5-util/js/toHtmlEntities');
var formatString = require('./../helpers/formatString');
function formatArg(arg) {
  var formatterParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = arg.type,
    text = arg.text,
    titleText = arg.text;
  if (type === 'string') {
    text = formatString(arg.text, formatterParams);
    titleText = toHtmlEntities(titleText);
  } else if (type === 'same') {
    text = '(same)';
    titleText = 'This value did not change';
  }
  return "<span title=\"(".concat(type, ") ").concat(titleText, "\" data-type=\"").concat(type, "\">").concat(text, "</span>");
}
function getType(input) {
  var type = Object.prototype.toString.call(input).replace('[object ', '').replace(']', '').toLowerCase();
  if (isInteger(input)) {
    type = 'integer';
  } else if (type === 'number' && ![NaN, Infinity].includes(input)) {
    type = 'float';
  } else if (input === '(same)') {
    type = 'same';
  } else if (type === 'function') {
    type = 'callable';
  }
  var text = String(input);
  if (input === '') {
    text = '(empty)';
  } else if (type === 'array') {
    text = "array[".concat(input.length, "]");
  } else if (type === 'object') {
    text = "object{".concat(Object.keys(input).length, "}");
  } else if (type === 'callable') {
    text = 'Function()';
  }
  return {
    type: type,
    text: text
  };
}
module.exports = function (cell, formatterParams, onRendered) {
  var _formatterParams$pref, _formatterParams$join, _formatterParams$suff;
  if (cell.getValue() == null) {
    return '';
  }
  var defaultType = getKey(formatterParams, 'type');
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
  return ((_formatterParams$pref = formatterParams.prefix) !== null && _formatterParams$pref !== void 0 ? _formatterParams$pref : '<div>') + toAssociativeArray(values).join((_formatterParams$join = formatterParams.join) !== null && _formatterParams$join !== void 0 ? _formatterParams$join : "\n") + ((_formatterParams$suff = formatterParams.suffix) !== null && _formatterParams$suff !== void 0 ? _formatterParams$suff : '</div>');
};
module.exports.getType = formatArg;
module.exports.getType = getType;

},{"./../helpers/formatString":32,"es5-util/js/getKey":5,"es5-util/js/hasKey":8,"es5-util/js/isInteger":10,"es5-util/js/toAssociativeArray":14,"es5-util/js/toHtmlEntities":15}],26:[function(require,module,exports){
"use strict";

var getSize = require("../helpers/getSize");
module.exports = function (cell, formatterParams, onRendered) {
  return getSize(cell.getValue());
};

},{"../helpers/getSize":33}],27:[function(require,module,exports){
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

},{"es5-util/js/isObject":11}],28:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var isObject = require('es5-util/js/isObject');
var toAssociativeArray = require('es5-util/js/toAssociativeArray');
var formatString = require('./../helpers/formatString');
module.exports = function (cell, formatterParams, onRendered) {
  var _params$join;
  var params = _objectSpread(_objectSpread({}, {
    whiteSpace: 'pre',
    textLimit: false,
    htmlChars: false,
    space: 0
  }), formatterParams);
  var values = cell.getValue();
  if (isObject(values) && !Array.isArray(values)) {
    var _params$prefix, _params$suffix;
    var content = JSON.stringify(values, null, params.space);
    (_params$prefix = params.prefix) !== null && _params$prefix !== void 0 ? _params$prefix : params.prefix = params.whiteSpace ? "<div style=\"white-space: ".concat(params.whiteSpace, "\">") : '';
    (_params$suffix = params.suffix) !== null && _params$suffix !== void 0 ? _params$suffix : params.suffix = params.whiteSpace ? "</div>" : '';
    return formatString(content, params);
  }
  return formatString(toAssociativeArray(values).join((_params$join = params.join) !== null && _params$join !== void 0 ? _params$join : '<br>'), params);
};
module.exports.byKeys = function (cell, formatterParams, onRendered) {
  var value = cell.getValue();
  return isObject(value) ? Object.keys(value).length : +!!value;
};

},{"./../helpers/formatString":32,"es5-util/js/isObject":11,"es5-util/js/toAssociativeArray":14}],29:[function(require,module,exports){
"use strict";

var getKey = require('es5-util/js/getKey');
var intervals = require('./../helpers/intervals');
module.exports = function (cell, formatterParams, onRendered) {
  if (!cell.getValue() || cell.getValue() <= 1) {
    return '<span title="Invalid Date">-</span>';
  }
  var startTime = getKey(formatterParams, 'startTime', Date.now() / 1000);
  if (typeof startTime === 'function') {
    startTime = startTime();
  }
  var timeAgo = Math.floor(startTime - (cell.getValue() || 0));
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
  var dateObject = new Date((startTime - timeAgo) * 1000);
  var timeAgoFormatted = Math[getKey(formatterParams, 'round', 'floor')](timeAgo / intervals[interval[0]]) + interval;
  return "<span title=\"".concat(dateObject.toLocaleString(), "\">").concat(timeAgoFormatted, "</span>");
};

},{"./../helpers/intervals":36,"es5-util/js/getKey":5}],30:[function(require,module,exports){
"use strict";

function _objectEntries(obj) {
  var entries = [];
  var keys = Object.keys(obj);
  for (var k = 0; k < keys.length; k++) entries.push([keys[k], obj[keys[k]]]);
  return entries;
}
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var isObject = require('es5-util/js/isObject');
function getHtmlTag(args) {
  var _args$tag;
  if (!args) {
    return false;
  }
  var hasAttrs = Object.keys(args).length && 'attr' in args && Object.keys(args.attr).length;
  var defaultTag = hasAttrs ? 'a' : 'span';
  (_args$tag = args.tag) !== null && _args$tag !== void 0 ? _args$tag : args.tag = defaultTag;
  args.tag = args.tag === true ? defaultTag : args.tag;
  var attributes = args && 'attr' in args && args.attr ? ' ' + _objectEntries(args.attr).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return "".concat(key, "=\"").concat(String(value).replace(/"/g, '&quot;'), "\"");
  }).join(' ') : '';
  return args.tag ? "<".concat(args.tag).concat(attributes, ">").concat(args.text, "</").concat(args.tag, ">") : args.text;
}
function normalizeArgs() {
  var _ref3, _args$text, _args$attr, _ref4, _ref5, _ref6, _args$href, _ref7, _args$target, _ref8, _ref9, _ref10, _args$class;
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  args.text = (_ref3 = (_args$text = args.text) !== null && _args$text !== void 0 ? _args$text : args.content) !== null && _ref3 !== void 0 ? _ref3 : null;
  (_args$attr = args.attr) !== null && _args$attr !== void 0 ? _args$attr : args.attr = {};
  args.attr.href = (_ref4 = (_ref5 = (_ref6 = (_args$href = args.href) !== null && _args$href !== void 0 ? _args$href : args.url) !== null && _ref6 !== void 0 ? _ref6 : args.attr.href) !== null && _ref5 !== void 0 ? _ref5 : args.attr.url) !== null && _ref4 !== void 0 ? _ref4 : null;
  args.attr.target = (_ref7 = (_args$target = args.target) !== null && _args$target !== void 0 ? _args$target : args.attr.target) !== null && _ref7 !== void 0 ? _ref7 : null;
  args.attr["class"] = (_ref8 = (_ref9 = (_ref10 = (_args$class = args["class"]) !== null && _args$class !== void 0 ? _args$class : args.className) !== null && _ref10 !== void 0 ? _ref10 : args.attr["class"]) !== null && _ref9 !== void 0 ? _ref9 : args.attr.className) !== null && _ref8 !== void 0 ? _ref8 : null;
  delete args.href;
  delete args.url;
  delete args.attr.url;
  if (!args.attr.href) {
    delete args.attr.href;
  }
  if (!args.attr.target) {
    delete args.attr.target;
  }
  delete args["class"];
  delete args.className;
  delete args.attr.className;
  if (!args.attr["class"]) {
    delete args.attr["class"];
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
  var _normalizedParams$att, _normalizedValue, _normalizedValue$attr, _normalizedValue2, _normalizedValue2$att, _normalizedValue3;
  var formatterParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var cell = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var normalizedValue = {};
  if ('show' in formatterParams && !formatterParams.show(cell, value)) {
    return false;
  }
  if (value && ['number', 'string'].includes(_typeof(value))) {
    normalizedValue = {
      tag: 'a',
      attr: {
        href: value
      },
      text: value
    };
  } else if (isObject(value)) {
    normalizedValue = normalizeArgs(_objectSpread({}, value));
  }
  var normalizedParams = normalizeArgs(_objectSpread({}, formatterParams));
  _objectEntries(normalizedParams !== null && normalizedParams !== void 0 ? normalizedParams : {}).map(function (_ref11) {
    var _ref12 = _slicedToArray(_ref11, 2),
      name = _ref12[0],
      item = _ref12[1];
    if (!(name in normalizedValue) || typeof normalizedValue[name] !== 'function' && typeof item === 'function') {
      normalizedValue[name] = item;
    }
  });
  _objectEntries((_normalizedParams$att = normalizedParams.attr) !== null && _normalizedParams$att !== void 0 ? _normalizedParams$att : {}).map(function (_ref13) {
    var _ref14 = _slicedToArray(_ref13, 2),
      name = _ref14[0],
      item = _ref14[1];
    if (!(name in normalizedValue.attr) || typeof normalizedValue.attr[name] !== 'function' && typeof item === 'function') {
      normalizedValue.attr[name] = item;
    }
  });
  _objectEntries((_normalizedValue = normalizedValue) !== null && _normalizedValue !== void 0 ? _normalizedValue : {}).map(function (_ref15) {
    var _ref16 = _slicedToArray(_ref15, 2),
      name = _ref16[0],
      item = _ref16[1];
    if (typeof item === 'function') {
      normalizedValue[name] = item(cell, value, normalizedValue);
    }
  });
  _objectEntries((_normalizedValue$attr = normalizedValue.attr) !== null && _normalizedValue$attr !== void 0 ? _normalizedValue$attr : {}).map(function (_ref17) {
    var _ref18 = _slicedToArray(_ref17, 2),
      name = _ref18[0],
      item = _ref18[1];
    if (typeof item === 'function') {
      normalizedValue.attr[name] = item(cell, value, normalizedValue);
    }
  });
  if (!((_normalizedValue2 = normalizedValue) !== null && _normalizedValue2 !== void 0 && (_normalizedValue2$att = _normalizedValue2.attr) !== null && _normalizedValue2$att !== void 0 && _normalizedValue2$att.href) && !((_normalizedValue3 = normalizedValue) !== null && _normalizedValue3 !== void 0 && _normalizedValue3.text)) {
    return false;
  }
  return normalizedValue;
}
function buildHtmlTags(cell, formatterParams, onRendered) {
  var urls = cell.getValue();
  urls = Array.isArray(urls) ? urls : [urls];
  var links = urls.map(function (url) {
    return getHtmlTag(mergeArgs(url, formatterParams, cell));
  }).filter(Boolean);
  return links.join(formatterParams.join || '<br>');
}
module.exports = buildHtmlTags;
module.exports.getHtmlTag = getHtmlTag;
module.exports.normalizeArgs = normalizeArgs;
module.exports.mergeArgs = mergeArgs;

},{"es5-util/js/isObject":11}],31:[function(require,module,exports){
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

},{"es5-util/js/safeStringify":13}],32:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var truncate = require('es5-util/js/truncate');
var toHtmlEntities = require('es5-util/js/toHtmlEntities');
var getKeys = require("es5-util/js/getKeys");
module.exports = function (content) {
  var formatterParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var modify = getKeys(formatterParams, 'modify', false);
  var textLimit = getKeys(formatterParams, 'textLimit', false);
  var moreText = getKeys(formatterParams, 'moreText', '...');
  var htmlChars = getKeys(formatterParams, 'htmlChars', false);
  var prefix = getKeys(formatterParams, 'prefix', '');
  var suffix = getKeys(formatterParams, 'suffix', '');
  if (modify) {
    content = modify(content, _objectSpread(_objectSpread({}, formatterParams), {
      textLimit: textLimit,
      moreText: moreText,
      htmlChars: htmlChars,
      prefix: prefix,
      suffix: suffix
    }));
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

var isObject = require('es5-util/js/isObject');
module.exports = function (condition, content, params, cell, onRendered) {
  var e = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
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
  var needle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "\n";
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return haystack.split(needle).slice(0, offset).join(needle).length;
}
function indexOfFn() {
  var needle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "\n";
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return function (haystack) {
    return haystack.split(needle).slice(0, offset).join(needle).length;
  };
}
function indexOfNlFn() {
  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var needle = "\n";
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

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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

},{}],38:[function(require,module,exports){
"use strict";

var getKey = require("es5-util/js/getKey");
function sum(values) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var prefix = getKey(params, 'prefix', '');
  var suffix = getKey(params, 'suffix', '');
  var locales = getKey(params, 'locales', undefined);
  var options = getKey(params, 'options', {
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
  valuesLookup: function valuesLookup(component) {
    var filterTerm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var set = new Set(),
      field = component.getField();
    component.getTable().getData().forEach(function (row) {
      var values = row[field];
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

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
module.exports = function (column, data, initial, options, element) {
  if ('src' in column) {
    column.title = "<img alt=\"".concat(column.title, "\" title=\"").concat(column.title, "\" src=\"").concat(column.src, "\" style=\"max-width: 100%;\" />");
    delete column.src;
  }
  return _objectSpread(_objectSpread({}, {
    vertAlign: 'middle',
    hozAlign: 'center',
    headerHozAlign: 'center',
    headerTooltip: true
  }), column);
};

},{}],42:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
var argsFilter = require('./../filters/args');
var argsFormatter = require('./../formatters/args');
var argsSorter = require('./../sorters/args');
var formatters = ['args', 'argument', 'arguments', 'params', 'parameter', 'parameters'];
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilter, _column$headerFilterF, _column$formatterOutp, _column$sorter, _column$hozAlign;
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = 'input';
  (_column$headerFilterF = column.headerFilterFunc) !== null && _column$headerFilterF !== void 0 ? _column$headerFilterF : column.headerFilterFunc = argsFilter;
  column.formatter = (_column$formatterOutp = column.formatterOutput) !== null && _column$formatterOutp !== void 0 ? _column$formatterOutp : argsFormatter;
  delete column.formatterOutput;
  (_column$sorter = column.sorter) !== null && _column$sorter !== void 0 ? _column$sorter : column.sorter = argsSorter;
  (_column$hozAlign = column.hozAlign) !== null && _column$hozAlign !== void 0 ? _column$hozAlign : column.hozAlign = 'left';
  return column;
};
module.exports.formatter = formatters;

},{"../helpers/isType":37,"./../filters/args":19,"./../formatters/args":25,"./../sorters/args":58}],43:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var isType = require('../helpers/isType');
var formatters = ['bool', 'boolean'];
module.exports = function (column, data, initial, options, element) {
  var _column$formatterOutp;
  var type = isType('formatter', [].concat(formatters, ['tickCross']), column, initial);
  if (!type) {
    return column;
  }
  column.formatter = (_column$formatterOutp = column.formatterOutput) !== null && _column$formatterOutp !== void 0 ? _column$formatterOutp : 'tickCross';
  delete column.formatterOutput;
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
module.exports.formatter = formatters;

},{"../helpers/isType":37}],44:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
var advancedFilter = require('./../filters/advanced');
var filesFormatter = require('./../formatters/files');
var objectSorter = require('./../sorters/object');
var formatters = ['file', 'files'];
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilter, _column$headerFilterF, _column$headerFilterF2, _column$formatterOutp, _column$sorter;
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = 'input';
  (_column$headerFilterF = column.headerFilterFuncParams) !== null && _column$headerFilterF !== void 0 ? _column$headerFilterF : column.headerFilterFuncParams = {
    strict: false
  };
  (_column$headerFilterF2 = column.headerFilterFunc) !== null && _column$headerFilterF2 !== void 0 ? _column$headerFilterF2 : column.headerFilterFunc = advancedFilter;
  column.formatter = (_column$formatterOutp = column.formatterOutput) !== null && _column$formatterOutp !== void 0 ? _column$formatterOutp : filesFormatter;
  delete column.formatterOutput;
  (_column$sorter = column.sorter) !== null && _column$sorter !== void 0 ? _column$sorter : column.sorter = objectSorter;
  return column;
};
module.exports.formatter = formatters;

},{"../helpers/isType":37,"./../filters/advanced":18,"./../formatters/files":27,"./../sorters/object":60}],45:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
var objectSorter = require("../sorters/object");
var formatters = ['list'];
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilter, _column$headerFilterP, _column$sorter, _column$formatterOutp;
  var type = isType('formatter', formatters, column, initial);
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
  column.formatter = (_column$formatterOutp = column.formatterOutput) !== null && _column$formatterOutp !== void 0 ? _column$formatterOutp : column.formatter;
  delete column.formatterOutput;
  return column;
};
module.exports.formatter = formatters;

},{"../helpers/isType":37,"../sorters/object":60}],46:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
var _require = require('./../html/list[]'),
  valuesLookup = _require.valuesLookup;
var arraySorter = require("../sorters/array");
var formatters = ['list[]'];
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilter, _column$headerFilterP, _column$headerFilterF, _column$sorter, _column$formatterOutp;
  var type = isType('formatter', formatters, column, initial);
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
  column.formatter = (_column$formatterOutp = column.formatterOutput) !== null && _column$formatterOutp !== void 0 ? _column$formatterOutp : column.formatter;
  delete column.formatterOutput;
  return column;
};
module.exports.formatter = formatters;

},{"../helpers/isType":37,"../sorters/array":59,"./../html/list[]":39}],47:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var arrayColumn = require('es5-util/js/arrayColumn');
var getKeys = require("es5-util/js/getKeys");
var isType = require('../helpers/isType');
var minMaxDom = require('../html/minMax');
var minMaxFilter = require('../filters/minMax');
var sum = require("../helpers/sum");
var formatters = ['minMax', 'min', 'max'];
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilterP, _column$headerFilter, _column$headerFilterF, _column$headerFilterL, _column$formatterOutp;
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  var bottomSum = getKeys(column, 'formatterParams.bottomSum', false);
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
  if (bottomSum) {
    var _column$bottomCalc;
    (_column$bottomCalc = column.bottomCalc) !== null && _column$bottomCalc !== void 0 ? _column$bottomCalc : column.bottomCalc = sum;
  }
  column.formatter = (_column$formatterOutp = column.formatterOutput) !== null && _column$formatterOutp !== void 0 ? _column$formatterOutp : column.formatter;
  delete column.formatterOutput;
  return column;
};
module.exports.formatter = formatters;

},{"../filters/minMax":21,"../helpers/isType":37,"../helpers/sum":38,"../html/minMax":40,"es5-util/js/arrayColumn":2,"es5-util/js/getKeys":6}],48:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var arrayColumn = require('es5-util/js/arrayColumn');
var getKeys = require("es5-util/js/getKeys");
var isType = require('../helpers/isType');
var getSize = require('../helpers/getSize');
var arrayFilter = require('./../filters/array');
var arrayFormatter = require('./../formatters/array');
var arraySorter = require('./../sorters/array');
var minMaxDom = require("../html/minMax");
var objectPopup = require("../popups/object");
var formatters = ['minMax[]', 'min[]', 'max[]'];
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilterP, _column$headerFilter, _column$headerFilterF, _column$headerFilterL, _column$formatterOutp, _column$headerSortSta, _column$sorter;
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  var showPopup = getKeys(column, 'formatterParams.showPopup', false);
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
  column.formatter = (_column$formatterOutp = column.formatterOutput) !== null && _column$formatterOutp !== void 0 ? _column$formatterOutp : arrayFormatter;
  delete column.formatterOutput;
  (_column$headerSortSta = column.headerSortStartingDir) !== null && _column$headerSortSta !== void 0 ? _column$headerSortSta : column.headerSortStartingDir = 'desc';
  (_column$sorter = column.sorter) !== null && _column$sorter !== void 0 ? _column$sorter : column.sorter = arraySorter;
  if (showPopup) {
    column.clickPopup = objectPopup;
  }
  return column;
};
module.exports.formatter = formatters;

},{"../helpers/getSize":33,"../helpers/isType":37,"../html/minMax":40,"../popups/object":57,"./../filters/array":20,"./../formatters/array":26,"./../sorters/array":59,"es5-util/js/arrayColumn":2,"es5-util/js/getKeys":6}],49:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var arrayColumn = require('es5-util/js/arrayColumn');
var getKeys = require("es5-util/js/getKeys");
var isType = require('../helpers/isType');
var objectFilter = require('./../filters/object');
var objectFormatter = require('./../formatters/object');
var objectSorter = require('./../sorters/object');
var minMaxDom = require("../html/minMax");
var objectPopup = require("../popups/object");
var formatters = ['minMax{}', 'min{}', 'max{}'];
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilterP, _column$headerFilter, _column$headerFilterF, _column$headerFilterL, _column$formatterOutp, _column$headerSortSta, _column$sorter;
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  var showPopup = getKeys(column, 'formatterParams.showPopup', false);
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
  column.formatter = (_column$formatterOutp = column.formatterOutput) !== null && _column$formatterOutp !== void 0 ? _column$formatterOutp : objectFormatter.byKeys;
  delete column.formatterOutput;
  (_column$headerSortSta = column.headerSortStartingDir) !== null && _column$headerSortSta !== void 0 ? _column$headerSortSta : column.headerSortStartingDir = 'desc';
  (_column$sorter = column.sorter) !== null && _column$sorter !== void 0 ? _column$sorter : column.sorter = objectSorter.byKeys;
  if (showPopup) {
    column.clickPopup = objectPopup;
  }
  return column;
};
module.exports.formatter = formatters;

},{"../helpers/isType":37,"../html/minMax":40,"../popups/object":57,"./../filters/object":22,"./../formatters/object":28,"./../sorters/object":60,"es5-util/js/arrayColumn":2,"es5-util/js/getKeys":6}],50:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
var formatters = ['number', 'num', 'int', 'integer'];
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilter, _column$sorter, _column$formatterOutp;
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = 'number';
  (_column$sorter = column.sorter) !== null && _column$sorter !== void 0 ? _column$sorter : column.sorter = 'number';
  column.formatter = (_column$formatterOutp = column.formatterOutput) !== null && _column$formatterOutp !== void 0 ? _column$formatterOutp : column.formatter;
  delete column.formatterOutput;
  return column;
};
module.exports.formatter = formatters;

},{"../helpers/isType":37}],51:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
var advancedFilter = require('./../filters/advanced');
var objectFormatter = require('./../formatters/object');
var objectSorter = require('./../sorters/object');
var objectPopup = require('./../popups/object');
var getKeys = require('es5-util/js/getKeys');
var formatters = ['object', 'obj', 'compound'];
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilter, _column$headerFilterF, _column$headerFilterF2;
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  var showKeys = getKeys(column, 'formatterParams.showKeys', false);
  var showPopup = getKeys(column, 'formatterParams.showPopup', getKeys(column, 'formatterParams.textLimit', showKeys));
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = 'input';
  (_column$headerFilterF = column.headerFilterFuncParams) !== null && _column$headerFilterF !== void 0 ? _column$headerFilterF : column.headerFilterFuncParams = {
    strict: false
  };
  (_column$headerFilterF2 = column.headerFilterFunc) !== null && _column$headerFilterF2 !== void 0 ? _column$headerFilterF2 : column.headerFilterFunc = advancedFilter;
  if (showKeys) {
    var _column$headerFilterL, _column$formatterOutp, _column$headerSortSta, _column$sorter;
    (_column$headerFilterL = column.headerFilterLiveFilter) !== null && _column$headerFilterL !== void 0 ? _column$headerFilterL : column.headerFilterLiveFilter = true;
    column.formatter = (_column$formatterOutp = column.formatterOutput) !== null && _column$formatterOutp !== void 0 ? _column$formatterOutp : objectFormatter.byKeys;
    (_column$headerSortSta = column.headerSortStartingDir) !== null && _column$headerSortSta !== void 0 ? _column$headerSortSta : column.headerSortStartingDir = 'desc';
    (_column$sorter = column.sorter) !== null && _column$sorter !== void 0 ? _column$sorter : column.sorter = objectSorter.byKeys;
  } else {
    var _column$formatterOutp2, _column$sorter2, _column$hozAlign;
    column.formatter = (_column$formatterOutp2 = column.formatterOutput) !== null && _column$formatterOutp2 !== void 0 ? _column$formatterOutp2 : objectFormatter;
    (_column$sorter2 = column.sorter) !== null && _column$sorter2 !== void 0 ? _column$sorter2 : column.sorter = objectSorter;
    (_column$hozAlign = column.hozAlign) !== null && _column$hozAlign !== void 0 ? _column$hozAlign : column.hozAlign = 'left';
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

var isType = require('../helpers/isType');
var formatters = ['regex', 'RegExp'];
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilter, _column$headerFilterF, _column$hozAlign, _column$formatterOutp;
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = 'input';
  (_column$headerFilterF = column.headerFilterFunc) !== null && _column$headerFilterF !== void 0 ? _column$headerFilterF : column.headerFilterFunc = function (headerValue, rowValue, rowData, filterParams) {
    return new RegExp(rowValue).test(headerValue);
  };
  (_column$hozAlign = column.hozAlign) !== null && _column$hozAlign !== void 0 ? _column$hozAlign : column.hozAlign = 'left';
  column.formatter = (_column$formatterOutp = column.formatterOutput) !== null && _column$formatterOutp !== void 0 ? _column$formatterOutp : column.formatter;
  delete column.formatterOutput;
  return column;
};
module.exports.formatter = formatters;

},{"../helpers/isType":37}],53:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
var objectPopup = require('./../popups/object');
var formatString = require('./../helpers/formatString');
var advancedFilter = require("../filters/advanced");
var formatters = ['string', 'str', 'text'];
module.exports = function (column, data, initial, options, element) {
  var _column$formatterPara, _column$formatterPara2, _column$formatterPara3, _column$formatterPara4, _column$formatterPara5, _column$formatterPara6, _column$formatterPara7, _column$headerFilter;
  var type = isType('formatter', [].concat(formatters, ['html']), column, initial);
  if (!type) {
    return column;
  }
  (_column$formatterPara = column.formatterParams) !== null && _column$formatterPara !== void 0 ? _column$formatterPara : column.formatterParams = {};
  (_column$formatterPara3 = (_column$formatterPara2 = column.formatterParams).textLimit) !== null && _column$formatterPara3 !== void 0 ? _column$formatterPara3 : _column$formatterPara2.textLimit = false;
  (_column$formatterPara5 = (_column$formatterPara4 = column.formatterParams).htmlChars) !== null && _column$formatterPara5 !== void 0 ? _column$formatterPara5 : _column$formatterPara4.htmlChars = type === 'html';
  (_column$formatterPara7 = (_column$formatterPara6 = column.formatterParams).showPopup) !== null && _column$formatterPara7 !== void 0 ? _column$formatterPara7 : _column$formatterPara6.showPopup = column.formatterParams.textLimit;
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = 'input';
  if (column.formatterParams.textLimit) {
    var _column$formatterOutp;
    column.formatter = (_column$formatterOutp = column.formatterOutput) !== null && _column$formatterOutp !== void 0 ? _column$formatterOutp : function (cell, formatterParams, onRendered) {
      return formatString(cell.getValue(), formatterParams);
    };
    if (column.formatterParams.showPopup) {
      column.clickPopup = objectPopup;
    }
  } else {
    var _column$formatterOutp2;
    column.formatter = (_column$formatterOutp2 = column.formatterOutput) !== null && _column$formatterOutp2 !== void 0 ? _column$formatterOutp2 : column.formatter;
  }
  delete column.formatterOutput;
  if (['text', 'html'].includes(type)) {
    var _column$hozAlign, _column$headerFilterF;
    (_column$hozAlign = column.hozAlign) !== null && _column$hozAlign !== void 0 ? _column$hozAlign : column.hozAlign = 'left';
    (_column$headerFilterF = column.headerFilterFunc) !== null && _column$headerFilterF !== void 0 ? _column$headerFilterF : column.headerFilterFunc = advancedFilter;
  }
  return column;
};
module.exports.formatter = formatters;

},{"../filters/advanced":18,"../helpers/isType":37,"./../helpers/formatString":32,"./../popups/object":57}],54:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
var minMaxDom = require("../html/minMax");
var timeAgoFilter = require("../filters/timeAgo");
var timeAgoFormatter = require("../formatters/timeAgo");
var formatters = ['timeAgo', 'minTimeAgo', 'maxTimeAgo'];
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilterP, _column$headerFilter, _column$headerFilterF, _column$headerFilterF2, _column$headerFilterL, _column$formatterPara, _column$formatterOutp;
  var type = isType('formatter', formatters, column, initial);
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
  column.formatter = (_column$formatterOutp = column.formatterOutput) !== null && _column$formatterOutp !== void 0 ? _column$formatterOutp : timeAgoFormatter;
  delete column.formatterOutput;
  return column;
};
module.exports.formatter = formatters;

},{"../filters/timeAgo":24,"../formatters/timeAgo":29,"../helpers/isType":37,"../html/minMax":40}],55:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var arrayColumn = require("es5-util/js/arrayColumn");
var getKeys = require('es5-util/js/getKeys');
var isType = require('../helpers/isType');
var minMaxDom = require("../html/minMax");
var minMaxFilter = require("../filters/minMax");
var sum = require("../helpers/sum");

// `timeMs*` to be deprecated in future versions, use `duration*` instead
var formatters = ['duration', 'minDuration', 'maxDuration', 'timeMs', 'minTimeMs', 'maxTimeMs'];
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilterP, _column$headerFilter, _column$headerFilterF, _column$headerFilterL, _column$formatterOutp, _column$hozAlign;
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  var unit = getKeys(column, 'formatterParams.unit', 'ms');
  var prefix = getKeys(column, 'formatterParams.prefix', '');
  var suffix = getKeys(column, 'formatterParams.suffix', ' ' + unit);
  var precision = getKeys(column, 'formatterParams.precision', 2);
  var bottomSum = getKeys(column, 'formatterParams.bottomSum', false);
  var values = data.length ? arrayColumn(data, column.field) : [];
  (_column$headerFilterP = column.headerFilterParams) !== null && _column$headerFilterP !== void 0 ? _column$headerFilterP : column.headerFilterParams = {
    min: values.length ? Math.min.apply(Math, _toConsumableArray(values)) : false,
    max: values.length ? Math.max.apply(Math, _toConsumableArray(values)) : false,
    filterMin: ['duration', 'minDuration', 'timeMs', 'minTimeMs'].includes(type),
    filterMax: ['duration', 'maxDuration', 'timeMs', 'maxTimeMs'].includes(type)
  };
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = minMaxDom;
  (_column$headerFilterF = column.headerFilterFunc) !== null && _column$headerFilterF !== void 0 ? _column$headerFilterF : column.headerFilterFunc = minMaxFilter;
  (_column$headerFilterL = column.headerFilterLiveFilter) !== null && _column$headerFilterL !== void 0 ? _column$headerFilterL : column.headerFilterLiveFilter = false;
  column.formatter = (_column$formatterOutp = column.formatterOutput) !== null && _column$formatterOutp !== void 0 ? _column$formatterOutp : function (cell, formatterParams, onRendered) {
    return prefix + cell.getValue().toLocaleString(undefined, {
      minimumFractionDigits: precision,
      maximumFractionDigits: precision
    }) + suffix;
  };
  if (bottomSum) {
    var _column$bottomCalc;
    (_column$bottomCalc = column.bottomCalc) !== null && _column$bottomCalc !== void 0 ? _column$bottomCalc : column.bottomCalc = sum;
  }
  (_column$hozAlign = column.hozAlign) !== null && _column$hozAlign !== void 0 ? _column$hozAlign : column.hozAlign = 'right';
  delete column.formatterOutput;
  return column;
};
module.exports.formatter = formatters;

},{"../filters/minMax":21,"../helpers/isType":37,"../helpers/sum":38,"../html/minMax":40,"es5-util/js/arrayColumn":2,"es5-util/js/getKeys":6}],56:[function(require,module,exports){
"use strict";

var isType = require('../helpers/isType');
var urlsFormatter = require('./../formatters/urls');
var formatters = ['url', 'urls'];
module.exports = function (column, data, initial, options, element) {
  var _column$headerFilter, _column$hozAlign, _column$formatterOutp;
  var type = isType('formatter', formatters, column, initial);
  if (!type) {
    return column;
  }
  (_column$headerFilter = column.headerFilter) !== null && _column$headerFilter !== void 0 ? _column$headerFilter : column.headerFilter = 'input';
  (_column$hozAlign = column.hozAlign) !== null && _column$hozAlign !== void 0 ? _column$hozAlign : column.hozAlign = 'left';
  column.formatter = (_column$formatterOutp = column.formatterOutput) !== null && _column$formatterOutp !== void 0 ? _column$formatterOutp : urlsFormatter;
  delete column.formatterOutput;
  return column;
};
module.exports.formatter = formatters;

},{"../helpers/isType":37,"./../formatters/urls":30}],57:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var isObject = require('es5-util/js/isObject');
var getKeys = require('es5-util/js/getKeys');
var toHtmlEntities = require('es5-util/js/toHtmlEntities');
var hasPopup = require('./../helpers/hasPopup');
var formatString = require('./../helpers/formatString');
module.exports = function (e, component, onRendered) {
  var _column$formatterPara, _formatterParams$popu, _formatterParams$popu2, _ref, _formatterParams$popu3, _ref2, _formatterParams$popu4, _ref3, _formatterParams$popu5, _formatterParams$popu6, _formatterParams$popu7, _formatterParams$popu8;
  var content = component.getValue();
  var column = component.getColumn().getDefinition() || {};
  var showPopup = getKeys(column, 'formatterParams.showPopup', true);
  if (content == null || showPopup === false) {
    return null;
  }
  var formatterParams = _objectSpread({}, (_column$formatterPara = column.formatterParams) !== null && _column$formatterPara !== void 0 ? _column$formatterPara : {});
  formatterParams.textLimit = (_formatterParams$popu = formatterParams.popupTextLimit) !== null && _formatterParams$popu !== void 0 ? _formatterParams$popu : false;
  formatterParams.moreText = (_formatterParams$popu2 = formatterParams.popupMoreText) !== null && _formatterParams$popu2 !== void 0 ? _formatterParams$popu2 : '...';
  formatterParams.htmlChars = (_ref = (_formatterParams$popu3 = formatterParams.popupHtmlChars) !== null && _formatterParams$popu3 !== void 0 ? _formatterParams$popu3 : formatterParams.htmlChars) !== null && _ref !== void 0 ? _ref : false;
  formatterParams.whiteSpace = (_ref2 = (_formatterParams$popu4 = formatterParams.popupWhiteSpace) !== null && _formatterParams$popu4 !== void 0 ? _formatterParams$popu4 : formatterParams.whiteSpace) !== null && _ref2 !== void 0 ? _ref2 : 'pre';
  formatterParams.space = (_ref3 = (_formatterParams$popu5 = formatterParams.popupSpace) !== null && _formatterParams$popu5 !== void 0 ? _formatterParams$popu5 : formatterParams.space) !== null && _ref3 !== void 0 ? _ref3 : 4;
  formatterParams.modify = (_formatterParams$popu6 = formatterParams.popupModify) !== null && _formatterParams$popu6 !== void 0 ? _formatterParams$popu6 : false;
  if (isObject(content)) {
    content = JSON.stringify(content, null, formatterParams.space);
  }
  if (!hasPopup(showPopup, content, formatterParams, component, onRendered, e)) {
    return null;
  }
  formatterParams.prefix = (_formatterParams$popu7 = formatterParams.popupPrefix) !== null && _formatterParams$popu7 !== void 0 ? _formatterParams$popu7 : "<div style=\"white-space: ".concat(formatterParams.whiteSpace, "; max-width: 50vw; max-height: 50vh\">");
  formatterParams.suffix = (_formatterParams$popu8 = formatterParams.popupSuffix) !== null && _formatterParams$popu8 !== void 0 ? _formatterParams$popu8 : "</div>";
  return formatString(content, formatterParams);
};

},{"./../helpers/formatString":32,"./../helpers/hasPopup":34,"es5-util/js/getKeys":6,"es5-util/js/isObject":11,"es5-util/js/toHtmlEntities":15}],58:[function(require,module,exports){
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

},{"../sorters/object":60,"es5-util/js/isObject":11}],59:[function(require,module,exports){
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

},{"../helpers/getSize":33,"./../sorters/object":60}],60:[function(require,module,exports){
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

},{"es5-util/js/compare":3,"es5-util/js/isObject":11}]},{},[1]);
