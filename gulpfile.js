const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

// Minify CSS
gulp.task('styles', function() {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

// Minify JavaScript
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('script.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

// Copy JSON files
gulp.task('json', function() {
    return gulp.src('src/json/*.json')
        .pipe(gulp.dest('dist/json'))
        .pipe(browserSync.stream());
});

// Serve and watch files for changes
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('src/css/*.css', gulp.series('styles'));
    gulp.watch('src/js/*.js', gulp.series('scripts'));
    gulp.watch('src/json/*.json', gulp.series('json'));
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Default task
gulp.task('default', gulp.parallel('styles', 'scripts', 'json', 'serve'));
