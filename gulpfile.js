const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('inject-global', function () {
    return gulp.src(['dist/bundle.js', 'src/exporter.js'])
        .pipe(concat("j4ts-swingundo.js"))
        .pipe(gulp.dest('dist'));
});