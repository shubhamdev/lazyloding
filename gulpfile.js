var gulp = require('gulp'), connect = require('gulp-connect');

gulp.task('serve', function () {
  connect.server({
    port: 3000,
    root: 'app'
  });
});

