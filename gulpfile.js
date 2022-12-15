const babel = require('gulp-babel'),
	babelify = require('babelify'),
	brotli = require('gulp-brotli'),
	browserifyBuffer = require('browserify-buffer'),
	ceol = require('gulp-conditional-eol'),
	concat = require('gulp-concat'),
	createTasks = require('gulp-create-tasks'),
	debug = require('gulp-debug'),
	gulp = require('gulp'),
	gulpif = require('gulp-if'),
	rename = require("gulp-rename"),
	size = require('gulp-size'),
	terser = require('gulp-terser');

const options = {
	babelrc: {
		plugins: [
			"@babel/plugin-proposal-logical-assignment-operators",
		],
		presets: [
			["@babel/preset-env", {targets: {browsers: 'last 2 years'}}],
		],
	},
	legacybabelrc: {
		plugins: [
			"@babel/plugin-proposal-logical-assignment-operators",
			"transform-es2017-object-entries",
		],
		presets: [
			["@babel/preset-env", {targets: {browsers: 'last 10 years, ie 6'}}],
		],
	},
	exclude: ['./**/*', '!./css/**/*', '!./fonts/**/*', '!./node_modules/**/*', '!./vendor/**/*',],
	watchTasks: true,
};

const builds = {
	js: {
		configs: [{
			id: 'tabulator-modules',
			src: './index.js',
			dest: './dist',
			watch: ['./index.js', './src/**/*.js'],
			alsoMin: true,
			browserify: true,
			post: ['clean'],
		}],
		cb(_) {
			return gulp.src(_.src)
				.pipe(gulpif(_.browserify, browserifyBuffer([
					...(_.babelrc ? [[babelify, _.babelrc]] : []),
				]), gulpif(_.babelrc, babel(_.babelrc))))
				.pipe(rename({basename: _.id}))
				.pipe(gulpif(_.minify, gulpif(_.match.min, terser())))
				.pipe(gulpif(_.minify, rename({suffix: '.min'})))
				.pipe(gulpif(_.debug, debug(_.debug)))
				.pipe(gulpif(_.minify && _.size, size(_.size)))
				.pipe(gulp.dest(_.dest))
				.pipe(gulpif(_.minify, brotli.compress({extension: 'br', quality: 11})))
				.pipe(gulpif(_.minify && _.sizeNgz, size(_.sizeNgz)))
				.pipe(gulpif(_.minify, gulp.dest(_.dest)));
		}
	},
	legacyJS: {
		configs: [{
			id: 'tabulator-modules.legacy',
			src: './index.js',
			dest: './dist',
			watch: ['./index.js', './src/**/*.js'],
			alsoMin: true,
			browserify: true,
			post: ['clean'],
		}],
		cb(_) {
			return gulp.src(_.src)
				.pipe(gulpif(_.browserify, browserifyBuffer([
					...(_.legacybabelrc ? [[babelify, _.legacybabelrc]] : []),
				]), gulpif(_.legacybabelrc, babel(_.legacybabelrc))))
				.pipe(rename({basename: _.id}))
				.pipe(gulpif(_.minify, gulpif(_.match.min, terser())))
				.pipe(gulpif(_.minify, rename({suffix: '.min'})))
				.pipe(gulpif(_.debug, debug(_.debug)))
				.pipe(gulpif(_.minify && _.size, size(_.size)))
				.pipe(gulp.dest(_.dest))
				.pipe(gulpif(_.minify, brotli.compress({extension: 'br', quality: 11})))
				.pipe(gulpif(_.minify && _.sizeNgz, size(_.sizeNgz)))
				.pipe(gulpif(_.minify, gulp.dest(_.dest)));
		}
	},
	clean: {
		configs: [{
			id: 'all',
			debug: {title: 'clean:all'},
		}],
		cb(_) {
			return gulp.src(_.exclude, {base: (_.base || './'), since: gulp.lastRun(_.cb)})
				.pipe(gulpif(_.ceol, ceol(_.ceol)))
				.pipe(gulpif(buffer => !buffer.isDirectory(), gulpif(_.debug, debug(_.debug))))
				.pipe(gulp.dest((_.dest || './')));
		},
	},
};

createTasks(builds, options);