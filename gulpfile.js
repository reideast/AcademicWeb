//Sass config
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var fileinclude = require('gulp-file-include');
sass.compiler = require('node-sass');

// Any *.scss files within the /sass/ directory will be compiled, combined, and minified into the /css dir
// usage: `gulp sass`
gulp.task('sass', function() {
    return gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('css')) // './css' orginally
});

// Any *.html files within the /template/ dir will be compiled into / as static, basic HTML
// Copy example in template/model.html.txt
// For templating details, see: https://www.npmjs.com/package/gulp-file-include
// usage: `gulp template-html`
gulp.task('template-html', function() {
    return gulp.src(['template/**/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: 'partial/'
        }))
        .pipe(gulp.dest('./'));
});

// Auto compile SASS and HTML templates
// usage: `gulp`
gulp.task('default', function() {
    gulp.watch(['sass/*.scss'], gulp.task('sass'));

    gulp.watch(['template/**/*.html', 'partial/**/*.html'], gulp.task('template-html'));
});
