# Tabulator Modules

Tabulator Modules are my opinionated modules for writing faster and less code when using the [Tabulator](https://tabulator.info/) library.

## Getting Started

### Load JavaScript

#### Option #1: In the browser

```html
<!-- In the browser -->
<script src="https://unpkg.com/tabulator-modules/dist/tabulator-modules.min.js"></script>
```

#### Option #2: In Node

```shell
# Install from node package manager
npm i tabulator-modules
```

```javascript
// load the library
require('tabulator-modules');
```

## Tabulator.Create()

**REQUIRED:** In order to use this library you must replace the default `new Tabulator(element, config)` with  
`Tabulator.Create(element, config)`. The signature is the same, you are just copying and pasting `Tabulator.Create` to replace `new Tabulator` in your code where you want to use this library. Both setups will work, but the default `new Tabulator(element, config)` won't run the Tabulator Modules code on that particular table.

**OPTIONAL:** A third argument can be passed to `Tabulator.Create` to set a namespace for subsequent events. This can be useful for when you want events to be filtered for certain situations and not simply be global. The default namespace is `all`. [Read more](#jquery-small-pubsub).

```javascript
// This setup ignores the Tabulator Modules
var table = new Tabulator("#example-table", {
	data: [...],
	columns: [
		{...},
		{...},
		{...},
		...
	],
});

// This setup uses the Tabulator Modules
var table = Tabulator.Create("#example-table", {
	data: [...],
	columns: [
		{...},
		{...},
		{...},
		...
	],
});
```

# Formatting

This library adds custom formatters on top of the built-in formatters like  `money`, `tickCross`, `star`, etc.

---

## Arguments

Displays a string shorthand representation of value. Designed to provide a short text description of a variable or argument along its type for styling. So instead of showing an entire array of 100 items, the user represents that as a succinct `array[100]`

Filtering and Sorting is done on the text representation, not the value itself.

### Formatter Aliases

`args`, `argument`, `arguments`, `params`, `parameter`, `parameters`

### Additional Params

```javascript
formatterParams = {
	type: 'string', // null|string - if set, will force this value to any items with missing types. Defaults to `null`
	prefix: '<div>', // string - text displayed before the output. Defaults to `<div>`
	suffix: '</div>', // string - text displayed after the output. Defaults to `</div>`
	join: '<br>', // string - if value is a array of args, then they are join by this. Defaults to "\n"
	modify: false, // false|function - function that can alter the text before processing. Defaults to `false`
	textLimit: false, // integer|boolean - length of the max size of the cell value before truncating. Defaults to `false`
	moreText: '...', // string - ellipsis text after truncated text. Defaults to `...`
	htmlChars: false, // boolean - should this convert html entities to be seen in the output. Defaults to `false`

};
headerFilterFuncParams = {
	strict: false, // boolean - setting this to falses make the filter comparison case-insenstive. Defaults to `true`
};
```

### Input Type

`object|object[]|mixed` Both single args object and an array of args objects are supported.

### Output

By default, it will convert any value(s) to a human-readable string that will apply a html formatting that will allow the user to apply css to delineate certain situations. You can have a single argument, or an array of arguments. If it is an array, it will be joined by the `formatterParams.join` setting, which defaults to `\n`

This will truncate a long string if the `formatterParams.textLimit` is set. This will also convert a string to HTML entities for the title tag attribute.

```javascript
const input = {a: 1, b: 2, c: 3, 3: 4}, output = `<div><span title="(object) object{4}" data-type="object">object{4}</span></div>`;
const input = [[1, 2, 3]], output = `<div><span title="(array) array[3]" data-type="array">array[3]</span></div>`;
const input = [null], output = `<div><span title="(null) null" data-type="null">null</span></div>`;
const input = true, output = `<div><span title="(boolean) true" data-type="boolean">true</span></div>`;
const input = Infinity, output = `<div><span title="(number) Infinity" data-type="number">Infinity</span></div>`;
const input = 'abc"def', output = `<div><span title="(string) abc&amp;quot;def" data-type="string">abc"def</span></div>`;
const input = 'abcdefghijklmnopqrstuvwxyz',
	output = `<div><span title="(string) abcdefghijklmnopqrstuvwxyz" data-type="string">abcdefghijkl...</span></div>`;
// etc.
```

There are a few gotchas to be aware with the setup above. Since this accepts both a single argument and an array of arguments, if you want to force a single argument to be of type array, you must set the value to be an array of array (like above). Otherwise, it will treat it as multiple arguments (like below).

Also, `null` and `undefined` values result in an empty string. If you want to force the conversion to arguments you must, again, wrap it in an array (like above). Otherwise, it will act as if there are no arguments set.

```javascript
const input = null, output = ``;
const input = [1, 2, 3], output = `<div><span title="(integer) 1" data-type="integer">1</span>
<span title="(integer) 2" data-type="integer">2</span>
<span title="(integer) 3" data-type="integer">3</span></div>`;
```

If an object is set with `text` and `type` keys, it will use that information directly with no variable conversion. This always you to set custom type and text values.

```javascript
const input = {type: 'array', text: 'array[5]'}, output = `<div><span title="(array) array[5]" data-type="array">array[5]</span></div>`;
const input = {type: 'object', text: 'WP_Post{72}'}, output = `<div><span title="(object) WP_Post{72}" data-type="object">WP_Post{72}</span></div>`;
const input = {type: 'callable', text: 'Closure()'}, output = `<div><span title="(callable) Closure()" data-type="callable">Closure()</span></div>`;
const input = [{type: 'string', text: 'a'}, {type: 'integer', text: 0}],
	output = `<div><span title="(string) a" data-type="string">a</span>
<span title="(integer) 0" data-type="integer">0</span></div>`;
// etc.
```

These values are strictly arbitrary. It simply creates a span tag and populates the `title`, `data-type` and inner html. It is up to the uesr to decide the css styling for these situations. Examples would be...

```css
.tabulator-cell [data-type] {
	white-space:   pre;
	display:       block;
	font-weight:   bold;
	text-overflow: ellipsis;
	overflow:      hidden;
}

.tabulator-cell [data-type="null"] {
	color:          gray;
	text-transform: uppercase;
}

.tabulator-cell [data-type="boolean"] {
	color:          purple;
	text-transform: uppercase;
}

.tabulator-cell [data-type="string"] {
	color: green;
}

.tabulator-cell [data-type="some_random_custom_text"] {
	opacity: .5;
}
```

---

## Boolean

Formatter: same as `tickCross` but adds `formatterParams:` `allowEmpty` and `allowTruthy` to `true`

Sorter: set to `boolean`

Filter: set to `tickCross` with `headerFilterParams:` `tristate` to `true`

### Formatter Aliases

`bool`, `boolean`, `tickCross`

### Additional Params

None

### Input Type

`boolean` or any `truthy` or `falsey` value

### Output

Same as `tickCross`

---

## Duration

This is the same as the `minMax` formatter, but it has extra formatter params for displaying time durations

Adds the `minMaxFilterEditor` DOM elements seen here: https://tabulator.info/examples/#filter-header

`minDuration` only shows the min DOM filter

`maxDuration` only shows the max DOM filter

### Formatter Aliases

`duration`, `minDuration`, `maxDuration`

### Additional Params

```javascript
formatterParams = {
	unit: 'ms', // string - unit of measurement. Defaults to `ms`
	prefix: '', // string - prefix text to display in front of value. Defaults to empty string
	suffix: ' ms', // string - suffix tex to display after value. Deafults to ` ` + $unit
	precision: 2, // integer - number of decimal precisio to display. Defaults to `2`
	bottomSum: true, // boolean - show sum of the entire dataset at the bottom of the column. Defaults to `false`
};
bottomCalcParams = {
	prefix: '$ ', // string - text to display before the bottomSum. Defaults to ``
	suffix: ' ms', // string - text to display after the bottomSum. Defaults to ``
	locales: 'en-US', // string|undefined - toLocaleString()'s locales string as a BCP 47 language tag. Defaults to `undefined`
	options: {style: 'currency'}, // object - toLocaleString()'s options object adjusting the output format. Defaults to `{minimumFractionDigits: 0, maximumFractionDigits: 0}`
}
```

### Input Type

`number`

### Output

```javascript
const input = 123.456789, output = `123.46 ms`;
```

---

## Files

An object, or an array of objects, with `text` and `url` keys. `text` represents the text visible to the user and `url` represents a link-protocol url that makes it possible to go directly to a line and file in an IDE.

### Formatter Aliases

`file`, `files`

### Additional Params

```javascript
formatterParams = {
	className: '', // string - class(es) to be added to the link tag
	join: '<br>', // string - if an array of files, then this is how they should be joined. Defaults to ` | `
};
headerFilterFuncParams = {
	strict: false, // boolean - setting this to false makes the filter comparison case-insenstive. Defaults to `true`
};
```

### Input Type

`object|object[]`

### Output

```javascript
const input = {url: '#', text: 'abc'}, output = `<a href="#" target="_blank">abc</a>`;
const input = [{url: '#', text: 'abc'}, {url: '#', text: 'def'}], output = `<a href="#" target="_blank">abc</a> | <a href="#" target="_blank">def</a>`;
```

---

## List

Same as `list` filter but adds `headerFilterParams:` `clearable` and `valuesLookup` to `true`

### Formatter Aliases

`list`

### Additional Params

None

### Input Type

`string`

### Output

Default Tabulator functionality

---

## List[]

Same as `list` formatter, but instead of one value, this allows for values to be an array of values. This can parse the array and add them to the filter list individually.

```javascript
const data = [
	'a',
	['b', 'c'],
	'c',
	['d'],
	['a', 'c', 'e'],
];
const filterListChocies = ['a', 'b', 'c', 'd', 'e'];
```

### Formatter Aliases

`list[]`

### Additional Params

None

### Input Type

`string|string[]`

### Output

Default Tabulator functionality

---

## MinMax

Adds the `minMaxFilterEditor` DOM elements seen here: https://tabulator.info/examples/#filter-header

`min` only shows the min DOM filter

`max` only shows the max DOM filter

### Formatter Aliases

`minMax`, `min`, `max`

### Additional Params

```javascript
formatterParams = {
	bottomSum: true, // boolean - show sum of the entire dataset at the bottom of the column. Defaults to `false`
};
bottomCalcParams = {
	prefix: '$ ', // string - text to display before the bottomSum. Defaults to ``
	suffix: ' ms', // string - text to display after the bottomSum. Defaults to ``
	locales: 'en-US', // string|undefined - toLocaleString()'s locales string as a BCP 47 language tag. Defaults to `undefined`
	options: {style: 'currency'}, // object - toLocaleString()'s options object adjusting the output format. Defaults to `{minimumFractionDigits: 0, maximumFractionDigits: 0}`
}
```

### Input Type

`number`

### Output

Default Tabulator functionality

---

## MinMax[]

Same as `minMax` expect this accepts an array as the value and does the minMax sorting and filtering against the number of items in the array.

### Formatter Aliases

`minMax[]`, `min[]`, `max[]`

### Additional Params

```javascript
formatterParams = {
	showPopup: true, // boolean|integer|function|regex - show full stringified version of the value in a popup on click. Defaults to `false`
	popupModify: false, // false|function - function that can alter the popup text before processing. Defaults to `false`
	popupTextLimit: false, // integer|boolean - length of the max size of the popup text before truncating. Defaults to `false`
	popupMoreText: false, // string - ellipsis text after truncated text. Defaults to `...`
	popupHtmlChars: false, // boolean - should this convert html entities to be seen in the output. Defaults to `false`
	popupWhiteSpace: 'normal', // string - type of white-space css style. Defaults to `pre`
	popupSpace: false, // number|string|null - used to insert white space into the output JSON string for readability purposes. Defaults to 4
	popupPrefix: false, // Defaults to `<div style="white-space: ${formatterParams.whiteSpace}; max-width: 50vw; max-height: 50vh">`
	popupSuffix: false, // Defaults to `</div>`
};
```

### Input Type

`array`

### Output

```javascript
const input = [1, 2, 3], output = `3`; // because the array length is 3
```

---

## MinMax{}

Same as `minMax` expect this accepts an object as the value and does the minMax sorting and filtering against the number of keys in the object.

### Formatter Aliases

`minMax{}`, `min{}`, `max{}`

### Additional Params

```javascript
formatterParams = {
	showPopup: (content, params, cell, onRendered, e) => content !== '', // boolean|integer|function|regex - show full stringified version of the value in a popup on click. Defaults to `false`
	popupModify: false, // false|function - function that can alter the popup text before processing. Defaults to `false`
	popupTextLimit: false, // integer|boolean - length of the max size of the popup text before truncating. Defaults to `false`
	popupMoreText: false, // string - ellipsis text after truncated text. Defaults to `...`
	popupHtmlChars: false, // boolean - should this convert html entities to be seen in the output. Defaults to `false`
	popupWhiteSpace: 'normal', // string - type of white-space css style. Defaults to `pre`
	popupSpace: false, // number|string|null - used to insert white space into the output JSON string for readability purposes. Defaults to 4
	popupPrefix: false, // Defaults to `<div style="white-space: ${formatterParams.whiteSpace}; max-width: 50vw; max-height: 50vh">`
	popupSuffix: false, // Defaults to `</div>`
};
```

### Input Type

`object`

### Output

```javascript
const input = {a: 1, b: 2, c: 3, d: 4, e: 5}, output = `5`; // because there are 5 keys: a, b, c, d and e
```

---

## Number

Sorter: set to `number`

Filter: set to `input`

### Formatter Aliases

`number`, `num`, `int`, `integer`

### Additional Params

None

### Input Type

`number`

### Output

Default Tabulator functionality

---

## Object

This will stringify an object for human-readable representation. However, this can be changed to only show the number of keys in the object with the `showKeys` formatter param.

it is sorted and filtered by the formatted text.

### Formatter Aliases

`object`, `obj`, `compound`

### Additional Params

```javascript
formatterParams = {
	// Cell
	showKeys: true, // boolean - wheather or not to show the number of object keys instead of the stringified version of the object. Default to `false`
	modify: false, // false|function - function that can alter the text before processing. Defaults to `false`
	textLimit: false, // integer|boolean - length of the max size of the cell value before truncating. Defaults to `false`
	moreText: '...', // string - ellipsis text after truncated text. Defaults to `...`
	htmlChars: false, // boolean - should this convert html entities to be seen in the output. Defaults to `false`
	whiteSpace: 'normal', // string - type of white-space css style. Defaults to `pre`
	space: false, // number|string|null - used to insert white space into the output JSON string for readability purposes. Defaults to 0
	prefix: false, // Defaults to `<div style="white-space: ${formatterParams.whiteSpace};">`
	suffix: false, // Defaults to `</div>`
	join: '<br>', // string - if an array of objects, then this is how they should be joined. Defaults to `<br>`
	// Popup - popup settings will inherit from the cell settings, but can be overritten with the keys below
	showPopup: /long text/i, // boolean|integer|function|regex - show full stringified version of the value in a popup on click. Defaults to `false`
	popupModify: false, // false|function - function that can alter the popup text before processing. Defaults to `false`
	popupTextLimit: false, // integer|boolean - length of the max size of the popup text before truncating. Defaults to `false`
	popupMoreText: '...', // string - ellipsis text after truncated text. Defaults to `...`
	popupHtmlChars: false, // boolean - should this convert html entities to be seen in the output. Defaults to `false`
	popupWhiteSpace: 'normal', // string - type of white-space css style. Defaults to `pre`
	popupSpace: false, // number|string|null - used to insert white space into the output JSON string for readability purposes. Defaults to 4
	popupPrefix: false, // Defaults to `<div style="white-space: ${formatterParams.whiteSpace}; max-width: 50vw; max-height: 50vh">`
	popupSuffix: false, // Defaults to `</div>`
};
headerFilterFuncParams = {
	strict: false, // boolean - setting this to falses make the filter comparison case-insenstive. Defaults to `true`
};
```

### Input Type

`mixed`

### Output

```javascript
const input = {a: 1, b: 2, c: 3, 3: 4}, output = `<div style="white-space: pre">{"3":4,"a":1,"b":2,"c":3}</div>`;
const input = [1, 2, 3], output = `1<br>2<br>3`;
const input = true, output = `true`;
const input = Infinity, output = `Infinity`;
// etc.
```

---

## RegExp

This is when the cell value, itself, is a regex statement, and we want to filter with a test value.

> NOTE: this is the opposite of this library's custom `Tabulator.filters.regex` filter. The regex filter is when you want to run a regex test against a row value.
> To do that, use `{ headerFilterFunc: Tabulator.filters.regex }` in your config instead

### Formatter Aliases

`regex`, `RegExp`

### Additional Params

None

### Input Type

`RegExp`

### Output

Default Tabulator functionality


---

## String

For display strings. `text` and `html` is used for longer strings. It aligns the text to the left and adds the Advanced Filtering Operators. `html` also sets `htmlChars` to `true`

### Formatter Aliases

`string`, `str`, `text`, `html`

### Additional Params

```javascript
formatterParams = {
	// Cell
	modify: false, // false|function - function that can alter the text before processing. Defaults to `false`
	textLimit: false, // integer|boolean - length of the max size of the cell value before truncating. Defaults to `false`
	moreText: '...', // string - ellipsis text after truncated text. Defaults to `...`
	htmlChars: false, // boolean - should this convert html entities to be seen in the output. Defaults to `false`
	prefix: false, // Defaults to `<div style="white-space: ${formatterParams.whiteSpace};">`
	suffix: false, // Defaults to `</div>`
	join: '<br>', // string - if an array of objects, then this is how they should be joined. Defaults to `<br>`
	// Popup - popup settings will inherit from the cell settings, but can be overritten with the keys below
	showPopup: 25, // boolean|integer|function|regex - show full stringified version of the value in a popup on click. Defaults to `false`
	popupModify: false, // false|function - function that can alter the popup text before processing. Defaults to `false`
	popupTextLimit: false, // integer|boolean - length of the max size of the popup text before truncating. Defaults to `false`
	popupMoreText: '...', // string - ellipsis text after truncated text. Defaults to `...`
	popupHtmlChars: false, // boolean - should this convert html entities to be seen in the output. Defaults to `false`
	popupWhiteSpace: 'normal', // string - type of white-space css style. Defaults to `pre`
	popupSpace: false, // number|string|null - used to insert white space into the output JSON string for readability purposes. Defaults to 4
	popupPrefix: false, // Defaults to `<div style="white-space: ${formatterParams.whiteSpace}; max-width: 50vw; max-height: 50vh">`
	popupSuffix: false, // Defaults to `</div>`
};
```

### Input Type

`string`

### Output

```javascript
const input = 'abcdefghijklmnopqrstuvwxyz', formatterParams = {textLimit: 3}, output = `abc...`;
```

---

## Time Ago

Similar to `duration` but this shows the time since a reference date. Can be used to show the last time something was updated.

> NOTE: The timestamps are done in seconds, not milliseconds.
> `Date.now()` returns milliseconds in JavaScript.
> So if you are using JavaScript to get the time, make sure it is converted to seconds in the table data.
> If you're getting your times from another language, like PHP, you should not have to convert it.

Adds the `minMaxFilterEditor` DOM elements seen here: https://tabulator.info/examples/#filter-header

`minTimeAgo` only shows the min DOM filter

`maxTimeAgo` only shows the max DOM filter

### Formatter Aliases

`timeAgo`, `minTimeAgo`, `maxTimeAgo`

### Additional Params

```javascript
formatterParams = {
	startTime: Date.now() / 1000, // integer|function - Unix timestamp is in seconds to compare against. Defaults to `Date.now() / 1000`
	round: 'round', // string - the JavaScript `Math` object method to format the time with. Defaults to `floor`
};
headerFilterFuncParams = {
	startTime: () => (Date.now() / 1000), // integer|function - Unix timestamp is in seconds to compare against. Defaults to `Date.now() / 1000`
	searchBy: 'h', // string - reduce seconds difference into another unit of measurement. Defaults to `m`
	// searchBy options: `s` => seconds, `m` => minutes, `h` => hours, `d` => days, `y` => years
};
```

### Input Type

`interger` This should be a timestamp in seconds

### Output

```javascript
const input = Date.now() / 1000 - 120, output = `2m`; // `2m` stands for `2 minutes` since 120 seconds ago is equal to 2 minutes
```

---

## Urls

Converts an url into a clickable link. It accepts a single url or an array of urls.

### Formatter Aliases

`url`, `urls`

### Additional Params

```javascript
formatterParams = {
	className: '', // string - class(es) to be added to the link tag. Defaults to ''
	join: '<br>', // string - if an array of files, then this is how they should be joined. Defaults to ` | `
};
```

### Input Type

`string|string[]` as a valid url, or array of valid urls

### Output

```javascript
const input = '/abc', output = `<a href="/abc" target="_blank" class="someClass">/abc</a>`;
const input = ['/abc', '/xyz'], output = `<a href="/abc" target="_blank" class="someClass">/abc</a><br><a href="/xyz" target="_blank" class="someClass">/xyz</a>`;
```

---

# Additional Details

## Advanced Filtering Operators

The `object`, `args`, `files` and `minMax{}` formatters use advanced filtering operators that has reserved keywords for greater control.

Keywords searches are split on spaces. So `search1 search2` is split into two searches, `search1` AND `search2`. If either checks returns `false` then the filter returns `false`.

| **Operator** | **Description**                               | **Example**                     |
|--------------|-----------------------------------------------|---------------------------------|
| regex:       | regex search (no modifiers)                   | regex:^wp_.*_filter$            |
| i:           | case insensitive                              | i:MacGruber                      | 
| regex:i:     | regex search (with case insensitive modifier) | regex:i:select\s+\w+\.\*\s+from |
| not:         | text not in value                             | not:NULL                        |
| - | same as `not:`                                | -NULL                           |
| + | same as having no operator (default)          | +/home/                         |

### Combining Operators

```text
+back -quarter // include every value that has `back` unless it also has `quarter`
back -quarter // same as above. the `+` is the default operator, so its only there for readability
```

### Double quotes

Since operators are space delimited, if you need a space in your search, you must surround your search with quotes.

```text
regex:"c.*land rocks!" // will match `cleveland rocks!`
```

And if you need spaces AND double quotes in your search, you can escape the double quotes.

```text
regex:"c.*land \"rocks\"" // will match `cleveland "rocks"`
```

## Formatting Strings

The `object` and `string` formatters make extra `formatterParams` available for formatting text.

These are: `textLimit`, `moreText`, `htmlChars`, `prefix` and `suffix`

In addition, `object` also has `whiteSpace` and `space` params when stringify-ing objects

## Popups

In addition to `object` and `string`, `minMax[]` and `minMax{}` also allow for popUp text for long values.

These are the same `formatterParams` as above, but these keys start with "popup":
`popupTextLimit`, `popupMoreText`, `popupHtmlChars`, `popupWhiteSpace`, `popupSpace`, `popupPrefix` and `popupSuffix`

### Displaying a Popup

To activate a popup, set the `showPopup` key to a truthy value or statement or function.

`showPopup` accepts four different types of values:
`boolean`, `integer`, `function` or `regex`.

#### Boolean

Simply a static true or false or all cells in that column.

#### Integer

The length of the cell value (as a string) that will trigger a popup. So if `formatterParams.showPopup = 3`, then any cell value over 3 characters will trigger a popup. If the cell is 3 characters or less, then that cell won't have a popup.

#### RegExp

A regular express that is tested against each cell to determine if it should have a popup. `formatterParams.showPopup = /^select/i` would show a popup for any cell that starts with select (like a SQL statement).

#### Function

This function gets called on each cell value to determine if it should show a popup. The value returned should be a boolean. For example: `formatterParams.showPopup = (text, formatterParams, component, onRendered, e) => text.length > 25 || text[0] === '$'`

## Custom Functions Available

In case the opinionated modules aren't exactly what you want, the vast majority of the config options can be overwritten. That is to say, this library only uses its default config setup only if the user does not set that key in the column config. However, if that isn't enough flexibility, you can customize your own modules using the same functions that make up the opinionated modules. Most functions in the library are available off the global `Tabulator` object.

### Formatters

Available under the `Tabulator.formatters` object. These work with the `formatter` column config key

```javascript
Tabulator.formatters = {
	args: Function, // Used By: args
	array: Function, // Used By: minMax[]
	files: Function, // Used By: files  
	object: Function, // Used By: object, minMax[]
	timeAgo: Function, // Used By: timeAgo
	urls: Function, // Used By: urls
};
```

### Filters

Available under the `Tabulator.filters` object. These work with the `headerFilterFunc` column config key

```javascript
Tabulator.filters = {
	advanced: Function, // Used By: object, files (also used in args filter) 
	args: Function, // Used By: args
	array: Function, // Used By: minMax[]
	minMax: Function, // Used By: minMax, duration
	object: Function, // Used By: minMax{}
	regex: Function, // Used By: none
	timeAgo: Function, // Used By: timeAgo
};
```

### Sorters

Available under the `Tabulator.sorters` object. These work with the `sorter` column config key

```javascript
Tabulator.sorters = {
	args: Function, // Used By: args
	array: Function, // Used By: minMax[], list[]
	object: Function, // Used By: object, minMax{}, list, files (also used in args sorter) 
};
```

### Pop-ups

Available under the `Tabulator.popups` object. These work with the `clickPopup` column config key

```javascript
Tabulator.popups = {
	object: Function, // Used By: string, object, minMax[], minMax{}
};
```

### Others

MinMax Header Filter Function DOM elements. Works with the `headerFilter` column config key.

```javascript
Tabulator.html.minMax = Function; // Module: minMax, minMax[], minMax{}, duration, timeAgo
```

> NOTE: Also uses the `headerFilterParams` column config. You can optionally set the `min` value and `max` value (with number values) of the input field. As well as if both the min and max inputs should be displayed or not (keys: `filterMin` and `filterMax` with boolean values). See the `minMax` module code for more info.

List Lookup. Works with the `headerFilterParams.valuesLookup` column config key

```javascript
Tabulator.html.lists = Function; // Module: list[]
```

### ES5 Utilities

Since this library uses some [ES5 Util](https://github.com/pfaciana/es5-util) functions. These are also made available on the global `Tabulator.helpers` object. For example: `Tabulator.helpers.arrayColumn(...args)`

The available functions are...

```javascript
arrayColumn(array, columnKey = null, indexKey = null)
compare(a, b)
compare.upperFirst(a, b)
compare.lowerFirst(a, b)
compare.insensitive(a, b)
getFromObjPath(obj, path)
getKey(object, key)
getKeys(object, path)
getValues(object)
hasKey(object, key)
hasKeys(object, path)
isInteger(input)
isObject(input)
safeParse(input, forceParse = true)
safeStringify(input, replacer = null, space = null, forceParse = false)
toAssociativeArray(input)
toHtmlEntities(input)
truncate(input, length, suffix = '&hellip;')
```

## jQuery Small Pub/Sub

[jQuery Small Pub/Sub](https://github.com/pfaciana/jquery-small-pubsub) is an OPTIONAL dependency. If jQuery Small Pub/Sub is not loaded, this library will still work, its just these custom events won't fire. There are currently 4 custom events to subscribe to...

```javascript
/**
 * Table Setup (before the Tabulator table is created)
 *
 * @param object        $options   - options argument from `new Tabulator(element, options, namespac)`
 * @param string|object $element   - element argument from `new Tabulator(element, options, namespac)`
 * @param string        $namespace - namespace to filter events by `new Tabulator(element, options, namespace)`
 * @return object - the modified $options object
 */
jQuery.subscribe('tabulator-table-setup', function (options, element, namespace = 'all') {
	// Do something that modifies the options variable
	options.paginationSize ??= 10;
	options.movableColumns ??= true;
	return options
});

/**
 * Column Setup (before the custom modules are run)
 *
 * @param object        $column    - column config object
 * @param string|object $data      - options.data value
 * @param string|object $initial   - initial column config object (incase it was modified by another listener)
 * @param object        $options   - options argument from `new Tabulator(element, options, namespace)`
 * @param string|object $element   - element argument from `new Tabulator(element, options, namespace)`
 * @param string        $namespace - namespace to filter events by `new Tabulator(element, options, namespace)`
 * @return object - the modified $column object
 */
jQuery.subscribe('tabulator-column-setup', function (column, data, initial, options, element, namespace = 'all') {
	// Do something that modifies the column variable
	if (['boolean', 'tickCross'].includes(initial.formatter)) {
		column.width ??= 75;
	}
	return column
});

/**
 * Column Setup (after the custom modules are run)
 *
 * @param object        $column    - column config object
 * @param string|object $data      - options.data value
 * @param string|object $initial   - initial column config object (incase it was modified by another listener)
 * @param object        $options   - options argument from `new Tabulator(element, options, namespace)`
 * @param string|object $element   - element argument from `new Tabulator(element, options, namespace)`
 * @param string        $namespace - namespace to filter events by `new Tabulator(element, options, namespace)`
 * @return object - the modified $column object
 */
jQuery.subscribe('tabulator-column-setup-after', function (column, data, initial, options, element, namespace = 'all') {
	// Do something that modifies the column variable
	if (['boolean', 'tickCross'].includes(initial.formatter)) {
		column.headerWordWrap ??= true;
	}
	return column
});

/**
 * Table Created (after the Tabulator table is created)
 *
 * @param object        $table     - The `Tabulator` instance after its initialized
 * @param string|object $element   - element argument from `new Tabulator(element, options, namespace)`
 * @param object        $options   - options argument from `new Tabulator(element, options, namespace)`
 * @param string        $namespace - namespace to filter events by `new Tabulator(element, options, namespace)`
 * @param mixed      ...parameters - any other parameters passed to `new Tabulator` get appended to the event args
 * @return void
 */
jQuery.subscribe('tabulator-table-created', function (table, element, options, namespace, ...parameters) {
	// Do something, like store the reference to table object somewhere in your app for later use
	someVariable[element] = table;
});
```