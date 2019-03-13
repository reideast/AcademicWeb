//Sass config
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function() {
    gulp.src('sass/*.scss')
    .pipe(sass())
    .on('error', function(err) {
      console.log(err); 
      this.emit('end');
    })
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'))
});

gulp.task('default', function() {
    gulp.watch('sass/*.scss', ['sass']);
});

//    gulp.src('./**/*.scss', {base: './'})
//        .pipe(gulp.dest('./resources/css'))