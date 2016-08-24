'use strict';

var gulp = require('gulp');
var bundle = require('gulp-bundle-webtask');

gulp.task('default', function() {
  return bundle('./index.js', 'main.js')
    .pipe(gulp.dest('dist'));
});
