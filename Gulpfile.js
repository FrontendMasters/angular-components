var gulp    = require('gulp');
var sync    = require('run-sequence');
var browser = require('browser-sync');
var webpack = require('webpack-stream');
var todo    = require('gulp-todoist');

/*
map of paths for using with the tasks below
 */
var paths = {
  entry: 'client/app/app.js',
  app: ['client/app/**/*.{js,styl,html}'],
  js: 'client/app/**/*!(.spec.js).js',
  styl: 'client/app/**/*.styl',
  toCopy: ['client/index.html'],
  html: ['client/index.html', 'client/app/**/*.html'],
  dest: 'dist'
};

gulp.task('todo', function() {
  return gulp.src(paths.js)
    .pipe(todo({silent: false, verbose: true}));
});

gulp.task('build', ['todo'], function() {
  //TODO
  /*
  fill this task out to take in entry file
  and build using the webpack plugin.
  the plugin takes the webpack.config as an arg.
  be sure to stream the result to the destination path
   */
});

gulp.task('serve', function() {
  browser({
    port: process.env.PORT || 4500,
    open: false,
    ghostMode: false,
    server: {
      baseDir: 'dist'
    }
  });
});

/*
simple task to copy over needed files to dist
 */
gulp.task('copy', function() {
  return gulp.src(paths.toCopy, { base: 'client' })
    .pipe(gulp.dest(paths.dest));
});

/*
task to watch files for changes and call build and copy tasks
 */
gulp.task('watch', function() {
  gulp.watch(paths.app, ['build', browser.reload]);
  gulp.watch(paths.toCopy, ['copy']);
});

gulp.task('default', function(done) {
  sync('build', 'copy', 'serve', 'watch', done)
});
