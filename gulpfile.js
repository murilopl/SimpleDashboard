var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var htmlhint = require("gulp-htmlhint");

// create a TASK to compile LESS into CSS using gulp-less
gulp.task('less', function() {
   gulp.src(['resources/less/app.less'])
   .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
   .pipe(gulp.dest('./resources/css/'))
   .pipe(reload({ stream: true }));
});

gulp.task('htmlhint', function() {
  gulp.src("index.html")
  .pipe(htmlhint())
  .pipe(reload({ stream: true }));
});

gulp.task('serve', ['less', 'htmlhint'], function() {
  browserSync({
    server: {
      baseDir: ''
    }
  });

  gulp.watch(['**/**/*.html', '**/**/*.js'], ['htmlhint']);
  gulp.watch(['resources/less/*.less', 'resources/less/**/**/*.less'], ['less']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['serve']);
