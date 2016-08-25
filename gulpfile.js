'use strict';
let gulp = require('gulp');

let del = require('del');
let _ = require('lodash');

let exec = require('child_process').execSync;

let target = {
  clean: [
    'Section 1/Video 1.4/start/node_modules',
    'Section 1/Video 1.4/start/typings',
    'Section 1/Video 1.4/end/node_modules',
    'Section 1/Video 1.4/end/typings',

    'Section 1/Video 1.5/start/node_modules',
    'Section 1/Video 1.5/start/typings',
    'Section 1/Video 1.5/end/node_modules',
    'Section 1/Video 1.5/end/typings',

    'Section 1/Video 1.6/start/node_modules',
    'Section 1/Video 1.6/start/typings',
    'Section 1/Video 1.6/end/node_modules',
    'Section 1/Video 1.6/end/typings',

    'Section 3/Video 3.1/start/node_modules',
    'Section 3/Video 3.1/start/typings',
    'Section 3/Video 3.1/end/node_modules',
    'Section 3/Video 3.1/end/typings',

    'Section 3/Video 3.2/start/node_modules',
    'Section 3/Video 3.2/start/typings',
    'Section 3/Video 3.2/end/node_modules',
    'Section 3/Video 3.2/end/typings',

    'Section 3/Video 3.3/start/node_modules',
    'Section 3/Video 3.3/start/typings',
    'Section 3/Video 3.3/end/node_modules',
    'Section 3/Video 3.3/end/typings',

    'Section 3/Video 3.4/start/node_modules',
    'Section 3/Video 3.4/start/typings',
    'Section 3/Video 3.4/end/node_modules',
    'Section 3/Video 3.4/end/typings',

    'Section 4/Video 4.1/start/node_modules',
    'Section 4/Video 4.1/start/typings',
    'Section 4/Video 4.1/end/node_modules',
    'Section 4/Video 4.1/end/typings',

    'Section 4/Video 4.2/start/node_modules',
    'Section 4/Video 4.2/start/typings',
    'Section 4/Video 4.2/end/node_modules',
    'Section 4/Video 4.2/end/typings',

    'Section 4/Video 4.3/start/node_modules',
    'Section 4/Video 4.3/start/typings',
    'Section 4/Video 4.3/end/node_modules',
    'Section 4/Video 4.3/end/typings',

    'Section 4/Video 4.4/start/node_modules',
    'Section 4/Video 4.4/start/typings',
    'Section 4/Video 4.4/end/node_modules',
    'Section 4/Video 4.4/end/typings',

    'Section 4/Video 4.5/start/node_modules',
    'Section 4/Video 4.5/start/typings',
    'Section 4/Video 4.5/end/node_modules',
    'Section 4/Video 4.5/end/typings',

    'Section 5/Video 5.2/start/node_modules',
    'Section 5/Video 5.2/start/typings',
    'Section 5/Video 5.2/end/node_modules',
    'Section 5/Video 5.2/end/typings',

    'Section 5/Video 5.3/node_modules',
    'Section 5/Video 5.3/typings',

    'Section 6/Video 6.1/end/node_modules',
    'Section 6/Video 6.1/end/typings',

    'Section 6/Video 6.2/start/node_modules',
    'Section 6/Video 6.2/start/typings',
    'Section 6/Video 6.2/end/node_modules',
    'Section 6/Video 6.2/end/typings',

    'Section 6/Video 6.3/start/node_modules',
    'Section 6/Video 6.3/start/typings',
    'Section 6/Video 6.3/end/node_modules',
    'Section 6/Video 6.3/end/typings'
  ],
  masterFiles: [
    'Master Files/gulpfile.js',
    'Master Files/package.json',
    'Master Files/README.md',
    'Master Files/systemjs.config.js',
    'Master Files/tsconfig.json',
    'Master Files/typings.json'
  ],
  masterDirectories: [
    'Section 1/Video 1.4/start',
    'Section 1/Video 1.4/end',
    'Section 1/Video 1.5/start',
    'Section 1/Video 1.5/end',
    'Section 1/Video 1.6/start',
    'Section 1/Video 1.6/end',

    'Section 3/Video 3.1/start',
    'Section 3/Video 3.1/end',
    'Section 3/Video 3.2/start',
    'Section 3/Video 3.2/end',
    'Section 3/Video 3.3/start',
    'Section 3/Video 3.3/end',
    'Section 3/Video 3.4/start',
    'Section 3/Video 3.4/end',

    'Section 4/Video 4.1/start',
    'Section 4/Video 4.1/end',
    'Section 4/Video 4.2/start',
    'Section 4/Video 4.2/end',
    'Section 4/Video 4.3/start',
    'Section 4/Video 4.3/end',
    'Section 4/Video 4.4/start',
    'Section 4/Video 4.4/end',
    'Section 4/Video 4.5/start',
    'Section 4/Video 4.5/end',

    'Section 5/Video 5.2/start',
    'Section 5/Video 5.2/end',
    'Section 5/Video 5.3',

    'Section 6/Video 6.1/end',
    'Section 6/Video 6.2/start',
    'Section 6/Video 6.2/end',
    'Section 6/Video 6.3/start',
    'Section 6/Video 6.3/end'
  ],
  gulpfile: 'Master Files/gulpfile.js',
  ansibleFiles: [
    'Master Files/ansible/**/*'
  ]
};

gulp.task('clean', function () {
  return del(target.clean);
});

gulp.task('copy:master', function () {
  let temp = gulp.src(target.masterFiles);
  _.each(target.masterDirectories, (directory) => {
    temp = temp.pipe(gulp.dest(directory));
  });

  return temp;
});

gulp.task('copy:gulpfile', function () {
  return gulp.src(target.gulpfile)
    .pipe(gulp.dest('Section 2/Video 2.2'));
});

gulp.task('copy:ansible', function () {
  return gulp.src(target.ansibleFiles)
    .pipe(gulp.dest('Section 7/Video 7.3'))
    .pipe(gulp.dest('Section 7/Video 7.4'))
    .pipe(gulp.dest('Section 7/Video 7.5'));
});

gulp.task('npm:install', function (cb) {
  _.each(target.masterDirectories, (directory) => {
    exec(`./npm_install.sh "${directory}"`, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
    });
  });

  cb();
});

gulp.task('default', gulp.parallel('copy:master', 'copy:gulpfile', 'copy:ansible'));
gulp.task('everything', gulp.parallel('copy:master', 'copy:gulpfile', 'copy:ansible', 'npm:install'));
