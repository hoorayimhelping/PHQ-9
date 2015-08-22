var gulp = require('gulp');
var jshint = require('gulp-jshint');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

var js_path = './js/src/';

gulp.task('lint', function() {
    return gulp.src(js_path + '*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default', { verbose: true }))
    .pipe(jshint.reporter('fail'));
});

gulp.task('build', function() {
    return browserify(js_path + 'main.js')
        .bundle()
        .pipe(source('../app.js'))
        .pipe(gulp.dest(js_path))
});

gulp.task('default', ['lint', 'build'])

gulp.task('pre-commit', ['default']);