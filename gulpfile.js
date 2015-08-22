'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var shell = require('gulp-shell');

var js_src = './js/src/';
var js_test = './js/spec/';

gulp.task('lint', function() {
    return gulp.src(js_src + '*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default', { verbose: true }))
        .pipe(jshint.reporter('fail'));
});

gulp.task('test', shell.task([
    'tape js/spec/* | faucet',
]));

gulp.task('build', function() {
    return browserify(js_src + 'main.js')
        .bundle()
        .pipe(source('../app.js'))
        .pipe(gulp.dest(js_src))
});

gulp.task('default', ['lint', 'test', 'build'])

gulp.task('pre-commit', ['default']);