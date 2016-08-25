'use strict';

var gulp = require('gulp');
var bundle = require('gulp-bundle-webtask');

gulp.task('default', function() {
  return gulp.src('index.js')
    .pipe(bundle('main.js'))
    .pipe(gulp.dest('dist'));
});
