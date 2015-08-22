var gulp = require('gulp');

var jshint = require('gulp-jshint');

var source = require('vinyl-source-stream');

var browserify = require('browserify');

var js_path = './js/';

gulp.task('lint', function() {
    console.log('lint!');

    return gulp.src(js_path + '.js*')
    .pipe(jshint());
});

gulp.task('build', function() {
    console.log('build');

    return browserify(js_path + 'main.js')
        .bundle()
        .pipe(source('built.js'))
        .pipe(gulp.dest(js_path))
});

gulp.task('default', ['lint'])

gulp.task('pre-commit', ['default']);