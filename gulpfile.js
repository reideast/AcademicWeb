//Sass config
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
sass.compiler = require('node-sass');

gulp.task('sass', function() {
    return gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('css')) // './css' orginally
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
