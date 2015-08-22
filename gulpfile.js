var gulp = require('gulp');
var jshint = require('gulp-jshint');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var shell = require('gulp-shell');
var react = require('gulp-react');
var reactify = require('reactify');
var uglify = require('gulp-uglify');

var paths = {
    'js_source': 'js/src/',
    'js_dist': 'dist/',
    'js_test': 'js/spec/',
    'react_source': 'js/src/views/',
    'react_dist': 'dist/views'
};

gulp.task('transform', function() {
    return gulp.src(paths.react_source + '*.jsx')
        .pipe(react())
        .pipe(gulp.dest(paths.react_dist));
});

gulp.task('lint', function() {
    return gulp.src([paths.js_source + '*.js', paths.js_test + '*.js', 'gulpfile.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default', { verbose: true }))
        .pipe(jshint.reporter('fail'));
});

gulp.task('test', shell.task([
    'tape ' + paths.js_test + '* | faucet',
]));

gulp.task('build', function() {
    return browserify(paths.js_source + 'main.jsx')
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest(paths.js_dist));
});

gulp.task('default', ['lint', 'test', 'build']);

gulp.task('pre-commit', ['default']);