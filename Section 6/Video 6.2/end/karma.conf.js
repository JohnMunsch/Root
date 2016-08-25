module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // Polyfills.
      'node_modules/core-js/client/shim.min.js',

      'node_modules/reflect-metadata/Reflect.js',

      // System.js for module loading
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',

      // Zone.js dependencies
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      'node_modules/d3/build/d3.js',

      // RxJs.
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      { pattern: 'karma-test-shim.js', included: true, watched: true },

      // paths loaded via module imports
      // Angular itself
      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: true },
      { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: true },

      // Our built application code
      { pattern: 'dist/**/*.js', included: false, watched: true },

      // paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      { pattern: './*.html', included: false, watched: true },
      { pattern: './*.css', included: false, watched: true },

      // paths to support debugging with source maps in dev tools
      { pattern: 'app/**/*.ts', included: false, watched: false }
    ],

    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      "/app/": "/base/dist/app/"
    },

    // Karma plugins loaded
    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-phantomjs-launcher'
    ],

    // Coverage reporter generates the coverage
    reporters: ['dots', 'coverage'],

    // Use Istanbul to instrument all of the original source files. Ignore the
    // unit test code because we're not trying to assess how well it's covered
    // by unit tests.
    preprocessors: {
      'dist/**/!(*spec).js': ['coverage']
    },

    // Often you would see the coverage report put out in HTML format here or
    // something like junit which could be imported into Jenkins. However, we
    // want to process that coverage information later because it's coverage for
    // our generated JavaScript rather than coverage information for our
    // original TypeScript code. We'll use another library to do a source
    // mapping back to our original lines.
    coverageReporter: {
      reporters:[
        {type: 'json', subdir: '.', file: 'coverage-final.json'}
      ]
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};