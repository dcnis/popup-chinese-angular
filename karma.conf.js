// Karma configuration
// Generated on Sun Nov 12 2023 09:15:31 GMT+0100 (Central European Standard Time)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'build/js/**/*.js',
      'build/tests/**/test_*.js'
    ],
    exclude: [
    ],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Firefox'],
    singleRun: false,
    concurrency: Infinity
  })
}
