//Sass config
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var fileinclude = require('gulp-file-include');
sass.compiler = require('node-sass');

gulp.task('sass', function() {
    return gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('css')) // './css' orginally
});

// See: https://www.npmjs.com/package/gulp-file-include
gulp.task('fileinclude', function() {
    return gulp.src(['template/**/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: 'partial/'
            // basepath: '@file'
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('default', function() {
    // gulp.watch('sass/*.scss', ['sass']);

    gulp.watch(['sass/*.scss'], function(cb) {
        gulp.task('sass')();
        cb();
    });
});

//    gulp.src('./**/*.scss', {base: './'})
//        .pipe(gulp.dest('./resources/css'))
