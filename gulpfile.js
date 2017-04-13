var gulp = require('gulp');
var uglify = require('gulp-uglify');

//compile js
gulp.task("scripts", function () {
	gulp.src('dev/js/*js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});


//compile css

var uglifycss = require('gulp-uglifycss');
 
gulp.task('css', function () {
  gulp.src('dev/css/styles.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('dist/css'));
});

//watch js

gulp.task("watch", function () {
    gulp.watch("dev/js/*js", ["scripts"]);
});

//watch css

gulp.task("watch", function () {
    gulp.watch("dev/css/*css", ["css"]);
});

//run scripts and css when changes occur

gulp.task("default", ["scripts", "css"]);