var gulp = require('gulp');
var debug = require('gulp-debug');
var rename = require('gulp-rename');

gulp.src('src/assets/products/*')
    .pipe(debug({title: 'copy-images-products:'}))
    .pipe(rename(function (path) {path.dirname = "";}))
    .pipe(gulp.dest('dist/browser/assets/products'))