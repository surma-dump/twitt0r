import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import pkg from './package.json';

var $ = gulpLoadPlugins();
var bs = browserSync.create();

gulp.task('serve', () => {
  bs.init({
    server: {
      baseDir: 'app',
      routes: {
        '/bower_components': 'bower_components',
        '/elements': 'elements',
        '/test': 'test'
      },
      directory: true
    },
    reloadOnRestart: true,
    open: false
  });
});
