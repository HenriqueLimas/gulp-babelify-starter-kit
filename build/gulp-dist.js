'use strict';

require('./gulp-scripts');
require('./gulp-styles');
require('./gulp-templates');
require('./gulp-clean');
require('./gulp-test');

let gulp = require('gulp');
let runSequence = require('run-sequence');

gulp.task('dist:dev', (done) => {
  runSequence(
    ['clean'],
    ['scripts'],
    ['styles'],
    ['html'],
    done
  );
});

module.exports = dist;

function dist(done) {
  runSequence(
    ['test:ci'],
    ['clean'],
    ['scripts'],
    ['styles'],
    ['html'],
    done
  );
}