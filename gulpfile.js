// download gulp
const gulp = require('gulp');

// compiler scss to css
const sass = require('gulp-sass');

// live server 
const browserSync = require('Browser-sync').create();

// combine files into one
const concat = require('gulp-concat');

// minimize js (libs)
const uglify = require('gulp-uglify');

// minimize css (libs)
const cssmin = require('gulp-cssmin');


function script() {
  return gulp.src([
    'node_modules/slick-carousel/slick/slick.min.js',
    'node_modules/rateyo/src/jquery.rateyo.js',
  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./app/js'))
};

function stylemin() {
  return gulp.src([
    'node_modules/slick-carousel/slick/slick.css',
    'node_modules/slick-carousel/slick/slick-theme.css',
    'node_modules/rateyo/src/jquery.rateyo.css',
  ])
    .pipe(concat('libs.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./app/css'))
};



// compile scss into css
function style() {
  // 1. where is my scss file
  return gulp.src('./app/scss/**/*.scss')
  // 2. pass that file through sass compiler
    .pipe(sass().on('error', sass.logError))
  // 3. where do i save the compiled css?
    .pipe(gulp.dest('./app/css'))
  // 4. stream changes to all browser
    .pipe(browserSync.stream());
};

//settings for browser-sync
function watch() {
  browserSync.init({
    server: {
      baseDir: './app/'
    }
  });
  gulp.watch('./app/scss/**/*.scss', style);
  gulp.watch('./app/*html').on('change', browserSync.reload);
  gulp.watch('./app/js/*.js').on('change', browserSync.reload);
};

exports.stylemin = stylemin;
exports.script = script;
exports.style = style;
exports.watch = watch;