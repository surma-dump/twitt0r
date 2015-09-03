import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import pkg from './package.json';

var $ = gulpLoadPlugins();

gulp.task('test', () => {
  console.log('hai' + pkg.version);
});

gulp.task('default', ['test']);
