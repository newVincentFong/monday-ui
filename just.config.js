const { task, logger, series, webpackTask } = require('just-scripts');

task('webpack', webpackTask())

task('build', series('webpack'));