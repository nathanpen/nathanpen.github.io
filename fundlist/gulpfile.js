// Include gulp
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var connect = require('gulp-connect');


gulp.task('connect', function() {
    connect.server({
        root: [__dirname],
        port: '8080',
        livereload: true
    });
});


gulp.task('watch', function() {
    gulp.watch(['./app/**/*.html'], ['html']);
    gulp.watch('./app/**/*.js', ['scripts']);
});


gulp.task('html', function () {
    gulp.src('./app/**/*.html')
        .pipe(connect.reload());
});

gulp.task('scripts', function() {
    return gulp.src(['./app/**/*module.js','./app/**/!service*.js','./app/**/!(.module)!(.service)*.js'])
        .pipe(concat('./index.js'))
        .pipe(gulp.dest('./'))
        .pipe(rename('./index.min.js'))
        .pipe(gulp.dest('./'));
});


gulp.task('default', ['scripts','connect', 'watch']);