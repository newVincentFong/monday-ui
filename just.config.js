const { task, logger } = require('just-scripts');

task('build', function() {
  logger.info('do some webpack');
});