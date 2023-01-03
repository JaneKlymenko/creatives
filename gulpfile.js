const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const browserSynk = require('browser-sync').create();

gulp.task('sassToCSS', function(){
  return gulp.src('app/scss/*.scss')
  .pipe(sass({
    errorLogToConsole: true,
    outputStyle: 'compressed'
  }))
  .on('error', console.error.bind(console))
  .pipe(gulp.dest('public/css/'));
});

gulp.task('serve', function(){
  browserSynk.init({
    server: 'public'
  })
  browserSynk.watch('public/**/*.*').on('change', browserSynk.reload);
});

gulp.task('watchFiles', function(){
  gulp.watch('app/scss/*.scss', gulp.series('sassToCSS'));
});

gulp.task('default', gulp.parallel('watchFiles', 'serve'));
