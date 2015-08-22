var gulp = require('gulp');

var jshint = require('gulp-jshint');

var js_src = './js/.*js';

gulp.task('lint', function() {
    console.log('lint!');

    return gulp.src(js_src)
    .pipe(jshint());
});

gulp.task('pre-commit', ['lint']);