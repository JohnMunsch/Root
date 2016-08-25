'use strict';
let gulp = require('gulp');

let del = require('del');

let historyApiFallback = require('connect-history-api-fallback');
let browserSync = require('browser-sync').create();

let ts = require('gulp-typescript');
let sourcemaps = require('gulp-sourcemaps');

let Server = require('karma').Server;
let remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

let target = {
  typescriptSource: [ './app/**/*.ts' ],
  typescriptDest: './dist/app',
  typescriptProject: './tsconfig.json',
  otherSource: [ './*.css', './app/**/*.html' ],

  sourceRoot: '../../app',
  dist: './dist/',
  coverage: './coverage/'
};

gulp.task('clean', function () {
  return del([
    target.dist,
    target.coverage
  ]);
});

gulp.task('scripts', function () {
  var tsProject = ts.createProject(target.typescriptProject);

  // instead of gulp.src(...)
  var tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));

  return tsResult.js
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: target.sourceRoot}))
    .pipe(gulp.dest(target.typescriptDest));
});

gulp.task('other', function () {
  return gulp.src(target.otherSource, { base: './' })
    .pipe(gulp.dest(target.dist));
});

gulp.task('karma', function (cb) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, cb).start();
});

gulp.task('remap-istanbul', function () {
  return gulp.src(__dirname + '/coverage/coverage-final.json')
    .pipe(remapIstanbul({
      basePath: '',
      reports: {
        'html': 'coverage'
      }
    }));
});

gulp.task('test:unit', gulp.series('karma', 'remap-istanbul'));

gulp.task('browser-sync', function (cb) {
  // The historyApiFallback is there because we are doing a single page app and index.html
  // needs to be served up for every URL.
  browserSync.init({
    server: {
      baseDir: '.',
      middleware: [ historyApiFallback() ]
    }
  });

  cb();
});

gulp.task('reload', function (cb) {
  browserSync.reload();
  cb();
});

// This watches sets of files and when they change, makes sure they get transpiled or copied and then a browser reload
// happens.
gulp.task('watch', function () {
  gulp.watch(target.typescriptSource, gulp.series('scripts', 'reload'));
  gulp.watch(target.otherSource, gulp.series('other', 'reload'));
});

gulp.task('watch:test', function () {
  gulp.watch(target.typescriptSource, gulp.series('scripts', 'reload', 'test:unit'));
  gulp.watch(target.otherSource, gulp.series('other', 'reload', 'test:unit'));
});

// gulp.task('travis', gulp.series(gulp.parallel('scripts', 'other'), 'test:unit'));

gulp.task('default', gulp.series('clean', gulp.parallel('scripts', 'other'), 'browser-sync', 'watch'));
gulp.task('default:test', gulp.series('clean', gulp.parallel('scripts', 'other'), 'test:unit', 'browser-sync', 'watch:test'));