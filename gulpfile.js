'use strict';

var gulp = require('gulp');
var sass = require('gulp-dart-sass');
var concat = require('gulp-concat');
const { assert } = require('console');
 
gulp.task('pack-js', function () {    
    return gulp.src('assets/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./build/js'));
});

gulp.task ('sass', function () {
    return gulp.src('./assets/scss/*.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./build/css/'))
});

gulp.task('watch', function () {
    gulp.watch('./assets/scss/*.scss', gulp.series('sass'));
    gulp.watch('./assets/js/*.js', gulp.series('pack-js'));
});
 
gulp.task('default', gulp.series('pack-js', 'sass', 'watch'));